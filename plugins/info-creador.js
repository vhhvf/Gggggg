import fs from 'fs'
function handler(m, { conn }) {
let vn = './media/creador.mp3'
let text = `
*πΎπ€π£π©πππ©π€* 
*Wa.me/5492266466080 (no bot)*
*Wa.me/447520621851 (bot)*
*Wa.me/524421134524 (botΒ²)*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π»ππ π³ππππ©ππ-π΄π«',
body: 'ππ«ππππ¨π«',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://wa.me/5492266466080`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/Menu2.jpg'
let str = `π§‘ *Eso son los contactos para ti.*`

conn.sendHydrated(m.chat, str, wm, pp, 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k', 'grupos', null, null, [
['π ππ£ππ€π§π’πππΓ³π£', '.infobot'],
['π πΏπ€π£ππ§', '.donar'],
['β ππ§ ππ‘ ππ£ππππ€', '/menu']
], m,)
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i
export default handler
