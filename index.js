const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "";
var version = '3.0.5';

const PREFIX = '!';

const fs = require('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);

}

/*/let userInputCommand = userInputCommand
let validCommands =["ping", "ip", "info", "clear", "poll", "broadcast", "help", "whois"];
let isValid = validCommands.includes(userInputCommand);
if(!isValid) {
    return message.channel.send(wrongcommand)
}/*/

bot.on('ready', () =>{
    console.log('Edinburgh is ready to go.');
    bot.user.setStatus('Online')
    bot.user.setActivity('!help | Exclusive only for Edinburgh and Scott\'s Realms.')
    bot.user.setUsername('Edinburgh')
/*/    const botrestartedrealmchannel = new Discord.MessageEmbed()
    .setColor(0xffa500)
    .setTimestamp()
    .setTitle('**EDINBURGH**')
    .setDescription('The bot has been restarted. \nThe version of the bot is currently ' + '**' + version + '.**')
    const botrestartededinburghchannel = new Discord.MessageEmbed()
    .setColor(0xffa500)
    .setTimestamp()
    .setTitle('**EDINBURGH**')
    .setDescription('The bot has been restarted. \nThe version of the bot is currently ' + '**' + version + '.**')
    bot.channels.cache.get('717382038776316036').send(botrestartedrealmchannel)
    bot.channels.cache.get('708960736281493524').send(botrestartededinburghchannel)/*/
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");
    const donothavepermissions = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setTitle('**EDINBURGH**')
    .addField('**REASON**', 'You don\'t have the permission to use this command.')
    const donothavepermissions2 = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setTitle('**EDINBURGH**')
    .addField('**REASON**', 'You\'re not a staff to use this command.')
    const wrongcommand = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setTitle('**EDINBURGH**')
    .addField('**REASON**', 'You entered a wrong command. Check out **!help** to see all the available commands.')
    const onlyforedinburghresidents = new Discord.MessageEmbed()
    .setColor(0xff0000)
    .setTitle('**EDINBURGH**')
    .addField('**REASON**', 'You\'re not a resident of Edinburgh to use this command.')
    switch(args[0]){ // ALL COMMANDS CAN BE FOUND AT THE COMMAND FOLDER
        case 'ping':
            if((!message.member.roles.cache.some(role => role.name === 'Residents'))&&(!message.member.roles.cache.some(role => role.name === 'Members'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions)
            bot.commands.get('ping').execute(message, args);
        break;
        case 'ip':
            if((!message.member.roles.cache.some(role => role.name === 'Residents'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(onlyforedinburghresidents)
            bot.commands.get('ip').execute(message, args);
        break;
        case 'info':
            if((!message.member.roles.cache.some(role => role.name === 'Residents'))&&(!message.member.roles.cache.some(role => role.name === 'Members'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions)
            bot.commands.get('info').execute(message, args);
        break;
        case 'clear':
            if((!message.member.roles.cache.some(role => role.name === 'Mayor'))&&(!message.member.roles.cache.some(role => role.name === 'Assistant'))&&(!message.member.roles.cache.some(role => role.name === 'Secretary'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions2)
            bot.commands.get('clear').execute(message, args);
        break;
        case 'poll':
            if((!message.member.roles.cache.some(role => role.name === 'Mayor'))&&(!message.member.roles.cache.some(role => role.name === 'Assistant'))&&(!message.member.roles.cache.some(role => role.name === 'Secretary'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions2)
            bot.commands.get('poll').execute(message, args);
        break;
        case 'broadcast':
            if((!message.member.roles.cache.some(role => role.name === 'Mayor'))&&(!message.member.roles.cache.some(role => role.name === 'Assistant'))&&(!message.member.roles.cache.some(role => role.name === 'Secretary'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions2)
            bot.commands.get('broadcast').execute(message, args);
            break;
        case 'help':
            if((!message.member.roles.cache.some(role => role.name === 'Residents'))&&(!message.member.roles.cache.some(role => role.name === 'Assistant'))&&(!message.member.roles.cache.some(role => role.name === 'Secretary'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))&&(!message.member.roles.cache.some(role => role.name === 'Members'))) return message.channel.send(donothavepermissions)
            bot.commands.get('help').execute(message, args);
        break;
        case 'say':
            if((!message.member.roles.cache.some(role => role.name === 'Mayor'))&&(!message.member.roles.cache.some(role => role.name === 'Assistant'))&&(!message.member.roles.cache.some(role => role.name === 'Secretary'))&&(!message.member.roles.cache.some(role => role.name === 'Owner'))) return message.channel.send(donothavepermissions2)
            bot.commands.get('say').execute(message, args);
        break;
        }
})

bot.login(token);
