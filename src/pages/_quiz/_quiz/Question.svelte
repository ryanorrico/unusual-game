<script>
  export let question;
  export let quizStore;
  export let score;
  export let nextQuestion;
  let isCorrect;
  let isAnswered = false;
  function checkAnswer() {
    if (this.dataset.index == question.correct_answer) {
      $score += 1;

      // isCorrect = true;
    } else {
      // showWrongAnswerNotification = true;
      // setTimeout(() => {
      // showWrongAnswerNotification = false;
      // }, 3000);
    }
  }
</script>

<div class="w-full flex flex-col items-center justify-center">
  <h2 class="text-4xl">{question.question}</h2>
  <ul class="flex space-x-2">
    {#each question.answers as answer, index}
      <li
        on:click={checkAnswer}
        data-index={index}
        class="cursor-pointer hover:bg-gray-700 text-2xl border border-gray-600 rounded py-3 px-5 rounded-xl">
        {answer}
      </li>
    {/each}
  </ul>
</div>
