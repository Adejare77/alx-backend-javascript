export default function updateStudentGradeByCity(array, city, newGrades) {
  const updatedArray = array.map((obj) => {
    const score = newGrades.filter((student) => student.studentId === obj.id)[0];
    return { ...obj, grade: score ? score.grade : 'N/A' };
  });
  return updatedArray;
}
