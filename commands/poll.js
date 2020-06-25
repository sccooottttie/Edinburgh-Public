const Discord = require('discord.js');
module.exports = {
    name: 'poll',
    description: "The bot will create a poll for you.",
    execute(message, args){
        const pollinvalidnobody = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**POLL**')
        .addField('**REASON**', 'You must have a body before making a poll.')
        const nomaintopic = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**POLL**')
        .addField('**REASON**', 'Make sure that you have a main topic before creating a poll.')
        const nochannel = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**POLL**')
        .addField('**REASON**', 'You did not declare any channels. Declare a channel by typing **#** first so see all the available channels or **!pollhelp** for more info.')
        .addField('**COMMAND USAGE**', '!poll <channel> <maintopic> <body>')
        if(!args[1]){
            return message.channel.send(nochannel);
        }else if(!args[2]){
            return message.channel.send(nomaintopic);
        }else if(!args[3]){
            return message.channel.send(pollinvalidnobody);
        }
        let mChannel = message.mentions.channels.first()
        let msgArgs1 = args[2];
        let msgArgs2 = args.slice(3).join(" ");
        const pollsentsuccessfull = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**POLL**')
        .setDescription('Your poll has been sent!')
        .setFooter('!poll')
        const pollstartembed = new Discord.MessageEmbed()
        .setTitle('**POLL ANNOUNCEMENT**')
        .setColor(0x99ff66)
        .addField("**" + msgArgs1 + "**", msgArgs2)
        message.delete({ timeout: 1 });
        message.channel.send(pollsentsuccessfull)
        mChannel.send(pollstartembed).then(messageReaction => {
            messageReaction.react('👍');
            messageReaction.react('👎');
        });
    }
}