import React from "react";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";

export default function LoginScreen(props) {
  return (
    <div>
      <Layout>
        <Login
          id={props.id}
          username={props.username}
          handleLogin={props.handleLogin} />
      </Layout>
    </div>
  );
}
