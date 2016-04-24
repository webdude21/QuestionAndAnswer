package com.questionanswer.service;

import com.questionanswer.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
	User save(User user);

	User register(User user) throws IllegalArgumentException;
}
