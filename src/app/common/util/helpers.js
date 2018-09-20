import moment from "moment";

export const objectToArray = object => {
  if (object) {
    return Object.entries(object).map(e => Object.assign(e[1], { id: e[0] }));
  }
};
export const createNewEvent = (user, photoURL, event) => {
  //moment gives a Javascript date
  event.date = moment(event.date).toDate();
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || "/assets/user.png",
    created: Date.now(),
    attendees: {
      //key of object
      [user.uid]: {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || "assets/user.png",
        displayName: user.displayName,
        host: true
      }
    }
  };
};
