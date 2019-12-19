const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("\`�yeleri At\` izniniz bulunmamaktad�r.!");
    let sebep = args.slice(1).join(" ");
    if(!sebep){ return message.channel.send(`�rnek Kullan�m: \`${ayarlar.prefix}at <kullan�c�> <sebep>\``)}
    let kullanici = message.mentions.users.first();
    let logkanal = message.guild.channels.find("name", "mod-log")
    if(!logkanal) { return message.channel.send("\`mod-log\` ad�nda kanal bulam�yorum l�tfen \`mod-log\` ad�nda kanal a��n")}
    let Kullanici = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!Kullanici) return message.channel.send("Kullan�c� Bulunamad�!");
    let kReason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Mesajlar� Y�net izniniz bulunmamaktad�r.!");
    if(Kullanici.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Belirtti�iniz Kullan�c�n�n rol� benim rol�mden y�ksek oldu�u i�in kullan�c�y� atam�yorum :)");

    const embed = new Discord.RichEmbed()
            .setColor(message.guild.me.displayHexColor)
            .setTimestamp()
            .setDescription(`**Sunucudan At�ld�**\n**Kullan�c�:** ${kullanici.tag}\n**Yetkili:** ${message.author.tag}\n**Sebep:** ${sebep}`);
    logkanal.send({embed});
    message.channel.send(`**${kullanici.tag}** sunucumuzdan at�ld� Sebebi:\`${sebep}\``);
    var dmkullanici = new Discord.RichEmbed()
            .setAuthor(`${message.guild.name} adl� Sunucudan At�ld�n�z`,message.author.avatarURL || client.user.avatarURL)
            .setColor("RED")
            .addField(`Atan Yetkili`,message.author.tag)
            .addField(`At�lma Sebebiniz`,sebep)
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
  description: 'Kullan�cy� Sunucudan atars�n�z',
  usage: 'at <kullan�c�> <sebep>'
};