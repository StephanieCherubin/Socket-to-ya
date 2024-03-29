const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket) {
  console.log('a user connected');
  // socket.broadcast.emit('hi');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// io.emit('some event', { for: 'everyone' });

http.listen(3000, function () {
  console.log('listening on *:3000');
});