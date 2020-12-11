import {Quiz} from "./Quiz";
import {Score} from "./Score";
import {GAME_STATE} from "./GameState";

export interface State {
    user_id?: string;
    quiz?: Quiz;
    game_id?: string;
    question_id?: string;
    game_state?: GAME_STATE;
    score?: Score[];
}