<script>
  export let activeSidebarTab;
  import ImageIcon from "../svg/ImageIcon.svelte";
  import { currentDocument } from "../../../stores";
  import AttachImage from "./AttachImage.svelte";
  import SharePost from "./SharePost.svelte";
  import ShareArrowRight from "../svg/ShareArrowRight.svelte";
  // import VideoPlayer from "./VideoPlayer.svelte";
  import RectanglePlay from "../svg/RectanglePlay.svelte";
  import QuoteBubble from "../svg/QuoteBubble.svelte";
  import { fly } from "svelte/transition";
  let sidebarNavTabs = [
    {
      iconComponent: ImageIcon,
      tabComponent: AttachImage,
    },
    {
      iconComponent: ShareArrowRight,
      tabComponent: SharePost,
    },

    // {
    //   iconComponent: RectanglePlay,
    //   tabComponent: VideoPlayer,
    //   width: 500,
    // },
  ];
</script>

<nav
  transition:fly={{ x: -20 }}
  class="mt-5 flex flex-1 flex-col items-center overflow-y-auto"
  aria-label="Sidebar">
  <div class="mt-6 pt-6">
    <div class="space-y-4">
      {#if $currentDocument}
        {#each sidebarNavTabs as tab, index}
          <button
            class:active={$activeSidebarTab == index && rightPanelOpen}
            data-index={index}
            on:click={toggleRightPanel}>
            <svelte:component this={tab.iconComponent} />
          </button>
        {/each}
      {/if}
    </div>
  </div>
</nav>
