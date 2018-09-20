import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button, Segment } from "semantic-ui-react";

const UserDetailedPhotos = ({ isCurrentUser }) => {
  return (
    <Grid.Column width={4}>
      <Segment>
        {isCurrentUser ? (
          <Button
            as={Link}
            to="/settings/basic"
            color="teal"
            fluid
            basic
            content="Edit Profile"
          />
        ) : (
          <Button color="teal" fluid basic content="Follow User" />
        )}
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedPhotos;
