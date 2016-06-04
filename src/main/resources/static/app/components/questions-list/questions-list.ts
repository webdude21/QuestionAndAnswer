
import {Component} from '@angular/core';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';;
import {QuestionServices} from '../../services/question';
import {Observable} from 'rxjs/Observable';
import {IQuestion} from '../../models/Question';
import {IPage} from '../../models/Page';
import {PagableEntity} from '../../models/PagableEntity';

@Component({
  selector: 'questions-list',
  templateUrl: 'app/components/questions-list/questions-list.html',
  styleUrls: ['app/components/questions-list/questions-list.css'],
  providers: [QuestionServices],
  directives: [PAGINATION_DIRECTIVES],
  pipes: []
})
export class QuestionsList {
  totalItems: number;
  currentPage: number;
  questionsList: IQuestion[];
  pageInfo: IPage;
  itemsPerPage: number;

  constructor(public questions: QuestionServices) { }

  ngOnInit() {
    this.questions
      .getAll()
      .subscribe(q => {
        this.questionsList = q.entity;
        this.pageInfo = q.page;
        this.totalItems = q.page.totalElements;
        this.currentPage = q.page.number;
        this.itemsPerPage = q.page.size;
      });
  }
}