const Discord = require('discord.js');
const fs = require('fs');
const sql = require("sqlite");
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCMXSOO4uZaRObLIZy9fPImHOOHTwpLF1E')
var opusscript = require("opusscript");
var servers = {};
//var antispam = require('discord-anti-spam');
sql.open("./embeds.sqlite");
 
const TOKEN = "NTI4MDU3NDcyMzEzOTgyOTc3.DwnoFw.tucoKKdftRiofn1i7ZuhKCiM0-A"
var bot = new Discord.Client();
 
let slap = [];
 
function play(connection, message){
    var server = servers[message.guild.id];                        
    server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter:"audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function () {
        if (server.queue[0]) play(connection, message);
        else connection.disconnect();
    })
}
 
 
bot.on('error', console.error);
bot.on("ready", () => {
console.log("Bot is online!")
bot.user.setActivity("aidan jerk off", { type: "WATCHING"})
bot.channels.get("529195215840346123").send("Im back faggots")
/*
antispam(bot, {
    warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 1000, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
    warningMessage: "stop spamming or I'll whack your head off.", // Warning message send to the user indicating they are going to fast.
    banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
    maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
    maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
    deleteMessagesAfterBanForPastDays: 7 // Delete the spammed messages after banning for the past x days.
  });
*/
slap = JSON.parse(fs.readFileSync('json/slap.json', 'utf8'));
spank = JSON.parse(fs.readFileSync('json/spank.json', 'utf8'));
kiss = JSON.parse(fs.readFileSync('json/kiss.json', 'utf8'));
hug = JSON.parse(fs.readFileSync('json/hug.json', 'utf8'));
fuck = JSON.parse(fs.readFileSync('json/fuck.json', 'utf8'));
punch = JSON.parse(fs.readFileSync('json/punch.json', 'utf8'));
cry = JSON.parse(fs.readFileSync('json/cry.json', 'utf8'));
/*
if (message.content.startsWith('.ban')){
    let bUser = message.mentions.users.first()
    let bReason = args[2]
    if (!message.author.hasPermissions("MANAGE_MEMBERS")) return message.channel.send ("You do not have enough permissions to use this.");
    if (bUser.hasPermissions("MANAGE_MESSAGES")) return message.channel.send("why are u trying to kick a mod wtf");
    
    message.guild.member(bUser).ban(bReason);
    bot.channels.get("525425321453944843").send(`${buser} has been banned.\nReason: ${bReason}`)
    }
*/
const randomTime = Math.floor(Math.random() * (88200 - 86400) + 86400)
var interval = setInterval (function () {
const user = bot.guilds.get("525050682751844385").members.random().id
    bot.channels.get("525050683242840127").send(`<@${user}> is a fucking twat`)
    .catch(console.error);
  }, randomTime * 1000);
 
});
 
bot.on("guildMemberAdd", member => {
    member.guild.channels.find(channel => channel.name === "general").send(`<@${member.id}> hopped on the battle bus!`)
 .catch(console.error)
 });
  
 bot.on("guildMemberRemove", member => {
     member.guild.channels.find(channel => channel.name === "general").send(`<@${member.id}> left us 😦`)
 .catch(console.error)
 });

