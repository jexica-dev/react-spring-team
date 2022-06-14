package com.week_11_team_project.demo.Service;


import com.week_11_team_project.demo.Dao.UserDao;
import com.week_11_team_project.demo.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService{

    @Autowired
    private UserDao userDao;




    @Override
    public List<User> seeAllUsers() {
        return this.userDao.findAll();
    }

    @Override
    public User getUserByID(int userID) {

        Optional<User> u = this.userDao.findById(userID);
        User user = null;
        if(u.isPresent()){
            user=u.get();
        }else{
            throw new RuntimeException("No user by that ID ::" + userID);
        }
        return user;

    }

    @Override
    public User addUser(User newUser) {
        return userDao.save(newUser);
    }

    @Override
    public User UpdateInformation(User User) {
        return userDao.save(User);
    }

    @Override
    public String deleteUser(int userID) {
        this.userDao.deleteById(userID);

        return "User removed from the database";
    }
}
