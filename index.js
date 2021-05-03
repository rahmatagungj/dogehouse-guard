const { Client, EVENT } = require("dogehouse.js");
let app = new Client();
require("dotenv").config();

app.connect(process.env.TOKEN, process.env.REFRESH_TOKEN).then(async () => {
  console.log("Connected!");
  app.rooms.join("afa1a494-841f-4b9b-a38a-0ba6bd024940"); //put room id here
});

let prefix = "-";

app.on(EVENT.NEW_CHAT_MESSAGE, async (message) => {
  if (message.content == prefix + "halo") {
    await message.delete();
    message.reply("hai juga!", { whispered: true, mentionUser: false });
  }

  console.log(`${await message.author.username}: ${message.content}`); //showing any message from audience
});
