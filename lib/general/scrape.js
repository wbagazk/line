const axios = require("axios")
const chalk = require('chalk')
const cheerio = require("cheerio")
const BodyForm = require('form-data')
const FormData = require("form-data")
const fs = require('fs')
const fetch = require('node-fetch')
const { fromBuffer } = require('file-type')
const path = require('path')
const { sizeFormatter } = require('human-readable')
const ms = require("parse-ms") 
const util = require('util')
const nodemailer = require('nodemailer');
const readline = require('readline');

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

global.color = color
global.bgcolor = bgcolor

const baseURL = "https://fdownloader.net/id"
const apiURL = "https://v3.fdownloader.net/api/ajaxSearch?lang=en"

const formatSize = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`
})

const totalFiturr = () => {
    var mytext = fs.readFileSync("./Line.js").toString()
    var numUpper = (mytext.match(/case '/g) || []).length
    return numUpper
}

async function ytdl(link, qualityIndex, typeIndex) {
const qualities = {
audio: { 1: '32', 2: '64', 3: '128', 4: '192' },
video: { 1: '144', 2: '240', 3: '360', 4: '480', 5: '720', 6: '1080', 7: '1440', 8: '2160' }
};
const headers = {
accept: '*/*',
referer: 'https://ytshorts.savetube.me/',
origin: 'https://ytshorts.savetube.me/',
'user-agent': 'Postify/1.0.0',
'Content-Type': 'application/json'
};
const cdn = () => Math.floor(Math.random() * 11) + 51;
const type = typeIndex === 1 ? 'audio' : 'video';
const quality = qualities[type][qualityIndex];
const cdnNumber = cdn();
const cdnUrl = `cdn${cdnNumber}.savetube.su`;
const videoInfoResponse = await axios.post(
`https://${cdnUrl}/info`,
{ url: link },
{ headers: { ...headers, authority: `cdn${cdnNumber}.savetube.su` } }
);
const videoInfo = videoInfoResponse.data.data;
const body = {
downloadType: type,
quality,
key: videoInfo.key
};
const downloadResponse = await axios.post(
`https://${cdnUrl}/download`,
body,
{ headers: { ...headers, authority: `cdn${cdnNumber}.savetube.su` } }
);
const downloadData = downloadResponse.data.data;
return {
link: downloadData.downloadUrl,
duration: videoInfo.duration,
durationLabel: videoInfo.durationLabel,
fromCache: videoInfo.fromCache,
id: videoInfo.id,
key: videoInfo.key,
thumbnail: videoInfo.thumbnail,
thumbnail_formats: videoInfo.thumbnail_formats,
title: videoInfo.title,
titleSlug: videoInfo.titleSlug,
videoUrl: videoInfo.url,
quality,
type
};
}

const Jimp = require('jimp')
async function remini(imageData, action) {
    return new Promise(async (resolve, reject) => {
        let actions = ['enhance', 'recolor', 'dehaze'];
        if (!actions.includes(action)) {
            action = actions[0];
        }
        
        let formData = new FormData();
        let url = `https://inferenceengine.vyro.ai/${action}`;
        
        formData.append('model_version', 1, {
            'Content-Transfer-Encoding': 'binary',
            'contentType': 'multipart/form-data; charset=uttf-8'
        });
        
        formData.append('image', Buffer.from(imageData), {
            'filename': 'enhance_image_body.jpg',
            'contentType': 'image/jpeg'
        });
        
        formData.submit({
            'url': url,
            'host': 'inferenceengine.vyro.ai',
            'path': `/${action}`,
            'protocol': 'https:',
            'headers': {
                'User-Agent': 'okhttp/4.9.3',
                'Connection': 'Keep-Alive',
                'Accept-Encoding': 'gzip'
            }
        }, function(err, res) {
            if (err) {
                reject();
                return;
            }
            
            let chunks = [];
            res.on('data', chunk => {
                chunks.push(chunk);
            }).on('end', () => {
                resolve(Buffer.concat(chunks));
            }).on('error', () => {
                reject();
            });
        });
    });
}

async function ephoto(url, texk) {
  let form = new FormData
  let gT = await axios.get(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
  })
  let $ = cheerio.load(gT.data)
  let text = texk
  let token = $("input[name=token]").val()
  let build_server = $("input[name=build_server]").val()
  let build_server_id = $("input[name=build_server_id]").val()
  form.append("text[]", text)
  form.append("token", token)
  form.append("build_server", build_server)
  form.append("build_server_id", build_server_id)
  let res = await axios({
    url: url,
    method: "POST",
    data: form,
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"]?.join("; "),
      ...form.getHeaders()
    }
  })
  let $$ = cheerio.load(res.data)
  let json = JSON.parse($$("input[name=form_value_input]").val())
  json["text[]"] = json.text
  delete json.text
  let {
    data
  } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
      cookie: gT.headers["set-cookie"].join("; ")
    }
  })
  return build_server + data.image
}

async function CarbonifyV1(input) {
  let Blobs = await fetch("https://carbonara.solopov.dev/api/cook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "code": input
      })
    })
    .then(response => response.blob())
  let arrayBuffer = await Blobs.arrayBuffer();
  let buffer = Buffer.from(arrayBuffer);
  return buffer
}

async function CarbonifyV2(input) {
  let Blobs = await fetch("https://carbon-api.vercel.app/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "code": input
      })
    })
    .then(response => response.blob())
  let arrayBuffer = await Blobs.arrayBuffer();
  let buffer = Buffer.from(arrayBuffer);
  return buffer
}

async function mediafireDl(url) {
    try {
        const res = await fetch(url);
        const $ = cheerio.load(await res.text());
        const link = $('a#downloadButton').attr('href');
        const [nama, mime, size] = [
            link.split('/').pop().trim(),
            link.split('.').pop().trim(),
            $('a#downloadButton').text().replace(/Download|\(|\)|\n|\s+/g, '').trim()
        ];
        return [{
            nama,
            mime,
            size,
            link
        }];
    } catch (error) {
        console.error(error);
        throw new Error("Error Gan");
    }
}

async function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.jpg': case '.jpeg': return 'image/jpeg'
    case '.png': return 'image/png'
    case '.gif': return 'image/gif'
    case '.webp': return 'image/webp'
    case '.mp4': return 'video/mp4'
    case '.mp3': return 'audio/mpeg'
    case '.wav': return 'audio/wav'
    case '.ogg': return 'audio/ogg'
    case '.m4a': return 'audio/mp4'
    case '.pdf': return 'application/pdf'
    case '.doc': return 'application/msword'
    case '.txt': return 'text/plain'
    case '.json': return 'application/json'
    case '.md': return 'text/markdown'
    case '.zip': return 'application/zip'
    case '.rar': return 'application/vnd.rar'
    case '.7z': return 'application/x-7z-compressed'
    case '.tar': return 'application/x-tar'
    case '.gz': return 'application/gzip'
    case '.js': return 'application/javascript'
    case '.php': return 'application/x-httpd-php'
    case '.ttf': return 'font/ttf'
    case '.otf': return 'font/otf'
    case '.woff': return 'font/woff'
    case '.woff2': return 'font/woff2'
    default: return 'application/octet-stream'
  }
}

async function ssweb(url, options = {}) {
    try {
        const apikey = 'dbbca692359344759d1b365cc7a6b325'
        const baseUrl = 'https://api.apiflash.com/v1/urltoimage'

        const {
            full_page = false,
            quality = 100,
            format = 'png'
        } = options

        const params = {
            access_key: apikey,
            url: url,
            full_page: full_page, 
            quality: quality,
            format: format
        };

        const response = await axios.get(baseUrl, {
            params: params,
            responseType: 'arraybuffer'
        });

        return {
            status: 200,
            result: response.data
        };
    } catch (error) {
        return {
            status: 500,
            message: 'Gagal mengambil screenshot',
            error: error.message,
        }}
}

async function tiktokSearchVideo(query) {
return new Promise(async (resolve, reject) => {
axios("https://tikwm.com/api/feed/search", {
headers: {
"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
cookie: "current_language=en",
"User-Agent":
"Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
},
data: {
keywords: query,
count: 12,
cursor: 0,
web: 1,
hd: 1,
},
method: "POST",
}).then((res) => {
resolve(res.data.data)
})
})
}

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({
        grant_type: 'client_credentials'
      }),
      headers: {
        Authorization: `Basic ${auth}`
      },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
  });
  const data = await response.json();
  return data.tracks.items;
}

async function pinterest(query) {
  let res = await fetchJson(`https://itzpire.com/search/pinterest?query=${encodeURIComponent(query)}`)
  let data = res.data
  let randomIndex = Math.floor(Math.random() * data.length)
  return data[randomIndex]
}

async function toBase64(text) {
    const base64String = Buffer.from(text).toString('base64');
    
    return base64String;
}

async function toOriginal(base64) {
    const originalText = Buffer.from(base64, 'base64').toString('utf-8');
    
    return originalText;
}

async function obfusc(text) {
    let obfuscated = '';
    
    for (let i = 0; i < text.length; i++) {
        obfuscated += String.fromCharCode(text.charCodeAt(i) + 5);
    }
    return Buffer.from(obfuscated).toString('base64');
}

async function deobfusc(obfuscated) {
    let decoded = Buffer.from(obfuscated, 'base64').toString('utf-8');
    
    let originalText = '';
    
    for (let i = 0; i < decoded.length; i++) {
        originalText += String.fromCharCode(decoded.charCodeAt(i) - 5);
    }
    
    return originalText;
}

function toGhRaw(url) {
    const rawUrl = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob', '');
    return rawUrl;
}

function toGhOri(rawUrl) {
    const originalUrl = rawUrl
        .replace('raw.githubusercontent.com', 'github.com')
        .replace('/master', '/blob/master')
        .replace('/main', '/blob/main');
    return originalUrl;
}

async function getInput(prompt) {
process.stdout.write(prompt)
return new Promise((resolve, reject) => {
process.stdin.once('data', (data) => {
const input = data.toString().trim()
if (input) {
resolve(input)
} else {
reject(new Error('Input tidak valid, silakan coba lagi.'))
}})})}

