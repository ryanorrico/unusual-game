<script>
  export let comment, nestedComment;
</script>

<div class="flex flex-col space-x-2">
  <div class="flex space-x-2">
    <img
      src={nestedComment.user.image}
      class="mt-1 rounded-full w-8 h-8 object-cover" />
    <div class="p-3 pr-10 bg-gray-900 rounded-md flex flex-col space-y-1">
      <p class="text-gray-600 text-sm font-bold">{nestedComment.user.name}</p>
      <p class="text-white">
        {@html nestedComment.body}
      </p>
    </div>
  </div>
</div>
