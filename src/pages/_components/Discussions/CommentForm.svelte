<script>
  let commentForm;
  export let currentDiscussion, user;

  import { params } from "@roxi/routify";
  import Api from "../../../utils/api";
  async function submitComment() {
    $currentDiscussion.comments = [
      {
        body: $currentDiscussion.newComment,
        user: {
          image: $user.image,
          name: $user.name,
        },
      },
      ...$currentDiscussion.comments,
    ];

    let data = {
      body: $currentDiscussion.newComment,
      user_id: $user.id,
    };
    const response = await Api.post(
      `/discussions/${$params.slug}/comments`,
      data
    );
    $currentDiscussion.newComment = "";
    console.log("response :>> ", response);
  }
</script>

<textarea
  class="p-2 w-full rounded-md"
  rows="5"
  bind:this={commentForm}
  bind:value={$currentDiscussion.newComment} />
<button
  on:click={submitComment}
  class="bg-purple-600 px-3 py-1 rounded text-white">Submit</button>