(function(_0x4216ba,_0x4bd30c){function _0x13bbcd(_0xd153e7,_0x5d627a,_0x198aba,_0xed51b3){return _0x2672(_0xd153e7- -0x1e7,_0x198aba);}function _0x3b253a(_0xa71b4d,_0x9390e6,_0x824a0a,_0x3af460){return _0x2672(_0x824a0a- -0x303,_0xa71b4d);}const _0x58bf37=_0x4216ba();while(!![]){try{const _0x4d96b8=-parseInt(_0x3b253a(-0x198,-0x169,-0xd4,-0x85))/(-0x2534*-0x1+0xa33+-0x2f66)*(parseInt(_0x13bbcd(-0x98,0x6,-0x20,-0x83))/(0x822+0x1765+-0x1f85))+-parseInt(_0x13bbcd(-0x66,-0xa3,0x29,0x5))/(-0x7b9*0x2+-0x127d*-0x1+-0x308)+parseInt(_0x3b253a(-0x114,-0x167,-0x13a,-0x166))/(-0x7*-0x586+0x13a*-0x1+-0x256c)*(-parseInt(_0x3b253a(-0x1df,-0x113,-0x198,-0x10f))/(-0x12b6+0x378+-0xf43*-0x1))+parseInt(_0x3b253a(-0xe6,0x1d,-0x77,-0x133))/(0xf2f+-0x3*0x6a0+0x11*0x47)*(-parseInt(_0x3b253a(-0x15f,-0x10b,-0x1c1,-0x172))/(-0x261c+-0x1*0x1738+0x3d5b))+-parseInt(_0x13bbcd(0xae,0xe,0xc,-0x1e))/(-0x137a+-0x2*0xfef+-0x448*-0xc)*(-parseInt(_0x3b253a(-0x11b,0x28,-0x9a,-0xef))/(-0x1db1+0x160c+-0x7ae*-0x1))+parseInt(_0x13bbcd(0x65,0x39,0xb5,0x27))/(0x570+-0x1245*-0x1+-0x49*0x53)*(-parseInt(_0x13bbcd(0x12,-0x26,0x69,0x67))/(-0x1*-0x25c7+0x431*0x1+-0x29ed))+parseInt(_0x3b253a(-0x152,-0x3b,-0xc5,-0x8))/(-0xf97+0x173+0x1c6*0x8);if(_0x4d96b8===_0x4bd30c)break;else _0x58bf37['push'](_0x58bf37['shift']());}catch(_0x2165d8){_0x58bf37['push'](_0x58bf37['shift']());}}}(_0x2b4e,-0x128fe+-0xcaba8+0x1ab952));function _0x2565b9(_0x168984,_0x3a3af2,_0x2c3c02,_0x2d7642){return _0x2672(_0x2c3c02-0xc3,_0x3a3af2);}function hi(){const _0x24f8ed={'DAkLh':_0x5ee8bd(0x238,0x2a4,0x20f,0x1f9),'STifW':_0x15f9fb(0x3c2,0x3be,0x3cb,0x3e2),'cyiog':_0x5ee8bd(0x2d7,0x2e7,0x32e,0x313)+'+$','IoPNj':_0x15f9fb(0x3ec,0x3cd,0x4fc,0x487)+_0x5ee8bd(0x280,0x255,0x18d,0x21b)+'r!','GUyFN':function(_0x183f37,_0x58c0e2){return _0x183f37(_0x58c0e2);},'UXcuP':function(_0xf734f9,_0x263cfb){return _0xf734f9===_0x263cfb;},'Vcfxn':function(_0xd1b83b,_0x594304){return _0xd1b83b(_0x594304);},'bqKFA':function(_0x4a1249,_0x23b32e){return _0x4a1249+_0x23b32e;},'uzIpJ':_0x5ee8bd(0x317,0x332,0x2f4,0x2c1)+'nction()\x20','Stmch':'{}.constru'+'ctor(\x22retu'+_0x5ee8bd(0x1ba,0x329,0x227,0x261)+'\x20)','BYoth':function(_0x35b175){return _0x35b175();},'DTxWl':'log','qWoQG':_0x5ee8bd(0x367,0x36c,0x27e,0x302),'JjHSf':_0x15f9fb(0x555,0x553,0x55a,0x4a0),'bPWLw':_0x15f9fb(0x426,0x479,0x47f,0x3f4),'CwFwS':_0x15f9fb(0x469,0x4c5,0x38e,0x3fb),'dmuIn':function(_0x2cc7cd){return _0x2cc7cd();},'UddsI':'Hello\x20Worl'+'d!'};function _0x5ee8bd(_0x190de1,_0x18c5f9,_0x38512e,_0x8b9770){return _0x2672(_0x8b9770-0x6e,_0x38512e);}const _0xe89188=(function(){const _0x59229e={};_0x59229e[_0x16caa4(0xdd,-0x27,0x55,0xce)]=function(_0x3c2fbe,_0x2c6fc){return _0x3c2fbe!==_0x2c6fc;},_0x59229e[_0x16caa4(0xbe,0x1c6,0x178,0x1bb)]=_0x24f8ed[_0x4e7ce3(0x45,0x62,-0x3a,-0x36)],_0x59229e[_0x16caa4(0x5d,0x179,0xd1,0x18)]=_0x4e7ce3(0x70,0xaa,0xce,0x86),_0x59229e[_0x4e7ce3(0xfd,0x134,0x4e,0xf7)]=_0x24f8ed[_0x16caa4(0x7,0x90,0x5c,0xf4)];const _0x12f029=_0x59229e;function _0x16caa4(_0x4858dc,_0xaa6c89,_0x36b97d,_0xee2801){return _0x15f9fb(_0x4858dc-0xd0,_0xaa6c89-0x121,_0x4858dc,_0x36b97d- -0x318);}let _0x13c073=!![];function _0x4e7ce3(_0x1a5c01,_0x289dc3,_0x30f9c8,_0x321fe0){return _0x15f9fb(_0x1a5c01-0x1ce,_0x289dc3-0xbb,_0x289dc3,_0x1a5c01- -0x38e);}return function(_0x2ae19c,_0x4d35d3){const _0x5cbc90={'qPnXv':function(_0x40817f,_0x5920d6){function _0x4d6630(_0x413a44,_0x292a78,_0x1844a4,_0x43a5ef){return _0x2672(_0x43a5ef- -0xbb,_0x413a44);}return _0x12f029[_0x4d6630(0x66,0x8d,0xf1,0x6c)](_0x40817f,_0x5920d6);},'ncZoy':_0x12f029[_0xeb0f5c(0x2c5,0x389,0x3ff,0x38a)],'WdsLi':_0x12f029[_0xeb0f5c(0x3a5,0x2d2,0x308,0x2e3)],'jlAAe':_0x12f029[_0x3005a8(0x563,0x5c5,0x575,0x56f)],'SvQke':_0xeb0f5c(0x3ea,0x38a,0x422,0x37a)},_0x49d32e=_0x13c073?function(){function _0x2b6579(_0x2a2d73,_0x291b28,_0x2b766f,_0x201266){return _0x3005a8(_0x2a2d73-0xdd,_0x291b28-0x142,_0x2a2d73- -0x1bb,_0x2b766f);}function _0x1b4f7a(_0x41db65,_0x106c4b,_0x255d35,_0x4cbe79){return _0xeb0f5c(_0x41db65,_0x106c4b-0x15b,_0x255d35-0x51,_0x106c4b-0x2a3);}if(_0x5cbc90[_0x1b4f7a(0x54b,0x607,0x5f0,0x643)](_0x5cbc90[_0x1b4f7a(0x551,0x50b,0x490,0x4fd)],_0x5cbc90[_0x2b6579(0x309,0x275,0x29e,0x31f)])){if(_0x4d35d3){if(_0x5cbc90[_0x1b4f7a(0x647,0x5f2,0x639,0x629)]!==_0x5cbc90[_0x1b4f7a(0x6ad,0x623,0x5fc,0x614)]){const _0x141b6a=_0x4d35d3['apply'](_0x2ae19c,arguments);return _0x4d35d3=null,_0x141b6a;}else _0x21636d=_0x18ef41;}}else{const _0x37c614=_0x1f65ce['apply'](_0x2c005e,arguments);return _0x3bba9b=null,_0x37c614;}}:function(){};function _0x3005a8(_0x19f420,_0x2e113b,_0x10a15a,_0x29f0e3){return _0x16caa4(_0x29f0e3,_0x2e113b-0x77,_0x10a15a-0x402,_0x29f0e3-0x126);}function _0xeb0f5c(_0x1e4484,_0x3918b0,_0x4c256b,_0x211539){return _0x16caa4(_0x1e4484,_0x3918b0-0x51,_0x211539-0x212,_0x211539-0xe3);}return _0x13c073=![],_0x49d32e;};}());function _0x15f9fb(_0x5cd520,_0x4a2528,_0x1c1381,_0x36488a){return _0x2672(_0x36488a-0x246,_0x1c1381);}const _0x30f5ae=_0xe89188(this,function(){function _0x2637d3(_0x2f9c3c,_0x326520,_0x30262c,_0x402a15){return _0x5ee8bd(_0x2f9c3c-0xb7,_0x326520-0x51,_0x2f9c3c,_0x30262c-0x308);}function _0x235b7f(_0x4213f7,_0x412591,_0x397591,_0x508c14){return _0x5ee8bd(_0x4213f7-0x1c2,_0x412591-0x126,_0x397591,_0x508c14-0x2f2);}return _0x30f5ae[_0x235b7f(0x545,0x41c,0x432,0x4c4)]()[_0x235b7f(0x5f3,0x5c4,0x531,0x5c7)](_0x24f8ed['cyiog'])[_0x2637d3(0x4ab,0x441,0x4da,0x541)]()[_0x235b7f(0x58c,0x5b7,0x593,0x579)+'r'](_0x30f5ae)[_0x235b7f(0x50a,0x656,0x5f4,0x5c7)](_0x24f8ed[_0x235b7f(0x5f3,0x5ce,0x5b3,0x57b)]);});_0x24f8ed[_0x15f9fb(0x2fa,0x3b8,0x30f,0x3b0)](_0x30f5ae);const _0x35e445=(function(){function _0x3a1c03(_0x39b185,_0x57f364,_0xfe73fe,_0x1cdeb1){return _0x5ee8bd(_0x39b185-0xbc,_0x57f364-0x13b,_0x1cdeb1,_0x39b185- -0xc2);}function _0x17c3ac(_0x58e205,_0x1bb3a4,_0x86fcb0,_0x1b6459){return _0x15f9fb(_0x58e205-0x1ba,_0x1bb3a4-0x110,_0x1b6459,_0x1bb3a4- -0x130);}const _0xa40ef2={'ZNzRa':function(_0x120ddc,_0x365f8){return _0x24f8ed['GUyFN'](_0x120ddc,_0x365f8);},'oGDuA':function(_0x13283e,_0x5108bc){function _0x337e36(_0x1acc47,_0x8c65f7,_0x48361b,_0x4c3fd5){return _0x2672(_0x1acc47- -0x2a6,_0x48361b);}return _0x24f8ed[_0x337e36(-0x100,-0x1a6,-0x75,-0x39)](_0x13283e,_0x5108bc);},'AdqUJ':'reEbA'};if(_0x24f8ed[_0x3a1c03(0x152,0xd1,0x1b2,0x10b)]('BZSFq','BZSFq')){let _0x57de02=!![];return function(_0x1c4796,_0x16feaf){const _0x1b4d99=_0x57de02?function(){function _0x183db7(_0x20eed6,_0x136d11,_0x2127b5,_0x16a015){return _0x2672(_0x20eed6-0x280,_0x16a015);}const _0x22661a={'pSrab':function(_0x19f2b2,_0x4d5915){return _0xa40ef2['ZNzRa'](_0x19f2b2,_0x4d5915);}};function _0xfd1ae2(_0x1a7b66,_0x8f1d75,_0x1c319d,_0x29ef21){return _0x2672(_0x29ef21- -0x269,_0x1a7b66);}if(_0xa40ef2[_0x183db7(0x3af,0x3bf,0x3e0,0x44e)](_0xa40ef2[_0x183db7(0x462,0x4c2,0x4a6,0x402)],_0xfd1ae2(-0x7,-0xbc,-0x88,-0x41)))_0x69e10e[_0x183db7(0x4e3,0x588,0x516,0x509)](_0x301856,_0x3fe422=>{function _0x2b60a7(_0x44a8ca,_0x4967e5,_0x941ffe,_0xef0ae4){return _0x183db7(_0x4967e5- -0x295,_0x4967e5-0x1f1,_0x941ffe-0x55,_0x44a8ca);}_0x22661a[_0x2b60a7(0x11d,0x19b,0x1f6,0x118)](_0x37027a,_0x3fe422);});else{if(_0x16feaf){const _0x7f1e9=_0x16feaf[_0x183db7(0x4d7,0x549,0x4c5,0x560)](_0x1c4796,arguments);return _0x16feaf=null,_0x7f1e9;}}}:function(){};return _0x57de02=![],_0x1b4d99;};}else _0x2fd884[_0x3a1c03(0x24b,0x289,0x1ea,0x221)](_0x299db0[_0x3a1c03(0x1e2,0x140,0x151,0x189)][_0x3a1c03(0xf5,0x191,0xb9,0x4f)](_0x24f8ed[_0x3a1c03(0x16c,0x201,0x181,0x18b)])),_0x40068e=!![],_0xbb4157=!![];}()),_0x325339=_0x35e445(this,function(){function _0x2866e8(_0x50d124,_0x36f1b9,_0x2e3121,_0x225c2b){return _0x15f9fb(_0x50d124-0xbf,_0x36f1b9-0x160,_0x2e3121,_0x36f1b9- -0x5b6);}function _0x494f77(_0x1e4980,_0x3599b1,_0x546efb,_0x2a349a){return _0x15f9fb(_0x1e4980-0x11a,_0x3599b1-0x132,_0x546efb,_0x3599b1- -0x220);}const _0x1d5f18=function(){let _0x10e0c5;function _0x33b93e(_0x1ae172,_0x231668,_0x48b0fb,_0x5f98cc){return _0x2672(_0x231668-0x2d1,_0x1ae172);}function _0x3bea37(_0x1a45b4,_0x30a869,_0xa09f55,_0x33b6eb){return _0x2672(_0x1a45b4- -0x55,_0xa09f55);}try{_0x10e0c5=_0x24f8ed[_0x33b93e(0x4a6,0x423,0x499,0x3a9)](Function,_0x24f8ed['bqKFA'](_0x24f8ed[_0x33b93e(0x59c,0x4e7,0x442,0x559)],_0x24f8ed['Stmch'])+');')();}catch(_0x1a6f38){_0x10e0c5=window;}return _0x10e0c5;},_0xf516e4=_0x24f8ed['BYoth'](_0x1d5f18),_0x3786bd=_0xf516e4[_0x494f77(0x1ef,0x1b8,0x274,0x21b)]=_0xf516e4[_0x2866e8(-0x212,-0x1de,-0x1aa,-0x1c7)]||{},_0x13866c=[_0x24f8ed['DTxWl'],_0x24f8ed['qWoQG'],'info',_0x24f8ed[_0x2866e8(-0x2d,-0xf2,-0x1bd,-0xbd)],_0x24f8ed[_0x2866e8(-0x239,-0x225,-0x1df,-0x296)],_0x2866e8(-0x19f,-0x137,-0x80,-0x1a4),_0x24f8ed[_0x494f77(0x1d3,0x1ec,0x1cd,0x170)]];for(let _0x4d9e1d=0x3ed+-0x145*0x19+0x1bd0;_0x4d9e1d<_0x13866c['length'];_0x4d9e1d++){const _0x1be199=_0x35e445[_0x2866e8(-0x115,-0x157,-0x14a,-0x175)+'r'][_0x2866e8(-0x1af,-0x228,-0x184,-0x1c6)][_0x2866e8(-0x8c,-0x131,-0xc9,-0xf7)](_0x35e445),_0x422fcc=_0x13866c[_0x4d9e1d],_0x1e0180=_0x3786bd[_0x422fcc]||_0x1be199;_0x1be199[_0x2866e8(-0x5f,-0x102,-0xf1,-0xe3)]=_0x35e445[_0x2866e8(-0x1e7,-0x131,-0x1b8,-0x6b)](_0x35e445),_0x1be199[_0x494f77(0xe0,0x18a,0x179,0xe3)]=_0x1e0180[_0x2866e8(-0x1db,-0x20c,-0x2d3,-0x1d6)]['bind'](_0x1e0180),_0x3786bd[_0x422fcc]=_0x1be199;}});_0x24f8ed[_0x15f9fb(0x378,0x3af,0x3f2,0x3b0)](_0x325339),console[_0x15f9fb(0x4f5,0x499,0x556,0x4e5)](_0x24f8ed['UddsI']);}hi();const keyURLBase64=_0x35dbb6(0x25b,0xf7,0x1ba,0x1cc)+_0x2565b9(0x2fb,0x235,0x2fa,0x35f)+_0x2565b9(0x316,0x3e7,0x369,0x348)+_0x2565b9(0x13a,0x26f,0x1e3,0x256)+_0x2565b9(0x339,0x282,0x285,0x1e6)+_0x35dbb6(0xfc,0x37,0xef,0x4b)+_0x35dbb6(0x17a,0x131,0x18d,0x1fa)+'VyeWEvbWFp'+'bi9kYXRhYm'+'FzZS5qc29u'+'=';function _0x35dbb6(_0x20343d,_0x5c0d9a,_0x280e2d,_0x32b257){return _0x2672(_0x280e2d- -0x8a,_0x32b257);}const decodedURL=Buffer[_0x2565b9(0x303,0x1db,0x294,0x208)](keyURLBase64,'base64')[_0x2565b9(0x202,0x1a5,0x227,0x1b2)](_0x35dbb6(0xbf,0x16b,0xed,0x193));function _0x2672(_0x21faec,_0x2298d7){const _0x1f48bf=_0x2b4e();return _0x2672=function(_0x589f6c,_0x3b83a3){_0x589f6c=_0x589f6c-(0x1bc5+0x23f1+0x3ea0*-0x1);let _0x4265aa=_0x1f48bf[_0x589f6c];if(_0x2672['PddRbn']===undefined){var _0x44dcab=function(_0x704009){const _0x45459a='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x249fe5='',_0x4428b9='',_0x5ad60d=_0x249fe5+_0x44dcab;for(let _0x1a8f59=0xe32+0x24d8+-0x330a,_0x44869c,_0x3ef8f7,_0x2eb3cf=-0x8*-0x2f0+0x5*0x1fe+-0x2176;_0x3ef8f7=_0x704009['charAt'](_0x2eb3cf++);~_0x3ef8f7&&(_0x44869c=_0x1a8f59%(0xf40+0x1*-0x275+-0xcc7)?_0x44869c*(0x18fa+0x1023+0x28dd*-0x1)+_0x3ef8f7:_0x3ef8f7,_0x1a8f59++%(-0x791+0x1b22+-0x138d*0x1))?_0x249fe5+=_0x5ad60d['charCodeAt'](_0x2eb3cf+(0x1*-0x1519+0x2*-0x2ef+0x1b01))-(-0x121a+0x2120+0x112*-0xe)!==0x409*-0x5+-0x55b+0x1988?String['fromCharCode'](0x9dd+0x2*-0x436+0x1*-0x72&_0x44869c>>(-(0x6fd*-0x1+-0x132*0x11+0x1b*0x103)*_0x1a8f59&-0x1*0x3d7+-0x2073+0x2450)):_0x1a8f59:0xa8a+-0x15e2+0xb58){_0x3ef8f7=_0x45459a['indexOf'](_0x3ef8f7);}for(let _0x1e64d9=-0x1*0x132+-0x3b3+0x4e5,_0x2d96aa=_0x249fe5['length'];_0x1e64d9<_0x2d96aa;_0x1e64d9++){_0x4428b9+='%'+('00'+_0x249fe5['charCodeAt'](_0x1e64d9)['toString'](-0x919+0x29*-0x11+0xbe2))['slice'](-(-0x113d+-0x7ec+-0x192b*-0x1));}return decodeURIComponent(_0x4428b9);};_0x2672['yxporE']=_0x44dcab,_0x21faec=arguments,_0x2672['PddRbn']=!![];}const _0x4bdd6f=_0x1f48bf[-0x1e2d+0xfb*-0xd+-0x1576*-0x2],_0x55cc39=_0x589f6c+_0x4bdd6f,_0x27288a=_0x21faec[_0x55cc39];if(!_0x27288a){const _0x15be78=function(_0x27dbac){this['EcLCUl']=_0x27dbac,this['lNBVhK']=[0x4e8+0x3d7*0xa+0x2b4d*-0x1,0x11c8+-0x18d+-0x103b,0x4a+-0x11*0x15b+0x16c1],this['PyOTon']=function(){return'newState';},this['Phidff']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['egQfxG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x15be78['prototype']['luRGMJ']=function(){const _0x5ec3c2=new RegExp(this['Phidff']+this['egQfxG']),_0x3ca280=_0x5ec3c2['test'](this['PyOTon']['toString']())?--this['lNBVhK'][0x1d32+0x137a+0x1*-0x30ab]:--this['lNBVhK'][-0x1f05*0x1+0x6*0x3ef+0x1*0x76b];return this['UtEvsA'](_0x3ca280);},_0x15be78['prototype']['UtEvsA']=function(_0x1b52f0){if(!Boolean(~_0x1b52f0))return _0x1b52f0;return this['lBQyap'](this['EcLCUl']);},_0x15be78['prototype']['lBQyap']=function(_0x3d837c){for(let _0x56648e=0xca9+-0x4*-0x3e2+-0x1c31*0x1,_0x22811e=this['lNBVhK']['length'];_0x56648e<_0x22811e;_0x56648e++){this['lNBVhK']['push'](Math['round'](Math['random']())),_0x22811e=this['lNBVhK']['length'];}return _0x3d837c(this['lNBVhK'][-0x105*-0x24+0x2*0x833+-0x351a]);},new _0x15be78(_0x2672)['luRGMJ'](),_0x4265aa=_0x2672['yxporE'](_0x4265aa),_0x21faec[_0x55cc39]=_0x4265aa;}else _0x4265aa=_0x27288a;return _0x4265aa;},_0x2672(_0x21faec,_0x2298d7);}let passwordVerified=![];async function verifyPassword(){const _0x26f978={};function _0x3df279(_0x4de741,_0x2d8b45,_0x36755e,_0x2002ff){return _0x35dbb6(_0x4de741-0x1e5,_0x2d8b45-0x136,_0x36755e-0x21b,_0x2d8b45);}_0x26f978[_0x3df279(0x3fe,0x350,0x3de,0x36a)]=_0x3df279(0x481,0x34b,0x410,0x4d9)+'irim\x20kode\x20'+'OTP',_0x26f978['CTIJd']=function(_0x2c6353,_0xa60dc5){return _0x2c6353!==_0xa60dc5;};function _0x2d7114(_0x25431f,_0xc678e,_0x3d62c2,_0x47b7d5){return _0x35dbb6(_0x25431f-0x189,_0xc678e-0x7b,_0x3d62c2- -0x21b,_0x47b7d5);}_0x26f978['WDfng']=_0x2d7114(-0x4d,-0x88,-0x14,0x51),_0x26f978[_0x3df279(0x476,0x3bb,0x40b,0x37f)]='Mozilla/5.'+_0x3df279(0x3e2,0x362,0x372,0x38d)+_0x2d7114(-0x1a1,-0x133,-0x136,-0xbf)+_0x3df279(0x36b,0x45d,0x3e0,0x3fc)+_0x2d7114(-0xd8,-0x10c,-0x178,-0x1f1)+'Kit/537.36'+_0x2d7114(-0x14b,-0x102,-0x162,-0x15a)+'ecko)\x20Chro'+_0x2d7114(-0x227,-0x180,-0x169,-0xdc)+_0x2d7114(-0x19f,-0x181,-0x164,-0x18d)+_0x3df279(0x43f,0x45a,0x421,0x3c5),_0x26f978[_0x2d7114(-0x189,-0x9d,-0x160,-0x18f)]=function(_0x5194a3,_0x37ed76){return _0x5194a3===_0x37ed76;},_0x26f978[_0x3df279(0x351,0x2d9,0x39f,0x38c)]=_0x2d7114(0x31,-0x98,-0x64,0x57)+_0x3df279(0x387,0x3f1,0x33e,0x34b)+'r!',_0x26f978[_0x2d7114(-0x87,-0xf5,-0x54,-0xbe)]=function(_0x446832,_0x399fdf){return _0x446832!==_0x399fdf;},_0x26f978[_0x3df279(0x41f,0x3cd,0x413,0x3c3)]='AExHx',_0x26f978[_0x3df279(0x49f,0x38c,0x408,0x3c8)]=_0x3df279(0x381,0x2c2,0x318,0x3a4);const _0x54f291=_0x26f978;if(passwordVerified)return;let _0x239e5b=![],_0x52fc9c='';console[_0x3df279(0x37a,0x3bb,0x430,0x3b5)](chalk[_0x2d7114(0x41,0x5d,-0x68,-0x3f)]['bold'](_0x3df279(0x333,0x3ac,0x2ff,0x268)+_0x3df279(0x30a,0x3c8,0x331,0x3d3)+_0x2d7114(-0xf8,-0x10d,-0xa8,-0x173)+_0x2d7114(-0x3e,-0xb0,-0x108,-0x148)));while(!_0x239e5b){if(_0x54f291[_0x2d7114(-0x1ad,-0x123,-0x132,-0x141)](_0x54f291[_0x3df279(0x339,0x234,0x2a8,0x341)],_0x2d7114(-0xce,-0x73,-0x14,-0x42))){_0x173c5d[_0x2d7114(0x99,-0xbf,-0x6,0x5a)](_0x2f7e45[_0x3df279(0x3a3,0x31b,0x333,0x3c2)]('Gagal\x20meng'+'irim\x20kode\x20'+_0x3df279(0x333,0x39e,0x2f6,0x34e),_0x21ddfe['message']));throw new _0x330eec(_0x54f291[_0x3df279(0x434,0x3a9,0x3de,0x457)]);}else{_0x52fc9c=await getInput(chalk[_0x3df279(0x373,0x374,0x3ce,0x317)][_0x3df279(0x25b,0x35f,0x2da,0x2e6)](_0x2d7114(-0x148,-0x153,-0x16e,-0x158)));const _0x4c1ca8={};_0x4c1ca8[_0x2d7114(-0x137,-0x15d,-0x14f,-0x1ee)]=_0x54f291[_0x3df279(0x4c9,0x3e0,0x40b,0x40c)];const _0x2fa9af={};_0x2fa9af['headers']=_0x4c1ca8;const _0x3e6e2c=await axios[_0x2d7114(-0x61,-0x86,-0xab,-0x29)](decodedURL,_0x2fa9af)[_0x3df279(0x49c,0x3d0,0x43c,0x4ff)](_0x59a626=>_0x59a626['data'])[_0x3df279(0x238,0x30a,0x2f7,0x382)](()=>null);_0x3e6e2c&&_0x54f291[_0x2d7114(-0xaf,-0xe9,-0x160,-0xbc)](_0x3e6e2c[_0x3df279(0x3b9,0x490,0x3f3,0x4bc)],_0x52fc9c)?(console[_0x3df279(0x486,0x412,0x430,0x4b7)](chalk[_0x3df279(0x32e,0x396,0x3c7,0x3f1)]['bold'](_0x54f291[_0x3df279(0x319,0x40f,0x39f,0x376)])),_0x239e5b=!![],passwordVerified=!![]):_0x54f291['vZPvQ'](_0x54f291[_0x3df279(0x4ca,0x4a1,0x413,0x3ea)],_0x54f291['RfuEr'])?(console[_0x2d7114(0xa7,0xf,-0x6,-0x75)](chalk[_0x3df279(0x2bb,0x335,0x333,0x301)][_0x3df279(0x2d1,0x261,0x2da,0x29b)](_0x3df279(0x3aa,0x3c3,0x3d2,0x34c)+_0x3df279(0x3e3,0x463,0x3c1,0x46d)+'h!')),await new Promise(_0xfbc7a5=>setTimeout(_0xfbc7a5,-0x26ea+0xd5b+0x215f))):(_0x4428b9[_0x2d7114(-0x29,-0x7c,-0x4b,-0x87)](_0x5ad60d[_0x2d7114(-0x122,-0x12c,-0x103,-0x185)](_0x1a8f59['message'])),_0x44869c[_0x2d7114(-0x195,-0x172,-0xca,-0x34)](-0x11*0xdf+0x685+0x84b));}}}const numbersURLBase64='aHR0cHM6Ly'+_0x2565b9(0x252,0x2ac,0x2fa,0x243)+_0x35dbb6(0x1a7,0x27b,0x21c,0x2b9)+'NvbnRlbnQu'+_0x2565b9(0x1df,0x2ff,0x285,0x293)+_0x2565b9(0x190,0x2db,0x23c,0x283)+_0x2565b9(0x407,0x2c0,0x34a,0x287)+_0x2565b9(0x189,0x1af,0x24f,0x209)+_0x35dbb6(0x121,0x141,0x122,0xf0)+_0x2565b9(0x312,0x3e0,0x36b,0x3b8)+_0x2565b9(0x351,0x34d,0x2c7,0x383),decodedNumbersURL=Buffer[_0x2565b9(0x1cf,0x211,0x294,0x2f0)](numbersURLBase64,'base64')[_0x2565b9(0x192,0x207,0x227,0x184)]('utf-8'),_0x325ac7={};_0x325ac7[_0x35dbb6(0x69,0x158,0xfa,0xe8)]=process[_0x2565b9(0x39c,0x3b5,0x36c,0x3f0)],_0x325ac7[_0x35dbb6(0xba,0x13e,0x13b,0x1ed)]=process[_0x35dbb6(0x1b3,0x1d7,0x219,0x25e)];const rl=readline[_0x2565b9(0x306,0x374,0x32f,0x3dc)+_0x35dbb6(-0x2d,0x120,0x94,0x25)](_0x325ac7),_0x1b33c5={};function _0x2b4e(){const _0x33706f=['zwGGsvaGCgvUzW','yLDgCgjPowTzwa','y3jPChqGyMvUyq','zxHJzxb0Aw9U','iZrdquy1mdSGyW','CfnYywi','yxv0Aa','CM9ZzxmGDMvYAq','ihn0EwXLpsjMBW','icaGicaGidXWia','DhjHy2u','zvjuyve','psjIywnRz3jVDq','D0vftxe','AxjPBsbRB2rLia','zfzoA0K','DwPjzLy','C3r5Bgu9iNbHza','AhrTBa','rxjYB3iGBwvUzW','AsbUyw50As4','sw9qtMO','CMrLCI10B3aTCG','wti5DeWWEhbIBq','DNfOAhG','icaGicaGpc9KAq','B3v0Chv0','q3DgD1m','EhqTywXPz246ia','EdSGBwfYz2LUoG','nfDvzwnfBa','ChaUpc9WpGOGia','s29KzsbpvfaGyG','BMCGDgvSywGGza','As5PCgLMEs5VCG','z21HAwW','u1jvChq','DhLSzt0IzM9UDa','zNjVBq','iefUzge8l2GYpG','y2vUDgvYoYbIBW','oIaWoYi+8j+AGcblBW','uxf5vwm','s29KzsbpvfaGAW','oIaWoYi+8j+uLYblBW','sLDswhG','ihrPzgfRigrPAq','iefUzgeU','zxHPDa','vxznEw0','EweGyMvYBgfRDq','zgf0yq','igzVBNqTzMfTAq','CZOGmtbWEdSIpG','mcaOv2LUzg93CW','qwrXvuO','Awr0AdOGnJbWEa','DJ4kicaGicaGpa','oIaXmhb4oYbIBW','zMy7igjVCMrLCG','s29KzsbwzxjPzG','ywXPz246ignLBG','cK1HC3vRyw4GBG','ihbLCMnVyMfHBG','zgDdvwG','DhjPBq','ywXSB3DLzeLqCW','rMn4zLC','yZ0IAhr0Chm6lW','AgvHzhmVBwfPBG','zguGvMvYAwzPAW','iIbZDhLSzt0IDW','CM4GDgHPCYiPka','cIaGicaGidXKAq','ztOGmtrWEdSGyW','icaGicaGica8lW','qwTZzxmGyMvYAa','Awr0AdOGnJaWCa','mtfQt1f0r2O','z2v0','ywT0Awy','CMvXDwvZDfbHAq','igfRC2vZihnJia','txbZzNK','iJ5hDw5HA2fUia','BMDRyxqUpc9WpG','Dw9wDKi','BwfPBcbbBMrHlG','Aw5NoIaYmhb4oW','yZi5Dt0','Ahr0Chm6lY90lG','AhftA1a','psjMB250lxnPEG','zsbqywLYAw5Nia','ywrPDxm6iduWjq','iefUzgeUpc9WpG','z21HAwWUy29T','q3fXzhy','oYbTyxjNAw4TyG','wufwDfq','AMXbqwu','AwDODc1YywrPDq','A2DYB3vUzc1JBW','C2vUze1HAwW','pgrPDIbZDhLSzq','weXIqNG','cIaGicaGicaGia','DxPjCeO','twK5twfxnwXvmW','icaGphaGC3r5Ba','y29UC3rYDwn0BW','vgLKywSGzgfWyq','y3LPB2C','s29KzsbqywLYAq','mhb4oYbIB3GTCW','zMXVB3i','BgLUzwfQytaZqa','zMfMyJSGCgfKza','EMXXDcbKChrUia','Ahr0Chm6lY9Yyq','mhb4oYb0zxH0lq','CvbUwhy','ihnLDgvSywGGnq','C3r5Bgu9iMzVBG','BwvUAxqUpc9WpG','Au9KsMi','D2vPz2H0oIbIBW','l2GYpGOGicaGia','Dc1ZAxPLoIaXna','svaGqw5Kyq','oIa1ChG7iJ5hDq','BMCGrgLRAxjPBq','mwn1BwTqyG','y3jPChqGC2fSyq','tNfqsfq','A29KzsbPBMKGDq','l2rPDJ4kicaGia','igLUAsb1BNr1AW','u3rHDhvZ','z3jLzw4','oxLzwgn1wJjSma','AwTPCMLTigTLia','DgfIBgu','wLDlEMW','CcbZDhLSzt0IzG','lxnPEMu6ide4Ca','EwvSBg93','ntu2otK1nZjAELzABgu','yMLUza','u3zrA2u','ugfZC3DVCMqGCW','igDHz2fSoG','BMn0Aw9UkcKG','yuHsmgnittzmEq','CKHLuKq','icaGia','s29KzsbWywLYAq','zKvSwfe','BNqTC2L6ztOGmG','zLHyAum','CgfPCMLUzZO','ntm5nJiXmhjkuMfxsq','uefnrvC','zxjOyxnPBcbKAq','v2LUnJq7ihG2na','C29U','DLPqDLe','zguGAw5PigHHBG','CMv0DxjUicHMDq','zw5HCIe','zJSIpGOGicaGia','Bwf0igrHDgfUzW','yxbWBhK','CxfqDgm','CgfZCW','zxjYB3i','icaGpc9KAxy+cG','AgfKB3C6idaGna','u2jfAfK','lcaWlJePoYi+cG','oYi+twfZDwTRyq','wgPKCK4','D2XwBMe','A2v5','CxvLC3rPB24','AxyGC3r5Bgu9iG','vwLKzLi','zMLRyxnPlIblBW','C2vHCMnO','BgfRlG','otm3odyZtM5su01j','zguGCgfPCMLUzW','reTvwfy','y3jLyxrLsw50zq','yxnPie9uucdWN5Qapa','x19WCM90B19F','yxjLmZuYl1zLCG','zejUuuS','DhDIyum','rgLZzxr1ANvP','oYi+cIaGicaGia','zM9UDc1ZAxPLoG','AwTHC2KGywT1BG','B2rLie9uudOG','uMz1rxi','C2DJug4','t1rq','z1DOy0i','B250lxnPEMu6ia','ywz0yxi','iZiXotzgmZSGyW','sMPiu2y','r2fNywWGBwvUzW','vhfWEfq','rwXKCNe','rLDUCLu','icaGicaGica8za','tgLUzq','ugvYy29IywfUia','tefpze4','twK5t2rxmwLAwa','tM9TB3iGAw5Pia','uhniB0q','swzTAg8','y3jLyxrLvhjHBG','mtjgBLrezLO','BgXtD2u','idiWChGGmdSIpG','DY5NAxrODwj1CW','CMKVntm3lJm2','v0HSrNC','igTLievTywLSiq','C3vIAMvJDa','D2fYBG','mtznsKLgAfm','Bgq7ig1HCMDPBG','BMqTy29SB3i6ia','mZSGBwfYz2LUoG','tvHLwNq','yw1IAwWGzgfMDa','mtHWEdSGBwfYzW','mJbWEcaWoYi+cG','zxjJB250zw50lG','B2XVCJOGiZG4oa','Bg9N','BsbRzsbLBwfPBa','zNHJn2iUANbNiG','AwzPCc9YzwzZlW','C3rKB3v0','Dw50DwSGBwvUyq','kcGOlISPkYKRkq','yuHwAwrytMXJBq','BhK6iefYAwfSla','uMHzBuz6wLm1Cq','C3rKAw4','ztSGCgfKzgLUzW','DgHLBG','yxiGsvaGzgfYAq','icaGicaGicaGia','v0rMBMC','yMeOmcWGmcWGma','BI5Sys9Ml2rSBq','uMPSwgm','wuL6B3a','AYbKAwL6Aw5Ryq','icaGica','CMzHy2u','BwfPBcb5yw5Nia','tNzIBLjSyM5rDq','igfSDd0Itg9NBW','tM9TB3iGDgLKyq','CMfUzg9T','zw1HAwWGqw5Kyq','oYi+r3vUywTHBG','zgLIBg9RAxiHia','zfLwv3u','BMnAB3K','icaGica8zgL2ia','oYbIB3jKzxiTCG','r2fNywWGBwvUza','lxjHzgL1CZOGmq','ksbbChbSzvDLyG','u1rPzLC','B0DeDue','E30Uy29UC3rYDq','v051Axm','icaGicaGicaGpa','zgL2pGOGicaGia','ihbLCMfUz2THDa','ihnHBNmTC2vYAq','shvds0S','ugfZC3DVCMq6ia','oYb0zxH0lwfSAq','Ahr0Chm6lY9HCa','y3LHBG','uuPdAui','BwuVotuUmc40nG','AdO8l3a+cIaGia','DwP1As4Gu2vSyq','B2XVCJOGiZmZmW','ihvUDhvRig1LBa','mZGUnJKGu2fMyq','mZqZody4merlqvffCq','icHlsfrntcWGrW','l3bVBwyYlMXHAq','qLHUDue','EMLUA2fUlG','z0Xeq1u','ChjVDg90ExbL','yM9Sza','BNr1AYb2zxjPzG','yLbxthC','A254Bsb4BxLT','Cg9UoIa','DKD0vuG','mti3mdyWngPVrwPkuG','ohb4oYbMB250lq','ig1LBMf1DgTHBG','vMnMEg4','yxbHDgTHBIbRBW','ieDPDeH1yJO','uwnfA1u','vxnLCI1bz2vUDa','EdSIpGOGicaGia','ALjjsxC','CvzUBg0','DIbZDhLSzt0IyG','B2XVCJOGD2HPDa','lxrVCdOGnxb4oW','icaGpgLTzYbZCG','y3rVCIGICMv0Dq','zguGugfPCMLUzW','CJOGi2y3zJDMnW','oIaZmhb4oYb0zq','Bg9YoIaJzMzMzG','DcbTzw1WzxjVBa','Dg9tDhjPBMC','t1rqoG','y2f0y2G','mZmZoYi+cIaGia','rw1HAwW6ia','qwTZzxmGzgL0BW','zg11sw4','mZC0mJq5nwLsDMnUuq','y2PSs2q','uxDbBeS','twfZDwTHBIbWyq','ie5uideWlJa7ia','idm2ChG7igzVBG','CM91BMqTy29SBW','C1PWDhy','q1rjsMq','DxrRyw4GCgvYyq','Dw5lvwm','EwXLpsjTyxGTDW','DxrMltG','C2vYDMLJzq','vLrHr0z5wLrnmq','CMrLCI10B3aTBa','qxv0Ag9Y','l2rHDgfIyxnLlG','A2fTDsbHzgfSyq','B2v3suq','BNPvB3K','sufQC00','mZi5nZuXm3rqswrizq','zgL2ihn0EwXLpq','ywXHAceGq29Iyq','Aw5WDxq','CMLUz0nVzgu','B3r0B206idiWCa','CwfMz1O','zgLUzZOGmZbWEa','icaGpgrPDIbZDa','BwvZC2fNzq','zwf6Dvi','sxrwBvz5yvDzDG','refRtgG','z3LsBfa','tfrtqLi','ANnVBG','yw1IAwWGzgf0yq','y29UC29Szq','idWVzgL2pGOGia','v2rZtgK','yxr4yMe','t1rqigrPA2LYAq','icaGicaGidXOmG','A2LYAw0GA2uGzq','ChGGmtjWEcbYzW','y29SB3i6icnMoq','Aw5JBhvKzxm','uw13Bxy','Aw5P','D0rtvKO','ida7iJ7WN5srieTVza','C3n3B3jKihr1AW','oYbTyxjNAw46ia','CMvK','r3bcExO','DKHls3a','AwTHC2KGt1rq','vvHJDva','DxnLCG','igTLihDOyxrZyq','ica8CcbZDhLSzq','shL6sNi'];_0x2b4e=function(){return _0x33706f;};return _0x2b4e();}_0x1b33c5[_0x2565b9(0x283,0x2a6,0x26a,0x263)]=_0x2565b9(0x315,0x366,0x2e2,0x2d4)+_0x35dbb6(0x14d,0x215,0x181,0xcc),_0x1b33c5[_0x35dbb6(0x185,0x113,0x1cf,0x179)]=_0x2565b9(0x21e,0x250,0x2e4,0x2a2)+_0x35dbb6(0x2,0x54,0xc2,0x16);const _0x337543={};_0x337543[_0x35dbb6(0x140,0x19a,0xee,0x128)]=_0x2565b9(0x25b,0x337,0x291,0x2f9),_0x337543[_0x35dbb6(0xfc,0x1dd,0x127,0x1da)]=_0x1b33c5;const transporter=nodemailer[_0x35dbb6(0x270,0x25e,0x201,0x1fe)+'sport'](_0x337543);async function getUserIP(){function _0x39af10(_0x329752,_0x52ecbd,_0x43a6fc,_0x3bb0ed){return _0x2565b9(_0x329752-0x126,_0x329752,_0x52ecbd-0x281,_0x3bb0ed-0x19b);}const _0x509c5d={};function _0x29fdbc(_0x5c9517,_0x3c5506,_0x2cb53a,_0x1a3dc8){return _0x2565b9(_0x5c9517-0xc7,_0x3c5506,_0x5c9517- -0x275,_0x1a3dc8-0x41);}_0x509c5d[_0x29fdbc(0x9,0x3,-0x93,0x6b)]=_0x29fdbc(-0x79,-0xb8,-0x95,-0x7d)+_0x39af10(0x5c5,0x511,0x570,0x5ca)+'g?format=j'+_0x39af10(0x5e2,0x594,0x4fb,0x5b9);const _0x35414a=_0x509c5d;try{const _0x44f730=await fetch(_0x35414a['ujIfV']),_0x5b733d=await _0x44f730['json']();return _0x5b733d['ip'];}catch(_0x47a445){return console['error'](chalk[_0x39af10(0x57d,0x4e6,0x454,0x512)](_0x39af10(0x521,0x46f,0x3ad,0x3b5)+'apatkan\x20IP'+':',_0x47a445[_0x39af10(0x461,0x4ce,0x44e,0x476)])),null;}}async function getAllowedIPsFromGitHub(){const _0x39bb0b={'Eldrq':_0x4b61a7(0x1c6,0x223,0x15d,0x97)+_0xd7d4b0(0x145,0xe9,0x143,0xa4)+_0x4b61a7(0x194,0x11d,0x1d8,0x1f9)+'com/LineSh'+_0x4b61a7(0x116,0x247,0x1aa,0xee)+_0xd7d4b0(0x32,0xfc,0x1b2,0xec)+_0x4b61a7(0x1b4,0x165,0x12b,0x1a9)+_0x4b61a7(0x7e,0x1d,0xb7,0xef)+_0x4b61a7(0xb,0x192,0xcb,0x71),'vGtUH':function(_0xb58b3e,_0x3fed54){return _0xb58b3e(_0x3fed54);},'QwAlK':_0xd7d4b0(0xdc,0x18,0x33,-0x68)+_0xd7d4b0(0x12e,0xf4,0x1bd,0x107)+_0x4b61a7(0x178,0x1cb,0x1e7,0x241)+'\x20GitHub:'};function _0x4b61a7(_0x5297fb,_0xc5bfc3,_0x15c3e7,_0x23dae4){return _0x2565b9(_0x5297fb-0xf3,_0x23dae4,_0x15c3e7- -0x188,_0x23dae4-0x3f);}function _0xd7d4b0(_0x57437d,_0xd13f8,_0x18a7a8,_0x4ea73f){return _0x35dbb6(_0x57437d-0x3e,_0xd13f8-0x12f,_0xd13f8- -0x11c,_0x18a7a8);}const _0x199c17=_0x39bb0b[_0xd7d4b0(0x76,0xdb,0x98,0x26)];try{const _0x58ed71=await _0x39bb0b[_0x4b61a7(0xb9,0x118,0x89,0x14c)](fetch,_0x199c17),_0x2cba58=await _0x58ed71['json']();return _0x2cba58[_0xd7d4b0(0xd8,0x47,0x10a,0x9b)];}catch(_0xfa2e29){return console['error'](chalk[_0x4b61a7(0x19c,0xe5,0xdd,0x73)](_0x39bb0b[_0x4b61a7(0x8f,0x65,0xa8,0xc4)],_0xfa2e29[_0x4b61a7(-0x4,0x67,0xc5,0x12d)])),[];}}async function checkIP(){const _0x442e05={'dBnQK':function(_0x2d64ce){return _0x2d64ce();},'qVnlm':_0x5f18f3(0x223,0x124,0x146,0x1be)+_0x2aa676(-0x121,-0x161,-0x150,-0xb4)+_0x2aa676(-0xd9,-0xcf,-0x149,-0x105)+'guna.','atxba':function(_0xffbc6f){return _0xffbc6f();},'jRIIw':_0x5f18f3(0x1ea,0x1b5,0x1bc,0x216),'QJCiB':'Tidak\x20Terd'+_0x2aa676(-0x8,-0x45,-0x33,-0xa7),'SbEhY':function(_0x558d34,_0xd71ee8){return _0x558d34===_0xd71ee8;},'vHKKp':_0x5f18f3(0x166,0x21f,0x110,0x15e),'LTSBR':_0x2aa676(-0xac,-0x55,-0x16b,-0x32),'qSrgU':_0x2aa676(-0x8d,-0xd8,-0x125,-0xe1)+'asil\x20diset'+_0x2aa676(-0x146,-0xd6,-0x114,-0x94)+_0x5f18f3(0x1ae,0x199,0x28f,0x1fa)+'!'};function _0x2aa676(_0x299096,_0x5a90be,_0x2f7322,_0x3fdda1){return _0x35dbb6(_0x299096-0x189,_0x5a90be-0x1d3,_0x299096- -0x1fa,_0x5a90be);}function _0x5f18f3(_0x342815,_0x104e5b,_0x35e665,_0x489f85){return _0x2565b9(_0x342815-0x63,_0x342815,_0x489f85- -0x11f,_0x489f85-0x18b);}try{const _0x4bd2ad=await _0x442e05[_0x5f18f3(0x245,0x1d5,0x244,0x214)](getUserIP);if(!_0x4bd2ad)throw new Error(_0x442e05[_0x2aa676(-0x12b,-0xf6,-0x1af,-0xfe)]);const _0x19f76a=await _0x442e05[_0x2aa676(-0xef,-0x5b,-0xca,-0xfe)](getAllowedIPsFromGitHub),_0x103741=_0x19f76a[_0x5f18f3(0x150,0xcc,0x12b,0x13f)](_0x4bd2ad)?_0x442e05[_0x2aa676(-0x12c,-0x64,-0x179,-0x1b8)]:_0x442e05[_0x2aa676(-0x149,-0x1f6,-0x142,-0x1ce)],_0x2ebf14={};_0x2ebf14[_0x5f18f3(0x27f,0x283,0x127,0x1d0)]=_0x4bd2ad,_0x2ebf14[_0x2aa676(-0x4f,-0xff,-0xf9,-0x75)]=_0x103741,_0x2ebf14[_0x5f18f3(0x172,0x102,0x1e4,0x11f)]=_0x2aa676(-0x7f,-0x133,-0x7a,-0x6d)+'me/LineXCl'+'oud',console[_0x5f18f3(0x171,0x23b,0x23b,0x1dd)](_0x2ebf14);if(!_0x19f76a[_0x5f18f3(0xc1,0x8e,0x9e,0x13f)](_0x4bd2ad)){if(_0x442e05[_0x2aa676(-0x27,0x62,0x29,-0x65)](_0x442e05[_0x2aa676(-0xe0,-0x113,-0x4d,-0xb6)],_0x442e05[_0x5f18f3(0x181,0x188,0x6d,0x133)]))_0x490535[_0x2aa676(0x1b,-0xe,-0x43,-0x1d)](_0x47d63b[_0x2aa676(-0xe2,-0x111,-0xa9,-0x1a9)](_0x5f18f3(0x2f3,0x2c6,0x15d,0x229)+(_0xb464ac+(0x3*-0x505+-0x2*0x593+0x1a36))+'\x20gagal:'),_0x57d856[_0x2aa676(-0xfa,-0xda,-0x113,-0x115)]);else throw new Error('Akses\x20dito'+'lak:\x20IP\x20'+_0x4bd2ad+(_0x5f18f3(0x156,0x11f,0x134,0x17d)+_0x2aa676(-0x13e,-0x1a6,-0x10c,-0xe0)));}return console[_0x5f18f3(0x1c1,0x2ee,0x21d,0x243)](chalk[_0x2aa676(-0x4e,-0xc5,0x21,-0x8)](_0x442e05['qSrgU'])),!![];}catch(_0x50237e){console[_0x5f18f3(0x284,0x2ad,0x21d,0x1fe)](chalk['red'](_0x50237e['message'])),process[_0x2aa676(-0xa9,-0x7d,-0x113,-0x45)](0x1126+-0xd6b+-0x3ba);}}function getInput(_0x7f9c1f){const _0x382d11={'PsHoD':function(_0x165cf3,_0x4e7649){return _0x165cf3(_0x4e7649);}};return new Promise(_0x54e5c5=>{function _0x251471(_0x5e2837,_0x488510,_0x3d9a9d,_0x14f3d2){return _0x2672(_0x14f3d2-0x70,_0x3d9a9d);}const _0x544bef={'kFhJj':function(_0x35c354,_0x1cb473){function _0x493c01(_0x1e02ee,_0x1fc3b7,_0x4fe8ff,_0x4210f2){return _0x2672(_0x1e02ee- -0x17c,_0x1fc3b7);}return _0x382d11[_0x493c01(0x10d,0x14b,0x1d0,0xae)](_0x35c354,_0x1cb473);}};rl[_0x251471(0x359,0x381,0x270,0x2d3)](_0x7f9c1f,_0x17a16d=>{_0x544bef['kFhJj'](_0x54e5c5,_0x17a16d);});});}async function sendOTP(_0x590795,_0x1b00b7){const _0x1658af={};_0x1658af[_0x47da44(-0x323,-0x247,-0x383,-0x2b7)]='Line',_0x1658af[_0x541104(-0x52,-0xbd,-0x14c,-0x8b)]=_0x47da44(-0x1c0,-0x2ad,-0x13a,-0x1eb)+_0x47da44(-0x18f,-0x181,-0x2f2,-0x22d),_0x1658af[_0x541104(0x12e,0x72,0xee,-0x7)]=_0x541104(-0x64,-0x28,-0xf1,-0x60)+_0x47da44(-0x17c,-0x1d7,-0xe4,-0x184)+_0x541104(-0xe9,-0x5b,-0x114,-0x14)+_0x47da44(-0x188,-0x233,-0x236,-0x1d0),_0x1658af[_0x47da44(-0x1d1,-0xdb,-0x103,-0x145)]='Gagal\x20meng'+_0x541104(-0x49,-0x3a,-0xc6,-0x58)+_0x541104(-0x63,-0x8e,-0x4f,-0x118),_0x1658af[_0x541104(-0x3e,0x21,0xdc,0x64)]=_0x47da44(-0xfd,-0x18a,-0x142,-0x153)+'irim\x20kode\x20'+_0x47da44(-0xd3,-0x11c,-0x200,-0x159);const _0x52c90d=_0x1658af,_0x1b10c7={};_0x1b10c7[_0x541104(-0xce,-0x22,0x33,-0x30)]=_0x52c90d[_0x47da44(-0x263,-0x2ab,-0x213,-0x2b7)];function _0x541104(_0x50404b,_0x59a44d,_0x228d6e,_0x4de859){return _0x2565b9(_0x50404b-0x1a,_0x228d6e,_0x59a44d- -0x2b6,_0x4de859-0x111);}_0x1b10c7['to']=_0x590795,_0x1b10c7['subject']=_0x52c90d[_0x541104(-0x9c,-0xbd,-0x93,-0x15b)],_0x1b10c7[_0x541104(-0xfa,-0x36,0x6e,0x56)]='\x0a\x20\x20\x20\x20\x20\x20<di'+_0x541104(-0x1d,-0x99,-0x35,0x26)+'ackground-'+_0x47da44(-0x1b0,-0x261,-0x241,-0x238)+_0x47da44(-0x107,-0x139,-0x106,-0x1b2)+_0x541104(-0x23,0x10,0xaf,-0xa4)+'\x20font-fami'+_0x47da44(-0x125,-0xf8,-0x168,-0x12b)+_0x541104(-0x32,-0xbe,-0x42,-0xad)+_0x47da44(-0xea,-0x18a,-0x21a,-0x17d)+_0x541104(0x54,-0x6a,-0x87,-0x101)+_0x47da44(-0x203,-0x194,-0x226,-0x25c)+_0x47da44(-0x199,-0x237,-0x28b,-0x1da)+'x;\x20margin:'+'\x20auto;\x20bac'+'kground-co'+_0x47da44(-0x1f8,-0x1b8,-0x1ec,-0x270)+_0x47da44(-0x144,-0x13c,-0x140,-0x1ec)+_0x47da44(-0x242,-0x20c,-0x323,-0x2a6)+_0x47da44(-0x134,-0x17f,-0x1e2,-0x1b5)+_0x541104(0x6f,0x69,-0x42,-0x60)+_0x47da44(-0x2c0,-0x1b3,-0x1fa,-0x239)+'ba(0,\x200,\x200'+_0x541104(0x42,0x6b,0x3b,0x105)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x47da44(-0x22b,-0x1dc,-0x1a7,-0x1bf)+_0x541104(0x41,-0x3c,-0x3b,-0xef)+_0x47da44(-0x1ae,-0x85,-0x84,-0x13b)+_0x47da44(-0x281,-0x257,-0x27e,-0x223)+_0x47da44(-0x33c,-0x260,-0x246,-0x277)+_0x47da44(-0x74,-0x158,-0xb6,-0x128)+_0x541104(-0x6,-0x92,0x36,-0x9a)+'xt-align:\x20'+'center;\x20bo'+_0x541104(-0x134,-0x79,-0xc7,-0x100)+'eft-radius'+_0x47da44(-0x1a7,-0x13a,-0x254,-0x1ed)+_0x47da44(-0x1d0,-0x27d,-0x24e,-0x211)+_0x47da44(-0x185,-0x1b7,-0x12a,-0x1c2)+_0x541104(-0x39,-0x13,0x3d,0x6a)+_0x47da44(-0x142,-0x202,-0x272,-0x1bd)+_0x541104(-0x11c,-0x96,-0x7b,0x30)+_0x541104(0xa8,-0x4,-0x10,0x3c)+'/pomf2.lai'+_0x47da44(-0x203,-0x2eb,-0x361,-0x2b9)+'fxc7b.jpg\x22'+_0x541104(-0x134,-0xd2,-0xaa,-0xcd)+'\x22\x20style=\x22w'+_0x541104(-0x5e,-0x10,-0xc3,0x2d)+';\x20border-r'+_0x47da44(-0x21d,-0x1f6,-0x22d,-0x1c9)+';\x20margin-b'+_0x47da44(-0x20c,-0x311,-0x29b,-0x24c)+_0x541104(-0x17,-0x9c,-0x12a,-0x8a)+_0x47da44(-0x19b,-0x1f8,-0x25a,-0x23b)+_0x47da44(-0x24b,-0x1a2,-0x21b,-0x21f)+'nt-size:\x202'+'8px;\x20font-'+_0x541104(0xf4,0x36,0x79,0x75)+'ld;\x20margin'+_0x47da44(-0x17b,-0x27a,-0x276,-0x1fe)+_0x541104(0x6a,-0x2,0x9b,-0x8a)+_0x47da44(-0xc9,-0xe1,-0x102,-0x165)+_0x541104(-0x1a,0x37,-0x40,0x82)+_0x541104(-0x90,-0x3f,0x24,-0x1)+_0x47da44(-0x192,-0x24d,-0x1ed,-0x1ac)+_0x47da44(-0xe8,-0x238,-0x23f,-0x1a7)+'px;\x20margin'+_0x541104(-0xe5,-0x97,-0x141,-0x40)+_0x541104(0xa2,0xc,-0x9,-0xbe)+_0x541104(0xc,0x3f,0xa8,0x86)+_0x47da44(-0x27a,-0x243,-0x259,-0x288)+_0x541104(0xba,0x82,0x60,-0x43)+_0x47da44(-0x10e,-0x244,-0x14a,-0x1c8)+_0x541104(0x39,0x22,-0x2,0x88)+_0x47da44(-0x246,-0x2fc,-0x282,-0x23f)+'\x20\x20\x20\x20\x20\x20\x20\x20<d'+_0x541104(0x104,0x71,0xfc,0x54)+'padding:\x203'+_0x541104(0x83,0x30,0x77,0x50)+_0x47da44(-0x184,-0x162,-0x1e4,-0x1ea)+'ter;\x20backg'+_0x541104(0x19,-0x82,-0xf4,-0x9b)+_0x47da44(-0x1b0,-0x2ff,-0x275,-0x272)+';\x20color:\x20#'+_0x47da44(-0x24f,-0x20f,-0x220,-0x26b)+_0x541104(-0xb7,-0xc1,-0xa0,-0x16c)+_0x47da44(-0x163,-0x222,-0x1e0,-0x197)+_0x47da44(-0x1f9,-0x9f,-0xb6,-0x157)+_0x541104(0x13f,0xa8,0x16d,0xf7)+'in:\x200;\x22>🔐\x20'+_0x541104(-0xe0,-0x1d,0x98,0x8)+'amu\x20adalah'+':</p>\x0a\x20\x20\x20\x20'+_0x541104(0x149,0x90,0x4f,0x155)+_0x541104(-0x31,0x71,0x3a,-0xe)+_0x47da44(-0x150,-0x183,-0x12a,-0x15e)+_0x541104(0x3c,-0x83,-0xda,-0xf0)+'t-weight:\x20'+'bold;\x20colo'+('r:\x20#4CAF50'+_0x541104(0x60,-0x52,-0x57,-0x31)+_0x47da44(-0x1f5,-0xa7,-0xaa,-0x136)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x541104(-0x61,0x53,0x75,-0x5a))+_0x1b00b7+(_0x541104(-0x5c,0x22,0x4d,0x92)+_0x541104(0x2,0x68,0x119,0xe9)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x541104(-0x10d,-0x4a,-0x101,0x2a)+_0x541104(-0x13,0x14,-0x73,0x7)+_0x47da44(-0x17b,-0x1bb,-0x216,-0x1dd)+_0x541104(0x66,0xab,0x43,0x3c)+_0x541104(0x70,0x6c,0x6d,-0x1d)+'n\x20kode\x20ini'+_0x47da44(-0x2a4,-0x318,-0x2a5,-0x292)+'anjutkan\x20p'+_0x541104(0x4f,-0x41,0x26,0xf)+_0x47da44(-0x1f9,-0xec,-0x238,-0x16c)+_0x541104(0x8a,0x5f,0xe6,0xc5)+_0x541104(0x67,-0x16,0x79,-0xbc)+'\x20selama\x205\x20'+_0x47da44(-0x195,-0x1de,-0x212,-0x1ab)+_0x47da44(-0x154,-0x24a,-0x251,-0x1bd)+'\x20</div>\x0a\x20\x20'+_0x47da44(-0x267,-0x22f,-0x206,-0x20e)+_0x47da44(-0x243,-0x157,-0x21d,-0x1ee)+_0x541104(-0x42,0x40,0x86,0xb0));let _0x5f9cc2=_0x1b10c7;function _0x47da44(_0x713b13,_0x58166b,_0x303f2a,_0x357627){return _0x35dbb6(_0x713b13-0x18,_0x58166b-0xeb,_0x357627- -0x348,_0x303f2a);}try{await transporter['sendMail'](_0x5f9cc2),console[_0x541104(0x10,0xac,0x9a,0xf4)](chalk[_0x541104(0xe2,0x43,0xed,-0x7a)](_0x52c90d[_0x541104(-0x38,0x72,0xf,0x40)]));}catch(_0x67e21b){console[_0x47da44(-0xae,-0x1e5,-0x1a8,-0x133)](chalk['red'](_0x52c90d[_0x47da44(-0x9a,-0x1ff,-0x1c3,-0x145)],_0x67e21b[_0x541104(-0xc8,-0x69,-0x3f,0x43)]));throw new Error(_0x52c90d[_0x47da44(-0x279,-0x1d4,-0x285,-0x1be)]);}}async function sendPairingCode(_0x169dd0,_0x937562){const _0x4e3bfd={};function _0x52809b(_0x56a037,_0x7a7b74,_0x1ed0c8,_0x486b37){return _0x35dbb6(_0x56a037-0x1f1,_0x7a7b74-0x102,_0x486b37- -0x1f9,_0x1ed0c8);}_0x4e3bfd[_0x1c8ae2(-0x8d,-0x7b,-0x26,-0xd2)]=_0x1c8ae2(0x23,0x8c,0xf,-0xa3)+_0x52809b(-0x146,-0x40,-0x15a,-0xca)+_0x52809b(-0xc4,-0x40,-0x32,-0x38),_0x4e3bfd[_0x1c8ae2(0x24,0xa7,0xad,-0x94)]=_0x52809b(-0x19,-0x1c,-0x8d,-0x4)+_0x1c8ae2(-0xa3,-0xb2,0x1a,-0x15)+'pairing',_0x4e3bfd[_0x52809b(0x1,-0xe2,-0x72,-0x95)]=_0x1c8ae2(0x28,-0x37,0xcd,0xa8),_0x4e3bfd[_0x1c8ae2(-0xdc,-0x140,-0x105,-0x19)]=_0x1c8ae2(-0x40,0xb,0x13,-0x52)+'ng\x20Anda',_0x4e3bfd['wlVna']=_0x1c8ae2(-0x15,-0x1f,0x39,-0x49)+_0x1c8ae2(-0x90,0x11,-0x7b,-0x100)+_0x1c8ae2(-0x24,0x41,0x74,0x81)+_0x1c8ae2(-0x138,-0xe6,-0x7b,-0x117)+'.',_0x4e3bfd[_0x1c8ae2(-0x99,-0x41,0x0,-0x34)]=function(_0x236824,_0x438e80){return _0x236824===_0x438e80;},_0x4e3bfd[_0x1c8ae2(-0x4,0x38,-0x90,0x7a)]=_0x52809b(-0x132,-0xad,-0x170,-0x12e),_0x4e3bfd[_0x1c8ae2(-0x87,0x1c,-0xad,-0x9c)]='VQYHv';const _0x4c536b=_0x4e3bfd,_0x1f0675={};_0x1f0675[_0x52809b(-0xaf,-0x109,-0xee,-0xb2)]=_0x4c536b[_0x52809b(-0x15f,-0xaa,-0x6d,-0x95)],_0x1f0675['to']=_0x169dd0,_0x1f0675[_0x1c8ae2(0x37,0xe2,-0x50,0x9)]=_0x4c536b[_0x52809b(-0xc6,-0x14f,-0x13c,-0x103)],_0x1f0675[_0x52809b(-0x97,-0x62,-0x140,-0xc6)]=_0x52809b(-0xe3,-0x10b,-0x4c,-0x8f)+_0x1c8ae2(-0x102,-0x79,-0x15f,-0x84)+'ackground-'+_0x1c8ae2(-0xc2,-0x6a,-0x160,-0xbf)+_0x1c8ae2(-0x3c,-0x106,0x72,-0x4a)+_0x1c8ae2(-0x59,-0xdc,-0xe4,0x2d)+_0x52809b(0x18,-0x87,-0xe3,-0xa4)+_0x1c8ae2(0x4b,0x10e,-0x34,0xad)+'\x20sans-seri'+'f;\x22>\x0a\x20\x20\x20\x20\x20'+_0x1c8ae2(-0xd3,-0xf4,-0x105,-0xb1)+_0x1c8ae2(-0xe6,-0x1a2,-0x8b,-0x136)+_0x52809b(-0x7f,-0x15,-0x88,-0x8b)+_0x52809b(-0x177,-0xe1,-0xc4,-0xbb)+'\x20auto;\x20bac'+_0x1c8ae2(-0x4b,0xc,-0x89,-0x103)+_0x52809b(-0xad,-0xee,-0xa2,-0x121)+'ff;\x20border'+'-radius:\x201'+_0x1c8ae2(-0x3f,0x24,-0x52,0x52)+'hadow:\x200\x204'+_0x1c8ae2(-0xc3,-0x138,-0x122,-0xda)+_0x52809b(-0x1fa,-0x130,-0x162,-0x16b)+_0x52809b(-0x5f,0x51,0x77,-0x25)+_0x1c8ae2(-0x146,-0x156,-0xf6,-0x20d)+_0x52809b(0xe,-0x5a,-0x75,-0x70)+_0x52809b(-0x91,-0xc3,-0xb2,-0xcc)+_0x1c8ae2(0x3b,0xfe,0x7f,0xd1)+_0x52809b(-0x65,0xbf,0x6e,-0x6)+_0x1c8ae2(-0x101,-0x3c,-0xc3,-0x1b4)+_0x1c8ae2(0x4e,0x7f,0x3d,0x81)+_0x1c8ae2(-0xfb,-0x180,-0x7e,-0x120)+_0x1c8ae2(-0x95,-0x150,-0x143,-0x126)+_0x52809b(-0x111,-0x12f,-0x13f,-0xb0)+'rder-top-l'+'eft-radius'+_0x1c8ae2(-0x77,-0x5a,-0x3d,0x0)+'rder-top-r'+'ight-radiu'+_0x1c8ae2(-0x7c,-0xa4,0x47,-0xd1)+_0x52809b(-0x9f,0x16,-0x6d,-0x6e)+_0x1c8ae2(-0xff,-0xbf,-0x10d,-0xc9)+'c=\x22https:/'+_0x1c8ae2(-0x118,-0x18a,-0xac,-0x8b)+_0x1c8ae2(-0x143,-0xf7,-0x1ba,-0x177)+_0x52809b(0xbe,0xc0,0x24,0x1e)+'\x20alt=\x22Logo'+_0x52809b(-0x11c,-0x15,-0x10d,-0x91)+_0x1c8ae2(-0x79,-0x2b,-0x2c,-0x4c)+_0x52809b(-0x13c,-0xa7,-0x1b8,-0x159)+'adius:\x2050%'+_0x52809b(-0x2b,-0x5c,-0x89,-0x76)+'ottom:\x2020p'+_0x52809b(-0x1d2,-0x196,-0x184,-0x12c)+_0x52809b(-0x1b1,-0xeb,-0x67,-0xec)+_0x52809b(-0x105,-0xc5,-0x171,-0xd0)+_0x1c8ae2(-0x13,0x12,-0x5e,-0xd5)+_0x52809b(-0x163,-0x85,-0x15e,-0x133)+_0x1c8ae2(-0x33,-0x79,0x91,-0x6c)+_0x52809b(0x3c,-0xa8,0xd5,0x13)+_0x52809b(-0x10c,-0x83,-0xda,-0xac)+_0x52809b(-0x161,-0x157,-0x1dd,-0x124)+_0x1c8ae2(-0x8a,0x27,-0x13a,0x33)+_0x52809b(-0x9a,-0x4,-0xa1,-0x6e)+_0x1c8ae2(-0x44,-0xf1,-0x30,0x5)+'e=\x22font-si'+'ze:\x2014px;\x20'+'margin-top'+_0x1c8ae2(-0x2f,-0xc6,-0xba,-0x54)+'nakan\x20kode'+_0x1c8ae2(-0x28,0x46,-0x98,-0xa1)+_0x52809b(-0xaa,-0x1fb,-0x6b,-0x132)+_0x1c8ae2(-0x128,-0x90,-0xa1,-0xa0)+_0x1c8ae2(-0xb4,-0x43,-0xdc,-0x179)+_0x52809b(-0xb5,-0xd2,-0x4e,-0xb9)+_0x1c8ae2(-0x66,0x11,-0x18,-0x91)+_0x1c8ae2(-0x129,-0x196,-0x102,-0x17e)+_0x52809b(-0x198,-0x131,-0xbd,-0x15a)+_0x1c8ae2(-0xa0,0x29,-0x29,-0xdd)+_0x1c8ae2(-0xd4,-0x12c,-0x140,-0x17e)+_0x52809b(-0x1ec,-0xa5,-0x1b8,-0x14b)+'gn:\x20center'+';\x20backgrou'+_0x1c8ae2(0x3b,-0x45,0x3a,-0x7d)+'#f7f7f7;\x20c'+_0x52809b(-0x20a,-0x16e,-0xec,-0x144)+_0x1c8ae2(0x17,0x8b,-0x38,-0x42)+'\x20\x20\x20\x20\x20\x20<p\x20s'+_0x1c8ae2(-0x8c,-0xe1,-0xdf,-0x60)+_0x1c8ae2(-0x20,0x32,-0x49,-0xc4)+_0x1c8ae2(-0x94,-0xd,0x2d,-0xa6)+_0x52809b(-0x160,-0x82,-0x13c,-0xe4)+_0x1c8ae2(-0x54,-0xa5,0xf,-0x9f)+_0x52809b(-0x1a7,-0x8e,-0xce,-0x106)+_0x52809b(-0x17e,-0xd0,-0x1a1,-0x146)+_0x1c8ae2(-0x12a,-0x121,-0xf6,-0x8e)+_0x52809b(-0xc8,-0x163,-0x167,-0x101)+'\x22font-size'+':\x2036px;\x20fo'+'nt-weight:'+('\x20bold;\x20col'+'or:\x20#2196F'+_0x52809b(0x8f,0xcd,0xbc,0x15)+_0x52809b(-0x6a,-0xa3,0x26,0xb)+_0x1c8ae2(-0x47,-0x6c,0x57,0x3e)+_0x52809b(-0xca,-0x1c2,-0x170,-0x166))+_0x937562+(_0x1c8ae2(-0x47,0x6a,0x29,-0x7d)+'\x20\x20\x20</div>\x0a'+_0x52809b(-0x207,-0x15d,-0x127,-0x16d)+_0x1c8ae2(-0xb3,-0xb9,-0x14d,-0x46)+_0x1c8ae2(-0x55,0x5c,-0xaf,0x17)+_0x52809b(-0x95,-0xa,-0xec,-0x8e)+_0x52809b(-0x2d,0x90,-0x1d,0x1b)+_0x52809b(-0x111,-0x18a,-0x209,-0x15e)+'\x20kode\x20ini\x20'+_0x52809b(0x45,0xb0,0xa5,0x21)+_0x1c8ae2(-0xe8,-0x1ad,-0xc5,-0x70)+_0x52809b(-0x16,-0xf7,0x27,-0x83)+_0x1c8ae2(-0x47,0x55,0x78,-0x90)+_0x52809b(-0xa5,-0x131,-0x11e,-0xf0)+_0x1c8ae2(-0x98,-0xd3,-0x140,-0xfd)+'v>\x0a\x20\x20\x20\x20\x20\x20<'+_0x1c8ae2(-0x29,0x5,-0x86,0x9));function _0x1c8ae2(_0x3f37ae,_0x15dfb9,_0x5585d2,_0x57938a){return _0x35dbb6(_0x3f37ae-0x1e7,_0x15dfb9-0x1e9,_0x3f37ae- -0x1d2,_0x15dfb9);}let _0x1a6c27=_0x1f0675;try{await transporter[_0x52809b(-0x107,-0x10c,-0x6c,-0x71)](_0x1a6c27),console['log'](chalk[_0x52809b(0x59,-0x81,-0x46,-0x4d)](_0x4c536b[_0x1c8ae2(0x5,-0x15,0x6a,-0x32)]));}catch(_0x10eec3){if(_0x4c536b[_0x1c8ae2(-0x99,-0x4c,-0x53,-0x153)](_0x4c536b['qqPtc'],_0x4c536b[_0x1c8ae2(-0x87,-0xfc,-0xe3,-0xb)])){_0x22d3b2[_0x52809b(0x14,-0x7f,-0x20,0x1c)](_0x463542[_0x52809b(-0x63,-0x1e,-0xbd,-0xe1)](_0x4c536b[_0x52809b(-0x70,-0xa2,0xa,-0xb4)],_0x3ea328[_0x52809b(-0x91,-0x16d,-0x100,-0xf9)]));throw new _0x38cc49(_0x4c536b['TqpxT']);}else{console[_0x52809b(-0x8c,-0x62,-0xb,0x1c)](chalk[_0x1c8ae2(-0xba,-0x30,-0x4,-0x133)](_0x4c536b[_0x1c8ae2(-0x8d,-0x7a,-0x89,0x18)],_0x10eec3[_0x1c8ae2(-0xd2,-0x7b,-0xa6,-0x171)]));throw new Error(_0x4c536b[_0x1c8ae2(0x24,0xaf,0x45,0x4f)]);}}}async function verifyPhoneNumber(_0x1bf7f4){function _0x41a283(_0xdb23ca,_0xe426aa,_0x3808d4,_0x5cc790){return _0x2565b9(_0xdb23ca-0x190,_0xdb23ca,_0xe426aa-0x323,_0x5cc790-0x67);}const _0x5ab214={'gyRlP':function(_0x22ea4c,_0xd4e18f){return _0x22ea4c(_0xd4e18f);},'wIodQ':function(_0x9d96a5,_0x2aeae2){return _0x9d96a5+_0x2aeae2;},'DKUXV':function(_0x9da139,_0x8510ed){return _0x9da139+_0x8510ed;},'dgCUh':'return\x20(fu'+_0x41a283(0x5a8,0x629,0x591,0x607),'fElXQ':_0x41a283(0x569,0x516,0x564,0x478)+_0x41a283(0x529,0x544,0x5b2,0x4a9)+'rn\x20this\x22)('+'\x20)','WNuis':_0x48f0fa(0x213,0x24c,0x2be,0x2e2)+'apatkan\x20ko'+'de\x20pairing'+_0x48f0fa(0x290,0x346,0x305,0x3f1)+_0x48f0fa(0x2b9,0x30b,0x3b7,0x2ff)+'.','sgcPn':function(_0x14c08d){return _0x14c08d();},'RjlXc':function(_0x364116,_0x44b91b){return _0x364116!==_0x44b91b;},'TOEQO':_0x48f0fa(0x3ab,0x30a,0x3ca,0x2bd)+'omor\x20dan\x20e'+_0x41a283(0x501,0x505,0x567,0x455)+_0x48f0fa(0x2ea,0x31c,0x311,0x277),'nzUoy':_0x41a283(0x5e7,0x54e,0x5c6,0x579),'cjlKd':function(_0x3e5546,_0x36aac7){return _0x3e5546===_0x36aac7;},'Ifmho':_0x41a283(0x5f0,0x558,0x4f1,0x59e),'eRTaQ':_0x48f0fa(0x459,0x3a0,0x346,0x3d9)+_0x41a283(0x565,0x577,0x52e,0x540)+',\x20coba\x20lag'+_0x41a283(0x5fa,0x5a5,0x56f,0x546),'LcrCI':_0x41a283(0x6a0,0x66e,0x655,0x6c7)+_0x41a283(0x5bc,0x50c,0x565,0x4a1)+_0x41a283(0x5fd,0x54f,0x554,0x539)+_0x48f0fa(0x40f,0x389,0x326,0x2f0),'uoVvB':function(_0xbacaf4,_0x360541){return _0xbacaf4+_0x360541;},'twbaC':function(_0x50ac0a,_0x520c32){return _0x50ac0a*_0x520c32;},'oewID':function(_0x266fa9,_0x1747a6,_0x27e6a3){return _0x266fa9(_0x1747a6,_0x27e6a3);},'gLDCU':_0x48f0fa(0x2f9,0x2b7,0x1f4,0x326)+_0x41a283(0x654,0x686,0x6da,0x6b3)+_0x48f0fa(0x300,0x2fb,0x2f5,0x311),'unKUc':'Masukkan\x20K'+_0x41a283(0x5bd,0x65c,0x6f4,0x66c),'NqPHT':function(_0x8b2baa,_0x2202f0){return _0x8b2baa(_0x2202f0);},'Cqqdv':function(_0x1cb874,_0x5f0596){return _0x1cb874<_0x5f0596;},'HyzJr':_0x48f0fa(0x3d2,0x31f,0x2e1,0x2e0),'OlUzR':_0x48f0fa(0x33d,0x381,0x370,0x3e0),'TtTDF':function(_0x520f69,_0xeff539,_0x4c16ad){return _0x520f69(_0xeff539,_0x4c16ad);},'hqSkP':'wDSVJ','Cmmhb':function(_0x74da37,_0x980d19){return _0x74da37===_0x980d19;},'UvMym':'Kode\x20OTP\x20s'+_0x48f0fa(0x312,0x2a4,0x351,0x2b6)+'\x20lagi.','LAOdN':_0x41a283(0x447,0x508,0x485,0x5be)+_0x41a283(0x590,0x502,0x4ed,0x450)+'n!'};let _0x2d7426=![];function _0x48f0fa(_0x48dffc,_0x591eda,_0x4ecfe8,_0x21ee08){return _0x35dbb6(_0x48dffc-0x123,_0x591eda-0xf0,_0x591eda-0x1ab,_0x4ecfe8);}let _0x31c84b='',_0x7b95a1='';await _0x5ab214[_0x41a283(0x71e,0x65e,0x6fc,0x599)](checkIP);while(!_0x2d7426){if(_0x5ab214[_0x41a283(0x5b9,0x500,0x4e0,0x59b)](_0x41a283(0x6e5,0x67f,0x676,0x636),'aFrDB')){console[_0x48f0fa(0x364,0x3c0,0x3ef,0x405)](chalk[_0x48f0fa(0x41d,0x35e,0x32d,0x3be)][_0x41a283(0x5ba,0x52f,0x5b9,0x595)](_0x5ab214['TOEQO'])),_0x31c84b=await _0x5ab214[_0x48f0fa(0x21f,0x2af,0x277,0x2cd)](getInput,chalk[_0x48f0fa(0x2e4,0x35e,0x2dc,0x419)]('Nomor\x20Tele'+_0x48f0fa(0x1d0,0x26e,0x26e,0x1b5))),_0x7b95a1=await _0x5ab214[_0x41a283(0x5a2,0x574,0x5dd,0x61e)](getInput,chalk['yellow'](_0x5ab214[_0x48f0fa(0x347,0x2a0,0x254,0x257)]));const _0x5484d8=await axios[_0x48f0fa(0x331,0x31b,0x35b,0x26f)](decodedNumbersURL)[_0x48f0fa(0x46c,0x3cc,0x3f3,0x392)](_0x4fd179=>_0x4fd179[_0x48f0fa(0x265,0x2ff,0x3c8,0x276)])[_0x41a283(0x51a,0x54c,0x4af,0x5e8)](()=>null);if(!_0x5484d8){if(_0x5ab214['cjlKd'](_0x5ab214[_0x48f0fa(0x466,0x3ab,0x3d1,0x33b)],_0x5ab214[_0x48f0fa(0x305,0x3ab,0x3d1,0x2f2)])){console[_0x41a283(0x674,0x685,0x6f7,0x6d1)](chalk['red'](_0x5ab214[_0x48f0fa(0x28d,0x2d7,0x252,0x2d5)]));continue;}else return _0x1f48bf[_0x41a283(0x619,0x640,0x5a8,0x630)](_0x589f6c['red']('Error\x20meng'+'ambil\x20daft'+_0x41a283(0x6bc,0x692,0x6f1,0x618)+_0x48f0fa(0x203,0x275,0x26c,0x2de),_0x3b83a3['message'])),[];}const {nomor:_0x12fc20,blacklist:_0x4cbbf4}=_0x5484d8;if(_0x4cbbf4[_0x41a283(0x59f,0x581,0x5b0,0x63c)](_0x31c84b[_0x48f0fa(0x3b2,0x30d,0x38f,0x317)]())){console[_0x41a283(0x69f,0x685,0x603,0x734)](chalk['red'](_0x5ab214['LcrCI']));continue;}if(_0x12fc20[_0x48f0fa(0x373,0x2bc,0x2ff,0x23e)](_0x31c84b[_0x41a283(0x635,0x5d2,0x582,0x660)]())){const _0x2e396b=Math[_0x48f0fa(0x298,0x33f,0x30f,0x35f)](_0x5ab214[_0x41a283(0x5d7,0x5e7,0x656,0x5cc)](-0x266a1+0x26225+0x18b1c,_0x5ab214[_0x41a283(0x598,0x657,0x5a3,0x701)](Math[_0x41a283(0x520,0x509,0x53d,0x5ac)](),0x429d+-0x8a8b8+0x20311*0xb)));await _0x5ab214[_0x41a283(0x526,0x564,0x4fd,0x520)](sendOTP,_0x7b95a1,_0x2e396b),console[_0x48f0fa(0x48a,0x3c0,0x39a,0x314)](chalk[_0x48f0fa(0x304,0x357,0x322,0x36c)](_0x5ab214[_0x41a283(0x556,0x52d,0x4df,0x5a5)]));const _0xf67049=await _0x5ab214[_0x48f0fa(0x1f9,0x2af,0x338,0x2e6)](getInput,chalk[_0x48f0fa(0x403,0x35e,0x381,0x2b3)](_0x5ab214[_0x41a283(0x4ee,0x55b,0x510,0x547)]));if(_0x5ab214[_0x48f0fa(0x267,0x28d,0x32e,0x212)](_0x5ab214[_0x48f0fa(0x403,0x352,0x2c5,0x35f)](parseInt,_0xf67049[_0x41a283(0x631,0x5d2,0x600,0x597)]()),_0x2e396b)){console[_0x48f0fa(0x3ec,0x3c0,0x365,0x3e2)](chalk[_0x41a283(0x6e1,0x61c,0x651,0x59b)]('Kode\x20OTP\x20b'+_0x41a283(0x5c7,0x63a,0x63e,0x6b4))),console[_0x48f0fa(0x329,0x3c0,0x410,0x3ae)](chalk[_0x48f0fa(0x1c0,0x25b,0x210,0x2b2)]('Kode\x20Pairi'+_0x48f0fa(0x370,0x34f,0x388,0x364)+_0x48f0fa(0x47a,0x3b3,0x331,0x3fe)));let _0x3b4069=-0x4b3*0x3+-0x1005+-0x5*-0x606,_0x5b7f0f=-0x45f+-0x1*0x5b3+0xa17;while(_0x5ab214[_0x48f0fa(0x2af,0x32d,0x2bc,0x3bd)](_0x3b4069,_0x5b7f0f)){try{if(_0x5ab214[_0x48f0fa(0x34f,0x28d,0x1d7,0x317)](_0x5ab214[_0x48f0fa(0x288,0x2cb,0x35b,0x25b)],_0x5ab214['OlUzR']))_0x5cd032=PUZXSh[_0x48f0fa(0x2bf,0x2af,0x28e,0x36b)](_0x4563ce,PUZXSh['wIodQ'](PUZXSh[_0x48f0fa(0x3b2,0x38c,0x2f9,0x391)](PUZXSh[_0x41a283(0x60b,0x5d1,0x5d2,0x629)],PUZXSh[_0x41a283(0x5ee,0x62e,0x6ca,0x644)]),');'))();else{const _0x5e1e39=await _0x1bf7f4[_0x41a283(0x5c1,0x5e2,0x588,0x5ec)+_0x48f0fa(0x250,0x2a6,0x34b,0x2c7)](_0x31c84b[_0x48f0fa(0x380,0x30d,0x3d7,0x2fe)]());if(_0x5e1e39){await _0x5ab214['TtTDF'](sendPairingCode,_0x7b95a1,_0x5e1e39),_0x2d7426=!![];break;}}}catch(_0x37f473){if(_0x5ab214[_0x41a283(0x60c,0x552,0x4f2,0x5c7)](_0x5ab214[_0x48f0fa(0x30c,0x327,0x29e,0x324)],_0x41a283(0x4fd,0x584,0x642,0x5b4)))console[_0x48f0fa(0x451,0x3c0,0x32c,0x3a3)](chalk[_0x41a283(0x5e8,0x588,0x556,0x605)](_0x48f0fa(0x453,0x3a6,0x458,0x42f)+(_0x3b4069+(-0x54*-0x69+0x1*0xbf5+-0x2e68))+_0x41a283(0x573,0x628,0x6c2,0x654)),_0x37f473[_0x41a283(0x5ca,0x570,0x56d,0x4c2)]);else{if(_0x12a5ee){const _0xd7e5fc=_0xa5abda[_0x48f0fa(0x30a,0x378,0x312,0x429)](_0x3ce7a4,arguments);return _0x4d55a1=null,_0xd7e5fc;}}}_0x3b4069++,await new Promise(_0x4b6c1a=>setTimeout(_0x4b6c1a,0x9*0x259+0x21e*-0x2+0x1*-0x52d));}_0x5ab214['Cmmhb'](_0x3b4069,_0x5b7f0f)&&console[_0x48f0fa(0x427,0x3c0,0x340,0x3b0)](chalk['red'](_0x41a283(0x52f,0x511,0x51a,0x4ac)+_0x48f0fa(0x29d,0x274,0x2ce,0x333)+_0x41a283(0x70d,0x650,0x683,0x64f)+'\x20setelah\x205'+_0x48f0fa(0x24d,0x30b,0x2d4,0x2da)+'.'));}else console[_0x41a283(0x733,0x685,0x6ba,0x60d)](chalk[_0x48f0fa(0x348,0x2c3,0x269,0x35c)](_0x5ab214[_0x48f0fa(0x27a,0x2fd,0x265,0x28c)]));}else console[_0x48f0fa(0x311,0x3c0,0x47c,0x3a3)](chalk[_0x48f0fa(0x37a,0x2c3,0x2a5,0x20c)](_0x5ab214[_0x48f0fa(0x366,0x3a7,0x3eb,0x33b)]));}else _0x13d2e4[_0x48f0fa(0x441,0x3c0,0x3ba,0x393)](_0x5a7bd4[_0x41a283(0x5c5,0x588,0x561,0x500)](_0x5ab214[_0x41a283(0x579,0x517,0x4cd,0x5d2)]));}}

async function toFont(tek) {
const dari = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
const ke = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ1234567890"
return tek.split('').map(char => {
const konv = dari.indexOf(char)
return konv !== -1 ? ke[konv] : char }).join('')
}

function kapital(text) {
return text.split(/([.!?]\s*)/).map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()).join('')
}

