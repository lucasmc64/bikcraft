const nodemailer = require('nodemailer') // Importa o Nodemailer

// Esse bloco é disponibilizado pelo cliente de email para se integrar ao Nodemailer. No exemplo usamos o Mailtrap.
const transport = nodemailer.createTransport({ 
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "23204e39a63bc2",
        pass: "13429fd6ea43bc"
    }
});

// Exporta-se as configs
module.exports = transport