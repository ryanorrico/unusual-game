<script>
  import { layoutStore, user, currentDocument } from "../../../stores";
  import { currentCourse } from "../../courses/course-stores";
  import { currentGame } from "../../play/game-store";

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

{#if $layoutStore.slideUpPanel.name === 'game[cover_image]'}
  <ImageUploader
    url={`/games/${$currentGame.slug}`}
    name={$layoutStore.slideUpPanel.name} />
{/if}

{#if $layoutStore.slideUpPanel.name === 'course[cover_image]'}
  <ImageUploader
    url={`/courses/${$currentCourse.slug}`}
    name={$layoutStore.slideUpPanel.name} />
{/if}
