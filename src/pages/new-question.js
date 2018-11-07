import React from 'react'
import { Link } from 'react-router-dom'
import 'new-question.css'
import questionService from 'question'

export default class Question extends React.Component {
  state = {
    title: '',
    body: '',
    warning: null
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  validateForm() {
    const { title, body } = this.state
    if (!title || title === '') {
      this.setState({
        warning: 'Field "Title" is required!'
      })
      return false
    }

    if (!body || body === '' ) {
      this.setState({
        warning: 'Field "Description" is required!'
      })
      return false
    }

    this.setState({
      warning: null
    })
    return true
  }

  save() {
    if (!this.validateForm()) return
    const { warning, ...other } = this.state
    questionService.save({ ...other }).then(() => {
      this.props.history.push('/')
    })
  }

  showWarning() {
    return (
      <div className="warning">
        <span>{ this.state.warning }</span>
        <button onClick={ () => this.setState({ warning: null }) }>x</button>
      </div>
    )
  }

  render() {
    const { title, body, warning } = this.state
    return (
      <div className="new-question">
        <h1 className="title">Ask a Question</h1>
        <div className="form">
          <div className="input-wrapper">
            <label className="input-label">Title</label>
            <input
              className="input"
              autoFocus
              placeholder="O que você quer resolver?"
              value={ title }
              onChange={ e => this.handleChange('title', e.target.value) }/>
          </div>
          <div className="field-wrapper">
            <label className="input-label">Description</label>
            <textarea
              className="input"
              rows="10"
              value={ body }
              onChange={ e => this.handleChange('body', e.target.value) }/>
          </div>

          { warning && this.showWarning() }

          <div className="buttons">
            <Link className="button" to="/">Cancel</Link>
            <button className="button primary" onClick={ () => this.save() } >Save</button>
          </div>
        </div>
      </div>

    )
  }
}