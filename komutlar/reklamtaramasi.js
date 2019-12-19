const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: | Bu komutu kullanabilmek i�in `Y�netici` yetkisine sahip olmal�s�n!')
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek i�in **Mesajlar� Y�net** iznine sahip olmal�s�n!`);

    const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|�nstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|�nstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Oynuyor Mesaj� Reklam ��eren Kullan�c�lar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesaj� reklam i�ermiyor.")
        .addField('Kullan�c� Ad� Reklam ��eren Kullan�c�lar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullan�c� ad� reklam i�ermiyor.")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-ara', 'reklamara', 'reklamtaramas�'],
    permLevel: 2
}

exports.help = {
    name: 'reklam-taramas�',
  category: 'moderasyon',
    description: 'Kullan�c�lar�n Oynuyor mesaj�ndaki ve Kullan�c� adlar�ndaki reklamlar� tarar.',
    usage: 'reklam-taramas�'
}