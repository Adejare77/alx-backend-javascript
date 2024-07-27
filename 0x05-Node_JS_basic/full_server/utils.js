#!/usr/bin/node

const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err);
      }

      const students = data.toString().trim()
        .split('\n').slice(1)
        .filter((line) => line.trim() !== '')
        .map((line) => line.split(','));

      const fields = {};
      students.forEach((student) => {
        const field = student[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(student[0]);
      });
      resolve(fields);
    });
  });
}

module.exports = readDatabase;
