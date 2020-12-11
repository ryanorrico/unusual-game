<script>
  import envURL from "../../../env-url";
  import { ready, params } from "@roxi/routify";
  // import Post from "../_components/Post.svelte";
  import ActionCable from "actioncable";
  const websocketUrl = "ws://127.0.0.1:3001/cable";

  import { user, notificationStore } from "../../../stores";
  // import { fade } from "svelte/transition";
  // import { backOut } from "svelte/easing";
  // import { send, receive } from "../../../transitions/crossfade";
  let post;
  $: fetchPost();

  let cable;
  async function fetchPost() {
    const data = await Api.get(`/posts/${$params.slug}`);
    post = data;
    if (post.discussion) {
      $currentDiscussion = post.discussion;
    }
    subscribeToActionCableChannel();
    $ready();
  }

  async function subscribeToActionCableChannel() {
    cable = ActionCable.createConsumer(websocketUrl);
    cable.subscriptions.create("RoomChannel", {
      received: function (data) {
        console.log("data :>> ", data);
        // $notificationStore = [...$notificationStore, data];
      },
    });

    console.log(cable);
  }
  // import PostCard from "../_components/PostCard.svelte";
  // import Post from "../_components/PostCard.svelte";
  import Content from "../_components/Content.svelte";
  import Api from "../../../utils/api";
  import { currentDiscussion } from "../../../stores";
  import Discussion from "../../_components/Discussions/Discussion.svelte";
</script>

<!-- <Post {post} /> -->
<style>
  main {
    height: 100%;
    overflow-y: auto;
    width: 100%;
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

  #discussion-wrapper {
    /* max-width: 65ch; */
  }
</style>

<main>
  <!-- <div class="text-white">{JSON.stringify($currentDiscussion)}</div> -->
  {#if post}
    <div class="max-w-4xl mx-auto relative">
      <div class="overlay absolute w-full h-full" />
      <div class="absolute top-4 left-4">
        <p class="text-2xl font-bold text-white">{post.title}</p>
        <!-- <p class="text-lg  text-gray-300">Let's do it</p> -->
      </div>
      <div class="absolute bottom-4 left-4">
        <p class="text-sm text-gray-300" />
      </div>
    </div>

    <Content {post} />

    <div id="discussion-wrapper" class="py-6 px-2 mx-auto">
      {#if post.discussion}
        <Discussion {currentDiscussion} {user} />
      {/if}
    </div>
  {:else}...{/if}
</main>
