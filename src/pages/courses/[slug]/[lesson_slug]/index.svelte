<script>
  import { params, ready } from "@roxi/routify";
  import Lesson from "../../../_components/Courses/Lesson.svelte";
  import LessonItem from "../../../_components/Courses/LessonItem.svelte";
  import Vimeo from "../../../_components/VideoPlayer/Vimeo.svelte";
  import { coursesStore } from "../../course-stores";
  import { writable } from "svelte/store";
  let course;
  let lessonSlug;
  $: lessonSlug = $params.lesson_slug;
  console.log("lessonSlug :>> ", lessonSlug);
  const lessonStore = writable();
  $: fetchLesson($params.lesson_slug);
  function fetchLesson(lessonSlug) {
    course = $coursesStore.find((x) => x.slug === $params.slug);
    $lessonStore = course.lessons.find((x) => x.slug === lessonSlug);
    // const data = await Api.get(
    //   `/courses/${$params.slug}/lessons/${params.lesson_slug}`
    // );
    // let obj = $coursesStore.find((x) => x.slug === data.slug);
    // $currentCourse = obj;
    // if (data.discussion) {
    //   $currentCourse.discussion = data.discussion;
    //   $currentDiscussion = data.discussion;
    // }
    // $ready();
  }
</script>

<Lesson bind:lessonStore={$lessonStore} />
<div class="text-white">
  <!-- {JSON.stringify($params)} -->
  <!-- {JSON.stringify($lessonStore)} -->
</div>

<!-- {#if lesson && lesson.slug === $params.lesson_slug}
  <div class="text-white">{lesson.name}</div>

  {#if lesson.items}
    {#each lesson.items as item (item.position)}
      <LessonItem {item} />
    {/each}
  {/if}

{/if} -->
<!-- <Vimeo videoId={269136460} playerWidth={1000} /> -->
<!-- <div class="text-white">{JSON.stringify($params)}</div> -->
<!-- <Lesson {lesson} /> -->
