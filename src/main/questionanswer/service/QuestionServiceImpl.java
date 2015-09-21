package questionanswer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import questionanswer.data.QuestionRepository;
import questionanswer.model.Question;

@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
    private static final int PAGE_SIZE = 2;

    @Autowired
    private QuestionRepository questionRepository;

    public Page<Question> getQuestions(Integer pageNumber) {
        return questionRepository.findAll(new PageRequest(pageNumber - 1, PAGE_SIZE, Sort.Direction.DESC, "id"));
    }
}