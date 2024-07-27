#!/usr/bin/node

// const res = require('express/lib/response');
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents (request, response) {
    const firstLine = 'This is the list of our students';
    readDatabase(process.argv[2])
      .then((data) => {
        let output = firstLine;
        const fields = Object.keys(data);
        fields.sort();
        for (const field of fields) {
          output += `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        }
        response.status = 200;
        response.send(output);
      }).catch((error) => {
        response.status(500).send(firstLine.concat(error.message));
      });
  }

  static getAllStudentsByMajor (request, response) {
    const field = request.params.major;
    if (field !== 'CS' && field !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        const firstNames = `List: ${data[field].join(', ')}`;
        response.status = 200;
        response.send(firstNames);
      }).catch((err) => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
