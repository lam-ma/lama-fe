import React from 'react'
import {Button} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import {RouteQuizHostParams} from "../../types/RouteQuizHostParams";
import {useQuizHost} from "./useQuizHost";

const Start = () => {
    let {quizId} = useParams<RouteQuizHostParams>();
    const { quiz } = useQuizHost({ quizId });

    return (
        <>
            <Button>Start game {quizId}</Button>
        </>
    );
}

export default Start