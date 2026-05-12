const coreValues = [
  {
    label: "고객감동 및",
    subLabel: "철저한 품질관리",
    icon: "quality",
  },
  {
    label: "무재해와 완벽시공 및",
    subLabel: "철저한 사후관리",
    icon: "inspection",
  },
  {
    label: "지속적인 기술개발 및",
    subLabel: "원가 절감 실행",
    icon: "cost",
  },
];

export function CoreValueGraphic() {
  return (
    <div className="grid w-full max-w-4xl gap-4 text-white sm:grid-cols-3">
      {coreValues.map((value) => (
        <div
          className="rounded-2xl border border-white/25 bg-white/10 p-5 text-center shadow-xl shadow-black/20 backdrop-blur"
          key={value.label}
        >
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300/25 via-emerald-400/20 to-cyan-400/25 text-amber-300">
            <CoreValueIcon type={value.icon} />
          </div>
          <p className="break-keep text-base font-bold leading-relaxed sm:text-lg">
            {value.label}
            <br />
            {value.subLabel}
          </p>
        </div>
      ))}
    </div>
  );
}

function CoreValueIcon({ type }: { type: string }) {
  if (type === "inspection") {
    return (
      <svg
        className="size-10"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 7h19v34H13V7Z"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M19 17h10M19 24h8M19 31h6"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="34" cy="28" r="8" stroke="currentColor" strokeWidth="4" />
        <path
          d="m39 34 5 5"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "cost") {
    return (
      <svg
        className="size-10"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 19c0-6.1 4.9-11 11-11h2c6.1 0 11 4.9 11 11v18H14V19Z"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M18 8 16 3h20l-2 5"
          stroke="white"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M17 24h20M20 17l5 14 4-9 4 9 5-14"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className="size-10" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M13 8h22v33H13V8Z"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M19 7h10v5H19V7Z"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="m17 25 6 6 13-14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
