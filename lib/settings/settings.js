const fs = require('fs')

global.storename = "Hello Line"
global.botname = "Line Aja"
global.ownername = "Line"
global.owner = "6285710230711"
global.version = "4.8.0"

global.packname = "Line"
global.author = "Sticker"
global.web = "https://lineaja.my.id"
global.wm = "2024 - Line"
global.chjid = "120363322599104538"

global.sessionName = "session"
global.botNumber = "628568782064" 

global.sch = "https://whatsapp.com/channel/0029Vag4bmkEKyZEFU3CsH29"
global.sgc = "https://chat.whatsapp.com/BXcr5YY3YlO0ZXKCYaWDBi"
global.stg = "https://t.me/olinehost"
global.syt = "https://www.youtube.com/@LineAja-d5s"
global.sig = "-"
global.thumb = "https://pomf2.lain.la/f/novbfe6c.jpg"
global.thumb2 = "https://pomf2.lain.la/f/41fe6wh.jpg"

global.dana = "0856-8782-064"
global.gopay = "0856-8782-064"
global.ovo = "0856-8782-064"
global.pulsa = "0856-8782-064"
global.rek = "-"

// Kalo gk ada
global.qris = "https://telegra.ph/file/91939669bd55b50160be0.jpg"
// Ubah ke false, hapus " "

global.skizapi = "APIKEY"
global.neoxrapi = "ViooS"
global.ariekey = "APIKEY"
global.onekey = "APIKEY"

// Buat cpanel, dll.
global.domain = "-"
global.apikey = "-"
global.capikey = "-"
global.egg = "15"
global.loc = "1"
// Akhir domain harus ada /

// Buat cvps, dll.
global.apido = "APIKEY"

global.mess = {
owner: "Fitur khusus owner!",
prem: "Fitur khusus premium!",
grup: "Fitur khusus grup chat!",
privat: "Fitur khusus privat chat!",
admin: "Fitur khusus admin!",
botadmin: "Bot bukan admin!",
op: "Fitur khusus owner dan premium!",
or: "Fitur khusus owner dan reseller!",
ob: "Fitur khusus owner dan bot!",
oa: "Fitur khusus owner dan admin!"
}

// Set store
global.memberID = "-"
global.pin = "-"
global.pw = "-"
global.merchant = "-"
global.codeqr = "-"
global.keyorkut = "-"

global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Email saweria
global.email_saweria = '-'
global.password_saweria = '-'

// true pake prefix
global.prefixx = true
// false no prefix

// Rek. v1/v3
global.tipemenu = "v1"
global.tipeallmenu = "v1"
// v1 sampai v3

global.autotyping = false
global.autoread = true
global.autobio = true
global.anticall = true
global.antispam = false
global.antibot = false
global.welcome = false // welcome+left

global.tekswelcome = "Welcome @user 🎉\n\nGrup: @group"

global.teksgoodbye = "Goodbye @user 😂\n\nGrup: @group"

// Github settings
global.ghh = {
name: "LineShare352",
token: "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"
}

global.gamewaktu = 60
global.limit = 15

global.bejir = (a, b) => {
let bjir = 
{key: {remoteJid: 'status@broadcast', 
participant: '0@s.whatsapp.net'}, 
message: {orderMessage: {itemCount: 1000, 
status: 1, surface: 1, 
message: a, orderTitle: '', thumbnail: b, 
sellerJid: '0@s.whatsapp.net'}}};
return bjir
}

// NOTE
// true aktif & false nonaktif

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})