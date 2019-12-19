const discord = require('discord.js');
const client = new discord.Client();

exports.run = (client, msg) => {
 
               var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${msg.author.id}> Baþarý Ýle Afk Modundan Çýkýþ Yaptýn!<a:ok:589407612227944461> `)
       msg.channel.send(e).then(msg => msg.delete(5000));

     msg.member.setNickname(`${msg.author.username}`);
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0,
    kategori:'kullanýcý'
};

exports.help = {
  name: 'unafk',
  description: 'Afk Tagýnýzý alýr',
  usage: 'unafk'
};