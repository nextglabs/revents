import moment from "moment";
import { toastr } from "react-redux-toastr";

//getFirebase is an exception for updating Firestore profile
export const updateProfile = user => async (
  dispatch,
  getState,
  { getFirebase }
) => {
  const firebase = getFirebase();
  //Update dateOfBirth only if the dateOfBirth is != dateOfBirth stored in firebase
  if (user.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
    user.dateOfBirth = moment(user.dateOfBirth).toDate();
  }
  try {
    //updateProfile used against firestore user profile document
    await firebase.updateProfile(user);
    toastr.success("Success", "Profile updated");
  } catch (error) {
    console.log(error);
  }
};
