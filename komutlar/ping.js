const Discord = require('discord.js');

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Ping Men�s�",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": ""
			},
            title: "",
            description: `:ping_pong: [Pong](https://www.discordapp.com) : **${Math.round(client.ping)}** ms \n�ok H�zl�y�m Dimi :joy:`,
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "� T�m Haklar� Sakl�d�r. "
            }
          }
        });  
	    message.react("??")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingini G�sterir !',
  usage: 'ping'
};
