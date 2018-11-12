import React from 'react'
import { Link } from 'react-router-dom'
import 'questions.css'

export default class ItemQuestion extends React.Component {

  render() {
    const { question } = this.props
    return(
      <div className="question">
        <div className="title">
          <Link to={ `/questions/${question._id}` }>
            { question.title }
          </Link>
          <span className="user">
            Allan Horst Nov 5 23:01:35pm
          </span>
        </div>
        <div className="body">
          <p>
            { question.body.substring(0, 115) }...
          </p>
        </div>
      </div>
    )
  }
}