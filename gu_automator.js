// gu_automator.js
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const guKey = urlParams.get('gu');
    
    // 주소창에 ?gu= 파라미터가 없으면(그냥 효빈시청 페이지면) 아무것도 안 하고 종료
    if (!guKey || !guDatabase[guKey]) return;

    const data = guDatabase[guKey];

    // 1. 문서 타이틀 변경 (예: 통계연보 | 효빈광역시 -> 통계연보 | 북구청)
    document.title = document.title.replace('효빈광역시', data.title);

    // 2. 페이지 내의 모든 '효빈광역시' 텍스트를 해당 구청 이름으로 치환하고 싶다면?
    // 특정 클래스(예: .auto-gu-name)가 붙은 요소들의 텍스트를 갈아끼움
    const titleElements = document.querySelectorAll('.auto-gu-name');
    titleElements.forEach(el => {
        el.textContent = data.title; // "북구청", "탄성군청" 등으로 텍스트 자동 변경
    });

    // 3. 만약 기관장 이름이나 인사말을 바꿔야 하는 요소가 있다면
    const headNameEl = document.querySelector('.auto-gu-head');
    if(headNameEl) headNameEl.textContent = `${data.title} ${data.headName}입니다.`;

    const addressEl = document.querySelector('.auto-gu-addr');
    if(addressEl) addressEl.textContent = data.address;
    
    const phoneEl = document.querySelector('.auto-gu-phone');
    if(phoneEl) phoneEl.textContent = data.phone;
});