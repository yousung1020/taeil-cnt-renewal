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
      className="relative z-10 overflow-hidden border-t border-neutral-200 px-6 py-24 text-neutral-900"
    >
      <div className="relative mx-auto w-full max-w-[1360px]">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#40776D]">
            Latest
          </p>
          <p className="text-4xl font-black tracking-[0.16em] text-neutral-900 sm:text-5xl lg:text-6xl">
            NEWS
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(0,1.35fr)_1px_minmax(260px,0.65fr)] lg:gap-8">
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

          <div className="hidden h-full min-h-[330px] bg-neutral-200 lg:block" />

          <div className="rounded border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#40776D]">
              Recent News
            </p>
            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {latestNews.slice(0, 3).map((post, index) => (
                <Link
                  to={getDetailHref("news", post.id)}
                  data-detail-type="news"
                  data-detail-id={post.id}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-4 py-5"
                  key={post.id}
                >
                  <p className="text-sm font-black text-[#55B76F]">
                    0{index + 1}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-neutral-400">
                      {post.date}
                    </p>
                    <h3 className="mt-2 break-keep text-lg font-black leading-tight text-neutral-900 transition group-hover:text-[#40776D] xl:text-xl">
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
      className="group grid min-h-[152px] overflow-hidden border border-neutral-200 bg-white shadow-sm sm:grid-cols-[minmax(220px,0.48fr)_minmax(0,1fr)]"
    >
      <div className="h-40 overflow-hidden bg-neutral-200 sm:h-full">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center p-5">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#40776D]">
          {label}
        </p>
        <h3 className="mt-3 break-keep text-xl font-black leading-tight text-neutral-900 xl:text-2xl">
          {title}
        </h3>
      </div>
    </Link>
  );
}
