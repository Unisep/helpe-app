import React from 'react'
import { Link } from 'react-router-dom'
import 'home.css'
import Questions from '../components/questions';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="button-ask">
          <h3>Recent Questions</h3>
          <Link className="button primary" to="/question/ask">Ask question</Link>
        </div>
        <Questions />
      </div>
    )
  }
}