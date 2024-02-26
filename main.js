const TelegramBot = require("node-telegram-bot-api")

const token = "TOKEN BOT KAMU" // ganti token bot kamu cara bikinya di botFather
const options = {
    polling:true 
}


const uhuybot = new TelegramBot(token, options)
//dapat diganti dengan seru atau lainnya
const prefix = "."

const sayHi = new RegExp(`^${prefix}halo$`)
const gempa = new RegExp(`^${prefix}gempa$`)

uhuybot.onText(sayHi, (callback) => {
    uhuybot.sendMessage(callback.from.id, "MASA SIH BISA COBA KETIK .gempa")
})
// Untuk Manggil info gempa ketik .gempa prefix dapat di ganti dengan kode apapun
uhuybot.onText(gempa, async (callback) => {
    const BMKG_ENDPOINT = "https://data.bmkg.go.id/DataMKG/TEWS/"

    const apiCall = await fetch(BMKG_ENDPOINT + "autogempa.json")
    const {
        Infogempa: { 
            gempa: {
                Jam, Tanggal, Magnitude, Wilayah, Dirasakan, Potensi, Shakemap
            }
         }
        } = await apiCall.json()

        const BMKGImage = BMKG_ENDPOINT + Shakemap
        const resultText =
        `Jam: ${Tanggal} | ${Jam}
        Wilayah: ${Wilayah}
        Besaran: ${Magnitude} SR
        Potensi: ${Potensi}
        Dirasakan: ${Dirasakan} `

        uhuybot.sendPhoto(callback.from.id, BMKGImage, {
            caption: resultText
        })
})
