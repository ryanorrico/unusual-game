<script>
  export let heading = "Read the docs";
  export let description = "This is a Description. Best if two lines.";
  export let link = "";
  export let linkText = "Get started now";
  export let startColor = "purple";
  export let endColor = "indigo";
  // export let svg;
  import hexToRgbA from "../../utils/hexToRgbA";
  import tailwindColors from "../../utils/tailwind-colors";
</script>

<style>
</style>

<!-- {rgbA} -->
<section class="flex">
  <div
    class="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
    <div
      class="w-full"
      style="background: linear-gradient(to bottom, {hexToRgbA(tailwindColors[startColor][600], 1).string}, {hexToRgbA(tailwindColors[startColor][400], 1).string});">
      <div
        class="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
        <h2 class="text-xl font-semibold mb-2 text-shadow">
          <!-- <slot name="heading">Read the docs</slot> -->
          {heading}
        </h2>
        <p class="font-medium text-{startColor}-100 text-shadow mb-4 ">
          {description}
        </p>
        <a
          class="mt-auto bg-{startColor}-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
          href={link}>
          {linkText}
        </a>
      </div>

      <div class="relative md:pl-6 xl:pl-8 hidden sm:block">
        <slot>
          <svg
            viewBox="0 0 352 232"
            width="352"
            height="232"
            fill="none"
            class="absolute top-6 left-6 md:static overflow-visible"><g
              opacity="0.8">
              <g filter="url(#guides_svg__filter0_dd)">
                <rect width="352" height="232" rx="12" fill="#fff" />
              </g>
              <path fill="#DDD6FE" d="M107 27h208v1H107z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M46 8c-2.4 0-3.9 1.212-4.5 3.637.9-1.213 1.95-1.667 3.15-1.364.685.173 1.174.675 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.213-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23C49.252 9.047 48.231 8 46 8zm-4.5 5.456c-2.4 0-3.9 1.212-4.5 3.636.9-1.212 1.95-1.666 3.15-1.363.685.173 1.174.674 1.716 1.23.882.905 1.903 1.952 4.134 1.952 2.4 0 3.9-1.212 4.5-3.637-.9 1.212-1.95 1.667-3.15 1.364-.685-.173-1.174-.675-1.716-1.23-.882-.905-1.903-1.952-4.134-1.952z"
                fill="#A78BFA" />
              <rect x="48" y="43" width="25" height="4" rx="2" fill="#C4B5FD" />
              <rect
                x="255"
                y="43"
                width="25"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="255"
                y="51"
                width="32"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="255"
                y="59"
                width="24"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="255"
                y="67"
                width="35"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="255"
                y="75"
                width="22"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="42"
                width="57"
                height="8"
                rx="4"
                fill="#A78BFA" />
              <rect
                x="107"
                y="54"
                width="121"
                height="4"
                rx="2"
                fill="#C4B5FD" />
              <rect
                x="121"
                y="11"
                width="49"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="292"
                y="11"
                width="11"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="70"
                width="129"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="177"
                width="129"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="129"
                width="137"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="137"
                width="137"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="211"
                width="129"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="78"
                width="129"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="185"
                width="121"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="219"
                width="121"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="86"
                width="121"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="94"
                width="121"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="102"
                width="129"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="107"
                y="118"
                width="57"
                height="6"
                rx="3"
                fill="#A78BFA" />
              <rect
                x="107"
                y="201"
                width="57"
                height="6"
                rx="3"
                fill="#A78BFA" />
              <rect x="48" y="53" width="21" height="4" rx="2" fill="#C4B5FD" />
              <rect x="48" y="63" width="18" height="4" rx="2" fill="#C4B5FD" />
              <rect x="48" y="73" width="13" height="4" rx="2" fill="#C4B5FD" />
              <rect x="48" y="83" width="19" height="4" rx="2" fill="#C4B5FD" />
              <rect x="48" y="93" width="23" height="4" rx="2" fill="#C4B5FD" />
              <rect
                x="37"
                y="112"
                width="23"
                height="3"
                rx="1.5"
                fill="#A78BFA" />
              <rect
                x="37"
                y="180"
                width="23"
                height="3"
                rx="1.5"
                fill="#A78BFA" />
              <rect
                x="37"
                y="120"
                width="18"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="188"
                width="18"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="128"
                width="18"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="196"
                width="18"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="136"
                width="21"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="204"
                width="21"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="144"
                width="21"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="212"
                width="21"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="152"
                width="30"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="220"
                width="30"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="160"
                width="30"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <rect
                x="37"
                y="168"
                width="24"
                height="4"
                rx="2"
                fill="#DDD6FE" />
              <circle cx="40" cy="45" r="3" fill="#A78BFA" />
              <circle cx="312" cy="13" r="3" fill="#DDD6FE" />
              <circle cx="40" cy="55" r="3" fill="#A78BFA" />
              <circle cx="40" cy="65" r="3" fill="#A78BFA" />
              <circle cx="40" cy="75" r="3" fill="#A78BFA" />
              <circle cx="40" cy="85" r="3" fill="#A78BFA" />
              <circle cx="40" cy="95" r="3" fill="#A78BFA" />
              <path
                d="M115 17.5l-2.379-2.379m0 0a3 3 0 10-4.242-4.243 3 3 0 004.242 4.243z"
                stroke="#C4B5FD" />
              <rect
                x="107"
                y="147"
                width="132"
                height="23"
                rx="4"
                fill="#A78BFA" />
            </g>
            <defs>
              <filter
                id="guides_svg__filter0_dd"
                x="-15"
                y="-7"
                width="382"
                height="262"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="3" />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feColorMatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow"
                  result="shape" />
              </filter>
            </defs>
          </svg>
        </slot>
      </div>
    </div>
    <div
      class="absolute bottom-0 left-0 right-0 h-20 hidden sm:block"
      style="background: linear-gradient(to top, {hexToRgbA(tailwindColors[startColor][500], 1).string}, {hexToRgbA(tailwindColors[startColor][500], 0).string});" />
  </div>
</section>
