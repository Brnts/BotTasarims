const Discord = require('discord.js');


exports.run = function(client, message, args) {

    var �neri = args.slice(0).join(' ');
    var guildID = "595381148100591618";
    var channelID = "656101824742424627";

    if (!�neri){
        return message.reply("Bir mesaj belirtin! Do�ru kullan�m: **ac!�neri <mesaj>**");
    } else {

        var embed = new Discord.RichEmbed()
            .setTimestamp()
            .addField("Eylem:", "�neri")
            .addField("Kullan�c�:", message.author.tag)
            .addField("ID", message.author.id)
            .addField("�neri", �neri)

        client.guilds.get(guildID).channels.get(channelID).send(embed);
        message.channel.send("�neriniz al�nm��t�r! Te�ekk�r ederiz.");
    };


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["�ner"],
  permLevel: 0
};

exports.help = {
  name: '�neri',
  description: "bot hakk�ndaki �nerilerinizi bot sahiplerine ula�t�r�r",
  usage: '�neri <mesaj>'
};