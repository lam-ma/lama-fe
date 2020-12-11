import {ActionTypes} from "./ActionTypes";
import {Quiz} from "./Quiz";

export type Action =
    | { type: ActionTypes.SET_QUIZ, quiz: Quiz }
