const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
const ozelmesajuyari = new Discord.RichEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setAuthor(message.author.avatarURL + ' D�nen Renkler!')
.addField('**Oyuncu Komutlar� ��in �zel Mesajlarda Kullan�lamaz!**')
return message.author.sendEmbed(ozelmesajuyari); }
if (message.channel.type !== 'dm') {
const sunucubilgi = new Discord.RichEmbed()
.setColor(0xff0000)
.setTimestamp()
.setDescription('')
.setImage(`https://img.webme.com/pic/k/kinghaninyeri/donenrenkler.gif`)
return message.channel.sendEmbed(sunucubilgi);
}
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'd�nenrenkler',
description: 'd�nenrenkler',
usage: 'd�nenrenkler'
};