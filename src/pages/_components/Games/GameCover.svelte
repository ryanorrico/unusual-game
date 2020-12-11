<script>
  export let currentGame, currentGameScore, user, currentUserIsPlaying;
  import { fly, fade } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import CameraCircleIcon from "../../_components/svg/CameraCircleIcon.svelte";
  import { layoutStore } from "../../../stores";
  import Api from "../../../utils/api";
  //   let membershipActive;
  //   if ($user.memberships.games.find((g) => g.id == $currentGame.id)) {
  //     membershipActive = true;
  //   } else {
  //     membershipActive = false;
  //   }

  async function toggleMembership() {
    const data = await Api.post(
      `/games/${$currentGame.slug}/toggle_membership`
    );
    if (data.ok) {
      if (data.membership_active) $currentUserIsPlaying = true;
      if (!data.membership_active) {
        $user.memberships.games = $user.memberships.games.filter(
          (g) => g.id == $currentGame.id
        );
        $currentUserIsPlaying = false;
        $currentGameScore = 0;
        $currentGame.tasks.map((t) => (t.complete = false));
      }
    }
  }
  function openSlideUpPanelWithPhotoUpload() {
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "game[cover_image]",
      text: "Upload cover photo",
    };
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

  button#photo-options {
    width: 60px;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 40px;
    right: 20px;
  }
  button svg {
    width: 100%;
  }

  button#toggle-membership {
    color: white;
    padding: 8px 20px;
    border-radius: 4px;
    position: absolute;
    top: 40px;
    left: 20px;
    background: linear-gradient(180deg, #550ddb 0, #760be0 100%);
  }

  button#toggle-membership.membershipActive {
    background: linear-gradient(180deg, #202020 0, #303030 100%);
  }
  input[type="file"] {
    display: none;
  }
</style>

<header
  in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
  class="relative">
  <div
    in:fade={{ delay: 300, duration: 500 }}
    class="overlay absolute w-full h-full" />
  <img src={$currentGame.cover_image} class="object-cover h-full w-full" />
  <h1
    in:fly={{ y: -30, easing: backOut, delay: 300 }}
    class="text-4xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
    <!-- {$currentGame.name} -->

    <span>Score</span>
    <h1 class="text-8xl font-extrabold ">{$currentGameScore}</h1>
    <br />
    <!-- <span class="font-light">{$currentUser.name.split(' ')[1]}</span> -->
  </h1>
  <!-- <div class="text-white">{$currentUserIsPlaying}</div> -->
  <button
    class:membershipActive={$currentUserIsPlaying}
    class="focus:outline-none"
    on:click={toggleMembership}
    id="toggle-membership">{$currentUserIsPlaying ? 'Quit' : 'Join'}
    {$currentGame.name}</button>

  <button
    on:click={openSlideUpPanelWithPhotoUpload}
    in:fly={{ y: -20, delay: 800 }}
    id="photo-options">
    <CameraCircleIcon />
  </button>
</header>