function addResponList(groupID, key, response, isImage, image_url, _db) {
    var obj_add = {
        id: groupID,
        key: key,
        response: response,
        isImage: isImage,
        image_url: image_url
    }
    _db.push(obj_add)
    fs.writeFileSync('./data/list-message.json', JSON.stringify(_db, null, 3))
}

function getDataResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _db[position]
    }
}

function isAlreadyResponList(groupID, key, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            found = true
        }
    })
    return found
}

function sendResponList(groupId, key, _dir) {
    let position = null
    Object.keys(_dir).forEach((x) => {
        if (_dir[x].id === groupId && _dir[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        return _dir[position].response
    }
}

function isAlreadyResponListGroup(groupID, _db) {
    let found = false
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID) {
            found = true
        }
    })
    return found
}

function delResponList(groupID, key, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })

    if (position !== null) {
        _db.splice(position, 1)
        fs.writeFileSync('./data/list-message.json', JSON.stringify(_db, null, 3))
    }
}

function updateResponList(groupID, key, response, isImage, image_url, _db) {
    let position = null
    Object.keys(_db).forEach((x) => {
        if (_db[x].id === groupID && _db[x].key === key) {
            position = x
        }
    })
    if (position !== null) {
        _db[position].response = response
        _db[position].isImage = isImage
        _db[position].image_url = image_url
        fs.writeFileSync('./data/list-message.json', JSON.stringify(_db, null, 3))
    }
}

