// ==========================================
// [효빈교통공사] 공통 헤더, 푸터, 사이드바 시스템
// (HTML에서 완벽 분리, 사이드바 중복 방지 및 아코디언/동적 하이라이트 적용)
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

    <header id="common-header" class="bg-white border-b border-gray-200 sticky top-0 z-[100] w-full transition-transform duration-300">
        <!-- 상단 유틸리티바 -->
        <div class="bg-slate-50 border-b border-slate-100">
            <div class="max-w-[1400px] mx-auto px-4 h-9 flex justify-end items-center space-x-5 text-xs text-slate-500 font-medium">
                <a href="index.html" class="hover:text-[#16A4BE]"><i class="fa-solid fa-house mr-1"></i>HOME</a>
                <a href="마이페이지.html" class="hover:text-[#16A4BE]">마이페이지</a>
                <a href="장바구니.html" class="hover:text-[#16A4BE]">장바구니</a>
                <a href="QA.html" class="hover:text-[#16A4BE]">고객센터</a>
                <a href="chatbot.html" class="text-[#16A4BE] font-bold"><i class="fa-solid fa-robot mr-1"></i>챗봇상담</a>
                <div class="flex items-center gap-1 cursor-pointer hover:text-[#16A4BE]">
                    <i class="fa-solid fa-globe text-[10px]"></i>
                    <span>Language</span>
                </div>
            </div>
        </div>

        <!-- 메인 네비게이션 -->
        <div class="relative w-full">
            <div class="max-w-[1400px] mx-auto px-4 h-20 flex justify-between items-center relative">
                <a href="index.html" class="flex items-center gap-3 group shrink-0">
                    <!-- 로고 이미지 정확히 매칭 -->
                    <img src="이미지/logo.png" onerror="this.src='https://placehold.co/100x48/16A4BE/ffffff?text=LOGO'" alt="효빈교통공사 로고" class="h-12 w-auto transition-transform group-hover:scale-105">
                    <div class="flex flex-col">
                        <span class="text-2xl font-black text-slate-800 tracking-tighter leading-none">효빈교통공사</span>
                        <span class="text-[10px] font-bold text-[#16A4BE] tracking-widest mt-1 uppercase">Hyobin Metro</span>
                    </div>
                </a>

                <nav class="hidden xl:flex items-center h-full">
                    <!-- 1. 이용정보 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="info.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">이용정보</a>
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
                        <a href="safety.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">안전환경</a>
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
                        <a href="participation.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">시민 참여</a>
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
                        <a href="notice.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">알림마당</a>
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
    <a href="bidding.html#guide">입찰안내</a>
    <a href="bidding.html#plan">발주계획 / 사전규격공개</a>
    <a href="bidding.html#notice">입찰공고 및 결과</a>
    <a href="bidding.html#contract">계약현황</a>
    <a href="bidding.html#payment">대금지급안내</a>
    <a href="bidding.html#tax">영세율공급증명 발급</a>
</div>
<div class="menu-col">
    <h3>입찰/계약정보 2</h3>
    <a href="bidding2.html#eval">제안서 평가결과</a>
    <a href="bidding2.html#subcontract">건설공사/하도급계약현황</a>
    <a href="bidding2.html#certificate">실적증명서 발급</a>
    <a href="bidding2.html#private">수의계약내역 및 실적</a>
    <a href="bidding2.html#reference">계약자료실 / 내용변경사항</a>
    <a href="bidding2.html#inspection">감리·감독·검사 현황</a>
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
                        <a href="public.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">정보공개</a>
                        <div class="mega-menu-wrapper">
                            <div class="max-w-[1400px] mx-auto p-8 pt-6 pb-10">
                                <div class="grid grid-cols-4 gap-6">
<div class="menu-col">
    <h3>제도 및 사전공표</h3>
    <a href="public_info.html#guide">정보공개제도 / 관련서식</a>
    <a href="public_info.html#private">비공개대상정보 세부기준</a>
    <a href="public_info.html#preInfo">사전정보 공표목록</a>
    <a href="public_info.html#expenses">업무추진비 내역</a>
    <h3 class="mt-4">공공데이터/정보청구</h3>
    <a href="public_info.html#publicData">공공데이터개방</a>
    <a href="public_info.html#request">정보공개청구</a>
    <a href="public_info.html#records">정보목록(기록물생산현황)</a>
</div>
<div class="menu-col">
    <h3>반부패/청렴</h3>
    <a href="clean_privacy.html#anti-corruption">반부패/청렴활동 자료실</a>
    <a href="clean_privacy.html#corrupt-officials">부패공직자 현황 공개</a>
    <a href="clean_privacy.html#evaluation">청렴도 및 시책평가 결과</a>
    <a href="clean_privacy.html#report">청탁금지법 위반행위 신고</a>
    <h3 class="mt-4">개인정보처리방침</h3>
    <a href="clean_privacy.html#privacy">개인정보처리방침</a>
    <a href="clean_privacy.html#cctv">이동형/고정형 영상정보처리방침</a>
