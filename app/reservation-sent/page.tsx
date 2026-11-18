import type { Metadata } from "next";
import { PageStyles } from "@/components/PageStyles";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = {
  title: "예약 신청 안내 | 바른골프피팅 동래점",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <PageStyles planning />
      <main className="journal">
        <p className="eyebrow">RESERVATION REQUEST</p>
        <h1>예약 신청을 보내주셔서 감사합니다.</h1>
        <p>
          매장에서 신청 내용을 확인한 후 연락드립니다. 방문 일정은 매장 확인 후
          확정됩니다.
        </p>
        <p>
          이 화면 자체가 이메일 수신이나 예약 확정을 보증하지는 않습니다. 연락이
          없거나 당일 방문을 원하시면 전화 또는 카카오톡으로 확인해 주세요.
        </p>
        <a className="button" href="tel:050713905980">
          전화 문의 · 0507-1390-5980
        </a>
        <a
          className="button kakao-chat"
          href="https://pf.kakao.com/_BxaZVn/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          카카오톡 1:1 상담
        </a>
        <p>
          <a href={sitePath("index.html")}>홈페이지로 돌아가기 ↗</a>
        </p>
      </main>
    </>
  );
}
