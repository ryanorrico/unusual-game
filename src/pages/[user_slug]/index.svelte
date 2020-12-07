<script>
  import { user as currentUser, layoutStore } from "../../stores";
  import { fade, fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import envURL from "../../env-url";
  import Api from "../../utils/api";
  // export let user_slug;
  import { page, goto, ready, params } from "@roxi/routify";
  import PhotoUploadOptions from "../_components/SlideUpPanel/PhotoUploadOptions.svelte";

  // import ImageUploader from "../_components/SlideUpPanel/ImageUploader.svelte";
  let userProfile;

  $: fetchUserProfile();

  async function fetchUserProfile() {
    const data = await Api.get(`/users/${$params.user_slug}`);
    userProfile = data;
    console.log("userProfile :>> ", userProfile);
    $ready();
  }

  let files;
  function handleSubmit() {
    let formData = new FormData();
    formData.append("user[image]", files[0]);
    const config = {
      method: "PATCH",
      headers: {
        Authorization: $currentUser.auth_token,
        Accept: "application/json",
      },
      body: formData,
    };
    return fetch(`${envURL}/users/${$currentUser.slug}`, config)
      .then((res) => res.json())
      .then((data) => {
        $currentUser = data;
        let authToken = JSON.parse(localStorage.getItem("user")).auth_token;
        $currentUser.auth_token = authToken;
        localStorage.setItem("user", JSON.stringify($currentUser));
      })
      .catch((e) => console.error(e));
  }
  // }

  function openSlideUpPanelWithPhotoUpload() {
    console.log("$layoutStore :>> ", $layoutStore);
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "user[image]",
      text: "Upload a photo",
    };
    console.log("PhotoUploadOptions :>> ", PhotoUploadOptions);
    $layoutStore.slideUpPanel.open = true;
  }
</script>

<style>
  header {
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  header h1 {
    z-index: 10;
    line-height: 0.8;
  }
  .overlay {
    /* z-index: 0; */
    background: linear-gradient(
      0deg,
      rgba(14, 14, 15, 1) 0%,
      rgba(1, 1, 1, 0.2) 7%,
      rgba(1, 1, 1, 0.2) 18%,
      rgba(3, 3, 3, 0.2) 70%,
      rgba(13, 13, 13, 1) 100%
    );
  }

  button {
    width: 60px;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 40px;
    right: 20px;
  }
  button svg {
    width: 100%;
  }

  input[type="file"] {
    display: none;
  }
</style>

<div class="w-full lg:max-w-4xl mx-auto">
  {#if userProfile}
    {#if !userProfile.name === $currentUser.name}
      <header
        in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
        class="relative">
        <div
          in:fade={{ delay: 300, duration: 500 }}
          class="overlay absolute w-full h-full" />
        <img src={userProfile.image} class="object-cover h-full" />
        <h1
          in:fly={{ y: -30, easing: backOut, delay: 300 }}
          class="text-6xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
          {userProfile.name.split(' ')[0]}
          <br />
          <span class="font-light">{userProfile.name.split(' ')[1]}</span>
        </h1>
        <div
          in:fly={{ y: -20, delay: 800 }}
          id="badge"
          class="absolute top-4 left-4 rounded px-2 py-.5">
          <!-- MARKETING -->
        </div>
      </header>
    {/if}
    {#if userProfile.name === $currentUser.name}
      <header
        in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
        class="relative">
        <div
          in:fade={{ delay: 300, duration: 500 }}
          class="overlay absolute w-full h-full" />
        <img src={$currentUser.image} class="object-cover h-full w-full" />
        <h1
          in:fly={{ y: -30, easing: backOut, delay: 300 }}
          class="text-6xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
          {$currentUser.name.split(' ')[0]}
          <br />
          <span class="font-light">{$currentUser.name.split(' ')[1]}</span>
        </h1>

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
      </header>
    {/if}

    {#if userProfile.name === $currentUser.name}
      <!-- <div class="h-64 w-full bg-red-500" /> -->
    {/if}
  {/if}
</div>
