import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Printer, Mail, Clock } from 'lucide-react';
import SubLayout from './SubLayout';
import NaverMap from './NaverMap';

export default function About() {
  const { subpage } = useParams();
  const companyInfo = {
    name: '(주)태일씨앤티',
    address: '서울특별시 금천구 가산디지털2로 101 한라원앤원타워 B동 17층 1701호'
  };

  const sideMenuItems = [
    { name: '인사말', key: 'greetings', desc: '태일씨앤티 대표이사의 메시지입니다.', path: '/about/greetings' },
    { name: '경영이념', key: 'philosophy', desc: '우리가 추구하는 가치와 철학입니다.', path: '/about/philosophy' },
    { name: '회사연혁', key: 'history', desc: '태일씨앤티가 걸어온 길입니다.', path: '/about/history' },
    { name: '기구조직도', key: 'organization', desc: '효율적인 운영을 위한 조직 구성입니다.', path: '/about/organization' },
    { name: '업·면허/인증', key: 'certifications', desc: '신뢰의 바탕이 되는 자격과 인증 현황입니다.', path: '/about/certifications' },
    { name: '주거래 시공사', key: 'partners', desc: '함께 협력하는 파트너사입니다.', path: '/about/partners' },
    { name: '찾아오시는 길', key: 'location', desc: '태일씨앤티로 오시는 방법입니다.', path: '/about/location' },
  ];

  const activeMenu = sideMenuItems.find(item => item.key === subpage) || sideMenuItems[0];

  const renderContent = () => {
    switch (subpage) {
      case 'greetings':
        return (
          <div className="space-y-16">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* 대표이사 이미지 */}
              <div className="w-full lg:w-1/3 shrink-0 rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl">
                <img 
                  src="/images/인사말.jpg" 
                  alt="대표이사" 
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>

              {/* 인사말 본문 */}
              <div className="flex-grow space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight break-keep">
                    고객의 가치를 최우선으로 생각하는 <br />
                    <span className="text-green-600">신뢰의 파트너, 태일씨앤티</span> 입니다.
                  </h4>
                  <div className="w-16 h-1 bg-green-600 rounded-full" />
                </div>

                <div className="text-gray-600 text-lg leading-relaxed font-normal space-y-6 break-keep">
                  <p>
                    저희 ㈜태일씨앤티 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사의 말씀을 드립니다.
                  </p>
                  <p>
                    저희 회사는 <span className="font-medium text-gray-900">철근·콘크리트 전문 건설 기업</span>으로서 창립 이래 
                    끊임없는 기술 혁신과 철저한 품질 관리를 통해 대한민국 건설 산업의 발전에 기여해 왔습니다.
                  </p>
                  <p>
                    "안전이 곧 생명"이라는 경영 철학 아래, 모든 현장에서 무재해 달성을 최우선 과제로 삼고 있으며, 
                    인간과 자연이 공존할 수 있는 친환경 시공 기술을 확보하기 위해 최선의 노력을 다하고 있습니다.
                  </p>
                  <p>
                    급변하는 시장 환경 속에서도 기본에 충실하고 원칙을 준수하며, 
                    고객에게 최고의 품질과 만족을 드리는 기업으로 지속 성장해 나갈 것을 약속드립니다.
                  </p>
                  <p>
                    앞으로도 변함없는 관심과 격려를 부탁드리며, 여러분의 가정에 건강과 행복이 늘 함께하기를 기원합니다.
                  </p>
                </div>

                <div className="pt-8 flex flex-col items-end gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xl font-bold text-gray-900">대표이사</span>
                    <img src="/images/서명.jpg" alt="서명" className="h-12 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'philosophy':
        return (
          <div className="space-y-16">
            {/* 경영이념 메인 이미지 */}
            <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl bg-white p-4 md:p-8">
              <img 
                src="/images/경영이념.png" 
                alt="태일씨앤티 경영이념" 
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* 미션/비전/가치 3단 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center group">
                <span className="text-green-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Mission</span>
                <h5 className="text-2xl font-black text-gray-900 mb-6">고객 가치 창출</h5>
                <p className="text-gray-600 leading-relaxed font-normal break-keep">
                  최고의 품질과 혁신적인 기술력을 바탕으로 고객에게 최상의 가치를 제공하며 건설 산업 발전에 기여한다.
                </p>
              </div>
              <div className="p-10 bg-green-600 rounded-[2rem] shadow-xl text-center group">
                <span className="text-green-200 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Vision 2030</span>
                <h5 className="text-2xl font-black text-white mb-6">전문건설의 리더</h5>
                <p className="text-white/90 leading-relaxed font-normal break-keep">
                  차별화된 전문성과 지속 가능한 성장을 통해 대한민국을 대표하는 철근·콘크리트 시공 기업으로 도약한다.
                </p>
              </div>
              <div className="p-10 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all text-center group">
                <span className="text-green-600 font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Core Value</span>
                <h5 className="text-2xl font-black text-gray-900 mb-6">신뢰와 혁신</h5>
                <p className="text-gray-600 leading-relaxed font-normal break-keep">
                  원칙을 준수하는 정직한 시공과 끊임없는 기술 혁신을 통해 파트너와 함께 동반 성장하는 문화를 정착시킨다.
                </p>
              </div>
            </div>
          </div>
        );
      case 'location':
        return (
          <div className="space-y-12">
            {/* 지도 영역 */}
            <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-xl bg-gray-50 relative">
              <NaverMap address={companyInfo.address} companyName={companyInfo.name} />
            </div>

            {/* 주소 정보 카드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">본사 주소</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {companyInfo.address}<br />
                      (가산동 549-1)
                    </p>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>TEL. 070-8897-0761</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Printer className="w-4 h-4 text-gray-400" />
                    <span>FAX. 02-2101-2141</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>EMAIL. taeil@taeilcnt.co.kr</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-green-600" /> 업무 시간
                </h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between items-center">
                    <span>평일 (월~금)</span>
                    <span className="font-bold text-gray-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>점심 시간</span>
                    <span className="font-bold text-gray-900">12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center text-red-500">
                    <span>주말 및 공휴일</span>
                    <span className="font-bold">휴무</span>
                  </div>
                </div>
                <div className="mt-8">
                  <a 
                    href={`https://map.naver.com/v5/search/${encodeURIComponent(companyInfo.name)}`}
                    target="_blank" 
                    rel="noreferrer"
                    className="w-full py-4 bg-white border border-gray-200 rounded-2xl flex items-center justify-center gap-2 font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    네이버 지도로 크게보기
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-[40vh] border-2 border-dashed border-gray-100 rounded-3xl">
            <p className="text-gray-300 font-normal italic">{activeMenu.name} 콘텐츠 준비 중</p>
          </div>
        );
    }
  };

  return (
    <SubLayout title="ABOUT US" subtitle="회사소개" menuItems={sideMenuItems} activePath={activeMenu.path}>
      <motion.div
        key={activeMenu.name}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-16 border-b border-gray-900 pb-6 flex items-end justify-between">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-1.5">{activeMenu.name}</h3>
            <p className="text-gray-500 text-lg font-medium">{activeMenu.desc}</p>
          </div>
        </div>
        
        {renderContent()}
      </motion.div>
    </SubLayout>
  );
}
