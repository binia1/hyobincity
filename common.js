// 1. 공통 헤더 & 네비게이션 (PC 드롭다운 포함)
const headerHTML = `
    <!-- 1. 최상단 헤더 -->
    <header class="bg-[#1e293b] text-white">
        <div class="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            <div class="flex items-center cursor-pointer gap-3" onclick="location.href='index.html'">
                <img src="logo.png" alt="효빈광역시 로고" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                <span class="text-2xl font-bold tracking-wider">효빈광역시</span>
            </div>

            <div class="flex items-center space-x-5 text-gray-300">
                <button onclick="openSearch()" class="hover:text-white transition"><i data-lucide="search" class="w-6 h-6"></i></button>
                <button id="dark-mode-toggle" class="hover:text-white transition" onclick="toggleDarkMode()"><i data-lucide="moon" class="w-6 h-6"></i></button>
                <button onclick="changeLanguage()" class="hover:text-white transition"><i data-lucide="globe" class="w-6 h-6"></i></button>
                <button onclick="toggleMenu()" class="hover:text-white transition"><i data-lucide="menu" class="w-6 h-6"></i></button>
            </div>
        </div>
    </header>

    <!-- 2. 메인 내비게이션 (PC용 드롭다운 적용 - 스크롤바 제거 및 오버레이 해결) -->
    <nav class="bg-[#172554] text-white border-t border-slate-700 shadow-md relative z-40 hidden md:block">
        <div class="max-w-6xl mx-auto px-4">
            <ul class="flex justify-center items-center text-[16px] font-medium tracking-tight whitespace-nowrap md:justify-center">
                <!-- 민원 -->
<li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='civil.html'">민원</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-44 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="civil.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">온라인 민원신청</a>
                        <a href="passport.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">여권발급</a>
                        <a href="waste.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">대형폐기물 신고</a>
                        <a href="tax.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">지방세 납부</a>
                        <a href="contact.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">문의</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>
                
                <!-- 효빈소개 -->
                <li class="group relative px-4 py-4 cursor-pointer font-bold">
                    <span class="text-blue-300 transition block" onclick="location.href='intro.html'">효빈소개</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-40 bg-white text-slate-800 font-normal shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="intro.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">기본현황</a>
                        <a href="city_hall.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">시청안내</a>
                        <a href="mascot.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">시의 상징</a>
                        <a href="history.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">효빈의 역사</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>
                
                <!-- 시정소식 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='news.html'">시정소식</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-40 bg-white text-slate-800 font-normal shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="news.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">새소식</a>
                        <a href="official_notice.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">고시&공고</a>
                        <a href="press_release.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">보도자료</a>
                        <a href="construction.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">공사알림</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>

                <!-- 생활정보 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='life.html'">생활정보</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-40 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="보건의료.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">보건/의료</a>
                        <a href="library.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">교육/도서관</a>
                        <a href="환경청소.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">환경/청소</a>
                        <a href="재난안전.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">재난/안전</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>


                <!-- 교통 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='transport.html'">교통</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="bus.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">효빈시내버스 안내</a>
                        <a href="subway.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">도시철도(1~8호선)</a>
                        <a href="airport.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">효빈국제공항</a>
                        <a href="port.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">효빈항</a>
                        <a href="교통약자지원.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">교통약자지원</a>
                        <a href="parking.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">공영주차장 안내</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>
                
                <!-- 복지 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='welfare.html'">복지</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-44 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="맞춤형복지.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">맞춤형 복지</a>
                        <a href="노인장애인복지.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">노인/장애인 복지</a>
                        <a href="child.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">보육포털</a>
                        <a href="여성가족.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">여성/가족</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>

                <!-- 일자리 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='job.html'">일자리</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-40 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="job.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">일자리센터</a>
                        <a href="공공근로채용.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">공공근로 채용</a>
                        <a href="창업지원.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">창업지원</a>
                        <a href="직업훈련.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">직업훈련</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>

                <!-- 관광 -->
                <li class="group relative px-4 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='tour.html'">관광</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white text-slate-800 shadow-lg border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50">
                        <a href="tour.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">효빈 관광지도</a>
                        <a href="HAF축제.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">HAF (애니 축제)</a>
                        <a href="효빈시티투어.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] border-b border-slate-100 transition">효빈 시티투어</a>
                        <a href="vr.html" class="px-4 py-2.5 hover:bg-blue-50 hover:text-blue-600 text-[14px] transition rounded-b-lg">VR 랜드마크 투어</a>
                    </div>
                </li>
                <li class="text-slate-600 text-xs hidden md:block">|</li>

                <!-- 행정구역 검색 -->
                <li class="group relative px-4 py-4 cursor-pointer font-bold flex items-center gap-1">
                    <i data-lucide="search" class="w-4 h-4 group-hover:text-blue-300 transition"></i> 
                    <span class="hover:text-blue-300 transition block" onclick="location.href='district_search.html'">행정구역 검색</span>
                    <div class="absolute right-0 top-full mt-0 w-72 bg-white text-slate-800 font-normal shadow-xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-y-0 group-hover:scale-y-100 flex flex-col z-50 p-3">
                        <p class="text-xs text-slate-400 font-bold mb-2 border-b pb-1">효빈광역시 행정구역</p>
                        <div class="grid grid-cols-3 gap-2">
                            <a href="북구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">북구</a>
                            <a href="중구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">중구</a>
                            <a href="동구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">동구</a>
                            <a href="서구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">서구</a>
                            <a href="남구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">남구</a>
                            <a href="탄성군.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">탄성군</a>
                            <a href="창전구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">창전구</a>
                            <a href="청엽구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">청엽구</a>
                            <a href="안천구.html" class="px-2 py-1.5 hover:bg-blue-50 hover:text-blue-600 text-[13px] rounded text-center transition">안천구</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
`;