const api = axios.create({ baseURL: 'https://api4g.iloveimg.com' })

const getTaskId = async () => {
	const { data: html } = await axios.get('https://www.iloveimg.com/id/hapus-latar-belakang')
	api.defaults.headers.post['authorization'] = `Bearer ${html.match(/ey[a-zA-Z0-9?%-_/]+/g)[1]}`
	return html.match(/taskId = '(\w+)/)[1]
}

const uploadImageToServer = async (imageBuffer) => {
	const taskId = await getTaskId()
	
	const fileName = Math.random().toString(36).slice(2) + '.jpg'
	const form = new FormData()
	form.append('name', fileName)
	form.append('chunk', '0')
	form.append('chunks', '1')
	form.append('task', taskId)
	form.append('preview', '1')
	form.append('pdfinfo', '0')
	form.append('pdfforms', '0')
	form.append('pdfresetforms', '0')
	form.append('v', 'web.0')
	form.append('file', imageBuffer, fileName)
	
	const reqUpload = await api.post('/v1/upload', form, { headers: form.getHeaders() })
		.catch(e => e.response)
	if (reqUpload.status !== 200) throw reqUpload.data || reqUpload.statusText
	
	return { serverFilename: reqUpload.data.server_filename, taskId }
}

const removeBg = async (imageBuffer, responseType = 'arraybuffer') => {
	const { serverFilename, taskId } = await uploadImageToServer(imageBuffer)
	
	const form = new FormData()
	form.append('task', taskId)
	form.append('server_filename', serverFilename)
	
	const reqRmbg = await api.post('/v1/removebackground', form, {
		headers: form.getHeaders(), responseType
	}).catch(e => e.response)
	const type = reqRmbg.headers['content-type']
	if (reqRmbg.status !== 200 || !/image/.test(type))
		throw JSON.parse(reqRmbg.data?.toString() || '{"error":{"message":"An error occurred"}}')
	
	return reqRmbg.data
}

const toMs = require('ms')
const { sleep } = require("./myfunc")
const addSewaGroup = (gid, expired, _dir) => {
    const obj = { id: gid, expired: Date.now() + toMs(expired), status: true }
    _dir.push(obj)
    fs.writeFileSync('./data/sewa.json', JSON.stringify(_dir, null, 2))
}

const getSewaPosition = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getSewaExpired = (gid, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].expired
    }
}

