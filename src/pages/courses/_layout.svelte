<script>
  import { page, params } from "@roxi/routify";
  import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  import { fly } from "svelte/transition";

  // import VideoPlayer from "./VideoPlayer.svelte";
  // import RectanglePlay from "../svg/RectanglePlay.svelte";
  // import QuoteBubble from "../svg/QuoteBubble.svelte";
  // import { coursesStore, currentCourse } from "./course-stores";
  // import { activeSidebarTab } from "../_components/Sidebar/Sidebar.svelte";
  import { layoutStore } from "../../stores";
  // import { cubicInOut } from "svelte/easing";
  import RightColumn from "../_components/RightColumn/RightColumn.svelte";
</script>

<style>
  div {
    overflow: hidden;
  }
  main {
    overflow-y: auto;
    height: 100%;
    margin: 0 auto;

    width: 100%;
    flex: 1;
    padding-top: 55px;
  }
</style>

<div class="flex h-screen w-full">
  <!-- {#if $currentCourse} -->
  {#if $page.path.includes('/courses/:slug')}
    <Sidebar />
  {/if}
  <!-- {/if} -->
  <main class="h-full overflow-y-auto">
    <slot />
  </main>
  {#if $layoutStore.rightColumn.open}
    <RightColumn />
  {/if}
  <!-- bind:this={sidebarContainer}
bind:clientWidth={sidebarContainerWidth} -->
</div>
