#!/usr/bin/node

// const { createServer } = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, response) => {
//     response.statusCode = 200;
//     response.setHeader('Content-Type', 'text/plain');
//     response.end('Hello World');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
