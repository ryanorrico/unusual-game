<script>
  import QuizArea from "./QuizArea.svelte";

  let playerScore = 0;
  let visible = true;
</script>

<style>
</style>

<div class=" flex flex-col items-center justify-center">
  {#if visible}
    <p class="text-white">Score: <i>{playerScore} / 10</i></p>
  {/if}

  <QuizArea
    on:score={(e) => {
      playerScore = e.detail.score;
    }}
    on:resultsScreen={(e) => {
      visible = e.detail.showScore;
    }} />
</div>
