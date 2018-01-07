const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const io = socketIO();
const editorSocketService = require('./services/editorSocketService')(io);
// connect mongoDb
const mongoose = require('mongoose');
mongoose.connect('mongodb://user2:user@ds125896.mlab.com:25896/winechen9');

const restRouter = require('./routes/rest');
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, '../public/')));
app.use('/', indexRouter);
app.use('/api/v1', restRouter);
//if can't handle request like refreshing the page, pass it to index.html
app.use((req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/')});
});

// app.listen(3000, () => console.log('Example app listening on port 3000!'));
const server = http.createServer(app);
io.attach(server);
server.listen(3000);
server.on('listening', onListening);

function onListening() {
    console.log('App listening on port 3000!')
}