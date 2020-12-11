<script>
  import { fly } from "svelte/transition";

  import { layoutStore } from "../../../stores";
  function handleClick() {
    $layoutStore.rightColumn.open = !$layoutStore.rightColumn.open;
  }
</script>

<!-- <div in:fly|local={{ y: -20, delay: 300 }} out:fly|local={{ y: 20, delay: 0 }}> -->
<div>
  <button on:click={handleClick} class="w-full bg-blue-600 py-2">SHARE</button>
</div>
