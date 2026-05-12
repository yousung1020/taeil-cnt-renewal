import { useMemo } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../data/news";
import { socialData } from "../../data/social";

const sortByLatest = <T extends { date: string }>(items: T[]) =>
  [...items].sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

const getDetailHref = (type: "news" | "social", id: number) => `/${type}/${id}`;

export function Section3() {
  const latestNews = useMemo(() => sortByLatest(newsData), []);
  const latestSocial = useMemo(() => sortByLatest(socialData)[0], []);

  return (
    <section
      id="section-3"
      className="section3-concrete relative z-10 flex h-screen snap-start items-center overflow-hidden px-6 py-8 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" />

      <div className="section3-content relative mx-auto w-full max-w-[1360px]">
        <div className="text-center">
          <p className="text-4xl font-black tracking-[0.16em] text-white sm:text-5xl lg:text-6xl">
            NEWS
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.35fr)_1px_minmax(260px,0.65fr)] lg:gap-8">
          <div className="grid gap-4">
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

          <div className="hidden h-full min-h-[330px] bg-white/18 lg:block" />

          <div className="rounded-sm border border-white/15 bg-neutral-950/42 p-5 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-emerald-200">
              Recent News
            </p>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {latestNews.slice(0, 3).map((post, index) => (
                <Link
                  to={getDetailHref("news", post.id)}
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
                </Link>
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
    <Link
      to={getDetailHref(type, id)}
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
    </Link>
  );
}
