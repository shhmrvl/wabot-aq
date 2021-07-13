// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Please put your issues together with the command!'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksmimum adalah 300 Teks sahaja!'
    const laporan = `*「 TICKET 」*\nNO : wa.me/${m.sender.split`@`[0]}\nISSUES : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v = conn.user.jid && v = '60174336114@s.whatsapp.net','60103751558@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('「 *BAKASUPPORT* 」\n\nYour issues had been submit, Admin will respond soon!\n\n@BakaCrew')
}
handler.help = ['support', 'ticket'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(support|ticket)$/i

module.exports = handler
