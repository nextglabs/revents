import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Segment } from "semantic-ui-react";

const UserDetailedPhotos = () => {
  return (
    <Grid.Column width={4}>
      <Segment>
        <Button
          as={Link}
          to="/settings/basic"
          color="teal"
          fluid
          basic
          content="Edit Profile"
        />
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;
