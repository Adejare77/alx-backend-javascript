export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Student must be an array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  static nameType(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  static lengthType(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  static studentsType(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Student must be a array');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    HolbertonCourse.nameType(value);
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    HolbertonCourse.lengthType(value);
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    HolbertonCourse.lengthType(value);
    this._students = value;
  }
}
