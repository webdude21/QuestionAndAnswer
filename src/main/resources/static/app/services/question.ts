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

  getQuestionBy(id: number, entity?: string) {
    var url = `${ServerRoutes.QUESTIONS}/${id}`;
    
    if (entity){
      url += `/${entity}`;
    }
    
    return this.http.get(url).map(res => res.json());
  }

  getQuestionsAnswers(id: number) {
    return this.getQuestionBy(id, 'answers');
  }
  
  getQuestionsUser(id: number) {
    return this.getQuestionBy(id, 'user');
  }
}
