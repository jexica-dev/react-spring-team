import React from "react";
import { useParams } from "react-router-dom";
import GameDetail from "../Components/Game/GameDetail";

import Layout from "../Components/Layout/Layout";

export default function Game(props) {
  let params = useParams();

  console.log(props.game);
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <div className="grid w-screen justify-items-center pt-10">
          <div className="w-96">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
              GAME PAGE
              <GameDetail id={params.id} games={props.games} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
