import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import "rxjs/add/operator/map";

@Injectable()
export class CustomViewsServices {

  constructor(private http: Http) { }

  getQuestionById(id: string) {
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
