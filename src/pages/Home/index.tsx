import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <ul>
        <li>
            <Link to="/quiz/some-quiz/host">Some Quiz</Link>
        </li>
        <li>
            <Link to="/game/some-game/host">Some Game</Link>
        </li>
    </ul>
);

export default Home;
