const Discord = require('discord.js');


exports.run = function(client, message, args) {

    var öneri = args.slice(0).join(' ');
    var guildID = "595381148100591618";
    var channelID = "656101824742424627";

    if (!öneri){
        return message.reply("Bir mesaj belirtin! Doðru kullaným: **ac!öneri <mesaj>**");
    } else {

        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "Öneri")
            .addField("Kullanýcý:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("Öneri", öneri)

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("Öneriniz alýnmýþtýr! Teþekkür ederiz.");
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner"],
  permLevel: 0
};

exports.help = {
  name: 'öneri',
  description: "bot hakkýndaki önerilerinizi bot sahiplerine ulaþtýrýr",
  usage: 'öneri <mesaj>'
};