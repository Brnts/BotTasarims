const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("\`Üyeleri At\` izniniz bulunmamaktadýr.!");
    let sebep = args.slice(1).join(" ");
    if(!sebep){ return message.channel.send(`Örnek Kullaným: \`${ayarlar.prefix}at <kullanýcý> <sebep>\``)}
    let kullanici = message.mentions.users.first();
    let logkanal = message.guild.channels.find("name", "mod-log")
    if(!logkanal) { return message.channel.send("\`mod-log\` adýnda kanal bulamýyorum lütfen \`mod-log\` adýnda kanal açýn")}
    let Kullanici = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!Kullanici) return message.channel.send("Kullanýcý Bulunamadý!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Mesajlarý Yönet izniniz bulunmamaktadýr.!");
    if(Kullanici.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Belirttiðiniz Kullanýcýnýn rolü benim rolümden yüksek olduðu için kullanýcýyý atamýyorum :)");

    const embed = new Discord.RichEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setDescription(`**Sunucudan Atýldý**\n**Kullanýcý:** ${kullanici.tag}\n**Yetkili:** ${message.author.tag}\n**Sebep:** ${sebep}`);
    logkanal.send({embed});
    message.channel.send(`**${kullanici.tag}** sunucumuzdan atýldý Sebebi:\`${sebep}\``);
    var dmkullanici = new Discord.RichEmbed()
            .setAuthor(`${message.guild.name} adlý Sunucudan Atýldýnýz`,message.author.avatarURL || client.user.avatarURL)
            .setColor("RED")
            .addField(`Atan Yetkili`,message.author.tag)
            .addField(`Atýlma Sebebiniz`,sebep)
            .setThumbnail(message.guild.avatarURL || client.user.avatarURL)
    kullanici.send(dmkullanici);
    message.guild.member(Kullanici).kick(kReason);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kick","yoket","tekmele"],
  permLevel: 3
};

exports.help = {
  name: 'at',
  description: 'Kullanýcyý Sunucudan atarsýnýz',
  usage: 'at <kullanýcý> <sebep>'
};