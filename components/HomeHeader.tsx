"use client";

import { useEffect, useRef, useState } from "react";
import { sitePath } from "@/lib/site-path";
export function HomeHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const navigation = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  function closeGroups() {
    const groups =
      navigation.current?.querySelectorAll<HTMLDetailsElement>("details[open]");
    groups?.forEach((group) => {
      group.open = false;
    });
    return groups?.[0];
  }

  useEffect(() => {
    function outsideClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        closeGroups();
    }
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const group = closeGroups();
      if (open) toggle.current?.focus();
      else group?.querySelector("summary")?.focus();
      setOpen(false);
    }
    document.addEventListener("click", outsideClick);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <header ref={header}>
      <a
        className="logo"
        href={sitePath("index.html")}

        aria-label="홈페이지 새로고침"
      >
        BR<span>GOLF</span>
        <small>FITTING STUDIO</small>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        ref={toggle}
        onClick={() => setOpen(!open)}
        aria-controls="main-navigation"
      >
        메뉴 <span aria-hidden="true">☰</span>
      </button>
      <nav
        id="main-navigation"
        className={open ? "main-navigation is-open" : "main-navigation"}
        ref={navigation}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            closeGroups();
            setOpen(false);
          }
        }}
        aria-label="주 메뉴"
      >
        <a className="nav-blog-direct nav-visit-direct" href="#visit">
          오시는 길
        </a>
        <details className="nav-group" name="main-navigation-group">
          <summary>센터 소개</summary>
          <div className="nav-submenu">
            <a href="#about">피팅 철학</a>
            <a href="#fitter">피팅 상담 소개</a>
            <a href="#studio">시설 및 장비</a>
            <a href="#visit">오시는 길</a>
          </div>
        </details>
        <details className="nav-group" name="main-navigation-group">
          <summary>피팅 안내</summary>
          <div className="nav-submenu">
            <a href="#programs">피팅 종류</a>
            <a href="#process">피팅 과정</a>
            <a href="#fitting-price">소요 시간 · 비용 안내</a>
            <a href="#faq">자주 묻는 질문</a>
          </div>
        </details>
        <details className="nav-group" name="main-navigation-group">
          <summary>제품 안내</summary>
          <div className="nav-submenu">
            <a href="#products">취급 제품 안내</a>
            <a href="#product-clubs">클럽</a>
            <a href="#product-shafts">샤프트</a>
            <a href="#product-grips">그립</a>
          </div>
        </details>
        <a className="nav-blog-direct" href="#journal">
          피팅 사례
        </a>
        <details className="nav-group" name="main-navigation-group">
          <summary>예약·상담</summary>
          <div className="nav-submenu">
            <a href="#booking">방문 예약 안내</a>
            <a href="tel:050713905980">전화 상담</a>
            <a href="#contact">예약 신청</a>
          </div>
        </details>
        <details className="nav-group" name="main-navigation-group">
          <summary>소식</summary>
          <div className="nav-submenu">
            <a href="#news">공지사항</a>
            <a href="#journal">센터 이야기</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
