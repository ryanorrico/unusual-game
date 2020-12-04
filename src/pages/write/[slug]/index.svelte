<script>
  import Api from "../../../utils/api";
  import envURL from "../../../env-url";
  import { ready, params } from "@roxi/routify";
  import { user, currentDocument } from "../../../stores";
  import QuillEditor from "../_components/QuillEditor.svelte";
  import QuillToolbar from "../_components/QuillToolbar.svelte";
  import saveDocumentToDB from "../_functions/save-document-to-db";
  // import Form from "../_components/Form.svelte";
  // import { DirectUpload } from "@rails/activestorage";
  if (window.routify.inBrowser) {
    async function fetchDocument() {
      const data = await Api.get(
        `/users/${$user.id}/documents/${$params.slug}`
      );
      $currentDocument = data;
      $ready();
    }

    $: fetchDocument();
  }

  let userWritingTimeout;
  function handleContentChange(e) {
    const content = e.detail;
    $currentDocument.body = content.html;

    clearTimeout(userWritingTimeout);
    userWritingTimeout = setTimeout(() => {
      clearTimeout(userWritingTimeout);
      saveDocumentToDB(currentDocument);
    }, 1000);
    // updateDocumentStore(e.detail);
  }
  let files;
  // $: if (files) {
  //   // Note that `files` is of type `FileList`, not an Array:
  //   // https://developer.mozilla.org/en-US/docs/Web/API/FileList
  //   console.log(files);
  //   for (const file of files) {
  //     console.log(`${file.name}: ${file.size} bytes`);
  //   }
  // }
  //   let submit = false;
  // const uploadFile = (file) => {
  //   // your form needs the file_field direct_upload: true, which
  //   //  provides data-direct-upload-url
  //   const url = input.dataset.directUploadUrl;
  //   const upload = new DirectUpload(file, url);

  //   upload.create((error, blob) => {
  //     if (error) {
  //       // Handle the error
  //     } else {
  //       // Add an appropriately-named hidden input to the form with a
  //       //  value of blob.signed_id so that the blob ids will be
  //       //  transmitted in the normal upload flow
  //       const hiddenField = document.createElement("input");
  //       hiddenField.setAttribute("type", "hidden");
  //       hiddenField.setAttribute("value", blob.signed_id);
  //       hiddenField.name = input.name;
  //       document.querySelector("form").appendChild(hiddenField);
  //     }
  //   });
  // };
  // let files;
  // let form = {};
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

  // const handleSubmit = (e) => {
  //   console.log("files :>> ", files);
  //   console.log("e.target :>> ", e.target);
  //   // console.log("form :>> ", form);
  //   let formData = new FormData(e.target);
  //   console.log("formData :>> ", formData);
  //   // console.log("formData :>> ", formData);
  //   // const data = Api.patch(
  //   //   `/users/${$user.id}/documents/${$currentDocument.slug}`,
  //   //   {
  //   //     document: {
  //   //       image: files[0].name,
  //   //     },
  //   //   }
  //   // );
  //   console.log("data :>> ", data);
  //   // console.log("event :>> ", event);

  // };
</script>

<style>
  main {
    color: black;
    margin-top: 30px;
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
    height: 300px;
  }
</style>

{#if $currentDocument}
  <!-- <img src={$currentDocument.image} /> -->
  <!-- {$currentDocument.title} -->
  <main class="max-w-4xl mx-auto">
    <header
      class="w-full bg-gray-900 rounded-t-3xl overflow-hidden"
      style="background-image: url({$currentDocument.image})">
      <form on:submit|preventDefault={handleSubmit} class="flex flex-col">
        <label for="image">Upload a picture:</label>
        <input
          bind:files
          accept="image/png, image/jpeg"
          id="image"
          name="image"
          type="file" />

        <!-- <label for="many">Upload multiple files of any type:</label> -->
        <!-- <input bind:files id="many" multiple type="file" /> -->
        <button type="submit"> Submit </button>
      </form>
    </header>
    <!-- <Form bind:form on:submit={handleSubmit} {files} /> -->

    <!-- <QuillToolbar /> -->
    <div class="bg-white">
      <input id="title" bind:value={$currentDocument.title} />
      <!-- on:change={saveDocumentToDB}  -->

      <QuillEditor {currentDocument} on:contentChange={handleContentChange} />
    </div>
  </main>
{:else}nope{/if}
