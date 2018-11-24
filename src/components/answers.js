import React from 'react'
export default props => {
  const { answers } = props
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