<script>
  import { onMount, onDestroy, createEventDispatcher } from "svelte";
  import Player from "@vimeo/player";
  import assign from "object-assign";

  export let playerHeight = 320;
  export let playerWidth = "100%";
  export let options = () => ({});
  export let videoId;
  export let loop = false;
  export let autoplay = false;

  const dispatch = createEventDispatcher();
  const eventsToDispatch = [
    "play",
    "pause",
    "ended",
    "timeupdate",
    "progress",
    "seeked",
    "texttrackchange",
    "cuechange",
    "cuepoint",
    "volumechange",
    "error",
    "loaded",
  ];
  let playerId = parseInt(Math.random() * 100000).toString();
  let elementId = `vimeo-player-${videoId}`;
  let vimeo;
  export let player;

  $: loadVideo(videoId);

  function loadVideo(id) {
    if (!player) return;

    return player.loadVideo(id);
  }

  function setEvents() {
    player
      .ready()
      .then(() => dispatch("ready", { player: player }))
      .catch((error) => dispatch("error", { error: error, player: player }));

    eventsToDispatch.forEach((event) => dispatchOnPlayerEvent(event));
  }

  function dispatchOnPlayerEvent(event) {
    player.on(event, (data) => dispatch(event, { data: data, player: player }));
  }

  let handler = {
    get: function (target, prop) {
      var value = target[prop];
      return typeof value == "function" ? value.bind(target) : value;
    },
  };

  onMount(async () => {
    const overrides = {
      id: videoId,
      width: playerWidth,
      height: playerHeight,
      loop: loop,
      autoplay: autoplay,
    };

    vimeo = new Player(elementId, assign(options, overrides));
    player = new Proxy(vimeo, handler);

    setEvents();
  });

  onDestroy(() => {
    if (player) {
      player.unload();
    }
  });
</script>

<svelte:options accessors={true} />
<!-- <div class="w-full" id={elementId} /> -->
<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe
    src="https://player.vimeo.com/video/{videoId}?title=0&byline=0&portrait=0"
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen />
</div>
