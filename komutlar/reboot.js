const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bot yeniden baþlatýlýyor").then(msg => {
        console.log("[BOT]Yeniden baþlatýlýyor | [PBOY]");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden baþlatýr',
  usage: 'reboot'
};
