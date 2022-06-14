package com.week_11_team_project.demo.Controller;

import com.week_11_team_project.demo.Entity.User;
import com.week_11_team_project.demo.Entity.VideoGame;
import com.week_11_team_project.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/")
@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class Controller {

    @Autowired
    private UserService service;

    @GetMapping("/")
    public VideoGame get(){
        System.out.println("lalala");
        return new VideoGame();
    }

    @GetMapping("/users")
    public List<User> allUsers(){
        return this.service.seeAllUsers();
    }

    @PostMapping("/Signup")
    public User createUser(@RequestBody User newUser){

        return this.service.addUser(newUser);
    }


    @PutMapping("/edit-profile")
    public User editProfile(@RequestBody User user){
        return service.UpdateInformation(user);
    }

    @DeleteMapping("/delete-profile/{name}")
    public String deleteUser(@PathVariable String userID){
        return this.service.deleteUser(Integer.parseInt(userID));
    }



}
