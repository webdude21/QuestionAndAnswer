package com.questionanswer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Home {

	@RequestMapping({ "/", "/questions", "/login" })
	public String home() {
		return "forward:/index.html";
	}
}