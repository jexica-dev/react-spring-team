import React from "react";
import Layout from "../Components/Layout/Layout";

export default function Games(props) {
  return (
    <div>
      <Layout id={props.id} username={props.username}>Games</Layout>
    </div>
  );
}
