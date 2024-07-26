#!/usr/bin/node

const { createServer } = require('http');
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

const app = createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.statusCode = 200;
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        response.statusCode = 200;
        response.write('This is the list of our students\n');
        response.end(data);
      })
      .catch((err) => {
        response.write('This is the list of our students\n');
        response.statusCode = 404;
        response.end(err.message);
      });
  }
});
const hostname = '127.0.0.1';
const port = 1245;
app.listen(port, hostname, () => {

});

module.exports = app;
