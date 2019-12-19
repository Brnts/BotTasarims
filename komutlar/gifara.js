const request = require('request-promise-native');

exports.run = async (Bastion, message, args) => {
  try {
    if (args.length < 1) {

      return message.reply("**Do�ru Kullan�m**: f!gif <aranacak gif>");
    }

    let options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      qs: {
        q: encodeURI(args.join('+')),
        api_key: 'dc6zaTOxFJmzC',
        limit: 10,
        offset: 0
      },
      json: true
    };

    let response = await request(options);

    if (response.data.length) {
      message.channel.send({
        embed: {
          color: 0x00AE86,
          title: `GIF aran�yor: ${args.join(' ')}`.slice(0, 256),
          image: {
            url: response.data[Math.floor(Math.random() * response.data.length)].images.original.url
          },
        }
      }).catch(e => {
        console.log(e);
      });
    }
    else {
      return Bastion.emit('hata', '', Bastion.i18n.error(message.guild.language, 'bulunamad�', 'g�rsel'), message.channel);
    }
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('hata', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['gif', 'gifara'],
  permLevel: 0
};

exports.help = {
  name: 'gif-ara',
  description: "Mesaj�n�zla ilgili gifleri Giphy'da arat�r.",
  usage: 'gif-ara <aranacak gif>'
};
