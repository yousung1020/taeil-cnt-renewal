import { useEffect, useRef, useState } from 'react';

interface NaverMapProps {
  address: string;
  companyName: string;
}

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMap = ({ address, companyName }: NaverMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // 환경 변수 사용 (보안을 위해 하드코딩 제거)
  const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

  useEffect(() => {
    if (!clientId) {
      console.error("NaverMap: Client ID가 설정되지 않았습니다. .env 파일을 확인하세요.");
      setIsError(true);
      return;
    }

    // 스크립트 중복 로드 방지
    const existingScript = document.getElementById('naver-map-script');
    if (existingScript) {
      if (window.naver && window.naver.maps) {
        initMap();
      } else {
        existingScript.onload = () => initMap();
      }
      return;
    }

    // 스크립트 동적 로드
    const script = document.createElement('script');
    script.id = 'naver-map-script';
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${clientId}`;
    script.async = true;
    script.onload = () => initMap();
    script.onerror = () => setIsError(true);
    document.head.appendChild(script);

    function initMap() {
      if (!mapRef.current || !window.naver || !window.naver.maps) {
        setIsError(true);
        return;
      }

      try {
        // 태일씨앤티 본사 위치 (가산 한라원앤원타워)
        const location = new window.naver.maps.LatLng(37.47432857206159, 126.87679097637854);
        
        const map = new window.naver.maps.Map(mapRef.current, {
          center: location,
          zoom: 17,
          zoomControl: true,
          zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT
          }
        });

        const marker = new window.naver.maps.Marker({
          position: location,
          map: map,
          title: companyName
        });

        const infowindow = new window.naver.maps.InfoWindow({
          content: [
            '<div style="padding:12px; min-width:180px; border-radius:8px;">',
            `   <h4 style="margin:0 0 5px 0; color:#16a34a; font-size:14px; font-weight:bold;">${companyName}</h4>`,
            `   <p style="margin:0; font-size:12px; color:#666; line-height:1.4;">${address}</p>`,
            '</div>'
          ].join(''),
          backgroundColor: "#fff",
          borderColor: "#16a34a",
          borderWidth: 2,
          anchorSize: new window.naver.maps.Size(10, 10),
          pixelOffset: new window.naver.maps.Size(0, -5)
        });

        infowindow.open(map, marker);
        setIsLoading(false);
      } catch (e) {
        console.error("Naver Map Init Error:", e);
        setIsError(true);
      }
    }
  }, [address, companyName, clientId]);

  return (
    <div className="relative w-full h-full" style={{ minHeight: '450px' }}>
      {isLoading && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
            <p className="text-gray-400 text-sm">지도를 불러오는 중...</p>
          </div>
        </div>
      )}
      {isError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10 text-center px-6">
          <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <p className="text-gray-900 font-bold mb-1">지도 인증 실패</p>
          <div className="text-gray-400 text-xs leading-relaxed">
            <p>NCP 콘솔의 서비스 URL 설정을 확인해 주세요.</p>
            <p className="mt-2 font-mono opacity-50 text-[10px]">Configured for: http://localhost:5173</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default NaverMap;
