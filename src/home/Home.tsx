import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";
import Footer from "../components/Footer";
import "./home.css";

function Home() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-white text-neutral-950">
      <main className="relative">
        <Section1 />
        <div className="section2-bg absolute inset-x-0 bottom-0 top-[100vh] bg-stone-700" />
        <div
          className="section2-drawing absolute inset-x-0 bottom-0 top-[100vh]"
          aria-hidden="true"
        />
        <Section2 />
        <Section3 />
        <div className="relative z-10 snap-start">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;
