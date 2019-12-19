const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: Only Kingdom - Discord Sunucusu",
    url: "https://discord.gg/JZqSpnz",
    description: "Ýlk sponsor , bu sunucu bir çok özellik barýndýrýyor.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destekci', 'destekçi'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorlarý gösterir.',
  usage: 'sponsor'
};
