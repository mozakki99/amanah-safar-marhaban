import urllib.request
import re
import os

url = "https://pixabay.com/images/search/airplane%20window/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode("utf-8")
        matches = re.findall(r'https://cdn\.pixabay\.com/photo/[^\s"\']+\.jpg', html)
        unique_urls = list(dict.fromkeys(matches))
        print("Found unique URLs:", len(unique_urls))
        for idx, u in enumerate(unique_urls[:5]):
            print(f"{idx+1}: {u}")
            # Try to download the first working one
            if idx == 0:
                out_path = "/Users/muzakki/.gemini/antigravity/scratch/amanah-safar-marhaban/public/images/airplane-window.jpg"
                img_req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(img_req) as img_resp, open(out_path, "wb") as f:
                    f.write(img_resp.read())
                print(f"Downloaded to {out_path}, size: {os.path.getsize(out_path)} bytes")
except Exception as e:
    print("Error:", e)
