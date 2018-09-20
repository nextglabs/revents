import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty } from "react-redux-firebase";
import { compose } from "redux";
import { Grid } from "semantic-ui-react";

import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedDescription from "./UserDetailedDescription";
import UserDetailedPhotos from "./UserDetailedPhotos";
import UserDetailedSidebar from "./UserDetailedSidebar";
import UserDetailedEvents from "./UserDetailedEvents";
import { userDetailedQuery } from "../userQueries";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapState = (state, ownProps) => {
  let userUid = null;
  let profile = {};
  //check if user id in URL matches current user
  if (ownProps.match.params.id === state.auth.uid) {
    profile = state.firebase.profile;
  } else {
    //if there is a profile of other user (userUid != current user)
    //set profile to new userUid and set userUid
    profile =
      !isEmpty(state.firestore.ordered.profile) &&
      state.firestore.ordered.profile[0];
    userUid = ownProps.match.params.id;
  }
  return {
    profile,
    userUid,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos,
    requesting: state.firestore.status.requesting
  };
};

class UserDetailedPage extends Component {
  render() {
    const { profile, photos, auth, match, requesting } = this.props;
    //if currentUser matches the id in URL
    const isCurrentUser = auth.uid === match.params.id;
    const loading = Object.values(requesting).some(a => a===true);
    if (loading) return <LoadingComponent inverted={true}/>
    console.log(profile);
    console.log(photos);
    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedDescription profile={profile} />
        <UserDetailedSidebar isCurrentUser={isCurrentUser}/>
        {photos && photos.length > 0 && <UserDetailedPhotos photos={photos} />}
        <UserDetailedEvents />
      </Grid>
    );
  }
}

export default compose(
  connect(mapState),
  firestoreConnect((auth, userUid) => userDetailedQuery(auth, userUid))
)(UserDetailedPage);
