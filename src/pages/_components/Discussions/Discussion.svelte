<script>
  export let currentDiscussion, user;
  import { slide } from "svelte/transition";
  import Comment from "../../_components/Discussions/Comment.svelte";
  import CommentForm from "../../_components/Discussions/CommentForm.svelte";
  import NewCommentForm from "./NewCommentForm.svelte";
</script>

<!-- <p class="text-white font-bold">{$currentDiscussion.title}</p> -->

<!-- <CommentForm {currentDiscussion} {user} /> -->
<div class="py-10">
  <NewCommentForm {currentDiscussion} {user} />
</div>
{#if $currentDiscussion.comments}
  <ul class="space-y-6">
    {#each $currentDiscussion.comments as comment (comment.id)}
      <li in:slide|local>
        <Comment {currentDiscussion} {comment} {user} />
      </li>
      <!-- <div class="text-white">{comment.parent_id}</div> -->
    {/each}
  </ul>
{/if}
