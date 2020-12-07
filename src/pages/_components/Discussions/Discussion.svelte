<script>
  export let currentDiscussion, user;
  import Comment from "../../_components/Discussions/Comment.svelte";
  import CommentForm from "../../_components/Discussions/CommentForm.svelte";
</script>

<div class="">
  <!-- <p class="text-white font-bold">{$currentDiscussion.title}</p> -->
  <CommentForm {currentDiscussion} {user} />
  {#if $currentDiscussion.comments}
    <ul class="space-y-6">
      {#each $currentDiscussion.comments as comment}
        <Comment discussion={currentDiscussion} {comment} {user} />
      {/each}
    </ul>
  {/if}
</div>
