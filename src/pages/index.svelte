<script>
  // import RoutifyIntro from './_example/_components/RoutifyIntro.svelte'
  // import { fly } from "svelte/transition";
  import { metatags } from "@roxi/routify";

  import CardStyled from "./_components/CardStyled.svelte";
  metatags.title = "Ritual";
  metatags.description = "The game...";
  // import { send, receive } from "../transitions/crossfade";

  // import Logo from "./_components/Logo.svelte";

  // import { layoutStore } from "../stores";

  // import {TopNav} from './_components/TopNav/'

  // import Particles from "./Particles.svelte";

  // function toggleLogo() {
  //   $layoutStore.logoUpTop = !$layoutStore.logoUpTop;
  // }
  // function toggleTopNav() {
  //   $layoutStore.topNav.open = !$layoutStore.topNav.open;
  // }

  const links = [
    {
      href: "/login",
      text: "Login",
    },
    {
      href: "/discussions/test",
      text: "Discuss",
    },
  ];
  // import PostCard from "./_posts/_components/PostCard.svelte";
  // import Post from "./_posts/_components/Post.svelte";
  let thumbnailOpen = true;
  function toggleThumbnail() {
    thumbnailOpen = !thumbnailOpen;
  }
  function nextMake() {
    this.textContent = "GIVE";
  }
</script>

<style>
  div {
    /* width: 1000px; */
  }
  main {
    padding: 0 12px;
    height: 100vh;
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
    /* height: 100vh;
    background: url(images/hell.jpg);
    background-repeat: no-repeat;
    background-size: cover; */
  }
  span {
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
    /* -webkit-background-clip: text; */
    /* -webkit-text-fill-color: transparent; */
    font-family: "Burbank Bold";
    font-size: 60pt;
    line-height: 0.9;
  }
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #container {
    position: relative;
    border-radius: 30px;
    /* margin-top: 100px; */
    margin: 20px 0;
    overflow: hidden;
    /* transform: scale(0.92); */
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
  /* #icons div {
    width: 25%;
    margin: 0 8pt;
  }
  #icons svg {
    width: 100%;
  }
  #icons p {
    font-size: 8pt;
    text-align: center;
    margin-top: 4px;
    color: white;
  }

  .board {
    color: white;
  }
  label {
    background: rgba(255, 255, 255, 0.2);
    padding: 10px;
  }
  .left {
  } */
  a {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
    color: white;
  }
</style>

