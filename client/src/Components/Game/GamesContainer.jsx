import React, { Component } from "react";
import GameCard from "./GameCard";

class GameCards extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  async componentDidMount() {
    const games = await getgames();
    this.setState({ games });
  }

  render() {
    const CARDS = this.state.games
      .reverse()
      .map((game, index) =>
        index < 8 ? (
          <GameCard
            _id={game._id}
            name={game.name}
            imgURL={game.imgURL}
            key={index}
          />
        ) : null
      );

    return (
      <div className="game-cards">
        <div className="latest">LATEST</div>
        <div className="cards">{CARDS}</div>
      </div>
    );
  }
}

export default GameCards;
