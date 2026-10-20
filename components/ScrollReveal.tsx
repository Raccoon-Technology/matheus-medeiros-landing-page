"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // IntersectionObserver fires immediately for elements already in view
    // when observation starts, so there is no need to special-case them —
    // doing so was fragile against re-renders that swap in a fresh node.
    const handle = (el: HTMLElement) => io.observe(el);

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(handle);

    // Catches elements that show up later. Two distinct cases:
    // - a brand new DOM node is inserted (childList)
    // - React reuses an existing node across a conditional branch and the
    //   data-reveal attribute itself is what changes (attributes) — this
    //   happens whenever both branches render the same element type at the
    //   same position (e.g. an if/else that both return a <div>).
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          m.addedNodes.forEach((node) => {
            if (!(node instanceof HTMLElement)) return;
            if (node.hasAttribute("data-reveal")) handle(node);
            node
              .querySelectorAll<HTMLElement>("[data-reveal]")
              .forEach(handle);
          });
        } else if (m.type === "attributes" && m.target instanceof HTMLElement) {
          if (m.target.hasAttribute("data-reveal")) handle(m.target);
        }
      }
    });
    mo.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-reveal"],
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
