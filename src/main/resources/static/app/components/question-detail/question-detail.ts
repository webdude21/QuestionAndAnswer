import {Component, OnInit} from '@angular/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {QuestionServices} from '../../services/question';
import {CustomViewsServices} from '../../services/customViews';
import {IQuestionDetails} from '../../models/QuestionDetails';
import {Answer} from '../../components/answer/answer';
@Component({
  selector: 'question-detail',
  templateUrl: 'app/components/question-detail/question-detail.html',
  directives: [Answer],
  providers: [QuestionServices, CustomViewsServices]
})
export class QuestionDetail implements OnInit {
  private question: IQuestionDetails;

  constructor(private routeParams: RouteParams, private customViewsQuestionService: CustomViewsServices) { }
  ngOnInit() {
    let id = parseInt(this.routeParams.get('id'));
    this.customViewsQuestionService.getQuestionBy(id)
      .subscribe(x => this.question = x);
  }
}