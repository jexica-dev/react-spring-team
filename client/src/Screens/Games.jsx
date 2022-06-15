import React from "react";
import GameContainer from "../Components/Game/GamesContainer";
import GameSearch from "../Components/Game/GameSearch";
import Layout from "../Components/Layout/Layout";

export default function Games() {
  return (
    <div>
      <Layout>
        <GameSearch />
        <GameContainer />
      </Layout>
    </div>
  );
}
