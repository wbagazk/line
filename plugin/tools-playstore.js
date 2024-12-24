const { fetchJson } = require('../lib/general/myfunc')

let handler = async (m, { Line, text, command }) => {
    if (!text) return m.reply(`Contoh: ${command} whatsapp`)
    try {
        let loo = await fetchJson(`https://api.vreden.my.id/api/playstore?query=${encodeURIComponent(text)}`)
        let yoo = loo.result[0]
        let tekz = `••••>> *${yoo.nama.toUpperCase()}*`
        tekz += `\nDeveloper: ${yoo.developer}`
        tekz += `\nRating: ${yoo.rate2}`
        tekz += `\nLink: ${yoo.link}`
        tekz += `\nLink dev: ${yoo.link_dev}\n\n© Line-2024`
        await Line.sendMessage(m.chat, { image: { url: yoo.img }, caption: tekz }, { quoted: m })
    } catch (err) {
        console.error(err)
        m.reply(err)
    }
}

handler.command = ["ps"]
handler.tags = ["information"]
handler.help = ["playstore", "pstore"].map((a) => a + " *text*")
module.exports = handler