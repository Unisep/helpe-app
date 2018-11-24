import React from 'react'
import 'question.css'
import questionService from 'question-service'
import ShowQuestion from '../components/show-question';
import Answers from '../components/answers';

export default class Question extends React.Component {

  state = {
    question: {}
  }

  componentWillMount() {
    const { id } = this.props.match.params
    questionService.find(id).then(res => {
      this.setState({
        question: res.data
      })
    })
  }

  render() {
    const { question } = this.state
    return(
      <div className="view-question">
        <ShowQuestion question={ question }/>
        <br />
        <div className="display-flex">
          <span className="answer-label">Answers</span>
          <div className="line" />
        </div>
        <br /><br />
        <Answers />
      </div>
    )
  }
}