package com.week_11_team_project.demo.Dao;


import com.week_11_team_project.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository <User, Integer> {
}
