require('./settings/settings')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, generateForwardMessageContent, makeCacheableSignalKeyStore, generateWAMessageFromContent, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto, MessageType } = require('@whiskeysockets/baileys')
const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')
const figlet = require('figlet')
const FileType = require('file-type')
const nou = require('node-os-utils')
const os = require('os')
const pino = require('pino')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, imageToWebp3, videoToWebp, writeExifImg, writeExifImgAV, writeExifVid } = require('./general/exif')
const { getBuffer, sleep, smsg } = require('./general/myfunc')
const { getInput, verifyPassword, verifyPhoneNumber } = require('./general/scrape')

console.log(chalk.yellow.bold(figlet.textSync('Oline', {
font: 'Standard',
horizontalLayout: 'full',
verticalLayout: 'full',
width: 150,
whitespaceBreak: false
})))

let session = `${sessionName}`
let usePairingCode = true
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

const release = os.release()
const arch = os.arch()
const nodeVersion = process.version
console.log(chalk.yellow.bold(`\nSERVER INFO:
`)+chalk.white.bold(`• OS: ${nou.os.type()} (${release})
• Arsitektur: ${arch}
• Versi Node.js: ${nodeVersion}
• IP Address: ${nou.os.ip()}
`))

async function connectToWhatsApp() {
await verifyPassword()
const { state, saveCreds } = await useMultiFileAuthState('./'+session)
const vioo = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ["Ubuntu", "Chrome", "20.0.04"],
generateHighQualityLinkPreview: false,
mediaCompression: true,
syncFullHistory: false,
markOnlineOnConnect: false,
emitOwnEvents: false,
})
vioo.ev.on('creds.update', saveCreds)
if (usePairingCode && !vioo.authState.creds.registered) {
await verifyPhoneNumber(vioo)
}
store.bind(vioo.ev)

global.db = JSON.parse(fs.readFileSync('./data/db/database.json'))
if (global.db) global.db.data = {
users: {},
chats: {},
others: {},
settings: {},
...(global.db.data || {})}

vioo.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
const m = smsg(vioo, mek, store)
require('../Line')(vioo, m, chatUpdate, store)
} catch (err) {
console.error(err)
}})

vioo.ev.on('call', async (celled) => {
let botNumber = await vioo.decodeJid(vioo.user.id)
let lol = anticall
if (!lol) return
for (let loli of celled) {
if (loli.isGroup == false) {
if (loli.status == "offer") {
let nomer = await vioo.sendTextWithMentions(loli.from, `*${global.wm}* tidak menerima panggilan ${loli.isVideo ? `vidio!` : `suara!`}`)
}}}
})

vioo.ev.on('group-participants.update', async (anu) => {
if (!global.welcome) return;
let botNumber = await vioo.decodeJid(vioo.user.id);
if (anu.participants.includes(botNumber)) return;
let participants = anu.participants;
for (let num of participants) {
let avatarUrl;
try {
avatarUrl = await vioo.profilePictureUrl(num, 'image');
} catch {
avatarUrl = 'https://telegra.ph/file/750ed3947ea3722c20b77.png';
}
if (anu.action === 'add') {
let metadata = await vioo.groupMetadata(anu.id);
let teksWelcome = global.tekswelcome || 'Welcome @user 🎉\n\nGrup: @group'
teksWelcome = teksWelcome
.replace(/@user/g, `@${num.split("@")[0]}`)
.replace(/@group/g, metadata.subject);
await vioo.sendMessage(anu.id, {
image: {
url: `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/588090b81788803c48717.jpg&title=Welcome&desk=Semoga%20betah%20ya&avatar=${avatarUrl}`
},
caption: teksWelcome,
contextInfo: {
mentionedJid: [num]
}});
}
if (anu.action === 'remove') {
let metadata2 = await vioo.groupMetadata(anu.id);
let teksGoodbye = global.teksgoodbye || 'Goodbye @user 😂\n\nGrup: @group'
teksGoodbye = teksGoodbye
.replace(/@user/g, `@${num.split("@")[0]}`)
.replace(/@group/g, metadata2.subject);
await vioo.sendMessage(anu.id, {
image: {
url: `https://api.vreden.my.id/api/notify?background=https://telegra.ph/file/588090b81788803c48717.jpg&title=Goodbye&desk=Semoga%20gak%20nyesel%20ya&avatar=${avatarUrl}`
},
caption: teksGoodbye,
contextInfo: {
mentionedJid: [num]
}});
}}});

