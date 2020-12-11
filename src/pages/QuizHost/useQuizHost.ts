import {AppContext} from "../../context";
import {getById as getQuizById, startQuiz} from "../../dataLayer/quiz";
import {useContext, useEffect} from "react";
import {ActionTypes} from "../../types/ActionTypes";
import {Quiz} from "../../types/Quiz";
import { useHistory } from "react-router-dom";


export type UseQuizHost = (config: { quizId: string}) => {
    quiz?: Quiz,
    startQuizHandler: () => Promise<void>
};

export const useQuizHost: UseQuizHost = ({ quizId }) => {
    const { state, dispatch } = useContext(AppContext);
    const history = useHistory();

    const getQuiz = async () => {
        const quiz = await getQuizById(quizId);
        dispatch({ type: ActionTypes.SET_QUIZ, quiz })
    }

    useEffect(() => {
        if (state.quiz === null || state.quiz === undefined) {
            try {
                getQuiz();
            } catch (err) {
                console.log(err);
                //TODO Handle server error
            }
        }
    }, [state]);

    const startQuizHandler = async () => {
        try {
            debugger;
            const { game_id } = await startQuiz(quizId);
            history.push(`/game/${game_id}/host`);
        } catch (err) {
            console.log(err);
            //TODO Handle server error
        }
    }


    return {
        quiz: state.quiz,
        startQuizHandler,
    }
}