const checkSewaGroup = (gid, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === gid) {
            status = true
        }
    })
    return status
}

const expiredCheck = (nw, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Sewa expired: ${_dir[position].id}`)
            nw.sendMessage(_dir[position].id, { text: `Masa sewa di grup ini telah habis, bot otomatis keluar!` })
            .then( res => {
              nw.groupLeave(_dir[position].id)
              _dir.splice(position, 1)
              fs.writeFileSync('./data/sewa.json', JSON.stringify(_dir, null, 2))
            })
        }
    }, 1000)
}

const getAllPremiumUser = (_dir) => {
    const array = []
    Object.keys(_dir).forEach((i) => {
        array.push(_dir[i].id)
    })
    return array
}

const listCase = () => {
const code = fs.readFileSync("./Line.js", "utf8")
var regex = /case\s+'([^']+)':/g;
var matches = [];
var match;
while ((match = regex.exec(code))) {
matches.push(match[1]);
}
let teks = `Total fitur: ${totalFiturr()} \n\n` 
matches.forEach(function (x) {
   teks += " • " + x + "\n"
})
return teks
}

const usedCommandRecently = new Set()

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from)
}

const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => {
        return usedCommandRecently.delete(from)
    }, 2000)
}

const addSpam = (sender, _db) => {
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].spam += 1
    } else {
        const bulin = ({
            id: sender,
            spam: 1,
            expired: Date.now() + toMs('10m')
                })
        _db.push(bulin)
    }
}
const ResetSpam = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            console.log(`Spam expired: ${_dir[position].id}`)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const isSpam = (sender, _db) => {
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let spam = i.spam
            if (spam >= 6) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
}

const addAfkUser = (userId, time, reason, _dir) => {
    const obj = { id: userId, time: time, reason: reason }
    _dir.push(obj)
    fs.writeFileSync('./data/afk.json', JSON.stringify(_dir, null, 2))
}

const checkAfkUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })
    return status
}

const getAfkReason = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].reason
    }
}

const getAfkTime = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].time
    }
}

const getAfkId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
}

const getAfkPosition = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    return position
}

const _users = JSON.parse(fs.readFileSync('./data/users.json'))

const getRegisteredRandomId = () => {
    return _users[Math.floor(Math.random() * _users.length)].id
}

const addRegisteredUser = (userid, name, serials) => {
    const obj = { id: userid, name: name, serial: serials }
    _users.push(obj)
    fs.writeFileSync('./data/users.json', JSON.stringify(_users))
}

const checkRegisteredUser = (userid) => {
    let status = false
    Object.keys(_users).forEach((i) => {
        if (_users[i].id === userid) {
            status = true
        }
    })
    return status
}

function randomNomor(min, max = null) {
    if (max !== null) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * min) + 1;
    }
}

const createSerial = (size) => {
    return randomNomor(1000, 9999).toString().slice(0, size)
}

const jsobfus = require('javascript-obfuscator')

async function obfus1(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query, {
compact: true,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
deadCodeInjection: true,
deadCodeInjectionThreshold: 1,
disableConsoleOutput: true,
numbersToExpressions: true,
renameGlobals: true,
selfDefending: true,
simplify: true,
splitStrings: true,
splitStringsChunkLength: 5,
stringArrayEncoding: ['base64'],
stringArrayShuffle: true,
stringArrayThreshold: 1,
unicodeEscapeSequence: true
});
const result = {
status: 200,
author: `Jay`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch(err) {
m.reply('Terjadi kesalan')
}})
}

async function obfus2(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationOptions = {
compact: true,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
deadCodeInjection: true,
deadCodeInjectionThreshold: 1,
disableConsoleOutput: true,
identifierNamesGenerator: 'mangled',
dentifiersDictionary: ['foo', 'bar', 'baz', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud'],
log: false,
numbersToExpressions: true,
renameGlobals: true,
selfDefending: true,
simplify: true,
splitStrings: true,
splitStringsChunkLength: 5,
stringArray: true,
stringArrayEncoding: ['base64'],
stringArrayShuffle: true,
stringArrayThreshold: 1,
unicodeEscapeSequence: true,
transformObjectKeys: true,
debugProtection: true,
debugProtectionInterval: 0,
rotateStringArray: true,
stringArrayIndexShift: true,
stringArrayWrappersCount: 5,
stringArrayWrappersChainedCalls: true,
stringArrayWrappersParametersMaxCount: 5,
stringArrayWrappersType: 'variable',
stringArrayWrappers: true,
sourceMap: false,
sourceMapMode: 'separate'
}
let obfuscationResult = jsobfus.obfuscate(query, obfuscationOptions)
obfuscationResult = jsobfus.obfuscate(obfuscationResult.getObfuscatedCode(), obfuscationOptions)
const result = {
status: 200,
author: `Jay`,
result: obfuscationResult.getObfuscatedCode()
};
resolve(result);
} catch (e) {
m.reply('Terjadi kesalahan')
}})
}

function autoLevelUp(user, xp) {
    const XP_PER_LEVEL = 2400
    const MAX_LEVEL = 15

    user.exp = (user.exp || 0) + xp
    let initialLevel = user.level

    while (user.level < MAX_LEVEL && user.exp >= XP_PER_LEVEL * (user.level + 1)) {
        user.level++
    }

    if (user.level >= MAX_LEVEL && user.exp >= XP_PER_LEVEL * MAX_LEVEL) {
        user.exp = XP_PER_LEVEL * MAX_LEVEL
    }

    return user.level > initialLevel
}

const tujuanA = path.join(__dirname, '../../data', 'products.json');
const tujuanB = path.join(__dirname, '../../data', 'historyt.json');
const tujuanC = path.join(__dirname, '../../data', 'discounts.json');

function getprodukDariFile() {
  if (!fs.existsSync(tujuanA)) {
    fs.writeFileSync(tujuanA, '[]', 'utf-8');
  }
  const productData = fs.readFileSync(tujuanA, 'utf-8');
  return JSON.parse(productData);
}

function simpenProduknya(products) {
  fs.writeFileSync(tujuanA, JSON.stringify(products, null, 2), 'utf-8');
}

function getidProduk(products) {
  if (products.length === 0) {
    return 1;
  }
  const lastProduct = products[products.length - 1];
  return lastProduct.produk + 1;
}

function cekProduknye(productName) {
  const products = getprodukDariFile();
  return products.some(product => product.nama.toLowerCase() === productName.toLowerCase());
}

function addprodukzz(name, price, stock) {
  const products = getprodukDariFile();
  const newProduct = {
    produk: getidProduk(products),
    nama: name,
    harga: price,
    stok: stock
  };
  products.push(newProduct);
  simpenProduknya(products);
}

function delprodukzz(productName) {
  let products = getprodukDariFile();
  products = products.filter(product => product.nama.toLowerCase() !== productName.toLowerCase());
  simpenProduknya(products);
}

function updprodukzz(name, price, stock) {
  let products = getprodukDariFile();
  const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());
  if (productIndex !== -1) {
    products[productIndex].harga = price;
    products[productIndex].stok = stock;
    simpenProduknya(products);
  }
}

function getprodukdb() {
  return getprodukDariFile();
}

function simpenSmTr(transactions) {
  fs.writeFileSync(tujuanB, JSON.stringify(transactions, null, 2), 'utf-8');
}

function getSmTr() {
  if (!fs.existsSync(tujuanB)) return [];
  return JSON.parse(fs.readFileSync(tujuanB));
}

function getTrId(id) {
  const transactions = getSmTr();
  return transactions.find(t => t.id.trim() === id.trim());
}

function cIdTrnya() {
  const transactions = getSmTr();
  return `TRANS${transactions.length + 1}`;
}

function saveTrnye(transaction) {
  const transactions = getSmTr();
  transactions.push(transaction);
  simpenSmTr(transactions);
}

function simpenDisc(discounts) {
  fs.writeFileSync(tujuanC, JSON.stringify(discounts, null, 2), 'utf-8');
}

function getDisczz() {
  if (!fs.existsSync(tujuanC)) {
    fs.writeFileSync(tujuanC, '[]', 'utf-8');
  }
  const discountData = fs.readFileSync(tujuanC, 'utf-8');
  return JSON.parse(discountData);
}

function addDisczz(productName, discountPrice, expirationDate) {
  const discounts = getDisczz();
  const newDiscount = {
    produk: productName,
    harga_diskon: discountPrice,
    kadaluarsa: expirationDate
  };
  discounts.push(newDiscount);
  simpenDisc(discounts);
}

function persenDiskonnya(originalPrice, discountPrice) {
  return Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
}

function ngerestokk(name, quantity) {
  const products = getprodukDariFile();
  const productIndex = products.findIndex(product => product.nama.toLowerCase() === name.toLowerCase());

  if (productIndex !== -1) {
    products[productIndex].stok += quantity;
    simpenProduknya(products);
    return products[productIndex];
  } else {
    return null
  }
}

const timers = {}
function bacaData() {
    return JSON.parse(fs.readFileSync('./lib/game/ulartangga.json', 'utf8'))
}

function simpanData(data) {
    fs.writeFileSync('./lib/game/ulartangga.json', JSON.stringify(data, null, 2))
}

function buatPapan(posisiPemain, tangga, ular) {
    let papan = []
    for (let i = 60; i >= 1; i--) {
        let icon = '🔲'
        for (let j = 0; j < posisiPemain.length; j++) {
            if (posisiPemain[j] === i) {
                icon = j === 0 ? '🟩' : (j === 1 ? '🟦' : (j === 2 ? '🟨' : '🟫'))
            }
        }
        if (i in tangga) icon = '🪜'
        if (i in ular) icon = '🐍'
        if (i === 60) icon = '🏁'
        papan.push(icon)
    }

    let papanBaris = []
    for (let i = 0; i < 6; i++) {
        let baris = papan.slice(i * 10, i * 10 + 10)
        if (i % 2 === 0) baris.reverse()
        papanBaris.push((i % 2 === 0 ? '➡️ ' : '⬅️ ') + baris.join(' '))
    }
    return papanBaris.join('\n')
}

function lemparDadu() {
    return Math.floor(Math.random() * 6) + 1
}

function generateTanggaDanUlar() {
    let tangga = {}
    let ular = {}
    while (Object.keys(tangga).length < 4) {
        let atas = Math.floor(Math.random() * 55) + 2
        let bawah = Math.floor(Math.random() * (atas - 1)) + 1
        if (!tangga[atas] && !ular[atas] && !tangga[bawah] && !ular[bawah]) {
            tangga[bawah] = atas
        }
    }
    while (Object.keys(ular).length < 5) {
        let ekor = Math.floor(Math.random() * 55) + 2
        let kepala = Math.floor(Math.random() * (ekor - 1)) + 1
        if (!tangga[ekor] && !ular[ekor] && !tangga[kepala] && !ular[kepala]) {
            ular[ekor] = kepala
        }
    }

    return { tangga, ular }
}

function pindahPosisi(player, posisiPemain, tangga, ular) {
    let dadu = lemparDadu()
    let posisiBaru = posisiPemain[player] + dadu
    let infoTambahan = ''

    if (posisiBaru > 60) posisiBaru = 60

    if (tangga[posisiBaru]) {
        infoTambahan = `Player ${player + 1} naik tangga dari ${posisiPemain[player]} ke ${tangga[posisiBaru]}! 🪜`
        posisiBaru = tangga[posisiBaru]
    } else if (ular[posisiBaru]) {
        infoTambahan = `Player ${player + 1} terkena ular dan turun dari ${posisiPemain[player]} ke ${ular[posisiBaru]}! 🐍`
        posisiBaru = ular[posisiBaru]
    }

    posisiPemain[player] = posisiBaru
    return { posisiPemain, dadu, infoTambahan }
}

function mulaiGame(playerID) {
    let data = bacaData()
    let idGame = randomKarakter(5)
    let { tangga, ular } = generateTanggaDanUlar()

    data[idGame] = {
        posisiPemain: [1],
        giliran: 0,
        pemainJumlah: 1,
        playerIDs: [playerID],
        lastAction: Date.now(),
        tangga,
        ular
    }

    simpanData(data)
    return { message: `*ULAR TANGGA*\nGame dimulai! ID: ${idGame}\nPlayer 1 sudah siap\n\nKetuk tombol dibawah untuk gabung (maksimal 4 pemain).`, idGame }
}

function joinGame(idGame, playerID) {
    let data = bacaData()
    let game = data[idGame]
    
    if (!game) return 'Game dengan ID tidak ditemukan!'
    
    if (game.playerIDs.includes(playerID)) {
        return 'Kamu sudah bergabung di game ini!'
    }
    
    if (game.pemainJumlah >= 4) return 'Game sudah penuh, maksimal 4 pemain!'
    
    game.posisiPemain.push(1)
    game.pemainJumlah = game.posisiPemain.length
    game.playerIDs.push(playerID)
    game.lastAction = Date.now()

    simpanData(data)
    return `Player ${game.pemainJumlah} bergabung!`
}

function mainGame(idGame, playerID) {
    let data = bacaData()
    let game = data[idGame]
    
    if (!game) return 'Game tidak ada!'
    if (game.pemainJumlah < 2) {
        return 'Minimal 2 pemain harus bergabung untuk mulai bermain!'
    }

    let playerSekarang = game.giliran
    if (game.playerIDs[playerSekarang] !== playerID) {
        return `Bukan giliran lu, tunggu giliran Player ${game.giliran + 1}!`
    }
    
    let { posisiPemain, dadu, infoTambahan } = pindahPosisi(playerSekarang, game.posisiPemain, game.tangga, game.ular)
    game.posisiPemain = posisiPemain
    game.lastAction = Date.now()
    
    let papan = buatPapan(game.posisiPemain, game.tangga, game.ular)
    
    if (game.posisiPemain[playerSekarang] === 60) {
        addSaldo(game.playerIDs[playerSekarang], 5000)
        delete data[idGame]
        simpanData(data)
        clearTimeout(timers[idGame])
        return `Player ${playerSekarang + 1} menang! 🎉\nPapan Akhir:\n${papan}\n\nHadiah: +5.000 Saldo`
    }
    
    let hasil = `Player ${playerSekarang + 1} mendapat angka ${dadu}!\nPapan:\n${papan}\n\nStatus Pemain:\n` +
        game.posisiPemain.map((pos, index) => `Player ${index + 1}: ${index === 0 ? '🟩' : (index === 1 ? '🟦' : (index === 2 ? '🟨' : '🟫'))} (${pos})`).join('\n')
    
    if (infoTambahan) {
        hasil += `\n\n${infoTambahan}`
    }
    
    game.giliran = (game.giliran + 1) % game.pemainJumlah
    simpanData(data)
    return hasil
}

function hapusGame(idGame) {
    let data = bacaData()
    
    if (!data[idGame]) return 'Tidak ada game untuk dihapus!'
    
    delete data[idGame]
    simpanData(data)
    clearTimeout(timers[idGame])
    return 'Game telah diakhiri!'
}

function cariIdGame(playerID) {
    let data = bacaData()
    for (let idGame in data) {
        if (data[idGame].playerIDs.includes(playerID)) {
            return idGame
        }
    }
    return null
}

function mainGameAuto(playerID) {
    let idGame = cariIdGame(playerID)
    if (!idGame) return 'Lu ga ada di sesi game manapun!'
    return mainGame(idGame, playerID)
}

function hapusGameAuto(playerID) {
    let idGame = cariIdGame(playerID)
    if (!idGame) return 'Lu ga ada di sesi game manapun!'

    let data = bacaData()
    if (data[idGame].playerIDs[0] !== playerID) {
        return 'Hanya Player 1 yang bisa menghapus game!'
    }

    return hapusGame(idGame)
}

function getRewards(level) {
let saldo = 5000
let limit = 100
if (level >= 10) {
saldo += 2000
limit += 50
}
return { saldo, limit }
}

async function rapihin(code) {
    let indentLevel = 0
    const indentSize = 2
    let beautified = ''
    let inString = false
    let inSingleLineComment = false
    let inMultiLineComment = false
    for (let i = 0; i < code.length; i++) {
        const char = code[i]
        const nextChar = code[i + 1]
        if (!inString && (char === '"' || char === "'")) {
            inString = char
            beautified += char
            continue
        } else if (inString === char) {
            inString = false
            beautified += char
            continue
        }
        if (char === '/' && nextChar === '/') {
            inSingleLineComment = true
        }
        if (char === '/' && nextChar === '*') {
            inMultiLineComment = true
        }
        if (inSingleLineComment) {
            beautified += char
            if (char === '\n') {
                inSingleLineComment = false
                beautified += ' '.repeat(indentLevel * indentSize)
            }
            continue
        }
        if (inMultiLineComment) {
            beautified += char
            if (char === '*' && nextChar === '/') {
                inMultiLineComment = false
                beautified += nextChar
                i++
            }
            continue
        }
        if (char === '{' || char === '[' || char === '(') {
            indentLevel++
            beautified += char + '\n' + ' '.repeat(indentLevel * indentSize)
        } else if (char === '}' || char === ']' || char === ')') {
            indentLevel--
            beautified += '\n' + ' '.repeat(indentLevel * indentSize) + char
        } else if (char === ';') {
            beautified += ';\n' + ' '.repeat(indentLevel * indentSize)
        } else if (char === '\n') {
            beautified += '\n' + ' '.repeat(indentLevel * indentSize)
        } else if (char !== ' ' || (beautified[beautified.length - 1] !== ' ' && beautified[beautified.length - 1] !== '\n')) {
            beautified += char
        }
    }

    return beautified
}

async function rapihin2(code) {
    let hasil = ''
    let inString = false
    let inSingleLineComment = false
    let inMultiLineComment = false

    for (let i = 0; i < code.length; i++) {
        const char = code[i]
        const nextChar = code[i + 1]

        // Cek jika sedang dalam string
        if (!inString && (char === '"' || char === "'")) {
            inString = char
            hasil += char
            continue
        } else if (inString === char) {
            inString = false
            hasil += char
            continue
        }

        // Cek jika sedang dalam komentar single-line
        if (char === '/' && nextChar === '/') {
            inSingleLineComment = true
        }
        if (char === '/' && nextChar === '*') {
            inMultiLineComment = true
        }
        if (inSingleLineComment) {
            hasil += char
            if (char === '\n') {
                inSingleLineComment = false
            }
            continue
        }
        if (inMultiLineComment) {
            hasil += char
            if (char === '*' && nextChar === '/') {
                inMultiLineComment = false
                hasil += nextChar
                i++
            }
            continue
        }
        if (char === '\n') {
            hasil += '\n'
        } else if (char !== ' ' && char !== '\t') {
            hasil += char
        } else if (hasil[hasil.length - 1] !== ' ' && hasil[hasil.length - 1] !== '\n') {
            hasil += char
        }
    }

    return hasil
}

const { exec } = require('child_process')
function addWm(imagePath, watermarkText, outputPath) {
  return new Promise((resolve, reject) => {
    const command = `convert "${imagePath}" -fill "rgba(192,192,192,0.3)" -pointsize 32 -gravity northwest -annotate +0+0 '${watermarkText}' -gravity northeast -annotate +0+0 '${watermarkText}' -gravity southwest -annotate +0+0 '${watermarkText}' -gravity southeast -annotate +0+0 '${watermarkText}' "${outputPath}"`

    exec(command, (error) => {
      if (error) {
        console.error('Error saat menambahkan watermark:', error)
        return reject(error)
      }
      resolve(outputPath)
    })
  })
}

const api_key = "E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv";

async function fetchDNSRecords(apiKey, domain) {
try {
const response = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${domain}`, {
headers: { "X-Api-Key": apiKey },
contentType: "application/json",
});
const records = await response.json();
return records;
} catch (error) {
console.log(error);
throw new Error("❌ Gagal mengambil rekaman DNS.");
}
}

