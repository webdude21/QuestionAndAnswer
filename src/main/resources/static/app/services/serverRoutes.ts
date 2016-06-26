import {Injectable} from "@angular/core";

const BASE_PATH = '/api';

@Injectable()
export class ServerRoutes {
  public static CUSTOM_VIEWS: string = `${BASE_PATH}/customviews`;
  public static QUESTIONS: string = `${BASE_PATH}/questions`;
  public static USERS: string = `${BASE_PATH}/users`;
  public static REGISTER: string = `${BASE_PATH}/authentication/register`;
  public static CURRENT_USER: string = `${BASE_PATH}/authentication/currentuser`;
}
