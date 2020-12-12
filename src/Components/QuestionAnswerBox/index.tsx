import React from 'react'
import {Message, Image} from 'semantic-ui-react'
import Answer from '../../Components/Answer'
import { Answer as AnswerType } from "../../types/Answer";

type QAProps = {description?: string, answers: AnswerType[], imageUrl?: string}
const QuestionAnswersBox = (props: QAProps) => (
    <>
        <Message size='massive' color="teal">
            <Message.Header>
                {props.imageUrl &&
                    <Image src={props.imageUrl} wrapped ui={false}/>
                }
                {props.description}
            </Message.Header>
        </Message>
        {props.answers.map((answer) => {
            return <Answer answer={answer} />;
        })}
    </>
)

export default QuestionAnswersBox