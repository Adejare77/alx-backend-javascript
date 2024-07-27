#!/usr/bin/node
// Organize a complex HTTP server using Express

class AppController {
  static getHomepage (request, response) {
    response.status = 200;
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
