import React from 'react'

export default props => {
  const { question } = props
  return (
    <div className="show-question">
      <h1 className="title"> { question.title } </h1>
      <br />
      <div className="display-flex align-center">
        <pre className="body">
          { question.body }
        </pre>
        <span className="user justify-end">Allan Horst Nov 5 23:01:35pm</span>
      </div>
    </div>
  )
}