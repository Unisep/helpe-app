import React from 'react'
import 'home.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="button-ask">
          <h3>Recently Questions</h3>
          <a className="button primary" href="/question/ask">Ask question</a>
        </div>
      </div>
    )
  }
}