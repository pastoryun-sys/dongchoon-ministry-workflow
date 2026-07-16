const domains = {
  sermon: {
    title: "설교 준비",
    description: "본문의 뜻을 바르게 이해하고 회중의 삶에 닿는 설교로 준비합니다.",
    steps: [
      ["본문 연구·성격 규정", "문맥, 구조, 원어, 신학과 본문 장르를 규정합니다."],
      ["12개 방법론 점수표·선택", "본문 성격에 따른 Top 3를 보고 사용자가 방법론을 선택합니다."],
      ["설계도 확정·승인", "선택한 방법론으로 설계도와 검증 기준을 만들고 승인받습니다."],
      ["자료 참조", "주석, 신학 자료, 예화와 성구를 확인하고 중복을 피합니다."],
      ["설교문 집필", "승인된 설계도에 따라 예배 요소를 포함한 원고를 작성합니다."],
      ["검증·보완", "장·절, 신학, 구조, 분량, 원어와 적용을 자동 점검합니다."],
      ["산출물 출력", "검증된 설교문을 로컬 파이프라인으로 문서와 슬라이드로 만듭니다."]
    ],
    previews: [
      ["1단계 연구 예시", "본문: 마태복음 5:13-16", ["장르: 예수님의 산상수훈", "핵심 이미지: 소금과 빛", "신학적 초점: 착한 행실을 통해 성부께 영광"]],
      ["2단계 선택 게이트", "본문 성격에 따라 12개 방법론의 적합도를 비교합니다.", ["Top 3와 점수 근거 제시", "STP와 ATP는 별개로 평가", "명시적 선택 전 다음 단계 금지"]],
      ["3단계 승인 게이트", "선택된 방법론의 골격으로 설계도와 검증 기준을 확정합니다.", ["한 문장 메시지", "본문별 구조", "목표 글자 수와 검증 항목"]],
      ["4단계 자료 목록", "주석과 자료는 설계도에 필요한 것만 선별합니다.", ["원어와 역사 배경", "신선한 예화", "교차 성구와 인용 출처"]],
      ["5단계 집필", "승인된 설계도 밖으로 벗어나지 않고 설교문을 완성합니다.", ["신선한 도입", "본문 중심 전개", "고정 예배 요소 포함"]],
      ["6단계 검증", "기준을 통과할 때까지 자동으로 점검하고 보완합니다.", ["장·절과 인용", "개혁주의 복음주의 방향", "분량과 구조"]],
      ["7단계 산출", "새 변환 로직을 만들지 않고 기존 로컬 파이프라인을 사용합니다.", ["완성 설교문", "MS Word 문서", "설교 슬라이드"]]
    ],
    week: [["마태복음 5:13-16 본문 분석", "오늘"], ["주일 설교 설계도 검토", "화"], ["원고 장·절 및 적용 점검", "금"]]
  },
  operations: {
    title: "교회 운영",
    description: "흩어진 일정과 돌봄 정보를 모아 놓치는 사역이 없도록 돕습니다.",
    steps: [
      ["일정·메일 정리", "예배, 회의, 요청 메일을 중요도 순으로 모읍니다."],
      ["교인 돌봄", "심방, 새가족, 기도 요청의 다음 행동을 확인합니다."],
      ["팀 협업", "담당자와 기한이 분명한 실행 항목으로 나눕니다."],
      ["주간 보고", "완료, 진행, 확인 필요 사항을 한눈에 정리합니다."]
    ],
    previews: [
      ["오늘의 운영 요약", "확인할 일정과 요청을 한 화면에 모읍니다.", ["오전: 교역자 회의", "오후: 심방 2건", "저녁: 수요예배 준비"]],
      ["돌봄 대상 확인", "연락과 방문이 필요한 성도를 우선순위로 정리합니다.", ["기도 요청 후속 연락", "새가족 첫 방문", "장기 결석자 안부 확인"]],
      ["팀 실행 목록", "누가 언제까지 무엇을 할지 분명하게 기록합니다.", ["예배팀: 순서 확정", "행정팀: 공지 발송", "돌봄팀: 방문 일정 확인"]],
      ["주간 보고 초안", "사역의 흐름과 목사님 확인 항목을 구분합니다.", ["완료한 일", "다음 주 계획", "확인이 필요한 결정"]]
    ],
    week: [["주요 예배 및 행사 일정 점검", "오늘"], ["교인 케어 대상자 연락 계획", "수"], ["주간 보고서 초안 검토", "금"]]
  },
  automation: {
    title: "AI 자동화",
    description: "반복해서 확인하던 업무를 정해진 시간에 안전하게 요약합니다.",
    steps: [
      ["업무 선택", "반복 빈도가 높고 기준이 분명한 일을 고릅니다."],
      ["규칙 설정", "실행 시간, 확인 범위, 예외와 승인 조건을 정합니다."],
      ["시험 실행", "실제 변경 없이 결과 초안을 먼저 확인합니다."],
      ["정기 점검", "누락과 과잉 알림을 살피고 규칙을 조정합니다."]
    ],
    previews: [
      ["자동화 후보", "사람의 판단보다 반복 확인에 시간이 드는 일부터 고릅니다.", ["평일 아침 브리핑", "장례 관련 알림 확인", "반복 업무 상태 점검"]],
      ["안전 규칙", "게시나 발송은 승인 전에는 실행하지 않도록 제한합니다.", ["읽기와 요약 우선", "민감 정보 최소화", "외부 발송 전 승인"]],
      ["시험 실행 결과", "자동화가 수행할 내용을 미리 보고 오류를 찾습니다.", ["수집 범위 확인", "중복 알림 제거", "확인 불가 항목 표시"]],
      ["운영 점검", "정확도와 시간 절감 효과를 정기적으로 검토합니다.", ["실패 기록", "인증 상태", "규칙 최신성"]]
    ],
    week: [["아침 브리핑 결과 확인", "오늘"], ["장례 알림 확인 및 관련 팀 안내", "수"], ["자동화 규칙 및 실패 기록 점검", "금"]]
  }
};

