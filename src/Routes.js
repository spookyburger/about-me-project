import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './pages/Header'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Background from './img/starsglow1.png'

export default () => {

const sectionStyle ={
        backgroundImage: `url(${Background})`,
        height: `100%`
    }


    return (
        <div className="fullscreen">
        <section style={ sectionStyle }>
            <div className="pagecontainer">
            <div className="pagebody">
                <Header/>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
                <Footer/>
            </div>
            </div>
        </section>
        </div>
    )
}