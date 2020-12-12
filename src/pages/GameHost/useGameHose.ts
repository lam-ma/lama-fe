import {AppContext} from "../../context";
import {useContext, useEffect} from "react";
import {ActionTypes} from "../../types/ActionTypes";
import {Quiz} from "../../types/Quiz";
import {GAME_STATE} from "../../types/GameState";
import {setState} from "../../dataLayer/game";
import {Question} from "../../types/Question";
import {getById, setGameState as setGameStateToServer} from "../../dataLayer/game";
import {GameResponse} from "../../types/GameResponse";
import {Answer} from "../../types/Answer";


export type UseGameHose = (config: { game_id: string }) => {
    setGameState: (question_id: string, state: GAME_STATE) => void,
    quiz?: Quiz,
    currentQuestion: Question | null,
    gameState: GAME_STATE | null,
    correctAnswers: Answer[],
    nextStateHandler: () => void,
    isNextQuestion: boolean,
};

export const useGameHost: UseGameHose = ({game_id}) => {
    const {state, dispatch} = useContext(AppContext);

    const getGame = async () => {
        const { quizz: quiz, current_question_id, state }: GameResponse = await getById(game_id);
        dispatch({ type: ActionTypes.SET_GAME, quiz, game_state: state, current_question_id, game_id, });
    };

    // if not Quiz load the game
    useEffect(() => {
        if (!state.quiz || !state.game_id || !state.question_id || !state.game_state) {
            getGame()
                .catch((err) => {
                    console.error(err);
                    // TODO handle error
                });
        }

    }, []);



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

    const getCorrectAnswers = (): Answer[] => {
        const question = getCurrentQuestion();
        if (!question) {
            return [];
        }

        return question.answers.filter(q => q.is_right);
    };

    const getNextQuestion = (): Question | null => {
        const question = getCurrentQuestion();
        if (!question) {
            return null;
        }
        const questions = state.quiz?.questions;
        if (questions === undefined || questions === null) {
            return null;
        }
        const questionIndex = questions.findIndex(q => q.id === state.question_id);
        if (questionIndex === -1 || questionIndex === questions.length - 1) {
            return null;
        }
        return questions[questionIndex + 1];
    }

    const getNextState = (): { game_state: GAME_STATE, question_id: string | null } => {
        let newGameState: GAME_STATE;
        let newQuestionId: string | null | undefined;
        if (state.game_state === "QUESTION") {
            newGameState = "ANSWER";
            newQuestionId = state.question_id;
        } else if (state.game_state === "ANSWER") {
            const nextQuestion = getNextQuestion();
            if (nextQuestion) {
                newGameState = "QUESTION";
                newQuestionId = nextQuestion.id;
            } else {
                newGameState = "FINISH";
                newQuestionId = null;
            }
        } else {
            newGameState = "FINISH";
            newQuestionId = null;
        }
        return {
            game_state: newGameState,
            question_id: newQuestionId || null,
        };
    };

    const nextStateHandler = () => {
        const { game_state, question_id} = getNextState();
        dispatch({ type: ActionTypes.SET_GAME_STATE, game_state, question_id });
        if (state.game_id) {
            setGameStateToServer(game_id, game_state, question_id || state.question_id || "")
                .catch(err => {
                    console.error(err);
                    // TODO Handler error
                })
        } else {
            // TODO handle error case
            throw new Error("Game id doesn't exist");
        }

    }

    return {
        setGameState,
        quiz: state.quiz,
        gameState: state.game_state || null,
        currentQuestion: getCurrentQuestion(),
        correctAnswers: getCorrectAnswers(),
        nextStateHandler,
        isNextQuestion: !!getNextQuestion()
    }
}