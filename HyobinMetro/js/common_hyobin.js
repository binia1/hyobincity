// ==========================================
// [효빈교통공사] 공통 헤더 및 푸터 시스템
// (HTML에서 완벽 분리, 기존 영어 파일명 링크 100% 복구, 이미지 경로 수정)
// ==========================================

const headerHTML = `
    <style>
        /* Mega Menu Styles - 마우스 올렸을 때 옆으로 흔들리는 현상(X축 이동 충돌) 100% 차단 */
        .mega-menu-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: white;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            border-top: 3px solid #16A4BE;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
            z-index: 200;
        }
        .group:hover .mega-menu-wrapper { 
            opacity: 1; 
            visibility: visible; 
        }
        .menu-col h3 { font-size: 1rem; font-weight: 800; color: #1e293b; margin-bottom: 0.75rem; border-bottom: 2px solid #16A4BE; padding-bottom: 0.25rem; display: inline-block; }
        .menu-col a { display: block; padding: 4px 0; font-size: 0.875rem; color: #475569; transition: color 0.2s; }
        .menu-col a:hover { color: #16A4BE; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }
    </style>

    <header class="bg-white border-b border-gray-200 sticky top-0 z-[100] w-full">
        <!-- 상단 유틸리티바 -->
        <div class="bg-slate-50 border-b border-slate-100">
            <div class="max-w-[1400px] mx-auto px-4 h-9 flex justify-end items-center space-x-5 text-xs text-slate-500 font-medium">
                <a href="index.html" class="hover:text-hb-main"><i class="fa-solid fa-house mr-1"></i>HOME</a>
                <a href="마이페이지.html" class="hover:text-hb-main">마이페이지</a>
                <a href="장바구니.html" class="hover:text-hb-main">장바구니</a>
                <a href="QA.html" class="hover:text-hb-main">고객센터</a>
                <a href="chatbot.html" class="text-hb-main font-bold"><i class="fa-solid fa-robot mr-1"></i>챗봇상담</a>
                <div class="flex items-center gap-1 cursor-pointer hover:text-hb-main">
                    <i class="fa-solid fa-globe text-[10px]"></i>
                    <span>Language</span>
                </div>
            </div>
        </div>

        <!-- 메인 네비게이션 -->
        <div class="relative w-full">
            <div class="max-w-[1400px] mx-auto px-4 h-20 flex justify-between items-center relative">
                <a href="index.html" class="flex items-center gap-3 group shrink-0">
                    <!-- 로고 이미지 정확히 매칭 (이미지/logo.png) -->
                    <img src="이미지/logo.png" onerror="this.src='logo.png'" alt="효빈교통공사 로고" class="h-12 w-auto transition-transform group-hover:scale-105">
                    <div class="flex flex-col">
                        <span class="text-2xl font-black text-slate-800 tracking-tighter leading-none">효빈교통공사</span>
                        <span class="text-[10px] font-bold text-hb-main tracking-widest mt-1 uppercase">Hyobin Metro</span>
                    </div>
                </a>

                <nav class="hidden xl:flex items-center h-full">
                    <!-- 1. 이용정보 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="info.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">이용정보</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>사이버스테이션/운행</h3>
                                        <a href="map.html">사이버스테이션(노선도)</a>
                                        <a href="realtime.html">실시간열차운행정보</a>
                                        <a href="열차서행정보.html">열차서행정보(선로공사)</a>
                                        <a href="delay_proof.html">간편지연증명서</a>
                                        <a href="exit_facilities_offline_v2.html">출구/시설물 안내</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>운임제도</h3>
                                        <a href="fare.html">운임안내</a>
                                        <a href="승차권안내.html">승차권안내</a>
                                        <a href="단체권운임안내.html">단체권운임안내</a>
                                        <a href="terms.html">여객운송약관(1~8호선)</a>
                                        <a href="여객운송약관_빈효선.html">여객운송약관(빈효선)</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>이용고객 편의시설</h3>
                                        <a href="welfare_companion.html">배려시설 현황</a>
                                        <a href="승강설비가동현황.html">승강설비 가동현황</a>
                                        <a href="accessible.html">휠체어 이용 승·하차 안내</a>
                                        <a href="무인편의기기.html">무인편의기기</a>
                                        <a href="문화공간.html">문화공간</a>
                                        <a href="환승주차장.html">환승주차장 / 자전거보관함</a>
                                        <a href="welfare_family.html">수유실</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>효빈 특화서비스 및 기타</h3>
                                        <a href="효빈광역환승센터.html">효빈광역환승센터</a>
                                        <a href="효빈러기지.html">효빈러기지(H-luggage)</a>
                                        <a href="효빈스토리지.html">효빈스토리지(개인창고)</a>
                                        <a href="효빈라커.html">효빈라커(H-Locker)</a>
                                        <h3 class="mt-4">유실물센터</h3>
                                        <a href="lost_found.html">유실물센터 안내</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. 안전환경 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="safety.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">안전환경</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>안전가이드</h3>
                                        <a href="안전수칙.html">안전수칙</a>
                                        <a href="열차내에서.html">열차내에서</a>
                                        <a href="승강설비이용시.html">승강설비 이용시</a>
                                        <a href="지진발생시.html">지진발생시 / 화재시</a>
                                        <a href="침수폭우예측시스템.html">침수·폭우 예측시스템</a>
                                        <a href="지하철테러대응.html">지하철테러대응</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>안전경영 및 장비</h3>
                                        <a href="안전보건경영방침.html">안전보건 경영방침</a>
                                        <a href="rules_laws.html">안전관련법령</a>
                                        <a href="안전보고서.html">안전보고서 / 안전동영상</a>
                                        <h3 class="mt-4">안전장비 취급 및 현황</h3>
                                        <a href="안전장비취급요령.html">안전장비 취급요령</a>
                                        <a href="역사내안전장비.html">역사/열차 내 안전장비</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>환경경영</h3>
                                        <a href="환경경영체계.html">환경경영체계</a>
                                        <a href="환경윤리준수선언문.html">환경윤리준수 선언문</a>
                                        <a href="환경지표.html">환경지표 / 온실가스</a>
                                        <a href="공기질관리.html">공기질관리 / 소음관리</a>
                                        <a href="환경자료실.html">환경자료실</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>자료실</h3>
                                        <a href="지하철환경.html">지하철 환경</a>
                                        <a href="위생관리.html">위생관리</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. 시민 참여 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="participation.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">시민 참여</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>신청센터</h3>
                                        <a href="시설물촬영.html">시설물 촬영</a>
                                        <a href="지하철예술마당신청.html">지하철 예술마당 신청</a>
                                        <a href="인재개발원대관.html">인재개발원 대관</a>
                                        <a href="안전매니저입사지원.html">안전매니저 입사지원</a>
                                        <a href="효빈교통공사견학.html">공사/차량사업소 견학</a>
                                        <a href="시민안전체험홍보관.html">시민안전체험·홍보관</a>
                                        <a href="시민초청문화이벤트.html">시민초청 문화이벤트</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>참여하기</h3>
                                        <a href="제안하기.html">제안하기</a>
                                        <a href="문화스테이션.html">문화스테이션 / 갤러리</a>
                                        <a href="지하철여행.html">지하철 여행</a>
                                        <a href="웹진.html">효빈교통공사 웹진</a>
                                        <a href="지하철예술마당.html">지하철 예술마당</a>
                                        <a href="시민안전모니터.html">시민안전모니터</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>안내 및 고객의 소리</h3>
                                        <a href="notice.html">공지사항 / 모니터링</a>
                                        <h3 class="mt-4">고객의 소리</h3>
                                        <a href="station_guide.html">이용 안내</a>
                                        <a href="QA.html">자주 묻는 질문</a>
                                        <a href="신청.html">고객의 소리 신청</a>
                                        <h3 class="mt-4">고객서비스 헌장</h3>
                                        <a href="고객서비스헌장.html">고객서비스 헌장 / 이행실적</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>주민참여예산</h3>
                                        <a href="주민참여예산제안하기.html">제안하기</a>
                                        <a href="사업추진실적.html">연도별 사업추진 실적</a>
                                        <h3 class="mt-4">시민 아이디어</h3>
                                        <a href="아이디어보기.html">아이디어 보기 / 제안하기</a>
                                        <a href="실시시민아이디어.html">실시 시민 아이디어</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 4. 알림마당 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="notice.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">알림마당</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>공지 및 홍보</h3>
                                        <a href="notice.html">공지사항</a>
                                        <a href="배너모아보기.html">배너 모아보기</a>
                                        <a href="보도자료.html">보도자료</a>
                                        <a href="혼잡도.html">혼잡도 / 열차혼잡도</a>
                                        <a href="역세권행사.html">이달의 역세권 행사</a>
                                        <a href="자료실.html">자료실</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>입찰/계약정보 1</h3>
                                        <a href="입찰안내.html">입찰안내</a>
                                        <a href="발주계획.html">발주계획 / 사전규격공개</a>
                                        <a href="입찰공고및결과.html">입찰공고 및 결과</a>
                                        <a href="계약현황.html">계약현황</a>
                                        <a href="대금지급안내.html">대금지급안내</a>
                                        <a href="영세율공급증명.html">영세율공급증명 발급</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>입찰/계약정보 2</h3>
                                        <a href="제안서평가결과.html">제안서 평가결과</a>
                                        <a href="건설공사하도급.html">건설공사/하도급계약현황</a>
                                        <a href="실적증명서.html">실적증명서 발급</a>
                                        <a href="수의계약.html">수의계약내역 및 실적</a>
                                        <a href="계약자료실.html">계약자료실 / 내용변경사항</a>
                                        <a href="감리감독현황.html">감리·감독·검사 현황</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>부대사업 및 협의</h3>
                                        <a href="광고시설물.html">광고/편의 시설물</a>
                                        <a href="역구내상가.html">역구내상가</a>
                                        <a href="부대사업FAQ.html">자주묻는질문</a>
                                        <h3 class="mt-4">오픈 이노베이션 / 협의</h3>
                                        <a href="오픈이노베이션.html">제도소개 / 모집공고</a>
                                        <a href="업무협의절차.html">인접굴착공사 / 연결통로설치</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 5. 정보공개 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="public.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">정보공개</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>제도 및 사전공표</h3>
                                        <a href="정보공개제도란.html">정보공개제도 / 관련서식</a>
                                        <a href="비공개대상.html">비공개대상정보 세부기준</a>
                                        <a href="사전정보공표.html">사전정보 공표목록</a>
                                        <a href="expenses.html">업무추진비 내역</a>
                                        <h3 class="mt-4">공공데이터/정보청구</h3>
                                        <a href="공공데이터개방.html">공공데이터개방</a>
                                        <a href="정보공개청구.html">정보공개청구</a>
                                        <a href="정보목록.html">정보목록(기록물생산현황)</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>반부패/청렴</h3>
                                        <a href="반부패사규.html">반부패/청렴활동 자료실</a>
                                        <a href="부패공직자현황.html">부패공직자 현황 공개</a>
                                        <a href="청렴도시책평가.html">청렴도 및 시책평가 결과</a>
                                        <a href="청탁금지법.html">청탁금지법 위반행위 신고</a>
                                        <h3 class="mt-4">개인정보처리방침</h3>
                                        <a href="privacy.html">개인정보처리방침</a>
                                        <a href="이동형영상정보처리방침.html">이동형/고정형 영상정보처리방침</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>부조리신고센터 1</h3>
                                        <a href="인사비리.html">인사비리 / 공직자비리 신고</a>
                                        <a href="갑의부당행위.html">갑의 부당행위 신고</a>
                                        <a href="예산낭비신고.html">예산낭비신고센터</a>
                                        <a href="상가무단전대.html">상가무단전대양도신고</a>
                                        <a href="계약관련부조리.html">계약관련 부조리 신고</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>부조리신고센터 2</h3>
                                        <a href="하도급부조리.html">하도급부조리 신고</a>
                                        <a href="대리신고.html">부패비리 변호사 대리신고</a>
                                        <a href="공익신고.html">공익신고</a>
                                        <a href="공공재정부정청구.html">공공재정 부정청구행위 신고</a>
                                        <h3 class="mt-4">결재문서/회의록</h3>
                                        <a href="결재문서.html">결재문서 / 회의록</a>
                                        <a href="위원회운영현황.html">위원회운영현황</a>
                                        <a href="민원소통모니터링.html">실시간 민원소통 모니터링</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 6. ESG경영 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="esg.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">ESG경영</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>ESG경영 안내</h3>
                                        <a href="ESG경영실천선언문.html">ESG 경영 실천 선언문</a>
                                        <a href="ESG대표성과.html">ESG 대표성과 / 경영성과</a>
                                        <a href="수상실적.html">수상실적</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>위원회 및 보고서</h3>
                                        <a href="ESG경영위원회.html">ESG 경영위원회</a>
                                        <a href="ESG경영보고서.html">ESG 경영보고서</a>
                                        <a href="지속가능경영보고서.html">지속가능경영보고서</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>이해관계자 소통</h3>
                                        <a href="이해관계자소통채널.html">이해관계자 소통채널</a>
                                        <a href="단체가입현황.html">단체가입현황</a>
                                        <h3 class="mt-4">사회공헌</h3>
                                        <a href="비전및실행과제.html">비전 및 실행과제</a>
                                        <a href="사회공헌활동.html">사회공헌 활동</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>ESG 채권</h3>
                                        <a href="ESG채권발행현황.html">ESG 채권 발행현황</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 7. 공사 소개 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="about.html" class="text-[17px] font-bold text-slate-800 group-hover:text-hb-main transition h-full flex items-center">공사 소개</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col">
                                        <h3>효빈교통공사</h3>
                                        <a href="about.html">CEO 인사말</a>
                                        <a href="organization.html">조직도 및 업무안내</a>
                                        <a href="location.html">찾아오시는 길</a>
                                        <a href="사이버역사관.html">사이버역사관 / 공사 Now</a>
                                        <a href="무임수송제도.html">무임수송 제도</a>
                                        <h3 class="mt-4">공사 이미지</h3>
                                        <a href="기관상징.html">기관상징 / 로고송 / 홍보자료</a>
                                        <a href="공사홍보대사.html">공사 홍보대사</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>경영정보</h3>
                                        <a href="개요및연혁.html">개요 및 연혁 / 운행현황</a>
                                        <a href="경영목표사업계획.html">경영목표 / 사업계획</a>
                                        <a href="예산서회계결산.html">예산서 / 회계결산</a>
                                        <a href="외부경영평가.html">외부경영평가 / 재무제표</a>
                                        <a href="내외부감사.html">내부/외부 감사활동</a>
                                        <a href="이사회의결.html">이사회 의결</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>인권경영/채용/행정</h3>
                                        <a href="채용정보.html">채용정보 / 인재상 / 인사제도</a>
                                        <a href="인권경영.html">인권경영 / 인권침해 신고</a>
                                        <a href="적극행정.html">적극행정</a>
                                        <h3 class="mt-4">관련법령 및 사규</h3>
                                        <a href="rules_laws.html">정관 및 사규 / 관련법령</a>
                                        <a href="rules_notice.html">사규제개정 및 폐기예고</a>
                                        <a href="법률고문현황.html">법률고문현황</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>산업현황</h3>
                                        <a href="산업재산권현황.html">산업재산권현황</a>
                                        <a href="신사업개발현황.html">신사업개발현황</a>
                                        <a href="철도사업현황.html">철도사업현황</a>
                                        <a href="기술연구자료실.html">기술연구자료실</a>
                                        <a href="교통정책자료실.html">교통정책자료실</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 8. 캐릭터/IP사업 (강조) -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="mascot.html" class="text-[17px] font-bold text-pink-600 group-hover:text-pink-500 transition h-full flex items-center">캐릭터/IP사업</a>
                        <div class="mega-menu-wrapper !border-t-pink-500">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
                                    <div class="menu-col bg-pink-50 p-4 rounded-lg">
                                        <h3 class="!border-pink-400 !text-pink-700">효빈 호선별 마스코트 1</h3>
                                        <a href="캐릭터_고나미.html" class="font-bold text-pink-600"><span class="line-badge line-1">1</span> 고나미</a>
                                        <a href="캐릭터_하루빈.html" class="font-bold text-pink-600"><span class="line-badge line-2">2</span> 하루빈</a>
                                        <a href="캐릭터_박라미.html" class="font-bold text-pink-600"><span class="line-badge line-3">3</span> 박라미</a>
                                        <a href="캐릭터_다로나.html" class="font-bold text-pink-600"><span class="line-badge line-4">4</span> 다로나</a>
                                    </div>
                                    <div class="menu-col bg-purple-50 p-4 rounded-lg">
                                        <h3 class="!border-purple-400 !text-purple-700">효빈 호선별 마스코트 2</h3>
                                        <a href="캐릭터_미소하.html" class="font-bold text-purple-600"><span class="line-badge line-5">5</span> 미소하</a>
                                        <a href="캐릭터_라세나.html" class="font-bold text-purple-600"><span class="line-badge line-6">6</span> 라세나</a>
                                        <a href="캐릭터_임세정.html" class="font-bold text-purple-600"><span class="line-badge line-7">7</span> 임세정</a>
                                        <a href="캐릭터_임세하.html" class="font-bold text-purple-600"><span class="line-badge line-7">7</span> 임세하</a>
                                        <a href="캐릭터_유리아.html" class="font-bold text-purple-600"><span class="line-badge line-8">8</span> 유리아</a>
                                        <a href="캐릭터_전노아.html" class="font-bold text-purple-600"><span class="line-badge line-bh">빈효선</span> 전노아</a>
                                    </div>
                                    <div class="menu-col bg-sky-50 p-4 rounded-lg">
                                        <h3 class="!border-sky-400 !text-sky-700">효빈 메트로 굿즈</h3>
                                        <a href="goods.html" class="font-bold text-sky-700"><i class="fa-solid fa-store mr-1"></i>공식 온라인 굿즈샵</a>
                                        <a href="효빈교통공사본점.html">오프라인 스토어 본점 안내</a>
                                        <a href="효빈역플래그십.html">효빈역 플래그십 스토어</a>
                                        <a href="팝업스토어안내.html">팝업스토어 / 콜라보 안내</a>
                                    </div>
                                    <div class="menu-col bg-orange-50 p-4 rounded-lg">
                                        <h3 class="!border-orange-400 !text-orange-700">서브컬처 연계사업</h3>
                                        <a href="anime_tour.html" class="font-bold text-orange-600"><i class="fa-solid fa-map-location-dot mr-1"></i>지하철 애니 성지순례</a>
                                        <a href="러브라이브콜라보.html">러브라이브! 콜라보 현황</a>
                                        <a href="뱅드림콜라보.html">BanG Dream! 콜라보 현황</a>
                                        <a href="콜라보스탬프투어.html">성지순례 스탬프 투어 신청</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="flex items-center gap-4">
                    <a href="map.html" class="hidden md:flex items-center bg-hb-main hover:bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all whitespace-nowrap">
                        사이버스테이션 <i class="fa-solid fa-map-location-dot ml-2 text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
`;

