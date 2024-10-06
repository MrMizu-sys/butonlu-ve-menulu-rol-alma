
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
                            { "label": "Dragon Ball", "value": "dragonball", "emoji": { "name": "🎯" }, },
                            { "label": "Naruto", "value": "naruto", "emoji": { "name": "🎯" }, },
                            { "label": "Jujutsu Kaisen", "value": "jjk", "emoji": { "name": "🎯" }, },
                            { "label": "Hunter x Hunter", "value": "hxh", "emoji": { "name": "🎯" }, },
                            { "label": "Demon Slayer", "value": "demonslayer", "emoji": { "name": "🎯" }, },
                            { "label": "Dr. Stone", "value": "drstone", "emoji": { "name": "🎯" }, },
                            { "label": "Death Note", "value": "deathnote", "emoji": { "name": "🎯" }, },
                            { "label": "Vinland Saga", "value": "vinlandsaga", "emoji": { "name": "🎯" }, },
                            { "label": "Hell's Paradise", "value": "hellparadise", "emoji": { "name": "🎯" }, },
                            { "label": "Tokyo Revengers", "value": "tokyorevengers", "emoji": { "name": "🎯" }, },
                            { "label": "Blue Lock", "value": "bluelock", "emoji": { "name": "🎯" }, },
                            { "label": "Monster", "value": "monster", "emoji": { "name": "🎯" }, },
                            { "label": "Re:Zero", "value": "rezero", "emoji": { "name": "🎯" }, },
			    { "label": "High School Dxd", "value": "dxd", "emoji": { "name": "🎯" }, },
                            { "label": "Tokyo Ghoul", "value": "tokyoghoul", "emoji": { "name": "🎯" }, },
                            { "label": "Fire Force", "value": "fireforce", "emoji": { "name": "🎯" }, },
                            { "label": "Bleach", "value": "bleach", "emoji": { "name": "🎯" }, },
                            { "label": "Berserk", "value": "berserk", "emoji": { "name": "🎯" }, },
                            { "label": "Vagabond", "value": "vagabond", "emoji": { "name": "🎯" }, },
                            { "label": "Jojo's Bizarre Adventure", "value": "jojo", "emoji": { "name": "🎯" }, },
                            { "label": "Redo Of Healer", "value": "redo", "emoji": { "name": "🎯" }, },
                            { "label": "Attack On Titan", "value": "aot", "emoji": { "name": "🎯" }, },
                            { "label": "One Piece", "value": "onepiece", "emoji": { "name": "🎯" }, },
                            { "label": "Rol İstemiyorum", "value": "rolsil", "emoji": { "name": "🗑️" }, }
                        ], "placeholder": "Oyun Rol Al", "min_values": 1, "max_values": 1
                    }],
                }
                ]
            }
        })			
	}}

