import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [19, 20, 34];
  const result = [];

  for (const element of array) {
    result.push(new ClassRoom(element));
  }
  return result;
}
