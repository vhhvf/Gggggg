import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = db.data.users[m.sender]
let time = user.prueb + 60000 //tiempo de espera en min
if (new Date - user.prueb < 60000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)

if (!args[0]) throw `${mg}๐ฐ๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐.`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
  ${eg}
โญโใ *๐  ${wm}* ใโโฑ
โ ๐ซ ๐ต๐๐๐๐๐
โ ${filename}
โโโโโโโยซโขยปโโโโโโ
โ ๐ช ๐ท๐๐๐
โ ${filesizeH}
โโโโโโโยซโขยปโโโโโโ
โ ๐ ๐ป๐๐๐
โ ${ext}
โฐโโโโฐ ๐  ${vs} โฑโโโโแ`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '๐ป๐๐ ๐ณ๐๐๐๐ฉ๐๐-๐ด๐ซ',
body: '๐บ๐๐๐๐ ๐๐๐ ๐พ๐๐๐๐๐จ๐๐',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/elrebelde21/The-LoliBot-MD`}}})
  
let info = `๐ด๐๐๐๐ ๐ 150 ๐ด๐ฎ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐ฬ`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['๐๐๐ฃ๐ช ๐ฟ๐๐จ๐๐๐ง๐๐๐จ ๐', '#descargasmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)  
/* let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) { 
m.reply(`${fg}๐ฝ๐๐๐๐๐ ๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐ ๐๐๐ ๐๐ ๐๐๐๐๐๐ ๐๐ฬ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐`)
console.log(e)
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}