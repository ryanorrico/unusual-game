<script>
  import envURL from "../../../env-url";
  import { ready, params } from "@roxi/routify";
  // import Post from "../_components/Post.svelte";
  import { fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import { send, receive } from "../../../transitions/crossfade";
  let post;
  $: fetchPost();

  async function fetchPost() {
    const data = await Api.get(`/posts/${$params.slug}`);
    post = data;
    console.log("post :>> ", post);
    $ready();
  }

  import PostCard from "../_components/PostCard.svelte";
  import Post from "../_components/PostCard.svelte";
  import Content from "../_components/Content.svelte";
  import Api from "../../../utils/api";
</script>

<!-- <Post {post} /> -->
<style>
  main {
    height: 100%;
    overflow-y: auto;
  }
  div {
    transform: scale(1);
    border-radius: 0;
    box-shadow: 0 0 0 0 #00000080;
    margin: 0;
    /* animation-duration: 1000ms; */
  }

  .overlay {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(1, 1, 1, 0.469625350140056) 7%,
      rgba(1, 1, 1, 0.2819502801120448) 18%,
      rgba(3, 3, 3, 0) 70%,
      rgba(13, 13, 13, 0.9) 100%
    );
  }
  img {
    width: 100%;
  }
</style>

<main>
  {#if post}
    <div class="max-w-4xl mx-auto">
      <div class="overlay absolute w-full h-full" />
      <div class="absolute top-4 left-4">
        <p class="text-2xl font-bold text-white">{post.title}</p>
        <p class="text-lg  text-gray-300">Let's do it</p>
      </div>
      <div class="absolute bottom-4 left-4">
        <p class="text-sm text-gray-300" />
      </div>
    </div>

    <Content {post} />
  {:else}...{/if}
</main>
