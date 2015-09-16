package questionanswer.data;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import questionanswer.model.Question;

@Repository(value = QuestionRepository.NAME)
public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {

	String NAME = "questionRepository";
}
