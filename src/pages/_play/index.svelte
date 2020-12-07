<!-- <div class="flex items-center justify-center h-full">
  <a href="./images" class="text-3xl text-white">PLAY</a>
</div> -->
<script>
  import tasks from "./tasks";
  import { slide } from "svelte/transition";
  import { score, tasksStore } from "../../stores";
  import { onMount } from "svelte";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { quintOut, backIn, cubicInOut } from "svelte/easing";

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
  onMount(() => {
    $tasksStore = tasks;
  });
  function toggleTask(task) {
    if (!task.complete) {
      $score += 1;
      task.complete = true;
    } else {
      $score -= 1;
      task.complete = false;
    }
    $tasksStore = $tasksStore;
  }
</script>

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
</style>

<div class="overflow-y-auto">
  <!-- {#if $tasksStore}
    {#each $tasksStore.filter((t) => !t.complete) as task (task.id)}
      <span
        in:receive={{ key: task.id }}
        out:send={{ key: task.id }}
        animate:flip
        class="mx-1 w-6 h-6 rounded-full bg-red-600 inline-block" />
    {/each}
    {#each $tasksStore.filter((t) => t.complete) as task (task.id)}
      <span
        in:receive={{ key: task.id }}
        out:send={{ key: task.id }}
        animate:flip
        class="mx-1 w-6 h-6 rounded-full bg-green-600 inline-block" />
    {/each}
  {/if} -->
  <header class="flex flex-col items-center justify-center py-10 text-white">
    <span>Score</span>
    <h1 class="text-8xl font-extrabold ">{$score}</h1>
  </header>
  <div class="grid grid-cols-2">
    <ul class="col-span-1">
      {#if $tasksStore}
        <!-- todos.filter(t => !t.done) -->
        {#each $tasksStore.filter((t) => !t.complete) as task (task.id)}
          <li
            in:receive={{ key: task.id }}
            out:send={{ key: task.id }}
            animate:flip={{ duration: 200, easing: cubicInOut }}
            class="bg-gray-900 flex justify-between border-r border-gray-700">
            <div
              class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
              <p class:complete={task.complete}>{task.task}</p>

              <button
                on:click={() => toggleTask(task)}
                class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
            </div>
            <!-- <div class=" w-4 h-20 border-blue-500 bg-blue-600">s</div> -->
          </li>
        {/each}
      {/if}
    </ul>
    <ul class="">
      {#if $tasksStore}
        {#each $tasksStore.filter((t) => t.complete) as task (task.id)}
          <li
            in:receive={{ key: task.id }}
            out:send={{ key: task.id }}
            animate:flip={{ duration: 200, easing: cubicInOut }}
            class="bg-gray-900 flex justify-between">
            <div
              class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
              <p class:complete={task.complete}>{task.task}</p>

              <button
                on:click={() => toggleTask(task)}
                class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
            </div>
            <!-- <div class=" w-4 h-20 border-blue-500 bg-blue-600">s</div> -->
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</div>
