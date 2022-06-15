import React from "react";
import Layout from "../Components/Layout/Layout";
import Signup from "../Components/Login/Signup";

export default function SignupScreen(props) {
  return (
    <div>
      <Layout
        id={props.id} username={props.username}>
        <Signup />
      </Layout>
    </div>
  );
}
