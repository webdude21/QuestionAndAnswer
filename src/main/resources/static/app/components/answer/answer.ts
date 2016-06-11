import {Component, Input} from '@angular/core';
import {IAnswer} from '../../models/Answer';

@Component({
  selector: 'answer',
  template: `
    <blockquote class="blockquote-reverse">
      <p>{{answer.content}}</p>
      <span>Votes: {{answer.votesCount}}</span>
      <a href="#" class="btn btn-success" ng-click="upVote(answer.answerId)">Vote</a>
      <a href="#" class="btn btn-warning" ng-click="unVote(answer.answerId)">Unvote</a>
    </blockquote>
  `
})
export class Answer {
  @Input()
  answer: IAnswer;
}