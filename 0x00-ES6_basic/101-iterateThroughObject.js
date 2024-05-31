export default function iterateThroughObject(reportWithIterator) {
  const separator = ' | ';
  const result = reportWithIterator.join(separator);
  return result;
}
