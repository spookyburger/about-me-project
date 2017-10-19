import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default () => {
    return (
            <div>
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                <Footer/>
            </div>
    )
}