#!/usr/bin/node

const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const students = data.toString().trim()
        .split('\n').splice(1)
        .filter((line) => line.trim() !== '')
        .map((line) => line.split(','));

      let studentsInfo = '';
      const noOfStudents = `Number of students: ${students.length}`;

      const fields = {};
      for (const student of students) {
        const field = student[student.length - 1];
        if (!fields[field]) {
          fields[field] = [];
        }
        const firstName = student[0];
        fields[field].push(firstName);
      }

      studentsInfo = studentsInfo.concat(noOfStudents);
      for (const [field, names] of Object.entries(fields)) {
        studentsInfo = studentsInfo.concat(`\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(studentsInfo);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, resp) => {
  resp.set('Content-Type', 'text/plain');
  resp.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2])
    .then((data) => {
      response.status = 200;
      response.set('Content-Type', 'text/plain');
      response.send(`This is the list of our students\n${data}`);
    }).catch((err) => {
      response.status = 404;
      response.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port);

module.exports = app;
