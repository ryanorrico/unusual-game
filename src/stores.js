import { writable } from "svelte/store";
import SlideOverPanelDefault from "./pages/_components/SlideoverPanel/SlideOverPanelDefault.svelte";
import SlideUpPanelDefault from "./pages/_components/SlideUpPanel/SlideUpPanelDefault.svelte";
import RightColumnDefault from "./pages/_components/RightColumn/RightColumnDefault.svelte";
export const user = writable(false);
export const userDocuments = writable();
export const tasksStore = writable();
export const score = writable(0);
export const currentDiscussion = writable();
export const currentDocument = writable();
export const uploadedImage = writable();

export const layoutStore = writable({
  topNav: { open: true, logo: false },
  rightColumn: {
    open: false,
    component: RightColumnDefault,
  },
  slideoverPanel: {
    open: false,
    component: SlideOverPanelDefault,
  },
  slideUpPanel: {
    open: false,
    component: SlideUpPanelDefault,
    name: "user[image]",
    text: "Upload a photo",
  },
});

// export const podcastPlaying = writable(false);
export const podcastStore = writable({
  playerOpen: false,
  playing: false,
  id: "",
  title: "",
  file: "",
  // // Each song has its own howl, for cross-fade on track switching... probably
  howl: null,
});

export const notificationStore = writable([]);

export const postsStore = writable([]);
