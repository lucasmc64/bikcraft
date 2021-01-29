![Bikcraft](readme-images/bikcraft.png)

# Bikcraft :bike:

*This was a project developed during the [Origamid](https://www.origamid.com/) Web Design course.*

## What is Origamid? :wolf:

Origamid é uma instituição de ensino online criada por Mestre André Rafael com o objetivo de transmitir seus conhecimentos em Front-end e UI&UX.

## Goal :dart:

Bikcraft is a team of creative people who idealize, build and sell customized bikes, positively impacting the environment and the physical well-being of customers.

## Some details :scroll:

* Sending forms, unlike the original project, is done through Node.JS.
* The front end is made with HTML5, CSS3 and JavaScript.

## How do I run the project on my machine? :thinking:

The first step is to clone the project, either via terminal or GitHub Desktop, or even by downloading the compressed file (.zip). After that, go ahead.

### Requirements :hammer_and_wrench:

> If you just want to take a look at the interface, none of the requirements below are required, just open the *index.html* file in your preferred browser.
>
> However, if you want to test the form submission functionality, the tools below are required.

- [Node.JS](https://nodejs.org/) (or [Yarn](https://yarnpkg.com/))  installed.
- [VSCode](https://code.visualstudio.com/) and the extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) installed.

## Installing dependencies :mag:

With Node.JS installed, access the *node-server* folder via terminal and run the `npm install` command. If you prefer to use Yarn, just run the command `yarn`.

### Running the back end :goggles:

Before running the server, it is necessary to make a configuration. Open the *node-server/src/mailer.js* file and add your SMTP login credentials.

> For my tests I used the services of [Mailtrap](https://mailtrap.io/). If you are not going to use it, also change the *host* and *port* as provided by your preferred service.

![Login credentials](readme-images/changing-smtp-login.png)

Access the *node-server* directory via terminal and run `npm start` (or` yarn start`) and a message similar to the following will appear for you:

![Running the server](readme-images/running-server.png)

Note: If this was not the result, check that the requirements and previous steps have been met.

### Running the front end :sparkles:

Open the project folder in VSCode and, by right-clicking on the *index.html* file, choose *Open with Live Server*. A server will be started by the extension and it will open the website in your default browser.

> Don't forget to leave the back end running in parallel!

## If everything went well... :tada:

Now you are running the project beautifully!
