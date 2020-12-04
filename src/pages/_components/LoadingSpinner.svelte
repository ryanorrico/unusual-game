<script>
  export let size = 60;
  export let color = "#4f46e5";
  export let unit = "px";
  import { fade, scale } from "svelte/transition";
  const range = (size, startAt = 0) =>
    [...Array(size).keys()].map((i) => i + startAt);
</script>

<style>
  .wrapper {
    position: relative;
    width: var(--size);
    height: var(--size);
  }
  .circle {
    position: absolute;
    width: var(--size);
    height: var(--size);
    background-color: var(--color);
    border-radius: 100%;
    opacity: 0.6;
    top: 0;
    left: 0;
    animation-fill-mode: both;
    animation-name: bounce !important;
  }
  @keyframes bounce {
    0%,
    100% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
  }
</style>

<div
  transition:scale
  class="wrapper"
  style="--size: {size}{unit}; --color: {color}">
  {#each range(2, 1) as version}
    <div
      class="circle"
      style="animation: 2.1s {version === 1 ? `1s` : `0s`} infinite ease-in-out" />
  {/each}
</div>
