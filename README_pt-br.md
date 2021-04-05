![Bikcraft](readme-images/bikcraft.png)

# Bikcraft :bike:

> :us: If you prefer to read in another language, this README was also written in english. Click [HERE](/README.md) to access.

*Esse foi um projeto desenvolvido durante o [curso Web Design](https://www.origamid.com/curso/web-design-completo/) da [Origamid](https://www.origamid.com/).*

## O que é a Origamid? :wolf:

A Origamid é uma instituição de ensino online criada pelo André Rafael com o intuito de repassar seus conhecimentos em Front-end e UI&UX.

## Objetivo :dart:

Bikcraft é um time de pessoas criativas que idealizam, constroem e vendem bicicletas customizadas, impactando positivamente o meio ambiente e no bem estar físico dos clientes.

## Alguns detalhes :scroll:

* O envio de formulários, ao contrário do projeto original, é feito através do Node.JS.
* O front end é feito com HTML5, CSS3 e JavaScript.

## Como rodar o projeto em minha máquina? :thinking:

O primeiro passo é clonar o projeto, seja via terminal ou GitHub Desktop, ou mesmo baixando o arquivo compactado (.zip). Após isso, siga  adiante.

### Requisitos :hammer_and_wrench:

> Caso você queira apenas dar uma olhada na interface, não é necessário nenhum dos requisitos abaixo, apenas abra o arquivo *index.html* no navegador de sua preferência.
>
> Porém, caso queira testar a funcionalidade de envio de formulário, as ferramentas abaixo são necessárias.

* [Node.JS](https://nodejs.org/).
* (Opcional) [Yarn](https://yarnpkg.com/).
* [VSCode](https://code.visualstudio.com/) e a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Instalando dependências :mag:

Com o Node.JS instalado, acesse a pasta *node-server* via terminal e rode o comando `npm install`. Caso você prefira usar o Yarn, basta rodar o comando `yarn`.

### Rodando o back end :goggles:

Antes de executar o servidor é necessário fazer uma configuração. Abra o arquivo *node-server/src/mailer.js* e adicione suas credenciais SMTP de login.

> Para meus testes usei os serviços do [Mailtrap](https://mailtrap.io/). Caso não o for usá-lo, troque também o *host* e a *port* conforme fornecido pelo seu serviço de preferência.

![Credenciais de login](readme-images/changing-smtp-login.png)

Acesse o diretório *node-server* via terminal e execute `npm start` (ou `yarn start`) e uma mensagem parecida com a seguinte aparecerá para você:

![Rodando o servidor](readme-images/running-server.png)

Obs.: Caso não tenha sido esse o resultado, verifique que os requisitos e os passos anteriores tenham sido cumpridos.

### Rodando o front end :sparkles:

Abra a pasta do projeto no VSCode e, clicando com o botão direito sobre o arquivo *index.html*, escolha *Open with Live Server*. Um servidor será iniciado pela extensão e ela abrirá o site no seu navegador padrão.

> Não se esqueça de deixar o back end redando em paralelo!

## Se tudo deu certo... :tada:

Agora você está o projeto rodando lindamente!
