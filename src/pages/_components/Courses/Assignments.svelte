<script>
  export let assignments;
  // import tasks from "./tasks";
  import { slide } from "svelte/transition";
  // import { score, tasksStore } from "../../stores";
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
  // onMount(() => {
  //   $tasksStore = tasks;
  // });
  function toggleTask(assignment) {
    console.log("assignment :>> ", assignment);
    assignment.complete = !assignment.complete;
    assignments = assignments;
    // $tasksStore = $tasksStore;
  }
</script>

<style>
  div {
    /* height: 100%; */
  }
  p {
    color: white;
  }
  .complete {
    color: gray;
  }
</style>

<div class="overflow-y-auto">
  <div class="grid grid-cols-2">
    <ul class="col-span-1">
      {#if assignments}
        <!-- todos.filter(t => !t.done) -->
        {#each assignments.filter((t) => !t.complete) as assignment (assignment.id)}
          <li
            in:receive={{ key: assignment.id }}
            out:send={{ key: assignment.id }}
            animate:flip={{ duration: 200, easing: cubicInOut }}
            class="bg-gray-900 flex justify-between border-r border-gray-700">
            <div
              class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
              <div class="flex items-center space-x-2">
                <input type="checkbox" bind:checked={assignment.complete} />
                <p class:complete={assignment.complete}>{assignment.body}</p>
              </div>

              <button
                on:click={() => toggleTask(assignment)}
                class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
            </div>
            <!-- <div class=" w-4 h-20 border-blue-500 bg-blue-600">s</div> -->
          </li>
        {/each}
      {/if}
    </ul>
    <ul class="">
      {#if assignments}
        {#each assignments.filter((t) => t.complete) as assignment (assignment.id)}
          <li
            in:receive={{ key: assignment.id }}
            out:send={{ key: assignment.id }}
            animate:flip={{ duration: 200, easing: cubicInOut }}
            class="bg-gray-900 flex justify-between">
            <div
              class="flex-1 flex justify-between space-x-1 items-center p-5 border-t border-gray-800">
              <div class="flex items-center space-x-2">
                <input type="checkbox" bind:checked={assignment.complete} />
                <p class:complete={assignment.complete}>{assignment.body}</p>
              </div>

              <button
                on:click={() => toggleTask(assignment)}
                class="bg-gray-800 h-7 px-2 py-.5 rounded text-sm text-gray-400 focus:outline-none">Done</button>
            </div>
            <!-- <div class=" w-4 h-20 border-blue-500 bg-blue-600">s</div> -->
          </li>
        {/each}
      {/if}
    </ul>
  </div>
</div>
