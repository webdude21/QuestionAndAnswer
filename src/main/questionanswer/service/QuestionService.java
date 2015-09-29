package questionanswer.service;

import org.springframework.data.domain.Page;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import questionanswer.model.Question;

@RepositoryRestResource
public interface QuestionService {
	Page<Question> getQuestions(Integer pageNumber);
}
