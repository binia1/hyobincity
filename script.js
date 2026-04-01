/* =========================================
   script.js
   - 효빈광역시 공식 홈페이지 메인 로직
   - 주의: 이 스크립트가 실행되기 전에 data.js가 먼저 로드되어야 합니다.
   ========================================= */

// 전역 상태 변수
let currentPageIndex = 0;
const totalPages = 3;
let isDarkMode = false;
let currentLanguage = 'ko'; // 기본 언어

// =========================================
// 1. 초기화 및 이벤트 리스너
// =========================================
window.onload = () => {
    initializeDarkMode(); 
    changePage(0);
    lucide.createIcons();
};

document.addEventListener("keydown", (e) => {
    const overlay = document.getElementById("search-overlay");
    if (!overlay || overlay.classList.contains("hidden")) return;

    if (e.key === "Enter") {
        const active = document.activeElement;
        if (active && active.id === "header-search-input") {
            executeSearch();
        }
    }
});

// =========================================
// 2. 다국어 기능 (Language)
// =========================================
function applyTranslation(langCode) {
    const dictionary = translations[langCode] || translations['ko'];
    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (dictionary[key] !== undefined) {
            element.textContent = dictionary[key];
        }
    });
    document.documentElement.lang = langCode;
    currentLanguage = langCode;
    localStorage.setItem('language', langCode);
    
    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = dictionary['city-name'] + (langCode === 'ko' ? ' 공식 홈페이지' : ' Official Website');
    }
}

function setLanguage(langCode) {
    applyTranslation(langCode);
    closeOverlay('language-modal', 'language-content-wrapper');
    showCustomAlert(`${translations[langCode]['city-name']} 언어로 변경되었습니다.`);
}

// =========================================
// 3. 다크모드 (Dark Mode)
// =========================================
function initializeDarkMode() {
    const storedMode = localStorage.getItem('theme') || 'light';
    isDarkMode = storedMode === 'dark';
    
    if (isDarkMode) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    updateDarkModeIcon();

    const storedLanguage = localStorage.getItem('language') || 'ko';
    applyTranslation(storedLanguage);
}

function updateDarkModeIcon() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    if (toggleButton) {
        toggleButton.innerHTML = isDarkMode 
            ? '<i data-lucide="sun" class="w-6 h-6"></i>' 
            : '<i data-lucide="moon" class="w-6 h-6"></i>';
        lucide.createIcons();
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    updateDarkModeIcon();
    showCustomAlert(`테마가 ${isDarkMode ? '다크 모드' : '라이트 모드'}로 전환되었습니다.`);
}

// =========================================
// 4. 모달 및 오버레이 제어 (Search, Menu, Policy)
// =========================================
function openOverlay(id, wrapperId) {
    const overlay = document.getElementById(id);
    const wrapper = wrapperId ? document.getElementById(wrapperId) : null;
    if (overlay) {
        overlay.classList.remove('hidden');
        if (wrapper) {
            setTimeout(() => {
                if (id === 'full-menu-modal') {
                     wrapper.classList.remove('translate-x-full');
                } else {
                    wrapper.classList.remove('scale-95', 'opacity-0');
                }
                if (id === 'search-overlay') {
                    document.getElementById('header-search-input').focus();
                }
            }, 10);
        }
        lucide.createIcons();
    }
}

function closeOverlay(id, wrapperId) {
    const overlay = document.getElementById(id);
    const wrapper = wrapperId ? document.getElementById(wrapperId) : null;
    if (overlay) {
        if (wrapper) {
            if (id === 'full-menu-modal') {
                wrapper.classList.add('translate-x-full');
            } else {
                wrapper.classList.add('scale-95', 'opacity-0');
            }
            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300); 
        } else {
             overlay.classList.add('hidden');
        }
    }
}

