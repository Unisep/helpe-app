import React from 'react'
import 'new-question.css'

export default class Question extends React.Component {
  state = {
    title: ''
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    const { title, description } = this.state

    return (
      <div className="new-question">
        <h1 className="title">Ask a Question</h1>
        <div className="form">
          <div>
            <label className="input-label">Title</label>
            <input
              className="input"
              autoFocus
              placeholder="O que você quer resolver?"
              value={ title }
              onChange={ e => this.handleChange('title', e.target.value) }/>
          </div>
          <div>
            <label className="input-label">Description</label>
            <textarea
              className="input"
              rows="10"
              value={ description }
              onChange={ e => this.handleChange('description', e.target.value) }/>
          </div>
          <div className="buttons">
            <button className="button secondary">Cancel</button>
            <button className="button primary">Save</button>
          </div>
        </div>
      </div>

    )
  }
}