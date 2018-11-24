import React from 'react'

export default class AnswerInput extends React.Component {
  render() {
    return(
      <div className="display-flex direction-column">
        <h3 className="answer-title">Answer question</h3>
        <textarea className="input" rows="5" />
        <button style={{ marginTop: '5px' }} className="button primary justify-end">Answer</button>
      </div>
    )
  }
}