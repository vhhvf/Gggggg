let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ποΈ πππππ πΏπ πππππΌπ ' + fin,
rows: [
{title: "π πππ’π€π¨ππππ’π¦", rowId: `${usedPrefix}listablock`, description: `πΌπππππππ π©πππππππππ πππ ππππππ.`},
{title: "β οΈ πππ©ππ₯π§πππ’π¦", rowId: `${usedPrefix}listadv`, description: `πΌπππππππ π¨πππππππππ πππ π΄ππππ π·πππππππ.`},
{title: "π΅ ππππ§ πππ‘ππππ’π¦", rowId: `${usedPrefix}chatsbaneados`, description: `πͺππππ πππππ ππ ππππππ ππππ π π©ππ`},
{title: "ποΈ π¨π¦π¨ππ₯ππ’π¦ π£π₯ππ ππ¨π ", rowId: `${usedPrefix}listavip`, description: `πΌπππππππ πππ π·πππ π·ππππππ`},
{title: "π π¨π¦π¨ππ₯ππ’π¦ ππ‘ π₯ππππππ’π‘", rowId: `${usedPrefix}listaparejas`, description: `πΌπππππππ πππ πππΓ‘π ππ πππ πΉπππππΓ³π πΉππΓ‘πππππ.`}]}]

const listMessage = {
  text: `πππππ πΏπ πππππΌπ πΏπ ππππΌππππ`,
  footer: wm,
  title: `${htki} πππππΌ ππΌπππΌπΏπΌπ π`,
  buttonText: `π πππ πππππΌπ π`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
