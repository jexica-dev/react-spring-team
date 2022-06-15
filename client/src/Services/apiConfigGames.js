// GET https://api.rawg.io/api/platforms?key=b0781e255b0e40eabb8541cb5aa4260e
// GET https://api.rawg.io/api/games?key=b0781e255b0e40eabb8541cb5aa4260e&dates=2019-09-01,2019-09-30&platforms=18,1,7

import axios from "axios";

// Number of requests left for the period
// >=20000
// Number of requests will renew on
// 7/13/2022

const apiKey = `b0781e255b0e40eabb8541cb5aa4260e`;

const getGameData = async (props) => {
  let searchValue = props.searchValue;
  removeCurrentGame(props.gameSearchDiv);
  try {
    const find = await axios.get(
      `https://api.rawg.io/api/games?key=${apiKey}&search=${searchValue}`
    );

    const gameData = find.data;

    renderData(gameData);
  } catch (error) {
    console.error(error);
  }
};
