import React from 'react'
import {Message} from 'semantic-ui-react'
import Answer from '../../Components/Answer'
type QAProps = {question: string, answers: string[]}
const QuestionAnswersBox = (props: QAProps) => (
    <>
        <Message size='massive' color="teal">
            <Message.Header>{props.question}</Message.Header>
        </Message>
        {props.answers.map((answer) => {
            return <Answer answer={answer} />;
        })}
    </>
)

export default QuestionAnswersBox