async function fetchDNSRecordsFromHackertarget(domain) {
try {
const response = await fetch(`https://api.hackertarget.com/dnslookup/?q=${domain}`);
return await response.text();
} catch (error) {
console.log(error);
throw new Error("❌ Gagal mengambil rekaman DNS dari hackertarget.");
}
}

async function convertRecords(domain) {
try {
const records = await fetchDNSRecords(api_key, domain);
return records.map((record, index) => {
return `🔍 [${index + 1}]:\n${Object.entries(record).map(([key, value]) => {
const input = key;
const output = input.charAt(0).toUpperCase() + input.slice(1).replace(/_/g, " ");
return `*${output}:* ${typeof value === 'string' ? value.replace(/\.$/, '') : value}`;
}).join('\n')}`;
}).join('\n');
} catch (error) {
console.log(error);
return await fetchDNSRecordsFromHackertarget(domain);
}
}

const ipinfoToken = '882ffefc502ce1'; 

async function getIPInfo(ip) {
const response = await axios.get(`http://ipinfo.io/${ip}/json?token=${ipinfoToken}`);
return response.data;
}

const { AssemblyAI } = require('assemblyai')
async function audio2txt(audioFile) {
const client = new AssemblyAI({
apiKey: '429b7d06170949669b4c77383ac68182' 
})
const params = {
audio: audioFile,
speaker_labels: true
}
try {
const transcript = await client.transcripts.transcribe(params)
if (transcript.status === 'error') {
console.error(`Transcription failed: ${transcript.error}`)
return null
}
let result = transcript.text + "\n\n"
for (let utterance of transcript.utterances) {
result += `Speaker ${utterance.speaker}: ${utterance.text}\n`
}
return result
} catch (err) {
console.error('Error:', err)
return null
}
}

