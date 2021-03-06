const Commando = require('discord.js-commando')
const path = require('path')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'amaury',
            group: 'misc',
            memberName: 'amaury',
            description: 'Eae galera'
        })
    }

    async run(message) {
        const { voice } = message.member

        if (!voice.channelID) {
            message.reply('Você precisa estar em um canal de voz zé')
            return
        }

        voice.channel.join().then((connection) => {
            connection.play(path.join(__dirname, 'amaury.mp3'))
        })
    }
}