<script>
  export let notificationStore;

  import { fly } from "svelte/transition";
  import XCloseButtonForPanels from "../XCloseButtonForPanels.svelte";
  function closeNotification() {
    $notificationStore = [];
  }
</script>

<div transition:fly={{ y: 30 }} class="fixed bottom-20 w-full p-4">
  {#each $notificationStore as notification}
    <div class="bg-purple-600 relative w-full rounded-md text-white p-2 shadow">
      <div class="flex">
        <img
          src={notification.user.image}
          class="w-10 h-10 rounded-full object-cover" />
        {notification.user.name}
        commented "{notification.comment}"
        <button class="right-2 top-4 absolute" on:click={closeNotification}>
          <XCloseButtonForPanels />
        </button>
      </div>
    </div>
    <!-- {JSON.stringify(notification)} -->
  {/each}
</div>
