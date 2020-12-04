<script>
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  import { writable } from "svelte/store";
  import Question from "./Question.svelte";
  import Modal from "./Modal.svelte";
  import { score } from "./store.js";
  import questions from "./_quiz";
  let activeQuestion = 0;
  let isModalOpen = false;
  const quizStore = writable(questions);
  let quiz = getQuiz();
  // async function getQuiz() {
  //   const res = await fetch(
  //     "https://opentdb.com/api.php?amount=10&category=12&type=multiple"
  //   );
  //   const quiz = await res.json();
  //   console.log(" quiz :>> ", quiz);
  //   return quiz;
  // }
  function getQuiz() {
    return quizStore;
    // const res = await fetch("./_quiz.json");
    // const quiz = await res.json();
    // console.log(" quiz :>> ", quiz);
    // return quiz;
  }

  // onMount(() => console.log("mounted"));
  // beforeUpdate(() => console.log("1"));
  // afterUpdate(() => console.log("2"));
  // onDestroy(() => console.log("3"));

  function nextQuestion() {
    if (activeQuestion + 1 >= questions.length) {
      return;
    } else {
      activeQuestion += 1;
    }
  }

  function resetQuiz() {
    isModalOpen = false;
    score.set(0);
    activeQuestion = 0;
    quiz = getQuiz();
  }

  //Reactive statement
  $: if ($score > 3) {
    isModalOpen = true;
  }
  $: questionNumber = activeQuestion + 1;
  $: correctAnswer =
    questions[activeQuestion].answers[questions[activeQuestion].correct_answer];
  let showWrongAnswerNotification = false;
  // function checkAnswer(e, question) {
  //   if (e.target.dataset.index == question.correct_answer) {
  //     $score += 1;
  //     activeQuestion += 1;
  //   } else {
  //     showWrongAnswerNotification = true;
  //     setTimeout(() => {
  //       showWrongAnswerNotification = false;
  //     }, 3000);
  //   }
  // }
</script>

<style>
  /* .fade-wrapper {
    position: absolute;
  } */

  div {
    color: white;
  }
</style>

<div>
  <button
    class="bg-purple-700 text-sm rounded-md py-1 px-2"
    on:click|once={resetQuiz}>Start new Quiz</button>
  <div class="flex flex-col w-full items-center justify-center">
    <h3>Score: {$score}</h3>
  </div>
  <h4 class="text-2xl">Question: #{questionNumber}</h4>
  <!-- {questions[activeQuestion]} -->
  {#if showWrongAnswerNotification}
    <div class="bg-red-500 text-white">
      <!-- {questions[activeQuestion]} -->
      <!-- {JSON.stringify(questions[questions[activeQuestion].correct_answer])} -->
    </div>
  {/if}
  {#await $quizStore}
    Loading....
  {:then $quizStore}
    <!-- {JSON.stringify($quizStore)} -->
    {#each $quizStore as question, index}
      {question.answered}
      {#if index === activeQuestion}
        <div transition:blur={{ amount: 10 }}>
          <Question {question} {index} {score} {quizStore} />
        </div>
      {/if}

      <!-- {#if index === activeQuestion} -->
      <!-- <div transition:blur={{ amount: 10 }} class="fade-wrapper"> -->
      <!-- <Question {nextQuestion} {question} /> -->
      <!-- </div> -->
      <!-- {/if} -->
    {/each}
    <button on:click={nextQuestion}>Next</button>
    <!-- {#each data.results as question, index}
      {question.question}
      {#if index === activeQuestion}
        <div transition:blur={{ amount: 10 }} class="fade-wrapper">
          <Question {nextQuestion} {question} />
        </div>
      {/if}
    {/each} -->
  {/await}
</div>

{#if isModalOpen}
  <Modal on:close={resetQuiz}>
    <h2>You won!</h2>
    <p>Congrats!</p>
    <button on:click={resetQuiz}>Start over</button>
  </Modal>
{/if}
