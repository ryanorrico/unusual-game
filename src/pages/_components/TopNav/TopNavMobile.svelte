<script>
  // import AlternateHamburger from "./AlternateHamburger.svelte";
  export let user;
  // import Hamburger from "./Hamburger.svelte";
</script>

<style>
  nav {
    position: fixed;
    top: 0;
    min-height: 35pt;
    width: 100%;
    padding: 0 8pt;
    background: rgba(0, 0, 0, 0.97);
    z-index: 100;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #logo {
    font-weight: 800;
    font-size: 12pt;
  }

  a {
    color: #8614f8;
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
  }
  button {
    height: 100%;
    padding: 16px;
  }
</style>

<nav class="flex justify-between">
  <a href="/" class="text-indigo-600" id="logo">UF</a>
  <!-- <a href="/" id="">Login</a> -->

  <!-- <div><button class="w-1/5 flex items-center justify-center">B</button></div> -->
  <!-- <AlternateHamburger /> -->

  <!-- <Hamburger /> -->
</nav>
