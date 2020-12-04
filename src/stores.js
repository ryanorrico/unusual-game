import { writable } from "svelte/store";

export const user = writable(false);
export const userDocuments = writable();
export const tasksStore = writable();
export const score = writable(0);
export const currentDocument = writable();
export const layoutStore = writable({ topNav: { open: true, logo: false } });

// export const podcastPlaying = writable(false);
export const podcastStore = writable({ playerOpen: false, playing: false });
