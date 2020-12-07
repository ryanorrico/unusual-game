<script>
  import { layoutStore, user, currentDocument } from "../../../stores";
  import ImageUploader from "./ImageUploader.svelte";

  import SlideUpPanel from "./SlideUpPanel.svelte";
</script>

{#if $layoutStore.slideUpPanel.name === 'user[image]'}
  <ImageUploader />
{/if}

{#if $layoutStore.slideUpPanel.name === 'document[cover_image]'}
  <ImageUploader
    url={`/users/${$user.id}/documents/${$currentDocument.id}`}
    name={$layoutStore.slideUpPanel.name} />
{/if}

{#if $layoutStore.slideUpPanel.name === 'document[images]'}
  <ImageUploader
    url={`/users/${$user.id}/documents/${$currentDocument.id}/embed_image`}
    name={$layoutStore.slideUpPanel.name} />
{/if}
