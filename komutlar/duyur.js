const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Yetkin Yok!')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Lan Sakat Biþey Yazda Atayým');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription(''+ mesaj +'')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`Mesaj Baþarýyla Herkese Gönderildi`);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['herkesedm'],
  permLevel: 4
};

exports.help = {
  name: 'herkesedm',
  description: 'Ýstediðiniz þeyi bota duyurtur (Sadece Yönetici Yetkisine Sahip Kiþiler Yapabilir).',
  usage: 'duyuru [duyurmak istediðiniz þey]'
};