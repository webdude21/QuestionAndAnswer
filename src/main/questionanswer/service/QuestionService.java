package questionanswer.service;

import org.springframework.data.domain.Page;

import questionanswer.model.Question;

public interface QuestionService {
	Page<Question> getQuestions(Integer pageNumber);
}
