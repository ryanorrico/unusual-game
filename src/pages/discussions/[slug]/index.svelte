<script>
  import { currentDiscussion, user } from "../../../stores";

  import { onMount } from "svelte";

  import Api from "../../../utils/api";

  import Discussion from "../../_components/Discussions/Discussion.svelte";
  import { ready, params } from "@roxi/routify";
  // onMount(() => {
  //   fetchDiscussion();
  // });
  // if (window.routify.inBrowser) {
  // }

  async function fetchDiscussion(slug) {
    if (!window.routify.inBrowser) {
      return;
    } else {
      $currentDiscussion = await Api.get(`/discussions/${slug}`);
      $ready();
    }
  }
  $: fetchDiscussion($params.slug);
</script>

{#if $currentDiscussion}
  <Discussion {currentDiscussion} {user} />
{/if}
