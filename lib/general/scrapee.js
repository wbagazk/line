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

(function (_0x4216ba, _0x4bd30c) {
  const _0x58bf37 = _0x4216ba();
  while (true) {
    try {
      const _0x4d96b8 = -parseInt(_0x2672(559, -0x198)) / 1 * (parseInt(_0x2672(335, -0x20)) / 2) + -parseInt(_0x2672(385, 0x29)) / 3 + parseInt(_0x2672(457, -0x114)) / 4 * (-parseInt(_0x2672(363, -0x1df)) / 5) + parseInt(_0x2672(652, -0xe6)) / 6 * (-parseInt(_0x2672(322, -0x15f)) / 7) + -parseInt(_0x2672(661, 0xc)) / 8 * (-parseInt(_0x2672(617, -0x11b)) / 9) + parseInt(_0x2672(588, 0xb5)) / 10 * (-parseInt(_0x2672(505, 0x69)) / 11) + parseInt(_0x2672(574, -0x152)) / 12;
      if (_0x4d96b8 === _0x4bd30c) {
        break;
      } else {
        _0x58bf37.push(_0x58bf37.shift());
      }
    } catch (_0x2165d8) {
      _0x58bf37.push(_0x58bf37.shift());
    }
  }
})(_0x2b4e, 844972);
function _0x2565b9(_0x168984, _0x3a3af2, _0x2c3c02, _0x2d7642) {
  return _0x2672(_0x2c3c02 - 0xc3, _0x3a3af2);
}
function hi() {
  const _0xe89188 = function () {
    let _0x13c073 = true;
    return function (_0x2ae19c, _0x4d35d3) {
      const _0x49d32e = _0x13c073 ? function () {
        if (_0x4d35d3) {
          const _0x141b6a = _0x4d35d3.apply(_0x2ae19c, arguments);
          _0x4d35d3 = null;
          return _0x141b6a;
        }
      } : function () {};
      _0x13c073 = false;
      return _0x49d32e;
    };
  }();
  const _0x30f5ae = _0xe89188(this, function () {
    return _0x30f5ae.toString().search("(((.+)+)+)+$").toString().constructor(_0x30f5ae).search("(((.+)+)+)+$");
  });
  _0x30f5ae();
  const _0x35e445 = function () {
    let _0x57de02 = true;
    return function (_0x1c4796, _0x16feaf) {
      const _0x1b4d99 = _0x57de02 ? function () {
        if (_0x16feaf) {
          const _0x7f1e9 = _0x16feaf.apply(_0x1c4796, arguments);
          _0x16feaf = null;
          return _0x7f1e9;
        }
      } : function () {};
      _0x57de02 = false;
      return _0x1b4d99;
    };
  }();
  const _0x325339 = _0x35e445(this, function () {
    const _0x1d5f18 = function () {
      let _0x10e0c5;
      try {
        _0x10e0c5 = Function("return (function() {}.constructor(\"return this\")( ));")();
      } catch (_0x1a6f38) {
        _0x10e0c5 = window;
      }
      return _0x10e0c5;
    };
    const _0xf516e4 = _0x1d5f18();
    const _0x3786bd = _0xf516e4.console = _0xf516e4.console || {};
    const _0x13866c = ['log', "warn", 'info', "error", "exception", "table", "trace"];
    for (let _0x4d9e1d = 0; _0x4d9e1d < _0x13866c.length; _0x4d9e1d++) {
      const _0x1be199 = _0x35e445.constructor.prototype.bind(_0x35e445);
      const _0x422fcc = _0x13866c[_0x4d9e1d];
      const _0x1e0180 = _0x3786bd[_0x422fcc] || _0x1be199;
      _0x1be199.__proto__ = _0x35e445.bind(_0x35e445);
      _0x1be199.toString = _0x1e0180.toString.bind(_0x1e0180);
      _0x3786bd[_0x422fcc] = _0x1be199;
    }
  });
  _0x325339();
  console.log("Hello World!");
}
hi();
function _0x35dbb6(_0x20343d, _0x5c0d9a, _0x280e2d, _0x32b257) {
  return _0x2672(_0x280e2d + 0x8a, _0x32b257);
}
const decodedURL = Buffer.from("aHR0cHM6Ly9naXRodWIuY29tL0l5YWFUYXVLYW11UHJvL1B1bnlhR3VlL3Jhdy9yZWZzL2hlYWRzL21haW4vY29uZmlybS1rZXkvZGF0YWJhc2UuanNvbg==", 'base64').toString("utf-8");
function _0x2672(_0x21faec, _0x2298d7) {
  const _0x1f48bf = _0x2b4e();
  _0x2672 = function (_0x589f6c, _0x3b83a3) {
    _0x589f6c = _0x589f6c - 278;
    let _0x4265aa = _0x1f48bf[_0x589f6c];
    if (_0x2672.PddRbn === undefined) {
      var _0x44dcab = function (_0x704009) {
        let _0x249fe5 = '';
        let _0x4428b9 = '';
        let _0x5ad60d = _0x249fe5 + _0x44dcab;
        let _0x1a8f59 = 0;
        let _0x44869c;
        let _0x3ef8f7;
        for (let _0x2eb3cf = 0; _0x3ef8f7 = _0x704009.charAt(_0x2eb3cf++); ~_0x3ef8f7 && (_0x44869c = _0x1a8f59 % 4 ? _0x44869c * 64 + _0x3ef8f7 : _0x3ef8f7, _0x1a8f59++ % 4) ? _0x249fe5 += _0x5ad60d.charCodeAt(_0x2eb3cf + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x44869c >> (-2 * _0x1a8f59 & 6)) : _0x1a8f59 : 0) {
          _0x3ef8f7 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x3ef8f7);
        }
        let _0x1e64d9 = 0;
        for (let _0x2d96aa = _0x249fe5.length; _0x1e64d9 < _0x2d96aa; _0x1e64d9++) {
          _0x4428b9 += '%' + ('00' + _0x249fe5.charCodeAt(_0x1e64d9).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x4428b9);
      };
      _0x2672.yxporE = _0x44dcab;
      _0x21faec = arguments;
      _0x2672.PddRbn = true;
    }
    const _0x4bdd6f = _0x1f48bf[0];
    const _0x55cc39 = _0x589f6c + _0x4bdd6f;
    const _0x27288a = _0x21faec[_0x55cc39];
    if (!_0x27288a) {
      const _0x15be78 = function (_0x27dbac) {
        this.EcLCUl = _0x27dbac;
        this.lNBVhK = [1, 0, 0];
        this.PyOTon = function () {
          return 'newState';
        };
        this.Phidff = "\\w+ *\\(\\) *{\\w+ *";
        this.egQfxG = "['|\"].+['|\"];? *}";
      };
      _0x15be78.prototype.luRGMJ = function () {
        const _0x5ec3c2 = new RegExp(this.Phidff + this.egQfxG);
        const _0x3ca280 = _0x5ec3c2.test(this.PyOTon.toString()) ? --this.lNBVhK[1] : --this.lNBVhK[0];
        return this.UtEvsA(_0x3ca280);
      };
      _0x15be78.prototype.UtEvsA = function (_0x1b52f0) {
        if (!Boolean(~_0x1b52f0)) {
          return _0x1b52f0;
        }
        return this.lBQyap(this.EcLCUl);
      };
      _0x15be78.prototype.lBQyap = function (_0x3d837c) {
        let _0x56648e = 0;
        for (let _0x22811e = this.lNBVhK.length; _0x56648e < _0x22811e; _0x56648e++) {
          this.lNBVhK.push(Math.round(Math.random()));
          _0x22811e = this.lNBVhK.length;
        }
        return _0x3d837c(this.lNBVhK[0]);
      };
      new _0x15be78(_0x2672).luRGMJ();
      _0x4265aa = _0x2672.yxporE(_0x4265aa);
      _0x21faec[_0x55cc39] = _0x4265aa;
    } else {
      _0x4265aa = _0x27288a;
    }
    return _0x4265aa;
  };
  return _0x2672(_0x21faec, _0x2298d7);
}
let passwordVerified = false;
async function verifyPassword() {
  if (passwordVerified) {
    return;
  }
  let _0x239e5b = false;
  let _0x52fc9c = '';
  console.log(chalk.yellow.bold("Masukan password tuk akses sc ini"));
  while (!_0x239e5b) {
    _0x52fc9c = await getInput(chalk.yellow.bold("Password: "));
    const _0x4c1ca8 = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/95.0.4638.69 Safari/537.36"
    };
    const _0x2fa9af = {
      'headers': _0x4c1ca8
    };
    const _0x3e6e2c = await axios.get(decodedURL, _0x2fa9af).then(_0x59a626 => _0x59a626.data)["catch"](() => null);
    if (_0x3e6e2c && _0x3e6e2c.key === _0x52fc9c) {
      console.log(chalk.green.bold("Password script benar!"));
      _0x239e5b = true;
      passwordVerified = true;
    } else {
      console.log(chalk.red.bold("Password script salah!"));
      await new Promise(_0xfbc7a5 => setTimeout(_0xfbc7a5, 2000));
    }
  }
}
const decodedNumbersURL = Buffer.from("aHR0cHM6Ly9naXRodWIuY29tL0l5YWFUYXVLYW11UHJvL1B1bnlhR3VlL3Jhdy9yZWZzL2hlYWRzL21haW4vY29uZmlybS1udW1iZXIvZGF0YWJhc2UuanNvbg", 'base64').toString('utf-8');
const _0x325ac7 = {
  input: process.stdin,
  output: process.stdout
};
const rl = readline.createInterface(_0x325ac7);
const _0x1b33c5 = {};
function _0x2b4e() {
  const _0x33706f = ['zwGGsvaGCgvUzW', 'yLDgCgjPowTzwa', 'y3jPChqGyMvUyq', 'zxHJzxb0Aw9U', 'iZrdquy1mdSGyW', 'CfnYywi', 'yxv0Aa', 'CM9ZzxmGDMvYAq', 'ihn0EwXLpsjMBW', 'icaGicaGidXWia', 'DhjHy2u', 'zvjuyve', 'psjIywnRz3jVDq', 'D0vftxe', 'AxjPBsbRB2rLia', 'zfzoA0K', 'DwPjzLy', 'C3r5Bgu9iNbHza', 'AhrTBa', 'rxjYB3iGBwvUzW', 'AsbUyw50As4', 'sw9qtMO', 'CMrLCI10B3aTCG', 'wti5DeWWEhbIBq', 'DNfOAhG', 'icaGicaGpc9KAq', 'B3v0Chv0', 'q3DgD1m', 'EhqTywXPz246ia', 'EdSGBwfYz2LUoG', 'nfDvzwnfBa', 'ChaUpc9WpGOGia', 's29KzsbpvfaGyG', 'BMCGDgvSywGGza', 'As5PCgLMEs5VCG', 'z21HAwW', 'u1jvChq', 'DhLSzt0IzM9UDa', 'zNjVBq', 'iefUzge8l2GYpG', 'y2vUDgvYoYbIBW', 'oIaWoYi+8j+AGcblBW', 'uxf5vwm', 's29KzsbpvfaGAW', 'oIaWoYi+8j+uLYblBW', 'sLDswhG', 'ihrPzgfRigrPAq', 'iefUzgeU', 'zxHPDa', 'vxznEw0', 'EweGyMvYBgfRDq', 'zgf0yq', 'igzVBNqTzMfTAq', 'CZOGmtbWEdSIpG', 'mcaOv2LUzg93CW', 'qwrXvuO', 'Awr0AdOGnJbWEa', 'DJ4kicaGicaGpa', 'oIaXmhb4oYbIBW', 'zMy7igjVCMrLCG', 's29KzsbwzxjPzG', 'ywXPz246ignLBG', 'cK1HC3vRyw4GBG', 'ihbLCMnVyMfHBG', 'zgDdvwG', 'DhjPBq', 'ywXSB3DLzeLqCW', 'rMn4zLC', 'yZ0IAhr0Chm6lW', 'AgvHzhmVBwfPBG', 'zguGvMvYAwzPAW', 'iIbZDhLSzt0IDW', 'CM4GDgHPCYiPka', 'cIaGicaGidXKAq', 'ztOGmtrWEdSGyW', 'icaGicaGica8lW', 'qwTZzxmGyMvYAa', 'Awr0AdOGnJaWCa', 'mtfQt1f0r2O', 'z2v0', 'ywT0Awy', 'CMvXDwvZDfbHAq', 'igfRC2vZihnJia', 'txbZzNK', 'iJ5hDw5HA2fUia', 'BMDRyxqUpc9WpG', 'Dw9wDKi', 'BwfPBcbbBMrHlG', 'Aw5NoIaYmhb4oW', 'yZi5Dt0', 'Ahr0Chm6lY90lG', 'AhftA1a', 'psjMB250lxnPEG', 'zsbqywLYAw5Nia', 'ywrPDxm6iduWjq', 'iefUzgeUpc9WpG', 'z21HAwWUy29T', 'q3fXzhy', 'oYbTyxjNAw4TyG', 'wufwDfq', 'AMXbqwu', 'AwDODc1YywrPDq', 'A2DYB3vUzc1JBW', 'C2vUze1HAwW', 'pgrPDIbZDhLSzq', 'weXIqNG', 'cIaGicaGicaGia', 'DxPjCeO', 'twK5twfxnwXvmW', 'icaGphaGC3r5Ba', 'y29UC3rYDwn0BW', 'vgLKywSGzgfWyq', 'y3LPB2C', 's29KzsbqywLYAq', 'mhb4oYbIB3GTCW', 'zMXVB3i', 'BgLUzwfQytaZqa', 'zMfMyJSGCgfKza', 'EMXXDcbKChrUia', 'Ahr0Chm6lY9Yyq', 'mhb4oYb0zxH0lq', 'CvbUwhy', 'ihnLDgvSywGGnq', 'C3r5Bgu9iMzVBG', 'BwvUAxqUpc9WpG', 'Au9KsMi', 'D2vPz2H0oIbIBW', 'l2GYpGOGicaGia', 'Dc1ZAxPLoIaXna', 'svaGqw5Kyq', 'oIa1ChG7iJ5hDq', 'BMCGrgLRAxjPBq', 'mwn1BwTqyG', 'y3jPChqGC2fSyq', 'tNfqsfq', 'A29KzsbPBMKGDq', 'l2rPDJ4kicaGia', 'igLUAsb1BNr1AW', 'u3rHDhvZ', 'z3jLzw4', 'oxLzwgn1wJjSma', 'AwTPCMLTigTLia', 'DgfIBgu', 'wLDlEMW', 'CcbZDhLSzt0IzG', 'lxnPEMu6ide4Ca', 'EwvSBg93', 'ntu2otK1nZjAELzABgu', 'yMLUza', 'u3zrA2u', 'ugfZC3DVCMqGCW', 'igDHz2fSoG', 'BMn0Aw9UkcKG', 'yuHsmgnittzmEq', 'CKHLuKq', 'icaGia', 's29KzsbWywLYAq', 'zKvSwfe', 'BNqTC2L6ztOGmG', 'zLHyAum', 'CgfPCMLUzZO', 'ntm5nJiXmhjkuMfxsq', 'uefnrvC', 'zxjOyxnPBcbKAq', 'v2LUnJq7ihG2na', 'C29U', 'DLPqDLe', 'zguGAw5PigHHBG', 'CMv0DxjUicHMDq', 'zw5HCIe', 'zJSIpGOGicaGia', 'Bwf0igrHDgfUzW', 'yxbWBhK', 'CxfqDgm', 'CgfZCW', 'zxjYB3i', 'icaGpc9KAxy+cG', 'AgfKB3C6idaGna', 'u2jfAfK', 'lcaWlJePoYi+cG', 'oYi+twfZDwTRyq', 'wgPKCK4', 'D2XwBMe', 'A2v5', 'CxvLC3rPB24', 'AxyGC3r5Bgu9iG', 'vwLKzLi', 'zMLRyxnPlIblBW', 'C2vHCMnO', 'BgfRlG', 'otm3odyZtM5su01j', 'zguGCgfPCMLUzW', 'reTvwfy', 'y3jLyxrLsw50zq', 'yxnPie9uucdWN5Qapa', 'x19WCM90B19F', 'yxjLmZuYl1zLCG', 'zejUuuS', 'DhDIyum', 'rgLZzxr1ANvP', 'oYi+cIaGicaGia', 'zM9UDc1ZAxPLoG', 'AwTHC2KGywT1BG', 'B2rLie9uudOG', 'uMz1rxi', 'C2DJug4', 't1rq', 'z1DOy0i', 'B250lxnPEMu6ia', 'ywz0yxi', 'iZiXotzgmZSGyW', 'sMPiu2y', 'r2fNywWGBwvUzW', 'vhfWEfq', 'rwXKCNe', 'rLDUCLu', 'icaGicaGica8za', 'tgLUzq', 'ugvYy29IywfUia', 'tefpze4', 'twK5t2rxmwLAwa', 'tM9TB3iGAw5Pia', 'uhniB0q', 'swzTAg8', 'y3jLyxrLvhjHBG', 'mtjgBLrezLO', 'BgXtD2u', 'idiWChGGmdSIpG', 'DY5NAxrODwj1CW', 'CMKVntm3lJm2', 'v0HSrNC', 'igTLievTywLSiq', 'C3vIAMvJDa', 'D2fYBG', 'mtznsKLgAfm', 'Bgq7ig1HCMDPBG', 'BMqTy29SB3i6ia', 'mZSGBwfYz2LUoG', 'tvHLwNq', 'yw1IAwWGzgfMDa', 'mtHWEdSGBwfYzW', 'mJbWEcaWoYi+cG', 'zxjJB250zw50lG', 'B2XVCJOGiZG4oa', 'Bg9N', 'BsbRzsbLBwfPBa', 'zNHJn2iUANbNiG', 'AwzPCc9YzwzZlW', 'C3rKB3v0', 'Dw50DwSGBwvUyq', 'kcGOlISPkYKRkq', 'yuHwAwrytMXJBq', 'BhK6iefYAwfSla', 'uMHzBuz6wLm1Cq', 'C3rKAw4', 'ztSGCgfKzgLUzW', 'DgHLBG', 'yxiGsvaGzgfYAq', 'icaGicaGicaGia', 'v0rMBMC', 'yMeOmcWGmcWGma', 'BI5Sys9Ml2rSBq', 'uMPSwgm', 'wuL6B3a', 'AYbKAwL6Aw5Ryq', 'icaGica', 'CMzHy2u', 'BwfPBcb5yw5Nia', 'tNzIBLjSyM5rDq', 'igfSDd0Itg9NBW', 'tM9TB3iGDgLKyq', 'CMfUzg9T', 'zw1HAwWGqw5Kyq', 'oYi+r3vUywTHBG', 'zgLIBg9RAxiHia', 'zfLwv3u', 'BMnAB3K', 'icaGica8zgL2ia', 'oYbIB3jKzxiTCG', 'r2fNywWGBwvUza', 'lxjHzgL1CZOGmq', 'ksbbChbSzvDLyG', 'u1rPzLC', 'B0DeDue', 'E30Uy29UC3rYDq', 'v051Axm', 'icaGicaGicaGpa', 'zgL2pGOGicaGia', 'ihbLCMfUz2THDa', 'ihnHBNmTC2vYAq', 'shvds0S', 'ugfZC3DVCMq6ia', 'oYb0zxH0lwfSAq', 'Ahr0Chm6lY9HCa', 'y3LHBG', 'uuPdAui', 'BwuVotuUmc40nG', 'AdO8l3a+cIaGia', 'DwP1As4Gu2vSyq', 'B2XVCJOGiZmZmW', 'ihvUDhvRig1LBa', 'mZGUnJKGu2fMyq', 'mZqZody4merlqvffCq', 'icHlsfrntcWGrW', 'l3bVBwyYlMXHAq', 'qLHUDue', 'EMLUA2fUlG', 'z0Xeq1u', 'ChjVDg90ExbL', 'yM9Sza', 'BNr1AYb2zxjPzG', 'yLbxthC', 'A254Bsb4BxLT', 'Cg9UoIa', 'DKD0vuG', 'mti3mdyWngPVrwPkuG', 'ohb4oYbMB250lq', 'ig1LBMf1DgTHBG', 'vMnMEg4', 'yxbHDgTHBIbRBW', 'ieDPDeH1yJO', 'uwnfA1u', 'vxnLCI1bz2vUDa', 'EdSIpGOGicaGia', 'ALjjsxC', 'CvzUBg0', 'DIbZDhLSzt0IyG', 'B2XVCJOGD2HPDa', 'lxrVCdOGnxb4oW', 'icaGpgLTzYbZCG', 'y3rVCIGICMv0Dq', 'zguGugfPCMLUzW', 'CJOGi2y3zJDMnW', 'oIaZmhb4oYb0zq', 'Bg9YoIaJzMzMzG', 'DcbTzw1WzxjVBa', 'Dg9tDhjPBMC', 't1rqoG', 'y2f0y2G', 'mZmZoYi+cIaGia', 'rw1HAwW6ia', 'qwTZzxmGzgL0BW', 'zg11sw4', 'mZC0mJq5nwLsDMnUuq', 'y2PSs2q', 'uxDbBeS', 'twfZDwTHBIbWyq', 'ie5uideWlJa7ia', 'idm2ChG7igzVBG', 'CM91BMqTy29SBW', 'C1PWDhy', 'q1rjsMq', 'DxrRyw4GCgvYyq', 'Dw5lvwm', 'EwXLpsjTyxGTDW', 'DxrMltG', 'C2vYDMLJzq', 'vLrHr0z5wLrnmq', 'CMrLCI10B3aTBa', 'qxv0Ag9Y', 'l2rHDgfIyxnLlG', 'A2fTDsbHzgfSyq', 'B2v3suq', 'BNPvB3K', 'sufQC00', 'mZi5nZuXm3rqswrizq', 'zgL2ihn0EwXLpq', 'ywXHAceGq29Iyq', 'Aw5WDxq', 'CMLUz0nVzgu', 'B3r0B206idiWCa', 'CwfMz1O', 'zgLUzZOGmZbWEa', 'icaGpgrPDIbZDa', 'BwvZC2fNzq', 'zwf6Dvi', 'sxrwBvz5yvDzDG', 'refRtgG', 'z3LsBfa', 'tfrtqLi', 'ANnVBG', 'yw1IAwWGzgf0yq', 'y29UC29Szq', 'idWVzgL2pGOGia', 'v2rZtgK', 'yxr4yMe', 't1rqigrPA2LYAq', 'icaGicaGidXOmG', 'A2LYAw0GA2uGzq', 'ChGGmtjWEcbYzW', 'y29SB3i6icnMoq', 'Aw5JBhvKzxm', 'uw13Bxy', 'Aw5P', 'D0rtvKO', 'ida7iJ7WN5srieTVza', 'C3n3B3jKihr1AW', 'oYbTyxjNAw46ia', 'CMvK', 'r3bcExO', 'DKHls3a', 'AwTHC2KGt1rq', 'vvHJDva', 'DxnLCG', 'igTLihDOyxrZyq', 'ica8CcbZDhLSzq', 'shL6sNi'];
  _0x2b4e = function () {
    return _0x33706f;
  };
  return _0x2b4e();
}
_0x1b33c5.user = "bot.wbagazk@gmail.com";
_0x1b33c5.pass = "nbku uyzs luyd zwfr";
const _0x337543 = {
  service: "gmail",
  auth: _0x1b33c5
};
const transporter = nodemailer.createTransport(_0x337543);
async function getUserIP() {
  try {
    const _0x44f730 = await fetch("https://api.ipify.org?format=json");
    const _0x5b733d = await _0x44f730.json();
    return _0x5b733d.ip;
  } catch (_0x47a445) {
    console.error(chalk.red("Gagal mendapatkan IP:", _0x47a445.message));
    return null;
  }
}
async function getAllowedIPsFromGitHub() {
  try {
    const _0x58ed71 = await fetch("https://github.com/IyaaTauKamuPro/PunyaGue/raw/refs/heads/main/confirm-ip/database.json");
    const _0x2cba58 = await _0x58ed71.json();
    return _0x2cba58.allowedIPs;
  } catch (_0xfa2e29) {
    console.error(chalk.red("Error mengambil daftar IP dari GitHub:", _0xfa2e29.message));
    return [];
  }
}
async function checkIP() {
  try {
    const _0x4bd2ad = await getUserIP();
    if (!_0x4bd2ad) {
      throw new Error("Tidak dapat memperoleh IP pengguna.");
    }
    const _0x19f76a = await getAllowedIPsFromGitHub();
    const _0x103741 = _0x19f76a.includes(_0x4bd2ad) ? "Disetujui" : "Tidak Terdaftar";
    const _0x2ebf14 = {
      "IP Anda": _0x4bd2ad,
      Status: _0x103741,
      Author: "WBK"
    };
    console.table(_0x2ebf14);
    if (!_0x19f76a.includes(_0x4bd2ad)) {
      throw new Error("Akses ditolak: IP " + _0x4bd2ad + " tidak diizinkan.");
    }
    console.log(chalk.green("Akses berhasil disetujui. Selamat datang!"));
    return true;
  } catch (_0x50237e) {
    console.error(chalk.red(_0x50237e.message));
    process.exit(1);
  }
}
function getInput(_0x7f9c1f) {
  return new Promise(_0x54e5c5 => {
    rl.question(_0x7f9c1f, _0x17a16d => {
      _0x54e5c5(_0x17a16d);
    });
  });
}
async function sendOTP(_0x590795, _0x1b00b7) {
  const _0x1b10c7 = {
    from: 'WBK'
  };
  _0x1b10c7.to = _0x590795;
  _0x1b10c7.subject = "Kode Verifikasi OTP";
  _0x1b10c7.html = "\n      <div style=\"background-color: #f9fafb; padding: 20px; font-family: Arial, sans-serif;\">\n        <div style=\"max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\">\n          <div style=\"background-color: #4CAF50; color: white; padding: 30px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n            <img src=\"https://files.catbox.moe/gg3ccm.jp\" alt=\"Logo\" style=\"width: 60px; border-radius: 50%; margin-bottom: 20px;\">\n            <h2 style=\"font-size: 28px; font-weight: bold; margin: 0;\">🚀 Kode Verifikasi OTP 🚀</h2>\n            <p style=\"font-size: 14px; margin-top: 5px;\">Gunakan kode ini untuk verifikasi akun Anda.</p>\n          </div>\n          <div style=\"padding: 30px; text-align: center; background-color: #f7f7f7; color: #333;\">\n            <p style=\"font-size: 18px; margin: 0;\">🔐 Kode OTP kamu adalah:</p>\n            <div style=\"font-size: 36px; font-weight: bold; color: #4CAF50; margin: 20px 0;\">\n              " + _0x1b00b7 + "\n            </div>\n            <p style=\"font-size: 14px; color: #888;\">Masukkan kode ini untuk melanjutkan proses verifikasi. Kode ini hanya berlaku selama 5 menit.</p>\n          </div>\n        </div>\n      </div>\n    ";
  try {
    await transporter.sendMail(_0x1b10c7);
    console.log(chalk.green("Kode OTP berhasil dikirim ke email Anda."));
  } catch (_0x67e21b) {
    console.log(chalk.red("Gagal mengirim kode OTP:", _0x67e21b.message));
    throw new Error("Gagal mengirim kode OTP");
  }
}
async function sendPairingCode(_0x169dd0, _0x937562) {
  const _0x1f0675 = {
    from: "WBK",
    to: _0x169dd0,
    subject: "Kode Pairing Anda",
    html: "\n      <div style=\"background-color: #f9fafb; padding: 20px; font-family: Arial, sans-serif;\">\n        <div style=\"max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\">\n          <div style=\"background-color: #2196F3; color: white; padding: 30px; text-align: center; border-top-left-radius: 10px; border-top-right-radius: 10px;\">\n            <img src=\"https://files.catbox.moe/gg3ccm.jp\" alt=\"Logo\" style=\"width: 60px; border-radius: 50%; margin-bottom: 20px;\">\n            <h2 style=\"font-size: 28px; font-weight: bold; margin: 0;\">🔗 Kode Pairing Anda</h2>\n            <p style=\"font-size: 14px; margin-top: 5px;\">Gunakan kode ini untuk menautkan perangkat ke whatsapp.</p>\n          </div>\n          <div style=\"padding: 30px; text-align: center; background-color: #f7f7f7; color: #333;\">\n            <p style=\"font-size: 18px; margin: 0;\">🔑 Kode Pairing kamu adalah:</p>\n            <div style=\"font-size: 36px; font-weight: bold; color: #2196F3; margin: 20px 0;\">\n              " + _0x937562 + "\n            </div>\n            <p style=\"font-size: 14px; color: #888;\">Gunakan kode ini untuk menautkan perangkat.</p>\n          </div>\n        </div>\n      </div>\n    "
  };
  try {
    await transporter.sendMail(_0x1f0675);
    console.log(chalk.green("Kode pairing telah dikirim ke email Anda."));
  } catch (_0x10eec3) {
    console.log(chalk.red("Gagal mengirim kode pairing:", _0x10eec3.message));
    throw new Error("Gagal mengirim kode pairing");
  }
}
async function verifyPhoneNumber(_0x1bf7f4) {
  let _0x2d7426 = false;
  let _0x31c84b = '';
  let _0x7b95a1 = '';
  await checkIP();
  while (!_0x2d7426) {
    console.log(chalk.yellow.bold("\nMasukan nomor dan email yang aktif"));
    _0x31c84b = await getInput(chalk.yellow("Nomor Telepon: "));
    _0x7b95a1 = await getInput(chalk.yellow("Email: "));
    const _0x5484d8 = await axios.get(decodedNumbersURL).then(_0x4fd179 => _0x4fd179.data)["catch"](() => null);
    if (!_0x5484d8) {
      console.log(chalk.red("Gagal mengambil data, coba lagi nanti."));
      continue;
    }
    const {
      nomor: _0x12fc20,
      blacklist: _0x4cbbf4
    } = _0x5484d8;
    if (_0x4cbbf4.includes(_0x31c84b.trim())) {
      console.log(chalk.red("Nomor ini diblokir! Akses ditolak."));
      continue;
    }
    if (_0x12fc20.includes(_0x31c84b.trim())) {
      const _0x2e396b = Math.floor(100000 + Math.random() * 900000);
      await sendOTP(_0x7b95a1, _0x2e396b);
      console.log(chalk.green("OTP dikirim ke email Anda."));
      const _0xf67049 = await getInput(chalk.yellow("Masukkan Kode OTP: "));
      if (parseInt(_0xf67049.trim()) === _0x2e396b) {
        console.log(chalk.green("Kode OTP benar!"));
        console.log(chalk.cyan("Kode Pairing Dikirim ke Email!"));
        let _0x3b4069 = 0;
        while (_0x3b4069 < 5) {
          try {
            const _0x5e1e39 = await _0x1bf7f4.requestPairingCode(_0x31c84b.trim());
            if (_0x5e1e39) {
              await sendPairingCode(_0x7b95a1, _0x5e1e39);
              _0x2d7426 = true;
              break;
            }
          } catch (_0x37f473) {
            console.log(chalk.red("Percobaan " + (_0x3b4069 + 1) + " gagal:"), _0x37f473.message);
          }
          _0x3b4069++;
          await new Promise(_0x4b6c1a => setTimeout(_0x4b6c1a, 3000));
        }
        if (_0x3b4069 === 5) {
          console.log(chalk.red("Gagal mendapatkan kode pairing setelah 5 percobaan."));
        }
      } else {
        console.log(chalk.red("Kode OTP salah! Coba lagi."));
      }
    } else {
      console.log(chalk.red("Nomor tidak diizinkan!"));
    }
  }
}

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