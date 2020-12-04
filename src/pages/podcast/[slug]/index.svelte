<script>
  import { params, ready } from "@roxi/routify";
  import AudioControls from "../../_components/AudioControls.svelte";
  import AudioPlayer from "../../_components/AudioPlayer.svelte";
  import LoadingSpinner from "../../_components/LoadingSpinner.svelte";
  import buzzsproutAPI from "../buzzsprout";
  import { podcastStore } from "../../../stores";
  import { onDestroy } from "svelte";
  async function fetchPodcastEpisode() {
    const response = await fetch(
      `https://www.buzzsprout.com/api/${buzzsproutAPI.podcastId}/episodes/${$params.slug}.json`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: `Token token=${buzzsproutAPI.token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    $podcastStore = data;
    $podcastStore.playerOpen = true;
    $ready();
  }
  $: fetchPodcastEpisode($params.slug);

  // onDestroy(()=> {$podcastStore.playerOpen = false)});
</script>

<style>
  h1 {
    color: white;
  }
  div {
    color: lightgray;
  }
</style>

<!-- <div class="text-white text-4xl">{$params.slug}</div> -->

{#if $podcastStore && $podcastStore.id == $params.slug}
  <!-- <div class="text-white">{JSON.stringify($podcastStore)}</div> -->
  <img src={$podcastStore.artwork_url} />

  <div class="relative pt-10 pb-20 px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span
          class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">{$podcastStore.artist}</span>
        <span
          class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight  sm:text-4xl">{$podcastStore.title}</span>
      </h1>
      <p class="mt-8 text-xl text-gray-500 leading-8">
        <!-- Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
        arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
        feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
        Eleifend egestas fringilla sapien. -->
      </p>
      {@html $podcastStore.description}
    </div>
  </div>

  <!-- <AudioControls src={podcast.src} display={true} /> -->
  <!-- <AudioPlayer
    src={$podcastStore.audio_url}
    title={$podcastStore.title}
    composer="Gustav Holst"
    performer="USAF Heritage of America Band" /> -->
{:else}
  <div class="h-screen w-full flex items-center justify-center">
    <LoadingSpinner />
  </div>
{/if}
