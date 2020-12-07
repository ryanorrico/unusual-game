<script>
  import { user } from "../../stores";
  import { goto, url } from "@roxi/routify";
  import Api from "../../utils/api.js";
  // import { ready } from "@roxi/routify";
  import { fly } from "svelte/transition";
  import { backOut } from "svelte/easing";
  let formData = {};

  async function login() {
    let data = await Api.post(`/authenticate`, formData);
    if (data.auth_token) {
      $user = data;
      localStorage.setItem("user", JSON.stringify(data));
      console.log("$user :>> ", $user);
      // if ($url() === "/login") {
      // $goto("/");
      window.history.replaceState({}, "", `/`);
      // }
    } else {
      console.log("didnt work");
    }
    // $ready();
    // $goto(window.locati  on.href);
  }
</script>

<style>
  main {
    color: white;
  }
  label {
    color: gray;
  }
  input {
    color: black;
  }

  button {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
  }
</style>

<main class="min-h-screen flex">
  <div
    class="flex-1 flex flex-col justify-center pb-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div in:fly={{ delay: 700, y: -30, easing: backOut }}>
        <!-- <img
          class="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow" /> -->
        <h2 class="mt-6 text-3xl font-extrabold">You know what to do.</h2>
        <!-- <p class="mt-2 text-sm  max-w">
          Or
          <a href="" class="font-medium text-indigo-600 hover:text-indigo-500">
            start your 14-day free trial
          </a>
        </p> -->
      </div>

      <div class="mt-8">
        <div in:fly={{ delay: 200, y: -30 }} class="mt-6 mt-4">
          <label for="email" class="block text-sm font-medium ">
            Email address
          </label>
          <div class="mt-1">
            <input
              bind:value={formData.email}
              id="email"
              type="email"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div in:fly={{ delay: 300, y: 30 }} class="space-y-1 mt-4">
          <label for="password" class="block text-sm font-medium ">
            Password
          </label>
          <div class="mt-1">
            <input
              bind:value={formData.password}
              id="password"
              type="password"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
        </div>

        <div
          in:fly={{ delay: 350, y: 30 }}
          class="mt-2 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember_me" class="ml-2 block text-sm ">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <!-- <a
              href=""
              class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a> -->
          </div>
        </div>

        <button
          in:fly={{ delay: 700, y: 30, easing: backOut }}
          on:click={login}
          class="mt-4 w-full flex justify-center p-4 border border-transparent rounded-md shadow-sm  font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign in
        </button>

        <!-- <h1>Login</h1>
        <input type="text" bind:value={username} />
        <br />
        <input type="text" bind:value={password} />
        <br />
        <button on:click={login}>Submit</button>

        <br />
        <br />
        <br />
        <p>
          This login page is actually located at
          <a href={$url()}>{$url()}</a>
        </p>
        <p>
          You are seeing it here, because we're using $goto with the static
          option enabled. This renders the login page, without changing the URL
          in the browser.
        </p>
        <p>On submit, we're "redirected" to the current URL in your browser.</p> -->
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <img
      class="absolute inset-0 h-full w-full object-cover"
      src="/images/rabbit-hole.jpg"
      alt="" />
  </div>
</main>
<!-- on:click={submitForm} -->
