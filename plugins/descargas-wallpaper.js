import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `ππͺπ ππͺπ¨πππ§β\n οΈπΏπππ ππ¨ππ§ππππ§ ππ‘ π£π€π’ππ§π\nππππ’π₯π‘π€\n*${usedPrefix + command} loli*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*ππ΄πππ»ππ°π³πΎ π³π΄ ${text}*`, m)
  
  await delay(5000)
  conn.sendHydrated(m.chat, `π πΉπππππππππ: ${text}`, `π­πππππ | ${wm}`, img, img, 'βοΈ πππ', null, null, [
['π ππππͺπππ£π©π', `${usedPrefix + command} ${text}`],
['π πππ£π©ππ§ππ¨π© ', `#pinterest ${text}`],
['π ππ€π€ππ‘π ', `#image ${text}`],
], m)

}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
handler.limit = 2
handler.register = true
handler.level = 6
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))