const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Reklam Engel i�in Do�ru Kullan�m: !reklam-engel a� / !reklam-engel kapat")
  }
  if (args[0] === 'a�'){
    message.channel.send("Reklam Engel ba�ar�yla a��ld�! Art�k reklamlar silinecek.")
    
    db.set(`reklam_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Reklam engel kapat�ld�! Bundan sonra reklamlar serbest.")
    
    db.set(`reklam_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam"],
  permLevel: 3
}
exports.help = {
  name: "reklam-engel",
  description: "Reklam engel a�ar yada kapat�r.",
  usage: "reklam-engel"
}