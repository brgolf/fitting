# 바른골프피팅센터 동래점

Next.js App Router와 TypeScript로 구성한 정적 GitHub Pages 홈페이지입니다. 예약 폼을 FormSubmit의 https://formsubmit.co/yhjo0720@naver.com 으로 POST합니다. CAPTCHA는 기본값으로 유지합니다.

## 로컬 개발

Node.js 24 환경에서 실행합니다.

```sh
npm ci
npm run dev
npm test
npm run build
```

개발 주소는 http://localhost:3000/fitting/ 입니다. 정적 빌드 결과는 `out/`에 생성됩니다. 배포 시 기존 `.html` 주소와 `/fitting` 경로를 사용합니다. 페이지와 컴포넌트는 `app/`과 `components/`, CSS와 이미지는 `public/`에 있습니다.

## 운영 활성화
1. 홈페이지에서 실제 예약이 아닌 설정 확인용이라고 명시한 테스트 신청을 한 번 제출합니다.
2. yhjo0720@naver.com 받은메일함 또는 스팸함에서 FormSubmit 인증 이메일을 열고 수신을 활성화합니다.
3. 활성화 후 테스트 신청을 다시 보내 예약 내용을 수신하는지 확인합니다. 최초 인증 전 고객 예약을 받지 마세요.
4. 인증 후 받은 무작위 엔드포인트를 사용하려면 form action을 해당 주소로 교체할 수 있습니다.

필수 항목: 연락처, 희망 방문 날짜와 시간, 전송 동의. 선택 항목: 품목, 스펙, 고민, 전달사항. 평일 11~20시 / 주말 11~18시, 한국 시간 기준 과거 시간 제외. 신청은 방문 확정이 아닙니다.

FormSubmit은 공식 문서에서 제출 내용을 30일 보관한다고 안내합니다. 메일 수신과 전송 동의 안내는 privacy.html에도 반영했습니다. 메일 수신 테스트와 배포 검증은 별도로 필요합니다.

## 예약 품목·네이버·약도 업데이트
예약 품목: 스윙분석, 클럽점검, 샤프트구매, 클럽수리, 그립교체, 슬리브교체. 영업시간은 평일 11~20시, 토·일 11~18시이며 날짜를 고른 후 30분 단위 시작 시간을 선택합니다. 당일 지난 시간은 제외하고 마감시각은 시작 시간에 포함하지 않습니다.
네이버 예약은 실제 플레이스(1759569518)의 예약 버튼에서 확인한 공개 예약 주소 https://pcmap.place.naver.com/place/1759569518/booking 로 연결합니다. 관리자용 partner.booking.naver.com 주소는 노출하지 않습니다.
전체 매장 지도는 제공된 public/assets/store-location-map.png를 항상 표시하고 선택하면 https://map.naver.com/p/entry/place/1759569518 으로 이동합니다. 상단 배경은 public/assets/storefront-hero.jpg로 교체했습니다.

## 매일 블로그 자동 갱신

`.github/workflows/daily-blog-sync.yml`에서 매일 오전 9시(한국 시간, UTC 00:00)에 `scripts/sync-blog.mjs`를 실행합니다. 현재 크기와 2열 목록을 유지하며 전체 공개 글을 갱신합니다. 동기화는 `blog-posts.json`과 `public/assets/`의 썸네일을 갱신합니다. Next.js가 빌드할 때 JSON을 읽어 블로그 목록을 만듭니다. 예약 및 수동 실행에서는 동기화 후 빌드하여 배포합니다. `main` 푸시에서는 저장된 목록으로 빌드하여 배포합니다. 컴퓨터나 Codex를 계속 실행할 필요가 없습니다.

### 최초 활성화
1. GitHub Desktop에서 `Push origin`을 눌러 설정 파일과 스크립트를 업로드합니다.
2. 저장소 Settings → Pages → Build and deployment → Source를 **GitHub Actions**로 선택합니다.
3. Actions → **Daily Naver blog sync and Pages deploy** → Run workflow로 최초 실행을 확인합니다.
4. `sync-and-build`와 `deploy` 작업이 모두 성공하면 설정이 활성화됩니다. 실패 시 Actions 로그를 확인합니다. 쓰기 제한이 있는 보호 브랜치는 추가 저장소 설정이 필요할 수 있습니다.

최초 설정 후에는 블로그에 글을 쓰면 다음 일일 실행 때 홈페이지에 추가됩니다. GitHub 예약 실행은 지연될 수 있으며, 공개 저장소에 활동이 장기간 없으면 GitHub 정책에 따라 예약 실행이 중지될 수 있으므로 Actions 상태를 확인해 주세요.

### 수동 썸네일 유지
`blog-thumbnail-overrides.json`에 글 번호와 이미지 경로를 지정합니다. 첫 라파엘 계약 글의 사용자 지정 이미지는 이 파일로 보존합니다. 썸네일을 바꿀 때 이 파일도 갱신하면 매일 갱신으로 덮어쓰지 않습니다.

### 장애 시 처리
블로그의 전체 글 수와 수집한 글 수가 일치하지 않거나 목록 조회에 실패하면 기존 블로그 JSON을 보존하고 작업을 실패로 종료합니다. 신규 글의 썸네일만 가져오지 못하면 기존 이미지 또는 대표 아이콘을 사용합니다. 비공개·삭제 글은 완전한 공개 목록이 확인된 경우 다음 실행에서 제거됩니다. 원문 제목과 외부 URL은 HTML로 실행되지 않도록 처리합니다.

네이버 공개 목록의 형식이 변경되면 수집 코드 수정이 필요할 수 있습니다. 별도 API 키·카카오 키·블로그 비밀번호는 사용하지 않습니다.

## fitting 저장소 배포
운영 저장소: https://github.com/brgolf/fitting
운영 홈페이지 주소: https://brgolf.github.io/fitting/
예약 완료 반환 주소를 새 홈페이지 경로로 변경했습니다. 메인 메뉴, 사진, GIF, 지도, 블로그 글 목록, 로고와 일일 갱신 workflow를 포함합니다.
새 저장소에서 Settings → Pages → Source를 GitHub Actions로 설정한 뒤 Actions의 Daily Naver blog sync and Pages deploy를 실행해 최초 배포를 확인하세요. 예약 메일의 수신 인증은 기존 이메일을 사용하며, 새 홈페이지에서 테스트 접수를 확인해 주세요.
