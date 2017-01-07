import { bootstrap } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS } from "@angular/router-deprecated";
import { SeedApp } from "./app/seed-app";

enableProdMode();
bootstrap(SeedApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err));
