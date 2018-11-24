import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from 'header'
import Home from 'home'
import NewQuestion from 'new-question'
import Question from 'question';

import './styles'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
					<div className="content">
						<Route exact path="/" component={ Home } />
            <Route exact path="/question/:id" component={ Question } />
            <Route exact path="/new-question/" component={ NewQuestion } />
					</div>
				</Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))