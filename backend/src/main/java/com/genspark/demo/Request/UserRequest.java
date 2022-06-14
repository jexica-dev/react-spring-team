package com.genspark.Request;

public class UserRequest {

    private String username;
    private String email;
    private String confirmEmail;
    private String password;
    private String confirmPassword;

    public UserRequest() {}

    public UserRequest(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public UserRequest(String username, String email, String confirmEmail, String password, String confirmPassword) {
        this.username = username;
        this.email = email;
        this.confirmEmail = confirmEmail;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getConfirmEmail() { return confirmEmail; }

    public String getPassword() {
        return password;
    }

    public String getConfirmPassword() { return confirmPassword; }
}
