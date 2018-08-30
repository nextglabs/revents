import React from "react";
import { Menu, Button } from "semantic-ui-react";
const SignedOutMenu = ({ signIn, register }) => {
  return (
    <Menu.Item position="right">
      <Button basic inverted content="Register" onClick={register} />
      <Button
        basic
        inverted
        content="Sign In"
        onClick={signIn}
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
