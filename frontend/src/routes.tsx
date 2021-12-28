import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Signin from 'pages/auth/Signin'
import Signup from 'pages/auth/Signup'
import ServersPage from 'pages/server/Server'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <h1>Hello World</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
