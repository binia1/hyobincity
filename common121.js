// ==========================================
// [Part 1] 공통 헤더(PC 전체 메뉴) & 공통 푸터
// (※ 슬래시(/) 묶음 0%, 모든 항목 개별 분리, 효빈위키 특화사업 100% 반영)
// ==========================================

const headerHTML = `
    <header class="bg-[#1e293b] text-white">
        <div class="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
            <div class="flex items-center cursor-pointer gap-3" onclick="location.href='index.html'">
                <img src="이미지/효빈시_로고.webp" alt="효빈광역시 로고" class="h-10 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
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
                    <span class="hover:text-blue-300 transition block" onclick="location.href='공지사항.html'">소통ㆍ참여</span>
                    <div class="absolute left-0 top-full w-full bg-white text-slate-800 shadow-2xl border-t-[3px] border-blue-600 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex p-6 z-50 whitespace-normal">
                        <div class="grid grid-cols-4 gap-8 w-full font-normal leading-normal">
                            <div>
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">시민 경청</h4>
                                <ul class="space-y-2 text-[13px]">
                                    <li><a href="mayor.html" class="hover:text-blue-600">시장실</a></li>
                                    <li><a href="시장에게바란다.html" class="hover:text-blue-600">시장에게 바란다</a></li>
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
                                                    <li class="pl-2"><a href="예산결산예산결산특별위원회.html" class="hover:text-blue-600 block">예산결산특별위원회</a></li>
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
                    <span class="hover:text-blue-300 transition block" onclick="location.href='민원업무안내.html'">열린민원</span>
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
                                <h4 class="font-bold text-blue-700 mb-3 border-b-2 border-blue-100 pb-2">특화사업 현황</h4>
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
                                    <li><a href="city_hall.html" class="hover:text-blue-600">청사안내</a></li>
                                    <li><a href="contact.html" class="hover:text-blue-600">찾아오시는길</a></li>
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
                                    <li><a href="library.html" class="hover:text-blue-600">교육도서관</a></li>
                                    <li><a href="환경.html" class="hover:text-blue-600">환경</a></li>
                                    <li><a href="청소.html" class="hover:text-blue-600">청소</a></li>
                                    <li><a href="재난안전.html" class="hover:text-blue-600">재난안전</a></li>
                                    <li><a href="농업.html" class="hover:text-blue-600">농업</a></li>
                                    <li><a href="도시농업.html" class="hover:text-blue-600">도시농업</a></li>
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
                                    <li><a href="job.html" class="hover:text-blue-600">일자리센터</a></li>
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
                                    <li><a href="tour.html" class="hover:text-blue-600">효빈 관광지도</a></li>
                                    <li><a href="haf_2026_site.html" class="hover:text-blue-600 text-blue-800">HAF (효빈 애니 축제)</a></li>
                                    <li><a href="banner_3.html" class="hover:text-blue-600">효빈 시티투어</a></li>
                                    <li><a href="vr.html" class="hover:text-blue-600">VR 랜드마크 투어</a></li>
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
                            <a href="북구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">북구</a>
                            <a href="중구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">중구</a>                            <a href="동구.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">동구</a>
                            <a href="서구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">서구</a>
                            <a href="남구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">남구</a>
                            <a href="탄성군소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">탄성군</a>
                            <a href="창전구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">창전구</a>
                            <a href="청엽구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">청엽구</a>
                            <a href="안천구소개.html" class="p-2 hover:bg-blue-50 hover:text-blue-600 rounded border border-slate-100 transition">안천구</a>
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
            
<div class="page-satisfaction-survey bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">                <div class="font-bold text-gray-700 mb-3">이 페이지에서 제공하는 정보에 대하여 만족하십니까?</div>
                <div class="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <label class="flex items-center gap-1 cursor-pointer"><input type="radio" name="satisfaction" value="매우만족" checked> 매우만족</label>
                    <label class="flex items-center gap-1 cursor-pointer"><input type="radio" name="satisfaction" value="만족"> 만족</label>
                    <label class="flex items-center gap-1 cursor-pointer"><input type="radio" name="satisfaction" value="보통"> 보통</label>
                    <label class="flex items-center gap-1 cursor-pointer"><input type="radio" name="satisfaction" value="불만족"> 불만족</label>
                    <label class="flex items-center gap-1 cursor-pointer"><input type="radio" name="satisfaction" value="매우불만족"> 매우불만족</label>
                </div>
                <div class="flex flex-col sm:flex-row gap-2">
                    <input type="text" id="satisfaction-comment" placeholder="페이지 품질 향상을 위한 의견을 남겨주세요." class="flex-grow border border-gray-300 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                    <button onclick="submitSatisfaction()" class="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap shadow-md">평가등록</button>
                </div>
            </div>
            <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b border-slate-100 pb-6">
                <div class="flex flex-wrap gap-x-6 gap-y-2 font-medium text-slate-600 justify-center md:justify-start">
                    <a href="개인정보처리방침.html" class="text-[#2563eb] font-bold hover:underline" data-policy="privacy">개인정보처리방침</a>
                    <a href="저작권보호정책.html" class="hover:text-slate-900 hover:underline" data-policy="copyright">저작권 보호정책</a>
                    <a href="영상정보처리기기운영방침.html" class="hover:text-slate-900 hover:underline" data-policy="cctv">영상정보처리기기 운영·관리방침</a>
                    <a href="프로그램뷰어다운로드.html" class="hover:text-slate-900 hover:underline" data-policy="viewer">프로그램뷰어다운로드</a>
                    <a href="누리집오류신고.html" class="hover:text-slate-900 hover:underline" data-policy="error">누리집 오류신고</a>
                    <a href="contact.html" class="hover:text-slate-900 hover:underline" data-policy="directions">찾아오시는 길</a>
                </div>
                
<div class="flex items-center gap-2 w-full md:w-auto justify-end">
                    <select id="family-site" class="border border-slate-300 rounded px-3 py-1.5 text-slate-600 outline-none hover:border-slate-400 transition bg-white w-full md:w-56">
                        <option value="">유관기관 바로가기</option>
                        <optgroup label="본청 및 자치구·군">
                            <option value="index.html">효빈광역시청 (본청)</option>
                            <option value="index.html?gu=jung">효빈광역시 중구청</option>
                            <option value="index.html?gu=dong">효빈광역시 동구청</option>
                            <option value="index.html?gu=seo">효빈광역시 서구청</option>
                            <option value="index.html?gu=nam">효빈광역시 남구청</option>
                            <option value="index.html?gu=buk">효빈광역시 북구청</option>
                            <option value="index.html?gu=changjeon">효빈광역시 창전구청</option>
                            <option value="index.html?gu=cheongyeop">효빈광역시 청엽구청</option>
                            <option value="index.html?gu=ancheon">효빈광역시 안천구청</option>
                            <option value="index.html?gu=tanseong">효빈광역시 탄성군청</option>
                        </optgroup>
                        <optgroup label="산하기관">
                            <option value="HyobinMetro/index.html">효빈교통공사</option>
                            <option value="culture_foundation.html">효빈문화공단</option>
                            <option value="animation_hq.html">효빈애니메이션본부</option>
                            <option value="water_sewage.html">효빈상하수도본부</option>
                            <option value="city_dev_corp.html">효빈도시공사</option>
                            <option value="facility_corp.html">효빈시설공단</option>
                        </optgroup>
                        <optgroup label="유관기관">
                            <option value="시의회.html">효빈시의회</option>
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
                         <img src="이미지/logo.webp" alt="하단 로고" class="h-full w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
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
                                            <li><button class="w-full flex justify-between items-center p-1 hover:text-blue-400 transition-colors" onclick="toggleMobileMenu(this)">상임위원회 <i data-lucide="chevron-down" class="w-3 h-3"></i></button><ul class="hidden pl-2 space-y-1 text-[9px] text-slate-400"><li><a href="의회운영위원회.html" class="block w-full p-1 hover:text-blue-500">- 의회운영위원회</a></li><li><a href="행정기획위원회.html" class="block w-full p-1 hover:text-blue-500">- 행정기획위원회</a></li><li><a href="보건복지위원회.html" class="block w-full p-1 hover:text-blue-500">- 보건복지위원회</a></li><li><a href="경제산업위원회.html" class="block w-full p-1 hover:text-blue-500">- 경제산업위원회</a></li><li><a href="문화환경위원회.html" class="block w-full p-1 hover:text-blue-500">- 문화환경위원회</a></li><li><a href="안전건설위원회.html" class="block w-full p-1 hover:text-blue-500">- 안전건설위원회</a></li><li><a href="도시교통위원회.html" class="block w-full p-1 hover:text-blue-500">- 도시교통위원회</a></li><li><a href="교육위원회.html" class="block w-full p-1 hover:text-blue-500">- 교육위원회</a></li><li><a href="예산결산예산결산특별위원회.html" class="block w-full p-1 hover:text-blue-500">- 예산결산특별위원회</a></li></ul></li>
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

                    <li><a href="공지사항.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">소통·참여</a></li>
                    <li><a href="민원업무안내.html" class="block p-3 hover:text-blue-600 transition-colors border-b border-gray-100">열린민원</a></li>
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
// [초기화 실행] 헤더/푸터 생성 직후 바로 구청 테마 적용!
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
    
    const surveys = document.querySelectorAll('.page-satisfaction-survey');
    if (surveys.length > 1) {
        surveys[surveys.length - 1].remove();
    }
    
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
        if (icon) icon.classList.add('rotate-180');
    } else {
        submenu.classList.add('hidden');
        if (icon) icon.classList.remove('rotate-180');
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
    if (typeof applyTranslation === 'function') {
        applyTranslation(lang);
    }
    setTimeout(applyGuTheme, 50); // 언어 변경 후에도 구청 이름 유지
    closeOverlay('language-modal', 'language-content-wrapper');
};

window.submitSatisfaction = function() {
    const selectedRadio = document.querySelector('input[name="satisfaction"]:checked');
    const selectedValue = selectedRadio ? selectedRadio.value : '미선택';
    const commentInput = document.getElementById('satisfaction-comment');
    const comment = commentInput.value.trim();
    
    let alertMessage = "평가가 성공적으로 등록되었습니다.\n소중한 의견 감사합니다!\n\n[제출된 내용]\n평가: " + selectedValue;
    if (comment !== "") {
        alertMessage += "\n의견: " + comment;
    }
    alert(alertMessage);
    commentInput.value = '';
};

// 행정복지센터(동/읍/면) 및 구청/군청 링크 클릭 시 자동 라우팅!
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    const href = link.getAttribute('href');
    if (!href) return;

    // 1. 북구.html, 남구.html 등을 누르면 index.html?gu=buk 등으로 이동
    const guMap = {
        '중구.html': 'jung', '동구.html': 'dong', '서구.html': 'seo',
        '남구.html': 'nam', '북구.html': 'buk', '청엽구.html': 'cheongyeop',
        '창전구.html': 'changjeon', '안천구.html': 'ancheon', '탄성군.html': 'tanseong'
    };
    for (let file in guMap) {
        if (href.endsWith(file)) {
            e.preventDefault();
            window.location.href = `index.html?gu=${guMap[file]}`;
            return;
        }
    }

    // 2. 고송8동.html 등을 누르면 행정복지센터.html?dong=고송8동 으로 이동
    if (href.match(/(동|읍|면)\.html$/)) {
        e.preventDefault(); 
        const targetName = decodeURIComponent(href.replace('.html', ''));
        window.location.href = `행정복지센터.html?dong=${targetName}`;
    }
});

/* =========================================================================
   [최종 통합 패치] 구·군별 퍼스널 컬러 / 마스코트 SVG / 4대 새소식 상세 본문 / 새창 이동 자동화
   (common121.js 맨 하단에 붙여넣기)
   ========================================================================= */

const GU_FULL_DATA = {
    "jung": {
        name: "중구", title: "중구청",
        themeColor: "#BB9955", themeSubColor: "#9A7B3E", themeTextColor: "#FFFFFF", accentColor: "#9A7B3E",
        address: "효빈광역시 중구 중앙로 101 (조유동)",
        headTitle: "중구청장", headName: "구성연",
        phone: "079-242-8192", fax: "079-242-8199", duty: "079-242-8100",
        slogan: "시간을 걷는 트램, 꿈이 현실이 되는 낭만 중구",
        mascotName: "뱁시계",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#BB9955" opacity="0.25" r="45"></circle><path d="M 30 15 L 70 15 L 50 50 L 70 85 L 30 85 L 50 50 Z" fill="#0055AA" opacity="0.15"></path><circle cx="50" cy="55" fill="#FFFBF0" r="26" stroke="#E0D8C0" stroke-width="1"></circle><ellipse cx="24" cy="58" fill="#F0E8D0" rx="5" ry="10" transform="rotate(20 24 58)"></ellipse><ellipse cx="76" cy="58" fill="#F0E8D0" rx="5" ry="10" transform="rotate(-20 76 58)"></ellipse><circle cx="40" cy="48" fill="#111" r="4"></circle><circle cx="38" cy="46" fill="#FFF" r="1.5"></circle><circle cx="60" cy="48" fill="#111" r="4"></circle><circle cx="58" cy="46" fill="#FFF" r="1.5"></circle><ellipse cx="33" cy="54" fill="#FF8899" opacity="0.7" rx="4" ry="2.5"></ellipse><ellipse cx="67" cy="54" fill="#FF8899" opacity="0.7" rx="4" ry="2.5"></ellipse><polygon fill="#FF9933" points="50,52 46,57 54,57"></polygon><path d="M 35 32 L 65 32 L 60 18 L 40 18 Z" fill="#004488"></path><rect fill="#111" height="5" rx="2" width="36" x="32" y="30"></rect><circle cx="50" cy="25" fill="#BB9955" r="3.5"></circle><path d="M 46 68 L 54 68 L 50 73 L 54 78 L 46 78 L 50 73 Z" fill="#0077DD" stroke="#BB9955" stroke-width="1"></path></svg>`,
        news: [
            {
                dept: "대중교통과",
                title: "7호선 노면전차(트램) 심야 연장 운행 및 구민 환승 할인 확대 계획안 공개",
                summary: "중구청은 구민들의 야간 이동권 보장과 원도심 성지순례 상권 활성화를 위해 7호선 노면전차의 운행 시간을 자정 이후까지 연장하는 최종 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_중구_7호선트램_야간연장운행_최종계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">중구청 대중교통과는 원도심 야간 경제 활성화와 구민들의 귀갓길 교통 편의를 위해 효빈교통공사(7호선 노면전차 사업소)와 협약을 맺고 심야 연장 운행 및 구민 환승 캐시백 지원사업을 시행합니다.</p>
                    <hr class="my-6 border-slate-100">
                    <h3 class="text-xl font-bold text-slate-800 mb-4">1. 사업 개요</h3>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>사업명:</strong> 낭만 중구 7호선 트램 심야 안심 귀가 및 환승 지원사업</li>
                        <li><strong>지원 대상:</strong> 중구 관내 주민등록자 및 중앙동·리사동 야간 상권 이용객</li>
                        <li><strong>주요 내용:</strong> 막차 시간 00:00 → 01:30 연장 (임세정·임세하 특별 안내방송 적용), 야간 탑승 시 중구 골드포인트 50% 페이백</li>
                        <li><strong>시행 시기:</strong> 다음 달 1일 첫차부터 전면 시행</li>
                    </ul>
                    <h3 class="text-xl font-bold text-slate-800 mb-4">2. 기대 효과</h3>
                    <p class="mb-6">개항기 근대건축물 야경 투어 및 리사동 서브컬처 거리의 야간 방문객 체류 시간을 늘려 창선동·중앙동 일대 소상공인 매출 증대에 크게 기여할 것으로 기대됩니다.</p>
                `
            },
            {
                dept: "문화유산과",
                title: "개항기 근대문화유산 탐방로 및 리사동 성지순례길 통합 스탬프 투어 개시",
                summary: "1930년대 개항기 효빈성 유적과 현대 서브컬처 명소를 잇는 시간여행 스탬프 투어가 시작됩니다.",
                fileType: "PDF", fileName: "2026_중구_시간여행_스탬프투어_가이드북.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">중구청 문화유산과는 원도심의 근대 건축 자원과 리사동·조유동 일대의 서브컬처 성지를 하나로 묶은 '뱁시계와 함께하는 시간여행 스탬프 투어'를 운영합니다.</p>
                    <hr class="my-6 border-slate-100">
                    <h3 class="text-xl font-bold text-slate-800 mb-4">1. 투어 코스 안내</h3>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>A코스 (근대역사길):</strong> 구 효빈세관 → 중앙동 금융박물관 → 중구청역 7호선 전차기지</li>
                        <li><strong>B코스 (서브컬처 낭만길):</strong> 리사동 굿즈 스트리트 → 창선동 백화점 콜라보 카페 → 천석동2가역 포토존</li>
                        <li><strong>완주 기념품:</strong> 중구 공식 마스코트 '뱁시계' 한정판 회중시계 및 7호선 트램 교통카드</li>
                    </ul>
                `
            },
            {
                dept: "청년정책과",
                title: "원도심 청년 창업가 및 서브컬처 크리에이터 입주 공간 지원사업 모집",
                summary: "중구 빈 점포를 활용한 청년 공방, 굿즈 제작소, 독립서점 창업 지원 참여자를 모집합니다.",
                fileType: "PDF", fileName: "2026_중구_청년크리에이터_창업지원_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">중구의 역사와 문화적 감성을 이끌어갈 청년 창업가 및 서브컬처 크리에이터들의 안정적인 정착을 위한 입주 지원 프로그램 참여자를 모집합니다.</p>
                    <hr class="my-6 border-slate-100">
                    <h3 class="text-xl font-bold text-slate-800 mb-4">모집 개요</h3>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>모집 규모:</strong> 30개 팀 내외 (개인 또는 팀)</li>
                        <li><strong>지원 대상:</strong> 만 19세~39세 청년 예비 창업자 및 문화예술·서브컬처 기획자</li>
                        <li><strong>지원 혜택:</strong> 조유동·리사동 내 리모델링 상가 임차료 최대 80% 지원 (2년간), 구청장 표창 및 홍보 지원</li>
                    </ul>
                `
            },
            {
                dept: "가로정비과",
                title: "동절기 강설 대비 7호선 노면전차 선로 제설 및 시내버스 우회 계획 공지",
                summary: "폭설 및 결빙 시 7호선 트램 선로 열선 가동 및 중구 고지대 버스 노선 우회 계획을 안내합니다.",
                fileType: "HWP", fileName: "2026_중구_트램선로제설_및_버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">중구청 가로정비과는 겨울철 폭설 시 7호선 노면전차(트램)의 안전한 정시 운행을 보장하고 급경사 구간의 버스 미끄럼 사고를 예방하기 위해 비상 제설 및 우회 대책을 시행합니다.</p>
                    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                        <p class="font-bold text-yellow-800">시행 기준: 대설주의보 발효 시 7호선 전 구간 선로 자동 열선 가동 및 제설 트램 투입</p>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-4">중구 관내 주요 우회 및 집중관리 구간</h3>
                    <table class="w-full text-sm text-left text-slate-600 mb-6 border border-slate-200">
                        <thead class="text-xs text-slate-700 uppercase bg-slate-100">
                            <tr><th class="px-6 py-3 border-b">노선/구간</th><th class="px-6 py-3 border-b">기존 운행</th><th class="px-6 py-3 border-b">폭설 시 조치</th></tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b"><td class="px-6 py-4 font-bold">7호선 트램 본선</td><td class="px-6 py-4">중구청역 ~ 중앙동 구간</td><td class="px-6 py-4">제설전차 선행 투입 후 정상 운행 유지</td></tr>
                            <tr class="bg-white border-b"><td class="px-6 py-4 font-bold">순환 30번 버스</td><td class="px-6 py-4">내항고개 급경사 구간</td><td class="px-6 py-4">중앙로 대로변 임시 정류소로 우회</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "buk": {
        name: "북구", title: "북구청",
        themeColor: "#6677CC", themeSubColor: "#4F5FA8", themeTextColor: "#FFFFFF", accentColor: "#4F5FA8",
        address: "효빈광역시 북구 고중로 2 (중수1동)",
        headTitle: "북구청장", headName: "김지언",
        phone: "079-321-5042", fax: "079-321-5049", duty: "079-321-5000",
        slogan: "꽃피는 고송, 미래를 여는 북구",
        mascotName: "제비도리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#6677CC" r="45"></circle><path d="M 20 45 Q 50 10 80 45 Q 50 60 20 45 Z" fill="#111625"></path><path d="M 30 50 Q 50 35 70 50 Q 50 75 30 50 Z" fill="#FFFFFF"></path><circle cx="43" cy="48" fill="#000" r="3"></circle><circle cx="57" cy="48" fill="#000" r="3"></circle><polygon fill="#FFCC11" points="50,52 46,58 54,58"></polygon><circle cx="36" cy="54" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="64" cy="54" fill="#FF8899" opacity="0.6" r="4"></circle></svg>`,
        news: [
            {
                dept: "문화관광과",
                title: "고송신도시 현대백화점 애니메이트·애니플러스 주말 인파 밀집 안전관리 대책 공개",
                summary: "고송교차로역 일대 주말 한정판 굿즈 오픈런 인파 밀집에 대비하여 보행자 전용 거리 지정 및 안전요원 배치 계획을 공개합니다.",
                fileType: "PDF", fileName: "2026_북구_고송교차로_서브컬처특구_안전관리계획.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">북구청 문화관광과는 고송신도시 현대백화점 내 서브컬처 대형 매장(애니메이트·애니플러스)의 주말 방문객 급증에 따라 구민과 방문객의 안전을 위한 종합 질서유지 대책을 시행합니다.</p>
                    <hr class="my-6 border-slate-100">
                    <h3 class="text-xl font-bold text-slate-800 mb-4">1. 주요 안전 대책</h3>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>중점 관리 구역:</strong> 2·6호선 고송교차로역 지하도 ~ 현대백화점 별관 굿즈존 입구</li>
                        <li><strong>운영 내용:</strong> 주말 오픈런 시간대(07:00~11:00) 스마트 QR 대기표 시스템 의무화, '제비도리' 안전유도봉 배치</li>
                        <li><strong>협조 사항:</strong> 야간 철야 노숙 대기 금지 및 주변 아파트 단지 소음 발생 주의</li>
                    </ul>
                `
            },
            {
                dept: "해양공원과",
                title: "토모리해수욕장 펭귄 생태전시관 및 밴드 야외무대 리모델링 완공 안내",
                summary: "북구의 명소 토모리해수욕장에 친환경 펭귄 생태관과 상설 버스킹 무대가 새롭게 문을 엽니다.",
                fileType: "PDF", fileName: "2026_북구_토모리해수욕장_생태관_안내자료.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">3호선 토모리해수욕장역 인근 해변공원에 구민들의 휴식과 서브컬처 팬들의 성지순례를 위한 '고송 펭귄 생태전시관 및 반창고 야외 음악당'이 정식 개관합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>위치:</strong> 효빈광역시 북구 고송동 토모리해수욕장 중앙광장</li>
                        <li><strong>주요 시설:</strong> 수석(돌멩이)·나뭇잎 채집 전시장, 펭귄 미디어아트 홀, 아마추어 걸즈밴드 무료 대관 무대</li>
                    </ul>
                `
            },
            {
                dept: "청년정책과",
                title: "북구 청년 문화기획단 '고송 스타더스트 서포터즈' 신규 단원 모집",
                summary: "북구 고송신도시의 서브컬처 축제와 청년 정책을 직접 기획할 청년 서포터즈를 모집합니다.",
                fileType: "PDF", fileName: "2026_북구_청년문화기획단_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">메가시티 북구의 역동적인 청년 문화를 선도할 '고송 스타더스트 서포터즈' 참여자를 모집합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>모집 인원:</strong> 60명 내외</li>
                        <li><strong>주요 활동:</strong> 고송 서브컬처 거리 페스티벌 기획, 6호선·빈효선 역세권 청년 공간 모니터링</li>
                        <li><strong>활동 혜택:</strong> 소정의 활동비 지급 및 우수 활동자 북구청장 김지언 표창 수여</li>
                    </ul>
                `
            },
            {
                dept: "교통행정과",
                title: "창전선(북고송~토모리해수욕장) 개통 대비 시내버스 지선 노선 개편 및 우회 안내",
                summary: "창전선 3단계 구간 공사에 따른 고송강변·북고송 일대 시내버스 임시 우회 경로를 공지합니다.",
                fileType: "HWP", fileName: "2026_북구_창전선공사_버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">2027년 9월 개통 예정인 창전선(고송강변~고송경찰서~북고송~토모리해수욕장) 정거장 출입구 공사로 인해 일부 시내버스 노선이 임시 우회 운행합니다.</p>
                    <table class="w-full text-sm text-left text-slate-600 mb-6 border border-slate-200">
                        <thead class="text-xs text-slate-700 uppercase bg-slate-100">
                            <tr><th class="px-6 py-3 border-b">노선번호</th><th class="px-6 py-3 border-b">기존 구간</th><th class="px-6 py-3 border-b">변경(우회) 구간</th></tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b"><td class="px-6 py-4 font-bold">간선 102번</td><td class="px-6 py-4">고송경찰서 정문</td><td class="px-6 py-4">고송대로 사거리 임시정류소 정차</td></tr>
                            <tr class="bg-white border-b"><td class="px-6 py-4 font-bold">순환 60번</td><td class="px-6 py-4">북고송 삼거리</td><td class="px-6 py-4">고송강변로 경유 우회 운행</td></tr>
                        </tbody>
                    </table>
                `
            }
        ]
    },
    "dong": {
        name: "동구", title: "동구청",
        themeColor: "#00AA00", themeSubColor: "#008800", themeTextColor: "#FFFFFF", accentColor: "#008800",
        address: "효빈광역시 동구 덕성로 12 (덕현2동)",
        headTitle: "동구청장", headName: "조우영",
        phone: "079-284-1193", fax: "079-284-1199", duty: "079-284-1100",
        slogan: "철도와 서브컬처가 공존하는, 꿈꾸는 활력 동구",
        mascotName: "냥냥선장",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#f5f5dc" r="45"></circle><path d="M 20 15 Q 15 25 10 30" fill="#f5f5dc" stroke="#f5f5dc" stroke-width="3"></path><path d="M 80 15 Q 85 25 90 30" fill="#f5f5dc" stroke="#f5f5dc" stroke-width="3"></path><path d="M 22 25 Q 18 30 15 33" fill="#ffcccc" stroke="#ffcccc" stroke-width="2"></path><path d="M 78 25 Q 82 30 85 33" fill="#ffcccc" stroke="#ffcccc" stroke-width="2"></path><circle cx="35" cy="45" fill="#000" r="5"></circle><circle cx="65" cy="45" fill="#000" r="5"></circle><circle cx="38" cy="42" fill="#fff" r="1.5"></circle><circle cx="68" cy="42" fill="#fff" r="1.5"></circle><polygon fill="#ff9999" points="50,55 47,58 53,58"></polygon><path d="M 47 58 Q 50 63 53 58" fill="none" stroke="#000" stroke-width="2"></path><path d="M 30 50 L 15 48" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 30 55 L 15 57" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 70 50 L 85 48" fill="none" stroke="#ccc" stroke-width="1.5"></path><path d="M 70 55 L 85 57" fill="none" stroke="#ccc" stroke-width="1.5"></path><rect fill="#3366cc" height="25" rx="5" ry="5" width="50" x="25" y="10"></rect><rect fill="#fff" height="15" width="30" x="35" y="15"></rect><circle cx="40" cy="22.5" fill="#ff0000" r="3"></circle><path d="M 45 22.5 L 60 22.5" fill="none" stroke="#3366cc" stroke-width="3"></path><circle cx="50" cy="18" fill="#ffcc00" r="1.5"></circle><path d="M 25 70 L 75 70 L 65 90 L 35 90 Z" fill="#ff6666"></path><path d="M 50 70 L 50 90" fill="none" stroke="#fff" stroke-dasharray="3,3" stroke-width="2"></path></svg>`,
        news: [
            {
                dept: "문화체육과",
                title: "전천 냥냥 골목 상권 활성화 및 길고양이 공존 특화거리 조성 사업 계획안 공개",
                summary: "아이돌마스터 성지로 사랑받는 전천 냥냥 골목의 테마 간판 정비 및 상가 할인 패스 운영 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_동구_전천냥냥골목_특화거리_계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">동구청 문화체육과는 전천동 일대 '전천 냥냥 골목'을 찾는 전국의 서브컬처 팬들과 구민들을 위해 테마형 보행환경 개선 및 상권 연계 할인 사업을 추진합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>사업 구간:</strong> 동구 전천동 냥냥 골목 일원 (약 850m 구간)</li>
                        <li><strong>주요 내용:</strong> '냥냥선장' 테마 가로등 설치, 고양이 귀 아이템 착용 방문객 가맹점 10% 상시 할인</li>
                    </ul>
                `
            },
            {
                dept: "철도관광과",
                title: "효빈역 광장 철도 문화제 및 다이캐스트 철도모형 특별전 개최 안내",
                summary: "1·3·7호선 및 빈효선이 만나는 교통의 심장 효빈역에서 철도 동호인과 시민을 위한 축제가 열립니다.",
                fileType: "PDF", fileName: "2026_동구_효빈역_철도문화제_안내문.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">교통의 중심지 동구 효빈역 광장에서 철도 역사와 서브컬처가 어우러지는 '효빈 철도 문화제'를 개최합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>주요 프로그램:</strong> 효빈도시철도 1~8호선 정밀 디오라마 전시, 냥냥선장 포토존, 보몽역 드림 케이스 소원지 달기</li>
                    </ul>
                `
            },
            {
                dept: "청년일자리과",
                title: "동구 역세권 성지순례 로컬 크리에이터 및 관광 해설사 양성 과정 모집",
                summary: "효빈역·보몽역·덕현역 일대 철도 및 애니메이션 성지를 소개할 청년 해설사를 모집합니다.",
                fileType: "PDF", fileName: "2026_동구_성지순례_청년해설사_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">동구의 풍부한 철도 인프라와 서브컬처 역세권 명소를 국내외 관광객에게 안내할 청년 크리에이터 및 해설사를 모집합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>모집 대상:</strong> 철도 및 서브컬처 분야에 깊은 애정을 가진 만 19세~39세 청년 40명</li>
                        <li><strong>우대 사항:</strong> 일본어·영어 회화 가능자 및 철도·애니메이션 관련 커뮤니티 우수 활동자</li>
                    </ul>
                `
            },
            {
                dept: "도로관리과",
                title: "효빈역 복합환승센터 공사에 따른 덕현로 일대 시내버스 정류소 임시 이설 공지",
                summary: "창전선 효빈역 환승 통로 공사로 인해 효빈역 서측 정류소가 50m 이전 운영됩니다.",
                fileType: "HWP", fileName: "2026_동구_효빈역환승센터_버스정류소이설.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">창전선 광역전철과 기존 1·3·7호선 효빈역 간 지하 환승통로 확장 공사로 인해 시내버스 일부 노선의 정차 위치가 임시 변경됩니다.</p>
                `
            }
        ]
    },
    "seo": {
        name: "서구", title: "서구청",
        themeColor: "#00AABB", themeSubColor: "#008899", themeTextColor: "#FFFFFF", accentColor: "#008899",
        address: "효빈광역시 서구 당선동 77 (당선4동)",
        headTitle: "서구청장", headName: "부서원",
        phone: "079-634-2201", fax: "079-634-2209", duty: "079-634-2200",
        slogan: "낭만이 달리는 트램도시, 소신을 품은 지성 서구",
        mascotName: "구스장",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#00AABB" opacity="0.2" r="45"></circle><path d="M 25 65 Q 15 50 22 40 Q 30 45 28 60 Z" fill="#EAEAEA"></path><path d="M 35 85 Q 28 62 42 42 Q 46 32 58 35 Q 64 45 52 62 Q 46 76 50 85 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="1"></path><circle cx="53" cy="34" fill="#FFFFFF" r="13" stroke="#D0D0D0" stroke-width="0.5"></circle><circle cx="47" cy="32" fill="#111" r="2.5"></circle><circle cx="46" cy="31" fill="#FFF" r="0.8"></circle><path d="M 42 35 Q 28 30 30 38 Q 40 43 43 38 Z" fill="#FF9900"></path><path d="M 45 24 L 62 27 L 58 17 L 48 15 Z" fill="#FF8899"></path><rect fill="#FFF" height="3" transform="rotate(10 42 22)" width="18" x="42" y="22"></rect><rect fill="#FFCC11" height="9" rx="1" transform="rotate(15 48 52)" width="9" x="48" y="52"></rect><text fill="#D81C2F" font-family="Arial" font-size="6" font-weight="bold" text-anchor="middle" transform="rotate(15 48 52)" x="52.5" y="59.5">!</text><path d="M 45 62 Q 62 55 58 70 Q 48 72 43 64 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="0.5"></path></svg>`,
        news: [
            {
                dept: "대학협력정책과",
                title: "효빈대·효빈과기원(HIST) 대학생 7호선 노면전차 무제한 학기 패스 지원사업 공개",
                summary: "서구 관내 대학생 및 청년 연구원들의 통학 부담 완화를 위해 7호선 트램 및 지선버스 정기권 50% 지원 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_서구_대학생_트램정기권_지원계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">서구청 대학협력정책과는 2006년 7호선 폐선 위기 당시 선로를 지켜낸 대학생과 구민들의 핌피(PIMFY) 정신을 계승하여, 관내 대학생 및 대학원생 대상 트램 통학비 지원사업을 시행합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>지원 대상:</strong> 효빈대학교, 효빈과학기술원(HIST) 등 서구 소재 대학 재학생 및 휴학생</li>
                        <li><strong>지원 내용:</strong> 7호선 노면전차 무제한 이용 학기 패스 발급 비용 50% 구비 지원 ('구스장 즈라 패스' 디자인 적용)</li>
                    </ul>
                `
            },
            {
                dept: "상권활성화과",
                title: "당선역 갤러리아백화점 서브컬처 팝업스토어 연계 대학로 '즈라 맛집 페스타' 개최",
                summary: "팝업스토어 영수증 지참 시 효빈대 대학로 가성비 식당가에서 사이드 메뉴를 무료로 제공합니다.",
                fileType: "PDF", fileName: "2026_서구_대학로_즈라맛집가이드.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">당선역 백화점 콜라보 팝업스토어를 찾은 방문객들이 서구 대학로의 다채로운 식문화를 함께 즐길 수 있도록 상생 할인 프로모션을 진행합니다.</p>
                `
            },
            {
                dept: "청년정책과",
                title: "서구 청년 소신 정책제안단 및 R&D 연구원 주거안정 지원 프로그램 모집",
                summary: "지성 도시 서구의 미래를 설계할 대학생·청년 연구원 정책 참여단 및 월세 지원 대상자를 모집합니다.",
                fileType: "PDF", fileName: "2026_서구_청년소신정책단_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">서구청은 청년들의 거침없는 소신과 창의적인 아이디어를 구정에 적극 반영하기 위해 청년 정책제안단을 모집합니다.</p>
                `
            },
            {
                dept: "교통관리과",
                title: "대학 축제 기간 7호선 스쿨아이돌 랩핑 트램 증편 및 캠퍼스 주변 버스 우회 공지",
                summary: "효빈대 대동제 기간 보행자 안전을 위해 대학로 일부 구간 차량 통제 및 버스 우회를 실시합니다.",
                fileType: "HWP", fileName: "2026_서구_대학축제_교통통제및우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">효빈대학교 축제 기간 동안 7호선 노면전차는 정상 통과하며, 일반 차량 및 시내버스는 사복동 대로변으로 임시 우회 운행합니다.</p>
                `
            }
        ]
    },
    "nam": {
        name: "남구", title: "남구청",
        themeColor: "#DDBBFF", themeSubColor: "#9856FF", themeTextColor: "#2E1065", accentColor: "#7E22CE",
        address: "효빈광역시 남구 평당중앙로 33 (평당3동)",
        headTitle: "남구청장", headName: "오전희",
        phone: "079-451-9034", fax: "079-451-9039", duty: "079-451-9000",
        slogan: "바다를 품고 미래로 도약하는 활력 남구",
        mascotName: "참도리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#DDBBFF" opacity="0.4" r="45"></circle><circle cx="50" cy="55" fill="#8B5A2B" r="24"></circle><circle cx="50" cy="58" fill="#FFF8F0" r="18"></circle><path d="M 26 55 Q 18 65 28 70 Q 32 60 26 55 Z" fill="#5C3A21"></path><path d="M 74 55 Q 82 65 72 70 Q 68 60 74 55 Z" fill="#5C3A21"></path><circle cx="38" cy="55" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="62" cy="55" fill="#FF8899" opacity="0.6" r="4"></circle><circle cx="42" cy="48" fill="#111" r="3.5"></circle><circle cx="41" cy="47" fill="#FFF" r="1"></circle><circle cx="58" cy="48" fill="#111" r="3.5"></circle><circle cx="57" cy="47" fill="#FFF" r="1"></circle><polygon fill="#FFCC11" points="50,56 45,50 55,50"></polygon><path d="M 38 36 Q 50 28 62 36 L 58 26 Q 50 22 42 26 Z" fill="#001C3D"></path><ellipse cx="50" cy="36" fill="#001C3D" rx="14" ry="2.5"></ellipse><circle cx="50" cy="30" fill="#FFCC11" r="2.5"></circle><path d="M 42 74 Q 50 78 58 74 L 54 82 L 46 82 Z" fill="#9856FF"></path></svg>`,
        news: [
            {
                dept: "해양문화관광과",
                title: "곽암해수욕장 야간 로젤리아(Roselia) 응원 상영회 및 8호선 심야 임시열차 운행 계획 공개",
                summary: "곽암해수욕장 특설무대 야간 상영회 개최에 따른 해변 안전관리 및 8호선(유리아 라인) 임시 증편 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_남구_곽암해수욕장_야간상영회_안전및교통계획.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">남구청 해양문화관광과는 곽암해수욕장 백사장에서 열리는 대규모 야간 라이브 상영회 참석자들의 안전한 관람과 귀가를 위해 도시철도 8호선 심야 연장 및 해변 안전요원 집중 배치 계획을 확정하였습니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>행사 일시 및 장소:</strong> 이번 주 토요일 19:00~22:30 / 남구 곽암해수욕장 메인 광장</li>
                        <li><strong>안전 수칙:</strong> 야간 갯바위 출입 절대 금지, 지정된 백사장 스탠딩 구역 내에서만 펜라이트 응원 허용</li>
                        <li><strong>교통 대책:</strong> 8호선 남구청역·운양중앙역 방면 심야 임시열차 4회 추가 투입</li>
                    </ul>
                `
            },
            {
                dept: "지역경제과",
                title: "4호선 빙천역·사야역 및 운양중앙역 서브컬처 특화상권 굿즈샵 오픈런 질서유지 안내",
                summary: "빙천공구단지 및 사야역 인더스트리얼 라이브하우스 일대 방문객 편의를 위한 스마트 대기 시스템을 도입합니다.",
                fileType: "PDF", fileName: "2026_남구_4호선성지순례_상권지원계획.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">4호선 라인(빙천역·사야역·이부역)과 8호선 운양중앙역을 찾는 성지순례 방문객들에게 쾌적한 환경을 제공하기 위해 구청 공식 오픈런 대기 쉼터를 운영합니다.</p>
                `
            },
            {
                dept: "청년해양정책과",
                title: "효빈항 국제여객터미널 청년 무역·서브컬처 물류 서포터즈 모집 공고",
                summary: "해운산업지구 및 국제여객터미널을 무대로 활동할 글로벌 청년 물류·문화 교류단을 모집합니다.",
                fileType: "PDF", fileName: "2026_남구_효빈항_청년물류서포터즈_모집.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">글로벌 해양 물류 중심지 남구에서 한일 해상 교류 및 문화 콘텐츠 무역 실무를 경험할 청년 인재를 모집합니다.</p>
                `
            },
            {
                dept: "교통행정과",
                title: "동절기 해풍 및 결빙 대비 평당신도시~효빈항 해안도로 시내버스 우회 계획 공지",
                summary: "강풍 및 폭설 시 해안교량 구간 시내버스가 평당중앙로 내륙 노선으로 임시 우회합니다.",
                fileType: "HWP", fileName: "2026_남구_해안도로_동절기버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">겨울철 서해안 강풍 및 도로 결빙 발생 시 승객 안전을 위해 해안도로 경유 노선을 평당신도시 내륙 간선도로로 우회 운행합니다.</p>
                `
            }
        ]
    },
    "cheongyeop": {
        name: "청엽구", title: "청엽구청",
        themeColor: "#006699", themeSubColor: "#004D73", themeTextColor: "#FFFFFF", accentColor: "#006699",
        address: "효빈광역시 청엽구 청엽로 51 (청엽1동)",
        headTitle: "청엽구청장", headName: "권상남",
        phone: "079-781-4920", fax: "079-781-4929", duty: "079-781-4900",
        slogan: "푸른 잎에 빵 향기가 물드는 성지, 활력 청엽",
        mascotName: "빵도리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#006699" opacity="0.15" r="45"></circle><path d="M 50 15 Q 75 35 50 85 Q 25 35 50 15 Z" fill="#006699" opacity="0.2"></path><circle cx="50" cy="56" fill="#FFF8EE" r="25" stroke="#D8C8B8" stroke-width="1"></circle><ellipse cx="23" cy="58" fill="#8B5A2B" rx="6" ry="11" transform="rotate(20 23 58)"></ellipse><ellipse cx="77" cy="58" fill="#8B5A2B" rx="6" ry="11" transform="rotate(-20 77 58)"></ellipse><path d="M 30 45 Q 50 32 70 45 Q 65 35 50 35 Q 35 35 30 45 Z" fill="#7A4B20"></path><circle cx="40" cy="49" fill="#111" r="3.5"></circle><circle cx="38.5" cy="47.5" fill="#FFF" r="1.2"></circle><circle cx="60" cy="49" fill="#111" r="3.5"></circle><circle cx="58.5" cy="47.5" fill="#FFF" r="1.2"></circle><ellipse cx="33" cy="55" fill="#FF8899" opacity="0.8" rx="3.5" ry="2"></ellipse><ellipse cx="67" cy="55" fill="#FF8899" opacity="0.8" rx="3.5" ry="2"></ellipse><polygon fill="#FF9900" points="50,52 46,57 54,57"></polygon><path d="M 36 34 C 32 24 40 16 50 16 C 60 16 68 24 64 34 Z" fill="#FFFFFF" stroke="#DDD" stroke-width="0.5"></path><rect fill="#006699" height="4" rx="1" width="28" x="36" y="32"></rect><circle cx="50" cy="34" fill="#FFCC11" r="2.5"></circle><path d="M 52 64 L 70 70 L 66 78 L 48 72 Z" fill="#D28C45" stroke="#8B5A2B" stroke-width="0.8"></path><path d="M 54 66 C 58 68 64 70 68 72" fill="none" stroke="#5C3A21" stroke-width="1.5"></path><path d="M 51 70 C 55 72 61 74 65 76" fill="none" stroke="#5C3A21" stroke-width="1.5"></path><path d="M 38 65 Q 50 70 62 65 L 50 75 Z" fill="#006699"></path></svg>`,
        news: [
            {
                dept: "상권활성화과",
                title: "청엽 베이커리 거리 '초코 소라빵 & 메론빵 페스티벌' 및 빵 나눔 냉장고 확대 계획안 공개",
                summary: "청엽구 1.5km 베이커리 특화거리 축제 개최 및 청엽구청역 '모카의 빵 나눔 냉장고' 복지 연계 사업 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_청엽구_베이커리페스티벌_및_빵나눔복지_계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">청엽구청 상권활성화과는 명예 구민 아오바 모카의 성지인 '청엽 베이커리 거리'의 브랜드 가치를 높이고, 취약계층 아동·청소년에게 갓 구운 빵을 지원하는 상생 축제를 개최합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>행사 구간:</strong> 1·3호선 청엽구청역 ~ 우전천 산책로 베이커리 거리 (45개 동네 빵집 참여)</li>
                        <li><strong>주요 혜택:</strong> 빵도리 스탬프 투어 완주 시 한정판 초코 소라빵 쿠션 증정, '모카의 빵 나눔 냉장고' 기부 시 세액공제 및 굿즈 증정</li>
                    </ul>
                `
            },
            {
                dept: "관광마케팅과",
                title: "청엽동 아논타워(55층) 전망대 야간 라이트업 및 SNS 인증샷 콘테스트 안내",
                summary: "청엽구의 마천루 아논타워에서 펼쳐지는 핑크빛 야간 경관 조명과 밴드 버스킹 일정을 안내합니다.",
                fileType: "PDF", fileName: "2026_청엽구_아논타워_라이트업_안내.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">청엽동 아논타워 55층 스카이데크에서 전 세계 팬들과 구민들을 위한 특별 포토존 및 어쿠스틱 기타 콘서트가 진행됩니다.</p>
                `
            },
            {
                dept: "청년정책과",
                title: "청엽 청년 파티시에(제과제빵) 창업 아카데미 및 점포 임차료 지원 참여자 모집",
                summary: "제2의 야마부키 베이커리를 꿈꾸는 청년 제빵사들의 청엽구 정착을 전폭 지원합니다.",
                fileType: "PDF", fileName: "2026_청엽구_청년파티시에_창업지원_공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">대한민국 제빵 수도 청엽구에서 자신만의 개성 있는 베이커리를 창업할 청년 파티시에를 모집합니다.</p>
                `
            },
            {
                dept: "교통행정과",
                title: "창전선(우택~남우택) 환승역 공사에 따른 청엽여객 404번 등 버스 우회 운행 공지",
                summary: "우택중앙역 및 남우택역 정거장 마감 공사로 인해 심야 시간대 일부 차로가 통제됩니다.",
                fileType: "HWP", fileName: "2026_청엽구_우택지구_버스우회운행계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">창전선 개통 준비 공사로 인해 우택동·우전동 일대 일부 시내버스 노선이 우회하며, 404번 버스 내 빵도리 특별 안내방송은 정상 송출됩니다.</p>
                `
            }
        ]
    },
    "changjeon": {
        name: "창전구", title: "창전구청",
        themeColor: "#33AAFF", themeSubColor: "#1188DD", themeTextColor: "#FFFFFF", accentColor: "#0066CC",
        address: "효빈광역시 창전구 모포로 21 (창전3동)",
        headTitle: "창전구청장", headName: "전역헌",
        phone: "079-822-1594", fax: "079-822-1599", duty: "079-822-1500",
        slogan: "푸른 날갯짓으로 도약하는 품격, 환상이 현실이 되는 창전",
        mascotName: "모르도리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#33AAFF" opacity="0.18" r="45"></circle><circle cx="50" cy="50" fill="none" opacity="0.6" r="35" stroke="#33AAFF" stroke-dasharray="3,3" stroke-width="0.8"></circle><path d="M 45 45 Q 15 15 10 38 Q 8 52 35 55 Z" fill="#33AAFF" stroke="#0055AA" stroke-width="1"></path><path d="M 55 45 Q 85 15 90 38 Q 92 52 65 55 Z" fill="#33AAFF" stroke="#0055AA" stroke-width="1"></path><path d="M 40 43 Q 20 25 18 38 Q 16 45 35 50 Z" fill="#88D4FF" opacity="0.7"></path><path d="M 60 43 Q 80 25 82 38 Q 84 45 65 50 Z" fill="#88D4FF" opacity="0.7"></path><path d="M 40 55 Q 15 75 25 85 Q 35 88 45 68 Z" fill="#1188DD" stroke="#004488" stroke-width="1"></path><path d="M 60 55 Q 85 75 75 85 Q 65 88 55 68 Z" fill="#1188DD" stroke="#004488" stroke-width="1"></path><ellipse cx="50" cy="58" fill="#FFFFFF" rx="8" ry="16" stroke="#33AAFF" stroke-width="1.2"></ellipse><circle cx="50" cy="38" fill="#FFFFFF" r="11" stroke="#33AAFF" stroke-width="1.2"></circle><path d="M 46 28 Q 40 18 36 20" fill="none" stroke="#33AAFF" stroke-linecap="round" stroke-width="1.5"></path><circle cx="36" cy="20" fill="#0055AA" r="2"></circle><path d="M 54 28 Q 60 18 64 20" fill="none" stroke="#33AAFF" stroke-linecap="round" stroke-width="1.5"></path><circle cx="64" cy="20" fill="#0055AA" r="2"></circle><circle cx="46" cy="38" fill="#003366" r="2.2"></circle><circle cx="45" cy="37" fill="#FFF" r="0.8"></circle><circle cx="54" cy="38" fill="#003366" r="2.2"></circle><circle cx="53" cy="37" fill="#FFF" r="0.8"></circle><ellipse cx="42" cy="41" fill="#FF8899" opacity="0.7" rx="2.5" ry="1.5"></ellipse><ellipse cx="58" cy="41" fill="#FF8899" opacity="0.7" rx="2.5" ry="1.5"></ellipse><path d="M 48 42 Q 50 44 52 42" fill="none" stroke="#003366" stroke-width="1"></path><circle cx="50" cy="53" fill="#0055AA" r="4"></circle><path d="M 48 52 Q 50 50 52 52 Q 50 55 48 52 Z" fill="#88D4FF"></path><path d="M 57 55 L 75 40" stroke="#333" stroke-width="1.2"></path><polygon fill="#33AAFF" points="75,40 75,50 85,45"></polygon></svg>`,
        news: [
            {
                dept: "도시철도지원과",
                title: "효빈 도시철도 창전선(팔조~창전구청~칠심) 개통 대비 역세권 환경정비 최종 계획안 공개",
                summary: "2027년 9월 개통 예정인 창전선(#33AAFF) 마스코트 심세이 홍보 조형물 설치 및 환승 연계 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_창전구_창전선개통대비_역세권정비계획.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">창전구청 도시철도지원과는 구민들의 숙원 사업인 도시철도 창전선(팔조~신팔조~쌍엽중앙~신쌍엽~창엽~신창전~창전구청~칠심)의 성공적인 개통을 위해 역세권 문화광장 조성 계획을 발표합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>주요 구간:</strong> 창전구청역(1호선·창전선 환승) ~ 신창전역 ~ 칠심역(2호선 환승)</li>
                        <li><strong>특화 사업:</strong> 스카이 블루(#33AAFF) 테마 보행로 정비, 창전선 마스코트 '심세이' & 창전구 마스코트 '모르도리' 합동 포토존 설치</li>
                    </ul>
                `
            },
            {
                dept: "문화예술과",
                title: "창전 블루 로즈 가든(창전공원) 야간 바이올린 협주회 및 푸른 장미 축제 안내",
                summary: "Morfonica 자매결연 기념 창전공원 야외 음악당에서 심포닉 록 & 클래식 갈라 콘서트가 열립니다.",
                fileType: "PDF", fileName: "2026_창전구_블루로즈가든_음악회_일정표.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">품격 있는 문화예술 도시 창전구의 상징인 블루 로즈 가든에서 푸른 장미 야간 조명과 함께하는 바이올린 심포닉 콘서트를 개최합니다.</p>
                `
            },
            {
                dept: "청년교육과",
                title: "창전 청년 클래식·실용음악 아카데미 및 예술인 창작장려금 지원 대상자 모집",
                summary: "바이올린, 기타, 보컬 등 청년 음악가들의 창작 활동과 공연 기획을 지원하는 사업입니다.",
                fileType: "PDF", fileName: "2026_창전구_청년음악가_지원사업_공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">창전구의 높은 문화적 품격을 이어갈 청년 아티스트 및 학생 밴드 동아리를 대상으로 악기 대여 및 공연장 대관료를 지원합니다.</p>
                `
            },
            {
                dept: "도로교통과",
                title: "쌍엽동·진백동 급경사 구간 동절기 자동 염수분사장치 가동 및 버스 우회 계획 공지",
                summary: "강설 시 창전구 해안 및 구릉지 도로의 안전 확보를 위한 시내버스 우회 경로를 안내합니다.",
                fileType: "HWP", fileName: "2026_창전구_동절기_버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">겨울철 대설주의보 발효 시 월삼여고 및 쌍엽고개 구간의 시내버스가 모포로 대로변으로 우회 운행합니다.</p>
                `
            }
        ]
    },
    "ancheon": {
        name: "안천구", title: "안천구청",
        themeColor: "#AA66DD", themeSubColor: "#8844BB", themeTextColor: "#FFFFFF", accentColor: "#7E22CE",
        address: "효빈광역시 안천구 안천중앙로 52 (안천6동)",
        headTitle: "안천구청장", headName: "이규희",
        phone: "079-915-7732", fax: "079-915-7739", duty: "079-915-7700",
        slogan: "덕심으로 하나 되는 안천, 현실이 되는 2.5차원 테마도시",
        mascotName: "안두리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#AA66DD" opacity="0.2" r="45"></circle><path d="M 38 85 Q 32 62 44 45 Q 48 32 56 34 Q 62 44 52 62 Q 45 76 47 85 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="1"></path><circle cx="53" cy="27" fill="#FFFFFF" r="9" stroke="#D0D0D0" stroke-width="0.5"></circle><circle cx="53" cy="18" fill="#D81C2F" r="2"></circle><path d="M 46 26 Q 50 23 52 27" fill="none" stroke="#111" stroke-width="1.8"></path><path d="M 47 29 Q 50 32 53 29" fill="none" stroke="#111" stroke-width="1.5"></path><polygon fill="#FF9900" points="46,28 32,32 46,35"></polygon><path d="M 44 52 L 48 58 L 52 52" fill="none" stroke="#FF5522" stroke-linecap="round" stroke-width="2"></path><circle cx="55" cy="50" fill="#00CCAA" r="2.5"></circle><path d="M 42 65 L 22 50 Q 15 42 24 45 Q 28 48 35 62 Z" fill="#00CCAA"></path><path d="M 42 65 L 36 58 L 39 56 L 45 62 Z" fill="#FFFFFF" stroke="#D0D0D0" stroke-width="0.5"></path><path d="M 46 36 Q 50 42 54 36 L 58 48 L 48 46 Z" fill="#FF8899"></path></svg>`,
        news: [
            {
                dept: "특화산업육성과",
                title: "초음동 친환경 대파 농가 상생 직거래 장터 및 보컬로이드 콜라보 특판 계획안 공개",
                summary: "안천구 초음동 명품 대파의 전국 유통 확대 및 한정판 캐릭터 포장재 지원사업 최종 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_안천구_초음동대파_콜라보특판_계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">안천구청 특화산업육성과는 관내 초음동 대파 농가의 소득 증대와 서브컬처 관광 상품화를 결합한 '초음 대파 전국 직거래 및 굿즈 패키지 지원사업'을 시행합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>판매 장소:</strong> 1호선 팔망성역 광장 직거래 부스 및 안천구 공식 온라인몰</li>
                        <li><strong>특전 안내:</strong> 초음 대파 1단 구매 시 안두리 & 대파 모양 에코백 및 사쿠라 핑크 기념 티켓 증정</li>
                    </ul>
                `
            },
            {
                dept: "문화관광과",
                title: "이자공원 피아노 야외음악당 및 타천마을 리틀데몬 입구 심사대 리뉴얼 개장",
                summary: "사쿠라우치 리코 헌정 그랜드 피아노 부스와 타천마을 테마 포토존이 새롭게 단장했습니다.",
                fileType: "PDF", fileName: "2026_안천구_이자공원_타천마을_가이드.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">2.5차원 테마도시 안천구의 핵심 명소인 이자공원과 타천마을이 공식 라이선스 협약을 통해 한층 더 정교한 성지로 거듭났습니다.</p>
                `
            },
            {
                dept: "청년정책과",
                title: "안천 2.5차원 문화콘텐츠 청년 기획단 및 서브컬처 통번역 서포터즈 모집",
                summary: "해외 성지순례 관광객을 맞이할 청년 통번역 인재와 축제 기획자를 모집합니다.",
                fileType: "PDF", fileName: "2026_안천구_2.5차원_청년기획단_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">이규희 안천구청장과 함께 '덕심으로 하나 되는 안천'의 글로벌 축제를 만들어갈 청년 인재를 모집합니다.</p>
                `
            },
            {
                dept: "교통행정과",
                title: "동절기 폭설 대비 안천고가교 및 타천마을 구릉지 시내버스 우회 계획 공지",
                summary: "대설 시 팔망성역 환승 거점을 중심으로 지선·마을버스 노선이 우회 운행됩니다.",
                fileType: "HWP", fileName: "2026_안천구_동절기_버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">겨울철 결빙 시 타천마을 언덕길 구간의 마을버스가 안천중앙로 평지 정류소로 임시 우회합니다.</p>
                `
            }
        ]
    },
    "tanseong": {
        name: "탄성군", title: "탄성군청",
        themeColor: "#BBFF64", themeSubColor: "#559900", themeTextColor: "#1A3300", accentColor: "#3D7300",
        address: "효빈광역시 탄성군 탄성읍 공리 24",
        headTitle: "탄성군수", headName: "성선설",
        phone: "079-134-8821", fax: "079-134-8829", duty: "079-134-8800",
        slogan: "낭만이 공명하는 탄력 도시, 환상이 현실이 되는 탄성",
        mascotName: "탄도리",
        mascotSvg: `<svg class="w-full h-full" style="background:#fff; border-radius:50%;" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" fill="#BBFF64" opacity="0.3" r="45"></circle><path d="M 30 15 L 70 15 C 70 50 65 75 50 88 C 35 75 30 50 30 15 Z" fill="#66CCFF" opacity="0.25"></path><circle cx="50" cy="48" fill="none" opacity="0.4" r="24" stroke="#0099DD" stroke-dasharray="4,2" stroke-width="1.5"></circle><path d="M 35 75 C 25 55 35 35 50 35 C 65 35 75 55 65 75 Z" fill="#FFFFFF" stroke="#333" stroke-width="1"></path><ellipse cx="32" cy="58" fill="#333333" rx="6" ry="14" transform="rotate(15 32 58)"></ellipse><ellipse cx="68" cy="58" fill="#333333" rx="6" ry="14" transform="rotate(-15 68 58)"></ellipse><ellipse cx="32" cy="58" fill="#BBFF64" rx="3" ry="8" transform="rotate(15 32 58)"></ellipse><ellipse cx="68" cy="58" fill="#BBFF64" rx="3" ry="8" transform="rotate(-15 68 58)"></ellipse><circle cx="50" cy="32" fill="#FFFFFF" r="14" stroke="#333" stroke-width="1"></circle><path d="M 40 22 C 45 12 55 12 60 22 Z" fill="#FF3333"></path><rect fill="#0099DD" height="4" rx="2" width="28" x="36" y="22"></rect><circle cx="50" cy="24" fill="#FF8800" r="3"></circle><path d="M 49 21 C 50 19 52 21 51 22" fill="none" stroke="#559900" stroke-width="1"></path><circle cx="44" cy="32" fill="#111" r="3"></circle><circle cx="43" cy="31" fill="#FFF" r="1"></circle><circle cx="56" cy="32" fill="#111" r="3"></circle><circle cx="55" cy="31" fill="#FFF" r="1"></circle><ellipse cx="38" cy="36" fill="#FF6688" opacity="0.7" rx="3" ry="1.8"></ellipse><ellipse cx="62" cy="36" fill="#FF6688" opacity="0.7" rx="3" ry="1.8"></ellipse><polygon fill="#FFCC00" points="50,34 44,42 56,42" stroke="#CC9900" stroke-width="0.5"></polygon><path d="M 45 50 L 55 50 C 55 60 53 66 50 70 C 47 66 45 60 45 50 Z" fill="#66CCFF" stroke="#0055AA" stroke-width="0.8"></path><circle cx="50" cy="57" fill="none" r="3.5" stroke="#FFFFFF" stroke-width="1.2"></circle><path d="M 22 45 L 30 52" stroke="#666" stroke-linecap="round" stroke-width="3"></path><rect fill="#BBFF64" height="18" rx="4" stroke="#559900" stroke-width="1" transform="rotate(-25 20 39)" width="8" x="16" y="30"></rect><line stroke="#FFFFFF" stroke-linecap="round" stroke-width="2" x1="18" x2="22" y1="33" y2="43"></line></svg>`,
        news: [
            {
                dept: "농정특산품과",
                title: "고해읍 특산물 '치카 미칸(감귤)' 직거래 판촉 및 농어촌 성지순례 교통 패스 계획안 공개",
                summary: "자매도시 누마즈 교류 기념 고해읍 감귤 특판 행사 및 도변읍·서목읍·흑택면을 잇는 탄성 투어패스 지원 계획안을 공개합니다.",
                fileType: "PDF", fileName: "2026_탄성군_고해미칸특판_및_투어패스_계획안.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">탄성군청 농정특산품과는 고해읍의 자랑인 고당도 감귤(미칸) 농가 판로 확대와 농어촌 서브컬처 관광 활성화를 결합한 '탄성 덕업일치 상생 프로젝트'를 시행합니다.</p>
                    <ul class="list-disc pl-5 mb-6 space-y-2">
                        <li><strong>주요 행사장:</strong> 1호선 지선 고해역 광장, 도변역 애니메이트 앞, 흑택면 루비지구 호수공원</li>
                        <li><strong>지원 내용:</strong> 탄성군 5개 철도 노선 연계 일일 투어패스 구매 시 고해 미칸 1박스 30% 할인권 제공</li>
                    </ul>
                `
            },
            {
                dept: "문화체육관광과",
                title: "서목읍 록구리(69리) 록 페스티벌 및 도변읍 야광봉 오타게 경연대회 개최",
                summary: "탄성군의 밤을 라임 그린(#BBFF64) 빛으로 물들일 야외 록 밴드 & 야광봉 축제가 열립니다.",
                fileType: "PDF", fileName: "2026_탄성군_록구리_페스티벌_안내.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">서목읍 록구리 야외 특설무대와 도변읍 광장에서 밴드 라이브 및 '탄도리배 전국 야광봉 16연타 경연대회'가 개최됩니다.</p>
                `
            },
            {
                dept: "청년귀농정책과",
                title: "탄성군 청년 귀농·귀촌 크리에이터 및 테마 카페 창업 정착금 지원 모집",
                summary: "농어촌의 한적함과 서브컬처의 열기가 공존하는 탄성군에서 새 출발할 청년들을 모집합니다.",
                fileType: "PDF", fileName: "2026_탄성군_청년귀촌_크리에이터_모집공고.pdf",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">인구 증가 기적을 쓰고 있는 탄성군에서 테마 게스트하우스, 굿즈 카페, 스마트팜을 운영할 청년 창업가를 모집합니다.</p>
                `
            },
            {
                dept: "건설교통과",
                title: "동절기 산간·해안 결빙 대비 탄성읍·야진읍 군내버스 및 마을버스 우회 공지",
                summary: "폭설 시 고갯길 구간을 우회하여 주요 전철역(탄성군청역·도변역) 직결 노선으로 운행합니다.",
                fileType: "HWP", fileName: "2026_탄성군_동절기_버스우회계획.hwp",
                bodyHtml: `
                    <p class="mb-6 font-medium text-lg">겨울철 폭설 시 산간 마을버스 노선이 제설 완료 도로인 국도 및 전철역 연결 도로로 임시 우회 운행합니다.</p>
                `
            }
        ]
    }
};

function runMasterGuPatch() {
    const urlParams = new URLSearchParams(window.location.search);
    const guKey = urlParams.get('gu');

    const footerEl = document.getElementById('common-footer');
    const headerEl = document.getElementById('common-header');

    // 0. 유관기관 드롭다운 새 창 열기
// 0. 유관기관 드롭다운 새 창 열기 (최종 수정 버전)
    if (footerEl) {
        const selectEl = footerEl.querySelector('select');
        const moveBtn = Array.from(footerEl.querySelectorAll('button')).find(el => el.textContent.trim() === '이동');
        
        if (selectEl && moveBtn && !moveBtn.dataset.fixedNewTab) {
            moveBtn.dataset.fixedNewTab = "true";
            
            // 기존에 걸려있는 모든 클릭 이벤트를 무력화하기 위해 onclick 속성 제거
            moveBtn.removeAttribute('onclick');
            
            // 새로운 클릭 이벤트 리스너 부착
            moveBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopImmediatePropagation(); // 다른 이벤트 리스너들의 개입 차단
                
                const selectedUrl = selectEl.value;
                if (selectedUrl && selectedUrl !== "" && selectedUrl !== "#") {
                    window.open(selectedUrl, '_blank');
                } else {
                    alert("이동하실 유관기관을 선택해 주세요.");
                }
            }, true); // 캡처링 단계에서 먼저 가로채어 실행
        }
    }    // 1. 모든 링크에 ?gu= 파라미터 강제 유지 + 휠/Ctrl 클릭 새 창 패치
    if (guKey) {
        document.querySelectorAll('a[href]').forEach(a => {
            const href = a.getAttribute('href');
            if (href && href.includes('.html') && !href.startsWith('http') && !href.startsWith('#')) {
                if (!href.includes(`gu=${guKey}`)) {
                    const parts = href.split('#');
                    const cleanUrl = parts[0] + (parts[0].includes('?') ? '&' : '?') + `gu=${guKey}`;
                    a.setAttribute('href', parts[1] ? `${cleanUrl}#${parts[1]}` : cleanUrl);
                }
            }
        });
        document.querySelectorAll('[onclick*="location.href"]').forEach(el => {
            const oc = el.getAttribute('onclick');
            const match = oc && oc.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
            if (match && match[1]) {
                let targetUrl = match[1];
                if (targetUrl.includes('.html') && !targetUrl.includes(`gu=${guKey}`) && !targetUrl.startsWith('http')) {
                    const parts = targetUrl.split('#');
                    const cleanUrl = parts[0] + (parts[0].includes('?') ? '&' : '?') + `gu=${guKey}`;
                    targetUrl = parts[1] ? `${cleanUrl}#${parts[1]}` : cleanUrl;
                    el.setAttribute('onclick', `location.href='${targetUrl}'`);
                }
                if (!el.dataset.linkPatched) {
                    el.dataset.linkPatched = "true";
                    el.addEventListener('auxclick', (e) => { if (e.button === 1) { e.preventDefault(); window.open(targetUrl, '_blank'); } });
                    el.addEventListener('click', (e) => { if (e.ctrlKey || e.metaKey) { e.preventDefault(); e.stopPropagation(); window.open(targetUrl, '_blank'); } }, true);
                }
            }
        });
    }

    const now = new Date();
    const dates = [
        new Date(now), new Date(now.getTime() - 86400000),
        new Date(now.getTime() - 86400000), new Date(now.getTime() - 172800000)
    ];
    const fmtFull = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const fmtMD = (d) => `${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
    const fmtY = (d) => `${d.getFullYear()}`;

    if (!guKey || !GU_FULL_DATA[guKey]) return;

    const data = GU_FULL_DATA[guKey];
    const mainColor = data.themeColor;
    const subColor = data.themeSubColor;
    const textColor = data.themeTextColor;
    const accentColor = data.accentColor;
    const shortRole = data.name.endsWith('군') ? '군수' : '구청장';

    // 2. 퍼스널 컬러 CSS 주입
    let styleTag = document.getElementById('gu-personal-color-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'gu-personal-color-style';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
        #common-header header, #common-header > div:first-child { background-color: ${mainColor} !important; color: ${textColor} !important; }
        #common-header header *, #common-header > div:first-child a, #common-header > div:first-child span, #common-header > div:first-child button { color: ${textColor} !important; }
        #common-header nav, #common-header > div:nth-child(2) { background-color: ${subColor} !important; color: #FFFFFF !important; }
        #common-header nav div[class*="absolute"] *, #common-header .dropdown-menu * { color: #1e293b !important; }
        .ribbon-main { background: ${mainColor} !important; color: ${textColor} !important; font-weight: 800 !important; }
        #main-search-input { border-color: ${accentColor} !important; }
        #main-search-input + button { background-color: ${mainColor} !important; color: ${textColor} !important; }
        div:has(> #main-search-input) { border-color: ${mainColor} !important; }
        .date-circle span:last-child { color: ${accentColor} !important; }
        .post-row:hover .post-title { color: ${accentColor} !important; }
        .lnb-depth2 > li > a.current { color: ${accentColor} !important; font-weight: 900 !important; }
        .lnb-depth3 a.current-sub { color: ${accentColor} !important; background-color: ${mainColor}11 !important; font-weight: 900 !important; }
    `;

    // 3. 공통 헤더/푸터 교체
    if (headerEl && headerEl.innerHTML.trim() !== "") {
        const headerLogo = headerEl.querySelector('header img');
        if (headerLogo && headerLogo.dataset.guPatched !== guKey) {
            headerLogo.dataset.guPatched = guKey; delete headerLogo.dataset.fb; headerLogo.style.display = 'block';
            if (headerLogo.nextElementSibling) headerLogo.nextElementSibling.style.display = '';
            headerLogo.onerror = function() { if (!this.dataset.fb) { this.dataset.fb = '1'; this.src = '이미지/logo.webp'; } else this.style.display = 'none'; };
            headerLogo.src = `이미지/${data.name}.webp`;
        }
        const headerTitle = headerEl.querySelector('header span.text-2xl');
        if (headerTitle) headerTitle.textContent = data.title;
        const navBar = headerEl.querySelector('nav');
        if (navBar && !navBar.dataset.guNamePatched) {
            navBar.innerHTML = navBar.innerHTML.replace(/효빈소개/g, `${data.name}소개`).replace(/시장실/g, `${shortRole}실`).replace(/시장에게 바란다/g, `${shortRole}에게 바란다`).replace(/역대시장/g, `역대${shortRole}`);
            navBar.dataset.guNamePatched = "true";
        }
    }

    if (footerEl && footerEl.innerHTML.trim() !== "") {
        if (footerEl.innerHTML.includes('효빈로 79') || footerEl.innerHTML.includes('HYOBIN CITY')) {
            footerEl.innerHTML = footerEl.innerHTML.replace(/효빈광역시 북구 효빈로 79\(고송8동\)/g, data.address).replace(/079-591-2548/g, data.phone).replace(/079-591-2547/g, data.fax).replace(/079-591-2546/g, data.duty).replace(/HYOBIN CITY/g, `HYOBIN ${guKey.toUpperCase()}`);
        }
        const footerLogo = footerEl.querySelector('img[alt="하단 로고"]');
        if (footerLogo && footerLogo.dataset.guPatched !== guKey) {
            footerLogo.dataset.guPatched = guKey; delete footerLogo.dataset.fb; footerLogo.style.display = 'block';
            if (footerLogo.nextElementSibling) footerLogo.nextElementSibling.style.display = 'none';
            footerLogo.onerror = function() { if (!this.dataset.fb) { this.dataset.fb = '1'; this.src = '이미지/logo.webp'; } };
            footerLogo.src = `이미지/${data.name}.webp`;
        }
    }

    // ==========================================
    // 🔥 A. 마스코트 페이지 (mascot.html) 완벽 개조 🔥
    // ==========================================
    const path = window.location.pathname;

    if (path.includes('mascot.html')) {
        document.title = `시의상징 - 소통캐릭터 | ${data.title} 공식 홈페이지`;
        
        // 지역별 맞춤 세계관 (LORE) 데이터
        const MASCOT_LORE = {
            jung: {
                mbti: "INTJ (용의주도한 전략가)", origin: "개항기 효빈성 전차기지",
                tmi: [ { b: "시간 여행자", t: "1930년대를 걷는 차장", d: "시간을 되감아 개항기 효빈성과 현재를 넘나드는 능력이 있습니다. 품에 지닌 파란색 모래시계가 핵심입니다." },
                       { b: "마이웨이", t: "뱁새 마이웨이", d: "뱁새가 황새 따라가다 가랑이 찢어진다는 속담을 비웃듯, '전용 트램 타고 편하게 앞지른다'는 중구민의 프라이드를 대변합니다." },
                       { b: "선로 수호자", t: "전차 선로 방어력 만렙", d: "과거 전차 폐선 시도에 맞서 싸운 전적이 있어, 선로를 위협하는 진상이 나타나면 깃털을 세우고 돌진합니다." } ],
                hist: [ { p: "1930년대 ~ 2006", t: "개항기 전차와 함께 탄생", d: "개항기 시절부터 원도심 골목을 누비던 작은 뱁새였습니다. 노면전차가 달리던 낭만의 시대를 상징했습니다." },
                        { p: "2006 ~ 2015", t: "트램 폐선 위기와 저항", d: "윤대환 전 시장의 전차 폐선 시도 당시, 선로 위에 드러누운 중구민들과 함께 끝까지 전차를 지켜냈습니다." },
                        { p: "2015 ~ 2022", t: "뱁시계로의 리뉴얼", d: "근대문화유산이 각광받으며, 모래시계와 차장 모자를 장착한 '뱁시계'라는 이름으로 정식 데뷔했습니다." },
                        { p: "2022 ~ 현재", t: "시간여행 마스코트 전성기", d: "원도심 스탬프 투어와 리사동 서브컬처 성지순례를 잇는 핵심 아이콘으로 최고의 전성기를 누리고 있습니다." } ],
                goods: "중앙동 금융가와 원도심의 낭만을 담은 뱁시계 전용 오프라인 매장입니다. 시간여행 모래시계 펜던트, 트램 한정판 승차권 등 고풍스러운 굿즈를 만나보세요.",
                warn: "노면전차 폐선을 옹호하거나, 윤대환 전 시장을 미화하며 뱁시계를 조롱하는 행위는 무관용 원칙으로 강력히 대응합니다."
            },
            buk: {
                mbti: "ESTP (모험을 즐기는 사업가)", origin: "고송신도시 애니메이트 앞",
                tmi: [ { b: "굿즈 수집가", t: "한정판 오픈런 마스터", d: "손에 애니플러스 한정판 야광봉을 쥐고 언제나 가장 먼저 오픈런 대기줄을 서는 열혈 오타쿠 제비입니다." },
                       { b: "질서 유지", t: "고송교차로의 수호자", d: "고송신도시 대형 굿즈샵 인근에서 새치기하는 사람을 발견하면 재빠르게 날아가 야광봉으로 정수리를 타격합니다." },
                       { b: "성지순례", t: "네소베리 탑 쌓기 장인", d: "머리 깃의 보라색 포인트(6호선)를 자랑하며 역세권 굿즈샵의 네소베리 인형 탑을 무너뜨리지 않고 쌓는 특기가 있습니다." } ],
                hist: [ { p: "2000. 07 ~ 2006", t: "구조(區鳥) 제비의 탄생", d: "북구의 상징인 제비를 모티브로 처음 디자인되었으나, 초기에는 투박한 디자인으로 큰 인기를 끌지 못했습니다." },
                        { p: "2006 ~ 2010", t: "'돈불라' 흑역사 시절", d: "한때 갱단 갈매기를 연상케 하는 괴작 마스코트 '돈불라'로 교체되어 시민들에게 크나큰 PTSD를 안겨주었습니다." },
                        { p: "2010 ~ 2022", t: "제비도리로 전격 교체", d: "흑역사를 씻어내기 위해 김지언 구청장이 직접 고퀄리티 SVG 기반의 '제비도리'로 전격 리뉴얼했습니다." },
                        { p: "2022 ~ 현재", t: "서브컬처 중심 아이콘", d: "고송신도시 애니플러스 입점과 함께 북구가 엘리트 오타쿠 진영의 메카로 떠오르며 홍보대사로 맹활약 중입니다." } ],
                goods: "고송교차로 지하도에 위치한 제비도리 팝업스토어입니다. 6호선 다이캐스트, 애니플러스 콜라보 아크릴 스탠드 등 오타쿠의 심장을 울리는 굿즈가 가득합니다.",
                warn: "과거 괴작 '돈불라' 사진을 고의로 합성하여 제비도리를 조롱하거나 굿즈 줄서기 문화를 비하하는 행위는 강력히 제재합니다."
            },
            dong: {
                mbti: "ESFP (자유로운 영혼의 연예인)", origin: "전천 냥냥 골목",
                tmi: [ { b: "철도 덕후", t: "효빈역 명예 선장", d: "손에 항상 7호선 다이캐스트 한정판을 쥐고 효빈역 광장에서 철도 덕후들의 질서를 유지하는 듬직한 고양이입니다." },
                       { b: "성지순례", t: "보몽역 드림 케이스", d: "퇴근 후에는 보몽역 드림 케이스에 꿈을 적으러 가며, 전천 냥냥 골목에서 아이돌마스터 팬들과 소통합니다." },
                       { b: "길냥이 보호", t: "츄르 배급 담당관", d: "동구 관내 길고양이들의 식량 배급을 담당하며, 동물 보호 정책 홍보에 앞장서는 따뜻한 마음씨를 가졌습니다." } ],
                hist: [ { p: "1995 ~ 2006", t: "정체불명 참새의 시대", d: "초기에는 아무 특색 없는 참새 마스코트가 동구를 대표했으나, 구민들의 관심 밖에서 쓸쓸히 잊혀져 갔습니다." },
                        { p: "2006 ~ 2018", t: "침체기와 새로운 모색", d: "동구 구도심의 쇠퇴와 함께 마스코트 역시 방치되었으나, 전천 냥냥 골목이 성지로 뜨면서 고양이 테마가 급부상했습니다." },
                        { p: "2018 ~ 2022", t: "냥냥선장 전격 데뷔", d: "동구청이 심혈을 기울여 고퀄리티 SVG 기반의 철도+고양이 융합 마스코트 '냥냥선장'을 개발하여 전격 교체했습니다." },
                        { p: "2022 ~ 현재", t: "교통·문화의 마스코트", d: "효빈역 철도 문화제 공식 마스코트로 활약하며, 철도 덕후와 서브컬처 팬덤 모두에게 사랑받는 아이콘이 되었습니다." } ],
                goods: "효빈역 대합실에 위치한 냥냥선장 굿즈샵입니다. 기관사 모자를 쓴 냥냥선장 봉제인형과 동구 철도 노선도가 그려진 특별한 굿즈들을 만나보실 수 있습니다.",
                warn: "과거의 참새 괴작을 끌고 와 냥냥선장의 정체성을 훼손하거나, 전천 냥냥 골목의 길고양이를 학대·비하하는 창작물은 절대 용납하지 않습니다."
            },
            seo: {
                mbti: "ENTJ (대담한 통솔자)", origin: "효빈대학교 캠퍼스",
                tmi: [ { b: "시위 선봉장", t: "불의를 참지 않는 거위", d: "역사 왜곡이나 공대 R&D 예산 삭감 뉴스를 접하면 날개를 무섭게 퍼덕이며 국회의사당 방향으로 돌격하는 투사입니다." },
                       { b: "즈라! 뱃지", t: "하나마루 오시", d: "가슴에 '즈라!'가 적힌 노란색 포스트잇 뱃지를 훈장처럼 달고 다니며 7호선 핑크색 트램 캡을 삐딱하게 씁니다." },
                       { b: "미식가", t: "대학로 가성비 감별사", d: "평소엔 대학로 가성비 식당가를 유유히 거닐며 학생들을 위해 양 많고 저렴한 숨은 맛집(즈라 가이드)을 발굴합니다." } ],
                hist: [ { p: "2000. 07 ~ 2006", t: "평화로운 거위 시절", d: "청덕공원 호수에서 평화롭게 수영하던 평범한 거위 마스코트였습니다. 학생들과 간식을 나눠 먹는 순한 성격이었습니다." },
                        { p: "2006 ~ 2015", t: "윤대환 로고의 고통", d: "윤대환 전 시장 시절, 기괴하고 촌스러운 흑역사 로고에 밀려 고지서와 쓰레기봉투에서 눈물을 훔쳐야 했습니다." },
                        { p: "2015 ~ 2022", t: "투사 '구스장'의 각성", d: "트램 폐선 반대 시위 당시 선로에 드러누운 학생들과 연대하며 쟁취한 신발 한 짝을 무기로 '구스장'으로 각성했습니다." },
                        { p: "2022 ~ 현재", t: "지성과 소신의 아이콘", d: "새로운 세련된 구 로고와 함께 정식 데뷔하여, 보수 정당의 무덤인 서구의 화끈한 청년 정치와 지성을 대변하고 있습니다." } ],
                goods: "당선역 갤러리아 인근에 위치한 구스장 공식 굿즈샵입니다. 구스장이 입에 물고 있는 '윤재훈의 신발 한 짝' 레플리카 키링과 '즈라' 포스트잇 세트가 베스트셀러입니다.",
                warn: "서구의 핌피(PIMFY) 투쟁 역사를 폄하하거나 윤대환, 윤재훈 등 진상 정치인들과 구스장을 긍정적으로 엮는 2차 창작은 엄중 처벌합니다."
            },
            nam: {
                mbti: "ESFP (자유로운 영혼의 연예인)", origin: "남구 곽암해수욕장",
                tmi: [ { b: "해양 액티비티", t: "효빈항의 비행사", d: "평당신도시 마천루와 곽암해수욕장 갯바위를 자유롭게 날아다니며 남구민들에게 부와 행운의 기운을 물어다 줍니다." },
                       { b: "로젤리아", t: "열혈 뱅드리머", d: "날개 끝에 항상 로젤리아(Roselia) 응원 타월과 4호선 사야역 라이브 하우스 입장권을 소중하게 쥐고 다닙니다." },
                       { b: "오픈런 마스터", t: "운양중앙역 VIP", d: "빙천공구단지에서 기름 냄새를 맡다가도 한정판 굿즈 출시일이면 누구보다 빨리 운양중앙역 공식 굿즈샵으로 날아갑니다." } ],
                hist: [ { p: "2000. 07 ~ 2006", t: "해양도시 마스코트 탄생", d: "초기에는 해운산업지구 홍보를 위해 단순한 참새 모양으로 제작되었으나 큰 인지도는 없었습니다." },
                        { p: "2006 ~ 2014", t: "'짹수색대원' 흑역사", d: "어린이들에게 심해 괴수 트라우마를 심어준 기괴한 '짹수색대원'으로 마개조 당하며 암흑기를 보냈습니다." },
                        { p: "2014 ~ 2022", t: "참도리 전격 데뷔", d: "오전희 구청장 취임 후 브랜드 대대적 리뉴얼을 거쳐, 8호선 컬러 스카프를 두른 귀여운 '참도리'로 재탄생했습니다." },
                        { p: "2022 ~ 현재", t: "글로벌 덕질 항해사", d: "해운산업지구의 최첨단 경제와 서브컬처 팬들의 불타는 덕심을 완벽하게 융합한 남구의 대표 아이콘으로 활약 중입니다." } ],
                goods: "효빈항 제1국제여객터미널 내 위치한 참도리 면세 굿즈샵입니다. 참도리 선장 모자와 로젤리아 콜라보 한정판 타월, 8호선 연보라색 여권 케이스가 인기입니다.",
                warn: "과거 트라우마 유발 괴작인 '짹수색대원' 이미지를 고의로 유포하거나 곽암해수욕장 야간 갯바위 무단 출입을 조장하는 일러스트는 절대 금지합니다."
            },
            cheongyeop: {
                mbti: "ISFJ (용감한 수호자)", origin: "청엽 베이커리 거리",
                tmi: [ { b: "제빵 마스터", t: "달콤한 빵 냄새의 노예", d: "청엽 베이커리 거리의 빵 냄새에 매료되어 아예 제빵사 파티시에 모자를 쓰고 취직해버린 빵 덕후 참새입니다." },
                       { b: "아오바 모카", t: "초코 소라빵 전도사", d: "가슴에 초코 소라빵과 아오바 모카 아크릴 스탠드를 꼭 안고 다니며, 모카 쨩 대핀치! 대사를 완벽하게 구사합니다." },
                       { b: "나눔 천사", t: "빵 나눔 냉장고 관리자", d: "청엽구청역 '모카의 빵 나눔 냉장고'를 직접 관리하며 결식 아동들에게 갓 구운 메론빵을 나눠주는 따뜻한 요정입니다." } ],
                hist: [ { p: "2000. 07 ~ 2006", t: "평범한 참새 시절", d: "청엽지구의 녹음을 상징하는 평범한 참새였으나 뚜렷한 개성이 없어 시민들의 기억에 깊게 남지 못했습니다." },
                        { p: "2006 ~ 2018", t: "존재감 상실의 암흑기", d: "특별한 리뉴얼 없이 방치되다시피 하였으며, 빵 부스러기나 쪼아 먹는 신세로 전락했던 슬픈 시기입니다." },
                        { p: "2018 ~ 2022", t: "빵도리로의 각성", d: "권상남 구청장과 청엽 베이커리 조합의 합심으로 제빵사 콘셉트의 '빵도리'로 완벽하게 리뉴얼 되었습니다." },
                        { p: "2022 ~ 현재", t: "빵지순례객의 수호신", d: "애프터글로우 팬들과 빵지순례객들이 몰려들며 청엽구를 대표하는 가장 달콤하고 강력한 마스코트로 떡상했습니다." } ],
                goods: "청엽 베이커리 거리 한가운데 위치한 빵도리 오븐 샵입니다. 진짜 빵 냄새가 나는 빵도리 스퀴시 인형과 초코 소라빵 모양의 푹신한 대형 쿠션을 절찬 판매 중입니다.",
                warn: "빵도리에게 토마토(박효빈 시장 극혐 음식)를 강제로 먹이거나, 빵 나눔 냉장고의 취지를 악의적으로 훼손하는 블랙 코미디 창작물은 강력히 제재합니다."
            },
            changjeon: {
                mbti: "INFJ (선의의 옹호자)", origin: "창전 블루 로즈 가든",
                tmi: [ { b: "몽환적 예술가", t: "푸른 장미의 요정", d: "가슴에 쿠라타 마시로의 상징인 '푸른 장미' 배지를 달고 월삼여고 교정과 창전공원을 우아하게 날아다닙니다." },
                       { b: "품격 유지", t: "청량 리버럴 인분 살포", d: "구의 성지를 훼손하려는 어둠의 무리(진상 정치인 등)가 나타나면 강력한 리버럴 인분을 살포해 지능을 교화시킵니다." },
                       { b: "개통 기원", t: "심세이의 든든한 누나", d: "오른손에는 곧 개통할 창전선 광역전철(심세이)의 무사 개통을 기원하는 깃발을 흔들며 동생을 응원합니다." } ],
                hist: [ { p: "2000. 07 ~ 2006", t: "강인한 흰머리수리", d: "초기에는 창전구의 강인함을 상징하는 흰머리수리 마스코트였으나, 구민들과 다소 거리감이 느껴진다는 평이 많았습니다." },
                        { p: "2006 ~ 2020", t: "나비 문양 표절 논란", d: "창전구 CI가 밴드 모르포니카 로고를 표절했다는 오해를 받으며 서브컬처계의 엄청난 논란의 중심에 섰습니다." },
                        { p: "2020 ~ 2022", t: "위기를 기회로, 공식 자매결연", d: "전역헌 구청장이 오히려 부시로드와 공식 자매결연을 맺어 합법적 성지로 만들고 요정 '모르도리'를 데뷔시켰습니다." },
                        { p: "2022 ~ 현재", t: "창전구 품격의 상징", d: "스카이 블루(#33AAFF)로 물든 온몸으로 창전구민들의 고고하고 무자비한 품격을 대변하는 마스코트로 맹활약 중입니다." } ],
                goods: "창전 블루 로즈 가든(창전공원) 입구의 부띠끄 굿즈샵입니다. 모르포 나비 문양의 고급 양산, 푸른 장미 펜던트, 창전선 개통 기원 에디션 만년필 등 품격 있는 굿즈를 제공합니다.",
                warn: "창전구 로고를 악의적인 표절로 몰아가거나, 모르도리의 리버럴 인분을 불법 마약류 등 부정적인 이미지로 합성하는 행위는 민형사상 책임을 묻습니다."
            },
            ancheon: {
                mbti: "ENFP (재기발랄한 활동가)", origin: "초음동 대파밭 & 타천마을",
                tmi: [ { b: "대파 전도사", t: "초음 대파 홍보대사", d: "왼날개에는 하츠네 미쿠의 상징이자 초음동 특산물인 싱싱한 '초음 대파'를 절대 놓지 않고 들고 다닙니다." },
                       { b: "리코 오시", t: "사쿠라 핑크 스카프", d: "목에는 이규희 구청장의 최애인 사쿠라우치 리코의 퍼스널 컬러 핑크색(#FF8899) 스카프를 두르고 다닙니다." },
                       { b: "질서 순찰대", t: "배터리 방전 구호대", d: "주말마다 타천마을 심사대를 순찰하며, 펜라이트 배터리가 방전된 오타쿠들에게 대파를 나눠주며 멘탈을 치유합니다." } ],
                hist: [ { p: "1980년대 ~ 2006", t: "안천시 시절의 딱딱함", d: "과거 안천시 시절 개성 없고 딱딱하게 생긴 옛 참새 마스코트로, 구민들에게 전혀 친숙하게 다가가지 못했습니다." },
                        { p: "2006 ~ 2018", t: "로고 대파 논란의 시작", d: "안천구 CI가 하츠네 미쿠의 대파를 닮았다는 의혹이 제기되며 우연치 않게 서브컬처 커뮤니티에서 유명세를 탔습니다." },
                        { p: "2018 ~ 2022", t: "덕업일치 안두리 데뷔", d: "성덕 이규희 구청장이 취임하자마자 옛 마스코트를 단두대로 보내고, 미소 짓는 '안두리'로 전격 리뉴얼했습니다." },
                        { p: "2022 ~ 현재", t: "2.5차원 테마도시 요정", d: "지명의 우연을 완벽한 제도로 정착시킨 안천구의 자부심답게, 현실과 환상을 잇는 2.5차원 아이콘으로 사랑받고 있습니다." } ],
                goods: "1호선 팔망성역 지하상가 안두리 테마샵입니다. 안두리가 들고 다니는 1:1 스케일 '초음 대파' 응원봉과 리코의 피아노 건반이 수놓아진 핑크 스카프가 인기입니다.",
                warn: "안두리가 들고 있는 대파를 무기로 사용해 폭력을 행사하는 묘사나, 이자공원의 성지순례 의미를 타락시키는 수위 높은 2차 창작은 강력히 규제합니다."
            },
            tanseong: {
                mbti: "ESTJ (엄격한 관리자)", origin: "서목읍 록구리(69리)",
                tmi: [ { b: "오타게 장인", t: "1초 16연타 딱따구리", d: "라임 그린(#BBFF64) 야광봉을 들고 딱따구리 같은 반사신경으로 1초에 16연타 오타게를 추는 댄스 머신입니다." },
                       { b: "미칸 사랑", t: "치카 귤 뱃지", d: "머리에는 러브라이브! 선샤인!! 타카미 치카의 상징인 주황색 귤(미칸) 뱃지가 달린 하늘색 헤드밴드를 묶고 있습니다." },
                       { b: "진상 참교육", t: "단단한 부리 쪼기", d: "애니메이트 앞에서 새치기를 하거나 혐오 시위를 벌이는 진상(ex. 양악설)이 나타나면 정수리에 고속 연타 쪼기를 갈깁니다." } ],
                hist: [ { p: "1990년대 ~ 2009", t: "투박한 농촌 딱따구리", d: "탄성군 쇠퇴기와 함께 방치되었던 칙칙하고 투박한 디자인의 옛 딱따구리 마스코트 시절입니다." },
                        { p: "2009 ~ 2022", t: "인구 감소와 폐광의 위기", d: "농어촌 변두리로 몰락해가며 마스코트 역시 군민들의 기억 속에서 완전히 잊혀져 가던 암흑기였습니다." },
                        { p: "2022 ~ 2025", t: "성선설 군수의 덕업일치", d: "성공한 덕후 성선설 군수가 취임하며, 어떤 위기에도 스프링처럼 튀어오르는 '탄도리'로 고퀄리티 리뉴얼을 감행했습니다." },
                        { p: "2025 ~ 현재", t: "서브컬처 수도의 파수꾼", d: "아쿠아(Aqours) 팬덤의 전폭적인 지지를 받으며, 5개 전철 노선이 관통하는 교통/덕질 거점의 완벽한 아이콘으로 부활했습니다." } ],
                goods: "도변역 애니메이트 옆 탄도리 공식 농협 부스입니다. 치카 미칸(귤) 1박스와 세트로 묶인 한정판 라임 그린 형광 블레이드, 튼튼한 탄도리 부리 모양 키링을 판매합니다.",
                warn: "탄도리의 정수리 쪼기 공격을 인명 살상용으로 과장하여 묘사하거나, 양악설 등 군정 방해 세력을 찬양하는 정치적 창작물은 발각 즉시 군청 차원에서 고발 조치합니다."
            }
        };

        const asideEl = document.querySelector('aside');
        if (asideEl && !asideEl.dataset.guPatched) {
            asideEl.innerHTML = asideEl.innerHTML.replace(/효빈소개/g, `${data.name}소개`).replace(/효빈통계/g, `${data.name}통계`).replace(/효빈의역사/g, `${data.name}의역사`).replace(/역대시장/g, `역대${shortRole}`);
            asideEl.dataset.guPatched = "true";
        }

        const mainEl = document.querySelector('main');
        if (mainEl && !mainEl.dataset.guPatched) {
            const lore = MASCOT_LORE[guKey] || MASCOT_LORE['jung'];

            // 1. 기본 텍스트 변환
            mainEl.innerHTML = mainEl.innerHTML
                .replace(/한바다/g, data.mascotName)
                .replace(/Han Bada/g, data.mascotName)
                .replace(/효빈광역시청 대변인실/g, `${data.title} 기획실`)
                .replace(/효빈광역시청/g, data.title)
                .replace(/효빈시청/g, data.title)
                .replace(/효빈시/g, data.name)
                .replace(/박효빈 현 시장/g, `${data.headName} 현 ${shortRole}`)
                .replace(/박효빈 시장/g, `${data.headName} ${shortRole}`)
                .replace(/효빈시장/g, data.headTitle)
                .replace(/전속 전진! 효빈의 바다는 오늘도 맑음입니다!/g, data.slogan);

            // 2. MBTI 및 기본 프로필 교체
            const mbtiEl = mainEl.querySelector('span.text-sky-600.font-bold');
            if (mbtiEl) {
                mbtiEl.textContent = lore.mbti;
                mbtiEl.className = `font-medium font-bold text-lg`;
                mbtiEl.style.color = mainColor;
            }
            const originEl = Array.from(mainEl.querySelectorAll('span.font-medium')).find(el => el.textContent.includes('제1국제여객터미널'));
            if (originEl) originEl.innerHTML = `${lore.origin}`;
            
            // 배너 그라데이션 컬러 교체
            const heroBanner = mainEl.querySelector('.bg-gradient-to-r');
            if (heroBanner) heroBanner.style.background = `linear-gradient(to right, ${mainColor}, ${subColor})`;

            // 마스코트 한줄 소개 교체
            const descEl = mainEl.querySelector('p.text-slate-600.text-base');
            if (descEl) descEl.innerHTML = data.mascotDesc;

            // 프로필 이미지 SVG로 교체
            const offImg = mainEl.querySelector('img[alt*="공식"]');
            if (offImg && offImg.parentElement) {
                offImg.parentElement.innerHTML = data.mascotSvg + `<div class="absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10" style="background-color:${mainColor}">공식 Ver.</div><div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20"><span class="text-white font-bold flex items-center gap-2"><i data-lucide="zoom-in"></i> 크게 보기</span></div>`;
            }
            const sdImg = mainEl.querySelector('img[alt*="SD"]');
            if (sdImg && sdImg.parentElement) {
                sdImg.parentElement.innerHTML = data.mascotSvg + `<div class="absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded shadow-sm z-10" style="background-color:${accentColor}">요정(SD) Ver.</div><div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 z-20"><span class="text-white font-bold flex items-center gap-2"><i data-lucide="zoom-in"></i> 크게 보기</span></div>`;
            }

            // 3. TMI 관심사 카드 3개 내용 싹 다 교체!
            const tmiCards = mainEl.querySelectorAll('.grid-cols-1.md\\:grid-cols-3 > div');
            tmiCards.forEach((card, idx) => {
                if (lore.tmi[idx]) {
                    const badge = card.querySelector('div[class*="bg-"][class*="text-xs"]');
                    const textP = card.querySelector('p.text-sm');
                    if (badge) {
                        badge.textContent = lore.tmi[idx].b;
                        badge.className = `mt-1 px-2 py-1 text-xs font-bold rounded w-max mb-3`;
                        badge.style.backgroundColor = `${mainColor}22`;
                        badge.style.color = accentColor;
                    }
                    if (textP) {
                        textP.innerHTML = `<strong style="color:${accentColor}">${lore.tmi[idx].t}</strong><br>${lore.tmi[idx].d}`;
                    }
                }
            });

            // 4. 히스토리 4단계 내용 싹 다 교체!
            const historyPhases = mainEl.querySelectorAll('.relative.border-l-2 > div.group');
            historyPhases.forEach((phase, idx) => {
                if (lore.hist[idx]) {
                    const h4 = phase.querySelector('h4');
                    const titleP = phase.querySelector('p.font-bold');
                    const descDiv = phase.querySelector('.text-slate-600.text-sm');
                    
                    if (h4) {
                        h4.textContent = lore.hist[idx].p;
                        h4.style.color = accentColor;
                    }
                    if (titleP) titleP.textContent = lore.hist[idx].t;
                    if (descDiv) descDiv.innerHTML = `<p>${lore.hist[idx].d}</p>`;
                }
            });

            // 5. 굿즈샵 설명 & 사진 SVG 교체
            const goodsDesc = mainEl.querySelector('.w-full.bg-white.rounded-2xl h4 + p');
            if (goodsDesc) goodsDesc.innerHTML = lore.goods;

            mainEl.querySelectorAll('.bg-slate-100.flex.items-center img').forEach(img => {
                if (img.parentElement) {
                    const box = document.createElement('div');
                    box.className = "w-24 h-24 relative z-10 group-hover:scale-110 transition duration-300";
                    box.innerHTML = data.mascotSvg;
                    img.parentElement.replaceChild(box, img);
                }
            });

            // 6. 무관용 원칙 가이드라인 텍스트 교체!
            const warningBox = mainEl.querySelector('.bg-rose-950\\/50 div strong + div, .bg-rose-950\\/50 div');
            if (warningBox) {
                warningBox.innerHTML = `<strong class="text-rose-400 block mb-1">[무관용 원칙] 악의적 비하 및 트라우마 자극 절대 금지</strong>${lore.warn}`;
            }

            mainEl.dataset.guPatched = "true";
            if (typeof lucide !== 'undefined') lucide.createIcons(); // 덮어쓴 후 아이콘 재렌더링
        }

        // 모달창 데이터 변환 (TMI 모달 등)
        const modalData = document.getElementById('modal-data');
        if (modalData && !modalData.dataset.guPatched) {
            modalData.innerHTML = modalData.innerHTML
                .replace(/한바다/g, data.mascotName)
                .replace(/Han Bada/g, data.mascotName)
                .replace(/효빈광역시청/g, data.title);
            
            modalData.querySelectorAll('img').forEach(img => {
                if (img.parentElement) {
                    const svgWrapper = document.createElement('div');
                    svgWrapper.className = 'w-48 h-48 mx-auto mb-4';
                    svgWrapper.innerHTML = data.mascotSvg;
                    img.parentElement.replaceChild(svgWrapper, img);
                }
            });
            modalData.dataset.guPatched = "true";
        }
    } 
    
    // B. 뉴스 상세 페이지 (news_*.html) 
    else if (path.includes('news_')) {
        const articleEl = document.querySelector('article');
        if (articleEl) {
            let newsIdx = 0; 
            if (path.includes('news_haf_2026')) newsIdx = 1;
            else if (path.includes('news_youth_policy')) newsIdx = 2;
            else if (path.includes('news_winter_bus')) newsIdx = 3;

            const targetNews = data.news[newsIdx] || data.news[0];
            document.title = `${targetNews.title} - ${data.title}`;

            const badgeEl = articleEl.querySelector('.flex.items-center.gap-2 span:first-child');
            const dateEl = articleEl.querySelector('.flex.items-center.gap-2 span:last-child');
            const h1El = articleEl.querySelector('h1');

            if (badgeEl) {
                badgeEl.textContent = targetNews.dept;
                badgeEl.className = 'text-xs font-bold px-2.5 py-1 rounded';
                badgeEl.style.backgroundColor = `${mainColor}33`;
                badgeEl.style.color = accentColor;
            }
            if (dateEl) dateEl.textContent = fmtFull(dates[newsIdx] || dates[0]);
            if (h1El) h1El.textContent = targetNews.title;

            const proseEl = articleEl.querySelector('.prose');
            if (proseEl) {
                proseEl.innerHTML = `
                    ${targetNews.bodyHtml}
                    <div class="p-6 rounded-lg text-sm mt-8" style="background-color: ${mainColor}18; color: ${accentColor}; border-left: 4px solid ${mainColor};">
                        <strong>담당부서 및 문의처:</strong> ${data.title} ${targetNews.dept} (${data.phone})
                    </div>
                `;
            }
            const attachLink = articleEl.querySelector('.mt-10 a');
            if (attachLink) {
                const fileBadge = attachLink.querySelector('div.rounded');
                const fileSpan = attachLink.querySelector('span.text-sm');
                if (fileBadge) fileBadge.textContent = targetNews.fileType || 'PDF';
                if (fileSpan) fileSpan.textContent = targetNews.fileName;
            }
        }
    }

    // C. 메인 페이지 (index.html) 처리
    else {
        document.title = `${data.title} 공식 홈페이지`;
        const bgImg = document.querySelector('section img[alt="배경 이미지"]');
        if (bgImg && bgImg.dataset.guPatched !== guKey) {
            bgImg.dataset.guPatched = guKey; delete bgImg.dataset.fb; bgImg.style.display = 'block';
            bgImg.onerror = function() { if (!this.dataset.fb) { this.dataset.fb = '1'; this.src = '이미지/main_bg.webp'; } else this.style.display = 'none'; };
            bgImg.src = `이미지/${data.title}.webp`;
        }

        const sloganPreEl = document.querySelector('.auto-gu-slogan-pre, [data-i18n-key="main-slogan-pre"]');
        if (sloganPreEl) sloganPreEl.textContent = data.slogan;
        const ribbonEl = document.querySelector('.ribbon-main');
        if (ribbonEl) ribbonEl.textContent = data.slogan;
        
        const headTextEl = document.querySelector('.auto-gu-head-text, [data-i18n-key="main-slogan-main"]');
        if (headTextEl) headTextEl.textContent = `${data.headTitle} ${data.headName}입니다.`;
        const headImgEl = document.querySelector('.auto-gu-head-img');
        if (headImgEl) { headImgEl.src = `이미지/${data.headName}.webp`; headImgEl.style.display = 'block'; }

        const mascotPreEl = document.querySelector('[data-i18n-key="mascot-title-pre"]');
        if (mascotPreEl) mascotPreEl.textContent = `효빈광역시 ${data.name}`;
        const mascotTitleEl = document.querySelector('[data-i18n-key="mascot-title"]');
        if (mascotTitleEl && mascotTitleEl.parentElement) {
            mascotTitleEl.parentElement.innerHTML = `<span>${data.name} 공식 마스코트</span><br><span class="text-4xl">${data.mascotName}</span>`;
        }
        const oldMascotImg = document.querySelector('img[alt="마스코트"]');
        if (oldMascotImg && oldMascotImg.parentElement) {
            const box = oldMascotImg.parentElement;
            box.id = 'mascot-visual-box';
            box.className = 'w-56 h-56 rounded-full shadow-2xl border-[4px] border-white/80 mt-2 bg-white relative overflow-hidden flex items-center justify-center';
            box.innerHTML = data.mascotSvg;
        }

        const petitionSpan = document.querySelector('div[onclick*="시장에게바란다.html"] span');
        if (petitionSpan) petitionSpan.innerHTML = `${shortRole}에게<br>바란다`;

        const topNewsRow = document.querySelector('.post-row:not(li)');
        if (topNewsRow && data.news[0]) {
            const yearSpan = topNewsRow.querySelector('.date-circle span:first-child');
            const mdSpan = topNewsRow.querySelector('.date-circle span:last-child');
            const deptSpan = topNewsRow.querySelector('[data-i18n-key="dept-traffic-welfare"], span.text-xs');
            const titleSpan = topNewsRow.querySelector('.post-title');
            const contentSpan = topNewsRow.querySelector('p.line-clamp-2');

            if (yearSpan) yearSpan.textContent = fmtY(dates[0]);
            if (mdSpan) mdSpan.textContent = fmtMD(dates[0]);
            if (deptSpan) { deptSpan.textContent = data.news[0].dept; deptSpan.style.backgroundColor = `${mainColor}33`; deptSpan.style.color = accentColor; }
            if (titleSpan) titleSpan.textContent = data.news[0].title;
            if (contentSpan) contentSpan.textContent = data.news[0].summary;
        }

        document.querySelectorAll('ul.space-y-4 li.post-row').forEach((row, idx) => {
            const item = data.news[idx + 1];
            if (item) {
                const deptSpan = row.querySelector('.text-link');
                const titleSpan = row.querySelector('.post-title');
                const dateSpan = row.querySelector('span.font-light');
                if (deptSpan) deptSpan.textContent = item.dept;
                if (titleSpan) titleSpan.textContent = item.title;
                if (dateSpan) dateSpan.textContent = fmtFull(dates[idx + 1]);
            }
        });
    }
}

