package com.genspark.Service;

import com.genspark.Dao.UserDao;
import com.genspark.Dao.VideoGameDao;
import com.genspark.Entity.VideoGame;
import com.genspark.Request.VideoGameRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteGameServiceImpl implements FavoriteGameService {

    @Autowired
    private VideoGameDao videoGameDao;

    @Override
    public List<VideoGame> getAllFavoriteGames() {
        return null;
    }

    @Override
    public String addFavoriteGame() {
        return null;
    }



}