bot.on("message", message => {
    if (message.author.equals(bot.user)) return;
    if (message.author.bot) return;
    
    // SLAP TABLE
    sql.get(`SELECT * FROM slaps WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO slaps (userId, slaps) VALUES (?, ?)", [message.author.id, 1]);
        }
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS slaps (userId TEXT, slaps INTEGER)").then(() => {
          sql.run("INSERT INTO slaps (userId, slaps) VALUES (?, ?)", [message.author.id, 1]);
        });
      });
    // SLAP TABLE
 
    // SPANK TABLE
    sql.get(`SELECT * FROM spank WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO spank (userId, spank) VALUES (?, ?)", [message.author.id, 1]);
        }
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS spank (userId TEXT, spank INTEGER)").then(() => {
          sql.run("INSERT INTO spank (userId, spank) VALUES (?, ?)", [message.author.id, 1]);
        });
      });
    // SPANK TABLE
 
    // KISS TABLE
    sql.get(`SELECT * FROM kiss WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO kiss (userId, kiss) VALUES (?, ?)", [message.author.id, 1]);
    }
    }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS kiss (userId TEXT, kiss INTEGER)").then(() => {
      sql.run("INSERT INTO kiss (userId, kiss) VALUES (?, ?)", [message.author.id, 1]);
    });
  });
    // KISS TABLE
   
    // HUG TABLE
    sql.get(`SELECT * FROM hug WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO hug (userId, hug) VALUES (?, ?)", [message.author.id, 1]);
    }
    }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS hug (userId TEXT, hug INTEGER)").then(() => {
      sql.run("INSERT INTO hug (userId, hug) VALUES (?, ?)", [message.author.id, 1]);
    });
  });
    // HUG TABLE
 
    // KILL TABLE
    sql.get(`SELECT * FROM kill WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO kill (userId, kill) VALUES (?, ?)", [message.author.id, 1]);
        }
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS kill (userId TEXT, kill INTEGER)").then(() => {
          sql.run("INSERT INTO kill (userId, kill) VALUES (?, ?)", [message.author.id, 1]);
        });
      });
    // KILL TABLE

     // WAVECHECK TABLE
     sql.get(`SELECT * FROM wavecheck WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO wavecheck (userId, wavecheck) VALUES (?, ?)", [message.author.id, 1]);
        }
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS wavecheck (userId TEXT, wavecheck INTEGER)").then(() => {
          sql.run("INSERT INTO wavecheck (userId, wavecheck) VALUES (?, ?)", [message.author.id, 1]);
        });
      });
    // WAVECHECK TABLE

    // cry TABLE
    sql.get(`SELECT * FROM cry WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
          sql.run("INSERT INTO cry (userId, cry) VALUES (?, ?)", [message.author.id, 1]);
        } 
        }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS cry (userId TEXT, cry INTEGER)").then(() => {
          sql.run("INSERT INTO cry (userId, cry) VALUES (?, ?)", [message.author.id, 1]);
        });
      });
        // cry TABLE

    // FUCK TABLE
    sql.get(`SELECT * FROM fuck WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO fuck (userId, fuck) VALUES (?, ?)", [message.author.id, 1]);
    }
    }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS fuck (userId TEXT, fuck INTEGER)").then(() => {
      sql.run("INSERT INTO fuck (userId, fuck) VALUES (?, ?)", [message.author.id, 1]);
    });
  });

    // PUNCH TABLE
    sql.get(`SELECT * FROM punch WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO punch (userId, punch) VALUES (?, ?)", [message.author.id, 1]);
    }
    }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS punch (userId TEXT, punch INTEGER)").then(() => {
      sql.run("INSERT INTO punch (userId, punch) VALUES (?, ?)", [message.author.id, 1]);
    });
  });
    // PUNCH TABLE

    // FUCK TABLE
    if (message.content.toLowerCase().startsWith('.slap')){
        let slapImage = Math.floor(Math.random()*slap.length);
        let user = message.mentions.users.first()
        if (user == null){
            message.reply("You need to mention someone for this command to work!")
        } else {
        let userNick = message.guild.members.get(user.id).displayName
        sql.get(`SELECT * FROM slaps WHERE userId ="${user.id}"`).then(row => {
        message.channel.send({embed: {
            description: `**${message.author.lastMessage.member.displayName}** just slapped **${userNick}**`,
            footer:{
                text: `${userNick} has been slapped ${row.slaps} times.`
            },
            image: {
                url: "attachment://"+slap[slapImage]+".gif"
            }
           
        },
        files: [{ attachment: 'images/slaps/'+slap[slapImage]+'.gif', name: slap[slapImage]+'.gif' }]
    });
        sql.run(`UPDATE slaps SET slaps = ${row.slaps + 1} WHERE userId = ${user.id}`);
      });
}
    }
    
    if (message.content.toLowerCase().startsWith('.spank')){
         if (message.channel.nsfw == false){
              message.reply("This command shows explicit content and may only be used in the nsfw channel.")
            } else if (message.channel.nsfw == true) {
        let spankImage = Math.floor(Math.random()*spank.length);
        let user = message.mentions.users.first()
        if (user == null){
            message.reply("You need to mention someone for this command to work!")
        } else {
        let userNick = message.guild.members.get(user.id).displayName
        sql.get(`SELECT * FROM spank WHERE userId ="${user.id}"`).then(row => {
        message.channel.send({embed: {
            description: `**${message.author.lastMessage.member.displayName}** just spanked **${userNick}**`,
            footer:{
                text: `${userNick} has been spanked ${row.spank} times.`
            },
            image: {
                url: "attachment://"+spank[spankImage]+".gif"
            }
           
        },
        files: [{ attachment: 'images/spank/'+spank[spankImage]+'.gif', name: spank[spankImage]+'.gif' }]
    });
        sql.run(`UPDATE spank SET spank = ${row.spank + 1} WHERE userId = ${user.id}`);
      });
            }
        }
    }
 
if (message.content.toLowerCase().startsWith('.kiss')){
    let kissImage = Math.floor(Math.random()*kiss.length);
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM kiss WHERE userId ="${user.id}"`).then(row => {
    message.channel.send({embed: {
        description: `**${message.author.lastMessage.member.displayName}** just kissed **${userNick}**`,
        footer:{
            text: `${userNick} has been kissed ${row.kiss} times.`
        },
        image: {
            url: "attachment://"+kiss[kissImage]+".gif"
        }
       
    },
    files: [{ attachment: 'images/kiss/'+kiss[kissImage]+'.gif', name: kiss[kissImage]+'.gif' }]
});
    sql.run(`UPDATE kiss SET kiss = ${row.kiss + 1} WHERE userId = ${user.id}`);
  });
}
}



