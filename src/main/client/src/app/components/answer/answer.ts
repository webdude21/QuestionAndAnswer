import {Component, Input} from '@angular/core';
import {IAnswer} from '../../models/Answer';

import {CustomViewsServices} from '../../services/customViews';
@Component({
  selector: 'answer',
  providers: [CustomViewsServices],
  template: `
    <blockquote class="blockquote-reverse">
      <p>{{answer.content}}</p>
      <span>Votes: {{answer.votesCount}}</span>
      <button class="btn btn-success" (click)="upVote(answer.answerId)">Vote</button>
      <button class="btn btn-warning" (click)="unVote(answer.answerId)">Unvote</button>
    </blockquote>
  `
})
export class Answer {
  constructor(private customViewsQuestionService: CustomViewsServices) { }

  @Input()
  answer: IAnswer;

  upVote(answerId: number) {
    this.customViewsQuestionService.upvoteAnswer(answerId)
      .then(() => this.answer.votesCount += 1);
  }

  unVote(answerId: number) {
    this.customViewsQuestionService.downvoteAnswer(answerId)
      .then(() => this.answer.votesCount -= 1);
  }
}