// 페이지 로드 시 즉시 실행 + common121.js 내부 타이머가 덮어쓰지 못하도록 연속 방어 실행
runMasterGuPatch();
document.addEventListener('DOMContentLoaded', () => {
    runMasterGuPatch();
    setTimeout(runMasterGuPatch, 50);
    setTimeout(runMasterGuPatch, 150);
    setTimeout(runMasterGuPatch, 400);
});
// 유관기관 이동 버튼 및 셀렉트 박스 강제 바인딩 처리 (2907행 부근 대체 코드)
(function fixFamilySiteBinding() {
    const checkExist = setInterval(function() {
        // 페이지 전체에서 select와 '이동' 텍스트를 가진 버튼을 탐색
        const selectEl = document.querySelector('select');
        const buttons = document.querySelectorAll('button');
        let moveBtn = null;
        
        buttons.forEach(btn => {
            if (btn.textContent.trim() === '이동') {
                moveBtn = btn;
            }
        });

        // 요소들을 찾았을 때만 실행
        if (selectEl && moveBtn) {
            clearInterval(checkExist); // 반복 체크 중지
            
            // 중복 이벤트 방지를 위해 버튼 복제 후 교체
            const newBtn = moveBtn.cloneNode(true);
            moveBtn.parentNode.replaceChild(newBtn, moveBtn);

            newBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const targetUrl = selectEl.value;
                
                if (targetUrl && targetUrl !== '' && targetUrl !== '#') {
                    // 현재 주소의 파라미터(?gu=dong 등) 유지하면서 이동
                    let finalUrl = targetUrl;
                    const currentSearch = window.location.search;
                    
                    if (currentSearch) {
                        finalUrl += (targetUrl.includes('?') ? '&' : '') + currentSearch.substring(1);
                    }
                    
                    window.open(finalUrl, '_blank');
                } else {
                    alert("이동하실 유관기관을 선택해 주세요.");
                }
            }, true);
            
            console.log("유관기관 이동 버튼 바인딩 성공!");
        }
    }, 100); // 0.1초마다 요소가 로드되었는지 확인
})();

document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();
    
    // Agbiruk kadagiti URL parameters manipud iti address bar
    const params = new URLSearchParams(window.location.search);
    const guKey = params.get('gu');
    
    // No adda ti gu parameter, otomatikon a i-append daytoy kadamin amin a LNB links tapno saan a mapukaw
    if (guKey) {
        document.querySelectorAll('.lnb-depth2 a, .lnb-single').forEach(link => {
            const href = link.getAttribute('href');
            if (href && !href.includes('gu=')) {
                const separator = href.includes('?') ? '&' : '?';
                link.setAttribute('href', `${href}${separator}gu=${guKey}`);
            }
        });
    }
});