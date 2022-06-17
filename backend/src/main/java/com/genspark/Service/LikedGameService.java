package com.genspark.Service;

import com.genspark.Entity.LikedGame;
import com.genspark.Request.LikedGamesRequest;

import java.util.List;

public interface LikedGameService {

    List<LikedGame> getAllLikedGames();
    String addLikedGame(LikedGamesRequest likesGamesRequest);


}
