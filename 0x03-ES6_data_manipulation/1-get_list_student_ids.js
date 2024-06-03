export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const objIds = array.map((element) => element.id);
  return objIds;
}
