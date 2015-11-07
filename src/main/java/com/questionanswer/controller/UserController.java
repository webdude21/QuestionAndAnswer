package com.questionanswer.controller;

import java.security.Principal;

import org.apache.catalina.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/authentication")
public class UserController {

	@RequestMapping(value = "/currentuser",  method = { RequestMethod.GET })
	public Principal currentUser(Principal user) {
		return user;
	}

	@RequestMapping(value = "/register", method = { RequestMethod.POST })
	public void String(@RequestBody User user) {
		System.out.println(user);
	}
}