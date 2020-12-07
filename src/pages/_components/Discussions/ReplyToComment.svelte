<script>
  export let user, comment;
  import { currentDiscussion } from "../../../stores";
  import Api from "../../../utils/api";
  import { slide } from "svelte/transition";
  let nestedCommentForm;
  let commentBody;

  async function submitComment() {
    let selectedComment = $currentDiscussion.comments.find(
      (x) => x.id == comment.id
    );
    console.log(
      "selectedComment.nested_comments :>> ",
      selectedComment.nested_comments
    );
    selectedComment.nested_comments = [
      ...selectedComment.nested_comments,
      {
        body: commentBody.trim(),
        user: { name: $user.name, image: $user.image },
      },
    ];
    $currentDiscussion = $currentDiscussion;
    let data = {
      parent_id: comment.id,
      body: commentBody.trim(),
    };
    commentBody = "";

    const response = await Api.post(
      `/discussions/${$currentDiscussion.id}/comments/`,
      data
    );
    console.log("response :>> ", response);
  }

  function expand() {
    // this.rows = 3;
  }

  function collapse() {
    // this.rows = 1;
  }
  function handleKeydown(e) {
    console.log("commentBody :>> ", commentBody);
    // console.log("commentBody.length :>> ", commentBody.length);
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

<div transition:slide>
  <div class="flex space-x-2">
    <img src={$user.image} class="w-8 h-8 rounded-full object-cover" />
    <div
      id="reply-input"
      contenteditable
      on:keydown={handleKeydown}
      on:focus={expand}
      bind:this={nestedCommentForm}
      bind:innerHTML={commentBody}
      data-placeholder="Write a comment"
      class="rounded bg-gray-900 placeholder-gray-600 text-white p-2 w-full " />
  </div>
  <div class="flex justify-end">
    <!-- <button
      on:click={submitComment}
      class="bg-purple-600 px-3 py-1 rounded text-white text-xs">Submit</button> -->
  </div>
</div>
