// Download sounds into your Phaser project's assets folder. Keep the key out of game code.
//   SOUNDZA_API_KEY=sz_live_... node fetch-sounds.mjs
import { mkdir, writeFile } from "node:fs/promises";

const API = "https://api.soundza.com/v1";
const headers = { Authorization: `Bearer ${process.env.SOUNDZA_API_KEY}` };
const wanted = { coin: "coin pickup", jump: "jump", hit: "8-bit hit" };

await mkdir("public/assets/sfx", { recursive: true });
for (const [name, q] of Object.entries(wanted)) {
  const params = new URLSearchParams({ q, type: "sound_effect", per_page: "1" });
  const { sounds, search_id } = await (await fetch(`${API}/sounds/search?${params}`, { headers })).json();
  if (!sounds.length) continue;
  const file = await fetch(`${sounds[0].download_url}?search_id=${search_id}`, { headers });
  await writeFile(`public/assets/sfx/${name}.wav`, Buffer.from(await file.arrayBuffer()));
  console.log(`${name}: ${sounds[0].title}`);
}

// In your scene:
//   preload() { this.load.audio("coin", "assets/sfx/coin.wav"); }
//   collectCoin() { this.sound.play("coin"); }
