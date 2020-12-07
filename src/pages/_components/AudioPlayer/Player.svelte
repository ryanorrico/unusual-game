<script>
  // 	import {onDestroy} from 'svelte'
  import { player, playlist, index, volume, playStatus } from "./player-lib";
  import RangeSlider from "svelte-range-slider-pips";

  let track;
  let list;
  $: volumes = [$volume];
  $: volume.set(volumes[0]);

  $: time = ($playStatus, $playlist[$index]?.howl?._seek);
  $: duration = ($playStatus, $playlist[$index]?.howl?._duration);
  $: status = $playStatus;
  $: title = $playlist[$index].title;
  $: artist = $playlist[$index].artist;
  // 	$: time = ($playlist[$index]?.seek)
  // 	$: duration = ($playStatus, $playlist[$index]?.duration)

  // 	onDestroy(()=>{
  // 		// Might not want this in sapper app. This is needed in repl so we do not get multiple players running simutaniously after edits
  // 		player.stop()
  // 	})

  // 	$: console.log($playlist)

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";

    let minutes = Math.floor(seconds / 60) || 0;
    seconds = Math.floor(seconds % 60) || 0;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }
</script>

<style>
  button {
    margin: 0;
    width: 40px;
    height: 40px;
    padding: 8px;
    /* padding: 0; */

    /* height: 2rem; */

    background: black;
    border: 1px solid #aaa;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button svg {
    width: 70%;
    fill: white;
  }
  /* 	input[type=range] {
            margin: 0;
            padding: 0;
        } */

  /* .controls {
    margin: 0;
    padding: 0.5rem;
    height: min-content;
    background: white;
    border: 1px solid #aaa;
    border-radius: 8px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(8, 1fr);
    grid-auto-flow: column;
    align-items: center;
    justify-items: center;
  }

  #track {
    padding: 0 0 0 0.5rem;
    grid-row: 1 / 2;
    grid-column: 1 / 5;
    justify-self: start;
  } */

  .play-status {
    padding: 0 0.5rem 0 0;
    grid-row: 1 / 2;
    grid-column: 5 / 9;
    justify-self: end;
  }

  /* 	#playBtn, #pauseBtn, #prevBtn, #nextBtn, #volume-label, #volume {
            grid-row: 2 / 3;
        } */

  /* 	.play-pause-button, #prevBtn, #nextBtn, #volume-label, #volume {
            grid-row: 2 / 3;
        } */
  /* 
  #volume-label {
    grid-column: 6 / 7;
  }

  #time,
  #progress,
  #duration {
    grid-row: 3 / 4;
  }

  #time {
    grid-column: 1 / 2;
  }

  #progress {
    grid-column: 2 / 8;
    justify-self: stretch;
  } */

  #duration {
    grid-column: 8 / 9;
  }

  .playlist-container {
    margin: 0;
    padding: 1rem;
    background: #eee;
    border: 1px solid #aaa;
    border-radius: 8px;
  }

  .playlist {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 8rem;
    background: #ccc;
    border: 1px solid #aaa;
    border-radius: 8px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    overflow-y: scroll;
    box-shadow: 0px 0px 4px inset hsla(0, 0%, 0%, 0.1);
  }

  #list {
    margin: 0;
    padding: 0.5rem;
    display: grid;
    row-gap: 0.5rem;
  }

  button.track {
    margin: 0;
    padding: 0.5rem;
    width: 100%;
    line-height: 1;
    background: #eee;
    border: 1px solid #aaa;
    border-radius: 4px;
    display: flex;
    justify-content: start;
  }
  .selected {
    background-color: yellow !important;
  }

  .volume {
    grid-row: 2 / 3;
    grid-column: 7 / 9;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
  }
</style>

