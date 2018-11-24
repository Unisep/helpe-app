import React from 'react'
import answerService from '../services/answer-service';

export default class AnswerInput extends React.Component {
  state={
    description: ''
  }

  answerQuestion() {
    answerService.save({
      question_id: this.props.id,
      description: this.state.description
    }).then(() => {
      this.setState({
        description: ''
      })
      this.props.loadAnswers()
    })
  }

  render() {
    return(
      <div className="display-flex direction-column">
        <h3 className="answer-title">Answer question</h3>
        <textarea
          value={ this.state.description }
          onChange={ e => this.setState({ description: e.target.value })}
          className="input"
          rows="5" />
        <button
          style={{ marginTop: '5px' }}
          onClick={ () => this.answerQuestion() }
          className="button primary justify-end">Answer</button>
      </div>
    )
  }
}