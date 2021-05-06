const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {//splashen
    let tag = ayarlar.tag
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let sesli = 0
    for (const [id, voiceChannel] of voiceChannels) sesli += voiceChannel.members.size;

    const embedsay = new Discord.RichEmbed()
        .setTitle(`\`• ${message.guild.name} Sunucu İstatistikleri \` `)
        .setDescription(` 
         <a:hydragoldstar:791092863806996520> **__Sunucudaki üye sayısı__** \`${message.guild.memberCount}\`
         <a:hydratac:789369824249643009>      **__Çevrimiçi üye sayısı__** \`${message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size}\`
         <a:hydrafire:793015906959491102>     **__Seslideki üye sayısı__** \`${sesli}\`
         <a:hydratac5:791858527966724125>     **__Tagdaki üye sayısı__** \`${message.guild.members.filter(tag => tag.user.username.includes(tag)).size}\``)
        .setImage(`https://cdn.discordapp.com/attachments/793813694369759282/793823127175692288/eac4b689332e4123a706e8eb94dd9ae7.gif`)
    message.channel.send(embedsay);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['total'],
    permLevel: 0
};

exports.help = {
    name: 'say'
  //splashen
}