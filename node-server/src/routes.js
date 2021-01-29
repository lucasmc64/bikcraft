const express = require('express');
const multer = require('multer');

const upload = multer();
const mailer = require('./mailer');
const { validateForm } = require('./validators');

const routes = express.Router();

routes.post('/products', upload.none(), validateForm, async function(request, response) {
    const { nome, email, telefone, mensagem: mensagem_do_cliente } = request.body;

    let message = `
        <h1>Saudações!</h1>
        <p><strong>${nome}</strong> está interessado(a) em seus produtos!</p>
    `;

    message += telefone && `<p>Este é o telefone dele(a): <strong>${telefone}</strong>. Entre em contato o quanto antes!</p>`;

    message += `
        <p>Para saber mais do que se trata, o possível cliente mandou a seguinte mensagem:</p>
        <p><strong>"${mensagem_do_cliente}"</strong></p><br>
    `;

    try {
        await mailer.sendMail({
            to: email,
            from: 'equipebikcraft@bikcraft.com',
            subject: 'Formulário Bikcraft',
            html: `
                <h1>Saudações!</h1>
                <p>Nós recebemos sua mensagem e em breve entraremos em contato com você!</p>
                <br>
                <p>Atenciosamente, Equipe Bikcraft.</p>
            `
        });
    
        await mailer.sendMail({
            to: 'equipebikcraft@bikcraft.com',
            from: 'equipebikcraft@bikcraft.com',
            subject: 'Formulário Bikcraft',
            html: message
        });

        return response.json({ ok: 'okay' });
    } catch (error) {
        console.error(error)
    }
});

routes.post('/contact', upload.none(), validateForm, async function(request, response) {
    const { nome, email, telefone, mensagem: mensagem_do_cliente } = request.body;

    let message = `
        <h1>Saudações!</h1>
        <p><strong>${nome}</strong> está querendo conversar!</p>
    `;

    message += telefone && `<p>Este é o telefone dele(a): <strong>${telefone}</strong>. Entre em contato o quanto antes!</p>`;

    message += `
        <p>Para saber mais do que se trata, o possível cliente mandou a seguinte mensagem:</p>
        <p><strong>"${mensagem_do_cliente}"</strong></p><br>
    `;

    try {
        await mailer.sendMail({
            to: email,
            from: 'equipebikcraft@bikcraft.com',
            subject: 'Formulário Bikcraft',
            html: `
                <h1>Saudações!</h1>
                <p>Nós recebemos sua mensagem e em breve entraremos em contato com você!</p>
                <br>
                <p>Atenciosamente, Equipe Bikcraft.</p>
            `
        });
    
        await mailer.sendMail({
            to: 'equipebikcraft@bikcraft.com',
            from: 'equipebikcraft@bikcraft.com',
            subject: 'Formulário Bikcraft',
            html: message
        });

        return response.json({ ok: 'okay' });
    } catch (error) {
        console.error(error)
    }
});

module.exports = routes