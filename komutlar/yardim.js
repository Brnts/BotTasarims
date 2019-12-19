const Discord = require("discord.js");
const moment = require("moment");
const colors = require("colors");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `? Kiþisel komutlar | Not:Komutlarýn baslarýna " ! " Koymazsanýz Çalýþmaz
  
                                   SIZI SEVIYORUM <3 <3 <3  
        
              • Eðlence Komutlarý

• gifara       = Mesajýnýzla ilgili gifleri Giphy'da aratýr.
• soygunyap    = Soygun yaparsýnýz.
• espri        = Bot size espri yapar.
• emojiyazi    = Yazdýðýnýz herþey emoji ile yazýlýr.
• dönenrenkler = Bot dönen renkli gif paylaþýr.
• banned       = Bot ban gifi atar.
• balýktut     = Balik tutarsýnýz
• aþkýmý-ölç   = Bir kiþiyle aþkýnýzý ölçer.
• youtube      = Youtube'da arama yapar

              •  Bilgi Komutlarý

• istatistik   = Bot Istatistiligini Gosterir.
• yapimcim     = Bot Yapimcisini Gosterir.
• sponsor      = Sponsorlarimizi Gosterir.
• öneri        = Botun sahibine öneri yazýsý gönderir.
• sponsor      = Sponsorlarý gösterir. [Sponsor Olursanýz Discordunuz Eklenir] 

              •  Genel		

• yardým       = Tüm komutlarý listeler.
• ping         = Botun pingini gösterir.
• duyuru       = Sunucunuzda duyuru yapmanýzý saðlar.
• öner         = Bot hakkýndaki önerilerinizi bot sahiplerine ulaþtýrýr.
• banner       = Yazdýðýnýz yazýyý bannera çevirir.

    Sayfa 1 / 1 | Yapýmcým:   ???????????????? - PowerBoy [0.7k] ??`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['komutlar', 'help', 'yardim', 'yardým', 'kullanýmlar', 'komutyardým', 'hp', 'ytr', 'sd', 'kd', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'komutlar',
  description: 'Tüm komutlarý listeler. Ýsterseniz bir komut hakkýnda yardým eder..',
  usage: 'komutlar'
};