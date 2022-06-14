package com.week_11_team_project.demo.Entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {


    //Fields / database inputs
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int userID;
    private String name;
    private String passWord;
    private String email;
    private List<VideoGame> favoriteGames;


    //default and field constructors

    public User() {
    }


    public User(String name, String passWord, String email) {
        this.name = name;
        this.passWord = passWord;
        this.email = email;
    }



    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<VideoGame> getFavoriteGames() {
        return favoriteGames;
    }

    public void setFavoriteGames(List<VideoGame> favoriteGames) {
        this.favoriteGames = favoriteGames;
    }
}
