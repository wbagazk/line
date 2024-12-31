const fs = require('fs')

global.storename = "WBK Pedia"
global.storedesc = "Harga Murah, Kualitas Terjamin"
global.botname = "AIzeroMD"
global.botdesc = "Artificial Intelligence, The Rise of the Robotic Age"
global.ownername = "wbagazk"
global.owner = "6289516174846"
global.version = "1.0.0"

global.packname = "My Sticker"
global.author = "@AIzeroMD"
global.web = "https://wbagazk.my.id"
global.wm = "AIzeroMD"
global.chjid = "120363369378768979"

global.sessionName = "session"
global.botNumber = "6285183352262" 

global.sch = "https://whatsapp.com/channel/0029Vaxp0W0CXC3RhmaRUt2b"
global.sgc = "https://chat.whatsapp.com/JgksU1GnZzh7BS3abkmcDo"
global.stg = "https://t.me/"
global.syt = "https://www.youtube.com/"
global.sig = "https://instagram.com/"
global.thumb = "https://files.catbox.moe/gg3ccm.jpg"
global.thumb2 = "https://files.catbox.moe/gg3ccm.jpg"

global.dana = "0821-3128-2262"
global.gopay = "0821-3128-2262"
global.ovo = "0821-3128-2262"
global.pulsa = "0821-3128-2262"
global.rek = "Seabank : 901310798917"

// Kalo gk ada
global.qris = "https://files.catbox.moe/14qend.jpg"
// Ubah ke false, hapus " "

global.skizapi = "APIKEY"
global.neoxrapi = "ViooS"
global.ariekey = "APIKEY"
global.onekey = "7gFbvCVZbCbUHzo"
global.betabotz = "RISSBETAAPI"
global.lolhuman = "RISSLOLAPI"


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
global.memberID = "OK388034"
global.pin = "8494"
global.pw = "bagas160803"
global.merchant = "OK388034"
global.codeqr = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214459472381924500303UMI51440014ID.CO.QRIS.WWW0215ID20222129272240303UMI5204481453033605802ID5914BAGAZ STORE ID6006JEMBER61056811162070703A01630499FB"
global.keyorkut = "78158691734266400388034OKCTE76864479794F4D03852E967B0E84211"

global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Email saweria
global.email_saweria = 'me@wbagazk.my.id'
global.password_saweria = 'bagas12345*'

// true pake prefix
global.prefixx = true
// false no prefix

// Rek. v1/v3
global.tipemenu = "v1"
global.tipeallmenu = "v1"
// v1 sampai v3

global.autotyping = true
global.autoread = true
global.autobio = true
global.anticall = true
global.antispam = true
global.antibot = true
global.welcome = true // welcome+left

global.tekswelcome = "Welcome @user 🎉\n\nGrup: @group"
global.teksgoodbye = "Goodbye @user 😂\n\nGrup: @group"

// Github settings
global.ghh = {
name: "IyaaTauKamuPro",
token: "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"
}
global.name = "IyaaTauKamuPro"
global.repo_sc1 = "SC-1"
global.filepath_ip1 = "confirm-ip/database.json"
global.filepath_key1 = "confirm-key/database.json"
global.filepath_number1 = "confirm-number/database.json"

global.repo_sc2 = "SC-2"
global.filepath_ip2 = "SC-2/confirm-ip/database.json"
global.filepath_key2 = "SC-2/confirm-key/database.json"
global.filepath_number2 = "SC-2/confirm-number/database.json"

global.repo_scfree = "SC-Free"
global.filepath_scfree = "SC-Free/database.json"

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