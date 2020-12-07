<script>
  import { onMount, afterUpdate } from "svelte";
  import { createEventDispatcher } from "svelte";
  import { uploadedImage } from "../../../stores";
  export let currentDocument;

  // export let user;
  // export let initialValue;
  // export let section;
  // console.log("initialValue :>> ", initialValue);
  import { layout, params, page } from "@roxi/routify";
  import Quill from "quill";
  import quillOptions from "./quill-options.js";
  import QuillToolbar from "./QuillToolbar.svelte";

  let quill;
  let editor;

  const dispatch = createEventDispatcher();

  onMount(() => {
    quill = new Quill(editor, quillOptions);

    quill.clipboard.dangerouslyPasteHTML($currentDocument.body);
    quill.on("text-change", function (delta, oldDelta, source) {
      dispatch("contentChange", {
        html: quill.root.innerHTML,
        string: quill.getText(),
        // section_id: editor.dataset.sectionId,
        // section_id: this.dataset.sectionId,
      });
    });
  });

  export function embedImage() {
    const range = quill.getSelection();
    quill.insertEmbed(range ? range.index : 0, "image", $uploadedImage);
    $uploadedImage = null;
  }
</script>

<style>
  button#embed-image {
    background: linear-gradient(180deg, #8614f8 0, #760be0 100%);
    color: white;
  }
</style>

<QuillToolbar />

{#if $uploadedImage}
  <button on:click={embedImage} id="embed-image">Embed image</button>
  <!-- <div class="text-white">{$uploadedImage}</div> -->
{/if}

<div bind:this={editor} />

<!-- const Inline = Quill.import("blots/inline");
export class writeGoodBlot extends Inline {
  static create(params) {
    let node = super.create();
    node.classList.add(
      "bg-yellow-300",
      "p-1",
      "rounded",
      "quill-tooltip",
      "quill-blot",
      "whitespace-no-wrap"
    );
    node.dataset.reason = params.reason;
    node.setAttribute("aria-label", params.reason);
    node.setAttribute("data-balloon-pos", params.position);
    return node;
  }

  static formats(node) {
    return {
      reason: node.getAttribute("data-reason"),
      position: node.getAttribute("data-balloon-pos"),
    };
  }
}
writeGoodBlot.blotName = "writegood";
writeGoodBlot.tagName = "SPAN";
writeGoodBlot.className = "writegood";
Quill.register(writeGoodBlot); -->

<!-- import TimeMe from "timeme.js";
import writeGood from "write-good"; -->

<!-- if ($documentStore.timer_on == false) {
    TimeMe.initialize({
      currentPageName: "quill", // current page
      idleTimeoutInSeconds: 30, // seconds
    });
    documentStore.update((theStore) => {
      return Object.assign(theStore, {
        timer_on: true,
      });
    });
  }

  TimeMe.callWhenUserLeaves(function () {
    console.log("user left");
    distractedStore.update((theStore) => {
      return Object.assign(theStore, {
        start: Date.now(),
      });
    });
  });

  TimeMe.callWhenUserReturns(function () {
    console.log("user returned");
    // const secondsAllowedBeforeDistraction = 1;
    let userIsBackTime = Date.now();

    if ($isActive("/write")) {
      distractedStore.update((theStore) => {
        return Object.assign(theStore, {
          stop: userIsBackTime,
        });
      });

      if (
        userIsBackTime - $distractedStore.start > 5000 &&
        $documentStore.id
      ) {
        updateDistractedStore();
      }
    }

    // distractedStore.set({});
  }); -->
