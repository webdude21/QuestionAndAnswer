package questionanswer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import questionanswer.data.QuestionRepository;
import questionanswer.model.Question;

@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application {

	private static QuestionRepository questionRepository;

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
		questionRepository = context.getBean(QuestionRepository.class, QuestionRepository.NAME);
		addDefaultQuestion();
	}

	private static void addDefaultQuestion() {
		Question question = new Question();
		question.setTitle("What's the difference between Java and JavaScript?");
		question.setContent("One is essentially a toy, designed for writing small pieces of code, and "
				+ "traditionally used and abused by inexperienced programmers.The other is a scripting "
				+ "language for web browsers.");
		questionRepository.save(question);
	}
}