</div>                                    
<div class="menu-col">
                                        <h3>부조리신고센터 1</h3>
                                        <!-- 버전 1 적용 구역: 직접 해시(#) 경로 삽입 -->
                                        <a href="report_center.html#personnel">인사비리 / 공직자비리 신고</a>
                                        <a href="report_center.html#gapjil">갑의 부당행위 신고</a>
                                        <a href="report_center.html#budget">예산낭비신고센터</a>
                                        <a href="report_center.html#commercial">상가무단전대양도신고</a>
                                        <a href="report_center.html#contract">계약관련 부조리 신고</a>
                                    </div>
<div class="menu-col">
                                        <h3>부조리신고센터</h3>
                                        <a href="report_center2.html#subcontract">하도급부조리 신고</a>
                                        <a href="report_center2.html#proxy">안심 대리신고</a>
                                        <a href="report_center2.html#public">공익신고</a>
                                        <a href="report_center2.html#finance">공공재정 부정청구</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>투명경영</h3>
                                        <a href="report_center2.html#documents">결재문서 / 회의록</a>
                                        <a href="report_center2.html#committee">위원회 운영현황</a>
                                        <a href="report_center2.html#voc">실시간 민원(VOC)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 6. ESG경영 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="esg.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">ESG경영</a>
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
                                        <a href="esg_social.html#communication">이해관계자 소통채널</a>
                                        <a href="esg_social.html#affiliation">단체가입현황</a>
                                        <h3 class="mt-4">사회공헌</h3>
                                        <a href="esg_social.html#csr-vision">비전 및 실행과제</a>
                                        <a href="esg_social.html#csr-activity">사회공헌 활동</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>ESG 채권</h3>
                                        <a href="esg_social.html#esg-bond">ESG 채권 발행현황</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 7. 공사 소개 -->
                    <div class="group h-full flex items-center static px-4">
                        <a href="about.html" class="text-[17px] font-bold text-slate-800 group-hover:text-[#16A4BE] transition h-full flex items-center">공사 소개</a>
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
                                        <a href="경영정보.html#overview">개요 및 연혁 / 운행현황</a>
                                        <a href="경영정보.html#goals">경영목표 / 사업계획</a>
                                        <a href="경영정보.html#budget">예산서 / 회계결산</a>
                                        <a href="경영정보.html#evaluation">외부경영평가 / 재무제표</a>
                                        <a href="경영정보.html#audit">내부/외부 감사활동</a>
                                        <a href="경영정보.html#board">이사회 의결</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>인권경영/채용/행정</h3>
                                        <a href="행정정보.html#recruit">채용정보 / 인재상 / 인사제도</a>
                                        <a href="행정정보.html#humanrights">인권경영 / 인권침해 신고</a>
                                        <a href="행정정보.html#active-admin">적극행정</a>
                                        <h3 class="mt-4">관련법령 및 사규</h3>
                                        <a href="행정정보.html#rules-laws">정관 및 사규 / 관련법령</a>
                                        <a href="행정정보.html#rules-notice">사규제개정 및 폐기예고</a>
                                        <a href="행정정보.html#legal-advisor">법률고문현황</a>
                                    </div>
                                    <div class="menu-col">
                                        <h3>산업현황</h3>
                                        <a href="산업현황.html#patent">산업재산권현황</a>
                                        <a href="산업현황.html#newbiz">신사업개발현황</a>
                                        <a href="산업현황.html#railbiz">철도사업현황</a>
                                        <a href="산업현황.html#tech-research">기술연구자료실</a>
                                        <a href="산업현황.html#policy">교통정책자료실</a>
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
                                        <a href="캐릭터_고나미.html" class="font-bold text-pink-600"><span style="color:#0077DD;">[1호선]</span> 고나미</a>
                                        <a href="캐릭터_하루빈.html" class="font-bold text-pink-600"><span style="color:#00CCAA;">[2호선]</span> 하루빈</a>
                                        <a href="캐릭터_박라미.html" class="font-bold text-pink-600"><span style="color:#FFCC11;">[3호선]</span> 박라미</a>
                                        <a href="캐릭터_다로나.html" class="font-bold text-pink-600"><span style="color:#FF5522;">[4호선]</span> 다로나</a>
                                    </div>
                                    <div class="menu-col bg-purple-50 p-4 rounded-lg">
                                        <h3 class="!border-purple-400 !text-purple-700">효빈 호선별 마스코트 2</h3>
                                        <a href="캐릭터_미소하.html" class="font-bold text-purple-600"><span style="color:#EE0022;">[5호선]</span> 미소하</a>
                                        <a href="캐릭터_라세나.html" class="font-bold text-purple-600"><span style="color:#881188;">[6호선]</span> 라세나</a>
                                        <a href="캐릭터_임세정.html" class="font-bold text-purple-600"><span style="color:#FF8899;">[7호선]</span> 임세정</a>
                                        <a href="캐릭터_임세하.html" class="font-bold text-purple-600"><span style="color:#FF8899;">[7호선]</span> 임세하</a>
                                        <a href="캐릭터_유리아.html" class="font-bold text-purple-600"><span style="color:#9856FF;">[8호선]</span> 유리아</a>
                                        <a href="캐릭터_전노아.html" class="font-bold text-purple-600"><span style="color:#6677CC;">[빈효선]</span> 전노아</a>
                                        <a href="캐릭터_심세이.html" class="font-bold text-purple-600"><span style="color:#33aaff;">[창전선]</span> 심세이</a>
                                    </div>
                                    <div class="menu-col bg-sky-50 p-4 rounded-lg">
                                        <h3 class="!border-sky-400 !text-sky-700">효빈 메트로 굿즈</h3>
                                        <a href="goods.html" class="font-bold text-sky-700"><i class="fa-solid fa-store mr-1"></i>공식 온라인 굿즈샵</a>
                                        <a href="매장상세.html?id=hq">오프라인 스토어 본점 안내</a>
                                        <a href="매장상세.html?id=hyobin">효빈역 플래그십 스토어</a>
                                        <a href="콜라보카페/index.html">팝업스토어 / 콜라보 안내</a>
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
                    <a href="map.html" class="hidden md:flex items-center bg-[#16A4BE] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-all whitespace-nowrap">
                        사이버스테이션 <i class="fa-solid fa-map-location-dot ml-2 text-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </header>
`;

const footerHTML = `
    <!-- ================================================================== -->
    <!-- 완벽 반영된 푸터 -->
    <!-- ================================================================== -->
    <footer class="bg-slate-900 text-slate-300 border-t-[5px] border-[#16A4BE] mt-auto w-full relative z-50">
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            
            <!-- 푸터 정책 링크 -->
            <div class="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold mb-8 pb-6 border-b border-slate-700">
                <a href="privacy.html" class="text-[#16A4BE] hover:text-cyan-300">개인정보처리방침</a>
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
                            <img src="이미지/logo.png" onerror="this.src='https://placehold.co/100x48/16A4BE/ffffff?text=LOGO'" alt="효빈교통공사 로고" class="h-10 w-auto bg-white p-1 rounded">
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
                    <h4 class="text-sm font-black text-[#16A4BE] mb-3 flex items-center"><i class="fa-solid fa-headset mr-2"></i>콜 센터 및 유실물 센터</h4>
                    
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
                            <select id="familySite" class="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-[#16A4BE]">
                                <option value="">유관기관 바로가기</option>
                                <option value="../효빈광역시_홈페이지/index.html">효빈광역시</option>
                                <option value="https://www.letskorail.com">코레일</option>
                                <option value="https://www.seoulmetro.co.kr">서울교통공사</option>
                                <option value="https://www.metro9.co.kr">서울시메트로9호선</option>
                                <option value="https://www.ictr.or.kr">인천교통공사</option>
                                <option value="https://www.arex.or.kr">공항철도(주)</option>
                                <option value="https://www.shinbundang.co.kr">신분당선주식회사</option>
                                <option value="http://www.ggrail.co.kr">경기철도주식회사</option>
                                <option value="https://www.seohaerail.co.kr">서해철도(주)</option>
                                <option value="https://www.humetro.busan.kr">부산교통공사</option>
                                <option value="https://www.grtc.co.kr">광주도시철도공사</option>
                                <option value="https://www.dtro.or.kr">대구교통공사</option>
                                <option value="https://www.djtc.kr">대전교통공사</option>
                                <option value="덕주도시철도공사.html">덕주도시철도공사</option>
                                <option value="빈주도시철도공사.html">빈주도시철도공사</option>
                                <option value="https://www.kr.or.kr">한국철도시설공단</option>
                                <option value="https://www.railsafety.or.kr">철도안전정보포탈</option>
                                <option value="https://www.kric.go.kr">철도산업정보센터</option>
                            </select>
                            <button onclick="const url = document.getElementById('familySite').value; if(url) window.open(url);" class="px-4 py-2 rounded-lg bg-[#16A4BE] hover:bg-cyan-600 text-white text-sm font-bold transition">
                                GO
                            </button>
                        </div>
                    </div>

                    <div class="mt-6 flex flex-col items-end gap-3 w-full">
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

// =========================================================================================
// [사이드바 메뉴 데이터셋 정의 - 아코디언(계층형) 구조]
// 헤더의 메가 메뉴 구조와 100% 동일하게 매칭되었습니다.
// =========================================================================================
const sidebarMenuData = {
    "이용정보": [
        { group: "사이버스테이션/운행", items: [ {name: "사이버스테이션(노선도)", href: "map.html"}, {name: "실시간열차운행정보", href: "realtime.html"}, {name: "열차서행정보(선로공사)", href: "열차서행정보.html"}, {name: "간편지연증명서", href: "delay_proof.html"}, {name: "출구/시설물 안내", href: "exit_facilities_offline_v2.html"} ] },
        { group: "운임제도", items: [ {name: "운임안내", href: "fare.html"}, {name: "승차권안내", href: "승차권안내.html"}, {name: "단체권운임안내", href: "단체권운임안내.html"}, {name: "여객운송약관(1~8호선)", href: "terms.html"}, {name: "여객운송약관(빈효선)", href: "여객운송약관_빈효선.html"} ] },
        { group: "이용고객 편의시설", items: [ {name: "배려시설 현황", href: "welfare_companion.html"}, {name: "승강설비 가동현황", href: "승강설비가동현황.html"}, {name: "휠체어 이용 승·하차 안내", href: "accessible.html"}, {name: "무인편의기기", href: "무인편의기기.html"}, {name: "문화공간", href: "문화공간.html"}, {name: "환승주차장 / 자전거보관함", href: "환승주차장.html"}, {name: "수유실", href: "welfare_family.html"} ] },
        { group: "효빈 특화서비스 및 기타", items: [ {name: "효빈광역환승센터", href: "효빈광역환승센터.html"}, {name: "효빈러기지(H-luggage)", href: "효빈러기지.html"}, {name: "효빈스토리지(개인창고)", href: "효빈스토리지.html"}, {name: "효빈라커(H-Locker)", href: "효빈라커.html"}, {name: "유실물센터 안내", href: "lost_found.html"} ] }
    ],
    "안전환경": [
        { group: "안전가이드", items: [ {name: "안전수칙", href: "안전수칙.html"}, {name: "열차내에서", href: "열차내에서.html"}, {name: "승강설비 이용시", href: "승강설비이용시.html"}, {name: "지진발생시 / 화재시", href: "지진발생시.html"}, {name: "침수·폭우 예측시스템", href: "침수폭우예측시스템.html"}, {name: "지하철테러대응", href: "지하철테러대응.html"} ] },
        { group: "안전경영 및 장비", items: [ {name: "안전보건 경영방침", href: "안전보건경영방침.html"}, {name: "안전관련법령", href: "rules_laws.html"}, {name: "안전보고서 / 안전동영상", href: "안전보고서.html"}, {name: "안전장비 취급요령", href: "안전장비취급요령.html"}, {name: "역사/열차 내 안전장비", href: "역사내안전장비.html"} ] },
        { group: "환경경영", items: [ {name: "환경경영체계", href: "환경경영체계.html"}, {name: "환경윤리준수 선언문", href: "환경윤리준수선언문.html"}, {name: "환경지표 / 온실가스", href: "환경지표.html"}, {name: "공기질관리 / 소음관리", href: "공기질관리.html"}, {name: "환경자료실", href: "환경자료실.html"} ] },
        { group: "자료실", items: [ {name: "지하철 환경", href: "지하철환경.html"}, {name: "위생관리", href: "위생관리.html"} ] }
    ],
    "시민 참여": [
        { group: "신청센터", items: [ {name: "시설물 촬영", href: "시설물촬영.html"}, {name: "지하철 예술마당 신청", href: "지하철예술마당신청.html"}, {name: "인재개발원 대관", href: "인재개발원대관.html"}, {name: "안전매니저 입사지원", href: "안전매니저입사지원.html"}, {name: "공사/차량사업소 견학", href: "효빈교통공사견학.html"}, {name: "시민안전체험·홍보관", href: "시민안전체험홍보관.html"}, {name: "시민초청 문화이벤트", href: "시민초청문화이벤트.html"} ] },
        { group: "참여하기", items: [ {name: "제안하기", href: "제안하기.html"}, {name: "문화스테이션 / 갤러리", href: "문화스테이션.html"}, {name: "지하철 여행", href: "지하철여행.html"}, {name: "효빈교통공사 웹진", href: "웹진.html"}, {name: "지하철 예술마당", href: "지하철예술마당.html"}, {name: "시민안전모니터", href: "시민안전모니터.html"} ] },
        { group: "안내 및 고객의 소리", items: [ {name: "공지사항 / 모니터링", href: "notice.html"}, {name: "이용 안내", href: "station_guide.html"}, {name: "자주 묻는 질문", href: "QA.html"}, {name: "고객의 소리 신청", href: "신청.html"}, {name: "고객서비스 헌장 / 이행실적", href: "고객서비스헌장.html"} ] },
        { group: "주민참여예산", items: [ {name: "제안하기", href: "주민참여예산제안하기.html"}, {name: "연도별 사업추진 실적", href: "사업추진실적.html"}, {name: "아이디어 보기 / 제안하기", href: "아이디어보기.html"}, {name: "실시 시민 아이디어", href: "실시시민아이디어.html"} ] }
    ],
    "알림마당": [
        { group: "공지 및 홍보", items: [ {name: "공지사항", href: "notice.html"}, {name: "배너 모아보기", href: "배너모아보기.html"}, {name: "보도자료", href: "보도자료.html"}, {name: "혼잡도 / 열차혼잡도", href: "혼잡도.html"}, {name: "이달의 역세권 행사", href: "역세권행사.html"}, {name: "자료실", href: "자료실.html"} ] },
{ 
    group: "입찰/계약정보 1", 
    items: [ 
        {name: "입찰안내", href: "bidding.html#guide"}, 
        {name: "발주계획 / 사전규격공개", href: "bidding.html#plan"}, 
        {name: "입찰공고 및 결과", href: "bidding.html#notice"}, 
        {name: "계약현황", href: "bidding.html#contract"}, 
        {name: "대금지급안내", href: "bidding.html#payment"}, 
        {name: "영세율공급증명 발급", href: "bidding.html#tax"} 
    ] 
},        { 
    group: "입찰/계약정보 2", 
    items: [ 
        { name: "제안서 평가결과", href: "bidding2.html#eval" }, 
        { name: "건설공사/하도급계약현황", href: "bidding2.html#subcontract" }, 
        { name: "실적증명서 발급", href: "bidding2.html#certificate" }, 
        { name: "수의계약내역 및 실적", href: "bidding2.html#private" }, 
        { name: "계약자료실 / 내용변경사항", href: "bidding2.html#reference" }, 
        { name: "감리·감독·검사 현황", href: "bidding2.html#inspection" } 
    ] 
},
        { group: "부대사업 및 협의", items: [ {name: "광고/편의 시설물", href: "광고시설물.html"}, {name: "역구내상가", href: "역구내상가.html"}, {name: "자주묻는질문", href: "부대사업FAQ.html"}, {name: "제도소개 / 모집공고", href: "오픈이노베이션.html"}, {name: "인접굴착공사 / 연결통로설치", href: "업무협의절차.html"} ] }
    ],
    "정보공개": [
{ 
    group: "제도 및 사전공표", 
    items: [ 
        { name: "정보공개제도 / 관련서식", href: "public_info.html#guide" }, 
        { name: "비공개대상정보 세부기준", href: "public_info.html#private" }, 
        { name: "사전정보 공표목록", href: "public_info.html#preInfo" }, 
        { name: "업무추진비 내역", href: "public_info.html#expenses" }
    ] 
},
{ 
    group: "공공데이터/정보청구", 
    items: [ 
        { name: "공공데이터개방", href: "public_info.html#publicData" }, 
        { name: "정보공개청구", href: "public_info.html#request" }, 
        { name: "정보목록(기록물생산현황)", href: "public_info.html#records" }
    ] 
},       
{ group: "반부패/청렴", items: [ 
            {name: "반부패/청렴활동 자료실", href: "clean_privacy.html#anti-corruption"}, 
            {name: "부패공직자 현황 공개", href: "clean_privacy.html#corrupt-officials"}, 
            {name: "청렴도 및 시책평가 결과", href: "clean_privacy.html#evaluation"}, 
            {name: "청탁금지법 위반행위 신고", href: "clean_privacy.html#report"}, 
            {name: "개인정보처리방침", href: "clean_privacy.html#privacy"}, 
            {name: "이동형/고정형 영상정보처리방침", href: "clean_privacy.html#cctv"} 
        ] },
        { group: "부조리신고센터 1", items: [ {name: "인사비리 / 공직자비리 신고", href: "report_center.html#personnel"}, {name: "갑의 부당행위 신고", href: "report_center.html#gapjil"}, {name: "예산낭비신고센터", href: "report_center.html#budget"}, {name: "상가무단전대양도신고", href: "report_center.html#commercial"}, {name: "계약관련 부조리 신고", href: "report_center.html#contract"} ] },
{ group: "부조리신고센터 2", items: [ 
            {name: "하도급부조리 신고", href: "report_center2.html#subcontract"}, 
            {name: "안심 대리신고", href: "report_center2.html#proxy"}, 
            {name: "공익신고", href: "report_center2.html#public"}, 
            {name: "공공재정 부정청구", href: "report_center2.html#finance"} 
        ] },    ],
    "ESG경영": [
        { group: "ESG경영 안내", items: [ {name: "ESG 경영 실천 선언문", href: "ESG경영실천선언문.html"}, {name: "ESG 대표성과 / 경영성과", href: "ESG대표성과.html"}, {name: "수상실적", href: "수상실적.html"} ] },
        { group: "위원회 및 보고서", items: [ {name: "ESG 경영위원회", href: "ESG경영위원회.html"}, {name: "ESG 경영보고서", href: "ESG경영보고서.html"}, {name: "지속가능경영보고서", href: "지속가능경영보고서.html"} ] },
// ▼ 이 부분을 아래와 같이 수정 ▼
        { group: "이해관계자 소통", items: [ 
            {name: "이해관계자 소통채널", href: "esg_social.html#communication"}, 
            {name: "단체가입현황", href: "esg_social.html#affiliation"}, 
            {name: "비전 및 실행과제", href: "esg_social.html#csr-vision"}, 
            {name: "사회공헌 활동", href: "esg_social.html#csr-activity"} 
        ] },
        { group: "ESG 채권", items: [ 
            {name: "ESG 채권 발행현황", href: "esg_social.html#esg-bond"} 
        ] }    ],
    "공사 소개": [
        { group: "효빈교통공사", items: [ {name: "CEO 인사말", href: "about.html"}, {name: "조직도 및 업무안내", href: "organization.html"}, {name: "찾아오시는 길", href: "location.html"}, {name: "사이버역사관 / 공사 Now", href: "사이버역사관.html"}, {name: "무임수송 제도", href: "무임수송제도.html"}, {name: "기관상징 / 로고송 / 홍보자료", href: "기관상징.html"}, {name: "공사 홍보대사", href: "공사홍보대사.html"} ] },
        { group: "경영정보", items: [ {name: "개요 및 연혁 / 운행현황", href: "경영정보.html#overview"}, {name: "경영목표 / 사업계획", href: "경영정보.html#goals"}, {name: "예산서 / 회계결산", href: "경영정보.html#budget"}, {name: "외부경영평가 / 재무제표", href: "경영정보.html#evaluation"}, {name: "내부/외부 감사활동", href: "경영정보.html#audit"}, {name: "이사회 의결", href: "경영정보.html#board"} ] },
        { group: "인권경영/채용/행정", items: [ {name: "채용정보 / 인재상 / 인사제도", href: "행정정보.html#recruit"}, {name: "인권경영 / 인권침해 신고", href: "행정정보.html#humanrights"}, {name: "적극행정", href: "행정정보.html#active-admin"}, {name: "정관 및 사규 / 관련법령", href: "행정정보.html#rules-laws"}, {name: "사규제개정 및 폐기예고", href: "행정정보.html#rules-notice"}, {name: "법률고문현황", href: "행정정보.html#legal-advisor"} ] },
        { group: "산업현황", items: [ {name: "산업재산권현황", href: "산업현황.html#patent"}, {name: "신사업개발현황", href: "산업현황.html#newbiz"}, {name: "철도사업현황", href: "산업현황.html#railbiz"}, {name: "기술연구자료실", href: "산업현황.html#tech-research"}, {name: "교통정책자료실", href: "산업현황.html#policy"} ] }
    ],
    "캐릭터/IP사업": [
        { group: "효빈 호선별 마스코트 1", items: [ {name: "[1호선] 고나미", href: "캐릭터_고나미.html"}, {name: "[2호선] 하루빈", href: "캐릭터_하루빈.html"}, {name: "[3호선] 박라미", href: "캐릭터_박라미.html"}, {name: "[4호선] 다로나", href: "캐릭터_다로나.html"} ] },
        { group: "효빈 호선별 마스코트 2", items: [ {name: "[5호선] 미소하", href: "캐릭터_미소하.html"}, {name: "[6호선] 라세나", href: "캐릭터_라세나.html"}, {name: "[7호선] 임세정", href: "캐릭터_임세정.html"}, {name: "[7호선] 임세하", href: "캐릭터_임세하.html"}, {name: "[8호선] 유리아", href: "캐릭터_유리아.html"}, {name: "[빈효선] 전노아", href: "캐릭터_전노아.html"} ] },
        { group: "효빈 메트로 굿즈", items: [ {name: "공식 온라인 굿즈샵", href: "goods.html"}, {name: "오프라인 스토어 본점 안내", href: "효빈교통공사본점.html"}, {name: "효빈역 플래그십 스토어", href: "효빈역플래그십.html"}, {name: "팝업스토어 / 콜라보 안내", href: "팝업스토어안내.html"} ] },
        { group: "서브컬처 연계사업", items: [ {name: "지하철 애니 성지순례", href: "anime_tour.html"}, {name: "러브라이브! 콜라보 현황", href: "러브라이브콜라보.html"}, {name: "BanG Dream! 콜라보 현황", href: "뱅드림콜라보.html"}, {name: "성지순례 스탬프 투어 신청", href: "콜라보스탬프투어.html"} ] }
    ]
};

// =========================================================================================
// [글로벌 아코디언 토글 함수]
// =========================================================================================
window.toggleSidebarGroup = function(btn) {
    const submenu = btn.nextElementSibling;
    const icon = btn.querySelector('.fa-chevron-down');
    
    if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        icon.classList.add('rotate-180');
        btn.classList.add('text-[#16A4BE]');
    } else {
        submenu.classList.add('hidden');
        icon.classList.remove('rotate-180');
        btn.classList.remove('text-[#16A4BE]');
    }
};

