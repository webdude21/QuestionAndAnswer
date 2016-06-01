import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import "rxjs/add/operator/map";

@Injectable()
export class QuestionServices {

  constructor(private http: Http) { }

  getAll() {
    return this.http
      .get(`${ServerRoutes.QUESTIONS}`)
      .map(res => res.json());
  }

  getQuestionBy(id: number) {
    return this.http
      .get(`${ServerRoutes.QUESTIONS}/${id}`)
      .map(res => res.json());
  }
  
  getQuestionsAnswers(id: number){
        return this.http
      .get(`${ServerRoutes.QUESTIONS}/${id}/answers`)
      .map(res => res.json());
  }
  
  getQuestionsUser(id: number){
        return this.http
      .get(`${ServerRoutes.QUESTIONS}/${id}/user`)
      .map(res => res.json());
  }

}
