import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SettingsNav from "../Settings/SettingsNav";
import BasicPage from "../Settings/BasicPage";
import AboutPage from "../Settings/AboutPage";
import PhotosPage from "../Settings/PhotosPage";
import AccountPage from "../Settings/AccountPage";
const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic'/>
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
