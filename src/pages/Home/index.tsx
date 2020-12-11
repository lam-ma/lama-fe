import React from "react";
import {Container} from 'semantic-ui-react'

import {Link} from "react-router-dom";

const Home = () => (
    <Container>
        <ul>
            <li>
                <Link to="/quiz/some-quiz/host">Some Quiz</Link>
            </li>
            <li>
                <Link to="/game/some-game/host">Some Game</Link>
            </li>
        </ul>
    </Container>
);

export default Home;