if (message.content.toLowerCase().startsWith('.hug')){
    let hugImage = Math.floor(Math.random()*hug.length);
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM hug WHERE userId ="${user.id}"`).then(row => {
    message.channel.send({embed: {
        description: `**${message.author.lastMessage.member.displayName}** just hugged **${userNick}**`,
        footer:{
            text: `${userNick} has been hugged ${row.hug} times.`
        },
        image: {
            url: "attachment://"+hug[hugImage]+".gif"
        }
       
    },
    files: [{ attachment: 'images/hug/'+kiss[hugImage]+'.gif', name: hug[hugImage]+'.gif' }]
});
    sql.run(`UPDATE hug SET hug = ${row.hug + 1} WHERE userId = ${user.id}`);
  });
}
}

if (message.content.toLowerCase().startsWith('.kill')){
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM kill WHERE userId ="${user.id}"`).then(row => {
        const embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.lastMessage.member.displayName}** just cut **${userNick}** in the throat :dagger: `)
        .setFooter(`${userNick} has been killed ${row.kill} times.`)
        message.channel.send(embed)
    sql.run(`UPDATE kill SET kill = ${row.kill + 1} WHERE userId = ${user.id}`);
  });
}
}

if (message.content.toLowerCase().startsWith('.wavecheck')){
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM wavecheck WHERE userId ="${user.id}"`).then(row => {
        const embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.lastMessage.member.displayName}** just wave checked **${userNick}**`)
        .setFooter(`${userNick} has been wave checked ${row.wavecheck} times.`)
        message.channel.send(embed)
    sql.run(`UPDATE wavecheck SET wavecheck = ${row.wavecheck + 1} WHERE userId = ${user.id}`);
  });
}
}

if (message.content.toLowerCase().startsWith('.punch')){
    let punchImage = Math.floor(Math.random()*punch.length);
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM punch WHERE userId ="${user.id}"`).then(row => {
    message.channel.send({embed: {
        description: `**${message.author.lastMessage.member.displayName}** just punched **${userNick}** in the fucking nose and broke it`,
        footer:{
            text: `${userNick} has been punch ${row.punch} times.`
        },
        image: {
            url: "attachment://"+punch[punchImage]+".gif"
        }
       
    },
    files: [{ attachment: 'images/punch/'+punch[punchImage]+'.gif', name: punch[punchImage]+'.gif' }]
});
    sql.run(`UPDATE punch SET punch = ${row.punch + 1} WHERE userId = ${user.id}`);
  });
}
}
 
