<script>
  // import { createEventDispatcher } from "svelte";
  import pell from "pell";
  export let currentDocument;
  import { onMount } from "svelte";
  let editor;
  onMount(() => {
    pell.init({
      element: editor,
      // Use the output html, triggered by element's `oninput` event
      onChange: (html) => {
        $currentDocument.body = html;
      },
      defaultParagraphSeparator: "p",
      styleWithCSS: false,
      actions: [
        "bold",
        // {
        //   name: "custom",
        //   icon: `<svg
        //           version="1.1"
        //           xmlns="http://www.w3.org/2000/svg"
        //           width="20px"
        //           viewBox="0 0 110.9 89.4">
        //           <g id="Regular-M_1_" transform="matrix(1 0 0 1 1381.95 1126)">
        //             <path
        //               d="M-1366.6-1036.6h81.7c8.7,0,13.9-5.1,13.9-15.1v-50.1c0-10.1-5.2-15.1-15.3-15.1h-46.9c-3.3,0-5.3-0.8-7.8-2.9l-3-2.4
        //               c-3.2-2.7-5.7-3.6-10.5-3.6h-13.9c-8.5,0-13.5,4.9-13.5,14.7v59.5C-1381.9-1041.7-1376.8-1036.6-1366.6-1036.6z M-1374.1-1110.9
        //               c0-4.8,2.5-7.3,7.2-7.3h10.3c3.2,0,5.2,0.8,7.7,2.9l3,2.5c3.2,2.6,5.8,3.6,10.6,3.6h48.8c4.8,0,7.6,2.6,7.6,7.7v2.8h-95.2V-1110.9z
        //                 M-1366.5-1044.5c-4.9,0-7.6-2.6-7.6-7.7v-39.2h95.2v39.2c0,5-2.8,7.6-7.6,7.6H-1366.5z" />
        //           </g>
        //         </svg>`,
        //   title: "Custom Action",
        //   result: () => {
        //     let range = getSelection().range;
        //     wrapCustomSpan(range);
        //   },
        // },
        "underline",
      ],
      classes: {
        actionbar: "pell-actionbar",
        button: "pell-button",
        content: "pell-content outline-none",
        selected: "pell-button-selected",
      },
    });

    editor.content.innerHTML = $currentDocument.body;
  });

  function getSelection() {
    let selection;
    if (window.getSelection) {
      selection = window.getSelection();
    } else if (document.selection) {
      selection = document.selection.createRange();
    }
    let range = selection.getRangeAt(0);
    return { selection: selection, range: range };
  }

  function wrapCustomSpan(range) {
    let span = document.createElement("span");
    span.classList.add("bg-yellow-400", "p-1", "text-yellow-900");
    range.surroundContents(span);
  }
</script>

<style>
  #editor {
    font-size: 18px;
    background-color: white;
  }
</style>

<div class="p-4" id="editor" bind:this={editor} />
