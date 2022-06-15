import React from "react";
import Layout from "../Components/Layout/Layout";

export default function About(props) {
  return (
    <div>
      <Layout
        id={props.id}
        username={props.username}>About</Layout>
    </div>
  );
}
