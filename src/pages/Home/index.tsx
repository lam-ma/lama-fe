import React from "react";
import {Link} from "react-router-dom";

const Home = () => (
    <ul>
        <li>
            <Link to="/quiz/123/host">Some Quiz</Link>
        </li>
        <li>
            <Link to="/game/123/host">Some Game</Link>
        </li>
    </ul>
);

export default Home;
