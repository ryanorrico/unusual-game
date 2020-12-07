<script>
  import { layoutStore, currentDocument } from "../../../stores";
  import PhotoUploadOptions from "../../_components/SlideUpPanel/PhotoUploadOptions.svelte";

  function imageHandler(e) {
    $layoutStore.slideUpPanel = {
      component: PhotoUploadOptions,
      name: "document[images]",
      text: "Embed an image",
    };
    $layoutStore.slideUpPanel.open = true;
  }
</script>

<style>
  #quill-toolbar {
    border-color: #3f3f46;
    background-color: #27272a;
  }
  button {
    border-color: #3f3f46;
  }
  svg {
    /* width: 0.9em; */
  }
  #row-2 {
    border-color: #3f3f46;
  }
</style>

<div id="quill-toolbar" class="border relative z-0 rounded-md overflow-hidden">
  <div id="row-1" class="flex">
    <button
      id="bold-button"
      type="button"
      data-color="red"
      class="ql-bold border-r quill-toolbar-button relative flex items-center justify-center  p-2   leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <!-- Generator: Adobe Illustrator 24.1.0, SVG Export Plug-In  -->
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="58.1px"
        height="69.8px"
        viewBox="0 0 58.1 69.8"
        enable-background="new 0 0 58.1 69.8"
        xml:space="preserve">
        <defs />
        <g id="Regular-M_1_" transform="matrix(1 0 0 1 1408.36 1126)">
          <path
            d="M-1400.1-1056.2h25.4c14.9,0,24.4-7.9,24.4-19.9c0-9.5-6.9-16.4-16.8-16.9v-0.4c8.1-1.1,13.6-7.2,13.6-15
 c0-10.9-8.3-17.6-21.9-17.6h-24.8c-5.2,0-8.3,3.1-8.3,8.4v53C-1408.4-1059.3-1405.3-1056.2-1400.1-1056.2z M-1392.2-1097v-17.5h12
 c6.8,0,10.9,3.1,10.9,8.5c0,5.7-4.5,9-12.1,9H-1392.2z M-1392.2-1067.5v-19.4h12.3c8.5,0,13.3,3.3,13.3,9.6c0,6.4-4.6,9.8-13,9.8
 H-1392.2z" />
        </g>
      </svg>
    </button>

    <button
      id="italic-button"
      type="button"
      data-color="orange"
      class="ql-italic border-r  quill-toolbar-button -ml-px relative flex items-center justify-center p-2   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="italic"
        class="svg-inline--fa fa-italic fa-w-10"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"><path
          fill="currentColor"
          d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" /></svg>
    </button>

    <button
      id="header-1-button"
      type="button"
      value="1"
      data-color="yellow"
      class="font-bold border-r  ql-header quill-toolbar-button font-bold  -ml-px relative flex items-center justify-center p-2  leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      H<sub class="font-normal">1</sub>
    </button>

    <button
      id="header-2-button"
      type="button"
      value="2"
      data-color="green"
      class="ql-header quill-toolbar-button font-bold border-r -ml-px relative flex items-center justify-center p-2 leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      H<sub>2</sub>
    </button>

    <button
      id="bold-button"
      type="button"
      data-color="red"
      class="ql-list border-r quill-toolbar-button relative flex items-center justify-center  p-2   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="list"
        class="svg-inline--fa fa-list fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path
          fill="currentColor"
          d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" /></svg>
    </button>
    <button
      id="list-button"
      type="button"
      class="ql-list border-r quill-toolbar-button relative flex items-center justify-center  p-2   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="link"
        class="svg-inline--fa fa-link fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path
          fill="currentColor"
          d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" /></svg>
    </button>

    <button
      on:click={imageHandler}
      id="image-button"
      type="button"
      value="1"
      data-color="yellow"
      class=" quill-toolbar-button -ml-px relative flex items-center justify-center p-2  leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="image"
        class="svg-inline--fa fa-image fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path
          fill="currentColor"
          d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" /></svg>
    </button>
  </div>
  <!-- <div id="row-2" class="flex border-t">


    <button
      id="italic-button"
      type="button"
      data-color="orange"
      class="ql-italic border-r  quill-toolbar-button -ml-px relative flex items-center justify-center p-2   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="italic"
        class="svg-inline--fa fa-italic fa-w-10"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"><path
          fill="currentColor"
          d="M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z" /></svg>
    </button>

    <button
      id="header-1-button"
      type="button"
      value="1"
      data-color="yellow"
      class="font-bold border-r  ql-header quill-toolbar-button font-bold  -ml-px relative flex items-center justify-center p-2  leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      H<sub class="font-normal">1</sub>
    </button>

    <button
      id="header-2-button"
      type="button"
      value="2"
      data-color="green"
      class="ql-header quill-toolbar-button font-bold border-r   -ml-px relative flex items-center justify-center p-2 leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      H<sub>2</sub>
    </button>

    <button
      id="header-1-button"
      type="button"
      value="1"
      data-color="yellow"
      class="ql-header  quill-toolbar-button -ml-px relative  flex items-center justify-center p-2 text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="image"
        class="svg-inline--fa fa-image fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"><path
          fill="currentColor"
          d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" /></svg>
    </button>
  </div> -->
  <!-- <div id="row-2" class="flex">
    <button
      id="list-button"
      type="button"
      value="2"
      data-color="blue"
      class="ql-list quill-toolbar-button -mt-px relative flex-1 flex items-center justify-center rounded-bl-md px-4 py-2 border   border-opacity-75 border-t-none   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <i class="fa fa-list-ul pointer-events-none" />
    </button>

    <button
      id="link-button"
      type="button"
      data-color="indigo"
      class="ql-link quill-toolbar-button -ml-px -mt-px relative flex-1 flex items-center justify-center  px-4 py-2 border   border-opacity-75   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <i class="fa fa-link pointer-events-none" />
    </button>

    <button
      id="image-button"
      type="button"
      data-color="teal"
      class="ql-image quill-toolbar-button toggle-sidebar-dropdown -mt-px -ml-px relative flex-1 flex items-center justify-center px-4 py-2  border   border-opacity-75 border-t-none   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <i class="fa fa-image pointer-events-none" />
    </button>

    <button
      id="quote-button"
      type="button"
      data-color="indigo"
      class="ql-blockquote quill-toolbar-button -ml-px -mt-px relative flex-1 flex items-center justify-center  px-4 py-2 border   border-opacity-75   text-sm leading-5 font-medium text-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
      <i class="fa fa-quote-right pointer-events-none" />
    </button>
  </div> -->
</div>
