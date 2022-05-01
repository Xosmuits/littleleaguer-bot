const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
    name: "rolesselector",
    category: "test",
    devOnly: true,
    run: async ({client, message, args}) => {
        message.channel.send({
            embeds: [
                new MessageEmbed().setTitle("Select Role").setDescription("Select roles from the buttons below").setColor("BLUE")
            ],
            components: [
                new MessageActionRow().addComponents([
                    new MessageButton().setCustomId("role-935243920177242122").setStyle("PRIMARY").setLabel("Rocker"),
                    new MessageButton().setCustomId("role-585550973909467179").setStyle("PRIMARY").setLabel("Blitzer"),
                    new MessageButton().setCustomId("role-615223853928415247").setStyle("PRIMARY").setLabel("Firefighter"),
                    new MessageButton().setCustomId("role-969617961398730799").setStyle("PRIMARY").setLabel("ETC")
                ])
            ]
        })
    }
}