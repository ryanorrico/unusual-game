<script>
  import { writable } from "svelte/store";
  import Assignments from "./Assignments.svelte";

  import LessonItem from "./LessonItem.svelte";

  export let lessonStore;
</script>

<!-- {lessonStore} -->
<!-- <div class="text-white">{JSON.stringify(lessonStore)}</div> -->

{#if lessonStore.items}
  {#each lessonStore.items as item (item.position)}
    <LessonItem {item} />
  {/each}
{/if}
{#if lessonStore.assignments}
  {lessonStore.assignments.length / lessonStore.assignments.filter((x) => x.complete).length}
  <Assignments bind:assignments={lessonStore.assignments} />
{/if}
