
import {Component} from '@angular/core';
import {Router, RouteParams, RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {PageChangedEvent} from 'ng2-bootstrap/components/pagination/pagination.component';

import {QuestionServices} from '../../services/question';
import {Observable} from 'rxjs/Observable';
import {IQuestion} from '../../models/Question';
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
  currentPage: number = 0;
  questionsList: IQuestion[];
  itemsPerPage: number;

  constructor(public questions: QuestionServices, public params: RouteParams) {
    let page = parseInt(params.get('page'));

    if (page) {
      this.currentPage = page;
    }
  }

  public handlePageChange(event: PageChangedEvent): void {
    this.retrieveData(event.page);
  }

  ngOnInit(): void {
    this.retrieveData(this.currentPage);
  }

  private ensureCorrectPageNumber(page: number = 0): number {
    if (page > 1) {
      page--;
    } else {
      page = 0;
    }

    return page;
  }

  private retrieveData(page?: number): void {
    page = this.ensureCorrectPageNumber(page)
    console.debug(`RetrieveData called with page number: ${page}`);

    this.questions
      .getAll(page)
      .subscribe(q => {
        this.questionsList = q.entity;
        this.totalItems = q.page.totalElements;
        this.currentPage = q.page.number + 1;
        this.itemsPerPage = q.page.size;
      });
  }
}