<script>
  import { user as currentUser, layoutStore } from "../../stores";
  import { fade, fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import envURL from "../../env-url";
  import Api from "../../utils/api";
  import { updateUserStore } from "../../utils/yootils";
  // export let user_slug;
  import { page, goto, ready, params } from "@roxi/routify";
  import PhotoUploadOptions from "../_components/SlideUpPanel/PhotoUploadOptions.svelte";
  import CameraCircleIcon from "../_components/svg/CameraCircleIcon.svelte";

  // import ImageUploader from "../_components/SlideUpPanel/ImageUploader.svelte";
  let userProfile;

  $: fetchUserProfile();

  async function fetchUserProfile() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.get(`/users/${$params.user_slug}`);
      updateUserStore(data);
      $currentUser = $currentUser;
      console.log("$currentUser :>> ", $currentUser);
      userProfile = data;
      $ready();
    }
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
          <CameraCircleIcon />
        </button>
      </header>
    {/if}
    <!-- <div class="text-white">{JSON.stringify($currentUser.memberships)}</div> -->
    <h2 class="text-white font-bold">Courses</h2>
    {#if $currentUser.memberships.courses}
      {#each $currentUser.memberships.courses as course}
        <ul>
          <li class="text-white">
            <a href="/courses/{course.slug}"> {course.name} </a>
          </li>
        </ul>
      {/each}
    {/if}

    {#if $currentUser.memberships.games}
      <h2 class="text-white font-bold">Games</h2>
      {#each $currentUser.memberships.games as game}
        <ul>
          <li class="text-white">
            <a href="/play/{game.slug}"> {game.name} </a>
          </li>
        </ul>
      {/each}
    {/if}

    <!--         
              {#if membership.game}
                <h2 class="text-white font-bold">Games</h2>
                <ul>
                  <li>{membership.game.slug}</li>
                </ul>
              {/if} -->

    {#if userProfile.name === $currentUser.name}
      <!-- <div class="h-64 w-full bg-red-500" /> -->
    {/if}
  {/if}
</div>
