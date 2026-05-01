import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          className="flex-1 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">인사말</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
            <p>
              태일씨앤티를 찾아주신 여러분, 진심으로 환영합니다.<br/>
              저희는 수년간 축적된 노하우와 전문성을 바탕으로 업계를 선도하고 있습니다.
            </p>
            <p>
              고객과의 신뢰를 최우선으로 생각하며, 끊임없는 기술 혁신을 통해 최고의 품질을 제공할 것을 약속드립니다. 자연과 사람을 먼저 생각하는 친환경적인 건설 문화를 이끌어가겠습니다.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src="/images/인사말.jpg" alt="인사말 이미지" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}