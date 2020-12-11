import React from 'react'
import {Container, Button, Header, Segment} from 'semantic-ui-react'
import {useParams} from "react-router-dom";
import {RouteGameHostParams} from "../../types/RouteGameHostParams";
import QuestionAnswersBox from '../../Components/QuestionAnswerBox';
import Answer from '../../Components/Answer';
import Winners from '../../Components/Winners';
import {useGameHost} from "./useGameHose";

const Start = () => {
    let {gameId} = useParams<RouteGameHostParams>();
    const { setGameState, quiz, getCurrentQuestion } = useGameHost({game_id: gameId});

    let question = "What is 1 + 2?";
    let answers = ["2", "3", "no clue", "x"];
    let correctAnswer = "3";
    let winners = [{name: "Maya", score:208}, {name: "Joe", score:200}, {name: "Tom", score:195}]
    let imageUrl = "https://www.jochen-schweizer.de/on/demandware.static/-/Sites-Class/default/dwdf47d577/products/extragross/lama-trekking-1.jpg"

    return (
        <Container>
            <Header>
                Host page in-game for {gameId}
            </Header>

            <Button>Show Answers</Button>

             
             {/*Should show the nth question */}
            <Segment>
                <QuestionAnswersBox question={question} answers={answers} imageUrl={imageUrl} />
            </Segment>

            {/*Show correct answer  */}
            <Segment>
                <Header as='h1'>And the right answer is...</Header>
                <Answer answer={correctAnswer}></Answer>
            </Segment>

            {/*Show Final Results */}

            <Segment>
                <Header as='h1'>The Winners of the game are...</Header>
                <br />
                <br />
                <br />
                <Winners winners={winners}/>
            </Segment>
            

        </Container>
    );
}

export default Start