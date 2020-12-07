<script>
  export let user, layoutStore;

  function logout() {
    $user = false;
    localStorage.removeItem("user");
    $layoutStore.slideoverPanel.open = false;
  }
</script>

<style>
  ul {
    color: white;
    font-size: 20px;
  }
  li {
    padding: 12px 0;
  }
</style>

<ul>
  <div class="text-white">{$user}</div>
  {#if $user}
    <li on:click={logout}>Logout</li>
  {:else}<a href="/login">Login</a>{/if}
  <li>Settings</li>
</ul>
