const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [g�n], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("� **Botun Sahibi**", "PowerBoy [0.7k] ??#0005  ")
  .addField("�  **Geli�tirici** ","?????????????????#0458 ")
  .addField("� **Bellek kullan�m�**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("� **�al��ma s�resi**", seksizaman)
  .addField("� **Kullan�c�lar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("� **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("� **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("� **Discord.JS s�r�m**", "v"+Discord.version, true)
  .addField("� **Node.JS s�r�m**", `${process.version}`, true)
  .addField("� **Ping**", bot.ping+" ms", true)
  .addField("� **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("� **Bit**", `\`${os.arch()}\``, true)
  .addField("� **��letim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**� Destek Sunucusu**", " [Sunucumuza Kat�l](https://discord.gg/JZqSpnz)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};