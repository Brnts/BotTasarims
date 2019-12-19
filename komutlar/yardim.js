const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [g�n], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `? Ki�isel komutlar | Not:Komutlar�n baslar�na " ! " Koymazsan�z �al��maz
  
                                   SIZI SEVIYORUM <3 <3 <3  
        
              � E�lence Komutlar�

� gifara       = Mesaj�n�zla ilgili gifleri Giphy'da arat�r.
� soygunyap    = Soygun yapars�n�z.
� espri        = Bot size espri yapar.
� emojiyazi    = Yazd���n�z her�ey emoji ile yaz�l�r.
� d�nenrenkler = Bot d�nen renkli gif payla��r.
� banned       = Bot ban gifi atar.
� bal�ktut     = Balik tutars�n�z
� a�k�m�-�l�   = Bir ki�iyle a�k�n�z� �l�er.
� youtube      = Youtube'da arama yapar

              �  Bilgi Komutlar�

� istatistik   = Bot Istatistiligini Gosterir.
� yapimcim     = Bot Yapimcisini Gosterir.
� sponsor      = Sponsorlarimizi Gosterir.
� �neri        = Botun sahibine �neri yaz�s� g�nderir.
� sponsor      = Sponsorlar� g�sterir. [Sponsor Olursan�z Discordunuz Eklenir] 

              �  Genel		

� yard�m       = T�m komutlar� listeler.
� ping         = Botun pingini g�sterir.
� duyuru       = Sunucunuzda duyuru yapman�z� sa�lar.
� �ner         = Bot hakk�ndaki �nerilerinizi bot sahiplerine ula�t�r�r.
� banner       = Yazd���n�z yaz�y� bannera �evirir.

    Sayfa 1 / 1 | Yap�mc�m:   ???????????????? - PowerBoy [0.7k] ??`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar', 'help', 'yardim', 'yard�m', 'kullan�mlar', 'komutyard�m', 'hp', 'ytr', 'sd', 'kd', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'T�m komutlar� listeler. �sterseniz bir komut hakk�nda yard�m eder..',
  usage: 'komutlar'
};