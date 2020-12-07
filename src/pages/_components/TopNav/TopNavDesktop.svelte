<script>
  import StatusBarPlaceholder from "../StatusBarPlaceholder.svelte";
  import Logo from "../Logo.svelte";
  import { crossfade, fly, blur } from "svelte/transition";
  // import { ClassBuilder } from "../../utils/classes";
  let c =
    "top-0 w-full items-center justify-between flex-wrap flex left-0 z-30 p-0 fixed ";
  // export let classes = classesDefault;
  // const cb = new ClassBuilder(classes, classesDefault);
  // $: c = cb.flush().add($$props.class).get();

  import { quintOut, backOut, backIn } from "svelte/easing";
  import { layoutStore } from "../../../stores";
  // const [send, receive] = crossfade({
  //   duration: (d) => Math.sqrt(d * 200),

  //   fallback(node, params) {
  //     const style = getComputedStyle(node);
  //     const transform = style.transform === "none" ? "" : style.transform;

  //     return {
  //       duration: 600,
  //       easing: quintOut,
  //       css: (t) => `
  //           transform: ${transform} scale(${t});
  //           opacity: ${t}
  //         `,
  //     };
  //   },
  // });
</script>

<style>
  nav {
    background: rgba(9, 9, 9, 0.96);
  }
  /* :global(#top-nav) {
    height: 44pt;
    padding: 0 8pt;
    font-family: "Burbank Medium";
    background-color: black;
    border-bottom: 1px solid;
    border-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    z-index: 1000; */
  /* box-shadow: 0 3px 2px -2px rgba(82, 82, 82, 0.29); */
  /* } */
  /* a {
    width: 100px;
  } */

  strong {
    font-family: "Burbank Bold";
  }
  #logo {
    font-size: 20pt;
  }
  a svg {
    fill: rgb(141, 141, 141);
    /* width: 50%; */
  }
</style>

<!-- <StatusBarPlaceholder backgroundColor={'rgba(0, 0, 0, 0.5)'} /> -->

<nav
  in:fly={{ duration: 200, y: -20, easing: backOut }}
  out:fly={{ duration: 200, y: -20, easing: backIn }}
  id="top-nav"
  class={c}>
  <slot />
  <!-- <a href="/" class="font-extrabold text-gray-700">UF</a> -->

  <!-- <div><a href="">blog</a> <a href="">products</a> <a>apply</a></div> -->
</nav>
