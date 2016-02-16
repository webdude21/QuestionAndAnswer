package com.questionanswer.service;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.questionanswer.data.QuestionRepository;
import com.questionanswer.model.AnswerAndVoteCount;
import com.questionanswer.model.Question;

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
                .map(a -> new AnswerAndVoteCount(a))
                .collect(Collectors.toList()));
        
        return resultMap;
    }

}