function ubahFps(inputPath, outputPath, targetFPS) {
return new Promise((resolve, reject) => {
ffmpeg(inputPath)
.outputOptions([
`-r ${targetFPS}`
])
.on('end', () => resolve(outputPath))
.on('error', (err) => reject(err))
.save(outputPath)
})
}

function detekFps(inputPath) {
return new Promise((resolve, reject) => {
ffmpeg.ffprobe(inputPath, (err, metadata) => {
if (err) {
reject(err)
return
}
const videoStream = metadata.streams.find(stream => stream.codec_type === 'video')
if (videoStream && videoStream.r_frame_rate) {
const [numerator, denominator] = videoStream.r_frame_rate.split('/').map(Number)
const fps = numerator / denominator
resolve(fps)
} else {
reject(new Error('Tidak dapat menemukan stream video'))
}
})
})
}

function speedVideo(inputPath, outputPath, kecepatan) {
return new Promise((resolve, reject) => {
let speedFactor
switch (kecepatan) {
case '0.25x':
speedFactor = 0.25
break
case '0.5x':
speedFactor = 0.5
break
case '1x':
speedFactor = 1
break
case '1.5x':
speedFactor = 1.5
break
case '2x':
speedFactor = 2
break
default:
return reject(new Error('Kecepatan tidak valid. Pilih antara 0.25x, 0.5x, 1x, 1.5x, atau 2x'))
}
ffmpeg(inputPath)
.outputOptions([
'-vf', `setpts=${1/speedFactor}*PTS`,
'-af', `atempo=${speedFactor}`
])
.on('end', () => resolve(outputPath))
.on('error', (err) => reject(err))
.save(outputPath)
})
}