function openSearch() { openOverlay('search-overlay', 'search-content-wrapper'); }
function changeLanguage() { openOverlay('language-modal', 'language-content-wrapper'); }
function openSitemap() { 
    openOverlay('sitemap-modal', 'sitemap-content-wrapper'); 
}
// =========================================
// 5. 검색 로직 (Search Engine)
// =========================================
function getSearchDom() {
    return {
        count: document.getElementById("search-result-count"),
        list: document.getElementById("search-result-list"),
        empty: document.getElementById("search-empty-state"),
    };
}

function normalizeText(s) {
    return (s || "").toString().trim().toLowerCase();
}

function scoreItem(item, q) {
    const query = normalizeText(q);
    if (!query) return 0;

    const title = normalizeText(item.title);
    const dept = normalizeText(item.dept);
    const summary = normalizeText(item.summary);
    const tags = (item.tags || []).map(normalizeText).join(" ");

    let score = 0;
    if (title.includes(query)) score += 50;
    if (dept.includes(query)) score += 20;
    if (tags.includes(query)) score += 15;
    if (summary.includes(query)) score += 10;

    const parts = query.split(/\s+/).filter(Boolean);
    for (const p of parts) {
        if (p.length < 2) continue;
        if (title.includes(p)) score += 12;
        if (tags.includes(p)) score += 5;
        if (summary.includes(p)) score += 3;
        if (dept.includes(p)) score += 2;
    }
    return score;
}

