package questionanswer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import questionanswer.data.QuestionRepository;
import questionanswer.model.Question;

import org.apache.commons.lang3.RandomStringUtils;
import java.util.ArrayList;

@Service
public class SeederServiceImpl implements SeederService {

	@Autowired
	private QuestionRepository questionRepo;

	private final int entitiesToGenerate = 4000;

	public void seed() {
		if (!this.repositoryIsEmpty()) {
			return;
		}

		ArrayList<Question> questions = new ArrayList<>();

		for (int i = 0; i < entitiesToGenerate; i++) {
			questions.add(this.generateQuestion());
		}

		questionRepo.save(questions);
	}

	private Question generateQuestion() {
		Question question = new Question();
		question.setTitle(RandomStringUtils.randomAlphabetic(20));
		question.setContent(RandomStringUtils.randomAlphabetic(200));
		return question;
	}

	private boolean repositoryIsEmpty() {
		return this.questionRepo.count() == 0;
	}
}
