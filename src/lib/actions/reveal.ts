import type { Action } from "svelte/action";

/**
 * Adds the `is-visible` class once the node scrolls into view.
 * Pair with the `.reveal` CSS class for a staggered fade/slide-up.
 * Set `--reveal-delay` inline for stagger.
 */
export const reveal: Action<HTMLElement, { threshold?: number } | undefined> = (
  node,
  params,
) => {
  node.classList.add("reveal");

  if (typeof IntersectionObserver === "undefined") {
    node.classList.add("is-visible");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      }
    },
    { threshold: params?.threshold ?? 0.15 },
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
