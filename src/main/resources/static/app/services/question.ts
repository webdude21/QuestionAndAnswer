import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import {IQuestion} from "../models/Question";
import {IAnswer} from "../models/Answer";
import {PagableEntity} from '../models/PagableEntity';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionServices {

  constructor(private http: Http) { }

  getAll(page?: number): Observable<PagableEntity<IQuestion>> {
    let params = new URLSearchParams();

    if (page) {
      params.set('page', page.toString());
    }

    return this.http
      .get(`${ServerRoutes.QUESTIONS}`, { search: params })
      .map(res => res.json())
      .map(res => new PagableEntity<IQuestion>(res.page, res._embedded.questions));
  }

  getQuestionBy(id: number, entity?: string): Observable<IQuestion> {
    var url = `${ServerRoutes.QUESTIONS}/${id}`;

    if (entity) {
      url += `/${entity}`;
    }

    return this.http.get(url).map(res => res.json());
  }

  getQuestionsAnswers(id: number): Observable<IAnswer> {
    return this.getQuestionBy(id, 'answers');
  }

  getQuestionsUser(id: number) {
    return this.getQuestionBy(id, 'user');
  }
}
