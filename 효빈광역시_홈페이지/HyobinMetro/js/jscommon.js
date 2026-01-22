// 노선 색상 클래스 반환
function getLineColorClass(lineName) {
    if (lineName.includes('1호선')) return 'line-1';
    if (lineName.includes('2호선')) return 'line-2';
    if (lineName.includes('3호선')) return 'line-3';
    if (lineName.includes('4호선')) return 'line-4';
    if (lineName.includes('5호선')) return 'line-5';
    if (lineName.includes('6호선')) return 'line-6';
    if (lineName.includes('7호선')) return 'line-7';
    if (lineName.includes('8호선')) return 'line-8';
    if (lineName.includes('빈효선')) return 'line-bh';
    return 'bg-gray-500';
}

// 커스텀 알림창
function showAlert(message) {
    const overlay = document.getElementById('customAlertOverlay');
    const msgBox = document.getElementById('customAlertMessage');
    if(overlay && msgBox) {
        msgBox.innerText = message;
        overlay.classList.remove('hidden');
    } else {
        alert(message);
    }
}

function closeAlert() {
    const overlay = document.getElementById('customAlertOverlay');
    if(overlay) overlay.classList.add('hidden');
}

// DOM 로드 후 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('customAlertOverlay');
    if(overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) { closeAlert(); }
        });
    }
});