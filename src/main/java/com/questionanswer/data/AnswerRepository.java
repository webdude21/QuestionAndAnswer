package com.questionanswer.data;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.questionanswer.model.Answer;

public interface AnswerRepository extends PagingAndSortingRepository<Answer, Long> {

}