vioo.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

vioo.ev.on('contacts.update', update => {
for (let contact of update) {
let id = vioo.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

vioo.getName = (jid, withoutContact = false) => {
id = vioo.decodeJid(jid)
withoutContact = vioo.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = vioo.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === vioo.decodeJid(vioo.user.id) ?
vioo.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

vioo.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await vioo.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await vioo.getName(i + '@s.whatsapp.net')}\nFN:${await vioo.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:npofficiall@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://bit.ly/420u6GX\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
vioo.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

vioo.setStatus = (status) => {
vioo.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

vioo.public = true
vioo.serializeM = (m) => smsg(vioo, m, store)

vioo.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await vioo.getFile(path, true)
let {
res,
data: file,
filename: pathFile
} = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await toAudio(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'

delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage

let message = {
...options,
caption,
ptt,
[mtype]: {
url: pathFile
},
mimetype,
fileName: filename || pathFile.split('/').pop()
}
let m
try {
 m = await vioo.sendMessage(jid, message, {
...opt,
...options
})
}
catch (e) {
m = null
}
finally {
if (!m) m = await vioo.sendMessage(jid, {
...message,
[mtype]: file
}, {
...opt,
...options
})
file = null
return m
}
}

vioo.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = ''
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return vioo.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
}
let type = mime.split("/")[0]+"Message"
if (mime === "application/pdf"){
return vioo.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "image"){
return vioo.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
}
if (mime.split("/")[0] === "video"){
return vioo.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
}
if (mime.split("/")[0] === "audio"){
return vioo.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
}
}

vioo.sendTextWithMentions = async (jid, text, quoted, options = {}) => vioo.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

vioo.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './lib/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}}

vioo.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await vioo.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

vioo.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./lib/' + filename + '.' + type.ext) : './lib/' + filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

vioo.sendStickerFromUrl = async(from, PATH, quoted, options = {}) => {
let { writeExif } = require('./lib/general/sticker')
let types = await vioo.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : '', author: options.author ? options.author : author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
await vioo.sendMessage(from, {sticker: {url: pathFile}}, {quoted})
return fs.promises.unlink(pathFile)
}

vioo.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
} 
 
vioo.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await vioo.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
}

vioo.sendVideo = async (jid, path, gif = false, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await vioo.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
}

vioo.sendImageAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await vioo.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

vioo.sendVideoAsSticker = async(jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await global.getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await vioo.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

vioo.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await vioo.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'
}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await vioo.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)
}

vioo.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await vioo.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
return waMessage
}

vioo.imgToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await vioo.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

vioo.vidToSticker = async(from, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetchBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await vioo.sendMessage(from, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

vioo.sendText = (jid, text, quoted = '', options) => vioo.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

vioo.cMod = (jid, copy, text = '', sender = vioo.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options
}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === vioo.user.id

return proto.WebMessageInfo.fromObject(copy)
}

vioo.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update
if (connection === "close") {
let reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.statusCode
if (reason === DisconnectReason.badSession) {
console.log(`Session error, please delete the session and try again...`)
process.exit()
} else if (reason === DisconnectReason.connectionClosed) {
console.log('Connection closed, reconnecting....')
connectToWhatsApp()
} else if (reason === DisconnectReason.connectionLost) {
console.log('Connection lost from the server, reconnecting...')
connectToWhatsApp()
} else if (reason === DisconnectReason.connectionReplaced) {
console.log('Session connected to another server, please restart the bot.');
process.exit()
} else if (reason === DisconnectReason.loggedOut) {
console.log(`Device logged out, please delete the session folder and scan again.`)
process.exit()
} else if (reason === DisconnectReason.restartRequired) {
console.log('Restart required, restarting connection...')
connectToWhatsApp()
} else if (reason === DisconnectReason.timedOut) {
console.log('Connection timed out, reconnecting...')
connectToWhatsApp()
} else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`)
connectToWhatsApp()
}} else if (connection === "connecting") {
console.log('')
} else if (connection === "open") {
console.log('')
}})
return vioo
}

connectToWhatsApp()
process.on("uncaughtException", () => {
console.log('')
})

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})