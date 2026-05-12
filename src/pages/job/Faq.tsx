import { useState } from 'react';

const faqs = [
  { 
    q: '우대 자격증이 있나요?', 
    a: '건축(산업)기사, 건설안전(산업)기사, 안전(산업)기사 자격증 소지자를 우대합니다. 자격증 소지 시 각 10만 원의 수당이 지급되며, 2개 이상 소지 시 30만 원의 자격증 수당 혜택이 주어집니다.' 
  },
  { 
    q: '경력 인정 기준은 무엇인가요?', 
    a: '현장 직무(공사, 안전, 공무)의 경우 동종 업계(토목, 건축) 경력만 인정하며, 특히 철근콘크리트 업종 경력을 우대합니다.' 
  },
  { 
    q: '졸업예정자도 지원이 가능한가요?', 
    a: '졸업 예정자도 직무 관련 전공 및 자격증 소지 등 직무 능력이 있다고 판단되면 지원 가능합니다.' 
  },
  { 
    q: '수습 기간(3개월) 동안 처우의 차이가 있나요?', 
    a: '수습 기간 중에도 급여는 100% 지급되며, 복리후생 또한 정규직과 동일하게 적용됩니다.' 
  },
  { 
    q: '서류전형 시 중요하게 보는 부분은?', 
    a: '지원 동기 및 직무 적합도를 가장 중요하게 평가합니다.' 
  },
  { 
    q: '지정 양식의 이력서 및 자기소개서를 제출해야 하나요?', 
    a: '제출 양식은 자유로우나, 자사 양식의 이력서 및 자기소개서 제출자를 우대합니다.' 
  },
  { 
    q: '서류 합격자 발표는 언제 이루어지나요?', 
    a: '서류 접수 마감 후 1주일 이내에 합격자에게 개별 통보해 드립니다.' 
  },
  { 
    q: '면접 전형은 어떻게 이루어지나요?', 
    a: '1차 면접은 현업 리더를 중심으로 직무 수행 경험과 능력을 통한 직무 적합성을 파악하며(약 40분), 2차 면접은 경영진 중심으로 자사 인재상에 부합하는 조직 적합성을 확인합니다(약 1시간).' 
  },
  { 
    q: '면접 시 중요하게 보는 포인트가 있다면?', 
    a: '역량 파악 및 조직 가치 기반으로 자사 인재상과 일치하는지 검증하며, 과거 경험이나 사례 등 심층 질문을 통해 지원자의 응답 수준을 확인합니다.' 
  },
  { 
    q: '청년 우대 복지 정책이 있는지?', 
    a: "사회초년생 및 청년층 지원을 위해 '청년재직자 내일채움공제'를 적극적으로 지원하고 있습니다." 
  },
];

export function Faq() {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 border-b border-gray-900 pb-6">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">채용FAQ</h3>
        <p className="text-gray-500 text-lg font-medium">채용에 관한 궁금한 점을 확인하실 수 있습니다.</p>
      </div>

      <div className="border-t border-gray-900">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div 
              key={index} 
              className="border-b border-gray-200 group"
            >
              <button
                className="w-full py-6 px-4 md:px-8 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center text-base sm:text-lg font-medium text-gray-800 pr-4">
                  <span className="text-lg font-bold text-green-600 mr-6 tracking-widest opacity-50">Q{String(index + 1).padStart(2, '0')}</span>
                  <span className="leading-snug">{faq.q}</span>
                </div>
                <div className="relative w-6 h-6 shrink-0 flex items-center justify-center">
                  <span className={`absolute w-full h-[2px] bg-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-green-600' : ''}`}></span>
                  <span className={`absolute w-[2px] h-full bg-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-90 bg-green-600 opacity-0' : ''}`}></span>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 md:px-8 py-8 bg-gray-50">
                  <div className="flex items-start">
                    <span className="text-lg font-bold text-green-600 mr-6 tracking-widest invisible">A{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}