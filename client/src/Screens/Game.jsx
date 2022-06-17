import React from "react";
import Layout from "../Components/Layout/Layout";

export default function Game(props) {
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        Single Game
      </Layout>
    </div>
  );
}