<!-- <TwinklingStars /> -->
<!-- class="max-w-full bg-gray-900 h-full sm:max-w-5xl sm:mx-auto flex flex-col  py-8 transition duration-200"> -->
<main class="flex items-center justify-center h-screen w-full">
  <!-- <div id="container" in:receive={{ key: 'div' }} out:send={{ key: 'div' }}> -->
  <!-- <PostCard /> -->
  <!-- <div class="flex flex-col">
    <span on:click={nextMake}>MAKE</span>
    <span>MORE</span>
    <span>MONEY</span>
  </div> -->

  <!-- <img src="/images/rabbit-hole.jpg" /> -->
  <!-- </div> -->

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each links as link}
      <a class="px-4 py-1 rounded" href={link.href}>{link.text}</a>
      <!-- <a class="px-4 py-1 rounded" href="/login">Login</a> -->
    {/each}
    <CardStyled />
  </div>
  <!-- {#if !$layoutStore.topNav.logo}
    <div in:receive={{ key: 'logo' }} out:send={{ key: 'logo' }}>
      <Logo />
    </div>
  {/if} -->

  <!-- <h2 class=" text-white font-bold text-2xl text-justify">Unusually Focused</h2> -->
  <!-- <h3 class="text-gray-400">December 1</h3> -->

  <!-- {#each posts as post (post.id)}
    {#if thumbnailOpen}
      <div
        class="px-4"
        on:click={toggleThumbnail}
        in:receive={{ key: post.id }}
        out:send={{ key: post.id }}>
        <PostCard {post} />
      </div>
    {:else}
      <Post {post} />
    {/if}
  {/each} -->

  <!-- <button
    class="bg-purple-600 text-white py-3 rounded-md"
    on:click={toggleTopNav}>TOGGLE</button> -->
  <!-- <div class="text-white">{$layoutStore.logoUpTop}</div>
  <button
    on:click={toggleLogo}
    class="bg-purple-500 w-48 text-white py-1 px-3 rounded-md">Logo</button> -->
  <!-- <div id="icons" class="flex  mt-5">
    <div class="flex flex-col">
      <svg
        viewBox="0 0 61 60"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <rect id="path-1" x="0" y="0" width="375" height="812" />
          <rect id="path-3" x="0" y="0" width="375" height="128" />
          <path
            d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
            id="path-5" />
        </defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <g
            id="Views/Activity-View/x/Contents---Dark"
            transform="translate(-107.000000, -207.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1" />
            </mask>

            <g id="Recent-Apps" mask="url(#mask-2)">
              <g transform="translate(0.000000, 200.000000)">
                <mask id="mask-4" fill="white">
                  <use xlink:href="#path-3" />
                </mask>
                <g id="Mask" stroke="none" fill="none" />
                <g
                  id="App-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  mask="url(#mask-4)">
                  <g transform="translate(100.500000, 0.000000)" id="Group">
                    <g transform="translate(7.000000, 7.000000)">
                      <mask id="mask-6" fill="white">
                        <use xlink:href="#path-5" />
                      </mask>
                      <use id="Mask" fill="#FFFFFF" xlink:href="#path-5" />
                      <g mask="url(#mask-6)" id="App-Icon">
                        <g>
                          <image
                            x="0"
                            y="0"
                            width="60"
                            height="60"
                            xlink:href="data:image/png;base64,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" />
                        </g>
                      </g>
                      <path
                        d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
                        id="Mask"
                        stroke-opacity="0.2"
                        stroke="#000000"
                        stroke-width="0.5"
                        mask="url(#mask-6)" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p class="text-xs text-white">Messages</p>
    </div>
    <div class="">
      <svg
        viewBox="0 0 61 60"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <rect id="path-1" x="0" y="0" width="375" height="812" />
          <rect id="path-3" x="0" y="0" width="375" height="128" />
          <path
            d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
            id="path-5" />
        </defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <g
            id="Views/Activity-View/x/Contents---Dark"
            transform="translate(-107.000000, -207.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1" />
            </mask>

            <g id="Recent-Apps" mask="url(#mask-2)">
              <g transform="translate(0.000000, 200.000000)">
                <mask id="mask-4" fill="white">
                  <use xlink:href="#path-3" />
                </mask>
                <g id="Mask" stroke="none" fill="none" />
                <g
                  id="App-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  mask="url(#mask-4)">
                  <g transform="translate(100.500000, 0.000000)" id="Group">
                    <g transform="translate(7.000000, 7.000000)">
                      <mask id="mask-6" fill="white">
                        <use xlink:href="#path-5" />
                      </mask>
                      <use id="Mask" fill="#FFFFFF" xlink:href="#path-5" />
                      <g mask="url(#mask-6)" id="App-Icon">
                        <g>
                          <image
                            x="0"
                            y="0"
                            width="60"
                            height="60"
                            xlink:href="data:image/png;base64,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" />
                        </g>
                      </g>
                      <path
                        d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
                        id="Mask"
                        stroke-opacity="0.2"
                        stroke="#000000"
                        stroke-width="0.5"
                        mask="url(#mask-6)" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p>Fuckin A</p>
    </div>
    <div class="flex flex-col">
      <svg
        viewBox="0 0 61 60"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
          <rect id="path-1" x="0" y="0" width="375" height="812" />
          <rect id="path-3" x="0" y="0" width="375" height="128" />
          <path
            d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
            id="path-5" />
        </defs>
        <g
          id="Symbols"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <g
            id="Views/Activity-View/x/Contents---Dark"
            transform="translate(-107.000000, -207.000000)">
            <mask id="mask-2" fill="white">
              <use xlink:href="#path-1" />
            </mask>

            <g id="Recent-Apps" mask="url(#mask-2)">
              <g transform="translate(0.000000, 200.000000)">
                <mask id="mask-4" fill="white">
                  <use xlink:href="#path-3" />
                </mask>
                <g id="Mask" stroke="none" fill="none" />
                <g
                  id="App-2"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  mask="url(#mask-4)">
                  <g transform="translate(100.500000, 0.000000)" id="Group">
                    <g transform="translate(7.000000, 7.000000)">
                      <mask id="mask-6" fill="white">
                        <use xlink:href="#path-5" />
                      </mask>
                      <use id="Mask" fill="#FFFFFF" xlink:href="#path-5" />
                      <g mask="url(#mask-6)" id="App-Icon">
                        <g>
                          <image
                            x="0"
                            y="0"
                            width="60"
                            height="60"
                            xlink:href="data:image/png;base64,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" />
                        </g>
                      </g>
                      <path
                        d="M59.9985,19.005 C59.9985,18.2775 59.9985,17.55 59.994,16.83 C59.99025,16.215 59.9835,15.6075 59.967,14.9925 C59.949849,13.6555986 59.8325204,12.3218629 59.616,11.0025 C59.3898833,9.68246633 58.968515,8.40344815 58.36575,7.2075 C57.139886,4.80884641 55.1878069,2.8586047 52.788,1.635 C51.5941586,1.02922965 50.3157815,0.606980873 48.996,0.3825 C47.6758846,0.1677546 46.3418192,0.0499397373 45.0045,0.03 C44.394,0.015 43.783,0.0075 43.1715,0.0075 C42.44625,0 41.72025,0 40.9965,0 L19.002,0 C18.27675,0 17.55075,0 16.827,0.0075 C16.2155,0.0075 15.60425,0.015 14.99325,0.03 C13.6561812,0.0499736231 12.3223677,0.167788385 11.0025,0.3825 C9.68250818,0.607097059 8.40390084,1.02933836 7.20975,1.635 C4.81037411,2.85894142 2.85862782,4.80911287 1.63275,7.2075 C1.02965401,8.4033111 0.608269109,9.68237983 0.3825,11.0025 C0.165609626,12.3218163 0.0482785418,13.6555799 0.0315,14.9925 C0.015,15.6075 0.00825,16.215 0.0045,16.83 C-9.00612918e-13,17.55 -9.00612918e-13,18.2775 -9.00612918e-13,19.005 L-9.00612918e-13,40.995 C-9.00612918e-13,41.7225 -9.00612918e-13,42.45 0.0045,43.17 C0.0045,43.785 0.015,44.3925 0.0315,45.0075 C0.0482785418,46.3444201 0.165609626,47.6781837 0.3825,48.9975 C0.608269109,50.3176202 1.02965401,51.5966889 1.63275,52.7925 C2.85862782,55.1908871 4.81037411,57.1410586 7.20975,58.365 C8.40390084,58.9706616 9.68250818,59.3929029 11.0025,59.6175 C12.3219014,59.835911 13.6559918,59.9537502 14.99325,59.97 C15.60425,59.985 16.2155,59.9925 16.827,59.9925 C17.55225,60 18.27825,60 19.002,60 L40.995,60 C41.72025,60 42.44625,60 43.17,59.9925 C43.7815,59.9925 44.3925,59.985 45.003,59.97 C46.3405088,59.9537882 47.6748513,59.8359489 48.9945,59.6175 C50.3142815,59.3930191 51.5926586,58.9707703 52.7865,58.365 C55.1863069,57.1413953 57.138386,55.1911536 58.36425,52.7925 C58.967015,51.5965518 59.3883833,50.3175337 59.6145,48.9975 C59.8310204,47.6781371 59.948349,46.3444014 59.9655,45.0075 C59.982,44.3925 59.98875,43.785 59.9925,43.17 C59.997,42.45 59.997,41.7225 59.997,40.995 L59.997,19.005 L59.9985,19.005 Z"
                        id="Mask"
                        stroke-opacity="0.2"
                        stroke="#000000"
                        stroke-width="0.5"
                        mask="url(#mask-6)" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <p>Damn son</p>
    </div>
    <div class="div" />
  </div> -->

  <!-- {#each 'rabbit hole' as char, i}
    <span
      class="text-4xl font-extrabold text-white"
      in:fly={{ y: -20, delay: i * 100, duration: 150 }}>
      {char}
    </span>
  {/each} -->
  <!-- <a
    href="/play"
    class="bg-gradient-to-b from-purple-600 to-purple-500 py-2 px-5 rounded-md text-lg text-white">
    get started
  </a> -->
</main>
<!-- <RoutifyIntro /> -->
