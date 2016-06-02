
import {Component} from '@angular/core';
import {QuestionServices} from '../../services/question';
import {Observable} from 'rxjs/Observable';
import {IQuestion} from '../../models/Question';

@Component({
  selector: 'questions-list',
  templateUrl: 'app/components/questions-list/questions-list.html',
  styleUrls: ['app/components/questions-list/questions-list.css'],
  providers: [QuestionServices],
  directives: [],
  pipes: []
})
export class QuestionsList {
  questionsList: Observable<IQuestion>;
  constructor(public questions: QuestionServices) { }

  ngOnInit() {
    this.questionsList = this.questions.getAll();
  }
}