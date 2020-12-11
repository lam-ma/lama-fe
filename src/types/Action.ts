import {ActionTypes} from "./ActionTypes";
import {Quiz} from "./Quiz";
import {GAME_STATE} from "./GameState";

export type Action =
    | { type: ActionTypes.SET_QUIZ, quiz: Quiz }
    | { type: ActionTypes.SET_GAME_ID, game_id: string }
    | {
        type: ActionTypes.SET_GAME_STATE,
        question_id: string;
        game_state: GAME_STATE;
    }
    | {
        type: ActionTypes.SET_GAME,
        quiz: Quiz,
        game_state: GAME_STATE,
        current_question_id: string,
    }
