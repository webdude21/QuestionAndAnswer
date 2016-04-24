package com.questionanswer.data;

import com.questionanswer.model.Question;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
	String ROUTE = "questions";

	List<Question> findByTitleContaining(@Param("title") String title, Pageable pageable);
}