if (message.content.toLowerCase().startsWith('.fuck')){
    if (message.channel.nsfw == false){
        message.reply("This command shows explicit content and may only be used in the nsfw channel.")
    } else if (message.channel.nsfw == true) {
    let fuckImage = Math.floor(Math.random()*fuck.length);
    let user = message.mentions.users.first()
    if (user == null){
        message.reply("You need to mention someone for this command to work!")
    } else {
    let userNick = message.guild.members.get(user.id).displayName
    sql.get(`SELECT * FROM fuck WHERE userId ="${user.id}"`).then(row => {
    message.channel.send({embed: {
        description: `**${message.author.lastMessage.member.displayName}** just fucked **${userNick}**`,
        footer:{
            text: `${userNick} has been fucked ${row.fuck} times.`
        },
        image: {
            url: "attachment://"+fuck[fuckImage]+".gif"
        }
       
    },
    files: [{ attachment: 'images/fuck/'+fuck[fuckImage]+'.gif', name: fuck[fuckImage]+'.gif' }]
});
    sql.run(`UPDATE fuck SET fuck = ${row.fuck + 1} WHERE userId = ${user.id}`);
  });
}
}
}

if (message.content.toLowerCase().startsWith('.cry')){
    let cryImage = Math.floor(Math.random()*cry.length);
    let userNick = message.guild.members.get(message.author.id).displayName
    sql.get(`SELECT * FROM cry WHERE userId ="${message.author.id}"`).then(row => {
    message.channel.send({embed: {
        description: `**${message.author.lastMessage.member.displayName}**  cries alone...`,
        footer:{
            text: `${userNick} has cried ${row.cry} times.`
        },
        image: {
            url: "attachment://"+cry[cryImage]+".gif"
        }
        
    },
    files: [{ attachment: 'images/cry/'+cry[cryImage]+'.gif', name: cry[cryImage]+'.gif' }] 
});
    sql.run(`UPDATE cry SET cry = ${row.cry + 1} WHERE userId = ${message.author.id}`);
  });
}


//ADD NEW COMMANDS AFTER THIS LINE
if (message.content == '.help'){
    message.channel.send("```Go to indianbot.weebly.com for more\n\nList of Commands\n\n[Abusing]\n.slap - .slap @mention [slaps a member]\n.kiss - .kiss @mention [kisses a member]\n.spank - .spank @mention [spanks a member] (NFSW ONLY)\n.hug - .hug @mention [hugs a member]\n.fuck - .fuck @mention [fucks a member] (NFSW ONLY)\n.kill - .kill @mention [kills a member]\n.marry - .marry @mention [marries a member]\n.punch - .punch @mention [punches a member]\n​.cry - .cry @mention [crys... duh]\n\n[Music]\n.play - .play (Song Name or Youtube URL)\n.skip - .skip Skips the current song\n.stop - .stop Stops the current song```");
}
 
if(message.content == 'Hello Indian Bot!'){
message.reply('Fuck You');
}
 
if(message.content == 'kill ur self'){
message.reply('no u');
}
 
if(message.content == 'fuck u'){
message.reply('no u');
}

if(message.content == 'fuck you'){
    message.reply('no u');
    }
/*
if(message.content == 'shit'){
        message.reply('haha tyler eats shit');
        }
*/ 

if(message.content == 'belle delphine is fucking stupid'){
message.reply('dont you ever fucking say about the goddess that is belle delphine. you stupid fucking whore');
}
 
if(message.content == 'luigi'){
message.reply('Luigi is a fictional character featured in video games and related media released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed as the slightly younger but taller ...');
}
 
