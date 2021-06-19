const Commando = require('discord.js-commando')

module.exports = class PlayAudioCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'playaudio',
            group: 'misc',
            memberName: 'playaudio',
            description: 'Plays some audio'
        })
    }

    async run(message) {
        const { voice } = message.memberName
        if (!voice.channelID) {
            message.reply('Você precisa estar em um canal de voz zé')
            return
        }

        voice.channel.join()
    }
}