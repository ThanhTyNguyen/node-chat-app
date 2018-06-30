var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('newMessage', function (newMessage) {
    console.log('new message: ', newMessage);
});

socket.on('welcomeMessage', function (welcomeMessage) {
    console.log(welcomeMessage);
});

