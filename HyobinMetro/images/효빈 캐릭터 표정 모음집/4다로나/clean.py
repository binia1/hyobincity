import os
from rembg import remove
from PIL import Image

def batch_remove_background_auto():
    # 현재 폴더('.') 안의 모든 PNG 파일을 자동으로 수집 (이미 처리된 '_투명.png'는 제외)
    image_files = [f for f in os.listdir('.') if f.lower().endswith('.png') and not f.endswith('_투명.png')]
    
    if not image_files:
        print("❌ 폴더 안에 처리할 PNG 이미지 파일이 없습니다!")
        return

    print(f"📦 총 {len(image_files)}개의 이미지를 발견했습니다. 작업을 시작합니다...")
    
    for file_name in image_files:
        try:
            print(f"🔄 진행 중: {file_name}")
            input_image = Image.open(file_name)
            
            # AI 기반 배경 제거 실행
            output_image = remove(input_image)
            
            # 결과물 파일명 생성 (예: 고나미_화남_투명.png)
            name_without_ext = os.path.splitext(file_name)[0]
            output_name = f"{name_without_ext}_투명.png"
            
            # 저장
            output_image.save(output_name, 'PNG')
            print(f"  ┗ ✅ 완료: {output_name}")
            
        except Exception as e:
            print(f"  ┗ ❌ {file_name} 처리 중 에러 발생: {e}")

    print("\n🎉 폴더 내 모든 이미지의 배경 제거가 끝났습니다!")

if __name__ == "__main__":
    batch_remove_background_auto()