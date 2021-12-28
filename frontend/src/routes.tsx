import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <div className="w-screen h-screen flex items-center justify-center">
                        <h1>Hello World</h1>
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