let activeDomain = "sermon";
let activeStep = 0;

const title = document.querySelector("#domain-title");
const description = document.querySelector("#domain-description");
const steps = document.querySelector("#steps");
const preview = document.querySelector("#preview-content");
const progress = document.querySelector("#progress-bar");
const progressLabel = document.querySelector("#progress-label");
const weekList = document.querySelector("#week-list");

function renderDomain() {
  const domain = domains[activeDomain];
  title.textContent = domain.title;
  description.textContent = domain.description;
  steps.innerHTML = domain.steps.map(([name, copy], index) => `
    <li class="step-item ${index === activeStep ? "active" : ""}" data-index="${index + 1}" data-step="${index}" tabindex="0">
      <strong>${name}</strong><small>${copy}</small>
    </li>`).join("");
  const [heading, copy, points] = domain.previews[activeStep];
  preview.innerHTML = `<h3>${heading}</h3><p>${copy}</p><ul>${points.map(point => `<li>${point}</li>`).join("")}</ul>`;
  const amount = ((activeStep + 1) / domain.steps.length) * 100;
  progress.style.width = `${amount}%`;
  progressLabel.textContent = `${activeStep + 1}/${domain.steps.length} 단계`;
  document.querySelectorAll("[data-domain]").forEach(button => button.classList.toggle("active", button.dataset.domain === activeDomain));
  renderWeek();
  bindSteps();
}

function renderWeek() {
  const order = ["sermon", "operations", "automation"];
  weekList.innerHTML = order.map(key => {
    const item = domains[key];
    const dimmed = key !== activeDomain ? " style=\"opacity:.55\"" : "";
    return `<article class="week-column"${dimmed}><h3>${item.title}</h3>${item.week.map(([task, day]) => `<div class="week-item"><span>${task}</span><time>${day}</time></div>`).join("")}</article>`;
  }).join("");
  document.querySelector("#week-domain-label").textContent = `${domains[activeDomain].title} 선택됨`;
}

async function renderConnections() {
  const list = document.querySelector("#connection-list");
  const fallback = {
    checkedAt: "2026-07-17T06:00:30+09:00",
    connections: [
      { name: "Gmail", account: "공개용 예시 계정", status: "connected", label: "연결됨", mode: "읽기 전용", capability: "메일 검색·내용 확인" },
      { name: "Google Calendar", account: "공개용 예시 계정", status: "connected", label: "연결됨", mode: "읽기 전용", capability: "일정 검색·상세 확인" },
      { name: "Flow", account: "공개용 예시 계정", status: "connected", label: "연결됨", mode: "읽기 전용", capability: "프로필·업무·프로젝트·원문 조회" }
    ]
  };
  let data = fallback;
  if (location.protocol !== "file:") {
    try {
      const response = await fetch("connection-status.json", { cache: "no-store" });
      if (!response.ok) throw new Error("connection status unavailable");
      data = await response.json();
    } catch {}
  }
  document.querySelector("#connection-checked-at").textContent = `확인: ${new Intl.DateTimeFormat("ko-KR", { dateStyle: "medium", timeStyle: "short" }).format(new Date(data.checkedAt))}`;
  list.innerHTML = data.connections.map(item => `
    <article class="connection-item ${item.status}">
      <span class="connection-mark" aria-hidden="true">${item.name === "Google Calendar" ? "31" : item.name[0]}</span>
      <span class="connection-copy"><strong>${item.name}</strong><small>${item.account} · ${item.mode}</small><em>${item.capability || ""}</em></span>
      <span class="connection-state">${item.label}</span>
    </article>`).join("");
}

