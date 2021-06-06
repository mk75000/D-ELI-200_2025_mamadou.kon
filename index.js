const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})


client.on("message", function (message) {
    if (message.content === "Salut") {
        message.channel.send("Salut l'ami !")
    }

    if (message.content === "Comment vas tu ?") {
        message.channel.send("Bien et toi ?")
    }

    if (message.content === "Bonjour") {
        message.channel.send("Bonjour.")
    }

    if (message.content === "Quel age as tu ?") {
        message.channel.send("Je suis un bot et vous ?")
    }

    if (message.content === "Comment fait on pour connaitre la meteo ?"){
        message.channel.send("Il faut ecrire un w. suivie de la ville qui vous interesse exemple w.Paris ;)")
    }

    if (message.content === "help") {
        message.channel.send("Exemple: w.Paris")
    }

    if (message.content === "Quel est le code pour accedé a la meteo ?") {
        message.channel.send("Exemple: w.Paris")
    }

    if (message.content === "Bonsoir") {
        message.channel.send("Bonsoir.")
    }

    if (message.content === "Bonne journée") {
        message.channel.send("Merci à vous aussi !!!")
    }

    if (message.content === "Comment tu t'appel ?") {
        message.channel.send("Je m'appel Bot discussion du channel ForcastBot")
    }
})

client.login("ODUwMzk1NzQ2NDUyNjM1NzA4.YLpGwQ.yc0QQc7an54I9MJRpvymE1B1fSs");