// =========================================================================================
// [사이드바 HTML 생성 로직]
// =========================================================================================
function getSidebarHTML(category) {
    const groups = sidebarMenuData[category] || sidebarMenuData["안전환경"];
    
    // IP사업 메뉴인 경우 컬러를 핑크로 매핑
    const isMascot = category === "캐릭터/IP사업";
    const headerColorClass = isMascot ? "bg-pink-600" : "bg-slate-800";
    const hoverColorClass = isMascot ? "hover:text-pink-600" : "hover:text-[#16A4BE]";
    const hoverBgClass = isMascot ? "hover:bg-pink-50" : "hover:bg-sky-50";

    const listHTML = groups.map(group => {
        const itemsHTML = group.items.map(item => `
            <li>
                <a href="${item.href}" class="sidebar-link block py-2.5 pl-10 pr-4 text-sm text-slate-600 ${hoverColorClass} ${hoverBgClass} font-medium transition-colors" data-name="${item.name}">
                    <i class="fa-solid fa-angle-right text-[10px] mr-2 opacity-50"></i>${item.name}
                </a>
            </li>
        `).join('');

        return `
            <li class="sidebar-group border-b border-slate-100 last:border-0">
                <button class="sidebar-toggle w-full flex items-center justify-between p-4 text-left text-slate-700 hover:bg-slate-50 font-bold transition-colors" onclick="toggleSidebarGroup(this)">
                    <span class="flex items-center"><i class="fa-solid fa-folder-open text-slate-400 mr-2 text-sm w-4 text-center"></i>${group.group}</span>
                    <i class="fa-solid fa-chevron-down text-xs transition-transform duration-300 transform text-slate-400"></i>
                </button>
                <ul class="sidebar-submenu hidden bg-slate-50 border-t border-slate-100">
                    ${itemsHTML}
                </ul>
            </li>
        `;
    }).join('');

    return `
        <aside class="lg:w-64 flex-shrink-0 hidden lg:block" id="common-sidebar">
            <div class="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden sticky top-8">
                <div class="${headerColorClass} text-white font-bold p-4 text-lg">${category}</div>
                <ul id="sidebar-menu-list">
                    ${listHTML}
                </ul>
            </div>
        </aside>
    `;
}

