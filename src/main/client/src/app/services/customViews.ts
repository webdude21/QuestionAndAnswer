import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { ServerRoutes } from "./serverRoutes";
import { IQuestionDetails } from "../models/QuestionDetails";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class CustomViewsServices {
  constructor(private http: Http) {
  }

  getQuestionBy(id: number): Observable<IQuestionDetails> {
    return this.http
      .get(`${ServerRoutes.CUSTOM_VIEWS}/question/${id}`)
      .map(res => res.json());
  }

  upvoteAnswer(id: number): Promise<Response> {
    return this.http
      .put(`${ServerRoutes.CUSTOM_VIEWS}/answer/${id}/upvoteAnswer`, null)
      .toPromise();
  }

  downvoteAnswer(id: number): Promise<Response> {
    return this.http
      .put(`${ServerRoutes.CUSTOM_VIEWS}/answer/${id}/unvoteAnswer`, null)
      .toPromise();
  }
}
