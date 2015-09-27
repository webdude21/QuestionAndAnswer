package questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import questionanswer.service.QuestionService;

@Controller
public class Questions {

	@Autowired
	private QuestionService questionService;

	@RequestMapping(value = "/questions/list", method = RequestMethod.GET)
	public ModelAndView index(@RequestParam(value = "page", required = false, defaultValue = "1") int pageNumber){
		return new ModelAndView("questions/list", "questionsList", questionService.getQuestions(pageNumber));
	}
}
