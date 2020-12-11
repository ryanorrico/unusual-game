<script>
  // export let post, currentDiscussion;
  import { fly, fade } from "svelte/transition";
  import { quintOut, backOut } from "svelte/easing";

  import XCloseButtonForPanels from "../../_components/XCloseButtonForPanels.svelte";
  import { coursesStore, currentCourse } from "../../courses/course-stores";
  import CameraCircleIcon from "../svg/CameraCircleIcon.svelte";
  import { layoutStore } from "../../../stores";
  import PhotoUploadOptions from "../SlideUpPanel/PhotoUploadOptions.svelte";
  export let course;

  function openSlideUpPanelWithPhotoUpload() {
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "course[cover_image]",
      text: "Upload cover photo",
    };
    $layoutStore.slideUpPanel.open = true;
  }
</script>

<style>
  svg {
    color: #3f3f46;
  }
  header {
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  header h1 {
    z-index: 10;
  }

  header #badge {
    background: rgba(73, 73, 73, 0.466);
    color: rgba(255, 255, 255, 0.685);
  }
  .overlay {
    z-index: 0;
    background: linear-gradient(
      0deg,
      rgba(14, 14, 15, 1) 0%,
      rgba(1, 1, 1, 0.469625350140056) 7%,
      rgba(1, 1, 1, 0.2819502801120448) 18%,
      rgba(3, 3, 3, 0.5) 70%,
      rgba(13, 13, 13, 1) 100%
    );
  }
  main {
    color: white;
  }
  p,
  strong,
  li {
    color: white;
  }
  h1,
  h2 {
    color: white;
  }
  strong {
    font-weight: bold;
    color: white;
  }
  button#photo-options {
    width: 60px;
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 40px;
    right: 20px;
  }
  button svg {
    width: 100%;
  }

  input[type="file"] {
    display: none;
  }
</style>

<header
  in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
  class="relative"
  style="background-image: url({course.cover_image}">
  <div
    in:fade={{ delay: 300, duration: 500 }}
    class="overlay absolute w-full h-full" />
  <!-- <a
    in:fly={{ y: -20, delay: 900 }}
    href="/courses/"
    class="absolute top-4 right-4">
    <XCloseButtonForPanels />
  </a> -->
  <!-- <div
    in:fly={{ y: -20, delay: 800 }}
    id="badge"
    class="absolute top-4 left-4 rounded px-2 py-.5">
    MARKETING
  </div> -->

  <div class="flex flex-col items-center justify-center w-full h-full">
    <h1
      in:fly={{ y: -30, easing: backOut, delay: 300 }}
      class="text-3xl md:text-6xl text-white font-black">
      {course.name}
    </h1>
    <div class="flex max-w-4xl">
      {#if course.lessons}
        <p>{course.lessons.length} lessons</p>
      {/if}
    </div>
  </div>
  <button
    on:click={openSlideUpPanelWithPhotoUpload}
    in:fly={{ y: -20, delay: 800 }}
    id="photo-options">
    <CameraCircleIcon />
  </button>
</header>
<main class="relative overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
    <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
      <svg
        class="absolute top-12 left-full transform translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384">
        <defs>
          <pattern
            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="404"
          height="384"
          fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
      </svg>
      <svg
        class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384">
        <defs>
          <pattern
            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect
          width="404"
          height="384"
          fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
      </svg>
      <svg
        class="absolute bottom-12 left-full transform translate-x-32"
        width="404"
        height="384"
        fill="none"
        viewBox="0 0 404 384">
        <defs>
          <pattern
            id="d3eb07ae-5182-43e6-857d-35c643af9034"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" />
          </pattern>
        </defs>
        <rect
          width="404"
          height="384"
          fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
      </svg>
    </div>
  </div>

  <div class="relative px-4 sm:px-6 lg:px-8">
    <div class="text-lg max-w-prose mx-auto">
      <h1>
        <span
          class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">Introducing</span>
        <span
          class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight  sm:text-4xl">
          <!-- {course.name} -->
        </span>
      </h1>
      <!-- {#if post.description}
          <p class="mt-8 text-xl leading-8">{post.description}</p>
        {/if} -->
    </div>
    <div class="mt-6 prose prose-indigo prose-lg mx-auto">
      <!-- {@html post.body} -->

      <!-- <p>
          Faucibus commodo massa rhoncus, volutpat.
          <strong>Dignissim</strong>
          sed
          <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae
          sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
          tellus varius sit neque erat velit. Faucibus commodo massa rhoncus,npm
          volutpat. Dignissim sed eget risus enim.
          <a href="#">Mattis mauris semper</a>
          sed amet vitae sed turpis id.
        </p>
        <ul>
          <li>Quis elit egestas venenatis mattis dignissim.</li>
          <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
          <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
        </ul>
        <p>
          Quis semper vulputate aliquam venenatis egestas sagittis quisque orci.
          Donec commodo sit viverra aliquam porttitor ultrices gravida eu.
          Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis.
          Nunc purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum
          dignissim.
        </p>
        <h2>From beginner to expert in 30 days</h2>
        <p>
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in.
          Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris
          enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
          mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
          Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
          diam.
        </p>
        <blockquote>
          <p>
            Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
            urna sed consectetur neque tristique pellentesque. Blandit amet, sed
            aenean erat arcu morbi.
          </p>
        </blockquote>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
          Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
          donec est. Odio penatibus risus viverra tellus varius sit neque erat
          velit.
        </p>
        <figure>
          <img
            class="w-full rounded-lg"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
            width="1310"
            height="873" />
          <figcaption>
            Sagittis scelerisque nulla cursus in enim consectetur quam.
          </figcaption>
        </figure>
        <h2>Everything you need to get up and running</h2>
        <p>
          Purus morbi dignissim senectus mattis
          <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
          volutpat cras. In amet eu ridiculus leo sodales cursus tristique.
          Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
          fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis
          varius nunc, congue erat ac. Cras fermentum convallis quam.
        </p>
        <p>
          Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.
          Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent
          donec est. Odio penatibus risus viverra tellus varius sit neque erat
          velit.
        </p> -->
      <!-- {JSON.stringify(course)} -->
    </div>
  </div>
</main>
