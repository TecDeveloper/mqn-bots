const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/780771511220305922/788373698742714378/VmyUAs-k.png")   
.addField("Selam, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=805074688216268820&scope=bot&permissions=8)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "Davet Linki"
  };