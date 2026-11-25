"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function ReservationBooking({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  function open(element: HTMLElement) {
    trigger.current = element;
    if (!dialog.current?.open) dialog.current?.showModal();
  }
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      const link = (event.target as Element).closest?.('a[href]') as HTMLAnchorElement | null;
      if (!link) return;
      const url = new URL(link.href, location.href);
      if (url.origin === location.origin && url.hash === '#consult') {
        event.preventDefault();
        open(link);
      }
    };
    document.addEventListener('click', listener);
    if (location.hash === '#consult') dialog.current?.showModal();
    return () => document.removeEventListener('click', listener);
  }, []);
  return <>
    <aside className="booking-preview" aria-labelledby="booking-preview-title">
      <p className="eyebrow">RESERVATION / 100% 예약제</p>
      <h2 id="booking-preview-title">당신에게 맞는 클럽,<br />상담부터 시작하세요.</h2>
      <p>스윙과 클럽의 고민을 함께 살펴봅니다.<br />희망 일정을 남기시면 매장에서 확인 후 연락드립니다.</p>
      <button className="button" type="button" aria-haspopup="dialog" aria-controls="booking-dialog" onClick={event => open(event.currentTarget)}>시타 및 피팅 예약 신청 <span aria-hidden="true">↗</span></button>
      <a className="naver-booking" href="https://pcmap.place.naver.com/place/1759569518/booking" target="_blank" rel="noopener noreferrer"><strong aria-hidden="true">N</strong> 네이버로 예약하기 ↗</a>
      <a className="booking-phone" href="tel:050713905980">전화 상담 · 0507-1390-5980</a>
      <p className="preview-hours">평일 11:00–20:00 / 토·일 11:00–18:00<br />삼정자이언츠파크 지하 2·3층 무료주차</p>
    </aside>
    <dialog ref={dialog} id="booking-dialog" className="booking-dialog" aria-labelledby="booking-title" onClose={() => trigger.current?.focus()} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds=event.currentTarget.getBoundingClientRect();
      if(event.clientX<bounds.left || event.clientX>bounds.right || event.clientY<bounds.top || event.clientY>bounds.bottom) event.currentTarget.close();
    }}>
      <div className="dialog-toolbar"><button className="booking-close" type="button" aria-label="예약창 닫기" autoFocus onClick={() => dialog.current?.close()}>닫기 ×</button></div>
      {children}
    </dialog>
  </>;
}
