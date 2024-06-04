export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  const updatedItems = [...map].map(([key, value]) => {
    if (value === 1) {
      map.set(key, 100);
    }
    return map;
  });
  return updatedItems;
}
