import fetch from 'node-fetch' 
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnntt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'π» The-LoliBot-MD ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]
await conn.fetchBlocklist().then(async data => {
let txt = `π πππ¦π§π ππ πππ’π€π¨ππππ’π¦\n\n*Total :* ${data.length}\n\nβ­βββ[ *${vs} π * ]ββββ¬£\n`
for (let i of data) {
txt += `βπ« @${i.split("@")[0]}\n`
}
txt += "β°ββββββββ¬£"
return conn.sendButton(m.chat, txt, `*Por favor no llame para evitar ser Bloqueado, Gracias.*\n\n` + wm, null, [ 
['π  π π‘ π¨ βοΈ', '/menu']], m, { mentions: await conn.parseMention(txt) })
}).catch(err => {
console.log(err);
return conn.sendButton(m.chat, `${rg}ππΌπΏππ ππΌ πππΏπ π½ππππππΌπΏπ`, wm, gata, [
['π  π π‘ π¨ βοΈ', '/menu']], m, dos.getRandom())
})} 
handler.command = ['bloqueados', 'bloqueadoslista', 'listablock', 'blocklist', 'listblock', 'listabloqueados'] 

export default handler
