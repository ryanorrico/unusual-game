<script>
  export let comment, user, currentDiscussion;
  // import { currentDiscussion } from "../../../stores";
  import { params } from "@roxi/routify";
  import { fly, slide } from "svelte/transition";
  import NestedComment from "./NestedComment.svelte";
  import ReplyToComment from "./ReplyToComment.svelte";
  import { formattedTimeAgoInWords } from "../../../utils/timeAgoInWords";
  import NewCommentForm from "./NewCommentForm.svelte";
  // const date2 = dayjs("2018-06-05");
</script>

<div class="flex flex-col space-y-2" data-id={comment.id}>
  <!-- {#if !comment.parent_id} -->
  <div class="flex items-center space-x-2">
    {#if comment.user && comment.user.image}
      <img
        src={comment.user.image}
        class="w-10 h-10 rounded-full object-cover" />
    {:else}
      <div class="w-10 h-10 rounded-full bg-blue-600" />
    {/if}
    <div class="text-white w-full bg-gray-900 rounded-md p-3 space-y-1">
      <p class="text-sm font-bold text-gray-500">{comment.user.name}</p>
      <p class="text-xs text-gray-600 mb-2">
        {formattedTimeAgoInWords(comment)}
      </p>
      {@html comment.body}
    </div>
  </div>
  <!-- {/if} -->
  {#if comment.nested_comments}
    {#each comment.nested_comments as nestedComment}
      <div class="ml-12">
        <NestedComment {comment} {nestedComment} />
      </div>
    {/each}
  {/if}
  {#if !comment.parent_id}
    <NewCommentForm {comment} {user} />
    <!-- <ReplyToComment {comment} {user} /> -->
  {/if}
</div>
