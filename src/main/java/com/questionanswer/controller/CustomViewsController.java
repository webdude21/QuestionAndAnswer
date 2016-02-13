package com.questionanswer.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.questionanswer.config.Routes;
import com.questionanswer.data.QuestionRepository;
import com.questionanswer.model.AnswerAndVoteCount;
import com.questionanswer.model.Question;

@RestController
@RequestMapping(value = Routes.API_BASE_ROUTE + "/customviews")
public class CustomViewsController {

    private QuestionRepository questionRepo;

    @Autowired
    public CustomViewsController(QuestionRepository questionRepo) {
        this.questionRepo = questionRepo;
    }

    @Transactional
    @RequestMapping(value = "/questionDetails/{id}", method = { RequestMethod.GET })
    public Map<String, Object> question(@PathVariable long id) {
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