<!-- Controls -->
<div class="controls mt-20 p-2 bg-gray-800 w-full">
  <div class="flex">
    <p id="track" bind:this={track}>{title}</p>
    <p class="play-status">{status}</p>
  </div>
  <!-- 	<button class='play-pause-button' on:click={() => player.togglePlayPause()}>
            {status === 'playing' ? 'Pause' : 'Play'}
        </button> -->
  <div class="flex justify-between">
    <div class="flex space-x-1">
      <button class="" id="playBtn" on:click={() => player.play()}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 73.8 82.7">
          <g id="Regular-M_1_" transform="matrix(1 0 0 1 1406.07 1126)">
            <path
              d="M-1400.2-1043.3c2,0,3.6-0.8,5.6-1.9l56.9-32.9c4.1-2.4,5.5-4,5.5-6.5s-1.4-4.2-5.5-6.5l-56.9-33c-2-1.1-3.6-1.9-5.6-1.9
              c-3.6,0-5.9,2.7-5.9,7v68.7C-1406.1-1046.1-1403.8-1043.3-1400.2-1043.3z" />
          </g>
        </svg>
      </button>
      <button id="pauseBtn" on:click={() => player.pause()}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 59.6 79.5">
          <g id="Regular-M_1_" transform="matrix(1 0 0 1 1407.61 1126)">
            <path
              d="M-1401.1-1046.5h11.1c4.2,0,6.5-2.2,6.5-6.5v-66.5c0-4.4-2.2-6.5-6.5-6.5h-11.1c-4.2,0-6.5,2.2-6.5,6.5v66.5
              C-1407.6-1048.7-1405.4-1046.5-1401.1-1046.5z M-1365.6-1046.5h11.1c4.3,0,6.5-2.2,6.5-6.5v-66.5c0-4.4-2.2-6.5-6.5-6.5h-11.1
              c-4.3,0-6.5,2.2-6.5,6.5v66.5C-1372.2-1048.7-1369.9-1046.5-1365.6-1046.5z" />
          </g>
        </svg>
      </button>
      <button id="stopBtn" on:click={() => player.stop()}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 79.5 79.6">
          <defs />
          <g id="Regular-M_1_" transform="matrix(1 0 0 1 1397.62 1126)">
            <path
              d="M-1397.6-1057.2c0,6.8,4.1,10.8,10.9,10.8h57.7c6.9,0,10.9-4,10.9-10.8v-58c0-6.8-4.1-10.8-10.9-10.8h-57.7
              c-6.8,0-10.9,4-10.9,10.8V-1057.2z" />
          </g>
        </svg>
      </button>
    </div>
    <!-- <button id="prevBtn" on:click={() => player.skip('prev')}>Prev</button> -->
    <!-- <button id="nextBtn" on:click={() => player.skip('next')}>Next</button> -->
    <div class="flex flex-1">
      <p id="volume-label">Volume</p>

      <!-- 	<input class='volume' type='range' bind:value={$volume} min={0} max={1} step={0.01}/> -->

      <div class="volume">
        <RangeSlider
          range="min"
          min={0}
          max={1}
          step={0.01}
          bind:values={volumes}
          float
          springValues={{ stiffness: 1, damping: 1 }}
          formatter={(v) => Math.round(v * 100)} />
      </div>
    </div>
  </div>

  <div id="time" bind:this={time}>{player.formatTime(time)}</div>
  <!-- 	<input id='progress' type='range' bind:value={time} min={0} max={duration} step={0.001}/> -->

  <div class="flex items-center">
    <div class="flex-1">
      <RangeSlider
        range="min"
        min={0}
        max={duration}
        step={1}
        values={[time]}
        float
        springValues={{ stiffness: 1, damping: 1 }}
        formatter={(v) => formatTime(v)} />
    </div>
    <div id="duration" bind:this={duration}>{player.formatTime(duration)}</div>
  </div>
</div>
<!-- <div id="progress" /> -->

<!-- Playlist -->
<!-- <div class="playlist-container">
  <div class="playlist">
    <div id="list" bind:this={list}>
      {#each $playlist as track, trackIndex (trackIndex)}
        <button
          class="track"
          class:selected={$index === trackIndex}
          on:click={() => player.skipTo(player.playlist.indexOf(track))}>
          {track.title}
        </button>
      {/each}
    </div>
  </div>
</div> -->
