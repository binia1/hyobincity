import os
import re
import shutil
import sys

# ==========================================
# 효빈교통공사 HTML 일괄 변환 스크립트 (자동 경로 인식 & 최종 안전장치 버전)
# ==========================================

# 1. 설정: 스크립트가 놓인 현재 폴더를 자동으로 타겟으로 잡습니다.
# (파일을 HyobinMetro 폴더 안에 넣고 실행하면 알아서 그 폴더만 작업합니다.)
TARGET_DIR = os.path.dirname(os.path.abspath(__file__))
BACKUP_DIR = os.path.join(TARGET_DIR, "backup_html_files")

# 2. 추가할 공통 자바스크립트 태그
COMMON_JS_TAG = '\n    <!-- 공통 헤더/푸터 스크립트 로드 -->\n    <script src="js/common_hyobin.js"></script>\n'

def process_html_files():
    print("="*50)
    print("🚦 [효빈교통공사] HTML 헤더/푸터 일괄 변환기")
    print("="*50)
    
    # [최종 안전장치] 작업할 폴더 경로를 보여주고 사용자에게 확인받음
    print(f"📁 현재 작업 대상 폴더:\n>> {TARGET_DIR}\n")
    print("⚠️ 주의: 이 폴더 안의 모든 .html 파일이 수정됩니다!")
    
    confirm = input("이 폴더에서 작업을 진행하시겠습니까? (y/n): ").strip().lower()
    if confirm != 'y':
        print("작업을 취소했습니다. 안전하게 종료됩니다.")
        sys.exit()

    # 지정된 폴더의 모든 .html 파일 찾기
    html_files = [f for f in os.listdir(TARGET_DIR) if f.endswith('.html')]
    
    if not html_files:
        print(f"❌ 에러: 이 폴더({TARGET_DIR}) 안에 HTML 파일이 없습니다.")
        return

    # 백업 폴더 생성
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
        print(f"\n✅ 백업 폴더 생성 완료: {BACKUP_DIR}")

    success_count = 0

    print("\n🚀 변환 작업을 시작합니다...")
    for filename in html_files:
        filepath = os.path.join(TARGET_DIR, filename)
        backup_path = os.path.join(BACKUP_DIR, filename)
        
        # [안전장치 1] 무조건 백업 먼저 수행
        shutil.copy2(filepath, backup_path)
        
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        original_content = content

        # [안전장치 2] 비탐욕적 매칭(.*?)으로 기존 header/footer 영역 삭제
        content = re.sub(r'<header\b[^>]*>.*?</header>', '', content, flags=re.DOTALL | re.IGNORECASE)
        content = re.sub(r'<footer\b[^>]*>.*?</footer>', '', content, flags=re.DOTALL | re.IGNORECASE)

        # [안전장치 3] common_hyobin.js 가 없는 경우에만 </body> 바로 위에 삽입
        if 'js/common_hyobin.js' not in content:
            content = re.sub(r'</body>', f'{COMMON_JS_TAG}</body>', content, flags=re.IGNORECASE)

        # 내용이 변경되었을 때만 덮어쓰기
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"  - 🔄 수정 완료: {filename}")
            success_count += 1
        else:
            pass # 변경 사항이 없는 파일은 조용히 넘어감

    print("\n" + "="*50)
    print(f"🎉 일괄 변환 작업이 끝났습니다!")
    print(f"총 {len(html_files)}개의 파일 중 {success_count}개가 성공적으로 가벼워졌습니다.")
    print(f"💡 만약 문제가 생겼다면 '{BACKUP_DIR}' 폴더에 있는 원본 파일로 언제든 복구 가능합니다.")
    print("="*50)

if __name__ == "__main__":
    process_html_files()