import React from 'react'

export default class Answers extends React.Component {

  componentWillMount() {
    this.setState({
      answers: [
        {
          _id: '65161651s65df16',
          description: 'Lorem ipsum dolor sit amet \n consectur bla bla bla ',
        },
        {
          _id: '65161651s65df16',
          description: 'Você é um merda mesmo cara, se enforque',
        }
      ]
    })
  }

  render() {
    const { answers } = this.state
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