package com.questionanswer.data;

import com.questionanswer.model.Answer;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AnswerRepository extends PagingAndSortingRepository<Answer, Long> {

}
