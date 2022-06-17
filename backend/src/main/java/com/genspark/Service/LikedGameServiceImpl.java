package com.genspark.Service;

import com.genspark.Dao.LikedGamesDao;
import com.genspark.Entity.LikedGame;
import com.genspark.Request.LikedGamesRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LikedGameServiceImpl implements LikedGameService {

    @Autowired
    private LikedGamesDao likedGamesDao;

    @Override
    public List<LikedGame> getAllLikedGames() {
        return null;
    }

    @Override
    public String addLikedGame(LikedGamesRequest likedGamesRequest) {
        LikedGame likedGame = new LikedGame();
        likedGame.setUserId(likedGamesRequest.getUserId());
        likedGame.setGameId(likedGamesRequest.getGameId());
        likedGamesDao.save(likedGame);
        return "Game added to liked list";
    }



}
