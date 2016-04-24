package com.questionanswer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClientApp {

	@RequestMapping({"/", "/login", "/unauthorized", "/question/**", "/register"})
	public String home() {
		return "forward:/index.html";
	}
}