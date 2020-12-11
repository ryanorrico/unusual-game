<script>
  // import { url, page, isActive } from "@roxi/routify";
  import { fade, fly, scale, slide } from "svelte/transition";
  import { backIn, backOut, cubicOut } from "svelte/easing";
  let sidebarContainer;
  import { user } from "../../../stores";
  let rightPanelOpen = false;
  let rightPanelOpenWide = false;
  let rightPanelWidth;
  let sidebarContainerWidth;
  import { url } from "@roxi/routify";
  import { writable } from "svelte/store";
  import ListBulletRectangle from "../svg/ListBulletRectangle.svelte";
  import CourseContent from "../Courses/CourseContent.svelte";
  import ShareArrowRight from "../svg/ShareArrowRight.svelte";
  import SharePost from "./SharePost.svelte";
  import QuoteBubble from "../svg/QuoteBubble.svelte";
  import CourseAdmin from "../Courses/CourseAdmin.svelte";
  // import { page } from "@roxi/routify";
  // import SidebarWriteNav from "./SidebarWriteNav.svelte";

  export const activeSidebarTab = writable();
  // export let sidebarNavTabs;

  let sidebarNavTabs = [
    {
      iconComponent: ListBulletRectangle,
      tabComponent: CourseContent,
    },
    {
      iconComponent: ShareArrowRight,
      tabComponent: SharePost,
    },
    {
      iconComponent: QuoteBubble,
      tabComponent: CourseAdmin,
    },
  ];

  function toggleRightPanel() {
    if (rightPanelOpen && this.dataset.index !== $activeSidebarTab) {
      $activeSidebarTab = this.dataset.index;
    } else {
      $activeSidebarTab = this.dataset.index;
      rightPanelOpen = !rightPanelOpen;
      sidebarContainer.style.width = !rightPanelOpen ? "70px" : "300px";
    }

    if (!rightPanelOpen) {
      $activeSidebarTab = null;
    }
  }
</script>

<style>
  /* a {
    max-width: 500px;
  } */
  button {
    color: rgba(255, 255, 255, 0.5);
    padding: 8px;
  }

  button:active,
  button:focus {
    outline: none;
  }

  button.active {
    color: #8614f8;
    background-color: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5) inset;
    border-radius: 5px;

    transition: color 300ms;
  }

  svg {
    width: 100%;
  }

  #logo svg {
    /* fill: rgba(255, 255, 255, 0.2); */
  }

  #home {
    max-width: 25px;
  }
  #home svg {
    fill: rgba(255, 255, 255, 0.2);
  }

  #container {
    /* max-width: 70px; */
    width: 70px;
    background: rgb(22, 22, 24);
    transition: width 300ms;
    height: 100%;
  }

  .rightPanelOpen {
    width: 500px;
  }
  .rightPanelOpenWide {
    width: 500px;
  }
  #right-panel,
  #left-panel {
  }

  #left-panel {
    width: 70px;
    box-shadow: 2px 0px 1px 0 rgba(0, 0, 0, 0.3);
    z-index: 100;
    padding: 0 10px;
  }
  #right-panel {
    /* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
    padding: 80px 0px;
    background-color: rgba(27, 27, 30, 1);
    /* border-right: 1px solid rgba(50, 50, 50, 0.5); */
    box-shadow: 1px 0px 1px 0 rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    left: 0;
    flex: 1;
    top: 0;
    z-index: 0;
  }
</style>

<!-- Static sidebar for desktop -->
<div
  id="container"
  bind:this={sidebarContainer}
  bind:clientWidth={sidebarContainerWidth}
  class="hidden md:flex lg:flex-shrink-0 h-screen"
  class:rightPanelOpen>
  <div
    id="left-panel"
    transition:fly|local={{ delay: 200, x: -40 }}
    class=" flex-shrink-0 z-10 flex flex-col ">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex flex-col justify-between h-full pt-5 pb-4 overflow-y-auto">
      <!-- <div
        class="text-gray-700 flex flex-col items-center flex-shrink-0 px-4 space-y-2">
        <a id="home" href="/">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 116.6 102.6"
            style="enable-background:new 0 0 116.6 102.6;"
            xml:space="preserve">
            <defs />
            <g id="Regular-M_1_" transform="matrix(1 0 0 1 1379.12 1126)">
              <path
                d="M-1379.1-1077.8c0,2,1.6,3.9,4.2,3.9c1.4,0,2.5-0.7,3.5-1.6l48.9-41c1.1-1,2.4-1,3.5,0l48.9,41c1,0.8,2.1,1.6,3.5,1.6
              c2.3,0,4.2-1.4,4.2-3.8c0-1.5-0.5-2.4-1.5-3.3l-13.7-11.5v-19.5c0-2.1-1.4-3.5-3.5-3.5h-5.2c-2.1,0-3.5,1.4-3.5,3.5v9.2l-24.9-20.9
              c-3.6-3.1-8.1-3.1-11.8,0l-50.9,42.7C-1378.6-1080.1-1379.1-1078.9-1379.1-1077.8z M-1363.9-1034.2c0,6.7,4.1,10.7,11,10.7h64.2
              c6.9,0,10.9-4,10.9-10.7v-38.7l-40.1-33.6c-1.9-1.6-4.1-1.5-5.9,0l-40.1,33.6V-1034.2z M-1308.2-1031.3h-25.2v-32.3
              c0-2.2,1.5-3.7,3.8-3.7h17.7c2.2,0,3.7,1.5,3.7,3.7V-1031.3z" />
            </g>
          </svg>
        </a>

        <a id="logo" href={$url('/admin')}>
          <svg
            version="1.1"
            class:active={$page.path === '/admin/index'}
            viewBox="0 0 101 101">
            <defs />
            <g id="Medium-M_1_" transform="matrix(1 0 0 1 1687.3 1126)">
              <path
                d="M-1636.8-1025c27.7,0,50.5-22.9,50.5-50.5c0-27.6-22.9-50.5-50.6-50.5c-27.6,0-50.4,22.9-50.4,50.5
                C-1687.3-1047.8-1664.4-1025-1636.8-1025z M-1655-1056.4v-19.7c0-3.5,1.4-5.3,4.2-5.6v-5.7c0-9.4,5.7-15.6,13.9-15.6
                c8.3,0,14,6.2,14,15.6v5.7c2.8,0.3,4.2,2.1,4.2,5.6v19.7c0,3.9-1.8,5.7-5.3,5.7h-25.7C-1653.3-1050.7-1655-1052.5-1655-1056.4z
                M-1644.7-1081.8h15.8v-6.1c0-5.6-3.2-9.2-7.9-9.2s-7.9,3.7-7.9,9.2V-1081.8z" />
            </g>
          </svg>
        </a>
      </div> -->

      <nav
        transition:fly={{ x: -20 }}
        class="mt-5 flex flex-1 flex-col items-center overflow-y-auto"
        aria-label="Sidebar">
        <div class="mt-6 pt-6">
          <div class="space-y-4">
            {#if sidebarNavTabs}
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

      <a href={$url(`/${$user.slug}`)}>
        <img src={$user.image} class="rounded-full w-16 shadow" />
      </a>
    </div>
  </div>
  <!-- {#if rightPanelOpen} -->
  <div id="right-panel" bind:clientWidth={rightPanelWidth} class:rightPanelOpen>
    {#if $activeSidebarTab}
      <svelte:component this={sidebarNavTabs[$activeSidebarTab].tabComponent} />
    {/if}
  </div>
  <!-- <div class="w-1 h-full bg-gray-800" /> -->
  <!-- {/if} -->
</div>
