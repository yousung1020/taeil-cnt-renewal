import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Orders() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 전 구간 [0,1] 명시 → 외삽 없음, 진입 전(scrollYProgress=0 clamp)에도 opacity=0
  const opacity1 = useTransform(scrollYProgress, [0, 0.07, 0.22, 0.32, 1], [0, 1, 1, 0, 0]);
  const y1       = useTransform(scrollYProgress, [0, 0.07, 0.22, 0.32, 1], [20, 0, 0, -30, -30]);

  const opacity2 = useTransform(scrollYProgress, [0, 0.32, 0.42, 0.57, 0.67, 1], [0, 0, 1, 1, 0, 0]);
  const y2       = useTransform(scrollYProgress, [0, 0.32, 0.42, 0.57, 0.67, 1], [20, 20, 0, 0, -30, -30]);

  const opacity3 = useTransform(scrollYProgress, [0, 0.67, 0.77, 1], [0, 0, 1, 1]);
  const y3       = useTransform(scrollYProgress, [0, 0.67, 0.77, 1], [20, 20, 0, 0]);

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const items = [
    { title: "용인 Cluster 1기 OBL", desc: "미래 지향적 첨단 복합 물류 클러스터 신축 공사", y: y1, opacity: opacity1, img: "/images/cropped_yongin.jpg", z: 30 },
    { title: "Westin Seoul Parnas 리모델링", desc: "대한민국 대표 호텔의 프리미엄 공간 리뉴얼", y: y2, opacity: opacity2, img: "/images/cropped_orders.jpg", z: 20 },
    { title: "다이소 세종 온라인센터", desc: "국내 최대 규모의 최첨단 자동화 물류 센터 구축", y: y3, opacity: opacity3, img: "/images/cropped_hero.jpg", z: 10 },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0c0d10] text-white isolate">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center">

        <div className="absolute inset-0 bg-radial-at-t from-zinc-800/10 via-transparent to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-20 relative h-full">

          <div className="flex-1 w-full h-full flex flex-col justify-center relative py-20 z-50">
            <div className="mb-16">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Project Status</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">수주 현황</h2>
            </div>

            <div className="relative h-64 w-full overflow-hidden">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{ y: item.y, opacity: item.opacity }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight break-keep">{item.title}</h3>
                  <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed break-keep max-w-md">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 flex gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-green-500 origin-left"
                    style={{
                      scaleX: useTransform(scrollYProgress, [i * 0.33, (i + 1) * 0.33], [0, 1])
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full relative aspect-square md:aspect-auto md:h-[70vh]">
            <motion.div style={{ scale: imgScale }} className="w-full h-full relative">
              {items.map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{ opacity: item.opacity, zIndex: item.z }}
                  className="absolute inset-0 shadow-[0_0_100px_rgba(0,0,0,0.8)]"
                >
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-3xl border border-white/10" />
                  <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold border border-green-500/50 text-white shadow-xl">
                    {item.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-tr from-white/5 via-transparent to-transparent z-[100]" />
          </div>
        </div>
      </div>
    </section>
  );
}
