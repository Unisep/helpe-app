import React from 'react'
import 'question.css'
import questionService from 'question-service'
import ShowQuestion from '../components/show-question'
import Answers from '../components/answers'
import AnswerInput from '../components/AnswerInput'
import answerService from '../services/answer-service'

export default class Question extends React.Component {

  state = {
    question: {},
    answers: []
  }

  componentWillMount() {
    const { id } = this.props.match.params
    questionService.find(id).then(res => {
      this.setState({
        question: res.data
      })
    })
    this.loadAnswers()
  }

  loadAnswers() {
    const { id } = this.props.match.params
    answerService.load(id).then(res => {
      this.setState({
        answers: res.data
      })
    })
  }

  render() {
    const { id } = this.props.match.params
    const { question, answers } = this.state
    return(
      <div className="view-question">
        <ShowQuestion question={ question }/>
        <br />
        <div className="display-flex">
          <span className="answer-label">Answers</span>
          <div className="line" />
        </div>
        <br />
        <Answers answers={ answers } />
        <AnswerInput id={ id } loadAnswers={ () => this.loadAnswers() } />
      </div>
    )
  }
}