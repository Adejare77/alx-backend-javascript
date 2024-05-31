export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const array = [];
  for (const keys in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, keys)) {
      array.push(...allEmployees[keys]);
    }
  }
  return array;
}
