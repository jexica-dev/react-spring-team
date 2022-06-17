package com.genspark.Service;

import com.genspark.Entity.VideoGame;

import java.util.List;

public interface FavoriteGameService {

    List<VideoGame> getAllFavoriteGames();
    String addFavoriteGame();


}
