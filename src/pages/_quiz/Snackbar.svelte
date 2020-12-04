<script>
  export let message = "";
</script>

<style>
  div {
    /* height: 48px; */
    /* width: 344px; */
    padding: 12px;
    position: absolute;
    bottom: 60px;

    /* line-height: 45px; */
    /* background-color: #4e5656; */
    border-radius: 5px;

    /* box-shadow: 0 0 5px #4e5656; */
  }

  span {
    font-size: 16px;
    color: white;
  }
</style>

{#if message}
  <div class="bg-green-600 p-6 text-white"><span>Correct Answer</span></div>
{:else}
  <div style="background-color: red; box-shadow: 0 0 5px red;">
    <span>Incorrect Answer</span>
  </div>
{/if}
