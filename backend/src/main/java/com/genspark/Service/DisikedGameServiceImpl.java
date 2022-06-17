package com.genspark.Service;

import com.genspark.Dao.DislikedGamesDao;
import com.genspark.Entity.DislikedGame;
import com.genspark.Request.DislikedGamesRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DisikedGameServiceImpl implements DislikedGameService {

    @Autowired
    private DislikedGamesDao dislikedGamesDao;

    @Override
    public List<DislikedGame> getAllDislikedGames() {
        return null;
    }

    @Override
    public String addDislikedGame(DislikedGamesRequest dislikedGamesRequest) {
        DislikedGame dislikedGame = new DislikedGame();
        dislikedGame.setUserId(dislikedGamesRequest.getUserId());
        dislikedGame.setGameId(dislikedGamesRequest.getGameId());
        dislikedGamesDao.save(dislikedGame);
        return "Game added to liked list";
    }



}
