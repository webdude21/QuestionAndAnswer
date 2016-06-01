import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import "rxjs/add/operator/map";

enum EntityTypes {
  answers,
  user
}

@Injectable()
export class QuestionServices {

  constructor(private http: Http) { }

  getAll() {
    return this.http
      .get(`${ServerRoutes.QUESTIONS}`)
      .map(res => res.json());
  }

  getQuestionBy(id: number, entity?: EntityTypes) {
    var url = `${ServerRoutes.QUESTIONS}/${id}`;
    
    if (entity){
      url += `/${entity}`;
    }
    
    return this.http.get(url).map(res => res.json());
  }

  getQuestionsAnswers(id: number) {
    return this.getQuestionBy(id, EntityTypes.answers);
  }
  
  getQuestionsUser(id: number) {
    return this.getQuestionBy(id, EntityTypes.user);
  }
}
