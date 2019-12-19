const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazý yazýn!`)
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter('Banner Oluþturuldu!')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'banner',
    description: 'Yazdýðýnýz yazýyý bannera çevirir.',
    usage: 'banner <yazý>'
}