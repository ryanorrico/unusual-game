<script>
  import { onMount, onDestroy } from "svelte";
  import { layoutStore } from "../../stores";
  import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  import { goto, url, isActive } from "@roxi/routify";
  import { user } from "../../stores";
  // import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
  }
  $: if (!$user || !$user.auth_token) $goto("/login", {}, true);
  //   onMount(() => ($layoutStore.topNav.open = false));
  //   onDestroy(() => ($layoutStore.topNav.open = true));
</script>

<div class="flex">
  <slot />
</div>

<!-- routify:options index=3 -->