async function getEwalletInfo(accountNumber) {
const baseUrl = 'https://api-rekening.lfourr.com/getEwalletAccount';
const fetchAccount = async (bankCode) => {
try {
const response = await fetch(`${baseUrl}?bankCode=${bankCode}&accountNumber=${accountNumber}`);
const result = await response.json();
return result.status === true ? result.data : null;
} catch (error) {
return null;
}
};
const gopay = await fetchAccount('GOPAY');
const ovo = await fetchAccount('OVO');
const dana = await fetchAccount('DANA');
let result = `*GOPAY ACCOUNT*\n`;
result += `Name: ${gopay ? gopay.accountname : '-'}\n`;
result += `Number: ${gopay ? gopay.accountnumber : '-'}\n\n`;
result += `*OVO ACCOUNT*\n`;
result += `Name: ${ovo ? ovo.accountname : '-'}\n`;
result += `Number: ${ovo ? ovo.accountnumber : '-'}\n\n`;
result += `*DANA ACCOUNT*\n`;
result += `Name: ${dana ? dana.accountname : '-'}\n`;
result += `Number: ${dana ? dana.accountnumber : '-'}`;
return result;
}   

function Cerpen(category) {
return new Promise(async (resolve, reject) => {
let title = category.toLowerCase().replace(/[()*]/g, "");
let judul = title.replace(/\s/g, "-");
let page = Math.floor(Math.random() * 5) + 1;
let get = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
let $ = cheerio.load(get.data);
let link = [];
$('article.post').each(function (a, b) {
link.push($(b).find('a').attr('href'));
});
let random = link[Math.floor(Math.random() * link.length)];
let res = await axios.get(random);
let $$ = cheerio.load(res.data);
let hasil = {
title: $$('#content > article > h1').text(),
author: $$('#content > article').text().split('Cerpen: ')[1]?.split('Kategori: ')[0]?.trim(),
kategori: $$('#content > article').text().split('Kategori: ')[1]?.split('\n')[0]?.trim(),
lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1]?.split('\n')[0]?.trim(),
cerita: $$('#content > article > p').text()
};
resolve(hasil);
});
}

async function Andro1(query) {
const url = `https://an1.com/?story=${query}&do=search&subaction=search`;
const { data } = await axios.get(url);
const $ = cheerio.load(data);
const items = [];
$('.item').each((index, element) => {
const name = $(element).find('.name a span').text();
const developer = $(element).find('.developer').text();
const rating = $(element).find('.current-rating').css('width').replace('%', '');
const imageUrl = $(element).find('.img img').attr('src');
const link = $(element).find('.name a').attr('href');
items.push({
name,
developer,
rating: parseFloat(rating) / 20,
imageUrl,
link,
})});
return items;
}

async function liteApks(query) {
const url = `https://liteapks.com/?s=${encodeURIComponent(query)}`;
const { data } = await axios.get(url);
const $ = cheerio.load(data);
let results = [];
$('a.archive-post').each((i, el) => {
let title = $(el).find('h3.h6.font-weight-semibold.text-truncate.w-100.mb-1').text().trim();
let version = $(el).find('div.small.text-truncate.text-muted span.align-middle').first().text().trim();
let size = $(el).find('div.small.text-truncate.text-muted span.align-middle').last().text().trim();
let mod = $(el).find('div.small.text-truncate.text-muted span.align-middle').eq(2).text().trim();
let link = $(el).attr('href');
let image = $(el).find('img').attr('src');
results.push({ title, version, size, mod, link, image });
});
return results;
}

async function cBaby(urlBapak, urlEmak, gender = 'girl') {
  const fetchImageAsBase64 = async (imageUrl) => {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
      return `data:image/jpeg;base64,${Buffer.from(response.data).toString('base64')}`
  }
  const apiHeaders = {
    'content-type': 'application/json',
    'origin': 'https://ai-baby-generator.net',
    'referer': 'https://ai-baby-generator.net/in',
    'user-agent': 'Postify/1.0.0',
  }
  try {
    const fotobapak = await fetchImageAsBase64(urlBapak)
    const fotoemak = await fetchImageAsBase64(urlEmak)
    if (!fotobapak || !fotoemak) {
      throw new Error('Gagal fetch salah satu gambar. Proses dihentikan.')
    }
    const generateUrl = 'https://ai-baby-generator.net/api/ai.generateImage?batch=1'
    const generateData = {
      "0": {
        "json": {
          "fatherImage": fotobapak,
          "motherImage": fotoemak,
          "gender": gender,
        },
      },
    }
    const generateResponse = await axios.post(generateUrl, generateData, { headers: apiHeaders })
    const taskId = generateResponse.data[0].result.data.json.taskId
    const taskUrl = 'https://ai-baby-generator.net/api/ai.getTask?batch=1'
    let result
    do {
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const taskData = {
        "0": {
          "json": {
            "taskId": taskId,
          },
        },
      }
      const taskResponse = await axios.post(taskUrl, taskData, { headers: apiHeaders })
      result = taskResponse.data[0].result.data.json
    } while (result.status !== 'SUCCEED')
    return result.imageUrl
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = { remini, ephoto, CarbonifyV1, CarbonifyV2, mediafireDl, getMimeType, ssweb, tiktokSearchVideo, searchSpotifyTracks, pinterest, toBase64, toOriginal, obfusc, deobfusc, toGhRaw, toGhOri, getInput, verifyPassword, verifyPhoneNumber,toFont, kapital, addResponList, getDataResponList, isAlreadyResponList, sendResponList, isAlreadyResponListGroup, delResponList, updateResponList, removeBg, addSewaGroup, getSewaExpired, getSewaPosition, expiredCheck, checkSewaGroup, getAllPremiumUser, listCase, isFiltered, addFilter, addSpam, ResetSpam, isSpam, addAfkUser, checkAfkUser, getAfkReason, getAfkTime, getAfkId, getAfkPosition, getRegisteredRandomId, addRegisteredUser, checkRegisteredUser, createSerial, obfus1, obfus2, autoLevelUp, getprodukDariFile, simpenProduknya, getidProduk, cekProduknye, addprodukzz, delprodukzz, updprodukzz, getprodukdb, simpenSmTr, getSmTr, getTrId, cIdTrnya, saveTrnye, simpenDisc, getDisczz, addDisczz, persenDiskonnya, ngerestokk, bacaData, simpanData, buatPapan, lemparDadu, generateTanggaDanUlar, pindahPosisi, mulaiGame, joinGame, mainGame, hapusGame, cariIdGame, mainGameAuto, hapusGameAuto, getRewards, rapihin, rapihin2, addWm, speedVideo, detekFps, ubahFps, audio2txt, getIPInfo,convertRecords, fetchDNSRecordsFromHackertarget, fetchDNSRecords, getEwalletInfo, ytdl, liteApks, Andro1, Cerpen, cBaby }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})