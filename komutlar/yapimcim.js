const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Yap�mc�m: ???????????????? - PowerBoy [0.7k] ?? ');
    message.channel.sendEmbed(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yap�mc�m'],
  permLevel: 0
};

exports.help = {
  name: 'yapimcim',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};