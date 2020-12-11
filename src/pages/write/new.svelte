<script>
  import {
    currentDocument,
    //   documentsIndexStore,
    // user,
    // folder,
  } from "../../stores";
  import Api from "../../utils/api";
  import { goto, ready } from "@roxi/routify";

  async function createNewDocument() {
    if (!window.routify.inBrowser) {
      return;
    } else {
      const data = await Api.post(`/users/1/documents`, {
        title: "Untitled",
      });
      $currentDocument = data;
      $currentDocument.distractions = [];
      $currentDocument.body = "";
      $currentDocument.word_count = 0;
      $currentDocument.sentence_count = 0;
      $currentDocument.backspace_count = 0;
      window.history.replaceState({}, "", `/write/${data.slug}`);
      $ready();
    }
  }
  createNewDocument();
</script>

OK.
