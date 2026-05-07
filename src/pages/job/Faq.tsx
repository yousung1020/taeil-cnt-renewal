import { useState } from 'react';

const faqs = [
  { q: '우대 자격증이 있나요?', a: '지원 분야별로 상이합니다. 채용 공고를 참고해 주시기 바랍니다.' },
  { q: '경력 인정 기준은 무엇인가요?', a: '관련 직무 경험을 바탕으로 내부 기준에 따라 산정됩니다.' },
  { q: '졸업예정자도 지원이 가능한가요?', a: '네, 입사일 기준 근무가 가능하다면 지원 가능합니다.' },
  { q: '수습 기간(3개월) 동안 처우의 차이가 있나요?', a: '수습 기간 중에도 급여 및 복리후생은 정규직과 동일하게 적용됩니다.' },
  { q: '서류전형시 중요하게 보는 부분은?', a: '지원 직무에 대한 이해도와 관련 경험, 그리고 당사 인재상과의 부합 여부입니다.' },
  { q: '지정양식의 이력서 및 자기소개서를 제출하여야 하는지?', a: '당사 지정 양식을 사용하여 제출해 주셔야 합니다.' },
  { q: '서류 합격자 발표는 언제 이루어 지나요?', a: '서류 접수 마감 후 통상 1~2주 내에 개별 안내해 드립니다.' },
  { q: '면접 전형은 어떻게 이루어 지는지?', a: '실무진 면접과 임원 면접으로 진행되며, 직무에 따라 추가 테스트가 있을 수 있습니다.' },
  { q: '면접시 중요하게 보는 포인트가 있다면?', a: '직무 역량과 더불어 문제 해결 능력, 커뮤니케이션 스킬을 중요하게 평가합니다.' },
  { q: '청년우대 복지정책이 있는지?', a: '청년내일채움공제 등 다양한 정부 지원 제도를 적극적으로 활용하고 있습니다.' },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="animate-fade-in-up">
      <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">채용FAQ</h3>
        <span className="text-sm font-medium text-green-600 tracking-widest uppercase">FAQ</span>
      </div>

      <div className="border-t border-gray-900">
        {faqs.map((faq, index) => (
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
                <span className={`absolute w-full h-px bg-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-green-600' : ''}`}></span>
                <span className={`absolute w-px h-full bg-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-90 bg-green-600 opacity-0' : ''}`}></span>
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 md:px-8 pb-8 pt-4 bg-gray-50">
                <div className="flex items-start">
                  <span className="text-lg font-bold text-green-600 mr-6 tracking-widest invisible">A{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-gray-600 leading-relaxed font-light">{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}