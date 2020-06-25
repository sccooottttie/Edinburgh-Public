const Discord = require('discord.js');
module.exports = {
    name: 'broadcast',
    description: "The bot will create a poll for you.",
    execute(message, args){
        const nochannel = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**BROADCAST**')
        .addField('**REASON**', 'You did not declare any channel. Declare a channel by typing **#** first after the command to see all the available channels.')
        .addField('**COMMAND USAGE**', '!broadcast <channel> <announcementoption> <body>')
        const nobody = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**BROADCAST**')
        .addField('**REASON**', 'Your broadcast does not have a body.')
        .addField('**COMMAND USAGE**', '!broadcast <channel> <announcementoption> <body>')
        const noannouncementoption = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**BROADCAST**')
        .addField('**REASON**', 'You did not declare an announcement option at the second argument. \nThe announcement options are **GENERAL** and **TOWN**.')
        .addField('**COMMAND USAGE**', '!broadcast <channel> <announcementoption> <body>')
        if(!args[1]){
            return message.channel.send(nochannel)
        }else if(!args[2]){
            return message.channel.send(noannouncementoption)
        }else if(!args[3]){
            return message.channel.send(nobody)
        }
        let body
        let announcementoption //Announcement option. This is a required argument. If ignored, it will go straight to body and use the Town announcement option.
        let mChannel = message.mentions.channels.first()
        body = args.slice(3).join(" ")
        announcementoption = args[2]
        if(announcementoption == 'general'){
            const broadcastsuccessfullgeneral = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'GENERAL ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const generalannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**GENERAL ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfullgeneral)
            mChannel.send(generalannouncement)
        }else if(announcementoption == 'General'){
            const broadcastsuccessfullgeneral = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'GENERAL ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const generalannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**GENERAL ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfullgeneral)
            mChannel.send(generalannouncement)
        }else if(announcementoption == 'GENERAL'){
            const broadcastsuccessfullgeneral = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'GENERAL ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const generalannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**GENERAL ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfullgeneral)
            mChannel.send(generalannouncement)
        }else if(announcementoption == 'town'){
            const broadcastsuccessfulltown = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'TOWN ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const townannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**TOWN ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfulltown)
            mChannel.send(townannouncement)
        }else if(announcementoption == 'Town'){
            const broadcastsuccessfulltown = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'TOWN ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const townannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**TOWN ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfulltown)
            mChannel.send(townannouncement)
        }else if(announcementoption == 'TOWN'){
            const broadcastsuccessfulltown = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTitle('**BROADCAST**')
            .setDescription('Your broadcast has been sent successfully.')
            .addField('**SELECTED CHANNEL**', mChannel)
            .addField('**SELECTED ANNOUNCEMENT MODE**', 'TOWN ANNOUNCEMENT')
            .addField('**BROADCAST BODY**', body)
            .setFooter('!broadcast')
            const townannouncement = new Discord.MessageEmbed()
            .setColor(0x99ff66)
            .setTimestamp()
            .setTitle('**TOWN ANNOUNCEMENT**')
            .setDescription(body)
            message.delete({ timeout: 1 });
            message.channel.send(broadcastsuccessfulltown)
            mChannel.send(townannouncement)
        }
    }
}