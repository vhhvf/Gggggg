import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
await delay(5000)
conn.sendButton(m.chat, 'πͺππππ β¨', wm, json.result.female, [['πΊππππππππ π', `/${command}`]], m)
conn.sendButton(m.chat, 'πͺππππ β¨', wm, json.result.male, [['πΊππππππππ π', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple|compartirperfil|compartirfoto)$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))