async function renderLiveBriefing() {
  const fallback = {
    flow: { capabilities: ["프로필 조회", "내 업무 조회", "프로젝트 조회", "게시물 원문 조회"], items: [{ title: "개인정보 보호를 위해 대상 비공개", detail: "당일 긴급 돌봄 일정 예시", source: "Flow 장례 프로젝트", url: "https://flow.team", priority: "P0" }], emptySources: ["전체공지", "예배현황·피드백", "주보", "일일보고서"] },
    calendar: { items: [{ time: "07:30–08:30", title: "외부 미팅 일정 예시", url: "#" }] },
    gmail: { query: "최근 3일 · 읽지 않음 · 프로모션/소셜 제외", items: [{ time: "05:06", from: "Gmail", subject: "보안 알림 예시", summary: "계정 접근 내역 확인", verdict: "공개용 예시 데이터", url: "#" }, { time: "04:29", from: "Gmail", subject: "일정 요청 예시", summary: "확인이 필요한 일정 요청", verdict: "공개용 예시 데이터", url: "#" }] },
    schedule: [{ time: "06:10–06:25", type: "제안", title: "보안 활동 확인", source: "Gmail 알림" }, { time: "06:25–07:00", type: "제안", title: "긴급 돌봄 상황 확인", source: "Flow P0" }, { time: "07:30–08:30", type: "확정", title: "외부 미팅 일정 예시", source: "Google Calendar" }, { time: "08:30–09:00", type: "제안", title: "미팅 후 기록 및 후속조치 정리", source: "확정 일정 후속" }, { time: "09:00 이후", type: "미정", title: "확인된 일정 없음", source: "오늘 일정 조회 결과" }],
    todos: [{ priority: "P0", title: "긴급 돌봄 대응 확인", detail: "Flow 원문을 기준으로 연락·담당 확인", source: "Flow" }, { priority: "P1", title: "계정 접근 내역 확인", detail: "연결된 계정의 보안 활동 최종 확인", source: "Gmail" }, { priority: "P1", title: "07:30 일정 준비", detail: "외부 미팅 전 필요한 자료 확인", source: "Google Calendar" }, { priority: "P1", title: "미팅 후 실행 항목 기록", detail: "결정사항·담당·기한을 간단히 정리", source: "Calendar 후속" }, { priority: "P2", title: "Flow 오후 재점검", detail: "예배현황·주보·전체공지의 당일 변경 여부 확인", source: "Flow" }]
  };
  let data = fallback;
  if (location.protocol !== "file:") {
    try {
      const response = await fetch("live-data.json", { cache: "no-store" });
      if (response.ok) data = await response.json();
    } catch {}
  }
  const funeral = data.flow.items[0];
  document.querySelector("#priority-alert").innerHTML = `<div><strong>${funeral.priority} · 오늘 발인 예정 장례</strong><small>${funeral.title} · ${funeral.detail}</small></div><a href="${funeral.url}" target="_blank" rel="noreferrer">Flow 원문 열기 →</a>`;
  document.querySelector("#briefing-columns").innerHTML = `
    <article class="briefing-source"><h3>Flow</h3><p class="source-note">개인정보를 제거한 공개 예시</p><div class="data-row"><span class="data-label">장례</span><a href="${funeral.url}" target="_blank" rel="noreferrer"><strong>${funeral.detail}</strong><small>${funeral.source}</small></a></div><ul class="capability-list">${data.flow.capabilities.map(item => `<li>${item}</li>`).join("")}</ul><p class="source-note">오늘 확인 항목 없음: ${data.flow.emptySources.join(", ")}</p></article>
    <article class="briefing-source"><h3>Google Calendar</h3><p class="source-note">오늘 00:00–23:59 KST</p>${data.calendar.items.map(item => `<div class="data-row"><time>${item.time}</time><a href="${item.url}" target="_blank" rel="noreferrer"><strong>${item.title}</strong><small>오늘 일정</small></a></div>`).join("")}</article>
    <article class="briefing-source"><h3>Gmail</h3><p class="source-note">${data.gmail.query}</p>${data.gmail.items.map(item => `<div class="data-row"><time>${item.time}</time><a href="${item.url}" target="_blank" rel="noreferrer"><strong>${item.subject}</strong><small>${item.from} · ${item.summary}</small><small>${item.verdict || ""}</small></a></div>`).join("")}</article>`;
  document.querySelector("#schedule-table").innerHTML = data.schedule.map(item => `<div class="schedule-row"><time>${item.time}</time><span class="schedule-type" data-type="${item.type}">${item.type}</span><span class="schedule-copy"><strong>${item.title}</strong><small>${item.source}</small></span></div>`).join("");
  document.querySelector("#todo-list").innerHTML = [...data.todos].sort((a, b) => Number(Boolean(a.completed)) - Number(Boolean(b.completed)) || ({ P0: 0, P1: 1, P2: 2 }[a.priority] - { P0: 0, P1: 1, P2: 2 }[b.priority])).map(item => `<li class="todo-row ${item.completed ? "completed" : ""}" data-priority="${item.priority}"><span class="todo-priority">${item.completed ? "완료" : item.priority}</span><span class="todo-copy"><strong>${item.title}</strong><small>${item.detail} · ${item.source}</small></span></li>`).join("");
}

