<script>
  let commentForm;
  export let currentDiscussion, user;
  import Api from "../../../utils/api";

  let newCommentFormData = {
    body: "",
    nested_comments: [],
    user_id: $user.id,
    user: { id: $user.id, name: $user.name, image: $user.image },
  };

  async function submitComment() {
    let newCommentObj = Object.assign({}, newCommentFormData);
    newCommentObj.created_at = Date.now();
    newCommentFormData.body = "";
    $currentDiscussion.comments = [
      newCommentObj,
      ...$currentDiscussion.comments,
    ];

    const response = await Api.post(
      `/discussions/${$currentDiscussion.id}/comments`,
      newCommentObj
    );
    newCommentObj.id = response.id;
    $currentDiscussion = $currentDiscussion;
  }
</script>

<div class="flex flex-col space-y-3">
  <div class="flex space-x-2">
    <img src={$user.image} class="w-8 h-8 rounded-full" />
    <textarea
      class="p-2 w-full rounded"
      rows="2"
      placeholder="Write a comment."
      bind:this={commentForm}
      bind:value={newCommentFormData.body} />
  </div>

  <div class="flex justify-end">
    <button
      on:click={submitComment}
      class="bg-purple-600 w-20 py-1 rounded text-white">Submit</button>
  </div>
</div>
