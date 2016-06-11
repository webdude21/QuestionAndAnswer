import {Component, Input} from '@angular/core';
import {IQuestion} from '../../models/Question';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'question',
  template: `
    <div class="alert alert-dismissible alert-info">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <strong class="wrap"><a [routerLink]="['/QuestionDetail', {id: question.id}]">{{question.title}}</a></strong>
    </div>
  `,
  directives: [ROUTER_DIRECTIVES]
})
export class Question {
  @Input()
  question: IQuestion;
}