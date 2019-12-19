const discord = require('discord.js');
exports.run = async (client, msg, args) => {
   if (!args[0]) return msg.channel.send({embed: {
       color: Math.floor(Math.random() * (0xFFFFFF + 1)),
       description: (`:no_entry_sign:AFK nedenini gir.`)
 }});
  let name = msg.author.username
  if(msg.author.username.startsWith("[AFK]")){
    msg.reply("Zaten AFK'sýn.")
  }
  else {
            var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${msg.author.id}> Baþarý Ýle Afk Modundan Giriþ Yaptýn!<a:ok:589407612227944461> `)
       msg.channel.send(e).then(msg => msg.delete(5000));

     msg.member.setNickname(`[AFK]${msg.author.username}`);
  }  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["afkol"],
  permLevel: 0,
  kategori: 'kullanýcý'
};

exports.help = {
  name: 'afk',
  description: 'Afk Olduðunuzu Tag ekleyerek Gösterir',
  usage: 'afk <sebep>'
};