const footerHTML = `
    <!-- ================================================================== -->
    <!-- 완벽 반영된 푸터 (효빈교통공사 위키 기반 내용 + 콜센터 + 진짜 접근성 마크 반영) -->
    <!-- ================================================================== -->
    <footer class="bg-slate-900 text-slate-300 border-t-[5px] border-hb-main mt-auto w-full relative z-50">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            
            <!-- 푸터 정책 링크 -->
            <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold mb-8 pb-6 border-b border-slate-700">
                <a href="privacy.html" class="text-hb-main hover:text-cyan-300">개인정보처리방침</a>
                <a href="이동형영상정보처리방침.html" class="hover:text-white">영상정보처리방침</a>
                <a href="terms.html" class="hover:text-white">여객운송약관</a>
                <a href="rules_laws.html" class="hover:text-white">관련법령 및 사규</a>
                <a href="expenses.html" class="hover:text-white">업무추진비 내역</a>
                <a href="부조리신고센터.html" class="hover:text-white font-bold text-red-400">부조리신고센터</a>
                <a href="location.html" class="hover:text-white">찾아오시는 길</a>
            </div>

            <!-- 메인 푸터 정보 영역 -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <!-- [좌측] 기업 정보 및 SNS -->
                <div class="lg:col-span-4 flex flex-col justify-between h-full">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <!-- 로고 이미지 정확히 매칭 (이미지/logo.png) -->
                            <img src="이미지/logo.png" onerror="this.src='logo.png'" alt="효빈교통공사 로고" class="h-10 w-auto bg-white p-1 rounded">
                            <span class="text-2xl font-black text-white">효빈교통공사</span>
                        </div>
                        <div class="text-xs leading-relaxed text-slate-400 space-y-1">
                            <p class="font-bold text-slate-200">본사: 효빈광역시 북구 고송동 39-7</p>
                            <p>설립일: 2016년 7월 9일 (전신: 효빈도시공사 도시철도본부)</p>
                            <p>대표자: 최대현 | 사업자등록번호: 199-06-00322</p>
                            <p>미션: 안전과 문화 융합의 효빈메트로</p>
                            <p>비전: 안전과 문화, 시민 행복, 친절</p>
                            <p class="pt-2 text-slate-500 font-mono text-[10px]">
                                자본금: 22조 7,643억원 | 직원 수: 13,937명 (2022기준) <br>
                                영업거리: 321.16 km (효빈도시철도 1~8호선 등)
                            </p>
                        </div>
                    </div>
                    <div class="mt-6">
                        <p class="text-[10px] font-bold text-slate-500 mb-2 uppercase">Official Social Media</p>
                        <div class="flex gap-3">
                            <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition"><i class="fa-solid fa-blog"></i></a>
                            <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition"><i class="fa-brands fa-youtube"></i></a>
                            <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition"><i class="fa-solid fa-comment"></i></a>
                            <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"><i class="fa-brands fa-facebook-f"></i></a>
                        </div>
                        <p class="text-slate-600 mt-4 text-[10px] font-bold">COPYRIGHT © HYOBIN METRO. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>

                <!-- [중앙] 고객 콜 센터 & 유실물 센터 -->
                <div class="lg:col-span-5 bg-slate-800/60 rounded-xl border border-slate-700 p-5">
                    <h4 class="text-sm font-black text-hb-main mb-3 flex items-center"><i class="fa-solid fa-headset mr-2"></i>콜 센터 및 유실물 센터</h4>
                    
                    <div class="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-slate-700 text-sm">
                        <div>
                            <span class="block text-xs text-slate-400 mb-1">고객 콜 센터</span>
                            <span class="font-bold text-white text-lg">079-531-4723</span>
                        </div>
                        <div>
                            <span class="block text-xs text-slate-400 mb-1">종합 관제실</span>
                            <span class="font-bold text-white text-lg">079-531-4724</span>
                        </div>
                        <div class="col-span-2">
                            <span class="block text-xs text-slate-400 mb-1">SMS/사진 제보</span>
                            <span class="font-bold text-sky-400">010-5912-5483</span>
                        </div>
                    </div>

                    <h5 class="text-xs font-bold text-slate-300 mb-2"><i class="fa-solid fa-umbrella mr-1"></i>호선별 유실물 센터</h5>
                    <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                        <div class="flex justify-between items-center bg-slate-800 p-2 rounded">
                            <span class="text-slate-400">1,2,7호선 (중앙로역)</span>
                            <span class="font-bold text-white">079-204-8554</span>
                        </div>
                        <div class="flex justify-between items-center bg-slate-800 p-2 rounded">
                            <span class="text-slate-400">3,4호선 (사가당역)</span>
                            <span class="font-bold text-white">079-273-2322</span>
                        </div>
                        <div class="flex justify-between items-center bg-slate-800 p-2 rounded">
                            <span class="text-slate-400">1,8호선 (곽산역)</span>
                            <span class="font-bold text-white">079-423-3211</span>
                        </div>
                        <div class="flex justify-between items-center bg-slate-800 p-2 rounded">
                            <span class="text-slate-400">2,6호선 (중수역)</span>
                            <span class="font-bold text-white">079-331-4722</span>
                        </div>
                        <div class="flex justify-between items-center bg-slate-800 p-2 rounded col-span-2 sm:col-span-1">
                            <span class="text-slate-400">4,5호선 (도변역)</span>
                            <span class="font-bold text-white">079-129-3711</span>
                        </div>
                    </div>
                </div>

                <!-- [우측] 유관기관 및 인증 -->
                <div class="lg:col-span-3 flex flex-col items-end w-full h-full justify-between">
                    <div class="w-full">
                        <p class="text-xs font-bold text-slate-400 mb-2">패밀리 사이트 및 유관기관</p>
                        <div class="flex gap-2">
                            <select id="familySite" class="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-hb-main">
                                <option value="">유관기관 바로가기</option>
                                <option value="https://hyobin-wiki.com">효빈위키 설정본부</option>
                                <option value="goods.html">효빈 메트로 굿즈 스토어</option>
                                <option value="https://www.hyobin.go.kr">효빈광역시청</option>
                                <option value="https://www.seoulmetro.co.kr">서울교통공사(현실)</option>
                            </select>
                            <button onclick="const url = document.getElementById('familySite').value; if(url) window.open(url);" class="px-4 py-2 rounded-lg bg-hb-main hover:bg-cyan-600 text-white text-sm font-bold transition">
                                GO
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col items-end gap-3 w-full">
                        <!-- 실제 공공기관용 인증마크 디자인 (placeholder 외부 링크 적용하여 항상 보이게 함) -->
                        <div class="flex gap-2">
                            <img src="이미지/wa_mark.png" onerror="this.src='https://placehold.co/100x40/1e293b/ffffff?text=WA+인증마크'" alt="과학기술정보통신부 WEB접근성 인증마크" class="h-10 rounded border border-slate-700 shadow-sm" title="국가공인 웹접근성 우수사이트 인증">
                            <img src="이미지/isms_mark.png" onerror="this.src='https://placehold.co/100x40/1e293b/ffffff?text=ISMS+인증'" alt="한국인터넷진흥원 ISMS 인증마크" class="h-10 rounded border border-slate-700 shadow-sm" title="정보보호 관리체계 인증">
                        </div>
                        <a href="#top" class="mt-2 text-xs font-bold text-slate-400 hover:text-white bg-slate-800 px-3 py-1.5 rounded inline-flex items-center"><i class="fa-solid fa-arrow-up mr-2"></i>맨 위로</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // body 맨 앞에 헤더 삽입
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    // body 맨 끝에 푸터 삽입
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});