// =========================================================================================
// [초기화 및 활성화 로직]
// =========================================================================================
function initHyobinUI() {
    // 1. 헤더/푸터 자동 삽입 (중복 방지 처리)
    if (!document.querySelector('header')) {
        document.body.insertAdjacentHTML('afterbegin', headerHTML);
    }
    if (!document.querySelector('footer')) {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }

    // URL 및 Title 기반 현재 카테고리 및 경로 판별 (해시 # 포함)
    let currentPath = '';
    let currentHash = window.location.hash || '';
    
    try {
        currentPath = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
    } catch(e) {
        currentPath = window.location.pathname.split('/').pop();
    }
    
    // 전체 경로 조합 (예: 경영정보.html#overview)
    const fullCurrentPath = currentPath + currentHash;
    const pageTitle = document.title || '';
    
    // 메인 페이지(index.html)는 사이드바 생략
    if (currentPath === 'index.html' || currentPath === '') return;

    // 카테고리 매칭 로직 (Title 또는 Path 기반)
    let activeCategory = '안전환경';
    if (pageTitle.includes('정보공개') || currentPath.includes('public') || currentPath.includes('data') || currentPath.includes('신고') || currentPath.includes('청렴')) activeCategory = '정보공개';
    else if (pageTitle.includes('이용') || pageTitle.includes('운임') || pageTitle.includes('러기지') || currentPath.includes('info') || currentPath.includes('fare') || currentPath.includes('map') || currentPath.includes('증명서') || currentPath.includes('주차장')) activeCategory = '이용정보';
    else if (pageTitle.includes('참여') || pageTitle.includes('질문') || currentPath.includes('QA') || currentPath.includes('participation') || currentPath.includes('견학') || currentPath.includes('모니터')) activeCategory = '시민 참여';
    else if (pageTitle.includes('알림') || pageTitle.includes('공지') || pageTitle.includes('보도') || currentPath.includes('notice') || currentPath.includes('입찰') || currentPath.includes('계약') || currentPath.includes('광고')) activeCategory = '알림마당';
    else if (pageTitle.includes('ESG') || currentPath.includes('esg') || currentPath.includes('사회공헌') || currentPath.includes('채권')) activeCategory = 'ESG경영';
    else if (pageTitle.includes('소개') || pageTitle.includes('조직') || pageTitle.includes('오시는') || currentPath.includes('about') || currentPath.includes('경영정보') || currentPath.includes('행정정보') || currentPath.includes('산업현황') || currentPath.includes('역사관')) activeCategory = '공사 소개';
    else if (pageTitle.includes('캐릭터') || pageTitle.includes('굿즈') || pageTitle.includes('성지') || currentPath.includes('mascot') || currentPath.includes('goods') || currentPath.includes('콜라보') || currentPath.includes('애니')) activeCategory = '캐릭터/IP사업';

    // 2. 사이드바 자동 삽입 및 HTML 구조 자동 교정
    let mainContent = document.getElementById('main-content');
    let mainTag = document.querySelector('main');
    
    if (!mainContent && mainTag) {
        mainTag.classList.add('flex', 'flex-col', 'lg:flex-row', 'gap-8');
        mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        mainContent.className = 'flex-grow w-full min-w-0'; 
        
        while (mainTag.firstChild) {
            mainContent.appendChild(mainTag.firstChild);
        }
        mainTag.appendChild(mainContent);
    }
    
    const existingSidebar = document.querySelector('aside');

    if (mainContent && !existingSidebar) {
        mainContent.insertAdjacentHTML('beforebegin', getSidebarHTML(activeCategory));
    }

    // 3. 사이드바 메뉴 동적 하이라이트 및 아코디언 열기
    setActiveSidebarMenu(fullCurrentPath, currentPath, pageTitle, activeCategory);

    // 4. 헤더 스크롤 이벤트 (아래로 스크롤 시 숨김, 위로 스크롤 시 표시)
    let lastScrollTop = 0;
    const header = document.getElementById('common-header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
                // 스크롤 내릴 때 (헤더 높이보다 많이 내렸을 때 위로 올리기)
                header.style.transform = 'translateY(-100%)';
            } else {
                // 스크롤 올릴 때 (다시 보이기)
                header.style.transform = 'translateY(0)';
            }
            // 모바일 오디오 바운스 효과 등으로 0 이하로 내려갈 수 있으므로 예외처리
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        }, { passive: true });
    }
}

