import { Injectable } from "@angular/core";
import { Http, URLSearchParams } from "@angular/http";
import { ServerRoutes } from "./serverRoutes";
import { IQuestion } from "../models/Question";
import { PagableEntity } from "../models/PagableEntity";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionServices {

  constructor(private http: Http) {
  }

  private mapQuestions(questions): IQuestion[] {
    return questions.map(q => {
      return {
        id: parseInt(q._links.self.href.split("/").slice(-1)),
        content: q.content,
        title: q.title
      };
    });
  }

  public getAll(page?: number): Observable<PagableEntity<IQuestion>> {
    let params = new URLSearchParams();

    if (page) {
      params.set('page', page.toString());
    }

    return this.http
      .get(`${ServerRoutes.QUESTIONS}`, { search: params })
      .map(res => res.json())
      .map(res => new PagableEntity<IQuestion>(res.page, this.mapQuestions(res._embedded.questions)));
  }

  public getQuestionBy(id: number, entity?: string): Observable<IQuestion> {
    var url = `${ServerRoutes.QUESTIONS}/${id}`;

    if (entity) {
      url += `/${entity}`;
    }

    return this.http.get(url).map(res => res.json());
  }

  public getQuestionsAnswers(id: number): Observable<IQuestion> {
    return this.getQuestionBy(id, 'answers');
  }

  public getQuestionsUser(id: number) {
    return this.getQuestionBy(id, 'user');
  }
}
