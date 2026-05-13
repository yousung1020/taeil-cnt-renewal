import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import daisoImg from "../../assets/daiso.png";
import suwonImg from "../../assets/suwon.png";
import yonginImg from "../../assets/yongin.png";

const projects = [
  {
    name: "다이소 세종 온라인센터",
    image: daisoImg,
  },
  {
    name: "용인 Cluster 1기 OBL",
    image: yonginImg,
  },
  {
    name: "수원 연무동 주상복합",
    image: suwonImg,
  },
];

export function Section2() {
  const [activeProject, setActiveProject] = useState(0);

  const moveProject = (direction: "prev" | "next") => {
    setActiveProject((current) => {
      if (direction === "prev") {
        return current === 0 ? projects.length - 1 : current - 1;
      }

      return current === projects.length - 1 ? 0 : current + 1;
    });
  };

  const getSlidePosition = (index: number) => {
    const offset =
      (index - activeProject + projects.length) % projects.length;

    if (offset === 0) {
      return "center";
    }

    if (offset === 1) {
      return "right";
    }

    return "left";
  };

  return (
    <section
      id="section-2"
      className="relative z-10 overflow-hidden px-6 pb-18 pt-22"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-56"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.62) 42%, rgba(255,255,255,0) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1480px]">
        <div className="relative mb-10 text-center">
          <h2 className="mb-3 break-keep text-base font-medium tracking-[0.28em] text-[#55B76F] sm:text-lg">
            ORDER STATUS
          </h2>
          <p className="text-[clamp(2rem,5vw,3.75rem)] font-black uppercase leading-none tracking-tight text-[#40776D]">
            주요 수주현황
          </p>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 md:flex">
            <button
              type="button"
              className="flex size-12 items-center justify-center border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:border-[#40776D] hover:text-[#40776D]"
              onClick={() => moveProject("prev")}
              aria-label="이전 사업실적 보기"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="flex size-12 items-center justify-center border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:border-[#40776D] hover:text-[#40776D]"
              onClick={() => moveProject("next")}
              aria-label="다음 사업실적 보기"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative h-[390px] overflow-visible sm:h-[460px] lg:h-[520px]">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.name}
              className={`absolute top-0 overflow-hidden bg-neutral-200 text-left shadow-2xl shadow-black/10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${getSlidePosition(index) === "center"
                ? "left-1/2 z-30 h-[66%] w-[72%] -translate-x-1/2 rounded-tl-[42px] rounded-br-[42px] opacity-100 sm:w-[56%] lg:w-[46%]"
                : getSlidePosition(index) === "left"
                  ? "left-[4%] z-10 h-[60%] w-[30%] -translate-x-1/4 translate-y-14 rounded-tr-[20px] rounded-br-[20px] opacity-55 grayscale sm:w-[26%] lg:w-[24%]"
                  : "right-[4%] z-10 h-[60%] w-[30%] translate-x-1/4 translate-y-14 rounded-tl-[20px] rounded-bl-[20px] opacity-55 grayscale sm:w-[26%] lg:w-[24%]"
                }`}
              onClick={() => setActiveProject(index)}
              aria-label={`${project.name} 보기`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </button>
          ))}

          <div className="absolute bottom-34 left-1/2 z-40 w-full max-w-xl -translate-x-1/2 text-center sm:bottom-30">
            <h3 className="break-keep text-lg font-bold text-[#40776D] sm:text-xl">
              {projects[activeProject].name}
            </h3>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 md:hidden">
          <button
            type="button"
            className="flex size-11 items-center justify-center border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:border-[#40776D] hover:text-[#40776D]"
            onClick={() => moveProject("prev")}
            aria-label="이전 사업실적 보기"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="flex size-11 items-center justify-center border border-neutral-300 bg-white text-neutral-700 shadow-sm transition hover:border-[#40776D] hover:text-[#40776D]"
            onClick={() => moveProject("next")}
            aria-label="다음 사업실적 보기"
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
