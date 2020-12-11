import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import QuizHost from "../pages/QuizHost";
import GameHost from "../pages/GameHost"
import Home from "../pages/Home";

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/quiz/:quizId/host">
                    <QuizHost/>
                </Route>
                <Route path="/game/:gameId/host">
                    <GameHost/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default MainRouter;