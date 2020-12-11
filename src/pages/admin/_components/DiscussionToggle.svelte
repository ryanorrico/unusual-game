<script>
  // import { currentDocument } from "../../../stores/documentStore";
  export let post, postsStore;
  // export let userDocuments;
  import { user } from "../../../stores";
  import Api from "../../../utils/api";
  import { fly, fade } from "svelte/transition";
  //   export let settingName;
  //   export let settingLabel;
  //   export let settingValue;

  // toggleDiscussionActivated();
  // function toggle() {
  // if (post.discussion.activated) {
  // } else {
  // createDiscussion();
  // }
  // $currentDocument[settingName] = !$currentDocument[settingName];
  // saveToDB();
  // }
  async function createDiscussion() {
    const data = await Api.post("/discussions", {
      user: {
        id: $user.id,
      },
      discussion: {
        title: post.title,
        post_id: post.id,
      },
    });
    let obj = $postsStore.findIndex((x) => x.id == post.id);
    $postsStore[obj].discussion = data;
  }
  async function deleteDiscussion() {
    const data = await Api.delete(`/discussions/${post.discussion.id}`, {
      user: {
        id: $user.id,
      },
      discussion: {
        title: post.title,
        post_id: post.id,
      },
    });
    console.log("data :>> ", data);
    let obj = $postsStore.findIndex((x) => x.id == post.id);
    $postsStore[obj].discussion = null;
    delete $postsStore[obj].discussion;
  }

  async function toggleDiscussionActivated() {
    let obj = $postsStore.findIndex((x) => x.id == post.id);
    $postsStore[obj].discussion.activated = !$postsStore[obj].discussion
      .activated;
    const data = await Api.patch(
      `/posts/${post.slug}/toggle_discussion_activated`
    );
    if (data) {
      $postsStore[obj].discussion.activated = data.discussion.activated;
    }
    // delete $postsStore[obj].discussion;
  }

  //   const saveToDB = async () => {
  //     let data = await Api.patch(
  //       `/users/${$user.id}/documents/${$currentDocument.id}`,
  //       {
  //         document: {
  //           [settingName]: $currentDocument[settingName],
  //         },
  //       }
  //     );
  //     $currentDocument[settingName] = data[settingName];
  //   };
</script>

{#if !post.discussion}
  <button
    class="bg-gray-200 text-xs rounded py-1 px-2"
    on:click={createDiscussion}>Create Discussion</button>
{:else if post.discussion}
  <span
    transition:fly|local={{ y: -20, delay: 300 }}
    on:click={toggleDiscussionActivated}
    data-id={post.id}
    role="checkbox"
    tabindex="0"
    aria-checked="true"
    aria-labelledby="privacy-option-label-1"
    aria-describedby="privacy-option-description-1"
    class="{post.discussion.activated ? 'bg-green-500' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
    <span
      aria-hidden="true"
      class="{post.discussion.activated ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
  </span>
{/if}
