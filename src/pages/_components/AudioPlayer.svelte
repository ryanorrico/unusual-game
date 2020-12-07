<!--<script context="module" ✂prettier:content✂="CiAgbGV0IGN1cnJlbnQ7Cg==" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script>-->
<script>
  export let src;
  export let title;
  export let composer;
  export let performer;
  import { podcastStore, podcastPlaying } from "../../stores";

  let audio;
  let paused = true;

  function stopOthers() {
    if (current && current !== audio) current.pause();
    current = audio;
  }
</script>

<style>
  article {
    /* max-width: 800px; */
    width: 100%;
    padding: 8px;

    background: white;
    /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5); */
    /* class="p-2 w-3/4  fixed bottom-14 shadow-lg bg-blue-900  */
  }
  h2,
  p {
    margin: 0 0 0.3em 0;
  }
  audio {
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.4);
    border-radius: 90px;
    transform: scale(1.05);
    background-color: transparent;
  }
  .playing {
    color: #ff3e00;
  }
</style>

<audio
  bind:this={audio}
  bind:paused
  on:play={($podcastStore.playing = true)}
  controls
  {src} />
