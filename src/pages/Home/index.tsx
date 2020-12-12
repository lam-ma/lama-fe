import React from "react";
import {Container} from 'semantic-ui-react'

import {Link} from "react-router-dom";

const Home = () => (
    <Container>
        <ul>
            <li>
                <Link to="/quiz/123/host">Our magic 123 quiz</Link>
            </li>
        </ul>
    </Container>
);

export default Home;
