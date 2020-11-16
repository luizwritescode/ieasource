const http = require('http');
const ngrok = require('ngrok');
const express = require('express')

const app = express()
const port = 19009;

app.use(express.static('public'))

app.listen(port, async (err) => {
    if (err) return console.log(`Something bad happened: ${err}`);
    console.log(`Node.js server listening on ${port}`);

    const url =  await ngrok.connect(port)
    console.log(`Node.js local server is publicly-accessible at ${url}`);

});