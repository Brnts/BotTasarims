const Discord = require('discord.js');

const prosoyguncu = [
  "85 Türk Lirasý Soydun",
  "10 Türk Lirasý Soydun",
  "Hiç Bir Þey Kazanamadýn.",
  "1 Türk Lirasý Soydun",
  "120 Türk Lirasý Soydun",
  "250 Türk Lirasý Soydun",
  "800 Türk Lirasý Soydun!",
  "950 Türk Lirasý Soydun",
  "1.000 Türk Lirasý Soydun",
  "2.500 Türk Lirasý Soydun",
  "1.485 Türk Lirasý Soydun",
  "7.850 Türk Lirasý Soydun",
  "24.657 Türk Lirasý Soydun",
  "89.652 Türk Lirasý Soydun",
  "278.545 Türk Lirasý Soydun",
  "578.546 Türk Lirasý Soydun",
  "875.135 Türk Lirasý Soydun",
  "975.124 Türk Lirasý Soydun",
  "356.451 Türk Lirasý Soydun",
  "VURGUN!1.000.0000 Türk Lirasý Soydun!",
];

exports.run = function(client, message) {
//Komutun Kodlarý
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(
  
  "**Soyguna hazýrlanýlýyor..**"
  
  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Soygun Yaptýn!**')
    .setDescription('```---------```')
      .addField('**Soyulan Para: **',soyguncu)
    .setColor('GREEN')
    
    
    )
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['soygun'],
  permLevel: 0 
};

exports.help = {
  name: 'soygunyap',

  description: 'Soygun yaparsýnýz',
    kategori: 'eðlence',
  usage: 'soygunyap'
}