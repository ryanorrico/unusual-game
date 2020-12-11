<script>
  import VideoPlayer from "../Sidebar/VideoPlayer.svelte";

  export let item;
</script>

{#if item.type === 'video'}
  <!-- <div class="text-white text-4xl">{JSON.stringify(item)} {item.videoId}</div> -->
  <VideoPlayer videoId={item.vimeo_id} />
{/if}
