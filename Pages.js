import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import { Restaurants } from './Restaurants';
import NavBar from "./NavBar"

const Pages = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Restaurants />
                </Route>
                <Route exact path="/menu">
                    <Menu />
                </Route>
            </Switch>
        </Router>
    )
}

export default Pages
