package com.questionanswer.controller;

import com.questionanswer.config.Routes;
import com.questionanswer.service.QuestionDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/customviews")
public class CustomViewsController {

	private QuestionDetailService questionService;

	@Autowired
	public CustomViewsController(QuestionDetailService questionService) {
		this.questionService = questionService;
	}

	@RequestMapping(value = "/question/{id}", method = {RequestMethod.GET})
	public Map<String, Object> question(@PathVariable long id) {
		return questionService.getQuestionDetails(id);
	}
}
