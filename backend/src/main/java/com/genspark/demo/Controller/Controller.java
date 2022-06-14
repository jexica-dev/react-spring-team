package com.genspark.Controller;

import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;
import com.genspark.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityExistsException;
import java.util.InputMismatchException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    private UserService service;

//    @GetMapping("/")
//    public VideoGame get(){
//        System.out.println("lalala");
//        return new VideoGame();
//    }

//    @GetMapping("/users")
//    public List<User> allUsers(){
//        return this.service.seeAllUsers();
//    }

    @PostMapping("new-user")
    public String createUser(@RequestBody UserRequest userRequest){
        try {
            User newUser = this.service.addUser(userRequest);
            return "Success: User: %s successfully created".formatted(newUser.getUsername());
        } catch (EntityExistsException | InputMismatchException e ) {
            return e.getMessage();
        }
    }
//
//
//    @PutMapping("/edit-profile")
//    public User editProfile(@RequestBody User user){
//        return service.UpdateInformation(user);
//    }
//
//    @DeleteMapping("/delete-profile/{name}")
//    public String deleteUser(@PathVariable String userID){
//        return this.service.deleteUser(Integer.parseInt(userID));
//    }
//


}
