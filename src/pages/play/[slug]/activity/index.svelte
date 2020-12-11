<script>
  import { params } from "@roxi/routify";
  import { tasksStore } from "../../../../stores";

  import Api from "../../../../utils/api";
  import GameFeedItem from "../../../_components/Games/GameFeedItem.svelte";

  import { gameFeedStore } from "../../game-store";

  async function fetchFeed() {
    const data = await Api.get(`/games/${$params.slug}/feed`);
    $gameFeedStore = data;
  }
  $: fetchFeed();
</script>

{#if $gameFeedStore}
  <ul>
    {#each $gameFeedStore.moves as move}
      <GameFeedItem {move} />
    {/each}
  </ul>
{/if}
