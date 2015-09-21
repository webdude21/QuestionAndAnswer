package questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import questionanswer.service.QuestionService;

@Controller
public class Question {

	@Autowired
	private QuestionService questionService;

	@RequestMapping(value = "/question/{pageNumber}", method = RequestMethod.GET)
	public String index(@PathVariable Integer pageNumber, ModelMap map) {
		Page<questionanswer.model.Question> page = questionService.getQuestions(pageNumber);
	    int current = page.getNumber() + 1;
	    int begin = Math.max(1, current - 5);
	    int end = Math.min(begin + 10, page.getTotalPages());

	    map.put("beginIndex", begin);
	    map.put("endIndex", end);
	    map.put("questionsList", page);
	    map.put("currentIndex", current);
			
		return "Question/index";
	}
}
