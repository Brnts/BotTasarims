const Discord = require("discord.js");

exports.run = function(client, message, args) {
  const hayir = "?";
  const evet = "?";
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "?? | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalýsýn!"
    );
  const msg = args.join(" ");
  if (!msg) return message.channel.send("**Oylamam için bir þey gir!**");
  message.react("??");
  message.channel
    .send(
      new Discord.RichEmbed()
        .setTitle("Oylama")
        .setDescription(msg)
        .setColor("RANDOM")
        .setFooter(
          message.author.tag + " tarafýndan baþlatýldý..",
          message.author.avatarURL
        )
    )
    .then(function(i) {
      i.react(evet);
      i.react(hayir);
      // evet hayýr Þeklinde Sorar :)
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
  description: "Ýstediðiniz þeyi oylar",
  category: "kullanýcý",
  usage: "oylama [Ýçerik]"
};