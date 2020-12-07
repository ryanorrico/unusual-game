<script>
  import { layoutStore, uploadedImage } from "../../../stores";
  let height;
  import { fly } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";
  import clickOutside from "../../../utils/clickOutside";
  import XCloseButtonForPanels from "../XCloseButtonForPanels.svelte";

  function close() {
    $layoutStore.slideUpPanel.open = false;
  }

  // import { embedImage } from "../../write/_components/QuillEditor.svelte";
</script>

<style>
  section {
    z-index: 500;
    position: absolute;
    bottom: 0;
    width: 100%;
    /* height: 33vh; */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.96);
  }

  #component {
    min-height: 40px;
    transition: height 200ms;
  }
</style>

<section
  use:clickOutside
  on:click_outside={close}
  transition:fly={{ y: height, easing: cubicInOut, duration: 300, opacity: 1 }}
  bind:clientHeight={height}
  class="rounded-t-3xl">
  <div class="flex w-full justify-between px-6 py-4">
    <p class="text-xl font-bold text-white text-center">
      {$layoutStore.slideUpPanel.text}
    </p>
    <button class="" on:click={close}>
      <XCloseButtonForPanels />
    </button>
  </div>
  <div id="component" class="px-4">
    <!-- <div class="text-white">{JSON.stringify($layoutStore)}</div> -->
    <svelte:component this={$layoutStore.slideUpPanel.component} />
  </div>
</section>
