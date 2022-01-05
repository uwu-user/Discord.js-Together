// client
const { Discord, MessageEmbed, Intents, Client } = require("discord.js");
const client = new Client({  
  intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES 
       ]});

// Token
client.login("You bot TOKEN");

// Discord Together
client.on("messageCreate", message => {
  if (message.content.startsWith("djs!Game")) {
    try {
      let args = message.content.split(" ").slice(1);
      const channel = message.member.voice.channel;
      let Embed = new MessageEmbed()
        .setTitle("command: Discord Together")
        .addField(`Usage:`, `djs!Game (Game ID)`)
        .addField(`Examples: `, `djs!Game 755600276941176913`);
     if (!channel) return message.channel.sene({ content: "X - Join the Voice channel and try again"});
     if (!args[0]) return message.channel.send({ embeds: [Embed] });
      channel.createInvite({
        maxUses: 0,
        maxAge: 86400,
        targetApplication: args[1], // game ID
        targetType: 2,
        temporary: false
      }).then(content => message.channel.send({ content: content.url }));
    } catch (error) {
      message.channel.send({ content: "Error" });
    }
  }
});
  
