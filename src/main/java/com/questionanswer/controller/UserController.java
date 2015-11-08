package com.questionanswer.controller;

import com.questionanswer.config.Routes;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/authentication")
public class UserController {
	
	@Autowired
	UserService userService;

	@RequestMapping(value = "/currentuser", method = { RequestMethod.GET })
	public Principal currentUser(Principal user) {
		return user;
	}

	@RequestMapping(value = "/register", method = { RequestMethod.POST })
	public void String(@RequestBody User user) {
		this.userService.save(user);
	}
}