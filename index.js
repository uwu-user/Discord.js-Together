const { Discord, MessageEmbed, Intents, Client } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.login("You bot TOKEN");

// Discord Together
client.on("messageCreate", message => {
  if (message.content.startsWith("djs!Game")) {
    try {
      let args = message.content.split(" ").slice(1);
      let c = message.guild.channels.cache.find(x => x.name == args[0]);
      let Embed = new MessageEmbed()
        .setTitle("command: Discord Together")
        .addField(`Usage:`, `djs!Game (voice channel name) (Game ID)`, inline: true)
        .addField(`Examples: `, `djs!Game Gamesvoice 755600276941176913`, inline: true);
      if (!c || c.type !== "GUILD_VOICE" || isNaN(args[1]))
        return message.channel.send({ embeds: [Embed] });
      c.createInvite({
        maxUses: 0,
        maxAge: 86400,
        targetApplication: args[1],
        targetType: 2,
        temporary: false
      }).then(content => message.channel.send({ content: content.url }));
    } catch (error) {
      message.channel.send({ content: error.message });
    }
  }
});
  
