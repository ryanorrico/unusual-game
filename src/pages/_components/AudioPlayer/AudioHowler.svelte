<script>
  import { Howl, Howler } from "howler";
</script>

<div id="title">
  <span id="track" />
  <div id="timer">0:00</div>
  <div id="duration">0:00</div>
</div>

<!-- Controls -->
<div class="controlsOuter">
  <div class="controlsInner">
    <div id="loading" />
    <div class="btn" id="playBtn" />
    <div class="btn" id="pauseBtn" />
    <div class="btn" id="prevBtn" />
    <div class="btn" id="nextBtn" />
  </div>
  <div class="btn" id="playlistBtn" />
  <div class="btn" id="volumeBtn" />
</div>

<!-- Progress -->
<div id="waveform" />
<div id="bar" />
<div id="progress" />

<!-- Playlist -->
<div id="playlist">
  <div id="list" />
</div>

<!-- Volume -->
<div id="volume" class="fadeout">
  <div id="barFull" class="bar" />
  <div id="barEmpty" class="bar" />
  <div id="sliderBtn" />
</div>
