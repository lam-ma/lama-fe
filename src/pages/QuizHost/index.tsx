import React from 'react'
import {Container, Button} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import {RouteQuizHostParams} from "../../types/RouteQuizHostParams";
import {useQuizHost} from "./useQuizHost";

const Start = () => {
    let {quizId} = useParams<RouteQuizHostParams>();
    const { quiz } = useQuizHost({ quizId });

    return (
        <Container>
            <Button>Start game {quizId}</Button>
        </Container>
    );
}

export default Start