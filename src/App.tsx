import { useEffect, useRef, useState } from "react";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import homeVideo from "./assets/bodyVideo.mp4";
import "./App.css";

function App() {
  const secondSectionRef = useRef<HTMLElement | null>(null);
  const thirdSectionRef = useRef<HTMLElement | null>(null);
  const [isSecondActive, setIsSecondActive] = useState(false);
  const [isThirdActive, setIsThirdActive] = useState(false);

  useEffect(() => {
    const section = secondSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSecondActive(
          entry.isIntersecting && entry.intersectionRatio >= 0.62,
        );
      },
      {
        threshold: [0, 0.35, 0.62, 0.9],
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = thirdSectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsThirdActive(
          entry.isIntersecting && entry.intersectionRatio >= 0.58,
        );
      },
      {
        threshold: [0, 0.3, 0.58, 0.86],
      },
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
            <p className="company-intro__eyebrow">
              Reinforced Concrete Specialist
            </p>
            <h1>
              보이지 않는 구조까지
              <br />
              견고하게 세웁니다
            </h1>
            <p className="company-intro__description">
              태일씨앤티는 철근 콘크리트 구조 공사를 기반으로 현장의 안전, 시공
              품질, 공정 효율을 함께 설계하는 전문 시공 기업입니다.
            </p>
            <div
              className="company-intro__values"
              aria-label="태일씨앤티 핵심 역량"
            >
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

        <section
          ref={thirdSectionRef}
          className={`snap-section snap-section--third${
            isThirdActive ? " is-active" : ""
          }`}
          id="philosophy"
        >
          <div className="concrete-pour" aria-hidden="true">
            <div className="concrete-pour__truck">
              <span className="concrete-pour__drum" />
              <span className="concrete-pour__cab" />
              <span className="concrete-pour__wheel concrete-pour__wheel--front" />
              <span className="concrete-pour__wheel concrete-pour__wheel--rear" />
            </div>
            <div className="concrete-pour__chute" />
            <div className="concrete-pour__stream" />
            <div className="concrete-pour__form">
              <span className="concrete-pour__fill" />
              <span className="concrete-pour__grain concrete-pour__grain--one" />
              <span className="concrete-pour__grain concrete-pour__grain--two" />
              <span className="concrete-pour__grain concrete-pour__grain--three" />
            </div>
          </div>

          <div className="ideology">
            <div className="ideology__header">
              <p className="ideology__eyebrow">Management Philosophy</p>
              <h1>경영 이념</h1>
            </div>

            <article className="ideology__vision">
              <span>Vision</span>
              <p>
                시대변화에 적응하여 누구보다 앞선 기술로
                <br />
                전문건설산업의 선도적 역할을 해 나갈 것입니다.
              </p>
            </article>

            <div className="ideology__body">
              <section
                className="ideology__block"
                aria-labelledby="core-values-title"
              >
                <h2 id="core-values-title">핵심가치</h2>
                <ol className="ideology__list">
                  <li>고객감동 및 철저한 품질관리</li>
                  <li>무재해 완벽시공 철저한 사후관리</li>
                  <li>지속적 기술개발과 원가절감</li>
                </ol>
              </section>
            </div>
          </div>

          <section className="ideology-slogan" aria-labelledby="slogan-title">
            <h2 id="slogan-title">슬로건</h2>
            <div className="ideology-slogan__items">
              <article>
                <strong>하나된 태일</strong>
                <span>One</span>
                <p>뭉치면 강하다! 하나된 모습으로 나아갈 것입니다.</p>
              </article>
              <article>
                <strong>혁신적인 태일</strong>
                <span>Innovative</span>
                <p>우리는 창의적으로 발전해 나갈 것입니다.</p>
              </article>
              <article>
                <strong>백년대계 태일</strong>
                <span>Forever</span>
                <p>미래지향적인 계획을 실현할 것입니다.</p>
              </article>
            </div>
          </section>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
