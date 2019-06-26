const app = require('./app').app()

const port = 3000;

const server = app.listen(port);

server.on('listening', () => {
  console.log(`Server started listening on port ${ port }`)
});

server.on('close', () => {
  console.log('Server is closing!')
});

const stop = () => {
  server.close();
}

process.on('SIGINT', stop);
process.on('SIGTERM', stop);
