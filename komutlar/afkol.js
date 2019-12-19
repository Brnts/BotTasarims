const discord = require('discord.js');
exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:AFK nedenini gir.`)
 }});
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("Zaten AFK's�n.")
  }
  else {
            var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${msg.author.id}> Ba�ar� �le Afk Modundan Giri� Yapt�n!<a:ok:589407612227944461> `)
       msg.channel.send(e).then(msg => msg.delete(5000));

     msg.member.setNickname(`[AFK]${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["afkol"],
  permLevel: 0,
  kategori: 'kullan�c�'
};

exports.help = {
  name: 'afk',
  description: 'Afk Oldu�unuzu Tag ekleyerek G�sterir',
  usage: 'afk <sebep>'
};