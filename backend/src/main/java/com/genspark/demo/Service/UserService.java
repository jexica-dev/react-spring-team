package com.genspark.Service;

import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;

import java.util.List;

public interface UserService {

    List<User> seeAllUsers();

    User getUserByID(int userID);

    User addUser(UserRequest userRequest);

    User UpdateInformation(User User);

    String deleteUser(int userID);



}
