<script>
  // import { currentDocument } from "../../../stores/documentStore";
  export let document;
  export let userDocuments;
  import { user } from "../../../stores";
  import Api from "../../../utils/api";
  import { fly } from "svelte/transition";
  //   export let settingName;
  //   export let settingLabel;
  //   export let settingValue;

  function toggle() {
    if (document.post_id) {
      //   document.post_id = null;
      deletePost(document);
    } else {
      createPost(document);
    }
    // $currentDocument[settingName] = !$currentDocument[settingName];
    // saveToDB();
  }
  async function createPost(document) {
    const data = await Api.post("/posts/create_from_document", {
      user: {
        id: $user.id,
      },
      document: {
        id: document.slug,
      },
    });

    let obj = $userDocuments.findIndex((x) => x.slug == document.slug);
    $userDocuments[obj].post_id = data.id;
  }

  async function deletePost(document) {
    let params = {
      user: {
        id: $user.id,
      },
      document: {
        id: document.slug,
      },
    };
    const data = await Api.delete(`/posts/${document.post_id}`, params);
    if (data.success) {
      let obj = $userDocuments.findIndex((x) => x.slug == document.slug);
      $userDocuments[obj].post_id = null;
    }
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

<style>
</style>

<span
  on:click={toggle}
  data-id={document.post_id}
  role="checkbox"
  tabindex="0"
  aria-checked="true"
  aria-labelledby="privacy-option-label-1"
  aria-describedby="privacy-option-description-1"
  class="{document.post_id ? 'bg-green-500' : 'bg-gray-200'} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline">
  <span
    aria-hidden="true"
    class="{document.post_id ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200" />
</span>
