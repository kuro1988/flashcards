import React from 'react';

const QuestionBox = ({question, updateQuestion}) => {
  return (
    <div id="question-box">

      <div id="hero">

        <p id="text" className="question">
        {question}
        <br />
        </p>

      </div>

      <div className="buttons is-centered">
        <button id="new-question" onClick={updateQuestion} className="button is-info">
          New Question
        </button>

      </div>

    </div>
  )
}

export default QuestionBox;