<script>
  import { fly } from "svelte/transition";
  import { layoutStore, currentDocument, user } from "../../../stores";
  import ImageUploader from "../SlideUpPanel/ImageUploader.svelte";
</script>

<style>
  section {
  }
</style>

<section class=" space-y-4 ">
  <!-- <button class="w-full bg-purple-600 py-2">IMAGE</button> -->
  <!-- {#if $layoutStore.slideUpPanel.name === 'document[images]'} -->
  <ImageUploader
    url={`/users/${$user.id}/documents/${$currentDocument.id}/embed_image`}
    name={'document[images]'} />
  <!-- {/if} -->
</section>
