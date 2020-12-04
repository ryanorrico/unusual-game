<script>
  export let post;
  import { fade } from "svelte/transition";
</script>

<style>
  div {
    height: 300px;
    width: 100%;
  }
  .overlay {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(1, 1, 1, 0.7) 12%,
      rgba(1, 1, 1, 0.2819502801120448) 18%,
      rgba(3, 3, 3, 0) 70%,
      rgba(13, 13, 13, 1) 100%
    );
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>

<div out:fade class="rounded-3xl overflow-hidden relative shadow-lg">
  <div class="overlay absolute w-full h-full" />
  <div class="absolute top-4 left-4">
    <p class="text-2xl font-bold text-white">{post.title}</p>
    <p class="text-lg text-gray-300">Let's do it</p>
  </div>
  <!-- <div class="absolute bottom-4"> -->
  <p class="absolute bottom-4 left-4 text-sm text-gray-300">
    {@html post.body}
  </p>
  <!-- </div> -->
  <img src={post.image} class="rounded-3xl" />
</div>
