import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-black">
      {/* Hero Image (Clean Image) */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y, scale }}
      >
        <img 
          src="/images/cropped_hero.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-90"
        />
      </motion.div>

      {/* Hero Overlay UI (Fades out on scroll) */}
      <motion.div style={{ opacity }} className="relative z-10 h-full w-full">
        
        {/* Bottom Left: Project Name Box (Moved back to bottom as requested) */}
        <div className="absolute bottom-12 left-0">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="bg-[#111]/85 backdrop-blur-md pl-6 pr-20 py-5 shadow-2xl border-l-8 border-green-500 relative"
            style={{ 
              clipPath: "polygon(0% 0%, 100% 0%, calc(100% - 80px) 100%, 0% 100%)",
            }}
          >
            <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-tight whitespace-nowrap">
              다이소 세종 온라인센터
            </h2>
          </motion.div>
        </div>

        {/* Bottom Right: Slogan Box (Attached to right edge) */}
        <div className="absolute bottom-32 right-0">
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-[#111]/85 backdrop-blur-md pl-20 pr-12 py-4 shadow-2xl relative"
            style={{ 
              clipPath: "polygon(80px 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <h1 className="text-white text-base md:text-lg lg:text-xl font-bold italic tracking-tighter text-right whitespace-nowrap">
              오늘의 안전은 어제로부터, 내일의 안전은 오늘로부터!
            </h1>
          </motion.div>
        </div>

      </motion.div>

      {/* Subtle Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-0 pointer-events-none" />
    </div>
  );
}
