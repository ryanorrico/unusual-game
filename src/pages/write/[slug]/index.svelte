<script>
  import Api from "../../../utils/api";
  import envURL from "../../../env-url";
  import { ready, params } from "@roxi/routify";
  import { user, currentDocument, layoutStore } from "../../../stores";
  import Countable from "countable";
  import QuillEditor from "../_components/QuillEditor.svelte";
  import QuillToolbar from "../_components/QuillToolbar.svelte";
  import saveDocumentToDB from "../_functions/save-document-to-db";
  // import { activeSidebarTab } from "../../_components/Sidebar/Sidebar.svelte";
  import PhotoUploadOptions from "../../_components/SlideUpPanel/PhotoUploadOptions.svelte";
  import { fly } from "svelte/transition";
  import XCloseButtonForPanels from "../../_components/XCloseButtonForPanels.svelte";
  let headerHeight = 75;

  $: fetchDocument();

  async function fetchDocument() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.get(
        `/users/${$user.id}/documents/${$params.slug}`
      );
      $currentDocument = data;
      $ready();
    }
  }

  let userWritingTimeout;
  function handleContentChange(e) {
    const content = e.detail;

    $currentDocument.body = content.html;
    $currentDocument.word_count = counts(content).word_count;
    $currentDocument.sentence_count = counts(content).sentence_count;
    console.log("counts(content) :>> ", counts(content));
    clearTimeout(userWritingTimeout);
    userWritingTimeout = setTimeout(() => {
      clearTimeout(userWritingTimeout);
      saveDocumentToDB(currentDocument);
    }, 1000);
    // updateDocumentStore(e.detail);
  }

  const counts = (content) => {
    let obj = {};
    Countable.count(
      content.string,
      (counter) =>
        (obj = {
          word_count: counter.words,
          sentence_count: counter.sentences,
        }),
      { stripTags: false }
    );
    return obj;
  };

  let files;
  function handleSubmit() {
    console.log("this :>> ", this);
    let formData = new FormData();
    // formData.append('title', this.state.title);
    // formData.append('body', this.state.body);
    formData.append("document[image]", files[0]);
    const config = {
      method: "PATCH",
      headers: {
        Authorization: $user.auth_token,
        Accept: "application/json",
      },
      body: formData,
    };
    return fetch(
      `${envURL}/users/${$user.id}/documents/${$currentDocument.slug}`,
      config
    )
      .then((res) => res.json())
      .then((res) => ($currentDocument.image = res.image))
      .catch((e) => console.error(e));
  }

  function openSlideUpPanelWithPhotoUpload() {
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "document[cover_image]",
      text: "Attach a cover photo",
    };
    $layoutStore.slideUpPanel.open = true;
  }

  async function removeDocumentPhoto() {
    $currentDocument.cover_image = null;
    //remove on server too
  }

  function handleKeydown(e) {
    if (e.key === "Backspace") {
      if ($currentDocument.backspace_disabled) {
        e.preventDefault();
        return;
      }
      $currentDocument.backspace_count += 1;
    }
  }
</script>

<style>
  .rightPanelClosed {
    width: 800px;
  }
  p {
    color: black;
  }
  input {
    color: black;
  }

  form button {
    width: 100px;
    background-color: blue;
    margin-bottom: 20px;
  }
  header {
    background-position: center;
    background-size: cover;
    height: 250px;
    padding: 16px;
    transition: height 200ms;
    position: relative;
  }

  header button {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
  }
  button#photo-options {
    width: 40px;
    bottom: 10px;
    right: 10px;
  }
  button#remove-photo {
    bottom: 10px;
    right: 10px;
  }
  header button svg {
    width: 100%;
  }
</style>

<svelte:window on:keydown={handleKeydown} />

{#if $currentDocument}
  <div class="max-w-4xl mx-auto">
    <header
      class="w-full bg-gray-900 overflow-hidden relative"
      style="background-image: url({$currentDocument.cover_image});
            height: {$currentDocument.cover_image ? 250 : 60}px;">
      <button
        on:click={openSlideUpPanelWithPhotoUpload}
        in:fly={{ y: -20, delay: 800 }}
        id="photo-options">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 99.6 99.6"
          fill="currentColor">
          <g id="Regular-M_1_" transform="matrix(1 0 0 1 1391.3 1126)">
            <path
              d="M-1341.5-1026.4c27.2,0,49.8-22.6,49.8-49.8c0-27.2-22.6-49.8-49.9-49.8c-27.2,0-49.8,22.6-49.8,49.8
              C-1391.3-1048.9-1368.7-1026.4-1341.5-1026.4z M-1364-1053.4c-5.3,0-8-2.6-8-7.9v-26.6c0-5.3,2.7-7.9,8-7.9h6.3
              c2,0,2.5-0.5,3.7-1.7l2.1-2.3c1.3-1.4,2.6-2.1,5.2-2.1h10.2c2.6,0,4,0.7,5.2,2.1l2.1,2.3c1.1,1.3,1.8,1.7,3.8,1.7h6.5
              c5.3,0,8,2.6,8,7.9v26.6c0,5.2-2.7,7.9-8,7.9H-1364z M-1341.5-1059.7c8.3,0,15-6.5,15-15.1c0-8.3-6.7-15.1-15-15.1
              s-15.1,6.7-15.1,15.1C-1356.6-1066.4-1349.8-1059.7-1341.5-1059.7z M-1321.4-1082.1c1.9,0,3.4-1.5,3.4-3.4c0-1.9-1.5-3.4-3.4-3.4
              c-1.9,0-3.5,1.5-3.5,3.4C-1324.8-1083.6-1323.3-1082.1-1321.4-1082.1z M-1341.5-1064.1c-5.9,0-10.7-4.8-10.7-10.7
              s4.8-10.7,10.7-10.7s10.7,4.8,10.7,10.7C-1330.8-1068.9-1335.6-1064.1-1341.5-1064.1z" />
          </g>
        </svg>
      </button>

      {#if $currentDocument.image}
        <button id="remove-photo" on:click={removeDocumentPhoto}>
          <XCloseButtonForPanels />
        </button>
      {/if}
    </header>

    <div class="bg-white p-4 pb-20 h-full">
      <input
        id="title"
        class="border-b border-gray-300 w-full mb-4 pb-1 pt-2 active:outline-none focus:outline-none"
        bind:value={$currentDocument.title}
        on:change={saveDocumentToDB} />
      <QuillEditor {currentDocument} on:contentChange={handleContentChange} />
    </div>
  </div>
{:else}nope{/if}
