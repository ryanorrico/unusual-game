<script>
  import { params, page } from "@roxi/routify";
  import { createdLessThanAMinuteAgo } from "../../../utils/timeAgoInWords";
  import { fly } from "svelte/transition";
  import { currentCourse } from "../../courses/course-stores";
  // const course = $currentCourse;
  // export let course;
  // import Sidebar from "../Sidebar/Sidebar.svelte";
</script>

<style>
  li {
    /* background: black; */
    border-color: rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
    /* transition: 200ms; */
  }
  .active {
    border-right: 2px solid #8614f8;
    background: rgba(0, 0, 0, 0.2);
    color: white;
    font-weight: bold;
    /* background: linear-gradient(
      270deg,
      rgba(134, 20, 248, 0.2) 0%,
      rgba(118, 11, 224, 0.3) 40%,
      rgba(0, 0, 0, 0.007440476190476164) 0%
    );  */
  }
</style>

<ul class="text-white">
  {#if $currentCourse}
    <li
      class="p-4 text-gray-300 text-sm"
      class:active={$page.path === `/courses/:slug/index`}>
      <a href="/courses/{$currentCourse.slug}"> {$currentCourse.name} </a>
    </li>
    {#each $currentCourse.lessons as lesson, i}
      <li
        in:fly|local={{ x: -20, delay: 300 + i * 100, duration: 200 }}
        class="p-4 text-gray-300 text-sm"
        class:active={$params.lesson_slug === lesson.slug}>
        <a href="/courses/{$currentCourse.slug}/{lesson.slug}">
          {lesson.name}
        </a>
        {#if lesson.assignments}
          <p class="text-xs font-normal text-gray-500">
            {lesson.assignments.length}
            assignments
            <!-- {lesson.assignments.filter((a) => a.complete).length}/{lesson.assignments.length}
            assignments -->
          </p>
        {/if}
        {#if lesson.description}
          <p class="text-xs font-normal text-gray-500">{lesson.description}</p>
        {/if}
      </li>
    {/each}
  {/if}
</ul>
<!-- {#if $coursesStore}
{#each $coursesStore as }
{/each}
{/if} -->
<!-- <div class="text-white">{JSON.stringify($coursesStore[0])}</div> -->
<!-- <div class="w-full bg-gray-800 mt-20">{$coursesStore[0].name}</div> -->

<!-- <div class="text-white mt-20">{JSON.stringify(course)}</div> -->
<!-- <Sidebar course={course.sidebarNavTabs} /> -->
