import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from './pages/Home'
import './styles'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
					<div>
						<Route exact path="/" component={ Home } />
					</div>
				</Router>
      </div>
    )
  }
}

render(<App />, document.getElementById('main'))