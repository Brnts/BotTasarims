const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.RichEmbed()
                        .setDescription(`�l�mek ��in Birini Etiketlemelisin Mesala @deneme gibi`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '??'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `??`
                }
        } else {
                var kalp = '??'
                var akalp = '??????????????????'
        }
        var yorum = `Sizi evlendirelim <3`
        if(anasonuc < 80) {
                var yorum = 'Biraz daha u�ra��rsan bu i� olacak gibi :)'
        }
        if(anasonuc < 60) {
                var yorum = 'Eh biraz biraz bir �eyler var gibi.'
        }
        if(anasonuc < 40) {
                var yorum = 'Az�c�kta olsa bir �eyler hissediyor sana :)'
        }
        if(anasonuc < 20) {
                var yorum = 'Bu i� olmaz sen bunu unut.'
        }
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} | ${s.tag}`)
                .setDescription(`A�k Y�zdesi: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
                .setColor("RANDOM")
                .setTimestamp()
        message.channel.send({embed})
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ['a�k-�l�er', 'ask-olcer', 'askolcer', 'ask', 'a�k'],
        permLevel: 0,
}
 
exports.help = {
        name: 'a�k�m�-�l�',
        description: '�ki kullan�c� saras�ndaki a�k� �l�er.',
        usage: 'a�k�m�-�l� [@Kullan�c�] [@Kullan�c�]'
}