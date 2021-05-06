const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {//splashen

    let kadınROL = ayarlar.kadınROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG

    if(!message.member.roles.has(yetkili)) return message.channel.send('Bu işlemi sadece yetkililer yapabilir')


if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = 'Şüpheli'
if (kurulus > 1296000000) kontrol = 'Güvenli'
  
  
  
let isim = args[1];
if(!isim) return message.channel.send(`Üyenin ismini belirtmelisin.`)
if(isim.length > 16) return message.channel.send(`Daha kısa bir isim yaz.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`Üyenin yaşını belirtmelisin.`)
if(yaş.length > 100) return message.channel.send(`Üyenin yaşı 100'den büyük olamaz.`)
  
const emb = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setTimestamp()
.setColor(`#fffff0`)
.setFooter(`Kayıt Başarılı`)
let kız = db.fetch(`kız_${message.author.id}_${message.guild.id}`)
let erkek = db.fetch(`erkek_${message.author.id}_${message.guild.id}`)
let toplam = erkek+kız
message.guild.members.get(kullanıcı.id).setNickname(`✵ ${isim} | ${yaş}`)
message.guild.members.get(kullanıcı.id).addRole(kadınROL)
  message.guild.members.get(kullanıcı.id).addRole(kayıtlıROL)
message.guild.members.get(kullanıcı.id).removeRole(kayıtsızROL)
message.guild.members.get(kullanıcı.id).send(emb.setDescription(`• Kaydın başarıyla ${message.author} tarafından yapıldı. \n • Sunucudaki İsmin :✵ ${isim} | ${yaş} \n • Kurallar kanalımızı okumayı unutma!`))
  db.add(`kız_${message.author.id}_${message.guild.id}`, "1")
let embed2 = new Discord.RichEmbed()
.setTitle(`• Bir Kullanıcı Kayıt Oldu.`)
.setDescription(`

 <a:hydragold:793015907076931594> **Kayıt Olan Kullanıcı:**✵ ${kullanıcı} \`  { ${kullanıcı.id} }  \` 

 <a:hydrafire:793015906959491102> **İsim Yaş:** \`✵ ${isim} | ${yaş} \`

 <a:hydratac:792003338442768384> **Verilen Rol:** <@&${kadınROL}> \`  { ${kadınROL} }  \` 

 <a:hydrastar:793015907088596992> **Bu Hesap:** \`  { ${kontrol} }  \` 

 <a:hydramystic:793015886860124220> **Sunucumuz şu an** \` ${message.guild.members.size} \`** kişi **

 <a:hydrabluestar:793015886403207198> **Kayıt eden:** ${message.author} \`  { ${message.author.id} }  \` 

 <a:hydratac2:792003318541058099> **{ ${message.author} } Toplam kayıt sayısı =**  \` ${toplam} \` 

 <a:hydratac2:792003318541058099> **{    __Toplam Erkek Kaydı =  \` ${erkek} \` Toplam Kız Kaydı= \` ${kız} \`__  }**  
`)
.setImage('https://cdn.discordapp.com/attachments/791998307382984704/792087341673873459/acdffc3470a2d0572e3204b268f4fdd5.gif')



client.channels.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new Discord.RichEmbed()
.setTitle(`• Kayıt Başarıyla Tamamlandı!.`)
.setDescription(`

 <a:hydragold:793015907076931594> **Kayıt Olan Kullanıcı:**✵ ${kullanıcı} \`  { ${kullanıcı.id} }  \` 

 <a:hydrafire:793015906959491102> **İsim Yaş:** \`✵ ${isim} | ${yaş} \`

 <a:hydratac:792003338442768384> **Verilen Rol:** <@&${kadınROL}> \`  { ${kadınROL} }  \` 

 <a:hydrastar:793015907088596992> **Bu Hesap:** \`  { ${kontrol} }  \` 

 <a:hydramystic:793015886860124220> **Sunucumuz şu an**  \` ${message.guild.members.size} \`** kişi **

 <a:hydratac2:792003318541058099> **Kayıt eden:** ${message.author} \`  { ${message.author.id} }  \` 
`)
.setImage('https://cdn.discordapp.com/attachments/791998307382984704/792087341673873459/acdffc3470a2d0572e3204b268f4fdd5.gif')
message.channel.send(embed3)


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k'],
  permLevel: 0
};

exports.help = {
  name: 'kadın'
}//splashen