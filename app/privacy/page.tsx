import type { Metadata } from "next";
import { PageStyles } from "@/components/PageStyles";
import { sitePath } from "@/lib/site-path";

export const metadata: Metadata = { title: "개인정보 처리 안내 | BR GOLF" };

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
        <h1>개인정보 처리 안내</h1>
        <p>적용일: 2026년 11월 15일</p>
        <p>
          바른골프피팅센터 동래점은 이 홈페이지에서 이루어지는 정보 처리를
          다음과 같이 안내합니다. 매장 방문, 전화 상담 등 홈페이지 외 업무의
          정보 처리는 해당 업무에서 별도로 안내합니다.
        </p>
        <h2>1. 예약 신청 정보와 이메일 전달</h2>
        <p>
          예약 상담과 일정 확인을 위해 연락처, 희망 방문 일시, 피팅 희망 품목 및
          선택 입력한 클럽 스펙·고민·전달사항을 사용합니다. 전송 동의 후 신청
          버튼을 누르면 입력 내용이 FormSubmit으로 전송되어 매장 이메일
          yhjo0720@naver.com으로 전달됩니다. 동의하지 않을 수 있으며, 이 경우
          온라인 신청 대신 전화 또는 카카오톡으로 문의해 주세요.
        </p>
        <p>
          홈페이지는 입력 내용을 쿠키나 로컬 저장소에 보관하지 않습니다.
          FormSubmit은 공식 문서에서 제출 내용을 30일 보관한다고 안내합니다.
          매장에서 받은 이메일의 보관·삭제와 정보 정정에 관한 문의는 아래
          연락처로 요청해 주세요.
        </p>
        <p>
          <a
            href="https://formsubmit.co/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            FormSubmit 개인정보 안내
          </a>{" "}
          ·{" "}
          <a
            href="https://formsubmit.co/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            FormSubmit 제출 정보 보관 안내
          </a>
        </p>
        <h2>2. 접속 정보와 호스팅</h2>
        <p>
          본 사이트는 GitHub Pages로 제공됩니다. GitHub는 보안 목적으로 방문자의
          IP 주소를 기록·저장한다고 안내하고 있습니다. 해당 접속 정보의 처리와
          보관은 GitHub 정책을 확인해 주세요. 운영자가 별도의 분석 도구나 광고
          추적기를 설치하지 않았으며, 사이트 코드에서 쿠키나 로컬 저장소로 상담
          내용을 보관하지 않습니다.
        </p>
        <p>
          <a
            href={
              "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub 개인정보 처리방침
          </a>
        </p>
        <h2>3. 외부 지도와 링크</h2>
        <p>
          홈페이지의 약도는 자체 이미지 파일로 표시합니다. 약도 이미지를
          선택하면 네이버 지도로 이동합니다. 네이버
          예약·네이버지도·카카오맵·카카오톡 버튼을 선택하면 해당 외부 서비스로
          이동하며, 이동 후 정보 처리는 각 서비스의 정책이 적용됩니다. 외부
          서비스 이동 없이 기재된 주소와 전화번호만 확인할 수도 있습니다.
        </p>
        <h2>4. 정보 제공·위탁 및 이용자 문의</h2>
        <p>
          온라인 신청은 FormSubmit을 통한 매장 이메일 전달 방식입니다. 신청한
          정보는 발송 서비스와 매장 이메일 서비스에서 처리됩니다. 카카오톡으로
          직접 전송한 상담 내용은 별도로 처리됩니다. 호스팅 및 외부 지도
          서비스의 정보 처리는 위 항목을 확인해 주세요. 홈페이지에 입력한 내용에
          대한 열람·정정·삭제 문의는 아래 연락처로 요청할 수 있습니다. 신청 전
          브라우저에 입력한 내용은 이용자가 직접 수정·삭제할 수 있습니다. 발송한
          내용에 대한 문의는 매장으로 연락해 주세요.
        </p>
        <p>
          개인정보 관련 문의: 바른골프피팅센터 동래점
          <br />
          대표자: 조영훈
          <br />
          이메일: <a href="mailto:yhjo0720@naver.com">yhjo0720@naver.com</a>
          <br />
          전화: <a href="tel:050713905980">0507-1390-5980</a>
          <br />
          주소: 부산광역시 동래구 사직북로 4, 2층 210호
        </p>
        <h2>5. 안내 변경</h2>
        <p>
          정보 처리 방식이 달라지면 관련 안내를 갱신합니다. 안내가 변경되면 본
          페이지에 변경 내용과 적용일을 표시합니다.
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