// 2. 공통 푸터
const footerHTML = `
    <footer class="bg-white border-t border-slate-200 mt-auto pt-10 pb-12 text-[13px] tracking-tight relative z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-slate-100 pb-6">
                <div class="flex flex-wrap gap-x-6 gap-y-2 font-medium text-slate-600 justify-center md:justify-start">
                    <a href="개인정보처리방침.html" class="text-[#2563eb] font-bold hover:underline" data-policy="privacy">개인정보처리방침</a>
                    <a href="저작권정책.html" class="hover:text-slate-900 hover:underline" data-policy="copyright">저작권정책</a>
                    <a href="영상정보처리기기운영방침.html" class="hover:text-slate-900 hover:underline" data-policy="cctv">영상정보처리기기 운영방침</a>
                    <a href="뷰어내려받기.html" class="hover:text-slate-900 hover:underline" data-policy="viewer">뷰어내려받기</a>
                    <a href="누리집오류신고.html" class="hover:text-slate-900 hover:underline" data-policy="error">누리집 오류신고</a>
                    <a href="찾아오시는길.html" class="hover:text-slate-900 hover:underline" data-policy="directions">오시는 길</a>
                </div>
                <div class="flex items-center gap-2 w-full md:w-auto justify-end">
                    <select id="family-site" class="border border-slate-300 rounded px-3 py-1.5 text-slate-600 outline-none hover:border-slate-400 transition bg-white w-full md:w-48">
                        <option value="">유관기관 바로가기</option>
                        <optgroup label="산하기관">
                            <option value="HyobinMetro/index.html">효빈교통공사</option>
                            <option value="culture_foundation.html">효빈문화공단</option>
                            <option value="animation_hq.html">효빈애니메이션본부</option>
                            <option value="water_sewage.html">효빈상하수도본부</option>
                            <option value="city_dev_corp.html">효빈도시공사</option>
                            <option value="facility_corp.html">효빈시설공단</option>
                        </optgroup>
                        <optgroup label="유관기관">
                            <option value="city_council.html">효빈시의회</option>
                            <option value="education_office.html">효빈교육청</option>
                            <option value="police_agency.html">효빈경찰청</option>
                            <option value="fire_dept.html">효빈소방본부</option>
                            <option value="terminal.html">효빈종합버스터미널</option>
                        </optgroup>
                        <optgroup label="보건소">
                            <option value="bukgu_health.html">북구보건소</option>
                            <option value="junggu_health.html">중구보건소</option>
                            <option value="donggu_health.html">동구보건소</option>
                            <option value="seogu_health.html">서구보건소</option>
                            <option value="namgu_health.html">남구보건소</option>
                            <option value="tangun_health.html">탄성군보건소</option>
                            <option value="changjeongu_health.html">창전구보건소</option>
                            <option value="cheongyeopgu_health.html">청엽구보건소</option>
                            <option value="ancheongu_health.html">안천구보건소</option>
                        </optgroup>
                        <optgroup label="시민 참여/커뮤니티">
                            <option value="hyobin_wiki.html" class="font-bold text-blue-600">★ 효빈위키 (HyobinWiki)</option>
                        </optgroup>
                    </select>
                    <button onclick="goFamilySite()" class="bg-slate-700 text-white px-3 py-1.5 rounded hover:bg-slate-800 transition font-bold whitespace-nowrap shrink-0">이동</button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-end md:items-start gap-8">
                <div class="text-slate-500 space-y-2 leading-relaxed flex-grow w-full md:w-auto">
                    <p class="text-slate-600"><span class="mr-2">(우) 79791</span><span>효빈광역시 북구 효빈로 79(고송8동)</span></p>
                    <div class="flex flex-wrap gap-x-6 gap-y-1">
                        <span class="flex items-center"><strong class="text-slate-700 font-bold mr-2">대표전화</strong><span>079-591-2548</span></span>
                        <span class="text-slate-400">월~금 : 08:30~18:30 (시간외는 당직실로 연결)</span>
                    </div>
                    <div class="flex flex-wrap gap-x-6 gap-y-1">
                        <span class="flex items-center"><strong class="text-slate-700 font-bold mr-2">팩스</strong><span>079-591-2547</span></span>
                        <span class="flex items-center"><strong class="text-slate-700 font-bold mr-2">당직실</strong><span>079-591-2546</span><span class="text-slate-400 ml-2">(야간, 공휴일)</span></span>
                    </div>
                    <p class="text-slate-400 mt-6 font-light font-sans">COPYRIGHT © 2026 HYOBIN CITY. ALL RIGHTS RESERVED.</p>
                </div>
                <div class="flex items-center space-x-3 flex-shrink-0">
                    <div class="h-14 w-auto flex items-center">
                         <img src="logo.png" alt="하단 로고" class="h-full w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                         <div class="w-32 h-14 border border-slate-200 rounded-lg bg-white hidden items-center justify-center text-slate-400 text-xs font-bold shadow-sm">[로고 이미지]</div>
                    </div>
                    <div class="border border-slate-200 rounded-lg p-2 bg-white flex items-center space-x-2 shadow-sm h-14 cursor-pointer hover:border-green-500 transition">
                        <div class="relative w-16 h-full border-2 border-green-600 rounded-md flex items-center justify-center overflow-hidden bg-white">
                            <span class="font-black text-green-700 text-lg italic z-10">WA</span>
                            <div class="absolute bottom-0 w-full bg-green-600 h-2.5 flex items-center justify-center"><span class="text-[6px] text-white font-bold leading-none">WEB 접근성</span></div>
                        </div>
                        <div class="text-[9px] text-slate-400 flex flex-col justify-center leading-tight"><span>과학기술정보통신부</span><span class="font-bold text-slate-600">WEB 접근성</span><span>품질인증마크 획득</span></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

// 3. 공통 모달 (검색창, 사이드바 아코디언 메뉴 등)
const modalsHTML = `
    <!-- 검색 모달 -->
    <div id="search-overlay" class="fixed inset-0 z-50 hidden bg-black bg-opacity-80 flex items-start justify-center p-4 pt-20" onclick="closeOverlay('search-overlay', 'search-content-wrapper')">
        <div class="w-full max-w-4xl transform transition-all duration-300 scale-95 opacity-0" id="search-content-wrapper" onclick="event.stopPropagation()">
            <div class="bg-white dark:bg-gray-700 rounded-xl shadow-2xl overflow-hidden">
                <div class="p-6">
                    <div class="flex items-center space-x-4">
                        <input type="text" id="header-search-input" placeholder="검색어를 입력하세요..." class="flex-grow p-4 text-xl border-2 border-blue-500 rounded-lg outline-none focus:border-blue-700 dark:bg-gray-800 dark:text-white dark:border-blue-400">
                        <button class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition shrink-0" onclick="executeSearch()">
                            <i data-lucide="search" class="w-7 h-7"></i>
                        </button>
                        <button onclick="closeOverlay('search-overlay', 'search-content-wrapper')" class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition shrink-0">
                            <i data-lucide="x" class="w-7 h-7"></i>
                        </button>
                    </div>
                </div>
                <div class="p-6 pt-0 text-slate-500 dark:text-gray-400 text-sm">
                    <p>예시: 시정뉴스, 효빈도서관, 평생학습</p>
                </div>
                <div class="border-t border-slate-200 dark:border-gray-600">
                    <div class="p-6">
                        <div class="flex items-center justify-between mb-3">
                            <p class="text-sm text-slate-500 dark:text-gray-300">검색 결과: <span id="search-result-count" class="font-bold">0</span>건</p>
                            <button class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-white underline" onclick="clearSearchResults()">결과 지우기</button>
                        </div>
                        <div id="search-result-list" class="space-y-3"></div>
                        <div id="search-empty-state" class="hidden mt-6 text-center text-slate-500 dark:text-gray-300">
                            <p class="font-bold">검색 결과가 없습니다.</p>
                            <p class="text-sm mt-1">다른 검색어로 다시 시도해 주세요.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 다국어 모달 -->
    <div id="language-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center p-4" onclick="closeOverlay('language-modal', 'language-content-wrapper')">
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 scale-95 opacity-0" id="language-content-wrapper" onclick="event.stopPropagation()">
            <div class="sticky top-0 bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl z-10">
                <h3 class="text-xl font-bold">언어 선택 (Language)</h3>
                <button onclick="closeOverlay('language-modal', 'language-content-wrapper')" class="text-white hover:text-blue-200 transition">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <div class="p-4 grid grid-cols-2 gap-2 text-center">
                <button class="lang-btn bg-blue-100 text-blue-800 font-bold p-3 rounded-lg hover:bg-blue-200 transition dark:bg-blue-900 dark:text-blue-200" onclick="setLanguage('ko')">한국어 (Korean)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition dark:bg-gray-600 dark:text-white" onclick="setLanguage('en')">English</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition dark:bg-gray-600 dark:text-white" onclick="setLanguage('zh')">중국어 (Chinese)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition dark:bg-gray-600 dark:text-white" onclick="setLanguage('ja')">일본어 (Japanese)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition dark:bg-gray-600 dark:text-white" onclick="setLanguage('tl')">Tagalog (따갈로그어)</button>
            </div>
        </div>
    </div>

    <!-- 모바일 전체 메뉴 사이드바 (아코디언 구조 100% 반영) -->
    <div id="full-menu-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-70 flex items-start justify-end" onclick="closeOverlay('full-menu-modal', 'full-menu-content-wrapper')">
        <div class="bg-white dark:bg-gray-800 w-full max-w-sm h-full shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="full-menu-content-wrapper" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center p-6 border-b border-slate-200 dark:border-gray-700 shrink-0">
                <h3 class="text-2xl font-black text-blue-700 dark:text-blue-400">전체 메뉴</h3>
                <button onclick="closeOverlay('full-menu-modal', 'full-menu-content-wrapper')" class="text-slate-500 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white transition">
                    <i data-lucide="x" class="w-7 h-7"></i>
                </button>
            </div>
            <div class="overflow-y-auto flex-grow p-4 custom-scrollbar">
                <ul class="space-y-1 font-semibold text-lg text-slate-700 dark:text-gray-200">
                    
                    <!-- 민원 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            민원 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="civil.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">민원 홈 바로가기</a></li>
                            <li><a href="civil.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">온라인 민원신청</a></li>
                            <li><a href="passport.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">여권발급</a></li>
                            <li><a href="waste.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">대형폐기물 신고</a></li>
                            <li><a href="tax.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">지방세 납부</a></li>
                        </ul>
                    </li>
                    
                    <!-- 효빈소개 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            효빈소개 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="intro.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">효빈소개 홈 바로가기</a></li>
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">
                                    일반현황 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-600 ml-2">
                                    <li><a href="intro.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">기본현황</a></li>
                                    <li><a href="행정구역로마자표기법.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">행정구역로마자표기법</a></li>
                                    <li><a href="행정구역.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">행정구역</a></li>
                                    <li><a href="sister_cities.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">해외자매도시</a></li>
                                </ul>
                            </li>
                            <li><a href="시정구호.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시정구호</a></li>
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">
                                    시청안내 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-600 ml-2">
                                    <li><a href="행정조직도.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">행정조직도</a></li>
                                    <li><a href="정원기구현황.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">정원/기구현황</a></li>
                                    <li><a href="행정전화번호.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">행정전화번호</a></li>
                                    <li><a href="행정팩스번호.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">행정팩스번호</a></li>
                                    <li><a href="city_hall.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">청사안내</a></li>
                                    <li><a href="찾아오시는길.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">찾아오시는길</a></li>
                                </ul>
                            </li>
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">
                                    시의상징 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-600 ml-2">
                                    <li><a href="시조시화시목.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시조/시화/시목</a></li>
                                    <li><a href="mascot.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">상징물</a></li>
                                    <li><a href="mascot.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">소통캐릭터</a></li>
                                    <li><a href="시민의날.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시민의날</a></li>
                                    <li><a href="효빈문화울림체.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">효빈문화울림체</a></li>
                                    <li><a href="시민의노래.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시민의노래</a></li>
                                </ul>
                            </li>
                            <li><a href="홍보영상.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">홍보영상</a></li>
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">
                                    효빈통계 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-600 ml-2">
                                    <li><a href="통계연보.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">통계연보</a></li>
                                    <li><a href="인구통계.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">인구통계</a></li>
                                    <li><a href="경제통계.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">경제통계</a></li>
                                    <li><a href="효빈사회조사.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">효빈사회조사</a></li>
                                    <li><a href="지역통계.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">지역통계</a></li>
                                    <li><a href="통계조사.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">통계조사</a></li>
                                    <li><a href="시정백서.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시정백서</a></li>
                                    <li><a href="주요수상내역.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">주요수상내역</a></li>
                                </ul>
                            </li>
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">
                                    효빈의역사 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-gray-500 dark:text-gray-400 border-l border-gray-200 dark:border-gray-600 ml-2">
                                    <li><a href="mayor.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">역대시장</a></li>
                                    <li><a href="history.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">효빈의유래와연혁</a></li>
                                    <li><a href="향토자료.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">향토자료</a></li>
                                    <li><a href="세계속의효빈.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">세계속의효빈</a></li>
                                    <li><a href="문화수도효빈.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">문화수도효빈</a></li>
                                </ul>
                            </li>
                            <li><a href="ebook.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">ebook</a></li>
                            <li><a href="시청각자료실.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400">시청각자료실</a></li>
                        </ul>
                    </li>
                    
                    <!-- 시정소식 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            시정소식 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="news.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">시정소식 홈 바로가기</a></li>
                            <li><a href="news.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">새소식</a></li>
                            <li><a href="official_notice.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">고시&공고</a></li>
                            <li><a href="press_release.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">보도자료</a></li>
                            <li><a href="construction.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">공사알림</a></li>
                        </ul>
                    </li>

                    <!-- 생활정보 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            생활정보 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="life.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">생활정보 홈 바로가기</a></li>
                            <li><a href="보건의료.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">보건/의료</a></li>
                            <li><a href="library.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">교육/도서관</a></li>
                            <li><a href="환경청소.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">환경/청소</a></li>
                            <li><a href="재난안전.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">재난/안전</a></li>
                        </ul>
                    </li>

                    <!-- 교통 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            교통 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="transport.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">교통 홈 바로가기</a></li>
                            <li><a href="bus.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">효빈시내버스 안내</a></li>
                            <li><a href="subway.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">도시철도(1~8호선)</a></li>
                            <li><a href="교통약자지원.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">교통약자지원</a></li>
                            <li><a href="parking.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">공영주차장 안내</a></li>
                        </ul>
                    </li>
                    
                    <!-- 복지 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            복지 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="welfare.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">복지 홈 바로가기</a></li>
                            <li><a href="맞춤형복지.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">맞춤형 복지</a></li>
                            <li><a href="노인장애인복지.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">노인/장애인 복지</a></li>
                            <li><a href="child.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">보육포털</a></li>
                            <li><a href="여성가족.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">여성/가족</a></li>
                        </ul>
                    </li>

                    <!-- 일자리 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            일자리 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="job.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">일자리 홈 바로가기</a></li>
                            <li><a href="job.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">일자리센터</a></li>
                            <li><a href="공공근로채용.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">공공근로 채용</a></li>
                            <li><a href="창업지원.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">창업지원</a></li>
                            <li><a href="직업훈련.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">직업훈련</a></li>
                        </ul>
                    </li>

                    <!-- 관광 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            관광 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="tour.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">관광 홈 바로가기</a></li>
                            <li><a href="tour.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">효빈 관광지도</a></li>
                            <li><a href="HAF축제.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">HAF (애니 축제)</a></li>
                            <li><a href="효빈시티투어.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">효빈 시티투어</a></li>
                            <li><a href="vr.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">VR 랜드마크 투어</a></li>
                        </ul>
                    </li>

                    <!-- 행정구역 검색 아코디언 -->
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            행정구역 검색 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-base text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 dark:border-gray-600 ml-3">
                            <li><a href="district_search.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-blue-700 dark:text-blue-400">행정구역 홈 바로가기</a></li>
                            <li><a href="북구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">북구</a></li>
                            <li><a href="중구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">중구</a></li>
                            <li><a href="동구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">동구</a></li>
                            <li><a href="서구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">서구</a></li>
                            <li><a href="남구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">남구</a></li>
                            <li><a href="탄성군.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">탄성군</a></li>
                            <li><a href="창전구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">창전구</a></li>
                            <li><a href="청엽구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">청엽구</a></li>
                            <li><a href="안천구.html" class="block p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">안천구</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div id="policy-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center p-4" onclick="closeModal()">
        <div id="modal-content-wrapper" class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0" onclick="event.stopPropagation()">
            <div class="sticky top-0 bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl z-10">
                <h3 id="modal-title" class="text-xl font-bold">제목</h3>
                <button onclick="closeModal()" class="text-white hover:text-blue-200 transition">
                    <i data-lucide="x" class="w-6 h-6"></i>
                </button>
            </div>
            <div id="modal-content" class="p-6 text-slate-700 dark:text-gray-300 space-y-4">
                <!-- Content will be injected here -->
            </div>
        </div>
    </div>
