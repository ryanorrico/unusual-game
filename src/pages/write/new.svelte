<script>
  import {
    currentDocument,
    //   documentsIndexStore,
    user,
    folder,
  } from "../../stores";
  import Api from "../../utils/api";
  import { goto, ready } from "@roxi/routify";

  if (window.routify.inBrowser) {
    $: createNewDocument();

    async function createNewDocument() {
      const data = await Api.post(`/users/1/documents`, {
        title: "Untitled",
      });
      $currentDocument = data;
      $currentDocument.distractions = [];
      $currentDocument.body = "";
      $currentDocument.sentence_count = 0;
      window.history.replaceState({}, "", `/write/${data.slug}`);
      $ready();
    }
  }
</script>
