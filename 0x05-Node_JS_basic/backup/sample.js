#!/user/bin/node

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1)
    .filter((line) => line.trim() != '')
    .map((line) => line.split(','))

    const numberOfStudents = students.length
    console.log(`Number of students: ${numberOfStudents}`)

    const fields = {};
    map((student) => {
      const field = student[-1];
      if (!fields[field]) {
        fields[field] = []
      }
      fields[field].push(student[0])
    });

    for (const [field, names] of fields) {
      console.log(`Number of students in ${field}: ${field.length}. List: ${names.join(", ")}`)
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }

}

countStudents('database.csv')
