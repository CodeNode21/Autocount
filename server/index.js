const express = require('express');
const cors = require('cors');
const upload = require('./upload');

const server = express();

var corsOptions = {
    origin: '*',
    optionSuccessStatus: 200,
}

server.use(cors(corsOptions));
server.post('/upload', upload);

server.listen(8000, () => {
    console.log('Server started!');
})