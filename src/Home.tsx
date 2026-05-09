import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import concretePourImg from "./assets/home-concrete-01.jpg";
import concreteCrewImg from "./assets/home-concrete-02.jpg";
import rebarFrameImg from "./assets/home-concrete-03.jpg";
import logoImg from "./assets/logo.png.png";

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

const slogans = [
  {
    english: "ONE",
    korean: "하나된 태일!",
  },
  {
    english: "INNOVATIVE",
    korean: "혁신적인 태일!",
  },
  {
    english: "FOREVER",
    korean: "백년대계 태일!",
  },
];

type HeroSlide = {
  image: string;
  eyebrow: string;
  title: ReactNode;
  visual:
    | {
        type: "image";
        src: string;
        alt: string;
        className: string;
      }
    | {
        type: "component";
        node: ReactNode;
      };
};

const heroSlides: HeroSlide[] = [
  {
    image: concretePourImg,
    eyebrow: "Safety First",
    title: (
      <>
        오늘의 안전은 어제로부터,
        <br />
        내일의 안전은 오늘로부터!
      </>
    ),
    visual: {
      type: "image",
      src: logoImg,
      alt: "태일씨앤티 로고",
      className: "w-44 sm:w-56 lg:w-64",
    },
  },
  {
    image: concreteCrewImg,
    eyebrow: "Trust Partner",
    title: (
      <>
        성공적인 프로젝트를 위한 <br />
        탁월한 신뢰의 아이콘 <br />
        태일씨앤티 입니다.
      </>
    ),
    visual: {
      type: "component",
      node: <CoreValueGraphic />,
    },
  },
  {
    image: rebarFrameImg,
    eyebrow: "Future Technology",
    title: (
      <>
        시대변화에 적응하여 <br />
        누구보다 앞선 기술로 <br />
        전문건설산업의 선도적 역할을 <br />해 나갈 것입니다.
      </>
    ),
    visual: {
      type: "component",
      node: <SloganGraphic />,
    },
  },
];

function CoreValueGraphic() {
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

function SloganGraphic() {
  return (
    <div className="w-full max-w-5xl text-white">
      <div className="grid gap-4 lg:grid-cols-3">
        {slogans.map((slogan) => (
          <div
            className="flex items-center gap-4 rounded-full border border-white/25 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur"
            key={slogan.english}
          >
            <div className="flex size-18 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-emerald-500 to-teal-500 text-center text-xs font-black text-white shadow-lg shadow-emerald-950/20 sm:size-22">
              {slogan.english}
            </div>
            <p className="break-keep text-4xl font-black sm:text-2xl">
              {slogan.korean}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setActiveSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => window.clearTimeout(timerId);
  }, [activeSlide]);

  const moveSlide = (direction: "prev" | "next") => {
    setActiveSlide((current) => {
      if (direction === "prev") {
        return current === 0 ? heroSlides.length - 1 : current - 1;
      }

      return current === heroSlides.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-white text-neutral-950">
      <main>
        <section
          id="section-1"
          className="relative min-h-screen snap-start overflow-hidden bg-neutral-950 text-white"
        >
          {heroSlides.map((slide, index) => (
            <article
              className={`absolute inset-0 transition-opacity duration-700 ${
                activeSlide === index ? "opacity-100" : "opacity-0"
              }`}
              key={slide.eyebrow}
              aria-hidden={activeSlide !== index}
            >
              <img
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-neutral-950/65" />

              <div
                className={`absolute inset-0 flex items-center px-6 py-20 text-center transition-all delay-150 duration-700 ease-out ${
                  activeSlide === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center">
                  <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                    {slide.eyebrow}
                  </p>
                  <h1 className="mx-auto max-w-5xl break-keep text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <div className="mt-12 flex min-h-28 w-full items-center justify-center">
                    {slide.visual.type === "image" ? (
                      <img
                        src={slide.visual.src}
                        alt={slide.visual.alt}
                        className={`${slide.visual.className} max-h-40 object-contain`}
                      />
                    ) : (
                      slide.visual.node
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}

          <button
            className="absolute bottom-8 left-6 z-20 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:text-white sm:left-10"
            type="button"
            onClick={() => moveSlide("prev")}
          >
            <span aria-hidden="true">←</span>
            PREV
          </button>

          <a
            className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
            href="#section-2"
          >
            <span
              className="relative h-8 w-5 rounded-full border border-white/70"
              aria-hidden="true"
            >
              <span className="absolute left-1/2 top-2 h-1.5 w-1 -translate-x-1/2 rounded-full bg-white" />
            </span>
            Scroll Down
          </a>

          <button
            className="absolute bottom-8 right-6 z-20 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:text-white sm:right-10"
            type="button"
            onClick={() => moveSlide("next")}
          >
            NEXT
            <span aria-hidden="true">→</span>
          </button>
        </section>

        <section
          id="section-2"
          className="flex min-h-screen snap-start items-center bg-stone-800 px-6 text-white"
        >
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Section 02
            </p>
            <h2 className="text-5xl font-bold">두 번째 섹션</h2>
          </div>
        </section>

        <section
          id="section-3"
          className="flex min-h-screen snap-start items-center bg-zinc-950 px-6 text-white"
        >
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Section 03
            </p>
            <h2 className="text-5xl font-bold">세 번째 섹션</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
