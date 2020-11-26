<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import "./tailwind.css";
</script>

<style global>
  @import "../assets/global.css";
</style>

<svelte:head>
  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" defer />
</svelte:head>

<Router {routes} />
