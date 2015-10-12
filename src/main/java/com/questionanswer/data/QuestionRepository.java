package com.questionanswer.data;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.questionanswer.model.Question;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
	public static final String ROUTE = "questions";
}
