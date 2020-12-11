<script>
  export let currentGame, currentGameScore;

  import { slide } from "svelte/transition";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut, backIn, cubicInOut } from "svelte/easing";
  import Api from "../../../utils/api";
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

  async function makeMove(task) {
    const data = await Api.post(
      `/games/${$currentGame.slug}/tasks/${task.id}/make_move`
    );
    if (data.ok) {
      $currentGameScore += task.points;
      task.complete = true;
      $currentGame = $currentGame;
    }
  }
</script>

<style>
  p {
    color: white;
  }
  p.complete {
    color: gray;
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
  }

  span.points {
    background: linear-gradient(180deg, #e60e3d 0, #e00b2e 100%);
    transition: all 300ms;
  }

  span.complete {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
  }
</style>

<ul class="col-span-1">
  {#if $currentGame.tasks}
    {#each $currentGame.tasks as task (task.id)}
      <li
        in:receive={{ key: task.id }}
        out:send={{ key: task.id }}
        animate:flip={{ duration: 200, easing: cubicInOut }}
        class="bg-gray-900 flex justify-between items-center border-r border-gray-700">
        <div
          class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
          <div class:complete={task.complete} class="flex space-x-2 text-white">
            <span
              class:complete={task.complete}
              class="points text-white text-3xl font-black w-10 h-10 flex-shrink-0 rounded flex items-center justify-center">
              <span class="text-sm font-bold">+</span>
              {task.points}
            </span>
            <p>{task.body}</p>
          </div>
          {#if !task.complete}
            <button
              transition:slide|local={{ y: -10, duration: 200 }}
              on:click={() => makeMove(task)}
              class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
          {/if}
        </div>
      </li>
    {/each}
  {/if}
</ul>
