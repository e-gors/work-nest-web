import { useEffect } from "react";

/**
 * Scrolls the window to top on first render.
 * Optionally, you can pass a `ref` to scroll a specific container instead.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
}
