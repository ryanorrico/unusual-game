import howler from "howler";
const Howl = howler.Howl;
import { writable, get } from "svelte/store";

async function asleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// The playlist
export const playlist = writable([
  {
    id: "uuid1",
    title: "The Blue Danube Waltz",
    file: "https://sveltejs.github.io/assets/music/strauss.mp3",
    // // Each song has its own howl, for cross-fade on track switching... probably
    howl: null,
  },
]);

// Simple function to add a track to the playlist
export const addTrack = (track) => {
  playlist.update((v) => [...v, track]);
};

// The currently playing song index. Used for changing tracks while paused?
export const index = writable(0);
export const playStatus = writable("stopped");

// The global volume
export const volume = writable(0.5);

export class Player {
  // Easy access to the volume and index stores
  get volume() {
    return get(this.volumeStore);
  }

  set volume(newVolume) {
    this.volumeStore.set(newVolume);
  }

  get index() {
    return get(this.indexStore);
  }

  set index(newIndex) {
    this.indexStore.set(newIndex);
  }

  get playlist() {
    return get(this.playlistStore);
  }

  set playStatus(newStatus) {
    this.playStatusStore.set(newStatus);
  }

  get playStatus() {
    return get(this.playStatusStore);
  }

  constructor(playlist, index, volume, playStatus) {
    this.playlistStore = playlist;
    this.indexStore = index;
    this.volumeStore = volume;
    this.playStatusStore = playStatus;

    // Update Howler's volume whenever the volume store changes.
    this.volumeStore.subscribe((newVolume) => {
      Howler.volume(newVolume);
    });
    Howler.volume(get(this.volumeStore));
  }

  async play(index) {
    let self = this;
    let sound;

    index = typeof index === "number" ? index : self.index;
    let data = this.playlist[index];

    if (data.howl) {
      sound = data.howl;
    } else {
      sound = data.howl = new Howl({
        src: [data.file],
        html5: true,
        onplay: function () {
          self.playStatus = "playing";
          duration.innerHTML = self.formatTime(Math.round(sound.duration()));
          requestAnimationFrame(self.step.bind(self));
          time.innerHTML = self.formatTime(Math.round(sound.seek()));
        },
        onload: function () {
          self.playStatus = "loaded";
        },
        onend: function () {
          self.playStatus = "ended";
          self.skip("next");
        },
        onpause: function () {
          self.playStatus = "paused";
        },
        onstop: function () {
          self.playStatus = "stopped";
        },
        onseek: function () {
          requestAnimationFrame(self.step.bind(self));
        },
      });
    }

    const oldSound = this.currentSong?.howl;
    this.index = index;
    // Fade out the old song, if it exists
    const oldSoundFader =
      sound !== oldSound && oldSound
        ? this.fadeOut(oldSound).then((oldSound) => oldSound?.stop())
        : Promise.resolve();
    await oldSoundFader;

    // Play the new song, optionally fading.
    this.fadeIn(sound, 0);
    sound.play();
  }

  get currentSong() {
    return this.playlist[this.index];
  }

  async fadeOut(howl, ms = 100) {
    howl?.fade(1, 0, ms);
    await asleep(ms);
  }
  async fadeIn(howl, ms = 100) {
    howl?.fade(0, 1, ms);
    await asleep(ms);
  }

  pause() {
    let self = this;
    let sound = this.currentSong.howl;
    sound.pause();
  }

  stop() {
    let self = this;
    let sound = this.currentSong.howl;
    sound?.stop();
  }

  togglePlayPause() {
    let self = this;
    let sound = this.currentSong.howl;
    if (self.playStatus === null) {
      sound.play();
    } else if (self.playStatus === "paused") {
      sound.play();
    } else if (self.playStatus === "stopped") {
      sound.play();
    } else if (self.playStatus === "playing") {
      sound.pause();
    }
  }

  skip(direction) {
    let self = this;
    let index = 0;
    if (direction === "prev") {
      index = self.index - 1;
      if (index < 0) {
        index = self.playlist.length - 1;
      }
    } else {
      index = self.index + 1;
      if (index >= self.playlist.length) {
        index = 0;
      }
    }
    self.skipTo(index);
  }

  skipTo(index) {
    let self = this;
    self.play(index);
  }

  seek(per) {
    let self = this;
    let sound = this.currentSong.howl;
    if (sound.playing()) {
      sound.seek(sound.duration() * per);
    }
  }

  // The step called within requestAnimationFrame to update the playback position.
  step() {
    let self = this;
    // Get the Howl we want to manipulate.
    let sound = this.currentSong.howl;
    if (sound) {
      // Determine our current seek position.
      let seek = sound.seek() || 0;
      time.innerHTML = self.formatTime(Math.round(seek));
      // If the sound is still playing, continue stepping.
      if (sound.playing()) {
        requestAnimationFrame(self.step.bind(self));
      }
    }
  }

  formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";

    let minutes = Math.floor(seconds / 60) || 0;
    seconds = Math.floor(seconds % 60) || 0;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }
}

export const player = new Player(playlist, index, volume, playStatus);
