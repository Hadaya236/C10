package com.dailycodebuffer.Springboot.tutorial.service;

import java.util.List;
import java.util.Objects;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dailycodebuffer.Springboot.tutorial.entity.User;
import com.dailycodebuffer.Springboot.tutorial.repository.UserRepository;



@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository uR;
	
	@Override
	public User saveUser(User user) {
		
		return uR.save(user);
	}
	
	@Override
    public List<User> fetchUserList() {
        return uR.findAll();
    }

   @Override
   public User fetchUserById(Long id) {
	   return uR.findById(id).get();
   }
	
   @Override
   public void deleteUserById(Long id) {
       uR.deleteById(id);
   }
   
   @Override
   public User updateUser(Long id, User user) {
       User useDB = uR.findById(id).get();

       if(Objects.nonNull(user.getName()) &&
       !"".equalsIgnoreCase(user.getName())) {
           useDB.setName(user.getName());
       }

       if(Objects.nonNull(user.getType()) &&
               !"".equalsIgnoreCase(user.getType())) {
           useDB.setType(user.getType());
       }

       if(Objects.nonNull(user.getPassword()) &&
               !"".equalsIgnoreCase(user.getPassword())) {
           useDB.setPassword(user.getPassword());
       }

       return uR.save(useDB);

   }


}
