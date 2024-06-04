// export default function hasValuesFromArray(set, array) {
//   const setArray = new Set(array);
//   const isSubset = [...setArray].every((x) => set.has(x));
//   return isSubset;
// }
export default function hasValuesFromArray(set, array) {
  const isSubset = array.every((x) => set.has(x));
  return isSubset;
}
