//define the api url
export const baseURL = `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_KEY}`;

//define const config object that has our authorization

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_RAWG_KEY}`,
  },
};
