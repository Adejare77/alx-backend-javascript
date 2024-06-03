export default function getStudentIdsSum(array) {
  const idsSum = array.reduce((cummulation, obj) => cummulation + obj.id, 0);
  return idsSum;
}
