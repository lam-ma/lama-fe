import React from 'react'
import {Button, Header, Segment} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import {RouteGameHostParams} from "../../types/RouteGameHostParams";

const Start = () => {
    let {gameId} = useParams<RouteGameHostParams>();
    return (
        <>
            <Header>
                Host page in-game for {gameId}
            </Header>
            <Segment>
                Should show the nth question
            </Segment>
            <Button>Show Answers</Button>
        </>
    );
}

export default Start