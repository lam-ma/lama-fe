import React from 'react'
import {Button} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import {RouteQuizHostParams} from "../../types/RouteQuizHostParams";

const Start = () => {
    let {quizId} = useParams<RouteQuizHostParams>();
    return (
        <>
            <Button>Start game {quizId}</Button>
        </>
    );
}

export default Start