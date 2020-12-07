<script>
  export let comment, user;
  import { currentDiscussion } from "../../../stores";
  import { params } from "@roxi/routify";

  import NestedComment from "./NestedComment.svelte";
  import ReplyToComment from "./ReplyToComment.svelte";
</script>

<li class="flex flex-col p-2 space-y-2 bg-gray-800">
  <div class="flex items-center space-x-2">
    {#if comment.user && comment.user.image}
      <img
        src={comment.user.image}
        class="w-10 h-10 rounded-full object-cover" />
    {:else}
      <div class="w-10 h-10 rounded-full bg-blue-600" />
    {/if}
    <div class="text-white w-full bg-gray-900 rounded-md p-3 ">
      <p class="text-xs text-gray-500">{comment.user.name}</p>
      {@html comment.body}
    </div>
  </div>

  {#if comment.nested_comments}
    {#each comment.nested_comments as nestedComment}
      <div class="ml-12">
        <NestedComment {comment} {nestedComment} />
      </div>
    {/each}
  {/if}

  <ReplyToComment {comment} {user} />
</li>
