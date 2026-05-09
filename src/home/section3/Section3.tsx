import type { MouseEvent } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { newsData } from "../../data/news";
import { socialData } from "../../data/social";

const sortByLatest = <T extends { date: string }>(items: T[]) =>
  [...items].sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

const getDetailHref = (type: "news" | "social", id: number) =>
  `/${type}/${id}`;

const preventPendingDetailNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
};

export function Section3() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isEntered, setIsEntered] = useState(false);
  const latestNews = useMemo(() => sortByLatest(newsData), []);
  const latestSocial = useMemo(() => sortByLatest(socialData)[0], []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEntered(entry.isIntersecting);
      },
      {
        threshold: 0.55,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="section-3"
      ref={sectionRef}
      className={`section3-concrete relative z-10 flex h-screen snap-start items-center overflow-hidden px-6 py-8 text-white ${
        isEntered ? "is-entered" : ""
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />
      <div className="section3-pour-scene" aria-hidden="true">
        <div className="section3-hose" />
        <div className="section3-pour" />
        <div className="section3-splash section3-splash-left" />
        <div className="section3-splash section3-splash-right" />
      </div>
      <div className="section3-fill" aria-hidden="true" />
      <div className="section3-texture" aria-hidden="true" />

      <div className="section3-content relative mx-auto w-full max-w-[1360px]">
        <div className="section3-reveal section3-reveal-title text-center">
          <p className="text-4xl font-black tracking-[0.16em] text-white sm:text-5xl lg:text-6xl">
            NEWS
          </p>
          <p className="mt-2 text-lg font-black tracking-[0.22em] sm:text-xl">
            <span className="text-emerald-300">TAEIL</span>
            <span className="text-emerald-800">CNT</span>
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.35fr)_1px_minmax(260px,0.65fr)] lg:gap-8">
          <div className="section3-reveal section3-reveal-media grid gap-4">
            <FeaturePost
              label="Latest News"
              type="news"
              id={latestNews[0].id}
              title={latestNews[0].title}
              imageUrl={latestNews[0].imageUrl}
            />
            <FeaturePost
              label="Social Contribution"
              type="social"
              id={latestSocial.id}
              title={latestSocial.title}
              imageUrl={latestSocial.imageUrl}
            />
          </div>

          <div className="section3-reveal section3-reveal-divider hidden h-full min-h-[330px] bg-white/18 lg:block" />

          <div className="section3-reveal section3-reveal-list rounded-sm border border-white/15 bg-neutral-950/42 p-5 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
              Recent News
            </p>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {latestNews.slice(0, 3).map((post, index) => (
                <a
                  href={getDetailHref("news", post.id)}
                  onClick={preventPendingDetailNavigation}
                  data-detail-type="news"
                  data-detail-id={post.id}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 py-5"
                  key={post.id}
                >
                  <p className="text-sm font-black text-emerald-200">
                    0{index + 1}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-white/62">
                      {post.date}
                    </p>
                    <h3 className="mt-2 break-keep text-lg font-black leading-tight text-white transition group-hover:text-emerald-200 xl:text-xl">
                      {post.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturePost({
  label,
  type,
  id,
  title,
  imageUrl,
}: {
  label: string;
  type: "news" | "social";
  id: number;
  title: string;
  imageUrl: string;
}) {
  return (
    <a
      href={getDetailHref(type, id)}
      onClick={preventPendingDetailNavigation}
      data-detail-type={type}
      data-detail-id={id}
      className="group grid min-h-[152px] overflow-hidden border border-white/15 bg-neutral-950/34 shadow-xl shadow-black/20 backdrop-blur-sm sm:grid-cols-[minmax(220px,0.48fr)_minmax(0,1fr)]"
    >
      <div className="h-40 overflow-hidden bg-neutral-400 sm:h-full">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center p-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-200">
          {label}
        </p>
        <h3 className="mt-3 break-keep text-xl font-black leading-tight text-white xl:text-2xl">
          {title}
        </h3>
      </div>
    </a>
  );
}