`;

// 4. 화면 로드 시 자동 삽입 스크립트
document.addEventListener("DOMContentLoaded", function() {
    // 기존 하드코딩된 모달창 정리 (충돌 방지)
    const oldModals = ['search-overlay', 'language-modal', 'full-menu-modal', 'policy-modal'];
    oldModals.forEach(id => {
        const oldEl = document.getElementById(id);
        if (oldEl && !oldEl.closest('#common-modals')) oldEl.remove();
    });

    if(document.getElementById('common-header')) document.getElementById('common-header').innerHTML = headerHTML;
    if(document.getElementById('common-footer')) document.getElementById('common-footer').innerHTML = footerHTML;
    if(document.getElementById('common-modals')) document.getElementById('common-modals').innerHTML = modalsHTML;
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// 5. 모바일 아코디언 메뉴 동작 (스크롤 버그 및 UX 개선 완료)
window.toggleMobileMenu = function(btn) {
    const submenu = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const currentLi = btn.parentElement;
    const parentUl = currentLi.parentElement;
    
    if (submenu.classList.contains('hidden')) {
        // 1. 다른 열려있는 형제 메뉴들 닫기 (자동 닫힘 기능)
        Array.from(parentUl.children).forEach(li => {
            if (li !== currentLi && li.tagName === 'LI') {
                const siblingBtn = li.querySelector('button');
                if (siblingBtn) {
                    const siblingSub = siblingBtn.nextElementSibling;
                    const siblingIcon = siblingBtn.querySelector('i');
                    if (siblingSub && siblingSub.tagName === 'UL' && !siblingSub.classList.contains('hidden')) {
                        siblingSub.classList.add('hidden');
                        if (siblingIcon) siblingIcon.classList.remove('rotate-180');
                    }
                }
            }
        });

        // 2. 선택한 메뉴 열기
        submenu.classList.remove('hidden');
        icon.classList.add('rotate-180');
        
        // 3. 스크롤바가 생겨서 가려지는 문제 해결: 열린 메뉴 상단으로 부드럽게 스크롤
        setTimeout(() => {
            btn.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);

    } else {
        // 닫기
        submenu.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
};