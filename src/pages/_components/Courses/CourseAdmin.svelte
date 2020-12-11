<script>
  import { user, layoutStore } from "../../../stores";
  import Api from "../../../utils/api";
  import {
    coursesStore,
    currentCourse,
  } from "../../../pages/courses/course-stores";

  let course = $currentCourse;
  async function createDiscussion() {
    const data = await Api.post("/discussions", {
      user: {
        id: $user.id,
      },
      discussion: {
        title: course.name,
        course_id: course.id,
      },
    });

    // let obj = $postsStore.findIndex((x) => x.id == post.id);
    // $postsStore[obj].discussion = data;
  }
  function handleClick() {
    $layoutStore.rightColumn.open = !$layoutStore.rightColumn.open;
  }
</script>

<style>
  button {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
  }
</style>

<div class="px-4 space-y-4">
  <button
    on:click={createDiscussion}
    class="py-2 w-full rounded text-sm text-white shadow">
    Create Discussion
  </button>
  <button
    on:click={handleClick}
    class="py-2 w-full rounded text-sm text-white shadow">
    Open Discussion
  </button>
</div>
