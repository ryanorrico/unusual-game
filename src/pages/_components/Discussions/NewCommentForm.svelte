<script>
  export let user;
  export let comment;
  import { currentDiscussion } from "../../../stores";
  import Api from "../../../utils/api";
  import { fade } from "svelte/transition";
  let newCommentObj;
  let newCommentForm;
  let newCommentFormData = {
    body: "",
    nested_comments: [],
    user_id: $user.id,
    user: { id: $user.id, name: $user.name, image: $user.image },
  };

  function buildNewCommentObject() {
    if (comment) {
      newCommentFormData.parent_id = comment.id;
    }
    newCommentObj = Object.assign({}, newCommentFormData);
    newCommentObj.created_at = Date.now();
    newCommentFormData.body = "";
    if (!comment) {
      $currentDiscussion.comments = [
        newCommentObj,
        ...$currentDiscussion.comments,
      ];
    } else {
      comment.nested_comments = [...comment.nested_comments, newCommentObj];
    }
    submitComment();
  }

  async function submitComment() {
    const response = await Api.post(
      `/discussions/${$currentDiscussion.id}/comments`,
      newCommentObj
    );
    newCommentObj.id = response.id;
    $currentDiscussion = $currentDiscussion;
  }

  function handleKeydown(e) {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      newCommentFormData.body.length > 0
    ) {
      e.preventDefault();
      buildNewCommentObject();
    } else if (
      e.key === "Enter" &&
      !e.shiftKey &&
      newCommentFormData.body.length == 0
    ) {
      e.preventDefault();
    }
  }
</script>

<style>
  [data-placeholder]:empty:before {
    content: attr(data-placeholder);
    color: rgba(255, 255, 255, 0.226);
    /* font-style: italic; */
  }
  textarea {
    resize: none;
    color: white;

    padding: 8px;
  }
  textarea:focus {
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  #reply-input {
    font-size: 16px;
  }
</style>

<div in:fade|local={{ delay: 300 }}>
  <div class="flex space-x-2">
    <img src={$user.image} class="w-8 h-8 rounded-full object-cover" />
    <div
      id="reply-input"
      contenteditable
      on:keydown={handleKeydown}
      bind:this={newCommentForm}
      bind:innerHTML={newCommentFormData.body}
      data-placeholder="Write a comment"
      class="rounded bg-gray-900 border border-gray-800 placeholder-gray-600 text-white p-2 w-full " />
  </div>
</div>
