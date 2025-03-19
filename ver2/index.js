const http = require('http');
const express = require("express");
const { createServer } = require('node:http');
const path = require('path')

const app = express();
const server = createServer(app);

app.use(express.static('./'))

 app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
 });
server.on('connection',(socket) => {
    console.log('New connection');
})

server.emit;

server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
  });