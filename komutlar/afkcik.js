const discord = require('discord.js');
const client = new discord.Client();

exports.run = (client, msg) => {
 
               var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${msg.author.id}> Ba�ar� �le Afk Modundan ��k�� Yapt�n!<a:ok:589407612227944461> `)
       msg.channel.send(e).then(msg => msg.delete(5000));

     msg.member.setNickname(`${msg.author.username}`);
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0,
    kategori:'kullan�c�'
};

exports.help = {
  name: 'unafk',
  description: 'Afk Tag�n�z� al�r',
  usage: 'unafk'
};