// gu_data.js
const guDatabase = {
    "jung": {
        name: "중구", title: "중구청",
        themeColor: "#BB9955", themeSubColor: "#9A7B3E", themeTextColor: "#FFFFFF", accentColor: "#BB9955",
        address: "효빈광역시 중구 중앙로 101 (조유동)", addr: "효빈광역시 중구 중앙로 101 (조유동)",
        subway: "①⑦ 중구청역 / ⑦(지선) 조유동2가역, 천석동2가역",
        headTitle: "구청장", headName: "구성연", phone: "079-242-8192", fax: "079-242-8199", duty: "079-242-8100",
        sloganPre: "시간을 걷는 트램, 꿈이 현실이 되는 낭만 중구", sloganRibbon: "시간을 걷는 트램, 꿈이 현실이 되는 낭만 중구",
        mascotName: "뱁시계", mascotDesc: "중구의 구조(區鳥)인 뱁새에 모래시계와 7호선 전차 차장 기믹을 융합한 시간 여행자 마스코트",
        symbols: { flower: "장미", tree: "소나무", bird: "뱁새" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#BB9955" opacity="0.25" r="45"></circle><path d="M 30 15 L 70 15 L 50 50 L 70 85 L 30 85 L 50 50 Z" fill="#0055AA" opacity="0.15"></path><circle cx="50" cy="55" fill="#FFFBF0" r="26" stroke="#E0D8C0" stroke-width="1"></circle><ellipse cx="24" cy="58" fill="#F0E8D0" rx="5" ry="10" transform="rotate(20 24 58)"></ellipse><ellipse cx="76" cy="58" fill="#F0E8D0" rx="5" ry="10" transform="rotate(-20 76 58)"></ellipse><circle cx="40" cy="48" fill="#111" r="4"></circle><circle cx="38" cy="46" fill="#FFF" r="1.5"></circle><circle cx="60" cy="48" fill="#111" r="4"></circle><circle cx="58" cy="46" fill="#FFF" r="1.5"></circle><ellipse cx="33" cy="54" fill="#FF8899" opacity="0.7" rx="4" ry="2.5"></ellipse><ellipse cx="67" cy="54" fill="#FF8899" opacity="0.7" rx="4" ry="2.5"></ellipse><polygon fill="#FF9933" points="50,52 46,57 54,57"></polygon><path d="M 35 32 L 65 32 L 60 18 L 40 18 Z" fill="#004488"></path><rect fill="#111" height="5" rx="2" width="36" x="32" y="30"></rect><circle cx="50" cy="25" fill="#BB9955" r="3.5"></circle><path d="M 46 68 L 54 68 L 50 73 L 54 78 L 46 78 L 50 73 Z" fill="#0077DD" stroke="#BB9955" stroke-width="1"></path></svg>`,
        news: [
            { dept: "대중교통과", title: "7호선 노면전차(트램) 야간 연장 운행 시범사업 실시", content: "중구청은 구민들의 야간 교통 편의와 원도심 관광 활성화를 위해 7호선 노면전차의 운행 시간을 자정까지 연장하는 시범사업을 실시합니다." },
            { dept: "문화유산과", title: "구도심 근대문화유산 탐방로 및 성지순례길 통합 정비", content: "" },
            { dept: "공원녹지과", title: "모래시계 공원 보수공사에 따른 심야 시간대 출입 통제 안내", content: "" },
            { dept: "지역경제과", title: "중앙동 금융가 직장인 대상 점심시간 힐링 버스킹 공연", content: "" }
        ]
    },
    "buk": {
        name: "북구", title: "북구청",
        themeColor: "#6677CC", themeSubColor: "#4F5FA8", themeTextColor: "#FFFFFF", accentColor: "#6677CC",
        address: "효빈광역시 북구 고중로 2 (중수1동)", addr: "효빈광역시 북구 고중로 2 (중수1동)",
        subway: "①⑥ 북구청역",
        headTitle: "구청장", headName: "김지언", phone: "079-321-5042", fax: "079-321-5049", duty: "079-321-5000",
        sloganPre: "꽃피는 고송, 미래를 여는 북구", sloganRibbon: "꽃피는 고송, 미래를 여는 북구",
        mascotName: "제비도리", mascotDesc: "구조(區鳥)인 제비를 모티브로 머리 깃에 6호선 보라색 포인트를 준 마스코트",
        symbols: { flower: "나팔꽃", tree: "은행나무", bird: "제비" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#6677CC" r="45"></circle><path d="M 20 45 Q 50 10 80 45 Q 50 60 20 45 Z" fill="#111625"></path><path d="M 30 50 Q 50 35 70 50 Q 50 75 30 50 Z" fill="#FFFFFF"></path><circle cx="43" cy="48" fill="#000" r="3"></circle><circle cx="57" cy="48" fill="#000" r="3"></circle><polygon fill="#FFCC11" points="50,52 46,58 54,58"></polygon><circle cx="36" cy="54" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="64" cy="54" fill="#FF8899" opacity="0.6" r="4"></circle></svg>`,
        news: [
            { dept: "문화관광과", title: "고송동 애니플러스 특별 팝업스토어 인파 밀집 대비 교통통제 안내", content: "북구 고송교차로 일대에서 열리는 대규모 한정판 팝업스토어 오픈런으로 인한 극심한 혼잡이 예상되오니 대중교통 이용을 부탁드립니다." },
            { dept: "도시재생과", title: "고송신도시 펭귄 생태관 건립을 위한 주민 공청회 개최", content: "" },
            { dept: "주차관리과", title: "애니메이트 및 대형 굿즈샵 밀집 구역 불법주정차 특별 단속", content: "" },
            { dept: "대중교통과", title: "6호선 다크 고딕 테마 특별 열차 임시 증편 운행 시간표 변경 안내", content: "" }
        ]
    },
    "dong": {
        name: "동구", title: "동구청",
        themeColor: "#00AA00", themeSubColor: "#008800", themeTextColor: "#FFFFFF", accentColor: "#00AA00",
        address: "효빈광역시 동구 덕성로 12 (덕현2동)", addr: "효빈광역시 동구 덕성로 12 (덕현2동)",
        subway: "③⑥ 덕현역",
        headTitle: "구청장", headName: "조우영", phone: "079-284-1193", fax: "079-284-1199", duty: "079-284-1100",
        sloganPre: "철도와 서브컬처가 공존하는, 꿈꾸는 활력 동구", sloganRibbon: "철도와 서브컬처가 공존하는, 꿈꾸는 활력 동구",
        mascotName: "냥냥선장", mascotDesc: "전천 냥냥 골목의 고양이 테마와 효빈역의 철도 선장 이미지를 결합한 마스코트",
        symbols: { flower: "철쭉", tree: "단풍나무", bird: "참새" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#f5f5dc" r="45"></circle><path d="M 20 15 Q 15 25 10 30" fill="#f5f5dc" stroke="#f5f5dc" stroke-width="3"></path><path d="M 80 15 Q 85 25 90 30" fill="#f5f5dc" stroke="#f5f5dc" stroke-width="3"></path><path d="M 22 25 Q 18 30 15 33" fill="#ffcccc" stroke="#ffcccc" stroke-width="2"></path><path d="M 78 25 Q 82 30 85 33" fill="#ffcccc" stroke="#ffcccc" stroke-width="2"></path><circle cx="35" cy="45" fill="#000" r="5"></circle><circle cx="65" cy="45" fill="#000" r="5"></circle><circle cx="38" cy="42" fill="#fff" r="1.5"></circle><circle cx="68" cy="42" fill="#fff" r="1.5"></circle><polygon fill="#ff9999" points="50,55 47,58 53,58"></polygon><path d="M 47 58 Q 50 63 53 58" fill="none" stroke="#000" stroke-width="2"></path><path d="M 30 50 L 15 48" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 30 55 L 15 57" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 70 50 L 85 48" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 70 55 L 85 57" fill="none" stroke="#ccc" stroke-width="1.5"></path><rect fill="#3366cc" height="25" rx="5" ry="5" width="50" x="25" y="10"></rect><rect fill="#fff" height="15" width="30" x="35" y="15"></rect><circle cx="40" cy="22.5" fill="#ff0000" r="3"></circle><path d="M 45 22.5 L 60 22.5" fill="none" stroke="#3366cc" stroke-width="3"></path><circle cx="50" cy="18" fill="#ffcc00" r="1.5"></circle><path d="M 25 70 L 75 70 L 65 90 L 35 90 Z" fill="#ff6666"></path><path d="M 50 70 L 50 90" fill="none" stroke="#fff" stroke-dasharray="3,3" stroke-width="2"></path></svg>`,
        news: [
            { dept: "문화체육과", title: "동구 전천 냥냥 골목 '고양이와 아이돌' 테마 축제 개최 안내", content: "동구의 명물 전천 냥냥 골목에서 고양이 귀 헤어밴드 착용 시 지역 상가 10% 할인 혜택을 드리는 축제를 이번 주말부터 진행합니다." },
            { dept: "관광진흥과", title: "효빈역 광장 철도 덕후 및 애니메이션 팬 연합 사진전", content: "" },
            { dept: "재난안전과", title: "7호선 다이캐스트 한정판 전시회장 인파 밀집 대비 안전관리 계획", content: "" },
            { dept: "일자리경제과", title: "역세권 성지순례 맞춤형 가이드 및 크리에이터 양성 과정 모집", content: "" }
        ]
    },
    "seo": {
        name: "서구", title: "서구청",
        themeColor: "#00AABB", themeSubColor: "#008899", themeTextColor: "#FFFFFF", accentColor: "#00AABB",
        address: "효빈광역시 서구 당선동 77 (당선4동)", addr: "효빈광역시 서구 당선동 77 (당선4동)",
        subway: "해당사항 없음",
        headTitle: "구청장", headName: "부서원", phone: "079-634-2201", fax: "079-634-2209", duty: "079-634-2200",
        sloganPre: "낭만이 달리는 트램도시, 소신을 품은 지성 서구", sloganRibbon: "낭만이 달리는 트램도시, 소신을 품은 지성 서구",
        mascotName: "구스장", mascotDesc: "서구의 구조(區鳥)인 거위에 7호선 분홍색 트램 캡과 '즈라!' 포스트잇 뱃지를 단 마스코트",
        symbols: { flower: "백합", tree: "참나무", bird: "거위" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#00AABB" opacity="0.2" r="45"></circle><path d="M 25 65 Q 15 50 22 40 Q 30 45 28 60 Z" fill="#EAEAEA"></path><path d="M 35 85 Q 28 62 42 42 Q 46 32 58 35 Q 64 45 52 62 Q 46 76 50 85 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="1"></path><circle cx="53" cy="34" fill="#FFFFFF" r="13" stroke="#D0D0D0" stroke-width="0.5"></circle><circle cx="47" cy="32" fill="#111" r="2.5"></circle><circle cx="46" cy="31" fill="#FFF" r="0.8"></circle><path d="M 42 35 Q 28 30 30 38 Q 40 43 43 38 Z" fill="#FF9900"></path><path d="M 45 24 L 62 27 L 58 17 L 48 15 Z" fill="#FF8899"></path><rect fill="#FFF" height="3" transform="rotate(10 42 22)" width="18" x="42" y="22"></rect><rect fill="#FFCC11" height="9" rx="1" transform="rotate(15 48 52)" width="9" x="48" y="52"></rect><text fill="#D81C2F" font-family="Arial" font-size="6" font-weight="bold" text-anchor="middle" transform="rotate(15 48 52)" x="52.5" y="59.5">!</text><path d="M 45 62 Q 62 55 58 70 Q 48 72 43 64 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="0.5"></path></svg>`,
        news: [
            { dept: "청년정책과", title: "서구 대학로 가성비 맛집 지도 '즈라 가이드' 최신판 배포", content: "서구청은 대학가 주변의 저렴하고 맛있는 숨은 식당들을 총망라한 '즈라 가이드'를 서구청 홈페이지 및 각 동 주민센터에서 선착순 배포합니다." },
            { dept: "환경보호과", title: "청덕공원 인근 거위 생태 보호구역 지정 및 먹이주기 금지 안내", content: "" },
            { dept: "도시계획과", title: "7호선 노면전차 선로 주변 핌피(PIMFY) 방지 시민 위원회 발족", content: "" },
            { dept: "교육지원과", title: "효빈과학기술원(HIST) 연계 공학도 드론 및 미니카 레이싱 대회", content: "" }
        ]
    },
    "nam": {
        name: "남구", title: "남구청",
        themeColor: "#DDBBFF", themeSubColor: "#9856FF", themeTextColor: "#2E1065", accentColor: "#9856FF",
        address: "효빈광역시 남구 평당중앙로 33 (평당3동)", addr: "효빈광역시 남구 평당중앙로 33 (평당3동)",
        subway: "①④⑧ 남구청역",
        headTitle: "구청장", headName: "오전희", phone: "079-451-9034", fax: "079-451-9039", duty: "079-451-9000",
        sloganPre: "바다를 품고 미래로 도약하는 활력 남구", sloganRibbon: "바다를 품고 미래로 도약하는 활력 남구",
        mascotName: "참도리", mascotDesc: "남구의 구조(區鳥)인 참새에 8호선 컬러 스카프와 선장 모자를 착용한 해양도시 마스코트",
        symbols: { flower: "철쭉", tree: "단풍나무", bird: "참새" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#DDBBFF" opacity="0.4" r="45"></circle><circle cx="50" cy="55" fill="#8B5A2B" r="24"></circle><circle cx="50" cy="58" fill="#FFF8F0" r="18"></circle><path d="M 26 55 Q 18 65 28 70 Q 32 60 26 55 Z" fill="#5C3A21"></path><path d="M 74 55 Q 82 65 72 70 Q 68 60 74 55 Z" fill="#5C3A21"></path><circle cx="38" cy="55" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="62" cy="55" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="42" cy="48" fill="#111" r="3.5"></circle><circle cx="41" cy="47" fill="#FFF" r="1"></circle><circle cx="58" cy="48" fill="#111" r="3.5"></circle><circle cx="57" cy="47" fill="#FFF" r="1"></circle><polygon fill="#FFCC11" points="50,56 45,50 55,50"></polygon><path d="M 38 36 Q 50 28 62 36 L 58 26 Q 50 22 42 26 Z" fill="#001C3D"></path><ellipse cx="50" cy="36" fill="#001C3D" rx="14" ry="2.5"></ellipse><circle cx="50" cy="30" fill="#FFCC11" r="2.5"></circle><path d="M 42 74 Q 50 78 58 74 L 54 82 L 46 82 Z" fill="#9856FF"></path></svg>`,
        news: [
            { dept: "해양수산과", title: "곽암해수욕장 갯바위 일대 로젤리아(Roselia) 응원 상영회 안전 공지", content: "야간 옥외 상영회 중 갯바위 미끄럼 및 추락 사고가 발생할 수 있으므로, 반드시 지정된 모래사장 스탠딩 존 내에서만 펜라이트를 흔들어 주시기 바랍니다." },
            { dept: "지역경제과", title: "8호선 운양중앙역 공식 굿즈샵 오픈런 지정 대기 구역 및 번호표 배부 안내", content: "" },
            { dept: "도시경관과", title: "평당신도시 마천루 연보라색(#DDBBFF) 야간 경관 조명 일제 점등식", content: "" },
            { dept: "교통행정과", title: "4호선 사야역 인더스트리얼 라이브 하우스 주변 갓길 주차 통제", content: "" }
        ]
    },
    "cheongyeop": {
        name: "청엽구", title: "청엽구청",
        themeColor: "#006699", themeSubColor: "#004D73", themeTextColor: "#FFFFFF", accentColor: "#006699",
        address: "효빈광역시 청엽구 청엽로 51 (청엽1동)", addr: "효빈광역시 청엽구 청엽로 51 (청엽1동)",
        subway: "①③ 청엽구청역",
        headTitle: "구청장", headName: "권상남", phone: "079-781-4920", fax: "079-781-4929", duty: "079-781-4900",
        sloganPre: "푸른 잎에 빵 향기가 물드는 성지, 활력 청엽", sloganRibbon: "푸른 잎에 빵 향기가 물드는 성지, 활력 청엽",
        mascotName: "빵도리", mascotDesc: "청엽 베이커리 거리의 빵 냄새에 매료되어 제빵사로 취직한 참새 마스코트",
        symbols: { flower: "철쭉", tree: "단풍나무", bird: "참새" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#006699" opacity="0.15" r="45"></circle><path d="M 50 15 Q 75 35 50 85 Q 25 35 50 15 Z" fill="#006699" opacity="0.2"></path><circle cx="50" cy="56" fill="#FFF8EE" r="25" stroke="#D8C8B8" stroke-width="1"></circle><ellipse cx="23" cy="58" fill="#8B5A2B" rx="6" ry="11" transform="rotate(20 23 58)"></ellipse><ellipse cx="77" cy="58" fill="#8B5A2B" rx="6" ry="11" transform="rotate(-20 77 58)"></ellipse><path d="M 30 45 Q 50 32 70 45 Q 65 35 50 35 Q 35 35 30 45 Z" fill="#7A4B20"></path><circle cx="40" cy="49" fill="#111" r="3.5"></circle><circle cx="38.5" cy="47.5" fill="#FFF" r="1.2"></circle><circle cx="60" cy="49" fill="#111" r="3.5"></circle><circle cx="58.5" cy="47.5" fill="#FFF" r="1.2"></circle><ellipse cx="33" cy="55" fill="#FF8899" opacity="0.8" rx="3.5" ry="2"></ellipse><ellipse cx="67" cy="55" fill="#FF8899" opacity="0.8" rx="3.5" ry="2"></ellipse><polygon fill="#FF9900" points="50,52 46,57 54,57"></polygon><path d="M 36 34 C 32 24 40 16 50 16 C 60 16 68 24 64 34 Z" fill="#FFFFFF" stroke="#DDD" stroke-width="0.5"></path><rect fill="#006699" height="4" rx="1" width="28" x="36" y="32"></rect><circle cx="50" cy="34" fill="#FFCC11" r="2.5"></circle><path d="M 52 64 L 70 70 L 66 78 L 48 72 Z" fill="#D28C45" stroke="#8B5A2B" stroke-width="0.8"></path><path d="M 54 66 C 58 68 64 70 68 72" fill="none" stroke="#5C3A21" stroke-width="1.5"></path><path d="M 51 70 C 55 72 61 74 65 76" fill="none" stroke="#5C3A21" stroke-width="1.5"></path><path d="M 38 65 Q 50 70 62 65 L 50 75 Z" fill="#006699"></path></svg>`,
        news: [
            { dept: "상권활성화과", title: "제8회 청엽 베이커리 거리 '초코 소라빵 & 메론빵' 페스티벌 개최", content: "청엽지구 일대 40여 개 유서 깊은 빵집이 참여하는 페스티벌이 열립니다. 특정 캐릭터(아오바 모카 등) 지정 굿즈 지참 시 무료 빵 증정 이벤트가 있습니다." },
            { dept: "관광마케팅과", title: "청엽동 아논타워(55층) 야간 관종력 뽐내기 콘테스트 참가자 모집", content: "" },
            { dept: "복지정책과", title: "청엽구청역 '모카의 빵 나눔 냉장고' 동절기 사랑의 빵 후원자 모집", content: "" },
            { dept: "공원녹지과", title: "우전천 맑은 물 산책로 벚꽃나무 식재 및 벤치 추가 설치 공사 안내", content: "" }
        ]
    },
    "changjeon": {
        name: "창전구", title: "창전구청",
        themeColor: "#33AAFF", themeSubColor: "#1188DD", themeTextColor: "#FFFFFF", accentColor: "#33AAFF",
        address: "효빈광역시 창전구 모포로 21 (창전3동)", addr: "효빈광역시 창전구 모포로 21 (창전3동)",
        subway: "① 창전구청역 / ①(지선) 보통역",
        headTitle: "구청장", headName: "전역헌", phone: "079-822-1594", fax: "079-822-1599", duty: "079-822-1500",
        sloganPre: "푸른 날갯짓으로 도약하는 품격, 환상이 현실이 되는 창전", sloganRibbon: "푸른 날갯짓으로 도약하는 품격, 환상이 현실이 되는 창전",
        mascotName: "모르도리", mascotDesc: "모르포 나비와 Morfonica의 몽환적인 감성을 결합한 창전구 공식 요정 마스코트",
        symbols: { flower: "부레옥잠", tree: "자작나무", bird: "흰머리수리" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#33AAFF" opacity="0.18" r="45"></circle><circle cx="50" cy="50" fill="none" opacity="0.6" r="35" stroke="#33AAFF" stroke-dasharray="3,3" stroke-width="0.8"></circle><path d="M 45 45 Q 15 15 10 38 Q 8 52 35 55 Z" fill="#33AAFF" stroke="#0055AA" stroke-width="1"></path><path d="M 55 45 Q 85 15 90 38 Q 92 52 65 55 Z" fill="#33AAFF" stroke="#0055AA" stroke-width="1"></path><path d="M 40 43 Q 20 25 18 38 Q 16 45 35 50 Z" fill="#88D4FF" opacity="0.7"></path><path d="M 60 43 Q 80 25 82 38 Q 84 45 65 50 Z" fill="#88D4FF" opacity="0.7"></path><path d="M 40 55 Q 15 75 25 85 Q 35 88 45 68 Z" fill="#1188DD" stroke="#004488" stroke-width="1"></path><path d="M 60 55 Q 85 75 75 85 Q 65 88 55 68 Z" fill="#1188DD" stroke="#004488" stroke-width="1"></path><ellipse cx="50" cy="58" fill="#FFFFFF" rx="8" ry="16" stroke="#33AAFF" stroke-width="1.2"></ellipse><circle cx="50" cy="38" fill="#FFFFFF" r="11" stroke="#33AAFF" stroke-width="1.2"></circle><path d="M 46 28 Q 40 18 36 20" fill="none" stroke="#33AAFF" stroke-linecap="round" stroke-width="1.5"></path><circle cx="36" cy="20" fill="#0055AA" r="2"></circle><path d="M 54 28 Q 60 18 64 20" fill="none" stroke="#33AAFF" stroke-linecap="round" stroke-width="1.5"></path><circle cx="64" cy="20" fill="#0055AA" r="2"></circle><circle cx="46" cy="38" fill="#003366" r="2.2"></circle><circle cx="45" cy="37" fill="#FFF" r="0.8"></circle><circle cx="54" cy="38" fill="#003366" r="2.2"></circle><circle cx="53" cy="37" fill="#FFF" r="0.8"></circle><ellipse cx="42" cy="41" fill="#FF8899" opacity="0.7" rx="2.5" ry="1.5"></ellipse><ellipse cx="58" cy="41" fill="#FF8899" opacity="0.7" rx="2.5" ry="1.5"></ellipse><path d="M 48 42 Q 50 44 52 42" fill="none" stroke="#003366" stroke-width="1"></path><circle cx="50" cy="53" fill="#0055AA" r="4"></circle><path d="M 48 52 Q 50 50 52 52 Q 50 55 48 52 Z" fill="#88D4FF"></path><path d="M 57 55 L 75 40" stroke="#333" stroke-width="1.2"></path><polygon fill="#33AAFF" points="75,40 75,50 85,45"></polygon></svg>`,
        news: [
            { dept: "공원관리과", title: "창전 블루 로즈 가든(창전공원) 푸른 장미 개화 시기 및 관람 예절 안내", content: "창전구의 품격을 상징하는 푸른 장미가 만개하였습니다. 아름다운 관람 문화를 위해 화단 내 무단 진입 및 무질서한 코스프레 촬영을 엄격히 금지합니다." },
            { dept: "문화예술과", title: "창전선 광역전철 무사 개통 기원 '모르포니카' 헌정 클래식 교향악단 초청 공연", content: "" },
            { dept: "교통행정과", title: "월삼여고 인근 스쿨존 스마트 횡단보도 및 불법 주정차 단속 카메라 설치 완료", content: "" },
            { dept: "평생교육과", title: "창전구 시민 예술 아카데미 '아름다운 바이올린 첫걸음' 수강생 모집", content: "" }
        ]
    },
    "ancheon": {
        name: "안천구", title: "안천구청",
        themeColor: "#AA66DD", themeSubColor: "#8844BB", themeTextColor: "#FFFFFF", accentColor: "#AA66DD",
        address: "효빈광역시 안천구 안천중앙로 52 (안천6동)", addr: "효빈광역시 안천구 안천중앙로 52 (안천6동)",
        subway: "① 팔망성역",
        headTitle: "구청장", headName: "이규희", phone: "079-915-7732", fax: "079-915-7739", duty: "079-915-7700",
        sloganPre: "덕심으로 하나 되는 안천, 현실이 되는 2.5차원 테마도시", sloganRibbon: "덕심으로 하나 되는 안천, 현실이 되는 2.5차원 테마도시",
        mascotName: "안두리", mascotDesc: "안천구의 구조(區鳥)인 두루미에 초음 대파와 사쿠라 핑크 스카프를 매치한 마스코트",
        symbols: { flower: "산세베리아", tree: "오동나무", bird: "두루미" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#AA66DD" opacity="0.2" r="45"></circle><path d="M 38 85 Q 32 62 44 45 Q 48 32 56 34 Q 62 44 52 62 Q 45 76 47 85 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="1"></path><circle cx="53" cy="27" fill="#FFFFFF" r="9" stroke="#D0D0D0" stroke-width="0.5"></circle><circle cx="53" cy="18" fill="#D81C2F" r="2"></circle><path d="M 46 26 Q 50 23 52 27" fill="none" stroke="#111" stroke-width="1.8"></path><path d="M 47 29 Q 50 32 53 29" fill="none" stroke="#111" stroke-width="1.5"></path><polygon fill="#FF9900" points="46,28 32,32 46,35"></polygon><path d="M 44 52 L 48 58 L 52 52" fill="none" stroke="#FF5522" stroke-linecap="round" stroke-width="2"></path><circle cx="55" cy="50" fill="#00CCAA" r="2.5"></circle><path d="M 42 65 L 22 50 Q 15 42 24 45 Q 28 48 35 62 Z" fill="#00CCAA"></path><path d="M 42 65 L 36 58 L 39 56 L 45 62 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="0.5"></path><path d="M 46 36 Q 50 42 54 36 L 58 48 L 48 46 Z" fill="#FF8899"></path></svg>`,
        news: [
            { dept: "농업지원과", title: "초음동 대파 농가 돕기 및 하츠네 미쿠 콜라보 라이브 축제 성료", content: "우리 구 자랑인 초음 대파의 우수성을 널리 알리기 위한 콜라보 축제가 성황리에 마무리되었습니다. 참가자 전원에게는 7호선 사쿠라 핑크 트램 기념 승차권이 배송될 예정입니다." },
            { dept: "공원녹지과", title: "이자공원 야간 펜라이트 응원 에티켓 준수 캠페인 및 안전 요원 배치", content: "" },
            { dept: "도시계획과", title: "안천구 2.5차원 테마도시 고도화 사업을 위한 주민 아이디어 공모전", content: "" },
            { dept: "관광진흥과", title: "타천마을 입구 심사대 리뉴얼 공사 완료 및 굿즈 인증 포토존 개장", content: "" }
        ]
    },
    "tanseong": {
        name: "탄성군", title: "탄성군청",
        themeColor: "#BBFF64", themeSubColor: "#559900", themeTextColor: "#1A3300", accentColor: "#559900",
        address: "효빈광역시 탄성군 탄성읍 공리 24", addr: "효빈광역시 탄성군 탄성읍 공리 24",
        subway: "①(지선) 탄성군청역",
        headTitle: "군수", headName: "성선설", phone: "079-134-8821", fax: "079-134-8829", duty: "079-134-8800",
        sloganPre: "낭만이 공명하는 탄력 도시, 환상이 현실이 되는 탄성", sloganRibbon: "낭만이 공명하는 탄력 도시, 환상이 현실이 되는 탄성",
        mascotName: "탄도리", mascotDesc: "탄성군의 군조(郡鳥)인 딱따구리에 귤 뱃지와 라임 그린 야광봉을 들린 마스코트",
        symbols: { flower: "복사꽃", tree: "고무나무", bird: "딱따구리" },
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#BBFF64" opacity="0.3" r="45"></circle><path d="M 30 15 L 70 15 C 70 50 65 75 50 88 C 35 75 30 50 30 15 Z" fill="#66CCFF" opacity="0.25"></path><circle cx="50" cy="48" fill="none" opacity="0.4" r="24" stroke="#0099DD" stroke-dasharray="4,2" stroke-width="1.5"></circle><path d="M 35 75 C 25 55 35 35 50 35 C 65 35 75 55 65 75 Z" fill="#FFFFFF" stroke="#333" stroke-width="1"></path><ellipse cx="32" cy="58" fill="#333333" rx="6" ry="14" transform="rotate(15 32 58)"></ellipse><ellipse cx="68" cy="58" fill="#333333" rx="6" ry="14" transform="rotate(-15 68 58)"></ellipse><ellipse cx="32" cy="58" fill="#BBFF64" rx="3" ry="8" transform="rotate(15 32 58)"></ellipse><ellipse cx="68" cy="58" fill="#BBFF64" rx="3" ry="8" transform="rotate(-15 68 58)"></ellipse><circle cx="50" cy="32" fill="#FFFFFF" r="14" stroke="#333" stroke-width="1"></circle><path d="M 40 22 C 45 12 55 12 60 22 Z" fill="#FF3333"></path><rect fill="#0099DD" height="4" rx="2" width="28" x="36" y="22"></rect><circle cx="50" cy="24" fill="#FF8800" r="3"></circle><path d="M 49 21 C 50 19 52 21 51 22" fill="none" stroke="#559900" stroke-width="1"></path><circle cx="44" cy="32" fill="#111" r="3"></circle><circle cx="43" cy="31" fill="#FFF" r="1"></circle><circle cx="56" cy="32" fill="#111" r="3"></circle><circle cx="55" cy="31" fill="#FFF" r="1"></circle><ellipse cx="38" cy="36" fill="#FF6688" opacity="0.7" rx="3" ry="1.8"></ellipse><ellipse cx="62" cy="36" fill="#FF6688" opacity="0.7" rx="3" ry="1.8"></ellipse><polygon fill="#FFCC00" points="50,34 44,42 56,42" stroke="#CC9900" stroke-width="0.5"></polygon><path d="M 45 50 L 55 50 C 55 60 53 66 50 70 C 47 66 45 60 45 50 Z" fill="#66CCFF" stroke="#0055AA" stroke-width="0.8"></path><circle cx="50" cy="57" fill="none" r="3.5" stroke="#FFFFFF" stroke-width="1.2"></circle><path d="M 22 45 L 30 52" stroke="#666" stroke-linecap="round" stroke-width="3"></path><rect fill="#BBFF64" height="18" rx="4" stroke="#559900" stroke-width="1" transform="rotate(-25 20 39)" width="8" x="16" y="30"></rect><line stroke="#FFFFFF" stroke-linecap="round" stroke-width="2" x1="18" x2="22" y1="33" y2="43"></line></svg>`,
        news: [
            { dept: "문화관광과", title: "도변읍 애니메이트 앞 야광봉(블레이드) 릴레이 댄스 페스티벌 개최", content: "우리 군의 명물 오타케이지(오타게) 문화를 알리기 위한 페스티벌입니다. 라임 그린(#BBFF64) 형광봉 지참 시 야간 프리패스권이 증정됩니다." },
            { dept: "농정유통과", title: "고해읍 특산물 '치카 귤(미칸)' 한정판 패키지 사전 예약 폭주에 따른 2차 판매 안내", content: "" },
            { dept: "지역경제과", title: "흑택면 루비지구 호수공원 푸드트럭 야시장 동절기 운영 단축 안내", content: "" },
            { dept: "해양수산과", title: "승남해수욕장 아쿠아(Aqours) 테마 해변 휴양지 조성 사업 주민 설명회", content: "" }
        ]
    }
};