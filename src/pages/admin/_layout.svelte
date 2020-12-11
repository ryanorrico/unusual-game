<script>
  import { ready } from "@roxi/routify";

  import { goto, page, isActive } from "@roxi/routify";
  import { user } from "../../stores";
  import Sidebar from "../_components/Sidebar/Sidebar.svelte";
  if (localStorage.getItem("user")) {
    $user = JSON.parse(localStorage.getItem("user"));
    // $ready();
  }
  // import { user, layoutStore } from "../stores";

  // $: if (!$user || !$user.auth_token) $goto("/login", {}, true);
  //   onDestroy(() => ($layoutStore.topNav.open = true));
  import ImageIcon from "../_components/svg/ImageIcon.svelte";
  import RectanglePlay from "../_components/svg/RectanglePlay.svelte";
  import ShareArrowRight from "../_components/svg/ShareArrowRight.svelte";
  import SquirrelWithLaptop from "../_components/svg/SquirrelWithLaptop.svelte";

  let sidebarNavTabs = [
    {
      iconComponent: ImageIcon,
      tabComponent: RectanglePlay,
    },
    {
      iconComponent: ShareArrowRight,
      tabComponent: SquirrelWithLaptop,
    },
    // {
    //   iconComponent: RectanglePlay,
    //   tabComponent: VideoPlayer,
    //   width: 500,
    // },
  ];
  function logout() {
    $user = false;
  }
</script>

<style>
</style>

<div class="h-screen flex overflow-hidden ">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->

  <!-- Static sidebar for desktop -->
  <Sidebar {sidebarNavTabs} />

  <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
    <div
      class="bg-gray-100 relative z-10 flex-shrink-0 flex h-16 border-b border-gray-200 lg:border-none">
      <button
        class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: menu-alt-1 -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <!-- Search bar -->
      <!-- <div
        class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div class="flex-1 flex">
          <form class="w-full flex md:ml-0" action="#" method="GET">
            <label for="search_field" class="sr-only">Search</label>
            <div
              class="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                aria-hidden="true">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd" />
                </svg>
              </div>
              <input
                id="search_field"
                name="search_field"
                class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search transactions"
                type="search" />
            </div>
          </form>
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <button
            class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <span class="sr-only">View notifications</span>

            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <div class="ml-3 relative">
            <div>
              <button
                class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                id="user-menu"
                aria-haspopup="true">
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="" />
                <span
                  class="hidden ml-3 text-gray-700 text-sm font-medium lg:block"><span
                    class="sr-only">Open user menu for
                  </span>Emilia Birch</span>

                <svg
                  class="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>

            <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">Your Profile</a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">Settings</a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">Logout</a>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <main
      class="bg-gray-100 min-h-screen flex-1 relative pb-8 z-0 overflow-y-auto">
      <!-- Page header -->
      <slot />
    </main>
  </div>
</div>
