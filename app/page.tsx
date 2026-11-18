import type { Metadata } from "next";
import { PageStyles } from "@/components/PageStyles";
import { sitePath } from "@/lib/site-path";
import { HomeHeader } from "@/components/HomeHeader";
import { ReservationForm } from "@/components/ReservationForm";
import { PhotoDialog } from "@/components/PhotoDialog";
import { BlogPosts } from "@/components/BlogPosts";

export const metadata: Metadata = {
  title: "부산 동래 바른골프피팅센터 | FlightScope·QED 정밀 피팅",
  description:
    "부산 사직동 데이터 기반 정밀 골프 피팅. FlightScope·QED 분석, 시타 및 피팅 예약 상담. 평일 11~20시, 주말 11~18시.",
};

export default function Page() {
  return (
    <>
      <PageStyles navigation planning />
      <HomeHeader />
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">BUSAN SAJIK / DATA-DRIVEN GOLF FITTING</p>
            <p className="studio-name">부산 동래 바른골프피팅센터</p>
            <h1>
              데이터로 증명하는
              <br />
              <em>골프피팅</em>
            </h1>
            <div
              className="equipment-logos"
              role="group"
              aria-label="분석 장비 브랜드 FlightScope와 QED"
            >
              <div className="equipment-brand equipment-brand-flightscope">
                <span className="flightscope-logo-window">
                  <img
                    src={sitePath("assets/flightscope-official-brand.png")}
                    alt="FlightScope"
                    width={600}
                    height={200}
                  />
                </span>
              </div>
              <div className="equipment-brand equipment-brand-qed">
                <img
                  src={sitePath("assets/qed-brand-supplied.png")}
                  alt="QED"
                  width={447}
                  height={447}
                />
              </div>
            </div>
            <p className="lead">
              스윙 분석부터 샤프트·헤드 최적 조합까지.
              <br />
              정밀한 데이터로 당신에게 맞는 클럽을 찾습니다.
            </p>
            <a className="button" href="tel:050713905980">
              전화 상담 연결하기 <span>↗</span>
            </a>
            <p className="hero-hours">
              평일 11:00–20:00 / 토·일 11:00–18:00
              <br />
              사직야구장 맞은편 · 지하 2~3층 무료주차 (삼정자이언츠파크)
            </p>
          </div>
          <aside className="quick-booking" aria-labelledby="booking-title">
            <p className="eyebrow">RESERVATION / 100% 예약제</p>
            <h2 id="booking-title">시타 및 피팅 예약</h2>
            <p className="booking-intro">
              희망 일정을 작성하면 매장에 예약 신청 메일이 전송됩니다.
            </p>
            <ReservationForm />
            <a
              className="naver-booking"
              href="https://pcmap.place.naver.com/place/1759569518/booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong aria-hidden="true">N</strong> 네이버로 예약하기 ↗
            </a>
            <a className="booking-phone" href="tel:050713905980">
              전화로 예약하기 · 0507-1390-5980 ↗
            </a>
          </aside>
        </section>
        <div className="service-strip">
          <a href="#programs">
            <span>
              맞춤 클럽 피팅<small>드라이버 · 아이언 · 풀백</small>
            </span>
            <span>↗</span>
          </a>
          <a href="#care">
            <span>
              그립 교체 &amp; 클럽 케어<small>손에 맞는 감각과 세팅</small>
            </span>
            <span>↗</span>
          </a>
          <a href="#visit">
            <span>
              방문안내<small>지하 2·3층 무료 주차</small>
            </span>
            <span>↗</span>
          </a>
        </div>
        <section className="about section" id="about">
          <div className="philosophy-visual">
            <p className="eyebrow">
              <svg
                className="ui-icon "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20 3C9 2 3 7 4 14c1 6 7 8 12 3 4-4 4-9 4-14ZM5 20 16 8"></path>
              </svg>
              OUR PHILOSOPHY
            </p>
            <figure className="philosophy-model-kit">
              <div className="philosophy-artwork">
                <img
                  src={sitePath("assets/philosophy-thinking.png")}
                  alt="턱에 손을 대고 생각하는 골퍼와 골프 장비 모델 키트"
                  fetchPriority="high"
                  decoding="async"
                />
                <span
                  className="philosophy-head-cover"
                  aria-hidden="true"
                ></span>
                <img
                  className="philosophy-head-motion"
                  aria-hidden="true"
                  src={sitePath("assets/philosophy-thinking.png")}
                  alt=""
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <figcaption>YOUR SWING. YOUR COMPLETE SET.</figcaption>
            </figure>
          </div>
          <div>
            <h2>
              클럽을 바꾸기 전에,
              <br />
              <span>당신을 먼저 이해합니다.</span>
            </h2>
            <p>
              같은 클럽도 누구의 손에 쥐어지느냐에 따라 달라집니다.
              <br />
              <strong>
                FlightScope와 QED, 서로 다른 측정 방식의 두 장비를 함께
                운용합니다.
              </strong>
              <br />한 단계 더 세밀하게 스윙과 샷 데이터를 분석해, 고객님께 맞는
              최적의 클럽 조합을 찾아드립니다.
            </p>
            <div className="principles">
              <span>데이터 기반 분석</span>
              <span>FlightScope · QED 정밀 장비</span>
              <span>세밀한 밸런스 조정</span>
            </div>
            <div className="measurement-methods" aria-label="장비 측정 방식">
              <article className="measurement-card">
                <div
                  className={
                    "method-logo equipment-brand equipment-brand-flightscope"
                  }
                >
                  <span className="flightscope-logo-window">
                    <img
                      src={sitePath("assets/flightscope-official-brand.png")}
                      alt="FlightScope"
                      width={600}
                      height={200}
                    />
                  </span>
                </div>
                <h3>도플러 레이더 기반</h3>
                <p>
                  도플러 레이더로 공의 움직임을 추적해 속도와 탄도 등 샷
                  데이터를 분석합니다.
                </p>
              </article>
              <article className="measurement-card">
                <div className="method-logo equipment-brand equipment-brand-qed">
                  <img
                    src={sitePath("assets/qed-brand-supplied.png")}
                    alt="QED"
                    width={447}
                    height={447}
                  />
                </div>
                <h3>초고속 카메라 기반</h3>
                <p>
                  두 대의 고속 카메라로 타격 순간을 촬영해 공과 클럽의 움직임을
                  분석합니다.
                </p>
              </article>
            </div>
          </div>
        </section>
        <div className="section menu-note" id="fitter">
          <div className="fitter-copy">
            <p className="eyebrow">FITTING CONSULTATION</p>
            <h2>클럽의 고민을 함께 살펴봅니다.</h2>
            <p>
              현재 사용하는 클럽과 스윙에서 느끼는 불편함을 말씀해 주세요.
              원하는 피팅 범위와 클럽 상태를 확인한 뒤 상담과 작업 방향을
              안내합니다.
            </p>
            <a href="tel:050713905980">피팅 상담 문의 0507-1390-5980 ↗</a>
          </div>
          <figure className="fitter-swing">
            <img
              src={sitePath("assets/fitting-swing-sequence.gif")}
              alt="실내 피팅 타석에서 골프 스윙을 연속 동작으로 보여주는 영상"
              width={358}
              height={358}
              loading="lazy"
            />
          </figure>
        </div>
        <section className="section" id="programs">
          <div className="section-top">
            <div>
              <p className="eyebrow">
                <svg
                  className="ui-icon "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m16 2-6 14M10 16c-3-2-7 0-7 3 0 2 5 3 8 1l2-2-3-2Z"></path>
                </svg>
                FITTING PROGRAMS
              </p>
              <h2>당신의 골프에 맞는 선택.</h2>
            </div>
            <p>지금의 고민에 맞는 피팅을 만나보세요.</p>
          </div>
          <div className="cards">
            <a className="card" href="#consult" data-program="드라이버 피팅">
              <div className="card-top">
                DISTANCE &amp; DIRECTION <span>↗</span>
              </div>
              <div className="program-photo">
                <img
                  src={sitePath("assets/driver-fitting-itobori.png")}
                  alt="이토보리 드라이버 헤드"
                  width={580}
                  height={664}
                  loading="lazy"
                  className="driver-product-photo"
                />
              </div>
              <h3 className="icon-heading">
                <svg
                  className="ui-icon heading-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M5 21V3m0 1c5-4 9 4 14 0v9c-5 4-9-4-14 0"></path>
                </svg>
                드라이버 피팅
              </h3>
              <p>
                더 멀리, 더 정확하게.
                <br />
                드라이버·우드·유틸리티의 탄도와 스핀, 방향성의 균형을 찾습니다.
              </p>
              <span className="tag">비거리 · 방향성</span>
            </a>
            <a className="card" href="#consult" data-program="아이언 피팅">
              <div className="card-top">
                CONSISTENCY &amp; CONTROL <span>↗</span>
              </div>
              <div className="program-photo">
                <img
                  src={sitePath("assets/itobori-5.jpg")}
                  alt="이토보리 아이언 제품 구성"
                  width={966}
                  height={644}
                  loading="lazy"
                />
              </div>
              <h3 className="icon-heading">
                <svg
                  className="ui-icon heading-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <circle cx="12" cy="12" r="5"></circle>
                  <circle cx="12" cy="12" r="1"></circle>
                </svg>
                아이언 · 웨지 피팅
              </h3>
              <p>
                일관된 임팩트, 자신 있는 샷.
                <br />
                거리 간격과 라이각을 세밀하게 조정합니다.
              </p>
              <span className="tag">정확성 · 일관성</span>
            </a>
            <a className="card" href="#consult" data-program="풀백 피팅">
              <div className="card-top">
                YOUR COMPLETE GAME <span>↗</span>
              </div>
              <div className="program-photo">
                <img
                  src={sitePath("assets/fullbag-fitting.jpg")}
                  alt="드라이버부터 아이언까지 구성한 맞춤 골프 클럽 세트"
                  loading="lazy"
                  className="fullbag-product-photo"
                />
              </div>
              <h3 className="icon-heading">
                <svg
                  className="ui-icon heading-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <rect x="5" y="7" width={14} height={14} rx="3"></rect>
                  <path d="M9 7V3m4 4V2m4 5V4M5 13h14M9 17h6"></path>
                </svg>
                풀백 피팅
              </h3>
              <p>
                티샷부터 마지막 퍼트까지.
                <br />
                클럽 전체의 연결과 밸런스를 설계합니다.
              </p>
              <span className="tag">클럽 구성 · 전체 밸런스</span>
            </a>
          </div>
        </section>
        <section className="section care" id="care">
          <div className="section-top">
            <div>
              <p className="eyebrow">CLUB CARE / GRIP &amp; REPAIR</p>
              <h2>
                익숙한 클럽에도,
                <br />
                새로운 감각을.
              </h2>
            </div>
            <p>지금 사용하는 클럽의 불편함부터 이야기해 주세요.</p>
          </div>
          <div className="care-grid">
            <article>
              <div className="care-photo-crop">
                <img
                  src={sitePath("assets/grip-replacement.jpg")}
                  alt="샤프트에 장착된 회색 골프 그립 클로즈업"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="eyebrow">GRIP CHANGE</span>
                <h3>그립 교체</h3>
                <p>
                  미끄러짐, 마모, 손에 맞지 않는 두께가 고민이라면.
                  <br />
                  다양한 그립을 살펴보고 촉감과 두께를 비교해 보세요.
                </p>
                <a href="tel:050713905980">그립 교체 문의 ↗</a>
              </div>
            </article>
            <article>
              <div className="care-photo-crop">
                <img
                  src={sitePath("assets/club-check-pro-swing.png")}
                  alt={
                    "실내 피팅 타석에서 스윙하며 클럽 데이터를 점검하는 모습"
                  }
                  loading="lazy"
                  className="club-consultation-photo"
                  width={384}
                  height={512}
                />
              </div>
              <div>
                <span className="eyebrow">CLUB CHECK</span>
                <h3>클럽 점검 &amp; 수리 상담</h3>
                <p>
                  샤프트 교체나 클럽 세팅 변경이 필요하다면.
                  <br />
                  현재 클럽 상태를 확인한 뒤 가능한 작업을 안내합니다.
                </p>
                <a href="tel:050713905980">클럽 상태 상담 ↗</a>
              </div>
            </article>
          </div>
          <p className="care-note">
            작업 가능 여부, 비용, 부품 재고와 소요 시간은 클럽 상태 확인 및 상담
            후 안내합니다.
          </p>
        </section>
        <section className="process section" id="process">
          <div>
            <p className="eyebrow">
              <svg
                className="ui-icon "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M5 3v5m0 4v9M12 3v10m0 4v4M19 3v2m0 4v12"></path>
                <circle cx="5" cy="10" r="2"></circle>
                <circle cx="12" cy="15" r="2"></circle>
                <circle cx="19" cy="7" r="2"></circle>
              </svg>
              THE PROCESS
            </p>
            <h2>
              감각을 데이터로.
              <br />
              데이터를 <em>확신으로.</em>
            </h2>
            <p>
              충분히 듣고, 정밀하게 분석하고,
              <br />
              직접 경험하며 맞춰갑니다.
            </p>
          </div>
          <ol>
            <li>
              <div>
                <h3 className="icon-heading">
                  <svg
                    className="ui-icon heading-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M21 11a9 8 0 0 1-9 8H5l-3 3V11a9 8 0 0 1 19 0Z"></path>
                    <path d="M7 10h10M7 14h6"></path>
                  </svg>
                  상담 &amp; 클럽 체크
                </h3>
                <p>플레이 스타일과 고민, 현재 사용하는 클럽을 확인합니다.</p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="icon-heading">
                  <svg
                    className="ui-icon heading-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4 3v17h17M8 15l4-5 4 2 5-7"></path>
                  </svg>
                  스윙 데이터 분석
                </h3>
                <p>
                  FlightScope·QED 데이터를 바탕으로 볼스피드, 발사각, 스핀과 샷
                  패턴을 분석합니다.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="icon-heading">
                  <svg
                    className="ui-icon heading-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M5 3v5m0 4v9M12 3v10m0 4v4M19 3v2m0 4v12"></path>
                    <circle cx="5" cy="10" r="2"></circle>
                    <circle cx="12" cy="15" r="2"></circle>
                    <circle cx="19" cy="7" r="2"></circle>
                  </svg>
                  테스트 &amp; 맞춤 피팅
                </h3>
                <p>헤드와 샤프트 조합을 비교하며 적합한 세팅을 찾습니다.</p>
              </div>
            </li>
            <li>
              <div>
                <h3 className="icon-heading">
                  <svg
                    className="ui-icon heading-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="m8 12 3 3 5-6"></path>
                  </svg>
                  최종 세팅 &amp; 피드백
                </h3>
                <p>완성된 클럽을 점검하고 사용 방향을 안내합니다.</p>
              </div>
            </li>
          </ol>
        </section>
        <section className="section menu-note" id="fitting-price">
          <p className="eyebrow">TIME &amp; COST</p>
          <h2>소요 시간 · 비용 안내</h2>
          <div className="info-columns">
            <article>
              <h3>소요 시간</h3>
              <p>
                상담, 시타 범위와 작업 내용에 따라 달라집니다. 원하는 프로그램과
                방문 일정을 알려주시면 필요한 시간을 확인해 드립니다.
              </p>
            </article>
            <article>
              <h3>비용 안내</h3>
              <p>
                피팅 범위, 교체 부품 및 작업 내용에 따라 견적을 안내합니다.
                작업을 진행하기 전에 구성과 비용을 확인해 주세요.
              </p>
            </article>
          </div>
          <a href="tel:050713905980">시간과 비용 전화 문의 ↗</a>
        </section>
        <section
          className="studio section"
          id="studio"
          aria-labelledby="studio-title"
        >
          <div className="section-top">
            <div>
              <p className="eyebrow">
                <svg
                  className="ui-icon "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="m8 5 2-2h4l2 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
                INSIDE BR GOLF
              </p>
              <h2 id="studio-title">당신의 골프를 위한 공간.</h2>
            </div>
            <p>
              다양한 그립과 샤프트, 그리고 편안한 상담 공간.
              <br />
              BR GOLF의 매장을 둘러보세요.
            </p>
          </div>
          <div className="equipment-summary">
            <article>
              <p className="eyebrow">FLIGHTSCOPE</p>
              <h3>조합을 비교하고 검증하다</h3>
              <p>
                론치모니터 데이터를 비교하며 스윙에 맞는 헤드와 샤프트 조합을
                찾습니다.
              </p>
            </article>
            <article>
              <p className="eyebrow">QED</p>
              <h3>스윙을 숫자로 이해하다</h3>
              <p>
                볼스피드, 발사각, 스핀량 등 정량 데이터를 바탕으로 현재의 샷을
                살펴봅니다.
              </p>
            </article>
            <article>
              <p className="eyebrow">ACCESS</p>
              <h3>사직야구장 맞은편</h3>
              <p>
                자이언츠파크 2층 210호. 지하 2~3층 무료 주차로 편하게
                방문하세요.
              </p>
            </article>
          </div>
          <div className="studio-grid">
            <figure className="studio-item">
              <button
                className="studio-photo"
                type="button"
                data-photo={sitePath("assets/studio-fitting-bay.jpg")}
                aria-label={
                  "샤프트 진열대와 스크린 시타 장비를 갖춘 피팅 공간 크게 보기"
                }
              >
                <img
                  src={sitePath("assets/studio-fitting-bay.jpg")}
                  width={4000}
                  height={3000}
                  loading="lazy"
                  decoding="async"
                  alt="샤프트 진열대와 스크린 시타 장비를 갖춘 피팅 공간"
                />
                <span className="photo-expand" aria-hidden="true">
                  <svg
                    className="ui-icon "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m8 5 2-2h4l2 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </span>
              </button>
              <figcaption>
                <span>LOUNGE</span>
                <h3>편안하게 시작하는 피팅 상담</h3>
              </figcaption>
            </figure>
            <figure className="studio-item">
              <button
                className="studio-photo"
                type="button"
                data-photo={sitePath("assets/studio-grips.jpg")}
                aria-label="다양한 색상과 형태의 골프 그립 진열 크게 보기"
              >
                <img
                  src={sitePath("assets/studio-grips.jpg")}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                  alt="다양한 색상과 형태의 골프 그립 진열"
                />
                <span className="photo-expand" aria-hidden="true">
                  <svg
                    className="ui-icon "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m8 5 2-2h4l2 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </span>
              </button>
              <figcaption>
                <span>GRIP COLLECTION</span>
                <h3>손끝의 감각까지, 다양한 그립</h3>
              </figcaption>
            </figure>
            <figure className="studio-item">
              <button
                className="studio-photo"
                type="button"
                data-photo={sitePath("assets/studio-shafts.jpg")}
                aria-label={
                  "매장 벽면을 따라 정돈된 골프 샤프트와 용품 크게 보기"
                }
              >
                <img
                  src={sitePath("assets/studio-shafts.jpg")}
                  width={1400}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                  alt="매장 벽면을 따라 정돈된 골프 샤프트와 용품"
                />
                <span className="photo-expand" aria-hidden="true">
                  <svg
                    className="ui-icon "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m8 5 2-2h4l2 2h4a2 2 0 0 1 2 2v12H2V7a2 2 0 0 1 2-2Z"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </span>
              </button>
              <figcaption>
                <span>SHAFT COLLECTION</span>
                <h3>스윙에 맞는 조합을 찾아서</h3>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="section product-guide" id="products">
          <p className="eyebrow">PRODUCT GUIDE</p>
          <h2>내 클럽을 이루는 세 가지 선택.</h2>
          <p>취급 제품과 재고, 주문 가능한 브랜드는 상담 시 확인해 주세요.</p>
          <div className="product-guide-grid">
            <article id="product-clubs">
              <img
                src={sitePath("assets/product-club-iron.jpg")}
                alt="실버 컬러 단조 아이언 헤드"
                loading="lazy"
                width={1200}
                height={1200}
              />
              <h3>클럽</h3>
              <p>
                헤드 형태와 구성, 원하는 샷을 함께 살펴봅니다. 다른 클럽 제품과
                피팅 체크 포인트는 이토보리 소개 글에서도 확인할 수 있습니다.
              </p>
              <a
                href="https://blog.naver.com/yhjo0720/224132949745"
                target="_blank"
                rel="noopener noreferrer"
              >
                이토보리 제품 소개 ↗
              </a>
            </article>
            <article id="product-shafts">
              <img
                src={sitePath("assets/product-shaft-ventus.jpg")}
                alt="잔디 위에 놓인 후지쿠라 벤투스 샤프트와 드라이버 헤드"
                loading="lazy"
              />
              <h3>샤프트</h3>
              <p>
                스윙 템포와 무게감, 기존 클럽의 사용감을 바탕으로 상담합니다.
                정확한 모델과 사양은 재고 확인 후 안내합니다.
              </p>
              <a href="tel:050713905980">샤프트 문의 ↗</a>
            </article>
            <article id="product-grips">
              <img
                src={sitePath("assets/grip-collection.jpg")}
                alt="블루·레드·카키·크림·네이비·오렌지 컬러의 골프 그립"
                loading="lazy"
                width={966}
                height={644}
              />
              <h3>그립</h3>
              <p>
                손에 맞는 두께와 질감, 선호하는 색상을 비교해 보세요. 그립 교체
                가능 여부와 비용은 전화로 확인할 수 있습니다.
              </p>
              <a href="#care">그립 교체 안내 ↗</a>
            </article>
          </div>
        </section>
        <section className="section menu-note" id="cases">
          <p className="eyebrow">FITTING STORIES</p>
          <h2>피팅 사례 · 블로그</h2>
          <p>
            매장의 피팅 이야기와 클럽·샤프트·그립 소개를 네이버 블로그에서
            확인하세요.
          </p>
        </section>
        <section className="section" id="journal">
          <div className="blog-list-heading">
            <p className="eyebrow">BR GOLF JOURNAL</p>
            <a
              href="https://blog.naver.com/yhjo0720"
              target="_blank"
              rel="noopener noreferrer"
            >
              블로그 전체 글 보기 ↗
            </a>
          </div>
          <BlogPosts />
        </section>
        <div className="section store-location" id="visit">
          <section className="visit-info" aria-labelledby="visit-title">
            <p className="eyebrow">
              <svg
                className="ui-icon "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              VISIT BR GOLF
            </p>
            <h2 id="visit-title">부산 동래 바른골프피팅센터 오시는 길</h2>
            <div className="visit-grid">
              <div className="visit-details">
                <dl>
                  <dt>
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    주소
                  </dt>
                  <dd>
                    부산 동래구 사직북로 4, 자이언츠파크 2층 210호 (사직야구장
                    맞은편)
                  </dd>
                  <dt>
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d={
                          "M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 2-2 3-4 2C9 19 5 15 3 7c-1-2 0-4 2-4Z"
                        }
                      ></path>
                    </svg>
                    문의 전화
                  </dt>
                  <dd>
                    <a className="visit-phone" href="tel:050713905980">
                      0507-1390-5980 ↗
                    </a>
                  </dd>
                  <dt>
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <rect x="3" y="3" width={18} height={18} rx="4"></rect>
                      <path d="M9 18V6h4a4 4 0 0 1 0 8H9"></path>
                    </svg>
                    주차 안내
                  </dt>
                  <dd>지하 2층 · 지하 3층 무료 주차</dd>
                  <dt>영업시간</dt>
                  <dd>
                    평일 11:00 ~ 20:00
                    <br />
                    토·일요일 11:00 ~ 18:00
                    <br />
                    100% 예약제 · 상시 상담
                  </dd>
                </dl>
                <p>
                  건물 2층 210호로 방문해 주세요.
                  <br />
                  피팅 상담과 방문 문의는 전화로 연락해 주세요.
                </p>
                <div className="visit-actions">
                  <a className="button" href="tel:050713905980">
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d={
                          "M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 2-2 3-4 2C9 19 5 15 3 7c-1-2 0-4 2-4Z"
                        }
                      ></path>
                    </svg>
                    전화 문의 <span>↗</span>
                  </a>
                  <a
                    className="direction-button kakao-direction"
                    href={
                      "https://map.kakao.com/link/to/%EB%B0%94%EB%A5%B8%EA%B3%A8%ED%94%84%ED%94%BC%ED%8C%85%EC%84%BC%ED%84%B0%20%EB%8F%99%EB%9E%98%EC%A0%90,35.1962645950225,129.06135929353"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="5" cy="5" r="2"></circle>
                      <circle cx="19" cy="19" r="2"></circle>
                      <path d="M7 5h9a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h9"></path>
                    </svg>
                    카카오맵 길찾기 ↗
                  </a>
                  <a
                    className="direction-button naver-direction"
                    href={
                      "https://m.map.naver.com/route.nhn?menu=route&ename=%EB%B0%94%EB%A5%B8%EA%B3%A8%ED%94%84%ED%94%BC%ED%8C%85%EC%84%BC%ED%84%B0%20%EB%8F%99%EB%9E%98%EC%A0%90&ex=129.06135929353&ey=35.1962645950225&pathType=0"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <circle cx="5" cy="5" r="2"></circle>
                      <circle cx="19" cy="19" r="2"></circle>
                      <path d="M7 5h9a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h9"></path>
                    </svg>
                    네이버지도 길찾기 ↗
                  </a>
                </div>
              </div>
              <div className="visit-map">
                <div className="map-store-label">
                  <span className="map-pin">
                    <svg
                      className="ui-icon "
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </span>
                  <div>
                    <strong>부산 동래 바른골프피팅센터</strong>
                    <small>삼정자이언츠파크 2층 210호</small>
                  </div>
                </div>
                <a
                  className="static-store-map"
                  href="https://map.naver.com/p/entry/place/1759569518"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="부산 동래 바른골프피팅센터 네이버 지도 열기"
                >
                  <img
                    src={sitePath("assets/store-location-map.png")}
                    width={764}
                    height={557}
                    loading="lazy"
                    decoding="async"
                    alt={
                      "사직야구장 맞은편 자이언츠파크의 부산 동래 바른골프피팅센터 위치 약도"
                    }
                  />
                  <span>이미지를 누르면 네이버 지도가 열립니다 ↗</span>
                </a>
                <p>
                  삼정자이언츠파크 · 2층 210호
                  <br />
                  약도 이미지를 눌러 네이버 지도에서 위치와 길찾기를 확인하세요.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="section fitting-faq" id="faq">
          <div>
            <p className="eyebrow">BEFORE YOUR VISIT</p>
            <h2>피팅이 처음이라면.</h2>
            <p>방문 전에 궁금한 내용을 확인해 보세요.</p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>초보자도 피팅 상담을 받을 수 있나요?</summary>
              <p>
                구력에 관계없이 현재 클럽이 불편한 점이나 클럽 선택 고민을
                상담할 수 있습니다. 평소 연습할 때 느끼는 점을 편하게 말씀해
                주세요.
              </p>
            </details>
            <details>
              <summary>방문할 때 무엇을 가져가면 좋나요?</summary>
              <p>
                현재 사용하는 클럽과 평소 착용하는 골프 장갑·골프화를 준비하면
                상담에 도움이 됩니다. 전체 세트를 가져와야 하는지는 전화로 먼저
                확인해 주세요.
              </p>
            </details>
            <details>
              <summary>피팅 비용과 시간은 얼마나 걸리나요?</summary>
              <p>
                희망 프로그램, 점검 범위 및 작업 내용에 따라 달라집니다. 방문 전
                전화로 상담해 주세요. 확인되지 않은 일괄 가격이나 소요 시간을
                안내하지 않습니다.
              </p>
            </details>
            <details>
              <summary>그립 교체와 수리는 바로 가능한가요?</summary>
              <p>
                부품 재고와 클럽 상태, 당일 작업 일정에 따라 달라집니다. 필요한
                작업과 클럽 모델을 알려주시면 가능 여부를 확인해 드립니다.
              </p>
            </details>
            <details>
              <summary>주차와 방문 예약은 어떻게 하나요?</summary>
              <p>
                삼정자이언츠파크 지하 2층·3층 무료 주차를 이용할 수 있습니다.
                매장은 2층 210호이며, 방문 일정은 0507-1390-5980으로 문의해
                주세요.
              </p>
            </details>
          </div>
        </section>
        <section className="section menu-note" id="booking">
          <p className="eyebrow">BOOKING &amp; CONSULTATION</p>
          <h2>시타 및 피팅 예약 안내</h2>
          <p>
            연락처, 희망 일시와 피팅 품목을 작성하고 예약 신청 버튼을 눌러
            주세요. 신청 내용은 매장 이메일로 전달되며, 매장 확인 후 방문 일정이
            확정됩니다.
          </p>
          <div className="booking-links">
            <a
              className="button naver-booking"
              href="https://pcmap.place.naver.com/place/1759569518/booking"
              target="_blank"
              rel="noopener noreferrer"
            >
              네이버로 예약하기 ↗
            </a>
            <a className="button" href="#consult">
              예약 신청하기 ↗
            </a>
            <a
              className="button kakao-chat"
              href="https://pf.kakao.com/_BxaZVn/chat"
              target="_blank"
              rel="noopener noreferrer"
            >
              카카오톡 1:1 상담 ↗
            </a>
          </div>
          <p className="channel-note">
            평일 11:00–20:00 / 토·일 11:00–18:00 · 100% 예약제
            <br />
            전화 0507-1390-5980으로도 문의하실 수 있습니다.
          </p>
        </section>
        <section className="section news-section" id="news">
          <p className="eyebrow">NEWS</p>
          <h2>소식</h2>
          <details>
            <summary>
              홈페이지 메뉴 개편 안내 <small>2026.10.30</small>
            </summary>
            <p>
              센터 소개, 피팅 안내, 제품 안내, 피팅 사례, 예약·상담, 소식의 여섯
              메뉴에서 필요한 정보를 찾아볼 수 있습니다.
            </p>
          </details>
          <p>진행 중인 이벤트는 등록되어 있지 않습니다.</p>
          <a href="#journal">센터 이야기 보기 ↗</a>
        </section>
        <section className="contact section" id="contact">
          <div>
            <p className="eyebrow">CONTACT &amp; RESERVATION</p>
            <h2>
              다음 라운드의 변화,
              <br />
              정밀한 분석에서 시작하세요.
            </h2>
            <p>시타부터 맞춤 클럽 제작까지, 당신의 고민을 함께 살펴봅니다.</p>
          </div>
          <div className="contact-actions">
            <a className="button" href="#consult">
              시타 및 피팅 예약 신청하기 ↗
            </a>
            <a className="booking-phone" href="tel:050713905980">
              0507-1390-5980 · 전화 상담 ↗
            </a>
            <p>평일 11:00–20:00 / 토·일 11:00–18:00</p>
          </div>
        </section>
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
      <PhotoDialog />
      <div className="mobile-contact">
        <a href="tel:050713905980">
          <svg
            className="ui-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d={
                "M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4c0 2-2 3-4 2C9 19 5 15 3 7c-1-2 0-4 2-4Z"
              }
            ></path>
          </svg>{" "}
          전화 상담
        </a>
        <a
          href="https://pf.kakao.com/_BxaZVn/chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          카카오톡 상담 ↗
        </a>
      </div>
      <a
        className="floating-contact kakao"
        id="floating-contact"
        href="https://pf.kakao.com/_BxaZVn/chat"
        target="_blank"
        rel="noopener noreferrer"
      >
        카카오톡 1:1 상담 ↗
      </a>
    </>
  );
}
