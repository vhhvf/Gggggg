import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*๐๐ช๐ ๐๐จ๐ฉ๐ ๐๐ช๐จ๐๐๐๐ค? ๐ฅ๐ค๐ง ๐๐๐ซ๐ค๐ง ๐๐ฃ๐๐ง๐๐จ๐ ๐๐ก ๐๐ค๐ข๐๐ฃ๐๐ค ๐ข๐๐จ ๐ฃ๐ค๐ข๐๐ง๐ ๐๐๐ก ๐๐๐ฃ๐๐๐ค๐ฃ*\n\n* ๐๐๐๐ข๐ฅ๐ก๐ค:*\n*${usedPrefix + command} Quevedo fernet*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '๐ต ๐ผ๐ช๐๐๐ค๐๐ค๐ ๐ต' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '๐ฅ ๐๐๐๐๐ค๐๐ค๐ ๐ฅ' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '๐ ๐๐ผ๐ ๐๐๐๐๐๐๐ผ๐ฟ๐๐ ๐' }, type: 1 }, ] 
let texto1 = `*โญโโโโช~*โโแฐฑโขโขโขโโจออPออฬธLอฬธAออฬธYออฬธโฉโโขโขโขแฐฑโโ*~*
โโ๐ *๐ง๐ถ๐๐๐น๐ผ:* ${title}
โโ๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${publishedTime}
โโโ *๐ฟ๐ช๐ง๐๐๐๐ค๐ฃ:* ${durationH}
โโ๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${viewH}
โโ๐ *๐ฟ๐๐จ๐๐ง๐๐ฅ๐๐๐ค๐ฃ:* ${description}
โโ๐ *๐๐๐ฃ๐ :* ${urll}
โโ
โโย ย ย ย ย ย ย  *โโโโโโโโโโโโโ%100*
โฐโโขโโโโขโขโขโฆ๐โณโฆโขโขโขโโโโขโโฏโค`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'โ ๐ฟ สแดแดสแดแดแดแดแดแดส แดแด สแดแดแดแดสแด', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `*โญโโโโช~*โโแฐฑโขโขโขโโจออPออฬธLอฬธAออฬธYออฬธโฉโโขโขโขแฐฑโโ*~*
โโ๐ *๐ง๐ถ๐๐๐น๐ผ:* ${title}
โโ๐ *๐ฃ๐๐ฏ๐น๐ถ๐ฐ๐ฎ๐ฐ๐ถ๐ผ๐ป:* ${published}
โโ๐ *๐ฉ๐ถ๐๐๐ฎ๐:* ${views}
โโ๐ *๐๐๐ฃ๐ :* ${url}
โโ
โโย ย ย ย ย ย ย  *โโโโโโโโโโโโโ%100*
โฐโโขโโโโขโขโขโฆ๐โณโฆโขโขโขโโโโขโโฏโค`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '๐ ๐๐ผ๐ ๐๐๐๐๐๐๐ผ๐ฟ๐๐ ๐'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*แดษดแด ษชแดษดแดแด แดแดแดษชแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[โ๐๐๐๐โ] ๐๐ง๐ง๐ค, ๐ฅ๐ค๐ง ๐๐๐ซ๐ค๐ง ๐๐ฃ๐ฉ๐๐ฃ๐ฉ๐ ๐๐๐ก ๐ฃ๐ช๐๐ซ๐ค*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
handler.money = 80
handler.register = true
export default handler
