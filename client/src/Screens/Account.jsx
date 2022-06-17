import React from "react";
import Layout from "../Components/Layout/Layout";

export default function Account(props) {
  return (
    <div>
      <Layout
        id={props.id}
        username={props.username}>
        <p>This needs:</p>
      <p>edit username -{`>`} no special restrictions </p>
      <p>edit password -{`>`} user must provide current password </p>
      <p>delete user -{`>`} user must provide current password </p>
      <p>log out button -{`>`} clears local storage</p>
        </Layout>
    </div>
  );
}
