import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import concretePourImg from "../../assets/home-concrete-01.jpg";
import concreteCrewImg from "../../assets/home-concrete-02.jpg";
import rebarFrameImg from "../../assets/home-concrete-03.jpg";
import logoImg from "../../assets/logo.png.png";
import { CoreValueGraphic } from "./components/CoreValueGraphic";
import { SloganGraphic } from "./components/SloganGraphic";

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

export function Section1() {
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
          <div className="absolute inset-0 bg-[#40776D]/80" />

          <div
            className={`absolute inset-0 flex items-center px-6 py-20 text-center transition-all duration-300 ease-out ${
              activeSlide === index
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#55B76F]">
                {slide.eyebrow}
              </p>
              <h1 className="mx-auto max-w-5xl break-keep text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
                {slide.title}
              </h1>
              <div className="mt-12 flex min-h-28 w-full items-center justify-center">
                {slide.visual.type === "image" ? (
                  <div className="rounded-2xl border border-white/25 bg-white/10 px-8 py-5 shadow-xl shadow-black/20 backdrop-blur">
                    <img
                      src={slide.visual.src}
                      alt={slide.visual.alt}
                      className={`${slide.visual.className} max-h-40 object-contain`}
                    />
                  </div>
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
        className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' });
        }}
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
  );
}
