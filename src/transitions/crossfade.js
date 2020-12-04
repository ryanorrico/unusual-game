import { backOut, quintOut } from "svelte/easing";
import { crossfade } from "svelte/transition";
const [send, receive] = crossfade({
  duration: (d) => Math.sqrt(d * 300),
  fallback(node, params) {
    console.log("params :>> ", params);
    console.log("node :>> ", node);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;

    return {
      duration: 200,
      easing: quintOut,
      css: (t) => `
                transform: ${transform} scale(${t});
                opacity: ${t};
                border-radius: ${t};
                margin-top:${t};
            `,
    };
  },
});

export { send, receive };
