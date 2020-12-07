<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import "./tailwind.css";
</script>

<style global>
  @import "../assets/global.css";
</style>

<svelte:head>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />

  <link rel="stylesheet" href="https://rsms.me/inter/inter.css" defer />
</svelte:head>

<Router {routes} />
