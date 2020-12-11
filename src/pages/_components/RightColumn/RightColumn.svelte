<script>
  let rightColumnWidth;
  import { layoutStore, user, currentDiscussion } from "../../../stores";
  import { currentCourse } from "../../courses/course-stores";
  import Discussion from "../Discussions/Discussion.svelte";
  import XCloseButtonForPanels from "../XCloseButtonForPanels.svelte";
  function close() {
    $layoutStore.rightColumn.open = false;
  }
</script>

<style>
  div {
    /* background: rgb(22, 22, 24); */
    width: 0px;
    transition: all 200ms;
  }
  div.open {
    width: 400px;
  }
</style>

<div
  bind:clientWidth={rightColumnWidth}
  class:open={$layoutStore.rightColumn.open}
  id="right-column"
  class="hidden md:flex md:flex-col h-screen overflow-y-auto px-4 py-20 bg-gray-900">
  {#if $currentDiscussion}
    <div class="flex justify-between">
      <p class="text-white font-bold text-xl">{$currentDiscussion.title}</p>
      <button
        on:click={close}
        class="focus:outline-none"><XCloseButtonForPanels /></button>
    </div>
    <Discussion {currentDiscussion} {user} />
  {/if}

  <!-- <svelte:component this={$layoutStore.rightColumn.component} /> -->
</div>
