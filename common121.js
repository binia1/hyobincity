// ==========================================
// [Part 1] 공통 헤더(PC 전체 메뉴) & 공통 푸터
// (※ 슬래시(/) 묶음 0%, 모든 항목 개별 분리, 효빈위키 특화사업 100% 반영)
// ==========================================

const headerHTML = `
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

<button onclick="location.href='사이트맵.html'" class="hover:text-white transition">
    <i data-lucide="menu" class="w-6 h-6"></i>
</button>
            </div>
        </div>
    </header>

    <nav class="bg-[#172554] text-white border-t border-slate-700 shadow-md relative z-40 hidden lg:block">
        <div class="max-w-6xl mx-auto px-2 relative">
            <ul class="flex justify-between items-center text-[15px] font-bold tracking-tight whitespace-nowrap">
                
                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='소통참여.html'">소통ㆍ참여</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-4 gap-8 w-full font-normal leading-normal">
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">시민 경청</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="mayor.html" class="hover:text-blue-600">시장실</a></li>
                                    <li><a href="petition.html" class="hover:text-blue-600">시장에게 바란다</a></li>
                                    <li><a href="통합자료실.html" class="hover:text-blue-600">통합자료실</a></li>
                                    <li><a href="질의답변.html" class="hover:text-blue-600">질의답변</a></li>
                                    <li><a href="일일브리핑.html" class="hover:text-blue-600">일일 브리핑</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">시민 광장</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="참여광장.html" class="hover:text-blue-600">참여광장</a></li>
                                    <li><a href="시민의소리.html" class="hover:text-blue-600">시민의 소리</a></li>
                                    <li><a href="칭찬합니다.html" class="hover:text-blue-600">칭찬합니다(효빈온)</a></li>
                                    <li><a href="구인구직참여.html" class="hover:text-blue-600">구인구직참여</a></li>
                                    <li><a href="적극행정.html" class="hover:text-blue-600">적극행정</a></li>
                                    <li><a href="주민자치.html" class="hover:text-blue-600">주민자치</a></li>
                                    <li><a href="고향사랑기부제.html" class="hover:text-blue-600">고향사랑기부제</a></li>
                                    <li><a href="시민제안정책포럼.html" class="hover:text-blue-600">시민제안정책포럼</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">효빈온(ON) 예약</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="온라인예약신청.html" class="hover:text-blue-600">온라인예약신청</a></li>
                                    <li><a href="바로예약.html" class="hover:text-blue-600">바로예약</a></li>
                                    <li><a href="공용차량신청.html" class="hover:text-blue-600">공용차량신청</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">민간단체 및 기타</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="비영리법인등록현황.html" class="hover:text-blue-600">비영리법인등록현황</a></li>
                                    <li><a href="비영리민간단체등록및지원.html" class="hover:text-blue-600">비영리민간단체등록및지원</a></li>
                                    <li><a href="어린이시청.html" class="hover:text-blue-600">어린이시청</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='news.html'">시정·조직안내</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden whitespace-normal">
                        <div class="max-h-[75vh] overflow-y-auto p-6 custom-scrollbar">
                            <div class="grid grid-cols-5 gap-6 w-full font-normal leading-normal">
                                
                                <div>
                                    <div class="mb-6">
                                        <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">시정소식 일반</h4>
                                        <ul class="space-y-1.5 text-[12px] break-keep">
                                            <li><a href="공지사항.html" class="hover:text-blue-600">공지사항</a></li>
                                            <li><a href="보도자료.html" class="hover:text-blue-600">보도자료</a></li>
                                            <li><a href="언론보도사실은이렇습니다.html" class="hover:text-blue-600">언론보도 사실은 이렇습니다</a></li>
                                            <li><a href="news.html" class="hover:text-blue-600">고시·공고</a></li>
                                            <li><a href="입법예고.html" class="hover:text-blue-600">입법예고</a></li>
                                            <li><a href="시험인사정보.html" class="hover:text-blue-600">시험정보</a></li>
                                            <li><a href="인사정보.html" class="hover:text-blue-600">인사정보</a></li>
                                            <li><a href="공무직채용.html" class="hover:text-blue-600">공무직 채용정보</a></li>
                                            <li><a href="입찰소식.html" class="hover:text-blue-600">입찰소식</a></li>
                                            <li><a href="주요업무계획.html" class="hover:text-blue-600">주요업무계획</a></li>
                                            <li><a href="주요업무계획과거.html" class="hover:text-blue-600">주요업무계획 (과거자료)</a></li>
                                        </ul>
                                    </div>
                                    <div class="mb-6">
                                        <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">의회·합의제·출장소</h4>
                                        <ul class="space-y-3 text-[12px] break-keep">
                                            <li>
                                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">효빈광역시의회</div>
                                                <ul class="pl-2 mt-1 space-y-1 border-l-2 border-slate-200">
                                                    <li><strong class="text-blue-600 block mb-1">의장단</strong></li>
                                                    <li class="pl-2"><a href="의장실.html" class="hover:text-blue-600 block">의장실</a></li>
                                                    <li class="pl-2"><a href="제1부의장실.html" class="hover:text-blue-600 block">제1부의장실</a></li>
                                                    <li class="pl-2"><a href="제2부의장실.html" class="hover:text-blue-600 block">제2부의장실</a></li>
                                                    
                                                    <li><strong class="text-blue-600 block mt-2 mb-1">의회사무처</strong></li>
                                                    <li class="pl-2"><a href="총무담당관.html" class="hover:text-blue-600 block">총무담당관</a></li>
                                                    <li class="pl-2"><a href="의사담당관.html" class="hover:text-blue-600 block">의사담당관</a></li>
                                                    <li class="pl-2"><a href="입법정책담당관.html" class="hover:text-blue-600 block">입법정책담당관</a></li>
                                                    <li class="pl-2"><a href="홍보소통담당관.html" class="hover:text-blue-600 block">홍보소통담당관</a></li>
                                                    
                                                    <li><strong class="text-blue-600 block mt-2 mb-1">상임위원회</strong></li>
                                                    <li class="pl-2"><a href="의회운영위원회.html" class="hover:text-blue-600 block">의회운영위원회</a></li>
                                                    <li class="pl-2"><a href="행정기획위원회.html" class="hover:text-blue-600 block">행정기획위원회</a></li>
                                                    <li class="pl-2"><a href="보건복지위원회.html" class="hover:text-blue-600 block">보건복지위원회</a></li>
                                                    <li class="pl-2"><a href="경제산업위원회.html" class="hover:text-blue-600 block">경제산업위원회</a></li>
                                                    <li class="pl-2"><a href="문화환경위원회.html" class="hover:text-blue-600 block">문화환경위원회</a></li>
                                                    <li class="pl-2"><a href="안전건설위원회.html" class="hover:text-blue-600 block">안전건설위원회</a></li>
                                                    <li class="pl-2"><a href="도시교통위원회.html" class="hover:text-blue-600 block">도시교통위원회</a></li>
                                                    <li class="pl-2"><a href="교육위원회.html" class="hover:text-blue-600 block">교육위원회</a></li>
                                                    <li class="pl-2"><a href="예산결산특별위원회.html" class="hover:text-blue-600 block">예산결산특별위원회</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">자치경찰위원회</div>
                                                <ul class="pl-2 mt-1 space-y-1 border-l-2 border-slate-200">
                                                    <li><strong class="text-blue-600 block mb-1">위원장실</strong></li>
                                                    <li class="pl-2"><a href="상임위원실.html" class="hover:text-blue-600 block">상임위원실</a></li>
                                                    <li class="pl-2"><a href="비상임위원실.html" class="hover:text-blue-600 block">비상임위원실</a></li>
                                                    <li><strong class="text-blue-600 block mt-2 mb-1">사무국</strong></li>
                                                    <li class="pl-2"><a href="자치경찰행정과.html" class="hover:text-blue-600 block">자치경찰행정과</a></li>
                                                    <li class="pl-2"><a href="자치경찰관리과.html" class="hover:text-blue-600 block">자치경찰관리과</a></li>
                                                </ul>
                                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">감사위원회</div>
                                <ul class="pl-2 mt-1 space-y-1 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">위원장실</strong></li>
                                    <li class="pl-2"><a href="감사_상임위원실.html" class="hover:text-blue-600 block">상임위원실</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사무국</strong></li>
                                    <li class="pl-2"><a href="감사담당관.html" class="hover:text-blue-600 block">감사담당관</a></li>
                                    <li class="pl-2"><a href="청렴담당관.html" class="hover:text-blue-600 block">청렴담당관</a></li>
                                    <li class="pl-2"><a href="권익보호담당관.html" class="hover:text-blue-600 block">권익보호담당관</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">서남해안경제자유구역청</div>
                                <ul class="pl-2 mt-1 space-y-1 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">청장실</strong></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#차장실" class="hover:text-blue-600 block">차장실</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">기획행정본부</strong></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#총무팀" class="hover:text-blue-600 block">총무팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#기획예산팀" class="hover:text-blue-600 block">기획예산팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#홍보팀" class="hover:text-blue-600 block">홍보팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">개발투자본부</strong></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#개발계획팀" class="hover:text-blue-600 block">개발계획팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#민자유치팀" class="hover:text-blue-600 block">민자유치팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#인프라조성팀" class="hover:text-blue-600 block">인프라조성팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">기업지원본부</strong></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#기업입주지원팀" class="hover:text-blue-600 block">기업입주지원팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#행정지원팀" class="hover:text-blue-600 block">행정지원팀</a></li>
                                    <li class="pl-2"><a href="서남해안경제자유구역청.html#노무환경팀" class="hover:text-blue-600 block">노무환경팀</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">시 본청 (1)</h4>
                    <ul class="space-y-4 text-[12px] break-keep">
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">시장 직속</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">시장실</strong></li>
                                <li class="pl-2"><a href="조직안내.html#비서실" class="hover:text-blue-600 block">비서실</a></li>
                                <li><strong class="text-blue-600 block mt-2 mb-1">대변인</strong></li>
                                <li class="pl-2"><a href="조직안내.html#홍보담당관" class="hover:text-blue-600 block">홍보담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#공보담당관" class="hover:text-blue-600 block">공보담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#미디어담당관" class="hover:text-blue-600 block">미디어담당관</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">부시장 직속</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">행정부시장실</strong></li>
                                <li class="pl-2"><a href="조직안내.html#행정부시장실" class="hover:text-blue-600 block">행정부시장실</a></li>
                                <li><strong class="text-blue-600 block mt-2 mb-1">미래혁신부시장실</strong></li>
                                <li class="pl-2"><a href="조직안내.html#미래혁신부시장실" class="hover:text-blue-600 block">미래혁신부시장실</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">기획조정실</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">기획담당관실</strong></li>
                                <li class="pl-2"><a href="조직안내.html#기획관" class="hover:text-blue-600 block">기획관</a></li>
                                <li class="pl-2"><a href="조직안내.html#기획담당관" class="hover:text-blue-600 block">기획담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#조직담당관" class="hover:text-blue-600 block">조직담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#인구정책담당관" class="hover:text-blue-600 block">인구정책담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#법무담당관" class="hover:text-blue-600 block">법무담당관</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">재정관</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">재정담당관실</strong></li>
                                <li class="pl-2"><a href="조직안내.html#예산담당관" class="hover:text-blue-600 block">예산담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#공공기관담당관" class="hover:text-blue-600 block">공공기관담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#세정정책담당관" class="hover:text-blue-600 block">세정정책담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#세정운영담당관" class="hover:text-blue-600 block">세정운영담당관</a></li>
                                <li class="pl-2"><a href="조직안내.html#회계재산담당관" class="hover:text-blue-600 block">회계재산담당관</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">시민안전실</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">안전재난담당</strong></li>
                                <li class="pl-2"><a href="조직안내.html#안전정책중대재해예방과" class="hover:text-blue-600 block">안전정책중대재해예방과</a></li>
                                <li class="pl-2"><a href="조직안내.html#자연재난과" class="hover:text-blue-600 block">자연재난과</a></li>
                                <li class="pl-2"><a href="조직안내.html#사회재난과" class="hover:text-blue-600 block">사회재난과</a></li>
                                <li class="pl-2"><a href="조직안내.html#원자력안전과" class="hover:text-blue-600 block">원자력안전과</a></li>
                                <li class="pl-2"><a href="조직안내.html#특별사법경찰과" class="hover:text-blue-600 block">특별사법경찰과</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">시 본청 (2)</h4>
                    <ul class="space-y-4 text-[12px] break-keep">
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">문화체육국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">문화체육담당</strong></li>
                                <li class="pl-2"><a href="시본청2.html#문화예술유산과" class="hover:text-blue-600 block">문화예술유산과</a></li>
                                <li class="pl-2"><a href="시본청2.html#애니메이션산업과" class="hover:text-blue-600 block">애니메이션산업과</a></li>
                                <li class="pl-2"><a href="시본청2.html#영상콘텐츠산업과" class="hover:text-blue-600 block">영상콘텐츠산업과</a></li>
                                <li class="pl-2"><a href="시본청2.html#체육정책과" class="hover:text-blue-600 block">체육정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#생활체육과" class="hover:text-blue-600 block">생활체육과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">사회복지여성가족국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">복지여성담당</strong></li>
                                <li class="pl-2"><a href="시본청2.html#복지정책과" class="hover:text-blue-600 block">복지정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#돌봄복지과" class="hover:text-blue-600 block">돌봄복지과</a></li>
                                <li class="pl-2"><a href="시본청2.html#장애인복지과" class="hover:text-blue-600 block">장애인복지과</a></li>
                                <li class="pl-2"><a href="시본청2.html#노인복지과" class="hover:text-blue-600 block">노인복지과</a></li>
                                <li class="pl-2"><a href="시본청2.html#여성가족과" class="hover:text-blue-600 block">여성가족과</a></li>
                                <li class="pl-2"><a href="시본청2.html#출산보육과" class="hover:text-blue-600 block">출산보육과</a></li>
                                <li class="pl-2"><a href="시본청2.html#아동청소년과" class="hover:text-blue-600 block">아동청소년과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">시민건강국 / 행정자치국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">보건행정담당</strong></li>
                                <li class="pl-2"><a href="시본청2.html#건강정책과" class="hover:text-blue-600 block">건강정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#보건위생과" class="hover:text-blue-600 block">보건위생과</a></li>
                                <li class="pl-2"><a href="시본청2.html#감염병관리과" class="hover:text-blue-600 block">감염병관리과</a></li>
                                <li class="pl-2"><a href="시본청2.html#자치행정과" class="hover:text-blue-600 block">자치행정과</a></li>
                                <li class="pl-2"><a href="시본청2.html#총무과" class="hover:text-blue-600 block">총무과</a></li>
                                <li class="pl-2"><a href="시본청2.html#인사과" class="hover:text-blue-600 block">인사과</a></li>
                                <li class="pl-2"><a href="시본청2.html#정보화정책과" class="hover:text-blue-600 block">정보화정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#통합민원과" class="hover:text-blue-600 block">통합민원과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">디지털경제실</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">경제투자담당</strong></li>
                                <li class="pl-2"><a href="시본청2.html#경제정책과" class="hover:text-blue-600 block">경제정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#일자리노동과" class="hover:text-blue-600 block">일자리노동과</a></li>
                                <li class="pl-2"><a href="시본청2.html#중소상공인지원과" class="hover:text-blue-600 block">중소상공인지원과</a></li>
                                <li class="pl-2"><a href="시본청2.html#금융창업정책과" class="hover:text-blue-600 block">금융창업정책과</a></li>
                                <li class="pl-2"><a href="시본청2.html#벤처과" class="hover:text-blue-600 block">벤처과</a></li>
                                <li class="pl-2"><a href="시본청2.html#투자유치과" class="hover:text-blue-600 block">투자유치과</a></li>
                                <li class="pl-2"><a href="시본청2.html#기업지원과" class="hover:text-blue-600 block">기업지원과</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">시 본청 (3)</h4>
                    <ul class="space-y-4 text-[12px] break-keep">
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">미래기술/첨단산업국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">미래산업담당</strong></li>
                                <li class="pl-2"><a href="시본청3.html#산업정책과" class="hover:text-blue-600 block">산업정책과</a></li>
                                <li class="pl-2"><a href="시본청3.html#반도체신소재과" class="hover:text-blue-600 block">반도체신소재과</a></li>
                                <li class="pl-2"><a href="시본청3.html#미래에너지산업과" class="hover:text-blue-600 block">미래에너지산업과</a></li>
                                <li class="pl-2"><a href="시본청3.html#인공지능SW과" class="hover:text-blue-600 block">인공지능SW과</a></li>
                                <li class="pl-2"><a href="시본청3.html#빅데이터과" class="hover:text-blue-600 block">빅데이터과</a></li>
                                <li class="pl-2"><a href="시본청3.html#연구개발과" class="hover:text-blue-600 block">연구개발과</a></li>
                                <li class="pl-2"><a href="시본청3.html#바이오헬스과" class="hover:text-blue-600 block">바이오헬스과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">교통혁신국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">교통물류담당</strong></li>
                                <li class="pl-2"><a href="시본청3.html#교통혁신과" class="hover:text-blue-600 block">교통혁신과</a></li>
                                <li class="pl-2"><a href="시본청3.html#대중교통과" class="hover:text-blue-600 block">대중교통과</a></li>
                                <li class="pl-2"><a href="시본청3.html#도시철도운영과" class="hover:text-blue-600 block">도시철도운영과</a></li>
                                <li class="pl-2"><a href="시본청3.html#택시운수과" class="hover:text-blue-600 block">택시운수과</a></li>
                                <li class="pl-2"><a href="시본청3.html#효빈국제공항관리본부" class="hover:text-blue-600 block">효빈국제공항관리본부</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">도시혁신균형/계획국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">도시인프라담당</strong></li>
                                <li class="pl-2"><a href="시본청3.html#미래혁신기획과" class="hover:text-blue-600 block">미래혁신기획과</a></li>
                                <li class="pl-2"><a href="시본청3.html#도시인프라개발과" class="hover:text-blue-600 block">도시인프라개발과</a></li>
                                <li class="pl-2"><a href="시본청3.html#건설행정과" class="hover:text-blue-600 block">건설행정과</a></li>
                                <li class="pl-2"><a href="시본청3.html#도시계획과" class="hover:text-blue-600 block">도시계획과</a></li>
                                <li class="pl-2"><a href="시본청3.html#시설계획과" class="hover:text-blue-600 block">시설계획과</a></li>
                                <li class="pl-2"><a href="시본청3.html#도로계획과" class="hover:text-blue-600 block">도로계획과</a></li>
                                <li class="pl-2"><a href="시본청3.html#주택정책과" class="hover:text-blue-600 block">주택정책과</a></li>
                                <li class="pl-2"><a href="시본청3.html#건축과" class="hover:text-blue-600 block">건축과</a></li>
                                <li class="pl-2"><a href="시본청3.html#도시정비과" class="hover:text-blue-600 block">도시정비과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">관광마이스/청년산학국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">관광청년담당</strong></li>
                                <li class="pl-2"><a href="시본청3.html#관광정책과" class="hover:text-blue-600 block">관광정책과</a></li>
                                <li class="pl-2"><a href="시본청3.html#마이스산업과" class="hover:text-blue-600 block">마이스산업과</a></li>
                                <li class="pl-2"><a href="시본청3.html#국제협력과" class="hover:text-blue-600 block">국제협력과</a></li>
                                <li class="pl-2"><a href="시본청3.html#청년정책과" class="hover:text-blue-600 block">청년정책과</a></li>
                                <li class="pl-2"><a href="시본청3.html#창조교육과" class="hover:text-blue-600 block">창조교육과</a></li>
                                <li class="pl-2"><a href="시본청3.html#지산학협력과" class="hover:text-blue-600 block">지산학협력과</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">환경/해양농수산국</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">환경해양농수산담당</strong></li>
                                <li class="pl-2"><a href="시본청3.html#환경과" class="hover:text-blue-600 block">환경과</a></li>
                                <li class="pl-2"><a href="시본청3.html#맑은물과" class="hover:text-blue-600 block">맑은물과</a></li>
                                <li class="pl-2"><a href="시본청3.html#탄소중립과" class="hover:text-blue-600 block">탄소중립과</a></li>
                                <li class="pl-2"><a href="시본청3.html#공원여가과" class="hover:text-blue-600 block">공원여가과</a></li>
                                <li class="pl-2"><a href="시본청3.html#반려동물과" class="hover:text-blue-600 block">반려동물과</a></li>
                                <li class="pl-2"><a href="시본청3.html#해양수도과" class="hover:text-blue-600 block">해양수도과</a></li>
                                <li class="pl-2"><a href="시본청3.html#해운항만과" class="hover:text-blue-600 block">해운항만과</a></li>
                                <li class="pl-2"><a href="시본청3.html#수산정책과" class="hover:text-blue-600 block">수산정책과</a></li>
                                <li class="pl-2"><a href="시본청3.html#농축산유통과" class="hover:text-blue-600 block">농축산유통과</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div>
                    <div class="mb-6">
                        <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">직속기관</h4>
                        <ul class="space-y-4 text-[12px] break-keep">
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">효빈소방재난본부 / 소방학교</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">본부장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#소방행정과" class="hover:text-blue-600 block">소방행정과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#방호조사과" class="hover:text-blue-600 block">방호조사과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#구조구급과" class="hover:text-blue-600 block">구조구급과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#119종합상황실" class="hover:text-blue-600 block">119종합상황실</a></li>
                                    <li class="pl-2"><a href="직속기관.html#재난예방담당관" class="hover:text-blue-600 block">재난예방담당관</a></li>
                                    <li class="pl-2"><a href="직속기관.html#소방감사담당관" class="hover:text-blue-600 block">소방감사담당관</a></li>
                                    <li class="pl-2"><a href="직속기관.html#회계장비담당관" class="hover:text-blue-600 block">회계장비담당관</a></li>
                                    <li class="pl-2"><a href="직속기관.html#119특수대응단" class="hover:text-blue-600 block">119특수대응단</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">학교장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#교육기획과_인재" class="hover:text-blue-600 block">교육기획과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#교수운영과" class="hover:text-blue-600 block">교수운영과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#현장훈련센터" class="hover:text-blue-600 block">현장훈련센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">일선 소방서 (9개소)</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><a href="직속기관.html#중부소방서" class="hover:text-blue-600 block">중부소방서</a></li>
                                    <li><a href="직속기관.html#동부소방서" class="hover:text-blue-600 block">동부소방서</a></li>
                                    <li><a href="직속기관.html#서부소방서" class="hover:text-blue-600 block">서부소방서</a></li>
                                    <li><a href="직속기관.html#남부소방서" class="hover:text-blue-600 block">남부소방서</a></li>
                                    <li><a href="직속기관.html#북부소방서" class="hover:text-blue-600 block">북부소방서</a></li>
                                    <li><a href="직속기관.html#안천소방서" class="hover:text-blue-600 block">안천소방서</a></li>
                                    <li><a href="직속기관.html#창전소방서" class="hover:text-blue-600 block">창전소방서</a></li>
                                    <li><a href="직속기관.html#청엽소방서" class="hover:text-blue-600 block">청엽소방서</a></li>
                                    <li><a href="직속기관.html#탄성소방서" class="hover:text-blue-600 block">탄성소방서</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">보건환경연구원</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">원장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#총무과_보건" class="hover:text-blue-600 block">총무과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#감염병연구부" class="hover:text-blue-600 block">감염병연구부</a></li>
                                    <li class="pl-2"><a href="직속기관.html#식약연구부" class="hover:text-blue-600 block">식약연구부</a></li>
                                    <li class="pl-2"><a href="직속기관.html#대기환경연구부" class="hover:text-blue-600 block">대기환경연구부</a></li>
                                    <li class="pl-2"><a href="직속기관.html#물환경연구부" class="hover:text-blue-600 block">물환경연구부</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">인재개발원</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">원장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#교육기획과_인재" class="hover:text-blue-600 block">교육기획과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#역량개발과" class="hover:text-blue-600 block">역량개발과</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">농업기술센터</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">소장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#지도정책과" class="hover:text-blue-600 block">지도정책과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#기술보급과" class="hover:text-blue-600 block">기술보급과</a></li>
                                    <li class="pl-2"><a href="직속기관.html#농기계임대사업소" class="hover:text-blue-600 block">탄성군 농기계임대사업소</a></li>
                                </ul>
                            </li>
                            <li>
                                <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">서울본부/세종사무소</div>
                                <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                    <li><strong class="text-blue-600 block mb-1">본부장실</strong></li>
                                    <li class="pl-2"><a href="직속기관.html#대외협력팀" class="hover:text-blue-600 block">대외협력팀</a></li>
                                    <li class="pl-2"><a href="직속기관.html#국회협력팀" class="hover:text-blue-600 block">국회협력팀</a></li>
                                    <li class="pl-2"><a href="직속기관.html#세종사무소팀" class="hover:text-blue-600 block">세종사무소팀</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">사업소 (32개소)</h4>
                    <ul class="space-y-4 text-[12px] break-keep">
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">상수도사업본부</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">본부장실</strong></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#수도관리부" class="hover:text-blue-600 block">관리부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#수도급수부" class="hover:text-blue-600 block">급수부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#수도시설부" class="hover:text-blue-600 block">시설부</a></li>
                                <li><strong class="text-blue-600 block mt-2 mb-1">각 소장실 (행정/요금/누수복구)</strong></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#중부수도사업소" class="hover:text-blue-600 block">중부수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#동부수도사업소" class="hover:text-blue-600 block">동부수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#서부수도사업소" class="hover:text-blue-600 block">서부수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#남부수도사업소" class="hover:text-blue-600 block">남부수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#북부수도사업소" class="hover:text-blue-600 block">북부수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#안천수도사업소" class="hover:text-blue-600 block">안천수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#창전수도사업소" class="hover:text-blue-600 block">창전수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#청엽수도사업소" class="hover:text-blue-600 block">청엽수도사업소</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#탄성수도사업소" class="hover:text-blue-600 block">탄성수도사업소</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">건설본부 / 차량등록사업소</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">건설본부장실</strong></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#건설총무부" class="hover:text-blue-600 block">총무부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#건설토목부" class="hover:text-blue-600 block">토목부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#건축시설부" class="hover:text-blue-600 block">건축시설부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#보상부" class="hover:text-blue-600 block">보상부</a></li>
                                <li><strong class="text-blue-600 block mt-2 mb-1">차량등록 소장실</strong></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#등록1팀" class="hover:text-blue-600 block">등록1팀</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#등록2팀" class="hover:text-blue-600 block">등록2팀</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#검사팀" class="hover:text-blue-600 block">검사팀</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#차량특사경팀" class="hover:text-blue-600 block">특별사법경찰팀</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">시립박물관 / 시립미술관</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">각 관장실</strong></li>
                                <li class="pl-2"><a href="박물관_관리팀.html" class="hover:text-blue-600 block">관리팀</a></li>
                                <li class="pl-2"><a href="박물관_학예연구팀.html" class="hover:text-blue-600 block">학예연구팀</a></li>
                                <li class="pl-2"><a href="박물관_전시운영팀.html" class="hover:text-blue-600 block">전시운영팀</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">도서관 (18개소)</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li><strong class="text-blue-600 block mb-1">지역 시립도서관 (관장실)</strong></li>
                                <li class="pl-2"><a href="효빈중앙도서관.html" class="hover:text-blue-600 block">효빈중앙도서관</a></li>
                                <li class="pl-2"><a href="중구시립도서관.html" class="hover:text-blue-600 block">중구시립도서관</a></li>
                                <li class="pl-2"><a href="동구시립도서관.html" class="hover:text-blue-600 block">동구시립도서관</a></li>
                                <li class="pl-2"><a href="서구시립도서관.html" class="hover:text-blue-600 block">서구시립도서관</a></li>
                                <li class="pl-2"><a href="남구시립도서관.html" class="hover:text-blue-600 block">남구시립도서관</a></li>
                                <li class="pl-2"><a href="북구시립도서관.html" class="hover:text-blue-600 block">북구시립도서관</a></li>
                                <li class="pl-2"><a href="안천시립도서관.html" class="hover:text-blue-600 block">안천시립도서관</a></li>
                                <li class="pl-2"><a href="창전시립도서관.html" class="hover:text-blue-600 block">창전시립도서관</a></li>
                                <li class="pl-2"><a href="청엽시립도서관.html" class="hover:text-blue-600 block">청엽시립도서관</a></li>
                                <li class="pl-2"><a href="탄성시립도서관.html" class="hover:text-blue-600 block">탄성시립도서관</a></li>
                                <li><strong class="text-blue-600 block mt-2 mb-1">효빈 특화도서관 (관장실)</strong></li>
                                <li class="pl-2"><a href="효빈만화특화도서관.html" class="hover:text-blue-600 block">효빈만화특화도서관</a></li>
                                <li class="pl-2"><a href="효빈어린이도서관.html" class="hover:text-blue-600 block">효빈어린이도서관</a></li>
                                <li class="pl-2"><a href="효빈청년도서관.html" class="hover:text-blue-600 block">효빈청년도서관</a></li>
                                <li class="pl-2"><a href="효빈과학도서관.html" class="hover:text-blue-600 block">효빈과학도서관</a></li>
                                <li class="pl-2"><a href="효빈음악도서관.html" class="hover:text-blue-600 block">효빈음악도서관</a></li>
                                <li class="pl-2"><a href="효빈점자도서관.html" class="hover:text-blue-600 block">효빈점자도서관</a></li>
                                <li class="pl-2"><a href="효빈해양도서관.html" class="hover:text-blue-600 block">효빈해양도서관</a></li>
                                <li class="pl-2"><a href="효빈지산학도서관.html" class="hover:text-blue-600 block">효빈지산학도서관</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="mb-6 mt-6">
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">공사·공단 및 출연기관</h4>
                    <ul class="space-y-4 text-[12px] break-keep">
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">공기업 (공사/공단)</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈교통공사" class="hover:text-blue-600 block">효빈교통공사</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈시설공단" class="hover:text-blue-600 block">효빈시설공단</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈도시공사" class="hover:text-blue-600 block">효빈도시공사</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈환경공단" class="hover:text-blue-600 block">효빈환경공단</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#관광공사" class="hover:text-blue-600 block">효빈관광공사</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#문화공사" class="hover:text-blue-600 block">효빈문화공사</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#상하수도공사" class="hover:text-blue-600 block">효빈상·하수도공사</a></li>
                            </ul>
                        </li>
                        <li>
                            <div class="font-bold text-slate-700 bg-slate-50 p-1.5 rounded inline-block w-full">출연기관 및 재단</div>
                            <ul class="pl-2 mt-1 space-y-1.5 border-l-2 border-slate-200">
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈의료원" class="hover:text-blue-600 block">효빈의료원</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#만화애니전당" class="hover:text-blue-600 block">만화애니메이션의전당</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈애니본부" class="hover:text-blue-600 block">효빈애니본부</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#테크노파크" class="hover:text-blue-600 block">테크노파크</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#정보산업진흥원" class="hover:text-blue-600 block">정보산업진흥원</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#경제진흥원" class="hover:text-blue-600 block">경제진흥원 / 신용보증재단</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#효빈연구원" class="hover:text-blue-600 block">효빈연구원</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#산업과학혁신원" class="hover:text-blue-600 block">산업과학혁신원</a></li>
                                <li class="pl-2"><a href="사업소_출연기관.html#사회서비스원" class="hover:text-blue-600 block">사회서비스원 외 기타 산하기관</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-black text-blue-800 mb-3 border-b-2 border-blue-200 pb-2 text-[15px]">효빈 관내 유관기관</h4>
                    <ul class="space-y-2 text-[12px] break-keep">
                        <li><a href="사업소_출연기관.html#유관_경찰소방사법" class="hover:text-blue-600 block px-2 py-1 bg-slate-50 rounded">경찰청 / 소방서 / 사법기관</a></li>
                        <li><a href="사업소_출연기관.html#유관_세무교육우정" class="hover:text-blue-600 block px-2 py-1 bg-slate-50 rounded">세무서 / 교육청 / 우체국</a></li>
                        <li><a href="사업소_출연기관.html#유관_국가공공기관" class="hover:text-blue-600 block px-2 py-1 bg-slate-50 rounded">국가공기업 및 지역본부</a></li>
                    </ul>
                                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='열린민원.html'">열린민원</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-4 gap-8 w-full font-normal leading-normal">
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">민원안내 및 발급</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="민원업무안내.html" class="hover:text-blue-600">민원업무안내</a></li>
                                    <li><a href="자격증교부.html" class="hover:text-blue-600">자격증교부</a></li>
                                    <li><a href="민원제증명수수료.html" class="hover:text-blue-600">민원 제증명 수수료</a></li>
                                    <li><a href="무인민원발급.html" class="hover:text-blue-600">무인민원발급</a></li>
                                    <li><a href="사전심사청구제.html" class="hover:text-blue-600">사전심사청구제</a></li>
                                    <li><a href="민원후견인제.html" class="hover:text-blue-600">민원후견인제</a></li>
                                    <li><a href="민원편람.html" class="hover:text-blue-600">민원편람</a></li>
                                    <li><a href="민원전화번호.html" class="hover:text-blue-600">민원전화번호</a></li>
                                    <li><a href="민원신청.html" class="hover:text-blue-600">민원신청</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">여권안내</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="여권개요.html" class="hover:text-blue-600">여권개요</a></li>
                                    <li><a href="여권민원대기현황.html" class="hover:text-blue-600">여권민원 대기현황</a></li>
                                    <li><a href="여권발급.html" class="hover:text-blue-600">여권발급</a></li>
                                    <li><a href="여권재발급.html" class="hover:text-blue-600">여권재발급</a></li>
                                    <li><a href="여권기재사항변경.html" class="hover:text-blue-600">여권기재사항변경</a></li>
                                    <li><a href="여권사진규정.html" class="hover:text-blue-600">여권사진규정</a></li>
                                    <li><a href="여권민원서식.html" class="hover:text-blue-600">여권민원서식</a></li>
                                    <li><a href="국제운전면허증발급.html" class="hover:text-blue-600">국제운전면허증발급</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">민원처리공개</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="한눈에보는민원빅데이터.html" class="hover:text-blue-600">한눈에 보는 민원 빅데이터</a></li>
                                    <li><a href="금융복지지원센터.html" class="hover:text-blue-600">금융복지지원센터</a></li>
                                    <li><a href="110수화상담.html" class="hover:text-blue-600">110수화(화상)상담</a></li>
                                    <li><a href="110채팅상담.html" class="hover:text-blue-600">110채팅상담</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">행정서비스헌장</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="헌장전문.html" class="hover:text-blue-600">헌장전문</a></li>
                                    <li><a href="공통이행전문.html" class="hover:text-blue-600">공통이행전문</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='행정정보공개.html'">정보공개</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-4 gap-6 w-full font-normal leading-normal">
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">행정/원문 정보공개</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="정보공개제도안내.html" class="hover:text-blue-600">정보공개제도안내</a></li>
                                    <li><a href="정보공개청구현황.html" class="hover:text-blue-600">정보공개청구현황</a></li>
                                    <li><a href="정보공개청구.html" class="hover:text-blue-600">정보공개청구</a></li>
                                    <li><a href="비공개세부기준.html" class="hover:text-blue-600">비공개세부기준</a></li>
                                    <li><a href="정보공개수수료.html" class="hover:text-blue-600">정보공개수수료</a></li>
                                    <li><a href="불복처리절차.html" class="hover:text-blue-600">불복처리절차</a></li>
                                    <li><a href="관련법령및서식.html" class="hover:text-blue-600">관련법령 및 서식</a></li>
                                    <li><a href="정보공개편람.html" class="hover:text-blue-600">정보공개편람</a></li>
                                    <li><a href="예산재정정보.html" class="hover:text-blue-600">예산·재정정보</a></li>
                                    <li><a href="사전정보공표목록.html" class="hover:text-blue-600">사전정보공표목록</a></li>
                                    <li><a href="즐겨찾는사전정보.html" class="hover:text-blue-600">즐겨찾는사전정보</a></li>
                                    <li><a href="원문정보공개안내.html" class="hover:text-blue-600">원문정보공개안내</a></li>
                                    <li><a href="원문정보목록.html" class="hover:text-blue-600">원문정보목록</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">정책이력 및 공공데이터</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="정책이력제안내.html" class="hover:text-blue-600">정책이력제안내</a></li>
                                    <li><a href="국민신청실명제.html" class="hover:text-blue-600">국민신청실명제</a></li>
                                    <li><a href="중점관리대상사업.html" class="hover:text-blue-600">중점관리대상사업</a></li>
                                    <li><a href="정책이력제심의위원회.html" class="hover:text-blue-600">정책이력제 심의위원회</a></li>
                                    <li><a href="공공데이터개방안내.html" class="hover:text-blue-600">공공데이터 개방안내</a></li>
                                    <li><a href="공공데이터수요조사.html" class="hover:text-blue-600">공공데이터 수요조사</a></li>
                                    <li><a href="공공데이터설문조사.html" class="hover:text-blue-600">공공데이터 설문조사</a></li>
                                    <li><a href="빅데이터통합플랫폼.html" class="hover:text-blue-600">빅데이터 통합플랫폼</a></li>
                                    <li><a href="스마트도시분석포털.html" class="hover:text-blue-600">스마트도시분석포털</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">특화사업 현황 (효빈위키)</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="효빈현대백화점사업.html" class="hover:text-blue-600">효빈현대백화점 사업 (고송동)</a></li>
                                    <li><a href="효빈신세계백화점사업.html" class="hover:text-blue-600">효빈신세계백화점 사업 (종합버스터미널)</a></li>
                                    <li><a href="효빈애니메이션페스티벌사업.html" class="hover:text-blue-600">효빈 애니메이션 페스티벌 (HAF) 사업</a></li>
                                    <li><a href="효빈전차보존사업.html" class="hover:text-blue-600">효빈전차 (7호선) 보존 및 연장 사업</a></li>
                                    <li><a href="방직공장부지개발사업.html" class="hover:text-blue-600">구(舊) 방직공장 부지 국제설계공모 결과</a></li>
                                    <li><a href="terminal.html" class="hover:text-blue-600">효빈종합터미널 안내</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">행정·감사·조직</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="감사결과공개.html" class="hover:text-blue-600">감사결과공개</a></li>
                                    <li><a href="계약365코너.html" class="hover:text-blue-600">계약365코너</a></li>
                                    <li><a href="업무추진비.html" class="hover:text-blue-600">업무추진비</a></li>
                                    <li><a href="업무제휴협약.html" class="hover:text-blue-600">업무제휴·협약</a></li>
                                    <li><strong class="text-slate-800 block mt-2 mb-1">조직정보</strong></li>
                                    <li><a href="정원기구현황.html" class="hover:text-blue-600">공무원 정원</a></li>
                                    <li><a href="상위직비율.html" class="hover:text-blue-600">과장급 이상 상위직 비율</a></li>
                                    <li><a href="주민수비율.html" class="hover:text-blue-600">공무원 1인당 주민 수</a></li>
                                    <li><a href="현장공무원.html" class="hover:text-blue-600">현장공무원 비율</a></li>
                                    <li><a href="인건비운영비율.html" class="hover:text-blue-600">재정규모 대비 인건비 운영 비율</a></li>
                                    <li><a href="실국본부설치수.html" class="hover:text-blue-600">실국본부 설치 수</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='intro.html'">효빈소개</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-4 gap-6 w-full font-normal leading-normal">
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">일반현황 및 시청안내</h4>
                                <ul class="space-y-1.5 text-[12px] mb-4">
                                    <li><a href="intro.html" class="hover:text-blue-600">기본현황</a></li>
                                    <li><a href="행정구역로마자표기법.html" class="hover:text-blue-600">행정구역로마자표기법</a></li>
                                    <li><a href="행정구역.html" class="hover:text-blue-600">행정구역</a></li>
                                    <li><a href="sister_cities.html" class="hover:text-blue-600">해외자매도시</a></li>
                                    <li><a href="시정구호.html" class="hover:text-blue-600">시정구호</a></li>
                                </ul>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">시청안내</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="행정조직도.html" class="hover:text-blue-600">행정조직도</a></li>
                                    <li><a href="정원기구현황.html" class="hover:text-blue-600">정원/기구현황</a></li>
                                    <li><a href="행정전화번호.html" class="hover:text-blue-600">행정전화번호</a></li>
                                    <li><a href="행정팩스번호.html" class="hover:text-blue-600">행정팩스번호</a></li>
                                    <li><a href="청사안내.html" class="hover:text-blue-600">청사안내</a></li>
                                    <li><a href="찾아오시는길.html" class="hover:text-blue-600">찾아오시는길</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">시의상징</h4>
                                <ul class="space-y-1.5 text-[12px] mb-4">
                                    <li><a href="시조시화시목.html" class="hover:text-blue-600">시조시화시목</a></li>
                                    <li><a href="상징물.html" class="hover:text-blue-600">상징물</a></li>
                                    <li><a href="mascot.html" class="hover:text-blue-600">소통캐릭터 (한바다)</a></li>
                                    <li><a href="시민의날.html" class="hover:text-blue-600">시민의날</a></li>
                                    <li><a href="효빈문화울림체.html" class="hover:text-blue-600">효빈문화울림체</a></li>
                                    <li><a href="시민의노래.html" class="hover:text-blue-600">시민의노래</a></li>
                                    <li><a href="홍보영상.html" class="hover:text-blue-600">홍보영상</a></li>
                                </ul>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">자료실</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="ebook.html" class="hover:text-blue-600">ebook</a></li>
                                    <li><a href="시청각자료실.html" class="hover:text-blue-600">시청각자료실</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">효빈통계</h4>
                                <ul class="space-y-1.5 text-[12px] mb-4">
                                    <li><a href="통계연보.html" class="hover:text-blue-600">통계연보</a></li>
                                    <li><a href="인구통계.html" class="hover:text-blue-600">인구통계</a></li>
                                    <li><a href="경제통계.html" class="hover:text-blue-600">경제통계</a></li>
                                    <li><a href="효빈사회조사.html" class="hover:text-blue-600">효빈사회조사</a></li>
                                    <li><a href="지역통계.html" class="hover:text-blue-600">지역통계</a></li>
                                    <li><a href="통계조사.html" class="hover:text-blue-600">통계조사</a></li>
                                    <li><a href="시정백서.html" class="hover:text-blue-600">시정백서</a></li>
                                    <li><a href="주요수상내역.html" class="hover:text-blue-600">주요수상내역</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">효빈의 역사</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="history.html" class="hover:text-blue-600">역사 개요 (조선시대~현대)</a></li>
                                    <li><a href="역대시장.html" class="hover:text-blue-600">역대시장</a></li>
                                    <li><a href="향토자료.html" class="hover:text-blue-600">향토자료</a></li>
                                    <li><a href="세계속의효빈.html" class="hover:text-blue-600">세계속의효빈</a></li>
                                    <li><a href="문화수도효빈.html" class="hover:text-blue-600">문화수도효빈</a></li>
                                    <li><a href="sister_cities.html" class="hover:text-blue-600">자매결연도시 안내</a></li>
                                    <li><a href="sister_cities.html" class="hover:text-blue-600">우호협력도시 안내</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group static px-3 py-4 cursor-pointer">
                    <span class="hover:text-blue-300 transition block" onclick="location.href='life.html'">분야별 정보</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-5 gap-4 w-full font-normal leading-normal">
                            <div class="border-r border-slate-100 pr-2">
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">생활정보</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="보건의료.html" class="hover:text-blue-600">보건의료</a></li>
                                    <li><a href="교육도서관.html" class="hover:text-blue-600">교육도서관</a></li>
                                    <li><a href="환경.html" class="hover:text-blue-600">환경</a></li>
                                    <li><a href="청소.html" class="hover:text-blue-600">청소</a></li>
                                    <li><a href="재난안전.html" class="hover:text-blue-600">재난안전</a></li>
                                    <li><a href="농업.html" class="hover:text-blue-600">농업</a></li>
                                    <li><a href="도시농업.html" class="hover:text-blue-600">도시농업</a></li>
                                    <li><a href="군공항이전사업.html" class="hover:text-blue-600">군공항이전사업</a></li>
                                </ul>
                            </div>
                            <div class="border-r border-slate-100 pr-2">
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">교통</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="bus.html" class="hover:text-blue-600">효빈시내버스 안내</a></li>
                                    <li><a href="subway.html" class="hover:text-blue-600">도시철도(1~8호선)</a></li>
                                    <li><a href="airport.html" class="hover:text-blue-600">효빈국제공항</a></li>
                                    <li><a href="port.html" class="hover:text-blue-600">효빈항</a></li>
                                    <li><a href="교통약자지원.html" class="hover:text-blue-600">교통약자지원</a></li>
                                    <li><a href="parking.html" class="hover:text-blue-600">공영주차장 안내</a></li>
                                </ul>
                            </div>
                            <div class="border-r border-slate-100 pr-2">
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">복지</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="맞춤형복지.html" class="hover:text-blue-600">맞춤형 복지</a></li>
                                    <li><a href="노인복지.html" class="hover:text-blue-600">노인복지</a></li>
                                    <li><a href="장애인복지.html" class="hover:text-blue-600">장애인복지</a></li>
                                    <li><a href="보육포털.html" class="hover:text-blue-600">보육포털</a></li>
                                    <li><a href="여성가족.html" class="hover:text-blue-600">여성가족</a></li>
                                </ul>
                            </div>
                            <div class="border-r border-slate-100 pr-2">
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">일자리 / 경제</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="일자리센터.html" class="hover:text-blue-600">일자리센터</a></li>
                                    <li><a href="공공근로채용.html" class="hover:text-blue-600">공공근로 채용</a></li>
                                    <li><a href="창업지원.html" class="hover:text-blue-600">창업지원</a></li>
                                    <li><a href="직업훈련.html" class="hover:text-blue-600">직업훈련</a></li>
                                    <li><a href="산업경제.html" class="hover:text-blue-600">산업경제</a></li>
                                    <li><a href="재정세정.html" class="hover:text-blue-600">재정세정</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">관광 / 문화</h4>
                                <ul class="space-y-1.5 text-[12px]">
                                    <li><a href="효빈관광지도.html" class="hover:text-blue-600">효빈 관광지도</a></li>
                                    <li><a href="HAF축제.html" class="hover:text-blue-600 text-blue-800">HAF (효빈 애니 축제)</a></li>
                                    <li><a href="banner_3.html" class="hover:text-blue-600">효빈 시티투어</a></li>
                                    <li><a href="vr랜드마크투어.html" class="hover:text-blue-600">VR 랜드마크 투어</a></li>
                                    <li><a href="문화체육관광.html" class="hover:text-blue-600">문화체육관광</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group relative px-2 py-4 cursor-pointer flex items-center gap-1">
                    <i data-lucide="search" class="w-4 h-4 group-hover:text-blue-300 transition"></i> 
                    <span class="hover:text-blue-300 transition block" onclick="location.href='district_search.html'">행정구역 검색</span>
                    <div class="absolute right-0 top-full mt-0 w-80 bg-white text-slate-800 font-normal shadow-xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col z-50 p-4 whitespace-normal">
                        <p class="text-sm text-slate-500 font-bold mb-3 border-b pb-2">효빈광역시 행정구역</p>
                        <div class="grid grid-cols-3 gap-2 text-center text-[13px]">
                            <a href="북구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">북구</a>
                            <a href="중구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">중구</a>
                            <a href="동구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">동구</a>
                            <a href="서구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">서구</a>
                            <a href="남구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">남구</a>
                            <a href="탄성군.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">탄성군</a>
                            <a href="창전구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">창전구</a>
                            <a href="청엽구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">청엽구</a>
                            <a href="안천구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">안천구</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
`;

