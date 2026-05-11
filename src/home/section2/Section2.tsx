import { useEffect, useRef, useState } from "react";
import daisoImg from "../../assets/daiso.png";
import suwonImg from "../../assets/suwon.png";
import yonginImg from "../../assets/yongin.png";

const REBAR_COLUMN_GAP = 58;
const WHEEL_STEP_COOLDOWN = 620;
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

export function Section2() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);
  const activeProjectRef = useRef(0);
  const stepLockTimeoutRef = useRef<number | null>(null);
  const resetTimeoutRef = useRef<number | null>(null);
  const isStepLockedRef = useRef(false);
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

    const commitProject = (nextProject: number) => {
      activeProjectRef.current = nextProject;
      setActiveProject(nextProject);
    };

    const clearStepLock = () => {
      if (stepLockTimeoutRef.current) {
        window.clearTimeout(stepLockTimeoutRef.current);
        stepLockTimeoutRef.current = null;
      }

      isStepLockedRef.current = false;
    };

    const lockNextStep = () => {
      isStepLockedRef.current = true;

      if (stepLockTimeoutRef.current) {
        window.clearTimeout(stepLockTimeoutRef.current);
      }

      stepLockTimeoutRef.current = window.setTimeout(() => {
        isStepLockedRef.current = false;
        stepLockTimeoutRef.current = null;
      }, WHEEL_STEP_COOLDOWN);
    };

    const resetProgress = (nextProject = 0) => {
      clearStepLock();

      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
        resetTimeoutRef.current = null;
      }

      commitProject(nextProject);
    };

    const scrollToNextSection = () => {
      const nextSection = document.getElementById("section-3");

      if (!nextSection) {
        clearStepLock();
        return;
      }

      lockNextStep();

      scrollContainer.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });

      resetTimeoutRef.current = window.setTimeout(() => {
        clearStepLock();
        resetTimeoutRef.current = null;
      }, RESET_AFTER_LEAVE_DELAY);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!isSectionVisible()) {
        return;
      }

      if (isStepLockedRef.current) {
        event.preventDefault();
        return;
      }

      const isMovingForward = event.deltaY > 0;
      const isMovingBackward = event.deltaY < 0;
      const isAtEnd = activeProjectRef.current === projects.length - 1;
      const isAtStart = activeProjectRef.current === 0;

      if (isMovingForward) {
        event.preventDefault();

        if (isAtEnd) {
          scrollToNextSection();
          return;
        }

        commitProject(activeProjectRef.current + 1);
        lockNextStep();
        return;
      }

      if (isMovingBackward && !isAtStart) {
        event.preventDefault();
        commitProject(activeProjectRef.current - 1);
        lockNextStep();
      }
    };

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight * 0.5 &&
        rect.bottom > window.innerHeight * 0.5;

      if (isVisible && !wasVisibleRef.current) {
        const isReturningFromSection3 = rect.top < 0;
        resetProgress(isReturningFromSection3 ? projects.length - 1 : 0);
      }

      wasVisibleRef.current = isVisible;
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      section.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearStepLock();

      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const isRebarLanded = (index: number) => index <= activeProject;

  return (
    <section
      id="section-2"
      ref={sectionRef}
      className="relative z-10 h-screen snap-start overflow-hidden text-white"
    >
      <div className="relative flex h-screen items-center overflow-hidden px-6 py-6">
        <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

        <div className="relative mx-auto grid w-full max-w-[1480px] items-end gap-8 lg:grid-cols-[minmax(0,1fr)_260px] xl:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#55B76F]">
              Order Status
            </p>
            <h2 className="break-keep text-3xl font-bold leading-tight sm:text-4xl">
              주요 수주현황
            </h2>

            <div className="mt-5">
              <div className="relative h-[58vh] max-h-[560px] min-h-[300px] overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/40">
                <div className="absolute inset-x-0 top-0 z-20 grid h-2 grid-cols-3 gap-1 bg-black/20 p-[2px]">
                  {projects.map((project, index) => (
                    <div
                      key={project.name}
                      className={`h-full transition-colors duration-300 ${
                        index <= activeProject ? "bg-[#55B76F]" : "bg-white/24"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
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
                        activeProject === index ? "scale(1.04)" : "scale(1)",
                    }}
                  />
                ))}

                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-8">
                  <p className="text-xs font-semibold tracking-[0.24em] text-emerald-200/90">
                    0{activeProject + 1}
                  </p>
                  <h3 className="mt-2 break-keep text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    {projects[activeProject].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[58vh] max-h-[560px] min-h-[300px] overflow-hidden border border-white/15 bg-[#25564E]/45 shadow-2xl shadow-black/25 backdrop-blur-sm max-lg:hidden">
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(85,183,111,0.22),transparent_34%),linear-gradient(180deg,rgba(64,119,109,0.58),rgba(16,45,40,0.72))]"
              aria-hidden="true"
            />
            <div className="section2-ground absolute bottom-0 left-6 right-6 h-20 overflow-hidden" />
            <div className="absolute bottom-20 left-6 right-6 h-px bg-white/24" />

            {projects.map((project, index) => (
              <div
                key={project.name}
                className="absolute bottom-[5rem] h-[calc(100%-5rem)] w-7 transition-[transform,opacity] duration-500 ease-out"
                style={{
                  left: `${56 + index * REBAR_COLUMN_GAP}px`,
                  opacity: isRebarLanded(index) ? 1 : 0,
                  transform: isRebarLanded(index)
                    ? "translateY(0)"
                    : "translateY(-118%)",
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
