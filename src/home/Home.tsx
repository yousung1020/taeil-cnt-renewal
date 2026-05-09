import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";

function Home() {
  return (
    <div className="h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory bg-white text-neutral-950">
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
    </div>
  );
}

export default Home;
