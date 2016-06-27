package com.questionanswer.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.questionanswer.config.Routes;
import com.questionanswer.model.ResponseMessage;
import com.questionanswer.model.User;
import com.questionanswer.service.UserService;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/authentication")
public class UserController {

	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@RequestMapping(value = "/currentuser", method = {RequestMethod.GET})
	public Principal currentUser(Principal user) {
		return user;
	}

	@RequestMapping(value = "/register", method = {RequestMethod.POST})
	public HttpEntity<?> Register(@RequestBody User user) {
		try {
			return new ResponseEntity<User>(this.userService.register(user), HttpStatus.CREATED);
		} catch (IllegalArgumentException ex) {
			return new ResponseEntity<>(new ResponseMessage(ex.getMessage()), HttpStatus.BAD_REQUEST);
		}
	}
}