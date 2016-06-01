
import {Component} from '@angular/core';
import {QuestionServices} from '../../services/question';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'questions-list',
  templateUrl: 'app/components/questions-list/questions-list.html',
  styleUrls: ['app/components/questions-list/questions-list.css'],
  providers: [QuestionServices],
  directives: [],
  pipes: []
})
export class QuestionsList {
  questionsList: Observable<any>;
  constructor(public questions: QuestionServices) { }

  ngOnInit() {
    this.questionsList = this.questions.getAll().map(i => i._embedded.questions);
  }
}