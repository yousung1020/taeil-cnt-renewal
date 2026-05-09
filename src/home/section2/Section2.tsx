import { useEffect, useRef, useState } from "react";
import daisoImg from "../../assets/daiso.png";
import suwonImg from "../../assets/suwon.png";
import yonginImg from "../../assets/yongin.png";

const WHEEL_PROGRESS_MULTIPLIER = 0.0007;
const REBAR_START_TOP = -340;
const REBAR_LAND_TOP = 46;
const REBAR_COLUMN_GAP = 58;
const COMPLETE_SCROLL_DELAY = 260;
const RESET_AFTER_LEAVE_DELAY = 720;

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

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function Section2() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const [gaugeProgress, setGaugeProgress] = useState(0);
  const [completedBars, setCompletedBars] = useState(0);
  const activeProjectRef = useRef(0);
  const gaugeProgressRef = useRef(0);
  const completedBarsRef = useRef(0);
  const completeTimeoutRef = useRef<number | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);
  const isCompletingRef = useRef(false);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = section?.parentElement?.parentElement;

    if (!section || !scrollContainer) {
      return;
    }

    const isSectionVisible = () => {
      const rect = section.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
    };

    const commitProgress = (
      nextProject: number,
      nextProgress: number,
      nextCompletedBars: number,
    ) => {
      activeProjectRef.current = nextProject;
      gaugeProgressRef.current = nextProgress;
      completedBarsRef.current = nextCompletedBars;
      setActiveProject(nextProject);
      setGaugeProgress(nextProgress);
      setCompletedBars(nextCompletedBars);
    };

    const resetProgress = () => {
      if (completeTimeoutRef.current) {
        window.clearTimeout(completeTimeoutRef.current);
        completeTimeoutRef.current = null;
      }

      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }

      isCompletingRef.current = false;
      commitProgress(0, 0, 0);
    };

    const scrollToNextSection = () => {
      const nextSection = document.getElementById("section-3");

      if (!nextSection) {
        isCompletingRef.current = false;
        return;
      }

      scrollContainer.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });

      resetTimeoutRef.current = window.setTimeout(() => {
        commitProgress(0, 0, 0);
        isCompletingRef.current = false;
        resetTimeoutRef.current = null;
      }, RESET_AFTER_LEAVE_DELAY);
    };

    const addGaugeProgress = (amount: number) => {
      if (amount === 0) {
        return;
      }

      if (completeTimeoutRef.current) {
        window.clearTimeout(completeTimeoutRef.current);
        completeTimeoutRef.current = null;
      }

      let nextProject = activeProjectRef.current;
      let nextProgress = gaugeProgressRef.current + amount;
      let nextCompletedBars = completedBarsRef.current;

      while (nextProgress >= 1 && nextProject < projects.length - 1) {
        nextCompletedBars = Math.max(nextCompletedBars, nextProject + 1);
        nextProject += 1;
        nextProgress -= 1;
      }

      if (nextProgress >= 1 && nextProject === projects.length - 1) {
        nextProgress = 1;
        nextCompletedBars = projects.length;
        isCompletingRef.current = true;
        commitProgress(nextProject, nextProgress, nextCompletedBars);

        completeTimeoutRef.current = window.setTimeout(() => {
          scrollToNextSection();
          completeTimeoutRef.current = null;
        }, COMPLETE_SCROLL_DELAY);
        return;
      }

      while (nextProgress < 0 && nextProject > 0) {
        nextProject -= 1;
        nextCompletedBars = Math.min(nextCompletedBars, nextProject);
        nextProgress += 1;
      }

      if (nextProgress <= 0 && nextProject === 0) {
        nextProgress = 0;
        nextCompletedBars = 0;
      }

      if (nextProgress < 1) {
        nextCompletedBars = Math.min(nextCompletedBars, nextProject);
      }

      commitProgress(
        nextProject,
        clamp(nextProgress, 0, 1),
        nextCompletedBars,
      );
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionVisible()) {
        return;
      }

      if (isCompletingRef.current) {
        event.preventDefault();
        return;
      }

      const isMovingForward = event.deltaY > 0;
      const isMovingBackward = event.deltaY < 0;
      const isAtEnd =
        completedBarsRef.current >= projects.length &&
        gaugeProgressRef.current >= 1;
      const isAtStart =
        activeProjectRef.current === 0 && gaugeProgressRef.current <= 0;

      if ((isMovingForward && !isAtEnd) || (isMovingBackward && !isAtStart)) {
        event.preventDefault();
        addGaugeProgress(event.deltaY * WHEEL_PROGRESS_MULTIPLIER);
      }
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (isVisible && !wasVisibleRef.current) {
        resetProgress();
      }

      wasVisibleRef.current = isVisible;
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      section.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("scroll", handleScroll);

      if (completeTimeoutRef.current) {
        window.clearTimeout(completeTimeoutRef.current);
      }

      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const activeScale = 1 + gaugeProgress * 0.045;

  const getRebarTop = (index: number) => {
    if (index < completedBars) {
      return REBAR_LAND_TOP;
    }

    if (index === activeProject && completedBars < projects.length) {
      return (
        REBAR_START_TOP + gaugeProgress * (REBAR_LAND_TOP - REBAR_START_TOP)
      );
    }

    return REBAR_START_TOP;
  };

  const getRebarOpacity = (index: number) => {
    if (index < completedBars || index === activeProject) {
      return 1;
    }

    return 0;
  };

  return (
    <section
      id="section-2"
      ref={sectionRef}
      className="relative z-10 h-screen snap-start overflow-hidden text-white"
    >
      <div className="relative flex h-screen items-center overflow-hidden px-6 py-6">
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="relative mx-auto grid w-full max-w-[1480px] items-center gap-8 lg:grid-cols-[minmax(0,1fr)_260px] xl:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
              Order Status
            </p>
            <h2 className="break-keep text-3xl font-bold leading-tight sm:text-4xl">
              주요 수주현황
            </h2>

            <div className="mt-5">
              <div
                className="relative h-[58vh] max-h-[560px] min-h-[300px] overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/40"
              >
                <div className="absolute inset-x-0 top-0 z-20 h-1 bg-white/18">
                  <div
                    className="h-full bg-amber-300 transition-[width] duration-150 ease-out"
                    style={{ width: `${gaugeProgress * 100}%` }}
                  />
                </div>

                {projects.map((project, index) => (
                  <img
                    key={project.name}
                    src={project.image}
                    alt={project.name}
                    className={`absolute inset-0 h-full w-full object-cover transition duration-700 ease-out ${
                      activeProject === index ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transform:
                        activeProject === index
                          ? `scale(${activeScale})`
                          : "scale(1.02)",
                    }}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-8">
                  <p className="text-xs font-semibold tracking-[0.24em] text-amber-200/90">
                    0{activeProject + 1}
                  </p>
                  <h3 className="mt-2 break-keep text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {projects[activeProject].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[440px] overflow-hidden border-l border-white/15 pl-8 max-lg:hidden">
            <div className="section2-ground absolute bottom-8 left-8 right-0 h-20 overflow-hidden" />
            <div className="absolute bottom-24 left-8 right-0 h-px bg-white/20" />

            {projects.map((project, index) => (
              <div
                key={project.name}
                className="absolute top-0 h-[360px] w-7 transition-[top,opacity] duration-300 ease-out"
                style={{
                  left: `${48 + index * REBAR_COLUMN_GAP}px`,
                  top: `${getRebarTop(index)}px`,
                  opacity: getRebarOpacity(index),
                  zIndex: index + 1,
                }}
                aria-hidden="true"
              >
                <div className="section2-rebar h-full w-full shadow-xl shadow-black/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
