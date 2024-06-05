interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Rashisky",
    lastName: "Adejare",
    age: 31,
    location: 'Nigeria'
};
const student2: Student = {
    firstName: "Abdullahi",
    lastName: "Adejare",
    age: 28,
    location: "Nigeria"
};

const studentsList: Student[] = [student1, student2]

// To render table
function renderTable(students: Student[]): void {
    // Create Table
    const table = document.createElement('table')
    // Create Table Body
    const tbody = document.createElement('tbody')

    students.forEach((student) => {
        // create table row
        const row = document.createElement('tr');
        // create table data
        const firstCell = document.createElement('td')
        firstCell.textContent = student.firstName
        row.appendChild(firstCell)

        const secondCell = document.createElement('td')
        secondCell.textContent = student.location
        row.appendChild(secondCell)

        // append the row to tbody
        tbody.appendChild(row)

        // append the tbody to table
        table.appendChild(tbody)
    })
    document.body.appendChild(table);
}

renderTable(studentsList)
