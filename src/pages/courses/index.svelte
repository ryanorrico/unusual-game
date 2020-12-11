<script>
  import Api from "../../utils/api";
  // import { writable } from "svelte/store";
  import { page, ready } from "@roxi/routify";
  // import { coursesStore } from "./course-stores";
  // import { onMount } from "svelte";
  let courses;

  async function fetchCourses() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.get(`/courses/`);
      courses = data;
      $ready();
    }
  }
  // $: fetchCourses();
  fetchCourses();
</script>

<div class="flex items-center justify-center text-white h-full w-full">
  <ul>
    {#if courses}
      {#each courses as course}
        <li><a href="/courses/{course.slug}"> {course.name} </a></li>
      {/each}
    {/if}
  </ul>
</div>
