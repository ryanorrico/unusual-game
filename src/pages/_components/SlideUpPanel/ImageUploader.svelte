<script>
  import envURL from "../../../env-url";
  import {
    currentDocument,
    uploadedImage,
    user as currentUser,
  } from "../../../stores";
  import FilePond, { registerPlugin, supported } from "svelte-filepond";

  // Import the Image EXIF Orientation and Image Preview plugins
  // Note: These need to be installed separately
  // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
  //   import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
  import { onMount } from "svelte";
  import AlternateHamburger from "../../_components/TopNav/AlternateHamburger.svelte";
  // import AudioControls from "../_components/AudioPlayer/AudioControls.svelte";
  registerPlugin(FilePondPluginImagePreview);

  let pond;
  export let name = "user[image]";
  export let url = `/users/${$currentUser.slug}`;
  export let method = "PATCH";
  // export let onComplete =

  export let processOptions = {
    url: url,
    method: method,
    // headers: {
    //   "X-AUTH-TOKEN": $currentUser.auth_token,
    // },
    withCredentials: false,
    onprocessfile: (response) => console.log("response :>> ", response),
    onload: (data) => {
      if (name === "user[image]") updateUserStore(data);
      if (name === "document[cover_image]") updateDocumentStore(data);
      if (name === "document[images]") updateUploadedImageStore(data);
      // return res;
    },
    onerror: (response) => response.data,
    ondata: (formData) => {
      formData.append("Authorization", $currentUser.auth_token);
      return formData;
    },
  };

  const serverOptions = {
    url: envURL,
    timeout: 7000,
    process: processOptions,
  };

  function updateDocumentStore(data) {
    console.log("data :>> ", data);
    $currentDocument.cover_image = JSON.parse(data).cover_image;
    // localStorage.setItem("user", JSON.stringify($currentUser));
  }

  function updateUserStore(data) {
    $currentUser = JSON.parse(data);
    let authToken = JSON.parse(localStorage.getItem("user")).auth_token;
    $currentUser.auth_token = authToken;
    localStorage.setItem("user", JSON.stringify($currentUser));
  }

  function updateUploadedImageStore(data) {
    $uploadedImage = data;
  }

  // function handleInit() {}
  // function handleProcessFile(err, fileItem) {}

  function handleAddFile(err, fileItem) {
    pond.processFiles();
  }
</script>

<style global>
  @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
  /* use a hand cursor intead of arrow for the action buttons */
  .filepond--file-action-button {
    cursor: pointer;
  }

  /* the text color of the drop label*/
  .filepond--drop-label {
    color: white;
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
  }

  /* underline color for "Browse" button */
  .filepond--label-action {
    text-decoration-color: #aaa;
  }

  /* the background color of the filepond drop area */
  .filepond--panel-root {
    background-color: #eee;
  }

  /* the border radius of the drop area */
  .filepond--panel-root {
    border-radius: 0.5em;
  }

  /* the border radius of the file item */
  .filepond--item-panel {
    border-radius: 0.5em;
  }

  /* the background color of the file and file panel (used when dropping an image) */
  .filepond--item-panel {
    background-color: #555;
  }

  /* the background color of the drop circle */
  .filepond--drip-blob {
    background-color: #999;
  }

  /* the background color of the black action buttons */
  .filepond--file-action-button {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* the icon color of the black action buttons */
  .filepond--file-action-button {
    color: white;
  }

  /* the color of the focus ring */
  .filepond--file-action-button:hover,
  .filepond--file-action-button:focus {
    box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.9);
  }

  /* the text color of the file status and info labels */
  .filepond--file {
    color: white;
  }

  /* error state color */
  [data-filepond-item-state*="error"] .filepond--item-panel,
  [data-filepond-item-state*="invalid"] .filepond--item-panel {
    background-color: red;
  }

  [data-filepond-item-state="processing-complete"] .filepond--item-panel {
    background-color: green;
  }

  /* bordered drop area */
  .filepond--panel-root {
    background-color: transparent;
    border: 2px solid #2c3340;
  }
</style>

<FilePond
  bind:this={pond}
  labelIdle={'Upload a photo. Click or drag & drop.'}
  {name}
  server={serverOptions} />
