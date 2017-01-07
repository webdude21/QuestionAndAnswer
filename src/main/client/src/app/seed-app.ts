import { Component } from "@angular/core";
import { Router, RouteConfig, ROUTER_DIRECTIVES } from "@angular/router-deprecated";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { QuestionsList } from "./components/questions-list/questions-list";
import { QuestionDetail } from "./components/question-detail/question-detail";

@Component({
  selector: 'seed-app',
  providers: [],
  pipes: [],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/seed-app.html',
})
@RouteConfig([
  { path: '/home', component: Home, name: 'Home', useAsDefault: true },
  { path: '/about', component: About, name: 'About' },
  { path: '/question/:id', component: QuestionDetail, name: 'QuestionDetail' },
  { path: '/questions-list', component: QuestionsList, name: 'QuestionsList' }
])
export class SeedApp {
  constructor() {
  }
}
