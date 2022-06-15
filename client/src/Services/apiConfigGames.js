// GET https://api.rawg.io/api/platforms?key=b0781e255b0e40eabb8541cb5aa4260e
// GET https://api.rawg.io/api/games?key=b0781e255b0e40eabb8541cb5aa4260e
// GET https://api.rawg.io/api/games?key=${apiKey}
import axios from "axios";

const express = require("express");

// Number of requests left for the period
// >=20000
// Number of requests will renew on
// 7/13/2022

const apiKey = `b0781e255b0e40eabb8541cb5aa4260e`;

const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}`;

export const getGames = async () => {
  try {
    const response = await axios(apiUrl);
    const games = response.data;
    console.log(games);
    return games;
  } catch (error) {
    throw error;
  }
};
