<script>
  // import { send, receive } from "../../transitions/crossfade";
  import { fade } from "svelte/transition";
  // import posts from "./posts.js";
  import envURL from "../../env-url";
  import PostCard from "./_components/PostCard.svelte";
  import { ready } from "@roxi/routify";
  import Api from "../../utils/api";
  import LoadingSpinner from "../_components/LoadingSpinner.svelte";

  // let series = {};

  // let data = {};
  let posts;
  if (window.routify.inBrowser) {
    const fetchPosts = () => {
      fetch(`${envURL}/posts`)
        .then((response) => response.json())
        .then((json) => {
          posts = json;
        })
        .then($ready());
    };
    $: fetchPosts();
  }
</script>

<style>
  h1 {
    font-size: 16pt;
    color: white;
    font-weight: bold;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #container {
    position: relative;
    border-radius: 30px;
    margin: 20px 0;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
</style>

<!-- <div class="text-white">{window.routify.inBrowser}</div> -->
<!-- <div in:receive={{ key: 'div' }} out:send={{ key: 'div' }}> -->
<div
  in:fade={{ delay: 100, duration: 500 }}
  class="px-4 w-full sm:max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
  {#if posts}
    {#each posts as post}
      <a href="/blog/{post.slug}">
        <PostCard {post} />
      </a>
    {/each}
  {:else}
    <div class="h-screen w-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  {/if}
  <!-- {#if posts && posts.length > 0} -->
  <!-- <div class="text-white">{JSON.stringify(posts)}</div> -->
  <!-- {/if} -->
  <!-- <h1>Look, I'm above the image</h1> -->
  <!-- <div transition:fade={{ duration: 200 }} class="h-28 w-full bg-gray-800" /> -->

  <!-- <div out:send={{ key: 'post' }} in:receive={{ key: 'post' }}>
  </div> -->
</div>
