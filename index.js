/*const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PW}@gms.o08ggq2.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to DataBase!`);
}).catch((error) => {
    console.error(error);
});*/

const { Client, GatewayIntentBits, ActivityType, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});
require("dotenv").config();

client.once("ready", () => {
    client.user.setActivity({name: "Zone", type: ActivityType.Competing })
    console.log(`Logged in as ${client.user.tag}!!`)
}).on("guildMemberAdd", (member) => {
    client.channels.cache.get('1052798548997050422').send({
        embeds: [
            new EmbedBuilder()
            .setAuthor({
                name: member.displayName,
                iconURL: member.displayAvatarURL({dynamic: true})
            })
        ]
    })
})

client.on("messageCreate", (message) => {
    if(message.author.id == client.user.id)return;
    if(message.author.bot)return;
    if(message.content == "z.emit"){
        if(message.author.id !== "716343156513439845")return;
        client.channels.cache.get('1052798548997050422').send({
            embeds: [
                new EmbedBuilder()
                .setTitle('ユーザー情報')
                .setDescription('ユーザー情報は以下の通りです。')
                .setAuthor({ name: message.author.tag, iconURL: message.author.avatarURL({dynamic: true}) })
                .setURL(`https://discord.com/users/${message.author.id}`)
                .setThumbnail('https://gyazo.com/520c092f191cf3c7dcd75a559b7dd536/max_size/1000')
                .setImage('https://p.kindpng.com/picc/s/108-1084174_discord-js-discord-js-logo-png-transparent-png.png')
                .addFields({name:'json形式で書けるフィールド、こっちは名前で最大256字',value:'フィールドの値　※1024字まで'},{name:'`{name:"name",value:"value"}`で1セット',value:'足りないとエラーが出る'})
                .addFields({name:'inline: trueを加えることで',value:'インラインにできる',inline:true})
                .setColor("#2f3136")
                .setFooter({text: '埋め込みのフッター 2048字まで\n埋め込み全体の文字数は6000字まで\n一つのメッセージで送れる埋め込みは10個'})
                .setTimestamp()
            ]
        })
        message.reply(toString(message.author.hexAccentColor))
    }
})

client.login(process.env.BOT_TOKEN)