function runSearch(query) {
    const q = (query || "").trim();
    const { count, list, empty } = getSearchDom();

    if (!list || !count || !empty) return;

    list.innerHTML = "";
    empty.classList.add("hidden");
    count.textContent = "0";

    if (!q) {
        empty.classList.remove("hidden");
        return;
    }

    const results = SEARCH_INDEX
        .map(item => ({ item, score: scoreItem(item, q) }))
        .filter(x => x.score > 0)
        .sort((a, b) => b.score - a.score);

    count.textContent = String(results.length);

    if (results.length === 0) {
        empty.classList.remove("hidden");
        return;
    }

    results.slice(0, 30).forEach(({ item }) => {
        const metaLeft = [item.type, item.dept].filter(Boolean).join(" · ");
        const metaRight = item.date ? item.date : "";

        const card = document.createElement("a");
        card.href = item.url;
        card.className = "block p-4 rounded-xl border border-slate-200 dark:border-gray-600 hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-gray-700 transition";

        card.innerHTML = `
          <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
              <div class="text-xs text-slate-500 dark:text-gray-300 mb-1">${escapeHtml(metaLeft)}</div>
              <div class="font-extrabold text-slate-900 dark:text-white truncate">${highlight(item.title, q)}</div>
              <div class="text-sm text-slate-600 dark:text-gray-200 mt-1 line-clamp-2">${highlight(item.summary || "", q)}</div>
              <div class="mt-2 flex flex-wrap gap-1">
                ${(item.tags || []).slice(0, 6).map(t => `<span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-gray-600 text-slate-600 dark:text-gray-100">${escapeHtml(t)}</span>`).join("")}
              </div>
            </div>
            <div class="shrink-0 text-xs text-slate-400 dark:text-gray-400">${escapeHtml(metaRight)}</div>
          </div>
        `;
        list.appendChild(card);
    });
}

function executeSearch() {
    const input = document.getElementById('header-search-input');
    const query = input ? input.value : "";
    runSearch(query.trim() ? query : "");
}

function openSearchFromMain() {
    const mainInput = document.getElementById("main-search-input");
    const q = mainInput ? mainInput.value : "";
    openOverlay('search-overlay', 'search-content-wrapper');
    setTimeout(() => {
        const headerInput = document.getElementById("header-search-input");
        if (headerInput) {
            headerInput.value = q;
            headerInput.focus();
        }
        runSearch(q);
    }, 30);
}

function clearSearchResults() {
    const { count, list, empty } = getSearchDom();
    if (list) list.innerHTML = "";
    if (count) count.textContent = "0";
    if (empty) empty.classList.add("hidden");
}

function escapeHtml(str) {
    return (str || "").toString()
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function highlight(text, q) {
    const query = (q || "").trim();
    if (!query) return escapeHtml(text);

    const safe = escapeHtml(text);
    const parts = query.split(/\s+/).filter(Boolean).sort((a,b)=>b.length-a.length);
    let out = safe;

    for (const p of parts) {
        if (p.length < 2) continue;
        const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
        out = out.replace(re, (m) => `<mark class="bg-yellow-200/70 dark:bg-yellow-400/30 px-1 rounded">${m}</mark>`);
    }
    return out;
}

// =========================================
// 6. UI 및 유틸리티 (Pagination, Family Site, Footer Modal)
// =========================================
function changePage(newIndex) {
    if (newIndex < 0 || newIndex >= totalPages) return;

    document.querySelectorAll('.menu-page').forEach(page => page.classList.remove('active'));

    const newPage = document.getElementById(`page-${newIndex}`);
    if (newPage) {
        newPage.style.display = 'grid'; 
        void newPage.offsetWidth; 
        newPage.classList.add('active');
    }

    document.querySelectorAll('.dot').forEach((dot, i) => {
        if (i === newIndex) { 
            dot.classList.remove('bg-slate-300'); 
            dot.classList.add('bg-blue-500'); 
        } else { 
            dot.classList.remove('bg-blue-500'); 
            dot.classList.add('bg-slate-300'); 
        }
    });

    currentPageIndex = newIndex;
    lucide.createIcons();
}

function goFamilySite() {
    const select = document.getElementById('family-site');
    const url = select.value;
    if (url) {
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            window.location.href = url;
        }
    } else {
        showCustomAlert('이동할 기관을 선택해주세요.');
    }
}

function showCustomAlert(message) {
    console.log("APP INFO:", message);
}

// 푸터 정책 모달
function openModal(title, contentHtml) {
    const modal = document.getElementById('policy-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modalWrapper = document.getElementById('modal-content-wrapper');

    modalTitle.textContent = title;
    modalContent.innerHTML = contentHtml;
    
    modal.classList.remove('hidden');
    setTimeout(() => {
        modalWrapper.classList.remove('scale-95', 'opacity-0');
    }, 10);

    lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById('policy-modal');
    const modalWrapper = document.getElementById('modal-content-wrapper');

    modalWrapper.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300); 
}

function getModalContent(type) {
    let title = '';
    let content = '';

    switch (type) {
        case 'privacy':
            title = '개인정보처리방침';
            content = `
                <h4 class="text-lg font-bold text-blue-700">제1조 (개인정보의 처리 목적)</h4>
                <p class="text-sm">효빈광역시 공식 누리집은 다음과 같은 목적으로 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. (자세한 내용은 본청 웹사이트에서 확인 가능합니다.)</p>
                <ul class="list-disc list-inside ml-4 text-sm space-y-1">
                    <li>누리집 서비스 제공 및 관리</li>
                    <li>민원 처리 및 업무 수행</li>
                    <li>정책 홍보 및 통계 분석</li>
                </ul>
                <h4 class="text-lg font-bold text-blue-700 mt-4">담당 부서: 정보화담당관</h4>
                <p class="text-sm">연락처: 079-123-4567</p>
            `;
            break;
        case 'copyright':
            title = '저작권정책';
            content = `
                <h4 class="text-lg font-bold text-blue-700">제1조 (저작권 보호)</h4>
                <p class="text-sm">효빈광역시에서 제공하는 모든 콘텐츠(기사, 사진, 이미지, 동영상 등)의 저작권은 효빈광역시에 속하며, 저작권법의 보호를 받습니다. 콘텐츠를 무단으로 복제, 배포, 영리 목적으로 이용하는 경우 관련 법령에 따라 조치될 수 있습니다.</p>
                <h4 class="text-lg font-bold text-blue-700 mt-4">이용 조건</h4>
                <p class="text-sm">비영리 목적으로 개인적인 사용 시에는 출처(효빈광역시)를 명시해야 하며, 상업적 이용 및 변경은 허용되지 않습니다.</p>
            `;
            break;
        case 'cctv':
            title = '영상정보처리기기 운영방침';
            content = `
                <h4 class="text-lg font-bold text-blue-700">설치 목적 및 운영 근거</h4>
                <p class="text-sm">효빈광역시는 시민의 안전 및 재난 예방을 목적으로 「개인정보 보호법」 제25조 제1항에 근거하여 영상정보처리기기(CCTV)를 설치·운영하고 있습니다.</p>
                <h4 class="text-lg font-bold text-blue-700 mt-4">주요 운영 현황</h4>
                <ul class="list-disc list-inside ml-4 text-sm space-y-1">
                    <li>설치 대수: 총 500대 (시청사, 주요 도로, 공원 등)</li>
                    <li>녹화 시간: 24시간 연속 녹화</li>
                    <li>보관 기간: 녹화일로부터 30일</li>
                </ul>
            `;
            break;
        case 'viewer':
            title = '뷰어 내려받기 안내';
            content = `
                <h4 class="text-lg font-bold text-blue-700">문서 뷰어 다운로드</h4>
                <p class="text-sm">효빈광역시 누리집에서 제공되는 첨부 파일(hwp, doc, pdf, xls 등)을 정상적으로 열람하시려면 아래의 뷰어 프로그램이 필요합니다.</p>
                <ul class="list-disc list-inside ml-4 text-sm space-y-1">
                    <li>PDF 파일: Adobe Acrobat Reader (외부 링크)</li>
                    <li>HWP 파일: 한컴오피스 뷰어 (외부 링크)</li>
                    <li>DOC/XLS 파일: Microsoft Office 뷰어 (외부 링크)</li>
                </ul>
            `;
            break;
        case 'error':
            title = '누리집 오류 신고';
            content = `
                <h4 class="text-lg font-bold text-blue-700">오류 신고 방법 안내</h4>
                <p class="text-sm">누리집 이용 중 발생한 오류나 불편 사항을 신고해 주시면 신속하게 조치하겠습니다. 오류 발생 시점, 오류 내용(스크린샷 첨부 권장), 브라우저 정보 등을 상세히 기재해 주시기 바랍니다.</p>
                <div class="bg-slate-100 p-3 rounded-md text-sm">
                    <p><strong>신고 이메일:</strong> webmaster@hyobin.go.kr</p>
                    <p><strong>담당 부서:</strong> 정보화담당관</p>
                </div>
            `;
            break;
        case 'directions':
            title = '오시는 길 (효빈광역시청)';
            content = `
                <h4 class="text-lg font-bold text-blue-700">효빈광역시청 주소 및 교통편</h4>
                <p class="text-sm"><strong>주소:</strong> (우) 79791 효빈광역시 북구 효빈로 79 (고송8동)</p>
                <h4 class="text-lg font-bold text-blue-700 mt-4">대중교통 안내</h4>
                <ul class="list-disc list-inside ml-4 text-sm space-y-1">
                    <li>지하철: 1호선 시청역 하차, 3번 출구 도보 5분</li>
                    <li>버스: 777번, 888번, 시티투어 버스 '시청 앞' 정류장 하차</li>
                </ul>
                <div class="mt-4 bg-slate-200 h-48 flex items-center justify-center rounded-lg text-slate-500 font-bold">
                    [이 구역에 지도 API가 표시됩니다.]
                </div>
            `;
            break;
        default:
            title = '안내 정보';
            content = '<p class="text-center">선택된 정보가 없습니다.</p>';
    }
    return { title, content };
}

function handleFooterLink(event, policyType) {
    event.preventDefault();
    const { title, content } = getModalContent(policyType);
    openModal(title, content);
}