const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "The bot will create a poll for you.",
    execute(message, args){
        const helpembed = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**HELP PANEL**')
        .setThumbnail('https://imgur.com/dTMNb2b.png')
        .addField('**BOT COMMANDS | COMMAND PREFIX [!]**', '**!ping** Pong! \n**!help** The bot shows this help panel. \n**!info** Shows the bot version. \n**!ip** Shows the parent server IP Address (**MCPinoyZone**) of the town.')
        .addField('**ADMINSTRATOR COMMANDS**', '**!clear** Clears up the chat in a channel. \n**!poll** Create a poll. \n**!broadcast** Broadcasts your message to a specific channel. \n**!say** Sends an anonymous message to a specific channel.')
        .setFooter('!help')
        message.channel.send(helpembed);
    }
}