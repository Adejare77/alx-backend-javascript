export default function appendToEachArrayValue(array, appendString) {
  for (const [idx] of array.entries()) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + array[idx];
  }

  return array;
}