  
const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
const giphy = require('giphy-api')();
const fs = require("fs");
const prefix = "#";
const devs = ['587262251346558981' , '' , '' , ''];
const adminprefix = "#";

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`star Bot- Script By : n3k4a `);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers ' Script By : n3k4a  Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#تقديم`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
 
});





client.on("message", message => {
            if(message.content.startsWith("#تقديم")) {
		if(!message.channel.guild) return;
                if(message.author.bot) return;
	    let channel = message.guild.channels.find("name", "التقديمات")///n3k4a is one  
            if(!channel) return message.reply("**من فضلك اصنع روم التقديمات**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )///n3k4a is one  
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم تبلغ من العمر 🎓**' )///n3k4a is one  
                      setTimeout(() => {
                        m.delete()///n3k4a is one  
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم لك في الديسكورد 🤔 ؟*' )
                            setTimeout(() => {///n3k4a is one  
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **ليش تبغي تكون واحد من ادارة فيرلس 📑**' )///n3k4a is one  
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();///n3k4a is one  
                                      var ask2 = m4.content;
                                      m4.delete();///n3k4a is one  
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **هل ستضع شعارنا (Fr) في إسمك في حالة قبولك 🤔 ؟**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {///n3k4a is one  
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();///n3k4a is one  
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()///n3k4a is one  
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**` كم له في الديسكورد`**',`${ask}`)///n3k4a is one  
                        .addField('**`ليش يبغى يكون ادري في السيرفر `**',`${ask2}`)
                        .addField('**`هل سيضع شعارنا (Fr)`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);///n3k4a is one  
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })///n3k4a is one  
    }
}
        });


client.on("message", msg => { //Toxic Codes
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '#'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;	
if(cmd === `${prefix}قبول`){
  
  

  let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!aUser) return msg.channel.send("Couldn't find users.");


    
    
    let ac = msg.guild.channels.find(`name`,"القبول-الرفض"); 
    if(!ac) return msg.channel.send("Couldn't find `القبول-الرفض` channel. "); 
    ac.send(`** [ @-     Staff  Trial ✺  ]تم بنجاح قبولك  واعطائك رتبة ${aUser}**`)

    msg.delete().catch(O_o=>{});
    var role = msg.guild.roles.find(`name`, '-     Staff  Trial ✺');
    var role2 = msg.guild.roles.find(`name`, '• Help » Github');
    var role3 = msg.guild.roles.find(`name`, '• Help » Heroku');
    if(!role) return msg.guild.channel.send("Could't find `• Tur » Support` role.");
    aUser.addRole(role);
    aUser.addRole(role2);
    aUser.addRole(role3);
    
        return;
    }
    });


client.on("message", msg => { 
  if(msg.author.bot) return;
  if(msg.channel.type === 'dm') return;
let prefix = '#'; //البرفكس
let msgarray = msg.content.split(" ");
let cmd = msgarray[0];
let args = msgarray.slice(1);
if(!msg.guild.member(msg.author).hasPermission("MANAGE_ROLES")) return;	
if(cmd === `${prefix}سحب`){
  
  

  let aUser = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
if(!aUser) return msg.channel.send("Couldn't find users.");


    
    
    var role = msg.guild.roles.find(`name`, '-     Staff  Trial ✺');
    var role2 = msg.guild.roles.find(`name`, '• Help » Github');
    var role3 = msg.guild.roles.find(`name`, '• Help » Heroku');
    if(!role) return msg.guild.channel.send("Could't find `-     Staff  Trial ✺` role.");
    aUser.removeRole(role);
    aUser.removeRole(role2);
    aUser.removeRole(role3);
    
        return;
    }
    });


client.on('message',async message => {
  let mention = message.mentions.members.first();///n3k4a is one  
  if(message.content.startsWith("#رفض")) {
  if(!message.channel.guild) return;///n3k4a is one  
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply(" من فضلك انشاء روم **القبول-الرفض**");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");///n3k4a is one  
 
  acRoom.send(`**${mention} تم رفضك للاسف 😞**`)
  }
});

client.login(process.env.BOT_TOKEN);
