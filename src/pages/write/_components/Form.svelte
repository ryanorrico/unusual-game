<script>
  import { createEventDispatcher } from "svelte";
  //   import Field from "../components/Field.svelte";

  const dispatch = createEventDispatcher();
  export let files;
  export let form; // prop
  //   export let errors; // prop
  //   export let loading; // prop
</script>

<form on:submit|preventDefault={() => dispatch('submit')} class="flex flex-col">
  <label for="image">Upload a picture:</label>
  <input
    bind:files
    accept="image/png, image/jpeg"
    id="image"
    name="image"
    type="file" />

  <!-- <label for="many">Upload multiple files of any type:</label> -->
  <!-- <input bind:files id="many" multiple type="file" /> -->
  <button type="submit"> Submit </button>
</form>
<!-- <Field
      name="name"
      label="Name"
      bind:value={form.name}
      errors={errors} /> -->
