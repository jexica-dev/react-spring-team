import React from "react";
import Layout from "../Components/Layout/Layout";

export default function Account(props) {
  return (
    <div>
      <Layout
        id={props.id}
        username={props.username}>Account</Layout>
    </div>
  );
}
