interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  //Allow addition of any other attribute
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.slice(0,1)}. ${lastName}`
}

interface Student {
    firstName: string;
    lastName: string;
    workOnHome(): string;
    displayName(): string;

}

interface studentConstructor {
    new (firstName: string, lastName: string): Student
}

class StudentClass {
    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently working'
    }

    displayName(): string {
        return this.firstName;
    }
}
