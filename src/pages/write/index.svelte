<script>
  import { route } from "@roxi/routify";
  import { backOut } from "svelte/easing";

  // import Editor from "./_components/Editor.svelte";
  // import { currentDocument } from "../../stores";
  import { fly } from "svelte/transition";
  import SquirrelWithLaptop from "../_components/svg/SquirrelWithLaptop.svelte";
</script>

<style>
  /* h1 {
    font-size: 34pt;
  }
  h2 {
    font-size: 28pt;
  }
  h3 {
    font-size: 22pt;
  }
  h4 {
    font-size: 20pt;
  }
  p {
    font-size: 16pt;
  } */
  a {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
    color: white;
  }
</style>

<!-- <Editor {currentDocument} /> -->
<!-- <div class="p-6 text-white">
  <h2>Large title</h2>
  <p>This is a paragraph.</p>
</div> -->
<div class="h-full flex flex-col items-center justify-center">
  <div in:fly={{ x: -100, easing: backOut, delay: 200 }} class="max-w-md">
    <SquirrelWithLaptop />
  </div>
  <!-- {#if window.routify.inBrowser} -->
  <a
    href="/write/new"
    in:fly={{ x: 100, delay: 200 }}
    class="py-3 text-lg rounded-md shadow px-6">
    New Document
  </a>
  <!-- {/if} -->
</div>
