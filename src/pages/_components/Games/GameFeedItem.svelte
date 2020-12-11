<script>
  export let move;
  import { formattedTimeAgoInWords } from "../../../utils/timeAgoInWords";
</script>

<li class="flex p-4 border-b border-gray-800">
  <img
    src={move.user.image}
    class="flex-shrink-0 w-10 h-10 object-cover rounded-full" />
  <div class="flex justify-between w-full">
    <div class="px-4 flex flex-col">
      <p class="text-white">
        {move.user.name}
        <strong class="lowercase">{move.task.body}</strong>
      </p>
      <p class="text-gray-500">{formattedTimeAgoInWords(move)}</p>
    </div>
    <div
      class="bg-purple-600 text-white flex-shrink-0 w-10 h-10 flex items-center justify-center">
      +{move.task.points}
    </div>
  </div>
</li>
