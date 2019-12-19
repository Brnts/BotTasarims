    
const Discord = require("discord.js")
exports.run = (bot, message) => {
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - �YE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Ailemde **${bot.guilds.size}** kadar sunucu var ! (Bot)`)
      message.delete();
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz'],
  permLevel: 4
};

exports.help = {
  name: "ailemiz",
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};