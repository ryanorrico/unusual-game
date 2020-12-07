<script>
  // Define a new tracks information
  // Add UUIDs to each track to keep track of it in the playlist
  // Add a play/loading/pause button
  // Add the track to the global playlist/history using push() maybe?
  // play the track when the play button is pressed

  import { addTrack, player, index, playlist, playStatus } from "./player-lib";
  import { uuid } from "./uuid";

  $: status = $playStatus;

  export let title = "";
  export let artist = "";
  export let file = "";
  export let howl = null;
  export const id = uuid();

  // 	{(id === currentid && status === 'playing') ? 'Pause' : 'Play'}
</script>

<style>
  .player {
    margin: 0;
    padding: 0.5rem;
    height: min-content;
    background: #eee;
    border: 1px solid #aaa;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr 4fr 1fr 4fr;
    column-gap: 1rem;
    grid-auto-flow: column;
    align-items: center;
    justify-items: start;
  }

  button {
    margin: 0;
    padding: 0;
    width: 4rem;
    height: 2rem;
    border-radius: 4px;
    justify-self: start;
    background: #fff;
    border: 1px solid #aaa;
  }

  p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
</style>

<div class="player" id="trackId">
  <!-- play only button -->
  <button
    class="play-button"
    on:click={() => {
      addTrack({ id, title, file, howl });
      player.play($playlist.length - 1);
    }}>
    {status === 'playing' ? 'Pause' : 'Play'}
  </button>

  <!-- play/pause/loading button -->
  <!-- 	<button
		class='play-button'
		on:click={() => {
			addTrack({id, title, file, howl});
			player.togglePlayPause($playlist.length - 1);
		}}
	>
		{(status === 'playing') ? 'Pause' : 'Play'}
	</button> -->

  <p><strong>Title</strong></p>
  <p class="title">{title}</p>
  <p><strong>Artist</strong></p>
  <p class="artist">{artist}</p>
</div>
