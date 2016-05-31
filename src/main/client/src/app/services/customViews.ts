import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import {ServerRoutes} from "./serverRoutes";
import "rxjs/add/operator/map";

@Injectable()
export class CustomViews {
  constructor(private http:Http) {}

  getQuestionById(id:string) {
    let params = new URLSearchParams();
    params.set('id', id);
    return this.http
      .get(`${ServerRoutes.CUSTOM_VIEWS_QUESTIONS}`, {search: params})
      .map((res) => res.json());
  }
}
