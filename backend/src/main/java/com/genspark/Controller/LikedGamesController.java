package com.genspark.Controller;

import com.genspark.Entity.LikedGame;
import com.genspark.Request.LikedGamesRequest;
import com.genspark.Service.LikedGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LikedGamesController {

    @Autowired
    private LikedGameService service;

    @GetMapping("/liked-games/{id}")
    public List<LikedGame> getLikedGames(@PathVariable(value = "id") int id) {
        return null;
    }

    @PostMapping("/add-to-liked-games")
    public String addToLikedGames(@RequestBody LikedGamesRequest likedGamesRequest) {
        service.addLikedGame(likedGamesRequest);
        return "Game added";
    }

}
