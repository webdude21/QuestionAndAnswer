package questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import questionanswer.service.QuestionService;

@Controller
public class Question {

	@Autowired
	private QuestionService questionService;

	@RequestMapping(value = "/questions", method = RequestMethod.GET)
	public String index(@RequestParam(value = "page", required = false, defaultValue = "1") int pageNumber,
			ModelMap model) {
		
		Page<questionanswer.model.Question> page = questionService.getQuestions(pageNumber);
		model.put("questionsList", page.getContent());
		return "Question/index";
	}
}
