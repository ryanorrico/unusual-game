<script>
  import { ready } from "@roxi/routify";
  import Api from "../../../utils/api";
  import { params } from "@roxi/routify";
  import { onMount } from "svelte";
  import { coursesStore, currentCourse } from "../course-stores";
  import CourseCover from "../../_components/Courses/CourseCover.svelte";
  import { currentDiscussion, layoutStore } from "../../../stores";
  import Discussion from "../../_components/Discussions/Discussion.svelte";

  let course;
  $: fetchCourse();

  async function fetchCourse() {
    const data = await Api.get(`/courses/${$params.slug}`);
    let obj = $coursesStore.find((x) => x.slug === data.slug);
    $currentCourse = obj;
    $currentCourse.cover_image = data.cover_image;
    if (data.discussion) {
      $currentCourse.discussion = data.discussion;
      $currentDiscussion = data.discussion;
    }
    $ready();
  }
</script>

<div class="text-white">
  {#if $currentCourse}
    <CourseCover bind:course={$currentCourse} />
    <!-- <div class="h-full"><img src={$currentCourse.image} /></div> -->
    <!-- {JSON.stringify($currentCourse)} -->
  {/if}
</div>
<!-- {#if course}
  <div class="text-white">
    <div class="text-5xl text-white font-bold">{course.name}</div>
    {course.lessons.length}
    lessons
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        src="https://player.vimeo.com/video/270511113?title=0&byline=0&portrait=0"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen />
    </div><script src="https://player.vimeo.com/api/player.js">
    </script></div>
{/if} -->
