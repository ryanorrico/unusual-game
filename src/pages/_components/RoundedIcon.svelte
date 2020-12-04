<script>
  export let startColor = "purple";
  export let url = {
    startColor: "purple",
    startValue: 600,
    endColor: "purple",
    endValue: 500,
    text: "text",
  };
</script>

<style>
  div {
    /* color: rgba(255, 255, 255, 0.5); */
  }
</style>

<a
  href={url.link}
  class="w-16 h-16 text-white p-3 rounded-xl bg-gradient-to-br flex items-center justify-center from-purple-600 to-purple-500" />
