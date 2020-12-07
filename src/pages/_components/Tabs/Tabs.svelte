<script>
  import { user } from "../../../stores";
  import { page, isActive } from "@roxi/routify";
  //   import { ClassBuilder } from "../../utils/classes";
  //   let classesDefault = "h-full w-20 flex items-center justify-center";
  //   export let classes = classesDefault;
  //   const cb = new ClassBuilder(classes, classesDefault);
  //   $: c = cb.flush().add($$props.class).get();
  function logout() {
    $user = false;
    localStorage.removeItem("user");
  }
</script>

<style>
  a.active {
    border-bottom: 1px solid rgba(134, 20, 248, 0.8);
    background-image: radial-gradient(
      ellipse at bottom center,
      rgba(134, 20, 248, 0.22),
      transparent 3em
    );
    /* radial-gradient(
        ellipse at 35% -20em,
        rgba(255, 41, 41, 0.14),
        transparent 35em
      ); */
  }
  a.active svg {
    color: #8614f8;
    /* background: linear-gradient(180deg, #8614f8 0, #760be0 100%); */
  }
</style>

<div>
  <a
    id="logo"
    href="/"
    class:active={$page.path === '/index'}
    class="w-full  py-4 px-8 cursor-pointer flex items-center text-sm text-gray-500">
    <!-- <div in:receive={{ key: 'logo' }} out:send={{ key: 'logo' }}> -->
    <!-- <Logo color={'white'} /> -->
    unusually
    <strong in:blur={{ duration: 1000 }}>focused</strong>
    <!-- </div> -->
  </a>
</div>

<!-- {#if !$isActive('/write')} -->
<div class="flex">
  <a
    class:active={$isActive('/write')}
    href="/write"
    class="w-full  py-4 px-8 cursor-pointer flex items-center text-sm text-gray-500">
    write
  </a>

  <a
    class:active={$isActive('/blog')}
    href="/blog"
    class="w-full  py-4 px-8 cursor-pointer flex items-center text-sm text-gray-500">
    blog
  </a>

  <a
    class:active={$isActive('/podcast')}
    href="/podcast"
    class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
    podcast
  </a>

  {#if $user.admin}
    <a
      class:active={$isActive('/admin')}
      href="/admin"
      class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
      admin
    </a>
  {/if}

  {#if !$user}
    <a
      class:active={$isActive('/login')}
      href="/login"
      class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
      login
    </a>
  {/if}

  {#if $user}
    <button
      on:click={logout}
      class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
      logout
    </button>
  {/if}
</div>
<!-- {/if} -->
