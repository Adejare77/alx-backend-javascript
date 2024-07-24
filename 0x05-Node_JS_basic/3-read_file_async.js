#!/usr/bin/node
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

      const noOfStudents = students.length;
      console.log(`Number of students: ${noOfStudents}`);

      const fields = {};
      for (const student of students) {
        const field = student[student.length - 1];
        if (!fields[field]) {
          fields[field] = [];
        }
        const firstName = student[0];
        fields[field].push(firstName);
      }

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      resolve(data);
    });
  });
}

module.exports = countStudents;
