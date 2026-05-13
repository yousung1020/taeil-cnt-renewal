import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";
import "./home.css";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-white text-neutral-950">
      <main className="relative">
        <Section1 />
        <div className="section-blueprint">
          <Section2 />
          <Section3 />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
