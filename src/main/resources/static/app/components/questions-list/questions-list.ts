
import {Component} from '@angular/core';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {PageChangedEvent} from 'ng2-bootstrap/components/pagination/pagination.component';
import {QuestionServices} from '../../services/question';
import {Observable} from 'rxjs/Observable';
import {IQuestion} from '../../models/Question';
import {PagableEntity} from '../../models/PagableEntity';
import {RouteParams} from '@angular/router-deprecated';

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
    this.retrieveData();
  }

  private retrieveData(page?: number): void {
    this.questions
      .getAll(page - 1)
      .subscribe(q => {
        this.questionsList = q.entity;
        this.totalItems = q.page.totalElements;
        this.currentPage = q.page.number + 1;
        this.itemsPerPage = q.page.size;
      });
  }
}