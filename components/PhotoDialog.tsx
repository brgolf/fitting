"use client";

import { useEffect, useRef } from "react";

export function PhotoDialog() {
  const dialog = useRef<HTMLDialogElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const caption = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    function openPhoto(event: MouseEvent) {
      const button =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-photo]")
          : null;
      if (
        !button?.dataset.photo ||
        !dialog.current ||
        !image.current ||
        !caption.current
      )
        return;
      const description = button.querySelector("img")?.alt ?? "";
      image.current.src = button.dataset.photo;
      image.current.alt = description;
      caption.current.textContent = description;
      dialog.current.showModal();
      dialog.current.querySelector("button")?.focus();
      document.body.classList.add("photo-open");
    }
    document.addEventListener("click", openPhoto);
    return () => {
      document.removeEventListener("click", openPhoto);
      document.body.classList.remove("photo-open");
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      id="photo-dialog"
      className="photo-dialog"
      aria-label="매장 사진 크게 보기"
      onClose={() => document.body.classList.remove("photo-open")}
      onClick={(event) => {
        const element = event.currentTarget;
        if (event.target !== element) return;
        const box = element.getBoundingClientRect();
        if (
          event.clientX < box.left ||
          event.clientX > box.right ||
          event.clientY < box.top ||
          event.clientY > box.bottom
        )
          element.close();
      }}
    >
      <button
        className="photo-close"
        type="button"
        aria-label="사진 닫기"
        onClick={() => dialog.current?.close()}
      >
        닫기 ×
      </button>
      <img ref={image} id="photo-full" alt="" />
      <p ref={caption} id="photo-caption" />
    </dialog>
  );
}
