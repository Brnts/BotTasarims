const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("K�f�r Engel i�in Do�ru Kullan�m: !k�f�r-engel a� / !k�f�r-engel kapat")
  }
  if (args[0] === 'a�'){
    message.channel.send("K�f�r Engel ba�ar�yla a��ld�! Art�k k�f�rler silinecek.")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("K�f�r engel kapat�ld�! Bundan sonra k�f�r serbest.")
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k�f�r"],
  permLevel: 3
}
exports.help = {
  name: "k�f�r-engel",
  description: "K�f�r engel a�ar yada kapat�r.",
  usage: "k�f�r-engel"
}