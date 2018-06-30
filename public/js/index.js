var socket = io();
socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey. This is Nguyen'
    });

    socket.emit('createMessage', {
        from: 'Nguyen',
        text: 'Yup, that works for me.'
    });
    
});

socket.on('newMessage', function (newMessage) {
    console.log('new message: ', newMessage);
});


