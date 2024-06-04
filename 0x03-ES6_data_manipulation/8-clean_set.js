export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const startStringArray = [...set]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length));

  return startStringArray.join('-');
}
