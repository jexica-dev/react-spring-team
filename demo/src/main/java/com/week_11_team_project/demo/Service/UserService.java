package com.week_11_team_project.demo.Service;

import com.week_11_team_project.demo.Entity.User;

import java.util.List;

public interface UserService {

    List<User> seeAllUsers();

    User getUserByID(int userID);

    User addUser(User newUser);

    User UpdateInformation(User User);

    String deleteUser(int userID);



}
