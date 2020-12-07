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
  $: fetchDiscussion();
  // }

  async function fetchDiscussion() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      $currentDiscussion = await Api.get(`/discussions/${$params.slug}`);
      $ready();
    }
  }
</script>

{#if $currentDiscussion}
  <Discussion {currentDiscussion} {user} />
{/if}
