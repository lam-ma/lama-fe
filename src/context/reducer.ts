import {State} from "../types/State";
import {Action} from "../types/Action";
import {ActionTypes} from "../types/ActionTypes";

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_QUIZ:
            return { ...state, quiz: action.quiz };
        default:
            throw new Error();
    }
}