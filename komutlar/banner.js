const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`L�tfen yaz� yaz�n!`)
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new Discord.RichEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter('Banner Olu�turuldu!')
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
    description: 'Yazd���n�z yaz�y� bannera �evirir.',
    usage: 'banner <yaz�>'
}