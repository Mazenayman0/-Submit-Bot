  
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
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )///n3k4a is one  
                      setTimeout(() => {
                        m.delete()///n3k4a is one  
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **ما هي لغه البرمجة الخاصه بك ؟ 🎙**' )
                            setTimeout(() => {///n3k4a is one  
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **VarوCost هل تعرف الفرق بين  📑**' )///n3k4a is one  
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();///n3k4a is one  
                                      var ask2 = m4.content;
                                      m4.delete();///n3k4a is one  
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا كود انت مسويه ؟🤔**' )
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
                        .addField('**`هما هي لغه البرمجة الخاصه به ؟ `**',`${ask}`)///n3k4a is one  
                        .addField('**`*VarوCost هل يعرف الفرق بين `**',`${ask2}`)
                        .addField('**`لماذا يجب علينا ان نقبلك ؟ اعطنا كود انت مسويه ؟🤔`**',`${ask3}`)
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
