// const Discord = require('discord.js')
// const client = new Discord.Client();

const Commando = require('discord.js-commando')

// const config = require('./config.json')
const command = require('./command')

const client = new Commando.CommandoClient({
    owner: '143180142838022145',
    commandPrefix: '!'
})

client.on('ready', () => {
    console.log('The client is ready!')

    client.registry.registerDefaults()

    //command(client, ['ping', 'test'], (message) => {
    //    message.channel.send('Pong!')
    //})
})

client.login(process.env.DJS_TOKEN)