if(message.content == 'hit or yiff'){
message.reply('I GUESS🤔THEY NEVER🚫YIFF🐾HUH? YOU😲GOT✔️A FUR-FRIEND🙊 I BET🎰HE DOESNT🙅KNOT💄💦YA! POP 💋 HE GON👉GLOMP🤗ANOTHER😐GIRL💃AND HE WONT🚫MISS YA!😪HE GON😋POUNCE🐅AND GO OWO LIKE WHAT😏IS THIS?🍆NYA~ 😻');
}
 
if (message.content == '!voiceinfo'){
    let guild = bot.guilds.get('395842268671639553').voiceConnection
    console.log(guild)
}
//MUSIC FUNCTION START
if (message.content.startsWith(".play")){
    let ytURL = message.content.slice(5);
    if (!message.member.voiceChannel){
        message.channel.send("You must join a voice channel first");
        return;
    } youtube.searchVideos(ytURL, 4).then(results => {
    if (!servers[message.guild.id]) servers [message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id]
    server.queue.push(results[0].url);
    if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
        play(connection, message);
       
    });
    message.channel.send(`${message.author} has added **${results[0].title}** to the playlist.`)
});
 
}
if (message.content == ".skip"){
    var server = servers[message.guild.id];
    if (server.dispatcher) server.dispatcher.end();
    message.channel.send(`${message.author} has skipped the song.`)
    return;
}
if (message.content == ".stop"){
    var server = servers[message.guild.id];
    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.channel.send(`${message.author} has ended the playlist.`)
}
 
//MUSIC FUNCTION END
 
if (message.content.startsWith('.marry')){
let userID = message.mentions.users.first().id;
let userNick = message.guild.members.get(userID).displayName
message.channel.send(`:tada:${message.author.lastMessage.member.displayName} :heart: ${userNick}:tada:`)
}


if (message.content == "message"){
const embed = new Discord.RichEmbed()
  .setTitle("Level System (To level up you have to type in chat) (No you cant spam chat it only registers what you type every one minute)")
  .setColor("PURPLE")
  .addField("New Niggy", "Congrats! You have typed a couple of times and got called a retard. You have achieved the first rank New Niggy!")
  .addField("Normal Niggy", "This is the slightly worse rank after Normal Niggy. To achieve this one you must reach level 5.")
  .addField("Indian Niggy", "Wow your really wasting alot of time on this server if you want this rank. To achieve this one you must reach level 10.")
  .addField("Coochie Beggar", "You begging little bitch. To reach this rank you must reach level 15.")
  .addField("Squidward", "*Aggresively Toots Clarinet* To achieve this rank you must reach level 20.")
  .addField("Choochie Master", "Congrats on wanting to become the master of COOCHIE. To achieve this rank you must reach level 25.")
  .addField("Belle Delphine Nude Holder", "Low and Behold, The Delphine Nude Holder. To achieve th is rank you must reach level 35.")
  bot.channels.get('528342555675590656').send(embed) 
}

if (message.content == "message1"){
    const embed = new Discord.RichEmbed()
      .setTitle("These are the R U L E S. You must obey them ;)")
      .setColor("RED")
      .addField("1) ENGLISH ONLY.", "⠀")
      .addField("2) Be (somewhat) respectful of and too other people.", "⠀")
      .addField("3) NO adverstising of other server on ANY channel.", "⠀")
      .addField("4) Loud backround noises in any voice chat. That will result in a mute.", "⠀")
      .addField("5) Free speech is limited. Keep that in mind.", "⠀")
      .addField("6) Members of the server are to refrain from encouraging the harassment of other servers.", "⠀")
      .addField("7) Any and all illegal or degenerative acts are prohibited. Such as, *Brutal/Goreposting*, *Pedophilia*, *Sexual Fetishes*, *Extremely suggestive comments*", "⠀")
      .addField("8) Keep relevant topics to their respective channels.", "⠀")
      .addField("9) Spamming is *obviously* not allowed.", "⠀")
      .addField("10) Have a good time :)", "⠀")
      bot.channels.get('532743941393743875').send(embed) 
    }


});


bot.login(TOKEN);