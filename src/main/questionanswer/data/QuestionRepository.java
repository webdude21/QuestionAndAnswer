package questionanswer.data;

import org.springframework.data.repository.PagingAndSortingRepository;

import questionanswer.model.Question;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
	public static final String ROUTE = "/questions";
}
