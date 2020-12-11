import React from "react";
import { Message } from "semantic-ui-react";

type AnswerProps = { answer: string }

const Answer = (props: AnswerProps) => (
    <>
        <Message size="big">{props.answer}</Message>
    </>
);

export default Answer;
