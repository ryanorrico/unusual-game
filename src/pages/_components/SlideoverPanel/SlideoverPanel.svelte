<script>
  import { user, layoutStore } from "../../../stores";
  import { fly } from "svelte/transition";
  import { backOut, cubicInOut } from "svelte/easing";

  import clickOutside from "../../../utils/clickOutside";
  // import SlideoverPanelDefault from "./SlideOverPanelDefault.svelte";

  // export let slotComponent = SlideoverPanelDefault;
  let width;
</script>

<style>
  #slideover-panel {
    z-index: 1000;
  }
</style>

{#if $layoutStore.slideoverPanel.open}
  <div id="slideover-panel" class="fixed z-50 inset-0 overflow-hidden">
    <div class="absolute inset-0 overflow-hidden">
      <section
        class="absolute inset-y-0 right-0 pl-10 max-w-full flex"
        aria-labelledby="slide-over-heading">
        <!--
          Slide-over panel, show/hide based on slide-over state.
  
          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->

        <div
          bind:clientWidth={width}
          transition:fly={{ x: width, duration: 300, easing: cubicInOut, opacity: 1 }}
          class="w-screen max-w-md">
          <div
            class="h-full flex flex-col py-6 bg-gray-900 shadow-xl overflow-y-scroll">
            <div class="px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <!-- <h2
                  id="slide-over-heading"
                  class="text-lg font-medium text-gray-900">
                  Panel title
                </h2> -->
                <div class="ml-3 h-7 flex items-center">
                  <button
                    on:click={() => ($layoutStore.slideoverPanel.open = !$layoutStore.slideoverPanel.open)}
                    class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="sr-only">Close panel</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="mt-6 relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->

              <!-- <SlideoverPanelDefault {user} {layoutStore} /> -->
              {#if $layoutStore.slideoverPanel.component}
                <svelte:component
                  this={$layoutStore.slideoverPanel.component} />
              {:else}
                <SlideOverPanelDefault />
              {/if}

              <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
{/if}
