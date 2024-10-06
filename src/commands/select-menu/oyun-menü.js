
const { Client, Intents,Collection, interaction, MessageActionRow, MessageSelectMenu } = require('discord.js');
const config = require("../../../config.json")
const db = require('quick.db');
const Discord = require("discord.js");
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
	module.exports = {
    name: "oyun-seçim",
    aliases: ["oyuun","oyun-menü"],

    execute: async (client, message, args, embed, author, channel, guild) => {
		if(message.author.id !== config.bot.owner) return message.channel.send({ embeds: [embed.setDescription(`${message.member}, Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`)] }).then((e) => setTimeout(() => { e.delete(); }, 10000));

     message.delete()
			
        client.api.channels(message.channel.id).messages.post({
            data: {
                "content": `**Oyun Rol :**`,
                "components": [{
                    "type": 1, "components": [{
                        "type": 3, "custom_id": "oyun", "options": [
                            { "label": "Dragon Ball", "value": "mc", "emoji": { "name": "🎯" }, },
                            { "label": "Naruto", "value": "mlbb", "emoji": { "name": "🎯" }, },
                            { "label": "Jujutsu Kaisen", "value": "lol", "emoji": { "name": "🎯" }, },
                            { "label": "Hunter x Hunter", "value": "gta5", "emoji": { "name": "🎯" }, },
                            { "label": "Demon Slayer", "value": "valo", "emoji": { "name": "🎯" }, },
                            { "label": "Dr. Stone", "value": "amongus", "emoji": { "name": "🎯" }, },
                            { "label": "Death Note", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Vinland Saga", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Hell's Paradise", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Tokyo Revengers", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Blue Lock", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Monster", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Re:Zero", "value": "csgo", "emoji": { "name": "🎯" }, },
			    { "label": "High School Dxd", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Tokyo Ghoul", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Fire Force", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Bleach", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Berserk", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Vagabond", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Jojo's Bizarre Adventure", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Redo Of Healer", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Attack On Titan", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "One Piece", "value": "csgo", "emoji": { "name": "🎯" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Oyun Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })			
	}}

