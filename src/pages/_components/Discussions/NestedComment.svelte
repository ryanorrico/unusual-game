<script>
  export let comment, nestedComment;
  import { fly, slide } from "svelte/transition";
  import { formattedTimeAgoInWords } from "../../../utils/timeAgoInWords";
</script>

<div
  data-id={comment.id}
  in:slide|local={{ y: 10, duration: 300 }}
  class="flex flex-col space-x-2">
  <div class="flex space-x-2">
    <img
      src={nestedComment.user.image}
      class="mt-1 rounded-full w-8 h-8 object-cover" />
    <div class="p-3 pr-10 bg-gray-900 rounded-md flex flex-col space-y-1">
      <p class="text-gray-500 text-sm font-bold">{nestedComment.user.name}</p>
      <p class="text-xs text-gray-600 mb-2">
        {formattedTimeAgoInWords(comment)}
      </p>
      <p class="text-white">
        {@html nestedComment.body}
      </p>
    </div>
  </div>
</div>
