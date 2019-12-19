const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalýsýn!')
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajlarý Yönet** iznine sahip olmalýsýn!`);

    const members = message.guild.members.filter(member => member.user.presence.game && /(discord|http|.com|.net|.org|invite|Ýnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.game.name));
    const memberss = message.guild.members.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|Ýnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
    const embed = new Discord.RichEmbed()
        .addField('Oynuyor Mesajý Reklam Ýçeren Kullanýcýlar', members.map(member => `${member} = ${member.user.presence.game.name}`).join("\n") || "Kimsenin oynuyor mesajý reklam içermiyor.")
        .addField('Kullanýcý Adý Reklam Ýçeren Kullanýcýlar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanýcý adý reklam içermiyor.")
        .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['reklam-ara', 'reklamara', 'reklamtaramasý'],
    permLevel: 2
}

exports.help = {
    name: 'reklam-taramasý',
  category: 'moderasyon',
    description: 'Kullanýcýlarýn Oynuyor mesajýndaki ve Kullanýcý adlarýndaki reklamlarý tarar.',
    usage: 'reklam-taramasý'
}