const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const hayir = "?";
  const evet = "?";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "?? | Bu komutu kullanabilmek i�in `Y�netici` yetkisine sahip olmal�s�n!"
    );
  const msg = args.join(" ");
  if (!msg) return message.channel.send("**Oylamam i�in bir �ey gir!**");
  message.react("??");
  message.channel
    .send(
      new Discord.RichEmbed()
        .setTitle("Oylama")
        .setDescription(msg)
        .setColor("RANDOM")
        .setFooter(
          message.author.tag + " taraf�ndan ba�lat�ld�..",
          message.author.avatarURL
        )
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hay�r �eklinde Sorar :)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oyla"],
  permLevel: 0
};
exports.help = {
  name: "oylama",
  description: "�stedi�iniz �eyi oylar",
  category: "kullan�c�",
  usage: "oylama [��erik]"
};