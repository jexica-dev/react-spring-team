package com.genspark.Service;


import com.genspark.Dao.UserDao;
import com.genspark.Entity.User;
import com.genspark.Request.UserRequest;
import org.jasypt.util.password.BasicPasswordEncryptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityExistsException;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

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
        if (u.isPresent()) {
            user = u.get();
        } else {
            throw new RuntimeException("No user by that ID ::" + userID);
        }
        return user;

    }

    @Override
    public User addUser(UserRequest userRequest) {
        if(userRequest.getUsername().trim().isEmpty())
            throw new InputMismatchException("Error: Please enter a username.");
        if(userRequest.getEmail().trim().isEmpty())
            throw new InputMismatchException("Error: Please enter an email.");
        if(userRequest.getConfirmEmail().trim().isEmpty())
            throw new InputMismatchException("Error: Please confirm email.");
        if(userRequest.getPassword().trim().isEmpty())
            throw new InputMismatchException("Error: Please enter a password.");
        if(userRequest.getConfirmPassword().trim().isEmpty())
            throw new InputMismatchException("Error: Please confirm password.");
        if (!userRequest.getPassword().equals(userRequest.getConfirmPassword()))
            throw new InputMismatchException("Error: Passwords do not match.");
        if (!userRequest.getEmail().equals(userRequest.getConfirmEmail()))
            throw new InputMismatchException("Error: Email addresses do not match.");
        if(!userRequest.getEmail().matches("^[\\p{L}0-9!#$%&'*+\\/=?^_`{|}~-][\\p{L}0-9.!#$%&'*+\\/=?^_`{|}~-]{0,63}@[\\p{L}0-9-]+(?:\\.[\\p{L}0-9-]{2,7})*$"))
            throw new InputMismatchException("Error: Email is not valid");
        if (!userRequest.getPassword().matches("^(?=.*?[#?!@$%^&*-])(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$"))
            throw new InputMismatchException("Error: Password must be at least 8 characters long and contain at least one English letter, at least one digit, and at least one of the following special characters: #?!@$%^&*-.");
        List<User> users = userDao.findAll();
        for (User u : users) {
            if (u.getEmail().equals(userRequest.getEmail()))
                throw new EntityExistsException("Error: That email address is not unique.");
            if (u.getUsername().equals(userRequest.getUsername()))
                throw new EntityExistsException("Error: That username is not unique.");
        }
        User newUser = new User();
        newUser.setUsername(userRequest.getUsername());
        newUser.setEmail(userRequest.getEmail());
        BasicPasswordEncryptor passwordEncryptor = new BasicPasswordEncryptor();
        newUser.setPassWord(passwordEncryptor.encryptPassword(userRequest.getPassword())); // need to encrypt the password
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
