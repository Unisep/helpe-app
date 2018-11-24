import React from 'react'
import questionService from 'question-service'
import 'questions.css'
import ItemQuestion from './item-question';

export default class Questions extends React.Component {

  state = {
    questions: []
  }
  componentWillMount() {
    questionService.load().then(res => {
      this.setState({
        questions: res.data
      })
    })
  }

  render() {
    return(
      <div className="questions">
        {
          this.state.questions.map((item, i) => <ItemQuestion key={ i } question={ item } />)
        }
      </div>
    )
  }
}