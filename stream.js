const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('State Is Working Sir..');
});

const devs = ["525397055812665346"];
const adminprefix = ["k"];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
 
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Now You Playing** ✅[${argresult}]`)
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Now You Watching** ✅[${argresult}]`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/KqarZo");
      message.channel.send(`**Now You Streaming** ✅[${argresult}]`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Now You Listening To** ✅[${argresult}]`)
client.user.setStatus("dnd")
  }
});
 client.login(process.env.BOT_TOKEN);
