import React from 'react'

export default props => {
  const { question } = props
  return (
    <div className="show-question">
      <h1 className="title"> { question.title } </h1>
      <br />
      <div className="display-flex">
        <pre className="body">
          { question.body }
        </pre>
        <span className="user align-right">Allan Horst Nov 5 23:01:35pm</span>
      </div>
    </div>
  )
}