<script>
  export let user, comment;
  import { currentDiscussion } from "../../../stores";
  import Api from "../../../utils/api";
  import { slide, fade } from "svelte/transition";

  let nestedCommentForm;
  let newCommentFormData = {
    body: "",
    parent_id: "",
    user_id: $user.id,
    user: { id: $user.id, name: $user.name, image: $user.image },
    // nested_comments: [],
  };

  async function submitComment() {
    let selectedComment = $currentDiscussion.comments.find(
      (x) => x.id == comment.id
    );
    const newCommentObj = Object.assign({}, newCommentFormData);
    newCommentFormData.body = "";
    newCommentObj.parent_id = selectedComment.id;
    // add comment to store immediately so it shows up right away. you'll add ID
    // after Rails response
    selectedComment.nested_comments = [
      ...selectedComment.nested_comments,
      newCommentObj,
    ];

    $currentDiscussion = $currentDiscussion;

    const data = await Api.post(
      `/discussions/${$currentDiscussion.id}/comments/`,
      newCommentObj
    );

    newCommentObj.id = data.id;
    $currentDiscussion = $currentDiscussion;
  }

  function handleKeydown(e) {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      nestedCommentForm.textContent.length > 0
    ) {
      e.preventDefault();
      submitComment();
    } else if (
      e.key === "Enter" &&
      !e.shiftKey &&
      nestedCommentForm.textContent.length == 0
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
      bind:this={nestedCommentForm}
      bind:innerHTML={newCommentFormData.body}
      data-placeholder="Write a comment"
      class="rounded bg-gray-900 border border-gray-800 placeholder-gray-600 text-white p-2 w-full " />
  </div>
</div>
