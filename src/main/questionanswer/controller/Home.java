package questionanswer.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Home {

	@RequestMapping({ "/", "/questions" })
	public String home() {
		return "forward:/resources/index.html";
	}
}