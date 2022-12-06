const Discord = require("discord.js");
const ytdl = require("ytdl-core");

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
    // Check if the message is a YouTube link
    if (!message.content.startsWith("https://www.youtube.com/")) return;

    // Check if the user is in a voice channel
    if (!message.member.voice.channel)
        return message.reply("You need to be in a voice channel to play music!");

    // Join the user's voice channel
    const connection = await message.member.voice.channel.join();

    // Play the YouTube song
    const stream = ytdl(message.content, { filter: "audioonly" });
    const dispatcher = connection.play(stream);
});

client.login("CLIENT_ID_HERE");
