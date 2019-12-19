const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Küfür Engel için Doðru Kullaným: !küfür-engel aç / !küfür-engel kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("Küfür Engel baþarýyla açýldý! Artýk küfürler silinecek.")
    
    db.set(`kufur_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("Küfür engel kapatýldý! Bundan sonra küfür serbest.")
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 3
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatýr.",
  usage: "küfür-engel"
}