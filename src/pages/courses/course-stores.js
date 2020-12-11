import { writable } from "svelte/store";
import QuoteBubble from "../_components/svg/QuoteBubble.svelte";
import ListBulletRectangle from "../_components/svg/ListBulletRectangle.svelte";
import ShareArrowRight from "../_components/svg/ShareArrowRight.svelte";

import SharePost from "../_components/Sidebar/SharePost.svelte";
import CourseContent from "../_components/Courses/CourseContent.svelte";
export const coursesStore = writable([
  {
    id: 4,
    name: "Rabbit Hole",
    image: "/images/rabbit-hole.jpg",
    owner_id: 1,
    slug: "rabbit-hole",
    lessons: [
      {
        name: "Introduction",
        slug: "introduction",
        items: [
          { type: "video", vimeo_id: 269136460, position: 0 },
          { type: "article", body: "Here", position: 1 },
          { type: "document", body: "This is a template", position: 2 },
        ],
        assignments: [
          {
            id: 1,
            name: "Watch the first video",
            body: "This is your first assignment",
            complete: false,
          },
          {
            id: 2,
            name: "Make your welcome post in the forum",
            body: "Just go to the place and post like this.",
            complete: false,
          },
        ],
      },
      {
        name: "Build A Brand Workshop",
        slug: "build-a-brand-workshop",
        items: [
          { type: "video", vimeo_id: 270511113, position: 0 },
          { type: "article", body: "Here", position: 1 },
          { type: "document", body: "This is a template", position: 2 },
        ],
        assignments: [
          {
            id: 1,
            name: "Watch the first video",
            body: "This is your first assignment",
            complete: false,
          },
          {
            id: 2,
            name: "Make your welcome post in the forum",
            body: "Just go to the place and post like this.",
            complete: false,
          },
        ],
      },
      { name: "Ugly Emails for Life", slug: "ugly-emails-for-life" },
      { name: "Random Talking Video", slug: "random-talking-video" },
      { name: "The Fascination Bootcamp", slug: "fascination-bootcamp" },
    ],
    // sidebarNavTabs: [
    //   {
    //     iconComponent: ListBulletRectangle,
    //     tabComponent: CourseContent,
    //   },
    //   {
    //     iconComponent: QuoteBubble,
    //     tabComponent: SharePost,
    //   },
    // ],
    discussion: {
      id: "",
      comments: [],
    },
  },
  {
    name: "The Premium Group",
    owner_id: 1,
    slug: "premium-group",
    lessons: [
      {
        name: "Introduction",
        slug: "introduction",
        items: [
          { type: "video", vimeo_id: 269136460, position: 0 },
          { type: "article", body: "Here", position: 1 },
          { type: "document", body: "This is a template", position: 2 },
        ],
      },
      {
        name: "Build A Brand Workshop",
        slug: "build-a-brand-workshop",
        items: [
          { type: "article", body: "Here", position: 0 },
          { type: "document", body: "This is a template", position: 1 },
        ],
      },
      { name: "Ugly Emails for Life", slug: "ugly-emails-for-life" },
    ],
    // sidebarNavTabs: [
    //   {
    //     iconComponent: ListBulletRectangle,
    //     tabComponent: CourseContent,
    //   },
    //   {
    //     iconComponent: ShareArrowRight,
    //     tabComponent: SharePost,
    //   },
    // ],
  },
]);

export const currentCourse = writable();
