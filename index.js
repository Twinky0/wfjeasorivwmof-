const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

const prefix = "+";//برفكس حقك
const line = "https://media.discordapp.net/attachments/981205769951281162/985131501760966696/D02BC9EF-1E19-447A-B200-FA3E64AFCB4D.jpg?width=1440&height=60"

//كود الحالة
//=======================================================

client.on('ready', () => {
  console.log('im online')
  client.user.setActivity('OSCAR SERVER .', { type: 'PLAYING' })
});

//===================================================






//===============================================


client.on("message", async message =>{
    if(message.content.startsWith(prefix + "create")){
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`> ** أنـت لا تـمـتـلـك صـلاحـيـات لأسـتـخـدام الأمـر .!**`);
      const catgory = "994742200770510899"; //اي دي كاتقوري الي تسوي فيه رومات
      let ors = message.guild.roles.cache.find(role => role.name === '› ORS :'); // اي دي رتبة default
      let eve = message.guild.roles.cache.find(role => role.name === '@everyone'); // اي دي رتبة مصمم 
      let des = message.guild.roles.cache.find(role => role.name === '✯ - Designer S :'); // اي دي رتبة الي تجيك لما تثبت نفسك
      let ano = message.guild.roles.cache.find(role => role.name === '✯ - Anomaly S :'); // اي دي رتبة elite
      let hi = message.guild.roles.cache.find(role => role.name === '✯ - High S :'); // اي دي رتبة special
      let edg = message.guild.roles.cache.find(role => role.name === '✯ - The Edge S :'); // اي دي رتبة devil s
      let el = message.guild.roles.cache.find(role => role.name === '✯ - Elite S :'); // اي دي رتبة trust
      let ul = message.guild.roles.cache.find(role => role.name === '✯ - Ultra S :'); // اي دي رتبة se
      let et = message.guild.roles.cache.find(role => role.name === '✯ - Eternal S :');// اي دي رتبة staff
      let oo = message.guild.roles.cache.find(role => role.name === 'ONE OSCAR -');// اي دي رتبة staff
      let od = message.guild.roles.cache.find(role => role.name === '✯ - Order S :');// اي دي رتبة staff

      var ch10 = message.guild.channels.cache.find(channel => channel.name === "〢・طـلـبـات");
      if(ch10) return message.reply("**الـرومـات مـوجـودة**");
      var ch9 = message.guild.channels.cache.find(channel => channel.name === "〢・أخـرى");
      if(ch9) return message.reply("**الـرومـات مـوجـودة**");
      var ch8 = message.guild.channels.cache.find(channel => channel.name === "〢・طـرق");
      if(ch8) return message.reply("**الـرومـات مـوجـودة**");
      var ch7 = message.guild.channels.cache.find(channel => channel.name === "〢・عـمـلات");
      if(ch7) return message.reply("**الـرومـات مـوجـودة**");
      var ch6 = message.guild.channels.cache.find(channel => channel.name === "〢・تـصـامـيـم");
      if(ch6) return message.reply("**الـرومـات مـوجـودة**");
      var ch5 = message.guild.channels.cache.find(channel => channel.name === "〢・الـعـاب");
      if(ch5) return message.reply("**الـرومـات مـوجـودة**");
      var ch4 = message.guild.channels.cache.find(channel => channel.name === "〢・حـسـابـات");
      if(ch4) return message.reply("**الـرومـات مـوجـودة**");
      var ch3 = message.guild.channels.cache.find(channel => channel.name === "〢・ديـسـكـورد");
      if(ch3) return message.reply("**الـرومـات مـوجـودة**");
      var ch2 = message.guild.channels.cache.find(channel => channel.name === "〢・مـخـالـف");
      if(ch2) return message.reply("**الـرومـات مـوجـودة**");
      var ch1 = message.guild.channels.cache.find(channel => channel.name === "〢・أبــــدي");
      if(ch1) return message.reply("**الـرومـات مـوجـودة**");

 
      await message.guild.channels.create('〢・أبــــدي', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

      await message.guild.channels.create('〢・طـلـبـات', { type :'text', parent: catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: od,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });
      
      await message.guild.channels.create('〢・مـخـالـف', { type :'text', parent: catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ano,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

      await  message.guild.channels.create('〢・تـصـامـيـم', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: des,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
      ], });

      await message.guild.channels.create('〢・ديـسـكـورد', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });
      
      await message.guild.channels.create('〢・حـسـابـات', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });
      
     await message.guild.channels.create('〢・الـعـاب', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });

     await message.guild.channels.create('〢・عـمـلات', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });

     await message.guild.channels.create('〢・طـرق', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });

     await  message.guild.channels.create('〢・أخـرى', { type :'text', parent : catgory, permissionOverwrites : [
       { id: eve,deny:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
       { id: ors,deny:['SEND_MESSAGES', 'ADD_REACTIONS'], allow:'VIEW_CHANNEL',},
       { id: et,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: edg,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: ul,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE','ATTACH_FILES'],},
       { id: el,allow:['SEND_MESSAGES', 'VIEW_CHANNEL','MENTION_EVERYONE'],},
       { id: hi,allow:['SEND_MESSAGES', 'VIEW_CHANNEL'],},
      ], });
      
     let ti = client.channels.cache.get('994742231422480404');
       ti.send(
            new Discord.MessageEmbed()
            .setTitle(`> \`-\` **تـم أرجـاع رومـات الـبـيـ$ـع ، الـنـشـر مـفـتـوح .**`)
            .setFooter("|  When Every $hop Has Ban ; OSCAR $ Comes .!")
            .setTimestamp()
            .setColor("#ffa700")
          )
      ti.send("**› || @here || .**")
     message.reply("**تـم أنـشـاء الـرومـات .**")
    }
});


