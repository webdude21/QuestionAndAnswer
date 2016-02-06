package com.questionanswer.data;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.questionanswer.model.Question;

public interface QuestionRepository extends PagingAndSortingRepository<Question, Long> {
    String ROUTE = "questions";

    List<Question> findByTitleContaining(@Param("title") String title, Pageable pageable);
}
