<script>
  import { TabsTransition } from "@roxi/routify/decorators";
  import BottomNav from "./_components/BottomNav.svelte";
  // import { writable } from "svelte/store";
  // import { backOut, cubicInOut, cubicOut } from "svelte/easing";
  // import { fly } from "svelte/transition";
  import TopNavDesktop from "./_components/TopNav/TopNavDesktop.svelte";
  import Tabs from "./_components/Tabs/Tabs.svelte";
  import ActionCable from "actioncable";
  const websocketUrl = "ws://127.0.0.1:3001/cable";
  // import { goto, url, page } from "@roxi/routify";

  import {
    user,
    layoutStore,
    podcastStore,
    notificationStore,
  } from "../stores";

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }

  let cable;
  async function subscribeToActionCableNotificationChannel() {
    cable = ActionCable.createConsumer(websocketUrl);
    cable.subscriptions.create("NotificationChannel", {
      received: function (data) {
        if (!data.user.id == $user.id) {
          $notificationStore = [...$notificationStore, data];
        }
      },
    });
  }
  // subscribeToActionCableNotificationChannel();
  // import AudioPlayer from "./_components/AudioPlayer.svelte";
  // import TopNavMobile from "./_components/TopNav/TopNavMobile.svelte";
  // import SlideoverPanel from "./_components/SlideoverPanel/SlideoverPanel.svelte";
  import SlideUpPanel from "./_components/SlideUpPanel/SlideUpPanel.svelte";
  import Notifications from "./_components/Notifications/Notifications.svelte";
  // import XCloseButtonForPanels from "./_components/XCloseButtonForPanels.svelte";
  // import { isActive } from "@roxi/routify";

  // $: if (!$user) $goto("/login", {}, true);

  // import BottomNav from "./example/transitions/tabs/_components/BottomNav.svelte";
  // function closeAudioPlayer() {
  //   $podcastStore.playerOpen = false;
  // }
  let audioPlayerHeight;
</script>

<style>
  :global(body) {
    padding: 0;
    background-color: #0e0e0f;
    background-image: radial-gradient(
        ellipse at 10% -10em,
        rgba(255, 41, 244, 0.12),
        transparent 25em
      ),
      radial-gradient(
        ellipse at 35% -20em,
        rgba(205, 41, 255, 0.14),
        transparent 35em
      ),
      radial-gradient(ellipse at bottom, #2b2b2e, #101011);
  }
  main {
    /* padding-top: 50px; */
    /* transform: scale(0.85); */
    transition: all 300ms;
  }

  * :global(.inset) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  main.inset {
    overflow: hidden;
  }
  .topNavOpen {
    /* margin-top: 64px; */
  }
  #logo {
    font-family: "Burbank Medium";
    font-size: 25px;
    /* color: rgba(255, 255, 255, 0.8); */
    color: white;
  }
</style>

<!-- <SlideoverPanel /> -->
<div>
  <!-- {#if $layoutStore.topNav.open} -->
  <div class="hidden sm:block">
    <TopNavDesktop {user}>
      <Tabs />
    </TopNavDesktop>
  </div>
  <!-- <div class="sm:hidden">
      <TopNavMobile {user}>sd</TopNavMobile>
    </div> -->
  <!-- {/if} -->
  <!-- <TwinklingStars> -->

  <main class="inset flex ">
    <slot decorator={TabsTransition} />
  </main>

  <!-- <main
    class:topNavOpen={$layoutStore.topNav.open}
    class="{$layoutStore.topNav.open ? '' : ''}  inset flex ">
    <slot decorator={TabsTransition} />
  </main> -->
  <!-- <TwinklingStars /> -->
  {#if $layoutStore.slideUpPanel.open}
    <SlideUpPanel />
  {/if}
  {#if $notificationStore.length > 0}
    <Notifications {notificationStore} />
  {/if}

  <!-- {#if $podcastStore.playerOpen}
    <div
      bind:clientHeight={audioPlayerHeight}
      id="audio-wrapper"
      class="fixed bottom-14 sm:bottom-0 bg-black bg-opacity-75 w-full px-4 flex items-center justify-between"
      transition:fly={{ y: audioPlayerHeight + 10, easing: cubicOut, opacity: 1 }}>
      <AudioPlayer
        src={$podcastStore.audio_url}
        title={$podcastStore.title}
        composer="Gustav Holst"
        performer="USAF Heritage of America Band" />
      <button on:click={closeAudioPlayer}>
        <XCloseButtonForPanels />
      </button>
    </div>
  {/if}  -->

  <BottomNav />
</div>

<!-- we help people get unstuck and turn their ideas into products. turn their
personalities ito audience we help people get unstuck and we help epoeple get
unstuck with unique mearketing get unstuck with -->
