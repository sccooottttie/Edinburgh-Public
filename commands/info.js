const Discord = require('discord.js');
var version = '3.0.1';
module.exports = {
    name: 'info',
    description: "The bot will show you the version.",
    execute(message, args){
        const infoembed = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**EDINBURGH BOT VERSION**')
        .addField('Version ', version)
        .setFooter('!info')
        message.channel.send(infoembed);
    }
}