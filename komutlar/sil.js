const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak Ýçin Ýzniniz Yok!");
if(!args[0]) return message.channel.send("?? **Lütfen Silinicek Mesaj Miktarýný Yazýn!** ??");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajý Sildim. ??`).then(msg => msg.delete(5000));
    const botunmesajyonet = new Discord.RichEmbed()
    let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('?? Eylem:', 'Sohbet silme')
    .addField('?? Yetkili: ', message.author.username)
    .addField('?? Sonuç: ', `Baþarýlý`)
    .addField('?? Kaç Adet', + messagecount)
    .setFooter(message.author.username + message.author.avatarURL)
    return message.channel.sendEmbed(sohbetsilindi).then(msg => msg.delete(5000));
    console.log("**Sohbet " + message.member + " tarafýndan silindi! **").then(msg => msg.delete(5000));

})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajý siler.',
  usage: 'sil <silinicek mesaj sayýsý>'
};