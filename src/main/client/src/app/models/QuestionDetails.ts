import { IQuestion } from "./Question";
import { IAnswer } from "./Answer";
import { IUser } from "./User";

export interface IQuestionDetails {
  question: IQuestion;
  answers: IAnswer[];
  user: IUser;
}
