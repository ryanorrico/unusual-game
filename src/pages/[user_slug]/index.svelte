<script>
  import { user as currentUser } from "../../stores";
  import { fade, fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  import envURL from "../../env-url";
  import Api from "../../utils/api";
  // export let user_slug;
  import { page, goto, ready, params } from "@roxi/routify";
  let userProfile;

  $: fetchUserProfile();

  async function fetchUserProfile() {
    const data = await Api.get(`/users/${$params.user_slug}?v=public`);
    userProfile = data;
    console.log("userProfile :>> ", userProfile);
    $ready();
  }

  let files;
  function handleSubmit() {
    let formData = new FormData();
    formData.append("user[image]", files[0]);
    const config = {
      method: "PATCH",
      headers: {
        Authorization: $currentUser.auth_token,
        Accept: "application/json",
      },
      body: formData,
    };
    return fetch(`${envURL}/users/${$currentUser.slug}`, config)
      .then((res) => res.json())
      .then((data) => {
        $currentUser = data;
        let authToken = JSON.parse(localStorage.getItem("user")).auth_token;
        $currentUser.auth_token = authToken;
        localStorage.setItem("user", JSON.stringify($currentUser));
      })
      .catch((e) => console.error(e));
  }
  // }
</script>

<style>
  header {
    height: 70vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  header h1 {
    z-index: 10;
    line-height: 0.8;
  }
  .overlay {
    z-index: 0;
    background: linear-gradient(
      0deg,
      rgba(14, 14, 15, 1) 0%,
      rgba(1, 1, 1, 0.2) 7%,
      rgba(1, 1, 1, 0.2) 18%,
      rgba(3, 3, 3, 0.2) 70%,
      rgba(13, 13, 13, 1) 100%
    );
  }
</style>

{#if userProfile}
  <!-- <div class="text-white">{JSON.stringify($params)}</div> -->
  {#if !userProfile.name === $currentUser.name}
    <header
      in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
      class="relative"
      style="background-image: url({userProfile.image}">
      <div
        in:fade={{ delay: 300, duration: 500 }}
        class="overlay absolute w-full h-full" />
      <h1
        in:fly={{ y: -30, easing: backOut, delay: 300 }}
        class="text-6xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
        {userProfile.name.split(' ')[0]}
        <br />
        <span class="font-light">{userProfile.name.split(' ')[1]}</span>
      </h1>
      <div
        in:fly={{ y: -20, delay: 800 }}
        id="badge"
        class="absolute top-4 left-4 rounded px-2 py-.5">
        <!-- MARKETING -->
      </div>

      <!-- <div class="flex flex-col items-center justify-center w-full h-full" /> -->
    </header>
  {/if}
  {#if userProfile.name === $currentUser.name}
    <header
      in:fly={{ delay: 100, y: 60, duration: 600, easing: backOut }}
      class="relative"
      style="background-image: url({$currentUser.image}">
      <div
        in:fade={{ delay: 300, duration: 500 }}
        class="overlay absolute w-full h-full" />
      <h1
        in:fly={{ y: -30, easing: backOut, delay: 300 }}
        class="text-6xl md:text-6xl text-white font-bold  uppercase absolute bottom-10 z-50 left-5">
        {$currentUser.name.split(' ')[0]}
        <br />
        <span class="font-light">{$currentUser.name.split(' ')[1]}</span>
      </h1>
      <div
        in:fly={{ y: -20, delay: 800 }}
        id="badge"
        class="absolute top-4 left-4 rounded px-2 py-.5">
        <!-- MARKETING -->
      </div>

      <!-- <div class="flex flex-col items-center justify-center w-full h-full" /> -->
    </header>
    <form on:submit|preventDefault={handleSubmit} class="flex flex-col">
      <label for="image">Upload a picture:</label>
      <input
        bind:files
        accept="image/png, image/jpeg"
        id="image"
        name="image"
        type="file" />
      {#if files}
        {#each files as file}
          <div class="text-white">{file.name}</div>
        {/each}
      {/if}
      <!-- <label for="many">Upload multiple files of any type:</label> -->
      <!-- <input bind:files id="many" multiple type="file" /> -->
      <button class="text-white bg-purple-500" type="submit"> Submit </button>
    </form>
  {/if}
{/if}

<!-- {#if $currentUserStore}
  <Dashboard {currentUserStore} />
{:else}
  <Login {currentUserStore} />
{/if} -->
<!-- <div style="text-align: center; max-width: 540px; margin: auto"> -->
<!-- <h4><a href={$url('./')}>Go back</a></h4> -->

<!-- {#if series.id}
    <img
      src={series.image.medium.replace('http', 'https')}
      alt="cover"
      style="height: 295px" />
    <h1>{series.name} ({series.premiered.split('-')[0]})</h1>
    <p>
      {@html series.summary}
    </p>
    <a href={series.url}>Read more on TVMaze</a>
  {/if} -->
<!-- </div> -->
