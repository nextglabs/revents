import React from "react";
import { Menu, Button } from "semantic-ui-react";
const SignedOutMenu = props => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Register" />
      <Button
        basic
        inverted
        content="Sign In"
        onClick={props.signIn}
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
