package com.questionanswer.data;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.questionanswer.model.Vote;

public interface VotesRepository extends PagingAndSortingRepository<Vote, Long> {

}
