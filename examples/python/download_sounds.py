"""Download the best match for each sound a project needs.

    SOUNDZA_API_KEY=sz_live_... python download_sounds.py
"""
import os
import requests

API = "https://api.soundza.com/v1"
HEADERS = {"Authorization": f"Bearer {os.environ['SOUNDZA_API_KEY']}"}
WANTED = ["coin pickup", "jump", "menu click", "door creak"]

os.makedirs("sounds", exist_ok=True)
for words in WANTED:
    page = requests.get(f"{API}/sounds/search", params={"q": words, "type": "sound_effect", "per_page": 1}, headers=HEADERS).json()
    if not page["sounds"]:
        print(f"nothing for {words!r}")
        continue
    sound = page["sounds"][0]
    file = requests.get(sound["download_url"], params={"search_id": page["search_id"]}, headers=HEADERS)
    path = os.path.join("sounds", words.replace(" ", "_") + ".wav")
    open(path, "wb").write(file.content)
    print(f"{words}: {sound['title']} -> {path}")
