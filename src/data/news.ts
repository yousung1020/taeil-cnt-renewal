import news1Img from "../assets/news/news1.png";
import news1Detail1Img from "../assets/news/news1_detail1.jpg";
import news2Img from "../assets/news/news2.jpg";
import news3Img from "../assets/news/news3.jpg";
import news3Detail1Img from "../assets/news/news3_detail1.jpg";
import news3Detail2Img from "../assets/news/news3_detail2.jpg";

export interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  content: string;
  detailImages?: string[];
}

export const newsData: Post[] = [
  {
    id: 1,
    title: "[수상] 삼성물산 '25년도 시공능력평가 우수업체 선정 최우수상 수상",
    date: "2026-03-23",
    imageUrl: news1Img,
    description:
      "태일씨앤티가 지난 3월 23일 삼성물산 건설부문으로부터 '25년도 시공능력평가 우수업체'로 선정되어 최우수상을 수상했습니다.",
    content: `
      <p>태일씨앤티가 지난 3월 23일 삼성물산 건설부문이 주관한 '25년도 시공능력평가 우수업체' 시상식에서 최우수상을 수상하는 영예를 안았습니다.</p>
      <p>이번 수상은 태일씨앤티의 뛰어난 시공 능력과 철저한 품질 관리, 그리고 안전 경영에 대한 노력을 삼성물산으로부터 다시 한번 인정받은 결과입니다.</p>
      <p>이날 시상식에는 양사 주요 관계자들이 참석하여 파트너십을 공고히 하고 상생 협력의 의지를 다졌습니다. 태일씨앤티는 앞으로도 최고의 품질과 안전을 바탕으로 건설 산업의 발전에 기여할 것입니다.</p>
    `,
    detailImages: [news1Detail1Img],
  },
  {
    id: 2,
    title: "[행사] (사)한국청소년육성회 금천지구회 '모범 청소년 장학금 전달식'",
    date: "2025-12-16",
    imageUrl: news2Img,
    description:
      "계열사 태경이노베이션이 금천구청에서 지역 내 모범 청소년들을 위한 장학금 전달식을 진행했습니다.",
    content: `
      <p>태일씨앤티의 계열사인 태경이노베이션은 지난 12월 16일 금천구청에서 '모범 청소년 장학금 전달식'을 개최했습니다.</p>
      <p>이번 행사는 어려운 환경 속에서도 학업에 정진하는 지역 내 청소년들을 격려하기 위해 마련되었으며, 최정훈 대표이사가 직접 참석하여 장학금을 전달했습니다.</p>
      <p>태경이노베이션과 태일씨앤티는 앞으로도 지역 사회의 미래인 청소년들이 꿈을 키워나갈 수 있도록 지속적인 사회공헌 활동을 이어갈 계획입니다.</p>
    `,
    detailImages: [news2Img],
  },
  {
    id: 3,
    title: "[행사] 김경수 대표이사, KIBA 서울 제6대 회장 취임",
    date: "2025-12-09",
    imageUrl: news3Img,
    description:
      "김경수 대표이사가 지난 12월 9일 (사)한국산업단지경영자연합회 서울(KIBA 서울) 제6대 회장으로 취임했습니다.",
    content: `
      <p>태일씨앤티 김경수 대표이사가 지난 12월 9일 G밸리 엘컨벤션에서 열린 '(사)한국산업단지경영자연합회 서울(KIBA 서울)' 정기총회 및 회장 이취임식에서 제6대 회장으로 취임했습니다.</p>
      <p>김경수 신임 회장은 취임사를 통해 "G밸리 입주 기업들의 어려움을 해소하고 상생하는 생태계를 구축하는 데 최선을 다하겠다"고 포부를 밝혔습니다.</p>
      <p>특히 AI, 디지털 전환(DX), ESG 경영 등을 중점 과제로 삼아 변화하는 산업 환경에 기업들이 적응할 수 있도록 지원할 계획입니다.</p>
    `,
    detailImages: [
      news3Detail1Img,
      news3Detail2Img,
    ],
  },
  {
    id: 4,
    title: "[뉴스] 태일씨앤티 2025년도 안전보건 경영 워크숍 개최",
    date: "2025-11-20",
    imageUrl: news1Img,
    description:
      "전 현장의 안전 의식을 고취하고 우수 사례를 공유하기 위한 안전보건 경영 워크숍을 진행했습니다.",
    content: `
      <p>태일씨앤티는 지난 11월 20일 전 임직원 및 현장 소장들이 참석한 가운데 '2025년도 안전보건 경영 워크숍'을 성황리에 마쳤습니다.</p>
      <p>이번 워크숍은 내년도 '무재해 달성'을 목표로 최신 스마트 안전 기술 도입 사례를 공유하고 현장 안전 수칙 준수를 재다짐하는 시간으로 구성되었습니다.</p>
      <p>태일씨앤티는 근로자의 생명과 안전을 경영의 최우선 가치로 삼아 안전한 건설 문화를 선도해 나갈 것입니다.</p>
    `,
    detailImages: [news1Img],
  },
  {
    id: 5,
    title: "[수상] 지역 사회 발전 기여 공로 표창 수상",
    date: "2025-10-15",
    imageUrl: news2Img,
    description:
      "지속적인 사회공헌 활동과 지역 인프라 개선 노력을 인정받아 지자체로부터 표창을 수상했습니다.",
    content: `
      <p>태일씨앤티가 지역 사회 발전과 소외계층 지원에 기여한 공로를 인정받아 지자체로부터 표창을 수여받았습니다.</p>
      <p>회사는 그동안 지역 내 노후 시설 보수 작업 지원, 취약계층 주거 환경 개선 등 건설업의 특성을 살린 다양한 봉사활동을 전개해 왔습니다.</p>
      <p>이번 수상은 태일씨앤티가 추구하는 상생 경영의 결실이며, 앞으로도 나눔의 가치를 실천하는 기업이 되도록 노력하겠습니다.</p>
    `,
    detailImages: [news2Img],
  },
];
