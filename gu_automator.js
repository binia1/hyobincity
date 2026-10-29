// gu_automator.js
function applyGuCustomization() {
    const urlParams = new URLSearchParams(window.location.search);
    const guKey = urlParams.get('gu');
    
    // 주소창에 ?gu= 파라미터가 없거나 guDatabase에 없는 키면 종료
    if (!guKey || typeof guDatabase === 'undefined' || !guDatabase[guKey]) return;

    const data = guDatabase[guKey];
    const mainColor = data.themeColor || '#0077DD';
    const subColor = data.themeSubColor || mainColor;
    const textColor = data.themeTextColor || '#FFFFFF';
    const accentColor = data.accentColor || mainColor;

    // 🔥 0. 각 지역 퍼스널 컬러 동적 스타일시트 강제 주입
    let styleTag = document.getElementById('gu-personal-color-style');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'gu-personal-color-style';
        document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
        /* 헤더 & 네비게이션 & 리본 & 검색창 등 기존 메인용 CSS */
        #common-header header, #common-header > div:first-child { background-color: ${mainColor} !important; color: ${textColor} !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
        #common-header header *, #common-header > div:first-child a, #common-header > div:first-child span, #common-header > div:first-child button { color: ${textColor} !important; }
        #common-header nav, #common-header > div:nth-child(2) { background-color: ${subColor} !important; color: #FFFFFF !important; }
        #common-header nav div[class*="absolute"] *, #common-header .dropdown-menu * { color: #1e293b !important; }
        .ribbon-main { background: ${mainColor} !important; color: ${textColor} !important; font-weight: 800 !important; box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important; }
        .ribbon-main::before, .ribbon-main::after { border-color: ${subColor} transparent transparent transparent !important; }
        #main-search-input { border-color: ${accentColor} !important; }
        #main-search-input + button { background-color: ${mainColor} !important; color: ${textColor} !important; }
        #main-search-input + button:hover { background-color: ${subColor} !important; color: #FFFFFF !important; }
        div:has(> #main-search-input) { border-color: ${mainColor} !important; }
        #mascot-visual-box, .auto-gu-mascot-box { border-color: ${mainColor} !important; box-shadow: 0 0 25px ${mainColor}80 !important; }
        .auto-gu-mascot-pre, .auto-gu-slogan-pre { color: ${accentColor} !important; }
        #menu-container .group:hover span { color: ${accentColor} !important; }
        #menu-container .group:hover > div { border-color: ${mainColor} !important; color: ${accentColor} !important; background-color: ${mainColor}22 !important; }
        .dot.bg-blue-500 { background-color: ${accentColor} !important; }
        .date-circle span:last-child { color: ${accentColor} !important; }
        .post-row:hover .post-title { color: ${accentColor} !important; }
        span.post-dept-badge { background-color: ${mainColor}22 !important; color: ${accentColor} !important; }
        
        /* 상세 페이지 버튼 및 호버 효과용 CSS */
        article a.group:hover .group-hover\\:text-blue-600 { color: ${accentColor} !important; }
        article a.group:hover { border-color: ${mainColor}80 !important; background-color: ${mainColor}11 !important; }
    `;

    // 1. 공통 텍스트 및 이미지 교체 (메인 페이지용)
    document.title = `${data.title} 공식 홈페이지`;
    document.querySelectorAll('.auto-gu-name').forEach(el => el.textContent = data.title);

    const sloganPreEl = document.querySelector('.auto-gu-slogan-pre');
    if (sloganPreEl && data.sloganPre) sloganPreEl.textContent = data.sloganPre;

    const ribbonEl = document.querySelector('.auto-gu-ribbon-slogan, .ribbon-main');
    if (ribbonEl && data.sloganRibbon) ribbonEl.textContent = data.sloganRibbon;

    const headTextEl = document.querySelector('.auto-gu-head-text, .auto-gu-head');
    if (headTextEl) {
        const fullTitle = data.headTitle.startsWith(data.name) ? data.headTitle : `${data.name}${data.headTitle}`;
        headTextEl.textContent = `${fullTitle} ${data.headName}입니다.`;
    }

    const headImgEl = document.querySelector('.auto-gu-head-img');
    if (headImgEl) {
        headImgEl.src = `이미지/${data.headName}.webp`;
        headImgEl.alt = `${data.headName} ${data.headTitle}`;
        headImgEl.style.display = 'block';
    }

    const mascotPreEl = document.querySelector('.auto-gu-mascot-pre, [data-i18n-key="mascot-title-pre"]');
    if (mascotPreEl) mascotPreEl.textContent = `효빈광역시 ${data.name}`;

    const mascotLabelEl = document.querySelector('.auto-gu-mascot-label, [data-i18n-key="mascot-title"]');
    if (mascotLabelEl && mascotLabelEl.parentElement && data.mascotName) {
        mascotLabelEl.parentElement.innerHTML = `<span class="auto-gu-mascot-label">${data.name} 공식 마스코트</span><br><span class="text-4xl auto-gu-mascot-name">${data.mascotName}</span>`;
    }

    const mascotBoxEl = document.querySelector('#mascot-visual-box, .auto-gu-mascot-box');
    if (mascotBoxEl && data.mascotSvg) {
        mascotBoxEl.innerHTML = data.mascotSvg;
        mascotBoxEl.title = `${data.mascotName} - ${data.mascotDesc || ''}`;
    } else {
        const oldMascotImg = document.querySelector('img[alt="마스코트"]');
        if (oldMascotImg && oldMascotImg.parentElement && data.mascotSvg) {
            const parentBox = oldMascotImg.parentElement;
            parentBox.id = 'mascot-visual-box';
            parentBox.classList.remove('h-64', 'w-48', 'bg-blue-200');
            parentBox.classList.add('w-56', 'h-56', 'bg-white', 'flex', 'items-center', 'justify-center');
            parentBox.innerHTML = data.mascotSvg;
        }
    }

    const petitionSpan = document.querySelector('div[onclick*="시장에게바란다.html"] span');
    if (petitionSpan) {
        const roleName = data.name.endsWith('군') ? '군수' : '구청장';
        petitionSpan.innerHTML = `${roleName}에게<br>바란다`;
    }

    const footerEl = document.getElementById('common-footer');
    if (footerEl && footerEl.innerHTML.includes('undefined')) {
        footerEl.innerHTML = footerEl.innerHTML
            .replace('(우) 79791 undefined', `(우) 79791 ${data.address}`)
            .replace(/팩스<\/span>\s*undefined/g, `팩스</span> ${data.fax || '079-242-8199'}`)
            .replace(/당직실<\/span>\s*undefined/g, `당직실</span> ${data.duty || '079-242-8100'}`)
            .replace(/undefined/g, data.address);
    }

    // 🔥 2. 현재 날짜 계산기
    const now = new Date();
    const dates = [
        new Date(now),
        new Date(new Date().setDate(now.getDate() - 1)),
        new Date(new Date().setDate(now.getDate() - 1)),
        new Date(new Date().setDate(now.getDate() - 2))
    ];
    const fmtFull = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    const fmtMD = (d) => `${String(d.getMonth()+1).padStart(2,'0')}.${String(d.getDate()).padStart(2,'0')}`;
    const fmtY = (d) => `${d.getFullYear()}`;

    // 🔥 3. 메인 페이지 게시판 리스트 동적 변환
    if (data.news && data.news.length > 0) {
        const topNewsRow = document.querySelector('.post-row:not(li)');
        if (topNewsRow && data.news[0]) {
            const yearSpan = topNewsRow.querySelector('.date-circle span:first-child');
            const mdSpan = topNewsRow.querySelector('.date-circle span:last-child');
            const deptSpan = topNewsRow.querySelector('span[class*="bg-"][class*="text-xs"]');
            if (deptSpan) deptSpan.classList.add('post-dept-badge'); 
            
            const titleSpan = topNewsRow.querySelector('.post-title');
            const contentSpan = topNewsRow.querySelector('p.line-clamp-2');

            if (yearSpan) yearSpan.textContent = fmtY(dates[0]);
            if (mdSpan) mdSpan.textContent = fmtMD(dates[0]);
            if (deptSpan) deptSpan.textContent = data.news[0].dept;
            if (titleSpan) titleSpan.textContent = data.news[0].title;
            if (contentSpan) contentSpan.textContent = data.news[0].content;
        }

        const listNewsRows = document.querySelectorAll('ul.space-y-4 li.post-row');
        listNewsRows.forEach((row, idx) => {
            const newsItem = data.news[idx + 1];
            if (newsItem) {
                const deptSpan = row.querySelector('.text-link');
                const titleSpan = row.querySelector('.post-title');
                const dateSpan = row.querySelector('span.font-light');
                if (deptSpan) deptSpan.textContent = newsItem.dept;
                if (titleSpan) titleSpan.textContent = newsItem.title;
                if (dateSpan) dateSpan.textContent = fmtFull(dates[idx + 1]);
            }
        });
    }

    // 🔥 4. 새소식 상세 페이지(news_traffic_support.html) 동적 변환
    const articleContainer = document.querySelector('article');
    if (articleContainer && data.news && data.news.length > 0) {
        const topNews = data.news[0]; // 클릭한 메인 뉴스가 첫 번째 뉴스라고 가정
        
        const titleH1 = articleContainer.querySelector('h1.text-3xl');
        const deptBadge = articleContainer.querySelector('span.bg-blue-100.text-blue-600');
        const dateSpan = articleContainer.querySelector('span.text-slate-400.text-xs');
        const contentProse = articleContainer.querySelector('.prose');

        if (titleH1) {
            titleH1.textContent = topNews.title;
            document.title = `${topNews.title} - ${data.title}`; // 브라우저 탭 이름 변경
        }
        
        if (deptBadge) {
            deptBadge.textContent = topNews.dept;
            // 해당 구청의 퍼스널 컬러 적용
            deptBadge.className = `text-xs font-bold px-2 py-1 rounded`;
            deptBadge.style.backgroundColor = `${mainColor}22`;
            deptBadge.style.color = accentColor;
        }
        
        if (dateSpan) {
            dateSpan.textContent = fmtFull(dates[0]); // 오늘 날짜 꽂아넣기
        }
        
        if (contentProse) {
            // 본문 내용을 구청/군청 세계관에 맞춰 싹 갈아엎음
            contentProse.innerHTML = `
                <p class="mb-6 font-medium text-lg">${topNews.content}</p>
                <hr class="my-6 border-slate-100">
                <h3 class="text-xl font-bold text-slate-800 mb-4">1. 주요 안내 사항</h3>
                <p class="mb-6">본 행사는 ${data.title}의 역점 사업으로 구민 여러분의 많은 관심과 참여를 부탁드립니다. 자세한 일정 및 가이드라인은 하단 첨부파일을 확인해 주시기 바랍니다.</p>
                
                <h3 class="text-xl font-bold text-slate-800 mb-4">2. 유의 사항</h3>
                <ul class="list-disc pl-5 mb-6 space-y-2">
                    <li>현장 혼잡이 예상되오니 대중교통을 이용해 주시기 바랍니다.</li>
                    <li>안전 요원의 통제에 적극 협조해 주시기 바랍니다.</li>
                </ul>

                <div class="p-6 rounded-lg text-sm" style="background-color: ${mainColor}11; color: ${accentColor}; border-left: 4px solid ${mainColor};">
                    <strong>문의처:</strong> ${data.title} ${topNews.dept} (${data.phone})
                </div>
            `;
        }

        // 첨부파일 이름까지 맞춤형으로 튜닝
        const attachName = articleContainer.querySelector('.group-hover\\:text-blue-600');
        if (attachName) {
            attachName.textContent = `2026_${topNews.dept}_주요계획안.pdf`;
            attachName.style.transition = 'color 0.2s';
        }
    }
}

// DOM 로드 직후 및 비동기 요소 렌더링 이후 안전하게 덮어쓰기 실행
document.addEventListener('DOMContentLoaded', () => {
    applyGuCustomization();
    setTimeout(applyGuCustomization, 50);
    setTimeout(applyGuCustomization, 200);
});