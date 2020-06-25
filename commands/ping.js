const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: "The bot says pong!",
    execute(message, args){
        const pong = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setDescription('Pong!')
        message.channel.send(pong)
    }
}