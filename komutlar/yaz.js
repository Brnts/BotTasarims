const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const mesaj = args.slice(0).join(' ')
  if (mesaj <1) {
      message.reply("Yazmam ��in Bir �eyler Gir!")
      } else {
        message.delete();
        message.channel.send(mesaj)
      }
  

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [], 
  permLevel: 3 
};

exports.help = {
  name: 'yaz',
  description: 'Bota istedi�inizi yazd�r�r',
  usage: 'yaz <mesaj>'
};