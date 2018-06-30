const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

// listening on specific event and handle that event
io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage', {
        from: 'John',
        text: 'See you then',
        createdAt: 123123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('createEmail', (email) => {
        console.log('email: ', email);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`server is running at ${port}`);
});