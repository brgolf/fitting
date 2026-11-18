function closingHour(date: string) {
  const day = new Date(date + "T12:00:00+09:00").getUTCDay();
  return day === 0 || day === 6 ? 18 : 20;
}

export function seoulDate(now: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) =>
    parts.find((part) => part.type === type)?.value;
  return [part("year"), part("month"), part("day")].join("-");
}

export function availableTimes(date: string, now: Date) {
  const times: string[] = [];
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date < seoulDate(now)) return times;
  for (let hour = 11; hour < closingHour(date); hour += 1) {
    for (const minute of ["00", "30"]) {
      const time = hour + ":" + minute;
      if (new Date(date + "T" + time + ":00+09:00") > now) times.push(time);
    }
  }
  return times;
}

export function bookingHours(date: string) {
  if (!date)
    return "평일 11:00~20:00 / 토·일 11:00~18:00 · 날짜를 선택하면 영업시간 내 방문 시간을 표시합니다.";
  const closing = closingHour(date);
  const days = closing === 18 ? "토·일요일" : "평일";
  return (
    days +
    " 영업시간 11:00~" +
    closing +
    ":00 · 30분 단위 선택, 마감 30분 전까지 방문 시작 가능"
  );
}
