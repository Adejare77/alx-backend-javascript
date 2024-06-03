export default function getStudentsByLocation(array, city) {
  const getCity = array.filter((obj) => obj.location === city);
  return getCity;
}
