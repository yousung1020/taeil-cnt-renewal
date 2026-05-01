import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ESG() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.8, 0.9, 1], [0, 1, 1]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section id="esg" ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0 origin-center" style={{ scale }}>
          <img src="/images/환경경영.jpg" alt="환경경영" className="w-full h-full object-cover opacity-30" />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center h-full">
          <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">환경을 생각하는<br/>책임 있는 기업</h2>
            <p className="text-xl md:text-3xl text-gray-300 font-light">다음 세대를 위한 지속 가능한 환경 조성</p>
          </motion.div>

          <motion.div style={{ opacity: opacity2 }} className="absolute inset-0 flex flex-col items-center justify-center">
            <img src="/images/ESG.png" alt="ESG" className="w-64 md:w-96 h-auto mb-10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] object-contain bg-white p-4" />
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">ESG 경영 실천</h2>
            <p className="text-lg md:text-2xl text-gray-300 font-light mt-6 max-w-3xl mx-auto">
              환경 보호, 사회적 책임, 투명한 지배구조를 통해 기업의 사회적 가치를 실현합니다.
            </p>
          </motion.div>

          <motion.div style={{ opacity: opacity3 }} className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">함께 그리는 내일</h2>
            <p className="text-xl md:text-3xl text-gray-300 font-light mt-8">자연과 사람이 조화롭게 공존하는 공간</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}