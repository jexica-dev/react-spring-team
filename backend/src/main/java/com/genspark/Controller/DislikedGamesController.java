package com.genspark.Controller;

import com.genspark.Entity.LikedGame;
import com.genspark.Request.DislikedGamesRequest;
import com.genspark.Service.DislikedGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DislikedGamesController {

    @Autowired
    private DislikedGameService service;

    @GetMapping("/disliked-games/{id}")
    public List<LikedGame> getDislikedGames(@PathVariable(value = "id") int id) {
        return null;
    }

    @PostMapping("/add-to-disliked-games")
    public String addToDislikedGames(@RequestBody DislikedGamesRequest dislikedGamesRequest) {
        System.out.println("here in post mapping");
        service.addDislikedGame(dislikedGamesRequest);
        return "Game added to disliked games";
    }
}
