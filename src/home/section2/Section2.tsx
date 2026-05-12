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
          <p className="text-[clamp(2.25rem,5.5vw,4.25rem)] font-black uppercase leading-none tracking-tight text-[#40776D]">
            주요 수주현황
          </p>
          <h2 className="mt-3 break-keep text-xl font-black text-[#55B76F] sm:text-2xl">
            ORDER STATUS
          </h2>

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

        <div className="relative h-[420px] overflow-visible sm:h-[500px] lg:h-[560px]">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.name}
              className={`absolute top-0 overflow-hidden bg-neutral-200 text-left shadow-2xl shadow-black/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${getSlidePosition(index) === "center"
                ? "left-1/2 z-30 h-[68%] w-[74%] -translate-x-1/2 rounded-tl-[48px] rounded-br-[48px] opacity-100 sm:w-[58%] lg:w-[48%]"
                : getSlidePosition(index) === "left"
                  ? "left-0 z-10 h-[62%] w-[30%] -translate-x-1/3 translate-y-16 rounded-tr-[22px] rounded-br-[22px] opacity-55 grayscale sm:w-[26%] lg:w-[24%]"
                  : "right-0 z-10 h-[62%] w-[30%] translate-x-1/3 translate-y-16 rounded-tl-[22px] rounded-bl-[22px] opacity-55 grayscale sm:w-[26%] lg:w-[24%]"
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

          <div className="absolute bottom-36 left-1/2 z-40 w-full max-w-xl -translate-x-1/2 text-center sm:bottom-32">
            <h3 className="break-keep text-xl font-bold text-[#40776D] sm:text-2xl">
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
