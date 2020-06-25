const Discord = require('discord.js');
module.exports = {
    name: 'say',
    description: "The bot send your message on a specific channel. You can use this if you want to be anonymous.",
    execute(message, args){
        const saynochannel = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**SAY**')
        .addField('**REASON**', 'You did not declare any channel. Declare a channel by typing **#** first after the command to see all the available channels.')
        .addField('**COMMAND USAGE**', '!say <channel> <body>')
        const saynobody = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**SAY**')
        .addField('**REASON**', 'Your message does not have a body.')
        .addField('**COMMAND USAGE**', '!say <channel> <body>')
        if(!args[1]){
            return message.channel.send(saynochannel)
        }else if(!args[2]){
            return message.channel.send(saynobody)
        }
        let saybody
        let mChannel = message.mentions.channels.first()
        saybody = args.slice(2).join(" ")
        const saysuccessfull = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**SAY**')
        .setDescription('Your message has been sent successfully.')
        .addField('**SELECTED CHANNEL**', mChannel)
        .addField('**MESSAGE BODY**', saybody)
        .setFooter('!say')
        message.delete({ timeout: 1 });
        message.channel.send(saysuccessfull)
        mChannel.send(saybody)
    }
}