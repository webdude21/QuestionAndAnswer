import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import {IQuestionDetails} from "../models/QuestionDetails";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class CustomViewsServices {
  constructor(private http: Http) { }

  getQuestionBy(id: number): Observable<IQuestionDetails> {
    return this.http
      .get(`${ServerRoutes.CUSTOM_VIEWS}/question/${id}`)
      .map(res => res.json());
  }

  upvoteAnswer(id: string) {
    return this.http
      .get(`${ServerRoutes.CUSTOM_VIEWS}/answer/${id}/upvoteAnswer`)
      .map(res => res.json());
  }

  downvoteAnswer(id: string) {
    return this.http
      .get(`${ServerRoutes.CUSTOM_VIEWS}/answer/${id}/unvoteAnswer`)
      .map(res => res.json());
  }
}