<script>
  // import Player from './Player.svelte'
  // import Track from './Track.svelte'
  import Track from "../_components/AudioPlayer/Track.svelte";
  import Player from "../_components/AudioPlayer/Player.svelte";
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .container {
    margin: 0;
    padding: 1rem;
    display: grid;
    gap: 1rem;
  }

  .space {
    display: block;
    width: 100%;
    height: 1px;
  }

  .tracks {
    margin: 0;
    padding: 0.5rem;
    height: 8rem;
    background: #ccc;
    overflow-y: scroll;
    display: grid;
    row-gap: 0.5rem;
    border: 1px solid #aaa;
    border-radius: 8px;
    box-shadow: 0px 0px 4px inset hsla(0, 0%, 0%, 0.1);
  }

  .tracks-container {
    margin: 0;
    padding: 1rem;
    border: 1px solid #aaa;
    background: #eee;
    border-radius: 12px;
  }
</style>

<div class="container">
  <Player />

  <!-- <div class="tracks-container">
    <div class="tracks">
      <Track
        title="Mars, the Bringer of War"
        artist="Holst"
        file="https://sveltejs.github.io/assets/music/holst.mp3" />
      <Track
        title="Gymnopédie no. 1"
        artist="Satie"
        file="https://sveltejs.github.io/assets/music/satie.mp3" />
      <Track
        title="Symphony no. 5 - I"
        artist="Beethoven"
        file="https://sveltejs.github.io/assets/music/beethoven.mp3" />
      <Track
        title="Requiem in D Minor - III"
        artist="Mozart"
        file="https://sveltejs.github.io/assets/music/mozart.mp3" />
      <div class="space" />
    </div>
  </div> -->
</div>
