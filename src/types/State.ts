import {Quiz} from "./Quiz";
import {Score} from "./Score";
import {GAME_STATE} from "./GameState";

export interface State {
    userId?: string;
    quiz?: Quiz;
    gameId?: string;
    questionId?: string;
    gameState?: GAME_STATE;
    score?: Score[];
}