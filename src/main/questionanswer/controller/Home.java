package questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import questionanswer.data.QuestionRepository;

@Controller
public class Home {

	@Autowired
	private QuestionRepository questionRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView home() {
		return new ModelAndView("site.homepage", "questionsList", questionRepository.findAll());
	}
}
