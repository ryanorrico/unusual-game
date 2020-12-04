// import { user } from "../../../stores";
// let userStore;
// const unsubscribe = user.subscribe((value) => {
//   userStore = value;
// });
import QuillToolbar from "./QuillToolbar.svelte";
const quillToolbarOptions = [
  [{ header: 1 }, { header: 2 }, "blockquote", "link", "image"],
  ["bold", "italic", "underline", "strike"],
  [{ list: "unordered" }, { list: "ordered" }],
  [{ align: [] }],
  // ["clean"],
];

const quillOptions = {
  modules: {
    toolbar: "#quill-toolbar",
  },
  theme: "bubble",
  // placeholder: "",
};
// placeholder: `What's up, ${userStore.name.split(" ")[0]}?`,

export default quillOptions;
