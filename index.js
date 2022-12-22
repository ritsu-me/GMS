/*const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGO_PW}@gms.o08ggq2.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => {
    console.log(`Connected to DataBase!`);
}).catch((error) => {
    console.error(error);
});*/

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Client({
    intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});
require("dotenv").config();

client.once("ready", () => {
    client.user.setActivity({name: "Zone", type: ActivityType.Competing })
    console.log(`Logged in as ${client.user.tag}!!`)
})

client.on("messageCreate", (message) => {
    if(message.author.id == client.user.id)return;
    if(message.author.bot)return;
})

client.login(process.env.BOT_TOKEN)