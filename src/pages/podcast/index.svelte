<script>
  import LoadingSpinner from "../_components/LoadingSpinner.svelte";
  import buzzsproutAPI from "./buzzsprout";
  import { ready } from "@roxi/routify";
  import { fade } from "svelte/transition";
  let podcasts;
  if (window.routify.inBrowser) {
    const fetchPodcasts = () => {
      fetch(
        `https://www.buzzsprout.com/api/${buzzsproutAPI.podcastId}/episodes.json`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            Authorization: `Token token=${buzzsproutAPI.token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          podcasts = data.filter(
            (podcast) =>
              !podcast.title.includes(
                "Premium Group Training",
                "Rabbit Hole 2:"
              )
          );
        })
        .then($ready());
      // .catch((errors) => console.log("errors :>> ", errors));
    };
    // async function fetchPodcasts() {
    //   const response = await fetch(
    //     `https://www.buzzsprout.com/api/${buzzsproutAPI.podcastId}/episodes.json`,
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         Authorization: `Token token=${buzzsproutAPI.token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const data = await response.json();
    //   podcasts = data.filter(
    //     (podcast) =>
    //       !podcast.title.includes("Premium Group Training", "Rabbit Hole 2:")
    //   );
    //   $ready();
    // }
    $: fetchPodcasts();
  }
</script>

<style>
  main {
    height: 100%;
    overflow-y: auto;
  }
  ul {
    color: white;
  }
  img {
    width: 100%;
  }
</style>

<main in:fade={{ delay: 100, duration: 500 }} class="px-2">
  {#if podcasts}
    <ul class="sm:max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
      {#each podcasts as podcast}
        <li>
          <a href="/podcast/{podcast.id}" class="flex flex-col">
            <div class="rounded-2xl overflow-hidden flex-shrink-0">
              <img src={podcast.artwork_url} />
            </div>
            <div class="p-2">
              <p class="text-sm">{podcast.title}</p>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="h-screen w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  {/if}
</main>
