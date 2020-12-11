import {AppContext} from "../../context";
import {useContext, useEffect} from "react";
import {ActionTypes} from "../../types/ActionTypes";
import {Quiz} from "../../types/Quiz";
import {GAME_STATE} from "../../types/GameState";
import {setState} from "../../dataLayer/game";
import {Question} from "../../types/Question";
import {Game} from "../../types/Game";
import {getById} from "../../dataLayer/game";


export type UseGameHose = (config: { game_id: string }) => {
    setGameState: (question_id: string, state: GAME_STATE) => void,
    quiz?: Quiz,
    getCurrentQuestion: () => Question | null,
};

export const useGameHost: UseGameHose = ({game_id}) => {
    const {state, dispatch} = useContext(AppContext);

    // TODO load quiz by game if state doesn't exist


    // Set the game id to the main state
    useEffect(() => {
        dispatch({type: ActionTypes.SET_GAME_ID, game_id});
    }, []);

    const getGame = async () => {
        const { quiz, state, current_question_id }: Game = await getById(game_id);
        dispatch({ type: ActionTypes.SET_GAME, quiz, game_state: state, current_question_id });
    };

    // if not Quiz load the game
    useEffect(() => {
        if (state.quiz === null || state.quiz === undefined) {
            getGame()
                .catch((err) => {
                    console.error(err);
                    // TODO handle error
                });
        }

    }, [state]);



    const setGameState = (question_id: string, state: GAME_STATE) => {
        setState({
            game_id,
            question_id,
            state
        })
            .catch((err) => {
                console.error(err);
                // TODO handle error
            });

        dispatch({
            type: ActionTypes.SET_GAME_STATE,
            question_id,
            game_state: state,
        });
    };

    const getCurrentQuestion = (): Question | null => {
        if (!state.quiz) {
            return null;
        }

        if (!state.question_id) {
            return null;
        }

        const question = state.quiz.questions.find((q: Question) => q.id === state.question_id);
        return question || null;
    };


    return {
        setGameState,
        quiz: state.quiz,
        gameState: state.game_state,
        getCurrentQuestion
    }
}