// 사이드바 하이라이트 적용 함수 (아코디언 연동)
function setActiveSidebarMenu(fullCurrentPath, currentPath, pageTitle, activeCategory) {
    const sidebarLinks = document.querySelectorAll('aside .sidebar-link');
    let foundActive = false;

    // 테마 컬러 설정 (IP사업은 핑크 계열, 나머지는 기본 시안 계열)
    const isMascot = activeCategory === "캐릭터/IP사업";
    const activeTextClass = isMascot ? "text-pink-600" : "text-[#16A4BE]";
    const activeBgClass = isMascot ? "bg-pink-100" : "bg-sky-100";
    const activeBorderClass = isMascot ? "border-pink-600" : "border-[#16A4BE]";
    const iconBaseClass = "fa-solid fa-angle-right text-[10px] mr-2";

    sidebarLinks.forEach(link => {
        let href = link.getAttribute('href') || '';
        try { href = decodeURIComponent(href); } catch(e) {}
        
        const linkText = link.textContent.trim().replace(/[·\s]/g, '');

        // 1순위: 해시를 포함한 완벽 일치 (예: 경영정보.html#overview)
        let isMatch = (href !== '' && href !== '#' && href === fullCurrentPath);
        
        // 2순위: 해시를 제외한 기본 파일명 일치
        if (!isMatch && href.split('#')[0] === currentPath) {
            isMatch = true;
        }

        // 3순위: 타이틀에 메뉴 이름이 포함된 경우 (파일 이름이 한글이 아닐 때 방어 로직)
        if (!isMatch && href !== '#' && linkText.length > 2 && pageTitle.replace(/[·\s]/g, '').includes(linkText)) {
            isMatch = true;
        }

        if (isMatch && !foundActive) {
            foundActive = true;
            
            // 활성화 스타일 적용 (테마에 맞는 컬러)
            link.className = `sidebar-link block py-2.5 pl-10 pr-4 text-sm font-bold transition-colors border-l-4 ${activeTextClass} ${activeBgClass} ${activeBorderClass}`;
            
            const icon = link.querySelector('i');
            if (icon) icon.className = `${iconBaseClass} ${activeTextClass}`;
            
            // 해당 메뉴가 속한 아코디언 폴더를 자동으로 열어줌
            const submenu = link.closest('.sidebar-submenu');
            if (submenu) {
                submenu.classList.remove('hidden');
                const btn = submenu.previousElementSibling;
                if (btn) {
                    btn.classList.add(activeTextClass);
                    const chevron = btn.querySelector('.fa-chevron-down');
                    if (chevron) chevron.classList.add('rotate-180');
                }
            }
        } else {
            // 비활성화 기본 스타일 유지
            const hoverColor = isMascot ? "hover:text-pink-600 hover:bg-pink-50" : "hover:text-[#16A4BE] hover:bg-sky-50";
            link.className = `sidebar-link block py-2.5 pl-10 pr-4 text-sm text-slate-600 font-medium transition-colors ${hoverColor}`;
            const icon = link.querySelector('i');
            if (icon) icon.className = `${iconBaseClass} opacity-50`;
        }
    });
}

// 스크립트 실행 타이밍 100% 보장 (Race Condition 해결)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHyobinUI);
} else {
    initHyobinUI();
}