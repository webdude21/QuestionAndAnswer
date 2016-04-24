package com.questionanswer.service;

import com.questionanswer.data.QuestionRepository;
import com.questionanswer.model.AnswerAndVoteCount;
import com.questionanswer.model.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class QuestionDetailsServiceImpl implements QuestionDetailService {

	private QuestionRepository questionRepo;

	@Autowired
	public QuestionDetailsServiceImpl(QuestionRepository questionRepo) {
		this.questionRepo = questionRepo;
	}

	@Override
	@Transactional
	public Map<String, Object> getQuestionDetails(long id) {
		Map<String, Object> resultMap = new HashMap<>();

		Question resultQuestion = this.questionRepo.findOne(id);
		resultQuestion.getAnswers().size();
		resultMap.put("question", resultQuestion);
		resultMap.put("user", resultQuestion.getUser());
		resultMap.put("answers", resultQuestion.getAnswers()
				.stream()
				.map(AnswerAndVoteCount::new)
				.collect(Collectors.toList()));

		return resultMap;
	}

}
