import os
import re

def update_html_files():
    print("🔍 HTML 파일 검색을 시작합니다...")
    
    # 현재 폴더 내의 모든 html 파일을 검색
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    if len(html_files) == 0:
        print("⚠️ 에러: 현재 폴더에 변환할 .html 파일이 단 하나도 없습니다!")
        print("현재 CMD 경로와 html 파일들이 있는 폴더가 같은지 확인해주세요.")
        return
        
    print(f"📁 총 {len(html_files)}개의 HTML 파일을 찾았습니다. 변환을 시작합니다!\n")
    
    for file in html_files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 이미 변환된 파일이면 건너뜀
        if 'id="common-header"' in content:
            print(f"[{file}] 이미 공통 헤더가 적용되어 건너뜁니다.")
            continue
            
        # 1. 기존 <header>를 <div id="common-header"></div> 로 교체
        content = re.sub(r'<header.*?</header>', '<div id="common-header"></div>', content, flags=re.DOTALL)
        
        # 2. 메인 페이지에 있던 <nav> 네비게이션 통째로 제거 (새 헤더에 포함되어 있음)
        content = re.sub(r'<nav class="bg-\[#172554\].*?</nav>', '', content, flags=re.DOTALL)
        
        # 3. 기존 <footer>를 <div id="common-footer"></div><div id="common-modals"></div> 로 교체
        content = re.sub(r'<footer.*?</footer>', '<div id="common-footer"></div>\n    <div id="common-modals"></div>', content, flags=re.DOTALL)
        
        # 4. 공통 스크립트 파일이 없다면 </body> 직전에 삽입
        scripts_to_add = ""
        if 'data.js' not in content:
            scripts_to_add += '<script src="data.js"></script>\n    '
        if 'script.js' not in content:
            scripts_to_add += '<script src="script.js"></script>\n    '
        if 'common121.js' not in content:
            scripts_to_add += '<script src="common121.js"></script>\n'
            
        content = content.replace('</body>', scripts_to_add + '</body>')
        
        # 결과 덮어쓰기
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"[{file}] 🚀 성공적으로 공통 컴포넌트(헤더/푸터)를 적용했습니다!")

if __name__ == '__main__':
    update_html_files()