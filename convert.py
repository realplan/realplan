import os
from PIL import Image


def convert_png_to_webp(folder_path, quality=100, delete_original=True):
    """
    Convert all PNG images in a folder to WebP format and optionally delete originals.

    Args:
        folder_path (str): Path to the folder containing PNG images
        quality (int): WebP quality (0-100)
        delete_original (bool): Whether to delete PNG after conversion
    """

    if not os.path.exists(folder_path):
        print("❌ Folder does not exist")
        return

    converted = 0
    deleted = 0

    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.lower().endswith(".png"):
                png_path = os.path.join(root, file)
                webp_path = os.path.splitext(png_path)[0] + ".webp"

                try:
                    with Image.open(png_path) as img:
                        img.save(webp_path, "WEBP", quality=quality, lossless=True)

                    # ✅ Verify file exists before deleting
                    if delete_original and os.path.exists(webp_path):
                        os.remove(png_path)
                        deleted += 1
                        print(f"🗑️ Deleted PNG: {png_path}")

                    print(f"✅ Converted: {png_path} → {webp_path}")
                    converted += 1

                except Exception as e:
                    print(f"❌ Failed: {png_path} | Error: {e}")

    print(f"\n🎉 Done!")
    print(f"✅ Converted: {converted}")
    print(f"🗑️ Deleted: {deleted}")


# ===== RUN HERE =====
if __name__ == "__main__":
    folder_path = input("Enter folder path: ").strip()
    convert_png_to_webp(folder_path)