import { Component, Input } from '@angular/core';
import { IQuestion } from '../../models/Question';

@Component({
  selector: 'question',
  template: `
    <div class="alert alert-dismissible alert-info">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong class="wrap"><a href="#">{{question.title}}</a></strong>
    </div>
  `
})
export class Question {
  @Input()
  question: IQuestion;
}