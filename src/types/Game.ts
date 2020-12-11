import {Quiz} from "./Quiz";
import {GAME_STATE} from "./GameState";

export interface Game {
    quiz: Quiz,
    state: GAME_STATE,
    current_question_id: string,
    id: string;
}