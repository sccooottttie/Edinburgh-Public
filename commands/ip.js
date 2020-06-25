const Discord = require('discord.js');
module.exports = {
    name: 'ip',
    description: "The bot will give you the IP Address of the parent server.",
    execute(message, args){
        const ipembed = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**EDINBURGH PARENT SERVER**')
        .addField('**IP ADDRESS [MCPINOYZONE - 1.15.2]**', 'play.mcpinoyzone.com')
        .setFooter('!ip')
        message.channel.send(ipembed);
    }
}