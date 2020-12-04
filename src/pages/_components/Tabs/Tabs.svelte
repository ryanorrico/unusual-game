<script>
  //   import { ClassBuilder } from "../../utils/classes";
  //   let classesDefault = "h-full w-20 flex items-center justify-center";
  //   export let classes = classesDefault;
  //   const cb = new ClassBuilder(classes, classesDefault);
  //   $: c = cb.flush().add($$props.class).get();
</script>

<div class="flex">
  <a
    href="/blog"
    class="w-full h-full py-4 px-8 cursor-pointer flex items-center text-sm text-gray-500">
    blog
  </a>

  <a
    href="/podcast"
    class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
    podcast
  </a>

  <a
    href="/admin"
    class="w-full h-full py-4 px-8 cursor-pointer flex mx-auto items-center text-sm text-gray-500">
    admin
  </a>
</div>
