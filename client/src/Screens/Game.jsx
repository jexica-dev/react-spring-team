import React from "react";
import GameDetail from "../Components/Game/GameDetail";

import Layout from "../Components/Layout/Layout";

export default function Game(props) {
  console.log(props.game);
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        GAME PAGE
        <GameDetail id={props.id} />
      </Layout>
    </div>
  );
}
