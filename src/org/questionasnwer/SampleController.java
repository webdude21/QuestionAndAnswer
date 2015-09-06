package org.questionasnwer;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SampleController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(ModelMap map) {
		map.put("msgFromSpinderMan", "Hello Spring 4 Web MVC!");
		return "index";
	}
	
	@ResponseBody
	@RequestMapping(value = "/fostata", method = RequestMethod.GET)
	public String index() {
		return "kurtata";
	}
}
