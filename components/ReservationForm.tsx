"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { availableTimes, bookingHours, seoulDate } from "@/lib/booking";
import { siteBasePath, sitePath } from "@/lib/site-path";
const programItems: Record<string, string> = {
  "드라이버 피팅": "스윙분석",
  "아이언 피팅": "스윙분석",
  "풀백 피팅": "클럽점검",
};

export function ReservationForm() {
  const form = useRef<HTMLFormElement>(null);
  const summary = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [now, setNow] = useState<Date>();
  const [status, setStatus] = useState("");
  const times = now ? availableTimes(date, now) : [];

  useEffect(() => {
    setNow(new Date());
    function selectProgram(event: MouseEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-program]")
          : null;
      if (!target || !form.current) return;
      const item = programItems[target.dataset.program ?? ""];
      for (const input of form.current.querySelectorAll<HTMLInputElement>(
        'input[name="items"]',
      )) {
        input.checked = input.value === item;
      }
    }
    document.addEventListener("click", selectProgram);
    return () => document.removeEventListener("click", selectProgram);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const current = new Date();
    if (
      !availableTimes(String(data.get("date")), current).includes(
        String(data.get("time")),
      )
    ) {
      event.preventDefault();
      setNow(current);
      setTime("");
      setStatus("영업시간 내의 현재 이후 방문 일시를 선택해 주세요.");
      return;
    }
    if (summary.current) {
      summary.current.value = [
        "[바른골프피팅 동래점] 새로운 시타/피팅 예약이 접수되었습니다.",
        "- 연락처: " + data.get("phone"),
        "- 희망일시: " +
          data.get("date") +
          " " +
          data.get("time") +
          " (한국 시간)",
        "- 희망품목: " + (data.getAll("items").join(", ") || "상담 후 결정"),
        "- 현재 사용 클럽: " +
          (String(data.get("specs") ?? "").trim() || "미입력"),
        "- 주요 고민: " + (data.getAll("concerns").join(", ") || "미입력"),
        "- 사전 전달사항: " +
          (String(data.get("message") ?? "").trim() || "없음"),
      ].join("\n");
    }
    setStatus(
      "메일 접수 서비스로 이동합니다. 다음 화면의 보안 확인을 완료해 주세요.",
    );
  }

  return (
    <form
      ref={form}
      onSubmit={submit}
      id="consult"
      action="https://formsubmit.co/yhjo0720@naver.com"
      method="POST"
      acceptCharset="UTF-8"
    >
      <input
        type="hidden"
        name="_subject"
        defaultValue={
          "[바른골프피팅 동래점] 새로운 시타/피팅 예약이 접수되었습니다."
        }
      />
      <input type="hidden" name="_template" defaultValue="table" />
      <input
        type="hidden"
        name="_next"
        defaultValue={`https://brgolf.github.io${siteBasePath}/reservation-sent.html`}
      />
      <input
        type="text"
        name="_honey"
        className="booking-honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="예약 내용"
        id="reservation-summary"
        ref={summary}
      />
      <div className="form-row contact-only">
        <div>
          <label htmlFor="phone">연락처 *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            pattern={"0[0-9\\- ]{8,14}"}
            placeholder="010-0000-0000"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="date">희망 방문일 *</label>
          <input
            id="date"
            name="date"
            type="date"
            required
            value={date}
            min={now && seoulDate(now)}
            onChange={(event) => {
              const selectedDate = event.currentTarget.value;
              const current = new Date();
              setDate(selectedDate);
              setNow(current);
              if (!availableTimes(selectedDate, current).includes(time))
                setTime("");
            }}
          />
        </div>
        <div>
          <label htmlFor="time">희망 시간 *</label>
          <select
            id="time"
            name="time"
            required
            aria-describedby="booking-hours"
            value={time}
            onChange={(event) => setTime(event.currentTarget.value)}
          >
            <option value="">
              {!date
                ? "날짜를 먼저 선택하세요"
                : times.length
                  ? "시간을 선택하세요"
                  : "예약 가능 시간이 없습니다"}
            </option>
            {times.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className="booking-hours" id="booking-hours">
        {bookingHours(date)}
      </p>
      <fieldset>
        <legend>피팅 희망 품목 · 중복 선택</legend>
        <div className="check-grid">
          <label>
            <input type="checkbox" name="items" value="스윙분석" />
            스윙분석
          </label>
          <label>
            <input type="checkbox" name="items" value="클럽점검" />
            클럽점검
          </label>
          <label>
            <input type="checkbox" name="items" value="샤프트구매" />
            샤프트구매
          </label>
          <label>
            <input type="checkbox" name="items" value="클럽수리" />
            클럽수리
          </label>
          <label>
            <input type="checkbox" name="items" value="그립교체" />
            그립교체
          </label>
          <label>
            <input type="checkbox" name="items" value="슬리브교체" />
            슬리브교체
          </label>
        </div>
      </fieldset>
      <details>
        <summary>클럽 스펙과 고민 남기기 (선택)</summary>
        <label htmlFor="specs">현재 사용 클럽 스펙</label>
        <textarea
          id="specs"
          name="specs"
          rows={2}
          maxLength={1000}
          placeholder="예: 스릭슨 ZX7, 모다스 105S"
        ></textarea>
        <fieldset>
          <legend>주요 고민 및 목적</legend>
          <div className="check-grid">
            <label>
              <input type="checkbox" name="concerns" value="비거리 부족" />
              비거리 부족
            </label>
            <label>
              <input type="checkbox" name="concerns" value="방향성" />
              방향성
            </label>
            <label>
              <input type="checkbox" name="concerns" value="탄도 조절" />
              탄도 조절
            </label>
            <label>
              <input type="checkbox" name="concerns" value="샤프트 교체" />
              샤프트 교체
            </label>
          </div>
        </fieldset>
        <label htmlFor="message">사전 전달사항</label>
        <textarea
          id="message"
          name="message"
          rows={2}
          maxLength={1000}
          placeholder="피터와 공유할 내용"
        ></textarea>
      </details>
      <p className="booking-notice" id="booking-notice">
        예약 신청은 매장 이메일로 전달됩니다. 다음 화면의 보안 확인을 완료해
        주세요. 방문 일정은 매장 확인 후 확정됩니다.
      </p>
      <label className="booking-consent">
        <input
          type="checkbox"
          name="개인정보 전송 동의"
          value="동의"
          required
        />
        <span>
          예약 상담을 위한 연락처·희망 일시 및 입력 내용의 FormSubmit 전송과
          매장 이메일 수신에 동의합니다.{" "}
          <a
            href={sitePath("privacy.html")}
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보 처리 안내
          </a>
        </span>
      </label>
      <button className="button" type="submit">
        시타 및 피팅 예약 신청하기 <span>↗</span>
      </button>
      <p id="status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
