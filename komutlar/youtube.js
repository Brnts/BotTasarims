const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`Please enter a word `)
        if(!link)return message.reply("Console error")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Aktivasyon:', 'Youtubede Aranýyor')

          .addField("Aranan:", `${args.slice(0).join(' ')}`)

          .addField('Link:', `${link}`)
         
          .setFooter("Avatarýn", message.author.avatarURL);
          
              message.channel.send(embed);
              message.author.send(`Aradýðýn link bulundu ${link} Sunucu: ${ message.guild.name}`);

        
    
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'youtube',
  description: 'Youtube da istediðiniz videonun linkini bulur.',
  usage: 'youtube'
};