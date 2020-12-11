import React from 'react'
import {Message, Image} from 'semantic-ui-react'
import Answer from '../../Components/Answer'
type QAProps = {question: string, answers: string[], imageUrl: string}
const QuestionAnswersBox = (props: QAProps) => (
    <>
        <Message size='massive' color="teal">
            <Message.Header>
                <Image src={props.imageUrl} wrapped ui={false} />
                {props.question}
            </Message.Header>
        </Message>
        {props.answers.map((answer) => {
            return <Answer answer={answer} />;
        })}
    </>
)

export default QuestionAnswersBox