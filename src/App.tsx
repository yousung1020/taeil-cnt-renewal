import { useEffect, useRef, useState } from "react";
import Header from "./layout/header/header";
import homeVideo from "./assets/bodyVideo.mp4";
import "./App.css";

function App() {
  const secondSectionRef = useRef<HTMLElement | null>(null);
  const [isSecondActive, setIsSecondActive] = useState(false);

  useEffect(() => {
    const section = secondSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSecondActive(entry.isIntersecting && entry.intersectionRatio >= 0.62);
      },
      {
        threshold: [0, 0.35, 0.62, 0.9],
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="snap-page">
        <section className="snap-section snap-section--home">
          <Header />
          <video
            className="home-video"
            src={homeVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </section>

        <section
          ref={secondSectionRef}
          className={`snap-section snap-section--second${
            isSecondActive ? " is-active" : ""
          }`}
          id="company"
        >
          <div className="company-structure" aria-hidden="true">
            <div className="company-structure__guide" />
            <div className="company-structure__rebar company-structure__rebar--one">
              <span />
            </div>
            <div className="company-structure__rebar company-structure__rebar--two">
              <span />
            </div>
            <div className="company-structure__rebar company-structure__rebar--three">
              <span />
            </div>
            <div className="company-structure__rebar company-structure__rebar--four">
              <span />
            </div>
            <div className="company-structure__base">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="company-intro">
            <p className="company-intro__eyebrow">Reinforced Concrete Specialist</p>
            <h1>
              보이지 않는 구조까지
              <br />
              견고하게 세웁니다
            </h1>
            <p className="company-intro__description">
              태일씨앤티는 철근 콘크리트 구조 공사를 기반으로 현장의 안전,
              시공 품질, 공정 효율을 함께 설계하는 전문 시공 기업입니다.
            </p>
            <div className="company-intro__values" aria-label="태일씨앤티 핵심 역량">
              <article>
                <strong>정밀 시공</strong>
                <span>도면과 현장 조건을 반영한 정확한 철근 배근</span>
              </article>
              <article>
                <strong>안전 관리</strong>
                <span>구조 안정성을 최우선으로 하는 체계적인 현장 운영</span>
              </article>
              <article>
                <strong>공정 신뢰</strong>
                <span>일정과 품질을 함께 지키는 책임 있는 시공</span>
              </article>
            </div>
          </div>
        </section>

        <section className="snap-section snap-section--third">
          <h1>세번째 섹션</h1>
        </section>
      </main>
    </>
  );
}

export default App;
