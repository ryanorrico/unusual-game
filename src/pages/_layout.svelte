<script>
  import { TabsTransition } from "@roxi/routify/decorators";
  import BottomNav from "./_components/BottomNav.svelte";
  // import { writable } from "svelte/store";
  import { backOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import TopNav from "./_components/TopNav.svelte";

  import { goto, url } from "@roxi/routify";

  import { user, layoutStore, podcastStore } from "../stores";

  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
  import Tabs from "./_components/Tabs/Tabs.svelte";
  import AudioPlayer from "./_components/AudioPlayer.svelte";

  // $: if (!$user) $goto("/login", {}, true);

  // import BottomNav from "./example/transitions/tabs/_components/BottomNav.svelte";
</script>

<style>
  :global(body) {
    padding: 0;
    background-color: #0e0e0f;
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
</style>

<div>
  {#if $layoutStore.topNav.open}
    <TopNav>
      <!-- <Tabs navigation items={topMenu} bind:selected={path} /> -->
      <div>
        <a id="logo" href="/">
          <!-- <div in:receive={{ key: 'logo' }} out:send={{ key: 'logo' }}> -->
          <!-- <Logo color={'white'} /> -->
          unusually
          <strong in:blur={{ duration: 1000 }}>focused</strong>
          <!-- </div> -->
        </a>
      </div>

      <Tabs />
    </TopNav>
  {/if}
  <!-- <TwinklingStars> -->

  <main
    class:topNavOpen={$layoutStore.topNav.open}
    class="{$layoutStore.topNav.open ? 'mt-16' : ''}  inset flex ">
    <slot decorator={TabsTransition} />
  </main>
  <!-- <TwinklingStars /> -->
  {#if $podcastStore.playerOpen}
    <div
      id="audio-wrapper"
      class="fixed bottom-10"
      in:fly={{ y: 50, easing: backOut }}>
      <AudioPlayer
        src={$podcastStore.audio_url}
        title={$podcastStore.title}
        composer="Gustav Holst"
        performer="USAF Heritage of America Band" />
    </div>
  {/if}
  <BottomNav />
</div>

<!-- we help people get unstuck and turn their ideas into products. turn their
personalities ito audience we help people get unstuck and we help epoeple get
unstuck with unique mearketing get unstuck with -->
