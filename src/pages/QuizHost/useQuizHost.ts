import {AppContext} from "../../context";
import {getById as getQuizById} from "../../dataLayer/quiz";
import {useContext, useEffect} from "react";
import {ActionTypes} from "../../types/ActionTypes";
import {Quiz} from "../../types/Quiz";

export type UseQuizHost = (config: { quizId: string}) => {
    quiz?: Quiz,
};

export const useQuizHost: UseQuizHost = ({ quizId }) => {
    const { state, dispatch } = useContext(AppContext);

    const getQuiz = async () => {
        const quiz = await getQuizById(quizId);
        dispatch({ type: ActionTypes.SET_QUIZ, quiz })
    }

    useEffect(() => {
        if (state.quiz === null || state.quiz === undefined) {
            try {
                getQuiz();
            } catch (err) {
                //TODO Handle server error
            }
        }
    }, [state]);


    return {
        quiz: state.quiz,
    }
}