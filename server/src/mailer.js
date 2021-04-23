const nodemailer = require('nodemailer') // Importa o Nodemailer

// Esse bloco é disponibilizado pelo cliente de email para se integrar ao Nodemailer. No exemplo usamos o Mailtrap.
const transport = nodemailer.createTransport({ 
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "INSERT_YOUR_USER_HERE",
        pass: "INSERT_YOUR_PASSWORD_HERE"
    }
});

// Exporta-se as configs
module.exports = transport
