import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SettingsNav from "../Settings/SettingsNav";
import BasicPage from "../Settings/BasicPage";
import AboutPage from "../Settings/AboutPage";
import PhotosPage from "../Settings/PhotosPage";
import AccountPage from "../Settings/AccountPage";
import { updatePassword } from "../../auth/authActions";
import { updateProfile } from "../userActions";
const actions = {
  updatePassword,
  updateProfile
};

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
});

const SettingsDashboard = ({
  updatePassword,
  providerId,
  user,
  updateProfile
}) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route
            path="/settings/basic"
            render={() => (
              <BasicPage updateProfile={updateProfile} initialValues={user} />
            )}
          />
          <Route path="/settings/about" render={() => <AboutPage updateProfile={updateProfile} initialValues={user} />} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                updatePassword={updatePassword}
                providerId={providerId}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(
  mapState,
  actions
)(SettingsDashboard);
