import React from "react";
import { Message } from "semantic-ui-react";
import { Answer as AnswerType } from "../../types/Answer";

type AnswerProps = { answer: AnswerType }

const Answer = (props: AnswerProps) => (
    <>
        <Message size="big">{props.answer.description}</Message>
    </>
);

export default Answer;
