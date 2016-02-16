package com.questionanswer.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import com.questionanswer.model.User;

public interface UserService extends UserDetailsService {
    User save(User user);
    
    User loadUserByName(String username);
}