async function renderArchive() {
  let data = { version: 1, items: [] };
  if (location.protocol !== "file:") {
    try {
      const response = await fetch("todo-archive.json", { cache: "no-store" });
      if (response.ok) data = await response.json();
    } catch {}
  }
  const items = [...data.items].sort((a, b) => (b.archivedAt || "").localeCompare(a.archivedAt || ""));
  const list = document.querySelector("#archive-list");
  const count = document.querySelector("#archive-count");
  const search = document.querySelector("#archive-search");
  const from = document.querySelector("#archive-from");
  const to = document.querySelector("#archive-to");
  const draw = () => {
    const needle = search.value.trim().toLocaleLowerCase("ko-KR");
    const start = from.value;
    const end = to.value;
    const invalidRange = start && end && start > end;
    const filtered = invalidRange ? [] : items.filter(item => {
      const archivedDate = (item.archivedAt || "").slice(0, 10);
      const matchesText = !needle || [item.title, item.detail, item.source, item.completedAt, item.archivedAt].join(" ").toLocaleLowerCase("ko-KR").includes(needle);
      const matchesStart = !start || (archivedDate && archivedDate >= start);
      const matchesEnd = !end || (archivedDate && archivedDate <= end);
      return matchesText && matchesStart && matchesEnd;
    });
    const filterActive = needle || start || end;
    count.textContent = filterActive ? `${filtered.length}/${items.length}건` : `${items.length}건`;
    list.replaceChildren();
    if (!filtered.length) {
      const empty = document.createElement("p");
      empty.className = "archive-empty";
      empty.textContent = invalidRange ? "시작일은 종료일보다 빠르게 선택해 주세요." : filterActive ? "검색 결과가 없습니다." : "보관된 완료 항목이 없습니다.";
      list.append(empty);
      return;
    }
    filtered.forEach(item => {
      const row = document.createElement("article");
      row.className = "archive-row";
      const status = document.createElement("span");
      status.className = "archive-status";
      status.textContent = "보관";
      const copy = document.createElement("div");
      const title = document.createElement("strong");
      title.textContent = item.title;
      const meta = document.createElement("small");
      meta.textContent = `${item.completedAt || "완료일 확인 불가"} 완료 · ${item.archivedAt || "보관일 확인 불가"} 보관 · ${item.source || "출처 확인 불가"}`;
      copy.append(title, meta);
      row.append(status, copy);
      list.append(row);
    });
  };
  [search, from, to].forEach(input => input.addEventListener("input", draw));
  draw();
}

function bindSteps() {
  document.querySelectorAll(".step-item").forEach(item => {
    const select = () => { activeStep = Number(item.dataset.step); renderDomain(); };
    item.addEventListener("click", select);
    item.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") select(); });
  });
}

document.querySelectorAll("[data-domain]").forEach(button => button.addEventListener("click", () => {
  activeDomain = button.dataset.domain;
  activeStep = 0;
  renderDomain();
  document.querySelector("#workflow").scrollIntoView({ behavior: "smooth", block: "start" });
}));

document.querySelector("#next-step").addEventListener("click", () => {
  activeStep = (activeStep + 1) % domains[activeDomain].steps.length;
  renderDomain();
});

document.querySelector("#reset-flow").addEventListener("click", () => {
  activeStep = 0;
  renderDomain();
});

renderDomain();
renderConnections();
renderLiveBriefing();
renderArchive();
