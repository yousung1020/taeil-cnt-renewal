import { motion } from 'framer-motion';

const items = [
  { title: '경영이념', img: '/images/경영이념.png', desc: '지속 가능한 성장을 위한 핵심 가치' },
  { title: '윤리경영', img: '/images/윤리경영.png', desc: '투명하고 공정한 기업 문화 정착' },
  { title: '인재상', img: '/images/인재상.jpg', desc: '미래를 이끌어갈 창의적 인재' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">핵심가치</h2>
          <p className="text-xl text-gray-400 font-light">바른 경영과 우수한 인재를 통해 미래를 준비합니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-white/5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}