const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const express = require("express");
const http = require("http");
const app = express();
const db = require('quick.db');
const { Client, Util } = require('discord.js');
const path = require('path');
const fetchVideoInfo = require('youtube-info');
const googleTTS = require('google-tts-api');
require('./util/eventLoader')(client);
app.get("/", (request, response) => {
  //console.log(Date.now() + " BOT Aktif.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me`);
}, 1000 * 60 * 3);

var prefix = ayarlar.prefix


const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//////////////////////  BU ARAYA KOMUTLAR GELECEK ///////////////////////////




client.on('message', msg => {

  if (msg.content.toLowerCase() === 'sa') {

    if (!msg.guild.member(msg.author).hasPermission) {

    } else {

      msg.reply('Aleyküm Selam, Davetlere Devam ;)');

    }

  }

});



//////////////////////  BU ARAYA KOMUTLAR GELECEK ///////////////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.adminID) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Reklam yapmak yasak kardeþim!")
        message.guild.owner.send("Sunucunuzda bir kiþi reklam yaptý. \nKullanýcý: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
     
  }
  
});

client.on('message', async message => {
  let ke = await db.fetch(`kufur_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let küfür = ["amk", "amcýk", "yarrak", "sik", "amýna koyduðum", "kaltak", "yavþak", "orospu", "piç", "ananý sikim", "sikik", "göt", "pezevenk", "gavat", "meme", "mal"]
    if (küfür.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Küfür etmek yasak kardeþim!")
        message.guild.owner.send("Sunucunuzda bir kiþi küfür etti. \nKullanýcý: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})