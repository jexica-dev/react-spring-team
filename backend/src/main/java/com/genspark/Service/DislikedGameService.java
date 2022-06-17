package com.genspark.Service;

import com.genspark.Entity.DislikedGame;
import com.genspark.Request.DislikedGamesRequest;

import java.util.List;

public interface DislikedGameService {
    public List<DislikedGame> getAllDislikedGames();
    public String addDislikedGame(DislikedGamesRequest dislikedGamesRequest);
}
