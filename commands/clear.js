const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: "The bot will clear the messages.",
    execute(message, args){
        let messages = args[1];
        const clearembed = new Discord.MessageEmbed()
        .setColor(0x99ff66)
        .setTitle('**CLEAR**')
        .setDescription('The chat has been cleared! ' + "\n**" + messages + "**" + ' message(s) have been removed from the chat.')
        .setFooter('!clear')
        const clearembederror = new Discord.MessageEmbed()
        .setColor(0xff0000)
        .setTitle('**CLEAR**')
        .addField('**REASON**', 'Please define a second argument. \nUsage: !clear **<amountofmessages>**')
        .addField('**NOTE**', 'If you are going to delete more than 1000 messages while the messages are more than 14 days, this command will suspend from deleting those messages.')
        .setFooter('!clear')
        if(!args[1]) return message.channel.send(clearembederror)
        message.delete({ timeout: 1 });
        message.channel.bulkDelete(messages);
        message.channel.send(clearembed)
    }
}