client.on("message", async message=>{
    if(message.content.startsWith(prefix + "delete")){
     if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`> ** أنـت لا تـمـتـلـك صـلاحـيـات لأسـتـخـدام الأمـر .!**`);
      var cha9 = message.guild.channels.cache.find(channel => channel.name === "〢・أخـرى");
       if(cha9) {  await cha9.delete(); }
      var cha8 = message.guild.channels.cache.find(channel => channel.name === "〢・طـرق");
       if(cha8) {  await cha8.delete(); }
      var cha7 = message.guild.channels.cache.find(channel => channel.name === "〢・عـمـلات");
       if(cha7) {  await cha7.delete(); }
      var cha6 = message.guild.channels.cache.find(channel => channel.name === "〢・تـصـامـيـم");
       if(cha6) {  await cha6.delete(); }
      var cha5 = message.guild.channels.cache.find(channel => channel.name === "〢・الـعـاب");
       if(cha5) {  await cha5.delete(); }
      var cha4 = message.guild.channels.cache.find(channel => channel.name === "〢・حـسـابـات");
       if(cha4) {  await cha4.delete(); }
      var cha3 = message.guild.channels.cache.find(channel => channel.name === "〢・ديـسـكـورد");
       if(cha3) {  await cha3.delete(); }
      var cha2 = message.guild.channels.cache.find(channel => channel.name === "〢・مـخـالـف");
       if(cha2) {  await cha2.delete(); }
      var cha0 = message.guild.channels.cache.find(channel => channel.name === "〢・طـلـبـات");
       if(cha0) {  await cha0.delete(); }
      var cha1 = message.guild.channels.cache.find(channel => channel.name === "〢・أبــــدي");
      if(cha1) {  await cha1.delete(); }

     let ti = client.channels.cache.get('994742231422480404');

      ti.send(
            new Discord.MessageEmbed()
            .setTitle(`> \`-\` ** تـم مـسـح رومـات الـبـيـ$ـع ، الـنـشـر مـقـفـول .**`)
            .setFooter("|  When Every $hop Has Ban ; OSCAR $ Comes .!")
            .setTimestamp()
            .setColor("#ffa700")
          )
      message.reply("**تـم حـذف الـرومـات .**")
    }
});




//===================================================
client.login(process.env.token);


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`t : `)
});

app.listen(3000, () => {
  console.log('server started');
});