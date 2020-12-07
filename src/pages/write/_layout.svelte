<script>
  // import { onMount, onDestroy } from "svelte";
  import { layoutStore, currentDocument, user } from "../../stores";
  import { fly } from "svelte/transition";
  import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  // import { goto, isActive } from "@roxi/routify";

  import { page } from "@roxi/routify";
  // import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
  // $: if (!$user || !$user.auth_token) $goto("/login", {}, true);
  //   onMount(() => ($layoutStore.topNav.open = false));
  //   onDestroy(() => ($layoutStore.topNav.open = true));
</script>

<style>
  div {
    overflow: hidden;
  }
  main {
    overflow-y: auto;
    height: 100%;
    margin: 0 auto;

    width: 100%;
    flex: 1;
    padding-top: 55px;
  }
  footer {
    background: rgb(22, 22, 24);
  }
</style>

<div class="flex h-screen">
  {#if $page.path === '/write/:slug/index'}
    <Sidebar {currentDocument} {user} />
  {/if}
  <main>
    <slot />
    {#if $currentDocument}
      <footer
        in:fly={{ y: 10 }}
        class="hidden sm:block absolute bottom-0  z-50 w-full text-gray-600 shadow text-xs py-1 px-4">
        <div class="flex justify-between items-center">
          <ul class="flex space-x-5">
            <li>{$currentDocument.word_count} Words</li>
            {#if $currentDocument.sentence_count}
              <li>{$currentDocument.sentence_count} Sentences</li>
            {/if}

            {#if $currentDocument.backspace_count}
              <li>{$currentDocument.backspace_count} Backspaces</li>
            {/if}

            <!-- <li>Paragraphs</li> -->
          </ul>
        </div>
      </footer>
    {/if}
  </main>
</div>

<!-- routify:options index=3 -->
