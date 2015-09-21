package questionanswer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import questionanswer.data.QuestionRepository;

@Controller
public class Home {

	@Autowired
	private QuestionRepository questionRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(ModelMap map) {
		map.put("questionsList", questionRepository.findAll());
		return "index";
	}
}