const footerHTML = `
    <footer class="bg-white border-t border-slate-200 mt-auto pt-10 pb-12 text-[13px] tracking-tight relative z-10">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-slate-100 pb-6">
                <div class="flex flex-wrap gap-x-6 gap-y-2 font-medium text-slate-600 justify-center md:justify-start">
                    <a href="개인정보처리방침.html" class="text-[#2563eb] font-bold hover:underline" data-policy="privacy">개인정보처리방침</a>
                    <a href="저작권보호정책.html" class="hover:text-slate-900 hover:underline" data-policy="copyright">저작권 보호정책</a>
                    <a href="영상정보처리기기운영방침.html" class="hover:text-slate-900 hover:underline" data-policy="cctv">영상정보처리기기 운영·관리방침</a>
                    <a href="프로그램뷰어다운로드.html" class="hover:text-slate-900 hover:underline" data-policy="viewer">프로그램뷰어다운로드</a>
                    <a href="누리집오류신고.html" class="hover:text-slate-900 hover:underline" data-policy="error">누리집 오류신고</a>
                    <a href="찾아오시는길.html" class="hover:text-slate-900 hover:underline" data-policy="directions">찾아오시는 길</a>
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
                    
                    <button onclick="openOverlay('family-site-modal', 'family-content-wrapper')" class="ml-1 border border-blue-300 text-blue-700 bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition font-bold whitespace-nowrap shrink-0">
                        <i data-lucide="layers" class="w-4 h-4 inline-block align-text-bottom"></i> 세부조직도
                    </button>
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
// ==========================================
// [Part 2] 공통 모달 (유관기관 모달 버튼 이동 완벽 수정판) 및 스크립트
// ==========================================

const modalsHTML = `
<div id="search-overlay" class="fixed inset-0 z-50 hidden bg-black bg-opacity-80 flex items-start justify-center p-4 pt-10 pb-10" onclick="closeOverlay('search-overlay', 'search-content-wrapper')">
        <div class="w-full max-w-4xl transform transition-all duration-300 scale-95 opacity-0 h-full flex flex-col" id="search-content-wrapper" onclick="event.stopPropagation()">
            <div class="bg-white dark:bg-gray-700 rounded-xl shadow-2xl flex flex-col flex-grow max-h-full overflow-hidden">
                
                <div class="p-6 border-b border-gray-200 dark:border-gray-600 shrink-0">
                    <div class="flex items-center space-x-4">
                        <input type="text" id="header-search-input" placeholder="검색어를 입력하세요..." class="flex-grow p-4 text-xl border-2 border-blue-500 rounded-lg outline-none focus:border-blue-700 dark:bg-gray-800 dark:text-white dark:border-blue-400">
                        <button class="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition shrink-0" onclick="executeSearch()"><i data-lucide="search" class="w-7 h-7"></i></button>
                        <button onclick="closeOverlay('search-overlay', 'search-content-wrapper')" class="text-gray-500 hover:text-gray-700 transition shrink-0"><i data-lucide="x" class="w-7 h-7"></i></button>
                    </div>
                </div>

                <div class="p-6 bg-slate-50 dark:bg-gray-800 flex-grow overflow-y-auto custom-scrollbar">
                    <div class="mb-4 text-sm font-bold text-gray-700 dark:text-gray-300">
                        검색결과 <span id="search-result-count" class="text-blue-600 dark:text-blue-400 text-lg">0</span>건
                    </div>
                    
                    <div id="search-result-list" class="space-y-3">
                        </div>
                    
                    <div id="search-empty-state" class="hidden text-center py-16 text-gray-500 dark:text-gray-400">
                        <i data-lucide="info" class="w-12 h-12 mx-auto mb-3 text-gray-400"></i>
                        <p class="text-lg font-medium">검색 결과가 없습니다.</p>
                        <p class="text-sm mt-1">다른 검색어로 시도해 보세요.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div id="language-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center p-4" onclick="closeOverlay('language-modal', 'language-content-wrapper')">
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 scale-95 opacity-0" id="language-content-wrapper" onclick="event.stopPropagation()">
            <div class="sticky top-0 bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl z-10">
                <h3 class="text-xl font-bold">언어 선택 (Language)</h3>
                <button onclick="closeOverlay('language-modal', 'language-content-wrapper')" class="text-white hover:text-blue-200 transition"><i data-lucide="x" class="w-6 h-6"></i></button>
            </div>
            <div class="p-4 grid grid-cols-2 gap-2 text-center">
                <button class="lang-btn bg-blue-100 text-blue-800 font-bold p-3 rounded-lg hover:bg-blue-200 transition" onclick="setLanguage('ko')">한국어 (Korean)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition" onclick="setLanguage('en')">English</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition" onclick="setLanguage('zh')">중국어 (Chinese)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition" onclick="setLanguage('ja')">일본어 (Japanese)</button>
                <button class="lang-btn bg-slate-100 text-slate-700 font-bold p-3 rounded-lg hover:bg-slate-200 transition" onclick="setLanguage('tl')">Tagalog (따갈로그어)</button>
            </div>
        </div>
    </div>

    <div id="policy-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center p-4" onclick="closeModal()">
        <div id="modal-content-wrapper" class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-95 opacity-0" onclick="event.stopPropagation()">
            <div class="sticky top-0 bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-xl z-10">
                <h3 id="modal-title" class="text-xl font-bold">제목</h3>
                <button onclick="closeModal()" class="text-white hover:text-blue-200 transition"><i data-lucide="x" class="w-6 h-6"></i></button>
            </div>
            <div id="modal-content" class="p-6 text-slate-700 dark:text-gray-300 space-y-4"></div>
        </div>
    </div>

    <div id="family-site-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-60 flex items-center justify-center p-4" onclick="closeOverlay('family-site-modal', 'family-content-wrapper')">
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[85vh] flex flex-col transform transition-all duration-300 scale-95 opacity-0" id="family-content-wrapper" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center p-5 border-b border-slate-200 dark:border-gray-700 bg-slate-50 rounded-t-xl shrink-0">
                <h3 class="text-xl font-black text-blue-800 flex items-center gap-2"><i data-lucide="layers"></i> 효빈광역시 유관기관 상세 안내</h3>
                <button onclick="closeOverlay('family-site-modal', 'family-content-wrapper')" class="text-slate-500 hover:text-slate-900 transition"><i data-lucide="x" class="w-6 h-6"></i></button>
            </div>
            <div class="overflow-y-auto p-6 custom-scrollbar text-sm text-slate-700">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <div>
                        <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">공기업</h4>
                        <ul class="space-y-4">
                            <li>
                                <button onclick="location.href='HyobinMetro/index.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>1. 효빈교통공사</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영/안전</strong></li>
                                    <li><a href="교통공사_기획조정실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획조정실</a></li>
                                    <li><a href="교통공사_경영지원본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">경영지원본부</a></li>
                                    <li><a href="교통공사_안전관리본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">안전관리본부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">영업/기술</strong></li>
                                    <li><a href="교통공사_영업본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">영업본부</a></li>
                                    <li><a href="교통공사_차량본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">차량본부</a></li>
                                    <li><a href="교통공사_시설본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">시설본부</a></li>
                                    <li><a href="교통공사_기술본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기술본부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">노선운영처</strong></li>
                                    <li><a href="교통공사_1호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">1호선운영처</a></li>
                                    <li><a href="교통공사_2호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">2호선운영처</a></li>
                                    <li><a href="교통공사_3호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">3호선운영처</a></li>
                                    <li><a href="교통공사_4호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">4호선운영처</a></li>
                                    <li><a href="교통공사_5호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">5호선운영처</a></li>
                                    <li><a href="교통공사_6호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">6호선운영처</a></li>
                                    <li><a href="교통공사_7호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">7호선운영처</a></li>
                                    <li><a href="교통공사_8호선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">8호선운영처</a></li>
                                    <li><a href="교통공사_빈효선.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">빈효선광역전철운영처</a></li>
                                    <li><a href="교통공사_차량기지.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">차량기지사업소</a></li>
                                    <li><a href="교통공사_관제센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">종합관제센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='city_dev_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>2. 효빈도시공사</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획본부</strong></li>
                                    <li><a href="도시공사_기획경영본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획경영본부</a></li>
                                    <li><a href="도시공사_개발기획처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">개발기획처</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사업처</strong></li>
                                    <li><a href="도시공사_도시개발본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">도시개발본부</a></li>
                                    <li><a href="도시공사_주거복지본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">주거복지본부</a></li>
                                    <li><a href="도시공사_보상처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">보상처</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='facility_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>3. 효빈시설공단</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영안전본부</strong></li>
                                    <li><a href="시설공단_경영지원실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">경영지원실</a></li>
                                    <li><a href="시설공단_안전기술처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">안전기술처</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사업운영처</strong></li>
                                    <li><a href="시설공단_상가운영처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">상가운영처</a></li>
                                    <li><a href="시설공단_주차관리처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">주차관리처</a></li>
                                    <li><a href="시설공단_체육시설운영처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">체육시설운영처</a></li>
                                    <li><a href="시설공단_시민공원관리처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">시민공원관리처</a></li>
                                    <li><a href="시설공단_추모공원운영처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">추모공원운영처</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='env_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>4. 효빈환경공단</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획시설본부</strong></li>
                                    <li><a href="환경공단_기획전략실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획전략실</a></li>
                                    <li><a href="환경공단_환경시설본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">환경시설본부</a></li>
                                    <li><a href="환경공단_수질환경본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">수질환경본부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">현장사업소</strong></li>
                                    <li><a href="환경공단_자원순환본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">자원순환본부</a></li>
                                    <li><a href="환경공단_소각장관리소.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">소각장관리소</a></li>
                                    <li><a href="환경공단_매립장관리소.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">매립장관리소</a></li>
                                    <li><a href="환경공단_하수처리사업소.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">하수처리사업소</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='tour_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>5. 효빈관광공사</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영전략실</strong></li>
                                    <li><a href="관광공사_총무인사팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무인사팀</a></li>
                                    <li><a href="관광공사_재무회계팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재무회계팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사업운영실</strong></li>
                                    <li><a href="관광공사_관광마케팅실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">관광마케팅실</a></li>
                                    <li><a href="관광공사_국내관광기획팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">국내관광기획팀</a></li>
                                    <li><a href="관광공사_해외마케팅팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">해외마케팅팀</a></li>
                                    <li><a href="관광공사_MICE사업팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">MICE사업팀</a></li>
                                    <li><a href="관광공사_관광인프라개발팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">관광인프라개발팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='culture_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>6. 효빈문화공사</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영지원실</strong></li>
                                    <li><a href="문화공사_총무기획팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무기획팀</a></li>
                                    <li><a href="문화공사_안전관리팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">안전관리팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">문화운영본부</strong></li>
                                    <li><a href="문화공사_문화사업본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">문화사업본부</a></li>
                                    <li><a href="문화공사_공연기획처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">공연기획처</a></li>
                                    <li><a href="문화공사_축제운영처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">축제운영처</a></li>
                                    <li><a href="문화공사_지역문화진흥처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">지역문화진흥처</a></li>
                                    <li><a href="문화공사_문화공간운영처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">문화공간운영처</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='water_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>7. 효빈광역시상수도</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획운영처</strong></li>
                                    <li><a href="상수도_인사기획팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">인사기획팀</a></li>
                                    <li><a href="상수도_재무회계팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재무회계팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">기술사업처</strong></li>
                                    <li><a href="상수도_수질기술연구처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">수질기술연구처</a></li>
                                    <li><a href="상수도_누수방지처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">누수방지처</a></li>
                                    <li><a href="상수도_관망관리처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">관망관리처</a></li>
                                    <li><a href="상수도_계량기관리팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">계량기관리팀</a></li>
                                    <li><a href="상수도_기동복구반.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기동복구반</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='sewage_corp.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>8. 효빈광역시하수도</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영기획처</strong></li>
                                    <li><a href="하수도_경영전략팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">경영전략팀</a></li>
                                    <li><a href="하수도_회계계약팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">회계계약팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">관로운영처</strong></li>
                                    <li><a href="하수도_하수관로처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">하수관로처</a></li>
                                    <li><a href="하수도_펌프장관리처.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">펌프장관리처</a></li>
                                    <li><a href="하수도_침수예방대응팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">침수예방대응팀</a></li>
                                    <li><a href="하수도_수질측정팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">수질측정팀</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">출연기관 (1)</h4>
                        <ul class="space-y-4">
                            <li>
                                <button onclick="location.href='hospital.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>9. 효빈의료원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">진료부</strong></li>
                                    <li><a href="의료원_내과계열.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">내과계열</a></li>
                                    <li><a href="의료원_외과계열.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">외과계열</a></li>
                                    <li><a href="의료원_영상의학.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">영상의학</a></li>
                                    <li><a href="의료원_진단검사.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">진단검사</a></li>
                                    <li><a href="의료원_간호부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">간호부</a></li>
                                    <li><a href="의료원_약제부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">약제부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">지원부</strong></li>
                                    <li><a href="의료원_의료원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">의료원장실</a></li>
                                    <li><a href="의료원_감사실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">감사실</a></li>
                                    <li><a href="의료원_총무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무팀</a></li>
                                    <li><a href="의료원_재무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재무팀</a></li>
                                    <li><a href="의료원_원무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원무팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='ani_hall.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>10. 만화애니메이션의전당</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영지원부</strong></li>
                                    <li><a href="애니전당_총무기획팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무기획팀</a></li>
                                    <li><a href="애니전당_시설안전관리부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">시설안전관리부</a></li>
                                    <li><a href="애니전당_교육사업부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">교육사업부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사업기획부</strong></li>
                                    <li><a href="애니전당_전시기획부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">전시기획부</a></li>
                                    <li><a href="애니전당_HAF총괄운영부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">HAF총괄운영부</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='animation_hq.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>11. 효빈애니메이션본부</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">전략기획실</strong></li>
                                    <li><a href="애니본부_본부장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">본부장실</a></li>
                                    <li><a href="애니본부_기획예산팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획예산팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">핵심사업부</strong></li>
                                    <li><a href="애니본부_글로벌IP라이선싱팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">글로벌IP라이선싱팀</a></li>
                                    <li><a href="애니본부_굿즈사업팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">굿즈사업팀</a></li>
                                    <li><a href="애니본부_제작지원팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">제작지원팀</a></li>
                                    <li><a href="애니본부_크리에이터육성팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">크리에이터육성팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='techno.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>12. 효빈테크노파크</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">지원본부</strong></li>
                                    <li><a href="테크노_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="테크노_정책기획단.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">정책기획단</a></li>
                                    <li><a href="테크노_기업지원단.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기업지원단</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">융합연구본부</strong></li>
                                    <li><a href="테크노_첨단소재부품센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">첨단소재부품센터</a></li>
                                    <li><a href="테크노_스마트제조혁신센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">스마트제조혁신센터</a></li>
                                    <li><a href="테크노_바이오융합센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">바이오융합센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='info_promotion.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>13. 효빈정보산업진흥원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영기획단</strong></li>
                                    <li><a href="정보진흥원_총무재무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무재무팀</a></li>
                                    <li><a href="정보진흥원_안전지원팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">안전지원팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">정보사업본부</strong></li>
                                    <li><a href="정보진흥원_ICT산업본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">ICT산업본부</a></li>
                                    <li><a href="정보진흥원_SW융합본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">SW융합본부</a></li>
                                    <li><a href="정보진흥원_디지털인프라팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">디지털인프라팀</a></li>
                                    <li><a href="정보진흥원_정보보안센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">정보보안센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='econ_promotion.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>14. 효빈경제진흥원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영기획실</strong></li>
                                    <li><a href="경제진흥원_기획예산팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획예산팀</a></li>
                                    <li><a href="경제진흥원_인사총무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">인사총무팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">경제사업본부</strong></li>
                                    <li><a href="경제진흥원_일자리지원본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">일자리지원본부</a></li>
                                    <li><a href="경제진흥원_소상공인지원본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">소상공인지원본부</a></li>
                                    <li><a href="경제진흥원_창업지원본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">창업지원본부</a></li>
                                    <li><a href="경제진흥원_기업육성본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기업육성본부</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='credit.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>15. 효빈신용보증재단</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획리스크부</strong></li>
                                    <li><a href="신보_이사장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">이사장실</a></li>
                                    <li><a href="신보_기획관리부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">기획관리부</a></li>
                                    <li><a href="신보_리스크관리부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">리스크관리부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">보증사업부</strong></li>
                                    <li><a href="신보_보증사업부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">보증사업부</a></li>
                                    <li><a href="신보_재기지원부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재기지원부</a></li>
                                    <li><a href="신보_본점.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">본점</a></li>
                                    <li><a href="신보_북부지점.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">북부지점</a></li>
                                    <li><a href="신보_남부지점.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">남부지점</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-lg text-blue-700 border-b-2 border-blue-200 pb-2 mb-3">출연기관 (2) & 출자기관</h4>
                        <ul class="space-y-4">
                            <li>
                                <button onclick="location.href='research.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>16. 효빈연구원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획조정실</strong></li>
                                    <li><a href="연구원_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="연구원_데이터분석센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">데이터분석센터</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">정책연구실</strong></li>
                                    <li><a href="연구원_도시전략연구실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">도시전략연구실</a></li>
                                    <li><a href="연구원_경제산업연구실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">경제산업연구실</a></li>
                                    <li><a href="연구원_사회문화연구실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">사회문화연구실</a></li>
                                    <li><a href="연구원_교통환경연구실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">교통환경연구실</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='science.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>17. 효빈산업과학혁신원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획조정실</strong></li>
                                    <li><a href="혁신원_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="혁신원_경영지원팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">경영지원팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">기술기획본부</strong></li>
                                    <li><a href="혁신원_R&D평가본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">R&D평가본부</a></li>
                                    <li><a href="혁신원_미래기술기획본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">미래기술기획본부</a></li>
                                    <li><a href="혁신원_산학연협력지원센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">산학연협력지원센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='social_service.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>18. 효빈광역시사회서비스원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">행정지원본부</strong></li>
                                    <li><a href="사서원_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="사서원_본부행정팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">본부행정팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">사회돌봄지원단</strong></li>
                                    <li><a href="사서원_국공립어린이집지원단.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">국공립어린이집지원단</a></li>
                                    <li><a href="사서원_종합재가센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">종합재가센터</a></li>
                                    <li><a href="사서원_노인돌봄지원단.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">노인돌봄지원단</a></li>
                                    <li><a href="사서원_긴급돌봄지원단.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">긴급돌봄지원단</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='edu_promotion.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>19. 효빈성평등가족평생교육진흥원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영기획실</strong></li>
                                    <li><a href="평생교육_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="평생교육_재무관리팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재무관리팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">교육지원팀</strong></li>
                                    <li><a href="평생교육_성평등정책연구팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">성평등정책연구팀</a></li>
                                    <li><a href="평생교육_가족지원사업팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">가족지원사업팀</a></li>
                                    <li><a href="평생교육_평생교육운영팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">평생교육운영팀</a></li>
                                    <li><a href="평생교육_민주시민교육팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">민주시민교육팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='global.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>20. 효빈글로벌도시재단</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">기획행정실</strong></li>
                                    <li><a href="글로벌_이사장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">이사장실</a></li>
                                    <li><a href="글로벌_총무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">국제지원팀</strong></li>
                                    <li><a href="글로벌_국제협력팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">국제협력팀</a></li>
                                    <li><a href="글로벌_ODA사업팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">ODA사업팀</a></li>
                                    <li><a href="글로벌_글로벌빌리지.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">글로벌빌리지</a></li>
                                    <li><a href="글로벌_통번역지원센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">통번역지원센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='design.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>21. 효빈디자인진흥원</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영지원팀</strong></li>
                                    <li><a href="디자인_원장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">원장실</a></li>
                                    <li><a href="디자인_행정지원팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">행정지원팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">디자인사업팀</strong></li>
                                    <li><a href="디자인_산업팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">산업팀</a></li>
                                    <li><a href="디자인_공공디자인팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">공공디자인팀</a></li>
                                    <li><a href="디자인_시각산업디자인지원팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">시각산업디자인지원팀</a></li>
                                    <li><a href="디자인_전시실운영팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">전시실운영팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='culture_foundation.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>22. 효빈문화재단</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영기획본부</strong></li>
                                    <li><a href="문화재단_대표이사실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">대표이사실</a></li>
                                    <li><a href="문화재단_재무행정팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">재무행정팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">문화지원본부</strong></li>
                                    <li><a href="문화재단_예술지원본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">예술지원본부</a></li>
                                    <li><a href="문화재단_생활문화본부.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">생활문화본부</a></li>
                                    <li><a href="문화재단_문화유산보존팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">문화유산보존팀</a></li>
                                    <li><a href="문화재단_예술인복지센터.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">예술인복지센터</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='culture_center.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-slate-100 p-2 rounded hover:bg-blue-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>23. 효빈문화회관</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-slate-200 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">행정지원과</strong></li>
                                    <li><a href="문화회관_관장실.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">관장실</a></li>
                                    <li><a href="문화회관_총무팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">총무팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">운영기획과</strong></li>
                                    <li><a href="문화회관_공연기획과.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">공연기획과</a></li>
                                    <li><a href="문화회관_무대기술과.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">무대기술과</a></li>
                                    <li><a href="문화회관_하우스매니지먼트팀.html" class="block w-full p-1 hover:bg-slate-100 hover:text-blue-600 rounded transition">하우스매니지먼트팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='hsco.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-yellow-50 p-2 rounded hover:bg-yellow-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>24. HSCO (출자기관)</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-yellow-300 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영마케팅본부</strong></li>
                                    <li><a href="HSCO_대표이사실.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">대표이사실</a></li>
                                    <li><a href="HSCO_경영지원본부.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">경영지원본부</a></li>
                                    <li><a href="HSCO_마케팅본부.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">마케팅본부</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">컨벤션사업본부</strong></li>
                                    <li><a href="HSCO_전시기획본부.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">전시기획본부</a></li>
                                    <li><a href="HSCO_컨벤션유치본부.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">컨벤션유치본부</a></li>
                                    <li><a href="HSCO_시설운영팀.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">시설운영팀</a></li>
                                </ul>
                            </li>
                            <li>
                                <button onclick="location.href='leisure.html'" class="w-full flex justify-between items-center font-bold text-slate-800 bg-yellow-50 p-2 rounded hover:bg-yellow-100 hover:text-blue-700 transition cursor-pointer">
                                    <span>25. 효빈컬쳐레스풀 (출자기관)</span><i data-lucide="external-link" class="w-4 h-4"></i>
                                </button>
                                <ul class="pl-2 mt-2 space-y-1 border-l-2 border-yellow-300 text-xs">
                                    <li><strong class="text-blue-600 block mt-1 mb-1">경영관리팀</strong></li>
                                    <li><a href="컬쳐_대표이사실.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">대표이사실</a></li>
                                    <li><a href="컬쳐_재무관리팀.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">재무관리팀</a></li>
                                    <li><strong class="text-blue-600 block mt-2 mb-1">레저사업본부</strong></li>
                                    <li><a href="컬쳐_레저파크운영본부.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">레저파크운영본부</a></li>
                                    <li><a href="컬쳐_테마파크기획팀.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">테마파크기획팀</a></li>
                                    <li><a href="컬쳐_고객서비스팀.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">고객서비스팀</a></li>
                                    <li><a href="컬쳐_안전관리팀.html" class="block w-full p-1 hover:bg-yellow-50 hover:text-blue-600 rounded transition">안전관리팀</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="full-menu-modal" class="fixed inset-0 z-50 hidden bg-black bg-opacity-70 flex items-start justify-end" onclick="closeOverlay('full-menu-modal', 'full-menu-content-wrapper')">
        <div class="bg-white dark:bg-gray-800 w-full max-w-sm h-full shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="full-menu-content-wrapper" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center p-6 border-b border-slate-200 dark:border-gray-700 shrink-0">
                <h3 class="text-2xl font-black text-blue-700 dark:text-blue-400">전체 메뉴</h3>
                <button onclick="closeOverlay('full-menu-modal', 'full-menu-content-wrapper')" class="text-slate-500 hover:text-slate-900 transition"><i data-lucide="x" class="w-7 h-7"></i></button>
            </div>
            
            <div class="overflow-y-auto flex-grow p-4 custom-scrollbar">
                <ul class="space-y-1 font-semibold text-[15px] text-slate-700 dark:text-gray-200">
                    
                    <li>
                        <button class="w-full flex justify-between items-center p-3 hover:bg-blue-50 dark:hover:bg-gray-700 rounded transition-colors" onclick="toggleMobileMenu(this)">
                            시정·조직안내 <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-200"></i>
                        </button>
                        <ul class="hidden pl-4 mt-1 space-y-1 text-sm text-slate-600 dark:text-gray-300 font-medium border-l-2 border-blue-100 ml-3">
                            
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">
                                    시 본청 (105개 부서) <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-xs text-gray-500 border-l border-gray-200 ml-2 tracking-tighter">
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">시장/부시장 직속 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">시장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="비서실.html" class="block w-full p-1 hover:text-blue-500">- 비서실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">대변인 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="홍보담당관.html" class="block w-full p-1 hover:text-blue-500">- 홍보담당관</a></li><li><a href="공보담당관.html" class="block w-full p-1 hover:text-blue-500">- 공보담당관</a></li><li><a href="미디어담당관.html" class="block w-full p-1 hover:text-blue-500">- 미디어담당관</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">행정부시장 직속 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="행정부시장실.html" class="block w-full p-1 hover:text-blue-500">- 행정부시장실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">미래혁신부시장 직속 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="미래혁신부시장실.html" class="block w-full p-1 hover:text-blue-500">- 미래혁신부시장실</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">기획조정실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">기획담당관실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="기획관.html" class="block w-full p-1 hover:text-blue-500">- 기획관</a></li><li><a href="기획담당관.html" class="block w-full p-1 hover:text-blue-500">- 기획담당관</a></li><li><a href="조직담당관.html" class="block w-full p-1 hover:text-blue-500">- 조직담당관</a></li><li><a href="인구정책담당관.html" class="block w-full p-1 hover:text-blue-500">- 인구정책담당관</a></li><li><a href="법무담당관.html" class="block w-full p-1 hover:text-blue-500">- 법무담당관</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">재정관 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">재정담당관실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="예산담당관.html" class="block w-full p-1 hover:text-blue-500">- 예산담당관</a></li><li><a href="공공기관담당관.html" class="block w-full p-1 hover:text-blue-500">- 공공기관담당관</a></li><li><a href="세정정책운영담당관.html" class="block w-full p-1 hover:text-blue-500">- 세정정책/운영담당관</a></li><li><a href="회계재산담당관.html" class="block w-full p-1 hover:text-blue-500">- 회계재산담당관</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">시민안전실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">안전재난담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="안전정책중대재해예방과.html" class="block w-full p-1 hover:text-blue-500">- 안전정책/중대재해예방과</a></li><li><a href="자연사회재난과.html" class="block w-full p-1 hover:text-blue-500">- 자연/사회재난과</a></li><li><a href="원자력안전과.html" class="block w-full p-1 hover:text-blue-500">- 원자력안전과</a></li><li><a href="특별사법경찰과.html" class="block w-full p-1 hover:text-blue-500">- 특별사법경찰과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">문화체육국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">문화체육담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="문화예술유산과.html" class="block w-full p-1 hover:text-blue-500">- 문화예술/유산과</a></li><li><a href="애니메이션산업과.html" class="block w-full p-1 hover:text-blue-500">- 애니메이션산업과</a></li><li><a href="영상콘텐츠산업과.html" class="block w-full p-1 hover:text-blue-500">- 영상콘텐츠산업과</a></li><li><a href="체육정책생활체육과.html" class="block w-full p-1 hover:text-blue-500">- 체육정책/생활체육과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">사회복지여성가족국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">복지여성담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="복지정책돌봄복지과.html" class="block w-full p-1 hover:text-blue-500">- 복지정책/돌봄복지과</a></li><li><a href="장애인노인복지과.html" class="block w-full p-1 hover:text-blue-500">- 장애인/노인복지과</a></li><li><a href="여성가족과.html" class="block w-full p-1 hover:text-blue-500">- 여성가족과</a></li><li><a href="출산보육아동청소년과.html" class="block w-full p-1 hover:text-blue-500">- 출산보육/아동청소년과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">시민건강/행정자치국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">보건행정담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="건강정책보건위생과.html" class="block w-full p-1 hover:text-blue-500">- 건강정책/보건위생과</a></li><li><a href="감염병관리과.html" class="block w-full p-1 hover:text-blue-500">- 감염병관리과</a></li><li><a href="자치행정총무과인사과.html" class="block w-full p-1 hover:text-blue-500">- 자치행정/총무과/인사과</a></li><li><a href="정보화정책통합민원과.html" class="block w-full p-1 hover:text-blue-500">- 정보화정책/통합민원과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">디지털경제실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">경제투자담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="경제정책일자리노동과.html" class="block w-full p-1 hover:text-blue-500">- 경제정책/일자리노동과</a></li><li><a href="중소상공인지원과.html" class="block w-full p-1 hover:text-blue-500">- 중소상공인지원과</a></li><li><a href="금융창업정책벤처과.html" class="block w-full p-1 hover:text-blue-500">- 금융창업정책/벤처과</a></li><li><a href="투자유치기업지원과.html" class="block w-full p-1 hover:text-blue-500">- 투자유치/기업지원과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">미래기술/첨단산업국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">미래산업담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="산업정책반도체신소재과.html" class="block w-full p-1 hover:text-blue-500">- 산업정책/반도체신소재과</a></li><li><a href="미래에너지산업과.html" class="block w-full p-1 hover:text-blue-500">- 미래에너지산업과</a></li><li><a href="인공지능SW빅데이터과.html" class="block w-full p-1 hover:text-blue-500">- 인공지능SW/빅데이터과</a></li><li><a href="연구개발바이오헬스과.html" class="block w-full p-1 hover:text-blue-500">- 연구개발/바이오헬스과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">교통혁신국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">교통물류담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="교통혁신대중교통과.html" class="block w-full p-1 hover:text-blue-500">- 교통혁신/대중교통과</a></li><li><a href="도시철도운영과.html" class="block w-full p-1 hover:text-blue-500">- 도시철도운영과</a></li><li><a href="택시운수과.html" class="block w-full p-1 hover:text-blue-500">- 택시운수과</a></li><li><a href="효빈국제공항추진본부.html" class="block w-full p-1 hover:text-blue-500">- 효빈국제공항추진본부</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">도시혁신균형/계획국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">도시인프라담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="미래혁신기획과.html" class="block w-full p-1 hover:text-blue-500">- 미래혁신기획과</a></li><li><a href="도시인프라개발건설행정과.html" class="block w-full p-1 hover:text-blue-500">- 도시인프라개발/건설행정과</a></li><li><a href="도시시설도로계획과.html" class="block w-full p-1 hover:text-blue-500">- 도시/시설/도로계획과</a></li><li><a href="주택정책건축도시정비과.html" class="block w-full p-1 hover:text-blue-500">- 주택정책/건축/도시정비과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">관광마이스/청년산학국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">관광청년담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="관광정책마이스산업과.html" class="block w-full p-1 hover:text-blue-500">- 관광정책/마이스산업과</a></li><li><a href="국제협력과.html" class="block w-full p-1 hover:text-blue-500">- 국제협력과</a></li><li><a href="청년정책창조교육과.html" class="block w-full p-1 hover:text-blue-500">- 청년정책/창조교육과</a></li><li><a href="지산학협력과.html" class="block w-full p-1 hover:text-blue-500">- 지산학협력과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">환경/해양농수산국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-4 mt-1 space-y-1 text-[11px] text-gray-400 border-l border-gray-100 ml-2">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">환경해양농수산담당 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400"><li><a href="환경맑은물탄소중립과.html" class="block w-full p-1 hover:text-blue-500">- 환경/맑은물/탄소중립과</a></li><li><a href="공원여가반려동물과.html" class="block w-full p-1 hover:text-blue-500">- 공원여가/반려동물과</a></li><li><a href="해양수도해운항만과.html" class="block w-full p-1 hover:text-blue-500">- 해양수도/해운항만과</a></li><li><a href="수산정책농축산유통과.html" class="block w-full p-1 hover:text-blue-500">- 수산정책/농축산유통과</a></li></ul></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">
                                    의회·합의제·출장소 <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-xs text-gray-500 border-l border-gray-200 ml-2 tracking-tighter">
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">효빈광역시의회 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">의장단 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="의장실.html" class="block w-full p-1 hover:text-blue-500">- 의장실</a></li><li><a href="제1부의장실.html" class="block w-full p-1 hover:text-blue-500">- 제1부의장실</a></li><li><a href="제2부의장실.html" class="block w-full p-1 hover:text-blue-500">- 제2부의장실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">의회사무처 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="의회총무담당관.html" class="block w-full p-1 hover:text-blue-500">- 총무담당관</a></li><li><a href="의사담당관.html" class="block w-full p-1 hover:text-blue-500">- 의사담당관</a></li><li><a href="입법정책담당관.html" class="block w-full p-1 hover:text-blue-500">- 입법정책담당관</a></li><li><a href="홍보소통담당관.html" class="block w-full p-1 hover:text-blue-500">- 홍보소통담당관</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">상임위원회 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="의회운영위원회.html" class="block w-full p-1 hover:text-blue-500">- 의회운영위원회</a></li><li><a href="행정기획위원회.html" class="block w-full p-1 hover:text-blue-500">- 행정기획위원회</a></li><li><a href="보건복지위원회.html" class="block w-full p-1 hover:text-blue-500">- 보건복지위원회</a></li><li><a href="경제산업위원회.html" class="block w-full p-1 hover:text-blue-500">- 경제산업위원회</a></li><li><a href="문화환경위원회.html" class="block w-full p-1 hover:text-blue-500">- 문화환경위원회</a></li><li><a href="안전건설위원회.html" class="block w-full p-1 hover:text-blue-500">- 안전건설위원회</a></li><li><a href="도시교통위원회.html" class="block w-full p-1 hover:text-blue-500">- 도시교통위원회</a></li><li><a href="교육위원회.html" class="block w-full p-1 hover:text-blue-500">- 교육위원회</a></li><li><a href="예산결산특별위원회.html" class="block w-full p-1 hover:text-blue-500">- 예산결산특별위원회</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">자치경찰위원회 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">위원장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="상임위원실.html" class="block w-full p-1 hover:text-blue-500">- 상임위원실</a></li><li><a href="비상임위원실.html" class="block w-full p-1 hover:text-blue-500">- 비상임위원실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">사무국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="자치경찰행정과.html" class="block w-full p-1 hover:text-blue-500">- 자치경찰행정과</a></li><li><a href="자치경찰관리과.html" class="block w-full p-1 hover:text-blue-500">- 자치경찰관리과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">감사위원회 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">위원장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="감사_상임위원실.html" class="block w-full p-1 hover:text-blue-500">- 상임위원실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">사무국 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="감사담당관.html" class="block w-full p-1 hover:text-blue-500">- 감사담당관</a></li><li><a href="청렴담당관.html" class="block w-full p-1 hover:text-blue-500">- 청렴담당관</a></li><li><a href="권익보호담당관.html" class="block w-full p-1 hover:text-blue-500">- 권익보호담당관</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">서남해안경제자유구역청 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">청장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="차장실.html" class="block w-full p-1 hover:text-blue-500">- 차장실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">기획행정본부 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="총무팀.html" class="block w-full p-1 hover:text-blue-500">- 총무팀</a></li><li><a href="기획예산팀.html" class="block w-full p-1 hover:text-blue-500">- 기획예산팀</a></li><li><a href="홍보팀.html" class="block w-full p-1 hover:text-blue-500">- 홍보팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">개발투자본부 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="개발계획팀.html" class="block w-full p-1 hover:text-blue-500">- 개발계획팀</a></li><li><a href="민자유치팀.html" class="block w-full p-1 hover:text-blue-500">- 민자유치팀</a></li><li><a href="인프라조성팀.html" class="block w-full p-1 hover:text-blue-500">- 인프라조성팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">기업지원본부 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="기업입주지원팀.html" class="block w-full p-1 hover:text-blue-500">- 기업입주지원팀</a></li><li><a href="행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="노무환경팀.html" class="block w-full p-1 hover:text-blue-500">- 노무환경팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">
                                    직속기관 (소방/연구 등) <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-xs text-gray-500 border-l border-gray-200 ml-2 tracking-tighter">
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">효빈소방재난본부 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">본부장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="방호조사과.html" class="block w-full p-1 hover:text-blue-500">- 방호조사과</a></li><li><a href="구조구급과.html" class="block w-full p-1 hover:text-blue-500">- 구조구급과</a></li><li><a href="119종합상황실.html" class="block w-full p-1 hover:text-blue-500">- 119종합상황실</a></li><li><a href="재난예방담당관.html" class="block w-full p-1 hover:text-blue-500">- 재난예방담당관</a></li><li><a href="소방감사담당관.html" class="block w-full p-1 hover:text-blue-500">- 소방감사담당관</a></li><li><a href="회계장비담당관.html" class="block w-full p-1 hover:text-blue-500">- 회계장비담당관</a></li><li><a href="119특수대응단.html" class="block w-full p-1 hover:text-blue-500">- 119특수대응단</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">효빈소방학교 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">학교장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="교육기획과.html" class="block w-full p-1 hover:text-blue-500">- 교육기획과</a></li><li><a href="교수운영과.html" class="block w-full p-1 hover:text-blue-500">- 교수운영과</a></li><li><a href="현장훈련센터.html" class="block w-full p-1 hover:text-blue-500">- 현장훈련센터</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">일선 소방서 (9개소) <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">중부소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="중부_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="중부_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="중부_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="중부_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="중부_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">동부소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="동부_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="동부_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="동부_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="동부_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="동부_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">서부소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="서부_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="서부_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="서부_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="서부_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="서부_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">남부소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="남부_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="남부_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="남부_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="남부_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="남부_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">북부소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="북부_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="북부_예방안전과.html" class="block p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="북부_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="북부_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="북부_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">안천소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="안천_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="안천_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="안천_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="안천_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="안천_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">창전소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="창전_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="창전_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="창전_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="창전_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="창전_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">청엽소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="청엽_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="청엽_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="청엽_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="청엽_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="청엽_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">탄성소방서 (서장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="탄성_소방행정과.html" class="block w-full p-1 hover:text-blue-500">- 소방행정과</a></li><li><a href="탄성_예방안전과.html" class="block w-full p-1 hover:text-blue-500">- 예방안전과</a></li><li><a href="탄성_현장대응단.html" class="block w-full p-1 hover:text-blue-500">- 현장대응단</a></li><li><a href="탄성_119안전센터.html" class="block w-full p-1 hover:text-blue-500">- 관할 119안전센터</a></li><li><a href="탄성_119구조대.html" class="block w-full p-1 hover:text-blue-500">- 119구조대</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">보건환경연구원 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">원장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="보건_총무과.html" class="block w-full p-1 hover:text-blue-500">- 총무과</a></li><li><a href="감염병연구부.html" class="block w-full p-1 hover:text-blue-500">- 감염병연구부</a></li><li><a href="식약연구부.html" class="block w-full p-1 hover:text-blue-500">- 식약연구부</a></li><li><a href="대기환경연구부.html" class="block w-full p-1 hover:text-blue-500">- 대기환경연구부</a></li><li><a href="물환경연구부.html" class="block w-full p-1 hover:text-blue-500">- 물환경연구부</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">인재개발원 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">원장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="교육기획과.html" class="block w-full p-1 hover:text-blue-500">- 교육기획과</a></li><li><a href="역량개발과.html" class="block w-full p-1 hover:text-blue-500">- 역량개발과</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">농업기술센터 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">소장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="지도정책과.html" class="block w-full p-1 hover:text-blue-500">- 지도정책과</a></li><li><a href="기술보급과.html" class="block w-full p-1 hover:text-blue-500">- 기술보급과</a></li><li><a href="농기계임대사업소.html" class="block w-full p-1 hover:text-blue-500">- 탄성군 농기계임대사업소</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">서울본부/세종사무소 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">본부장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="대외협력팀.html" class="block w-full p-1 hover:text-blue-500">- 대외협력팀</a></li><li><a href="국회협력팀.html" class="block w-full p-1 hover:text-blue-500">- 국회협력팀</a></li><li><a href="세종사무소팀.html" class="block w-full p-1 hover:text-blue-500">- 세종사무소팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                            <li>
                                <button class="w-full flex justify-between items-center p-2 hover:text-blue-600 transition-colors" onclick="toggleMobileMenu(this)">
                                    사업소 (32개소 완벽분리) <i data-lucide="chevron-down" class="w-4 h-4 transition-transform duration-200"></i>
                                </button>
                                <ul class="hidden pl-4 mt-1 space-y-1 text-xs text-gray-500 border-l border-gray-200 ml-2 tracking-tighter">
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">상수도사업본부 (본청) <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">본부장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="수도_관리부.html" class="block w-full p-1 hover:text-blue-500">- 관리부</a></li><li><a href="수도_급수부.html" class="block w-full p-1 hover:text-blue-500">- 급수부</a></li><li><a href="수도_시설부.html" class="block w-full p-1 hover:text-blue-500">- 시설부</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">수도사업소 (9개소) <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">중부수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="중부수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="중부수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="중부수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">동부수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="동부수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="동부수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="동부수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">서부수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="서부수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="서부수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="서부수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">남부수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="남부수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="남부수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="남부수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">북부수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="북부수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="북부수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="북부수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">안천수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="안천수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="안천수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="안천수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">창전수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="창전수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="창전수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="창전수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">청엽수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="청엽수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="청엽수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="청엽수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">탄성수도사업소 (소장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="탄성수도_행정팀.html" class="block w-full p-1 hover:text-blue-500">- 행정팀</a></li><li><a href="탄성수도_요금팀.html" class="block w-full p-1 hover:text-blue-500">- 요금팀</a></li><li><a href="탄성수도_누수복구팀.html" class="block w-full p-1 hover:text-blue-500">- 누수복구팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">건설본부 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">본부장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="건설_총무부.html" class="block w-full p-1 hover:text-blue-500">- 총무부</a></li><li><a href="건설_토목부.html" class="block w-full p-1 hover:text-blue-500">- 토목부</a></li><li><a href="건설_건축시설부.html" class="block w-full p-1 hover:text-blue-500">- 건축시설부</a></li><li><a href="건설_보상부.html" class="block w-full p-1 hover:text-blue-500">- 보상부</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">차량등록사업소 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">소장실 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="차량_등록1팀.html" class="block w-full p-1 hover:text-blue-500">- 등록1팀</a></li><li><a href="차량_등록2팀.html" class="block w-full p-1 hover:text-blue-500">- 등록2팀</a></li><li><a href="차량_검사팀.html" class="block w-full p-1 hover:text-blue-500">- 검사팀</a></li><li><a href="차량_특별사법경찰팀.html" class="block w-full p-1 hover:text-blue-500">- 특별사법경찰팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">시립박물관 / 시립미술관 <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">시립박물관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="박물관_관리팀.html" class="block w-full p-1 hover:text-blue-500">- 관리팀</a></li><li><a href="박물관_학예연구팀.html" class="block w-full p-1 hover:text-blue-500">- 학예연구팀</a></li><li><a href="박물관_전시운영팀.html" class="block w-full p-1 hover:text-blue-500">- 전시운영팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">시립미술관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="미술관_관리팀.html" class="block w-full p-1 hover:text-blue-500">- 관리팀</a></li><li><a href="미술관_학예연구팀.html" class="block w-full p-1 hover:text-blue-500">- 학예연구팀</a></li><li><a href="미술관_전시운영팀.html" class="block w-full p-1 hover:text-blue-500">- 전시운영팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">시립도서관 (10개소) <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈중앙도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="효빈중앙_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="효빈중앙_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="효빈중앙_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">중구시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="중구도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="중구도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="중구도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">동구시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="동구도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="동구도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="동구도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">서구시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="서구도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="서구도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="서구도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">남구시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="남구도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="남구도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="남구도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">북구시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="북구도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="북구도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="북구도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">안천시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="안천도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="안천도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="안천도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">창전시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="창전도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="창전도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="창전도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">청엽시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="청엽도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="청엽도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="청엽도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">탄성시립도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="탄성도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="탄성도서관_자료봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 자료봉사팀</a></li><li><a href="탄성도서관_종합자료실.html" class="block w-full p-1 hover:text-blue-500">- 종합자료실</a></li></ul></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <button class="w-full flex justify-between items-center p-1 hover:text-blue-500 transition-colors" onclick="toggleMobileMenu(this)">특화도서관 (8개소) <i data-lucide="chevron-down" class="w-3 h-3"></i></button>
                                        <ul class="hidden pl-3 space-y-1 text-[10px] text-slate-400">
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈만화특화도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="만화도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="만화도서관_애니자료실.html" class="block w-full p-1 hover:text-blue-500">- 애니자료실</a></li><li><a href="만화도서관_코믹스열람실.html" class="block w-full p-1 hover:text-blue-500">- 코믹스열람실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈어린이도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="어린이도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="어린이도서관_유아열람팀.html" class="block w-full p-1 hover:text-blue-500">- 유아열람팀</a></li><li><a href="어린이도서관_아동자료팀.html" class="block w-full p-1 hover:text-blue-500">- 아동자료팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈청년도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="청년도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="청년도서관_취업자료실.html" class="block w-full p-1 hover:text-blue-500">- 취업자료실</a></li><li><a href="청년도서관_스터디룸관리팀.html" class="block w-full p-1 hover:text-blue-500">- 스터디룸관리팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈과학도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="과학도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="과학도서관_과학자료실.html" class="block w-full p-1 hover:text-blue-500">- 과학자료실</a></li><li><a href="과학도서관_디지털열람팀.html" class="block w-full p-1 hover:text-blue-500">- 디지털열람팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈음악도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="음악도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="음악도서관_음원자료실.html" class="block w-full p-1 hover:text-blue-500">- 음원자료실</a></li><li><a href="음악도서관_LP감상실.html" class="block w-full p-1 hover:text-blue-500">- LP감상실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈점자도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="점자도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="점자도서관_점자출판팀.html" class="block w-full p-1 hover:text-blue-500">- 점자출판팀</a></li><li><a href="점자도서관_시각장애인봉사팀.html" class="block w-full p-1 hover:text-blue-500">- 시각장애인봉사팀</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈해양도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="해양도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="해양도서관_해양자료팀.html" class="block w-full p-1 hover:text-blue-500">- 해양자료팀</a></li><li><a href="해양도서관_선박역사실.html" class="block w-full p-1 hover:text-blue-500">- 선박역사실</a></li></ul></li>
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">효빈지산학도서관 (관장실) <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="지산학도서관_행정지원팀.html" class="block w-full p-1 hover:text-blue-500">- 행정지원팀</a></li><li><a href="지산학도서관_산학연구자료실.html" class="block w-full p-1 hover:text-blue-500">- 산학연구자료실</a></li><li><a href="지산학도서관_논문지원팀.html" class="block w-full p-1 hover:text-blue-500">- 논문지원팀</a></li></ul></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><a href="소통참여.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">소통·참여</a></li>
                    <li><a href="열린민원.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">열린민원</a></li>
                    <li><a href="행정정보공개.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">정보공개</a></li>
                    <li><a href="intro.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">효빈소개</a></li>
                    <li><a href="life.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">분야별 정보</a></li>
                    <li><a href="district_search.html" class="block p-3 hover:text-blue-600 transition-colors">행정구역 검색</a></li>

                </ul>
            </div>
        </div>
    </div>
`;

// ==========================================
// [스크립트 실행부]
// ==========================================

document.addEventListener("DOMContentLoaded", function() {
    const oldModals = ['search-overlay', 'language-modal', 'full-menu-modal', 'policy-modal', 'family-site-modal'];
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

window.goFamilySite = function() {
    const selectBox = document.getElementById('family-site');
    if (selectBox && selectBox.value !== "") {
        location.href = selectBox.value;
    } else {
        alert("이동할 기관을 선택해주세요.");
    }
};

window.toggleMobileMenu = function(btn) {
    const submenu = btn.nextElementSibling;
    const icon = btn.querySelector('i');
    const currentLi = btn.parentElement;
    const parentUl = currentLi.parentElement;
    
    if (submenu.classList.contains('hidden')) {
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

        submenu.classList.remove('hidden');
        icon.classList.add('rotate-180');
        
    } else {
        submenu.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
};

window.openOverlay = function(modalId, contentId) {
    const modal = document.getElementById(modalId);
    const content = document.getElementById(contentId);
    if (modal && content) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            content.classList.remove('scale-95', 'opacity-0');
        }, 10);
    }
};

window.closeOverlay = function(modalId, contentId) {
    const modal = document.getElementById(modalId);
    const content = document.getElementById(contentId);
    if (modal && content) {
        content.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
};

window.setLanguage = function(lang) {
    alert("선택하신 언어(" + lang + ")로 변경합니다.");
    
    // script.js에 정의된 실제 언어 변경 로직 호출
    if (typeof applyTranslation === 'function') {
        applyTranslation(lang);
    }
    
    closeOverlay('language-modal', 'language-content-wrapper');
};