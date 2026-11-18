import type { Metadata } from "next";
import { PageStyles } from "@/components/PageStyles";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = { title: "사이트 이용 안내 | BR GOLF" };

export default function Page() {
  return (
    <>
      <PageStyles />
      <header>
        <a className="logo" href={sitePath("index.html")}>
          BR GOLF
        </a>
        <a href={sitePath("index.html")}>홈으로 ↗</a>
      </header>
      <main className="journal legal-page">
        <h1>사이트 이용 안내</h1>
        <h2>매장 안내와 상담 준비</h2>
        <p>
          본 홈페이지는 바른골프피팅센터 동래점의 매장·제품 및 피팅 프로그램을
          소개합니다. 예약 폼은 FormSubmit을 통해 매장에 이메일로 신청 내용을
          전달합니다. 보안 확인이 표시되면 완료해 주세요. 방문 일정은 매장 확인
          후 확정되며, 급한 문의는 전화 0507-1390-5980 또는 카카오톡으로 연락해
          주세요.
        </p>
        <h2>제품과 서비스 정보</h2>
        <p>
          제품 사진은 소개용이며 실제 모델, 구성, 색상, 사양과 재고는 상담 시
          확인해야 합니다. 견적과 작업 일정은 상담 후 안내합니다. 피팅 결과와
          타구 특성은 개인의 스윙과 세팅에 따라 달라질 수 있습니다.
        </p>
        <h2>거래 안내</h2>
        <p>
          홈페이지 내 주문·결제 기능은 제공하지 않습니다. 구매 또는 작업 의뢰 전
          가격, 구성, 작업 범위, 공급 시기 및 취소·교환·환불 조건을 매장에
          확인해 주세요. 본 안내는 소비자의 법령상 권리를 제한하지 않습니다.
        </p>
        <h2>사진·이미지 안내</h2>
        <p>
          메인 화면과 매장 둘러보기에는 제공된 매장 사진을 사용합니다. 제품
          사진은 소개용이며 실제 구성은 상담 시 확인해 주세요.
        </p>
        <h2>사업자 정보</h2>
        <p>
          상호: 바른골프피팅센터 동래점
          <br />
          대표자: 조영훈
          <br />
          사업자등록번호: 711-75-00485
          <br />
          이메일: <a href="mailto:yhjo0720@naver.com">yhjo0720@naver.com</a>
          <br />
          전화: 0507-1390-5980
        </p>
      </main>
      <footer className="business-footer">
        <a className="logo" href={sitePath("index.html")}>
          BR<span>GOLF</span>
          <small>FITTING STUDIO</small>
        </a>
        <div className="business-details">
          <strong>바른골프피팅센터 동래점</strong>
          <p>
            대표자: 조영훈 <span>사업자등록번호: 711-75-00485</span>
          </p>
          <p>
            사업장 소재지: 부산광역시 동래구 사직북로 4, 2층 210호 (사직동,
            삼정자이언츠파크)
          </p>
          <p>
            전화: <a href="tel:050713905980">0507-1390-5980</a>{" "}
            <span>호스팅: GitHub, Inc. (GitHub Pages)</span>
          </p>
          <p>
            본 홈페이지는 매장·제품 소개 및 상담 준비를 위한 안내 사이트입니다.
            사이트 내 주문·결제 기능은 없습니다. 온라인 예약 신청은 이메일로
            전달되며 매장 확인 후 확정됩니다.
          </p>
          <p>
            이메일: <a href="mailto:yhjo0720@naver.com">yhjo0720@naver.com</a>
          </p>
          <div className="legal-links">
            <a href={sitePath("privacy.html")}>개인정보 처리 안내</a>
            <a href={sitePath("site-guide.html")}>사이트 이용 안내</a>
            <a href={sitePath("index.html#visit")}>오시는 길</a>
          </div>
          <small>© 2026 BR GOLF.</small>
        </div>
      </footer>
    </>
  );
}
