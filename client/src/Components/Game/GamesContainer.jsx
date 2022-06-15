import React, { Component } from "react";
// import "./ProductCards.css";

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  // async componentDidMount() {
  //   const games = await getgames();
  //   this.setState({ games });
  // }

  render() {
    // const CARDS = this.state.games
    //   .reverse()
    //   .map((game, index) =>
    //     index < 8 ? (
    //       <GameCard
    //         _id={game._id}
    //         name={game.name}
    //         imgURL={game.imgURL}
    //         key={index}
    //       />
    //     ) : null
    //   );

    return (
      <div className="border border-black">
        <div className="game-cards">
          <div className="p-10 latest">Game List</div>
          {/* <div className="cards">{CARDS}</div> */}
        </div>
      </div>
    );
  }
}

export default GameContainer;
