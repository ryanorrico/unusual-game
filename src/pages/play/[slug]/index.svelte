<script>
  import {
    gameStore,
    currentGame,
    currentGameScore,
    currentUserIsPlaying,
  } from "../game-store";
  import Api from "../../../utils/api";
  import { user } from "../../../stores";
  import { params, ready } from "@roxi/routify";

  $: fetchGame();

  async function fetchGame() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.get(`/games/${$params.slug}`);
      $currentGame = data;
      console.log("$currentGame :>> ", $currentGame);
      setCurrentGameScore(data);
      $currentUserIsPlaying = $currentGame.players.some(
        (p) => p.id === $user.id
      );

      $ready();
    }
  }

  // let membershipActive;

  // if ($user.memberships.games.find((g) => g.id == $currentGame.id)) {
  //   membershipActive = true;
  // } else {
  //   membershipActive = false;
  // }

  function setCurrentGameScore(data) {
    let completedTasks = data.tasks.filter((t) => t.complete);
    $currentGameScore = completedTasks.reduce((t, { points }) => t + points, 0);
  }

  // import PhotoUploadOptions from "../../_components/SlideUpPanel/PhotoUploadOptions.svelte";
  import GameCover from "../../_components/Games/GameCover.svelte";
  import GameTasks from "../../_components/Games/GameTasks.svelte";

  let confettiOn = false;
</script>

<!-- <div class="flex items-center justify-center h-full">
  <a href="./images" class="text-3xl text-white">PLAY</a>
</div> -->
<style>
  div {
    height: 100%;
  }
  a {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
    color: white;
    padding: 4px 12px;
    border-radius: 5px;
  }
</style>

<div class="overflow-y-auto">
  {#if $currentGame}
    <!-- <div class="text-white">{JSON.stringify($user)}</div> -->
    <GameCover {currentGame} {currentGameScore} {currentUserIsPlaying} {user} />

    <a href="/play/{$currentGame.slug}/activity">Activity</a>

    {#if $currentUserIsPlaying}
      <GameTasks
        {currentGame}
        {currentGameScore}
        {currentUserIsPlaying}
        {user} />
    {/if}

    <!-- <div class="grid sm:grid-cols-2">
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
    </div> -->
  {/if}
</div>

<!-- <div class="text-white">{JSON.stringify($currentGame)}</div> -->
