const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: Only Kingdom - Discord Sunucusu",
    url: "https://discord.gg/JZqSpnz",
    description: "�lk sponsor , bu sunucu bir �ok �zellik bar�nd�r�yor.",
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destekci', 'destek�i'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorlar� g�sterir.',
  usage: 'sponsor'
};
