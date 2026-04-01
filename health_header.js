/* =========================================
   health_header.js
   - 효빈광역시 보건·의료 통합포털 전용 커스텀 헤더
   - 광주광역시 보건/위생/의료 분야 브레드크럼 완벽 반영
   ========================================= */

const healthHeaderHTML = `
    <!-- 상단 유틸리티 바 -->
    <div class="bg-slate-100 text-slate-600 text-xs border-b border-slate-200 relative z-50">
        <div class="max-w-7xl mx-auto px-4 h-9 flex justify-between items-center">
            <div>
                <a href="index.html" class="hover:text-sky-600 transition font-bold flex items-center gap-1">
                    <i data-lucide="arrow-left" class="w-3 h-3"></i> 효빈광역시청 본청 바로가기
                </a>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="hover:text-sky-600 transition">로그인</a>
                <a href="#" class="hover:text-sky-600 transition">회원가입</a>
                <a href="#" class="hover:text-sky-600 transition">사이트맵</a>
            </div>
        </div>
    </div>

    <!-- 메인 헤더 & 네비게이션 (포털 전용 GNB) -->
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
            <!-- 로고 영역 -->
            <div class="flex items-center cursor-pointer gap-3" onclick="location.href='보건의료.html'">
                <div class="w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md transform transition hover:scale-105">
                    <i data-lucide="cross" class="w-6 h-6 fill-white"></i>
                </div>
                <div class="flex flex-col justify-center">
                    <span class="text-[0.7rem] font-bold text-sky-600 leading-none mb-1">효빈광역시</span>
                    <span class="text-xl font-black text-slate-800 leading-none tracking-tight">보건·의료 통합포털</span>
                </div>
            </div>

            <!-- GNB (메인 메뉴) - 광주광역시 보건의료 카테고리 융합 -->
            <nav class="hidden md:flex space-x-2">
                
                <!-- 1. 공공보건의료 -->
                <div class="group relative px-4 py-7 cursor-pointer">
                    <span class="font-bold text-[16px] text-slate-800 group-hover:text-sky-600 transition">공공보건의료</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white border-t-2 border-sky-600 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">보건소/보건지소 안내</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">응급의료기관</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">달빛어린이병원</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">공공심야약국</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium transition-colors">자동심장충격기(AED)</a>
                    </div>
                </div>
                
                <!-- 2. 건강증진 -->
                <div class="group relative px-4 py-7 cursor-pointer">
                    <span class="font-bold text-[16px] text-slate-800 group-hover:text-sky-600 transition">건강증진</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-44 bg-white border-t-2 border-sky-600 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">모바일 헬스케어</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">금연사업/클리닉</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">심뇌혈관질환 예방</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">대사증후군 관리</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium transition-colors">마음건강(심리치료)</a>
                    </div>
                </div>
                
                <!-- 3. 식품·위생안전 -->
                <div class="group relative px-4 py-7 cursor-pointer">
                    <span class="font-bold text-[16px] text-slate-800 group-hover:text-sky-600 transition">식품·위생안전</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white border-t-2 border-sky-600 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">모범음식점/안심식당</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">식중독 예방/대응</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">공중위생업소 관리</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">어린이 기호식품 관리</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium transition-colors">위생교육 안내</a>
                    </div>
                </div>

                <!-- 4. 방역·감염병 -->
                <div class="group relative px-4 py-7 cursor-pointer">
                    <span class="font-bold text-[16px] text-slate-800 group-hover:text-sky-600 transition">방역·감염병</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-44 bg-white border-t-2 border-sky-600 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">감염병 발생동향</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">국가예방접종 안내</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">결핵 관리사업</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">수인성 감염병 예방</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium transition-colors">계절별 방역소독</a>
                    </div>
                </div>
                
                <!-- 5. 모자·의료비지원 -->
                <div class="group relative px-4 py-7 cursor-pointer">
                    <span class="font-bold text-[16px] text-slate-800 group-hover:text-sky-600 transition">모자·의료비지원</span>
                    <div class="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-white border-t-2 border-sky-600 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">난임/산후도우미 지원</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">영유아 건강검진</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">암환자 의료비 지원</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium border-b border-slate-100 transition-colors">희귀질환자 의료비</a>
                        <a href="#" class="px-4 py-3 hover:bg-sky-50 hover:text-sky-700 text-[14px] font-medium transition-colors">치매치료 및 어르신 틀니</a>
                    </div>
                </div>
                
            </nav>

            <!-- 우측 아이콘 메뉴 -->
            <div class="flex items-center space-x-3">
                <button class="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-sky-600 transition" onclick="openSearch()">
                    <i data-lucide="search" class="w-5 h-5"></i>
                </button>
                <button class="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-sky-600 transition md:hidden">
                    <i data-lucide="menu" class="w-5 h-5"></i>
                </button>
            </div>
        </div>
    </header>
`;

document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('health-header');
    if (headerContainer) {
        headerContainer.innerHTML = healthHeaderHTML;
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
});