<script>
  import { gameStore, currentGame, currentGameScore } from "../game-store";
  import { layoutStore } from "../../../stores";
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import Api from "../../../utils/api";
  import { params, ready } from "@roxi/routify";
  let game;
  $: fetchGame();

  async function fetchGame() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.get(`/games/${$params.slug}`);
      let obj = $gameStore.find((x) => x.slug === data.slug);
      $currentGame = obj;
      console.log("data :>> ", data);
      $currentGame.players = data.players;
      $currentGame.cover_image = data.cover_image;

      $ready();
    }
  }

  import { onMount } from "svelte";
  import { slide } from "svelte/transition";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut, backIn, cubicInOut } from "svelte/easing";
  import Confetti from "../../_components/Confetti.svelte";
  import CameraCircleIcon from "../../_components/svg/CameraCircleIcon.svelte";
  import PhotoUploadOptions from "../../_components/SlideUpPanel/PhotoUploadOptions.svelte";

  const [send, receive] = crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: (t) => `
              transform: ${transform} scale(${t});
              opacity: ${t}
            `,
      };
    },
  });
  let confettiOn = false;
  function toggleTask(task) {
    if (!task.complete) {
      $currentGameScore += task.points;
      task.complete = true;
      //   confettiOn = true;
      //   setTimeout(() => {
      //     confettiOn = false;
      //   }, 2000);
    } else {
      $currentGameScore -= task.points;
      task.complete = false;
    }
    $currentGame = $currentGame;
  }

  function openSlideUpPanelWithPhotoUpload() {
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "game[cover_image]",
      text: "Upload cover photo",
    };
    $layoutStore.slideUpPanel.open = true;
  }
</script>

<!-- <div class="flex items-center justify-center h-full">
  <a href="./images" class="text-3xl text-white">PLAY</a>
</div> -->
<style>
  div {
    height: 100%;
  }
  p {
    color: white;
  }
  .complete {
    color: gray;
  }

  span.points {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
  }

  header {
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  header h1 {
    z-index: 10;
    line-height: 0.8;
  }
  .overlay {
    /* z-index: 0; */
    background: linear-gradient(
      0deg,
      rgba(14, 14, 15, 1) 0%,
      rgba(1, 1, 1, 0.2) 7%,
      rgba(1, 1, 1, 0.2) 18%,
      rgba(3, 3, 3, 0.2) 70%,
      rgba(13, 13, 13, 1) 100%
    );
  }

  button#photo-options {
    width: 60px;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 40px;
    right: 20px;
  }
  button svg {
    width: 100%;
  }

  input[type="file"] {
    display: none;
  }
</style>

<div class="overflow-y-auto">
  {#if $currentGame}
    <header
      in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
      class="relative">
      <div
        in:fade={{ delay: 300, duration: 500 }}
        class="overlay absolute w-full h-full" />
      <img src={$currentGame.cover_image} class="object-cover h-full w-full" />
      <h1
        in:fly={{ y: -30, easing: backOut, delay: 300 }}
        class="text-4xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
        <!-- {$currentGame.name} -->

        <span>Score</span>
        <h1 class="text-8xl font-extrabold ">{$currentGameScore}</h1>
        <br />
        <!-- <span class="font-light">{$currentUser.name.split(' ')[1]}</span> -->
      </h1>

      <button
        on:click={openSlideUpPanelWithPhotoUpload}
        in:fly={{ y: -20, delay: 800 }}
        id="photo-options">
        <CameraCircleIcon />
      </button>
    </header>

    <div class="grid sm:grid-cols-2">
      <ul class="col-span-1">
        {#if $currentGame.tasks}
          {#each $currentGame.tasks.filter((t) => !t.complete) as task (task.id)}
            <li
              in:receive={{ key: task.id }}
              out:send={{ key: task.id }}
              animate:flip={{ duration: 200, easing: cubicInOut }}
              class="bg-gray-900 flex justify-between items-center border-r border-gray-700">
              <div
                class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
                <div
                  class:complete={task.complete}
                  class="flex space-x-2 text-white">
                  <span
                    class="points text-white text-3xl font-black w-10 h-10 flex-shrink-0 rounded flex items-center justify-center">
                    <span class="text-sm font-bold">+</span>
                    {task.points}
                  </span>
                  <p>{task.body}</p>
                </div>
                <button
                  on:click={() => toggleTask(task)}
                  class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
              </div>
            </li>
          {/each}
        {/if}
      </ul>

      <ul class="">
        {#if $currentGame && $currentGame.tasks}
          {#each $currentGame.tasks.filter((t) => t.complete) as task (task.id)}
            <li
              in:receive={{ key: task.id }}
              out:send={{ key: task.id }}
              animate:flip={{ duration: 200, easing: cubicInOut }}
              class="bg-gray-900 flex justify-between items-center border-r border-gray-700">
              <div
                class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
                <p class:complete={task.complete}>
                  {task.body}
                  <span
                    class="bg-red-500 text-white font-black px-1 rounded inline-flex items-center justify-center">
                    -{task.points}
                  </span>
                </p>
                <button
                  on:click={() => toggleTask(task)}
                  class="bg-gray-800 h-7 px-2 py-.5 flex-shrink-0 rounded text-sm text-gray-400 focus:outline-none">Not
                  done</button>
              </div>
            </li>
          {/each}
        {/if}
      </ul>
    </div>
  {/if}
</div>

<!-- <div class="text-white">{JSON.stringify($currentGame)}</div> -->
