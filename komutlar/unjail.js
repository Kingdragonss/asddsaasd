const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message, args) {//splashen
  let abone = message.mentions.members.first()
  let log = ayarlar.jailLOG
  let kayıtlı = ayarlar.kayıtlıROL
  let rol = ayarlar.jailROL
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Yetkin yok')
   if(!abone) return message.channel.send('Jailden çıkaracağın kişiyi etiketlemelisin.')
  var role = message.guild.roles.find(role => role.id === rol); 
  abone.removeRole(rol);
  
  let embed2 = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\`Bir Kullanıcı Jailden Çıkarıldı\`__   `)
  .setDescription(`
<a:jke:751558669585612830> • __**\`Çıkaran Yetkili\`**__ ${message.author}
<a:jke:751558669585612830> • __**\`Çıkarılan Kullanıcı\`**__ ${abone}`)
  .setThumbnail(abone.user.avatarURL)
  
  
  let embed = new Discord.RichEmbed()
  .setTitle(` <a:jke:751558669585612830> • __\` Kullanıcı Başarıyla Jailden Çıkarıldı\`__   `)
  .setDescription(`<a:jke:751558669585612830> • __**\`Yetkili\`**__ ${message.author}`)
  .setThumbnail(abone.user.avatarURL)
  message.channel.send(embed).then(m => m.delete(4000))
  client.channels.get(ayarlar.jailLOG).send(embed2)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jail-al'],
  permLevel: 0
};

exports.help = {
  name: 'unjail'
};
//splashen