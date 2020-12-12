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
    const { currentQuestion, gameState, correctAnswers, nextStateHandler, isNextQuestion } = useGameHost({game_id: gameId});

    // Winners Mock
    let winners = [{name: "Maya", score:208}, {name: "Joe", score:200}, {name: "Tom", score:195}]

    return (
        <Container>
            <Header>
                Host page in-game for {gameId}
            </Header>

            {gameState !== "FINISH" &&
                <Button onClick={nextStateHandler}>
                    {gameState === "QUESTION" &&
                    "Show Answer"
                    }
                    {gameState === "ANSWER" && isNextQuestion &&
                    "Show Next Question"
                    }
                    {!isNextQuestion && gameState === "ANSWER" && currentQuestion &&
                    "Show Results"
                    }
                </Button>
            }

             
             {/*Should show the nth question */}
            {(gameState === "QUESTION" || gameState === "ANSWER") &&
                <Segment>
                    <QuestionAnswersBox description={currentQuestion?.description} answers={currentQuestion?.answers || []} imageUrl={currentQuestion?.image_url}/>
                </Segment>
            }

            {/*Show correct answer  */}
            {gameState === "ANSWER" &&
                <Segment>
                    { correctAnswers?.length === 1 &&
                        <Header as='h1'>And the right answer is...</Header>
                    }
                    { (correctAnswers?.length || 0) > 1 &&
                        <Header as='h1'>And the right answers are...</Header>
                    }
                    {correctAnswers?.length && correctAnswers.map((answer) => (
                        <Answer answer={answer} />
                    ))
                    }
                </Segment>
            }

            {/*Show Final Results */}
            {gameState === "FINISH" &&
                <Segment>
                    <Header as='h1'>The Winners of the game are...</Header>
                    <br/>
                    <br/>
                    <br/>
                    <Winners winners={winners}/>
                </Segment>
            }
            

        </Container>
    );
}

export default Start