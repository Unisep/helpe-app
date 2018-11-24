import React from 'react'
import answerService from '../services/answer-service';

export default class Answers extends React.Component {

  state = {}

  componentWillMount() {
    answerService.load(this.props.id).then(res => {
      this.setState({
        answers: res.data
      })
    })
  }

  render() {
    const { answers } = this.state
    if (!answers) return null
    return(
      answers.map((item, index) => (
        <div key={ index }>
          <div className="answer-item" >
            <pre className="body">
              { item.description }
            </pre>
            <span className="user">Allan Horst Nov 5 23:01:35pm</span>
          </div>
          <div className="line" />
          <br />
        </div>
      ))
    )
  }
}