<script>
  export let backgroundColor;
</script>

<style>
  :global(#status-bar-placeholder) {
    /* height: 44pt; */
    height: 20pt;
  }
</style>

<div style="background-color: {backgroundColor}" id="status-bar-placeholder" />
