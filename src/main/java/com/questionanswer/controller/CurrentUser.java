package com.questionanswer.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CurrentUser {

	@RequestMapping({ "api/currentUser" })
	public Principal user(Principal user) {
		return user;
	}
}