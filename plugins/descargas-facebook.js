import fetch from 'node-fetch'
import { facebookDl } from './scraper.js'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
  let time = user.prueb + 40000 //tiempo de espera en min
if (new Date - user.prueb < 40000) return await conn.reply(m.chat, `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`,  m)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
const sections = [
{
title: htjava + ' π‘ πππππΌ πΏπ πΏπππΎπΌπππΌπ ' + htjava,
rows: [
{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 1) ", rowId: `${usedPrefix}fb1 ${args[0]}`},
{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 2) ", rowId: `${usedPrefix}fb2 ${args[0]}`},
//{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 3) ", rowId: `${usedPrefix}fb3 ${args[0]}`},
//{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 4) ", rowId: `${usedPrefix}fb4 ${args[0]}`},
//{title: "π‘ ππΌπΎππ½πππ (π€π₯πππ€π£ 5) ", rowId: `${usedPrefix}fb5 ${args[0]}`}
]}]	
const listMessage = {
text: `πππππΎπΎππππ πππΌ πππΎπππ ππΌππΌ πΏπππΎπΌπππΌπ`,
footer: `*π£π₯ππ ππ¨π  ${user.premium ? "β": "β"}*\n${wm}`,
title: `*ββββκ€ π‘ ππΌπΎππ½πππ κ€ββββ*`,
buttonText: `π°οΈ ππ‘ππππ§ πΏππ¨πππ§ππ π°οΈ`,
sections }  
try {
let contenido = `β πππΏππ πΏπ ππΌπΎππ½πππ\n${wm}`
switch (command) { 
case "facebook": case "fb": case "facebookdl": case "fbdl":                
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak} )
break      
case "facebook1": case "fb1": case "facebookdl1": case "fbdl1": 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππππππ ππ πππππππ, ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ πΏπ ππΌπΎππ½πππ`, fkontak, m)
await conn.sendFile(m.chat, videovio, `error.mp4`, contenido, m)
break
//let res = await fbDownloader(args[0])
//for (let result of res.download) {
//let ur = result.url
//await conn.sendMessage(m.chat, { video: { ur }, caption: contenido }, { quoted: m })}


case "facebook2": case "fb2": case "facebookdl2": case "fbdl2":   
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ππππππ ππ πππππππ, ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ πΏπ ππΌπΎππ½πππ`, fkontak, m)
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendMessage(m.chat, { video: { url }, fileName: `error.mp4`, mimetype: 'video/mp4' , caption: contenido }, { quoted: m })   
break
//let ress = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
//let urll = ress?.url?.[0]?.url || ress?.url?.[1]?.url || ress?.['720p'] || ress?.['360p']
//await conn.sendMessage(m.chat, { video: { urll }, caption: contenido }, { quoted: m })  

}} catch {
await m.reply(`${lenguajeGB['smsAvisoFG']()}πΌπππ ππΌπππ ππΌπ, πππΎππππΏπ πππΌπ ππ ππππΌπΎπ ππΌπππΏπ πΏπ ππΌπΎππ½πππ`)
}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook1|fb1|facebookdl1|fbdl1|facebook2|fb2|facebookdl2|fbdl2)$/i
handler.limit = 3
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