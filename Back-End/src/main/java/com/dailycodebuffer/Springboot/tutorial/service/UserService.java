package com.dailycodebuffer.Springboot.tutorial.service;

import java.util.List;

import com.dailycodebuffer.Springboot.tutorial.entity.User;

public interface UserService {
	
	public User saveUser(User user);
	
	public List<User> fetchUserList();

	public User fetchUserById(Long id);

	public void deleteUserById(Long id);

	public User updateUser(Long id, User user);
	
	

}
