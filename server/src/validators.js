function validateForm(request, response, next) {
    const { nome, email, mensagem: mensagem_do_cliente, leaveblank, dontchange } = request.body;

    if(leaveblank !== '' || dontchange !== 'http://') {
        return response.send('Robots don\'t will pass!');
    }

    if(nome === '' || email === '' ||  mensagem_do_cliente === '') {
        return response.send('Please, fill in all required fields!');
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(emailRegex)) {
        return response.send('Please, type a valid email!');
    }

    next();
}

module.exports = {
    validateForm
}