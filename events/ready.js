const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

var Games = [
  "!yardým | Botumuz emrinizde!",
  "3 Ýnvite = Tasarým"
];


module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriþ yapýldý!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Þu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanýcýya hizmet veriliyor!`);
    client.user.setStatus("online");
  client.user.setGame(`${prefix}yardým + ${client.guilds.size} Sunucu + ${client.users.size} Kullanýcý!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandý!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  setInterval(function() {
    var random = Math.floor(Math.random()*(Games.length));
    client.user.setActivity(Games[random]);
    client.user.setStatus("dnd")
  }, 13000);
};




