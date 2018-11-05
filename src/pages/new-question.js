import React from 'react'
import { Link } from 'react-router-dom'
import 'new-question.css'
import questionService from 'question'

export default class Question extends React.Component {
  state = {
    title: '',
    description: '',
    warning: null
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  validateForm() {
    const { title, description } = this.state
    if (!title || title === '') {
      this.setState({
        warning: 'Field "Title" is required!'
      })
      return false
    }

    if (!description || description === '' ) {
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
    questionService.save(this.state).then(() => {
      console.log('teste')
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
    const { title, description, warning } = this.state
    console.log(warning)
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
              value={ description }
              onChange={ e => this.handleChange('description', e.target.value) }/>
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