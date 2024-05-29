import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function asyncUploadUser(fileName, firstName, lastName) {
  try {
    const photo = await uploadPhoto(fileName);
    const user = await signUpUser(firstName, lastName);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error(error);
    return {
      photo: null,
      user: null,
    };
  }
}
