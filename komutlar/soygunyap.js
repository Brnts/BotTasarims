const Discord = require('discord.js');

const prosoyguncu = [
  "85 T�rk Liras� Soydun",
  "10 T�rk Liras� Soydun",
  "Hi� Bir �ey Kazanamad�n.",
  "1 T�rk Liras� Soydun",
  "120 T�rk Liras� Soydun",
  "250 T�rk Liras� Soydun",
  "800 T�rk Liras� Soydun!",
  "950 T�rk Liras� Soydun",
  "1.000 T�rk Liras� Soydun",
  "2.500 T�rk Liras� Soydun",
  "1.485 T�rk Liras� Soydun",
  "7.850 T�rk Liras� Soydun",
  "24.657 T�rk Liras� Soydun",
  "89.652 T�rk Liras� Soydun",
  "278.545 T�rk Liras� Soydun",
  "578.546 T�rk Liras� Soydun",
  "875.135 T�rk Liras� Soydun",
  "975.124 T�rk Liras� Soydun",
  "356.451 T�rk Liras� Soydun",
  "VURGUN!1.000.0000 T�rk Liras� Soydun!",
];

exports.run = function(client, message) {
//Komutun Kodlar�
const soyguncu = prosoyguncu[Math.floor(Math.random() * prosoyguncu.length)];
  message.channel.send(
  
  "**Soyguna haz�rlan�l�yor..**"
  
  ).then(
  function(i){
    i.edit("**Soyguna gidiliyor..**") 
    message.edit(2 * 2500)
    i.edit(
    new Discord.RichEmbed()
      .setTitle('**Soygun Yapt�n!**')
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

  description: 'Soygun yapars�n�z',
    kategori: 'e�lence',
  usage: 'soygunyap'
}