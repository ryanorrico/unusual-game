import { writable } from "svelte/store";

export const currentGameScore = writable(0);
export const currentGame = writable();
export const gameStore = writable([
  {
    name: "The Game",
    slug: "the-game",
    description: "",
    members: [],
    tasks: [
      {
        id: 1,
        body: "Posted a Random Talking Video",
        points: 2,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
      {
        id: 2,
        body: "Sent an email",
        points: 2,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 3,
        body: "Made an offer",
        points: 3,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 4,
        body: "Wrote with no distractions",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
      {
        id: 5,
        body:
          "Left smart comments on someones posts who has the audience you want",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
      {
        id: 6,
        body: "Checked in with your goals",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 7,
        body: "Checked in with your goals",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 8,
        body: "Followed up with someone",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 9,
        body: "Followed up with someone",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "week",
        },
      },
      {
        id: 10,
        body: "Turned a conversation into a sale",
        points: 3,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
      {
        id: 11,
        body: "Given value to your community (results in advance)",
        points: 2,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
      {
        id: 12,
        body: "Shown a testimonial",
        points: 1,
        complete: false,
        reset: {
          interval: 1,
          unit: "day",
        },
      },
    ],
  },
]);
