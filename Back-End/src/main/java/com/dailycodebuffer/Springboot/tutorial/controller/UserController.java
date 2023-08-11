package com.dailycodebuffer.Springboot.tutorial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dailycodebuffer.Springboot.tutorial.entity.User;
import com.dailycodebuffer.Springboot.tutorial.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
	
	@Autowired
	UserService uS;
	
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		
		return uS.saveUser(user);
	}
	
	@GetMapping("/user")
    public List<User> fetchUserList() {
        return uS.fetchUserList();
    }
    


    @GetMapping("/user/{id}")
    public User fetchUserById(@PathVariable("id") Long id)
            {
        return uS.fetchUserById(id);
    }
    
    @DeleteMapping("/user/{id}")
    public String deleteUserById(@PathVariable("id") Long id) {
        uS.deleteUserById(id);
        return "Your Records Has Been Terminated!!";
    }
    
    @PutMapping("/user/{id}")
    public User updateUser(@PathVariable("id") Long id,
                                       @RequestBody User user) {
        return uS.updateUser(id,user);
    }

}
