import {Quiz} from "./Quiz";
import {GAME_STATE} from "./GameState";

export interface GameResponse {
    current_question_id: string;
    id: string;
    quizz: Quiz;
    state: GAME_STATE;
}