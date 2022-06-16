package com.genspark.Entity;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "favorites_lists")
public class FavoritesController {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "favorite_games_ids")
    private List<Integer> favoriteGamesIds;

    public FavoritesController() {}

    public FavoritesController(int userId, List<Integer> favoriteGamesIds) {
        this.userId = userId;
        this.favoriteGamesIds = favoriteGamesIds;
    }

}
