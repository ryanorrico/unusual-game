<script>
  import { user, layoutStore } from "../../../stores";
</script>

<style>
  button {
    width: 24px;
    color: #8614f8;
  }
  button:active,
  button:focus {
    outline: none;
  }
  button:focus svg {
    transform: translate(6px, 0px) rotate(45deg);
    transition: transform 0.3s ease-in-out;
  }
  svg {
    width: 100%;
  }
</style>

<button
  on:click={() => ($layoutStore.slideoverPanel.open = !$layoutStore.slideoverPanel.open)}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 99.6 99.6"
    fill="currentColor">
    <g transform="matrix(1 0 0 1 1391.3 1126)">
      <path
        d="M-1341.5-1026.4c27.2,0,49.8-22.6,49.8-49.8c0-27.2-22.6-49.8-49.9-49.8c-27.2,0-49.8,22.6-49.8,49.8
		C-1391.3-1049-1368.7-1026.4-1341.5-1026.4z M-1341.5-1034.7c-23,0-41.5-18.5-41.5-41.5s18.4-41.5,41.4-41.5s41.5,18.5,41.6,41.5
		C-1299.9-1053.1-1318.4-1034.7-1341.5-1034.7z M-1364.3-1069.1c3.9,0,7.1-3.2,7.1-7.1s-3.2-7.1-7.1-7.1c-4,0-7.1,3.2-7.1,7.1
		S-1368.3-1069.1-1364.3-1069.1z M-1341.5-1069.1c3.9,0,7.1-3.2,7.1-7.1s-3.2-7.1-7.1-7.1s-7.1,3.2-7.1,7.1
		S-1345.5-1069.1-1341.5-1069.1z M-1318.7-1069.1c3.9,0,7.1-3.2,7.1-7.1s-3.2-7.1-7.1-7.1c-4,0-7.1,3.2-7.1,7.1
		S-1322.7-1069.1-1318.7-1069.1z" />
    </g>
  </svg>
</button>
