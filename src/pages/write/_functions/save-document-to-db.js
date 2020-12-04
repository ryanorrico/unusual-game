import { user, currentDocument } from "../../../stores";
import Api from "../../../utils/api";
let userStore;
const userUnsub = user.subscribe((value) => {
  userStore = value;
});
let documentStore;
const docUnsub = currentDocument.subscribe((value) => {
  documentStore = value;
});

async function saveDocumentToDB() {
  const data = await Api[`${documentStore.id ? "patch" : "post"}`](
    `/users/${userStore.id}/documents/${
      documentStore.id ? documentStore.id : ""
    }`,
    {
      document: {
        body: documentStore.body,
        title: documentStore.title,
        // backspace_count: currentDocumentStore.backspace_count,
        // word_count: currentDocumentStore.word_count,
        // sentence_count: currentDocumentStore.sentence_count,
        // folder_id: currentDocumentStore.folder_id,
        // slug: documentStore.slug,
        // sections_attributes: currentDocumentStore.sections,
      },
    }
  );
  documentStore.saved = true;
  // currentDocument.update((theStore) => {
  //   return Object.assign(theStore, {
  //     saved: true,
  //   });
  // });
  if (data.update_slug) {
    window.history.replaceState({}, "", `/write/${data.slug}`);
  }
  docUnsub();
  userUnsub();
}

export default saveDocumentToDB;
