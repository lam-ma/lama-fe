import {State} from "../types/State";
import {Action} from "../types/Action";
import {ActionTypes} from "../types/ActionTypes";

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_QUIZ:
            return { ...state, quiz: action.quiz };
        case ActionTypes.SET_GAME_ID:
            return { ...state, game_id: action.game_id }
        case ActionTypes.SET_GAME_STATE: {
            const {game_state, question_id} = action;
            return {
                ...state,
                game_state,
                question_id,
            }
        }
        case ActionTypes.SET_GAME: {
            const {quiz, game_state, current_question_id} = action;
            return {
                ...state,
                quiz,
                game_state,
                question_id: current_question_id,
            };
        }
        default:
            throw new Error();
    }
}