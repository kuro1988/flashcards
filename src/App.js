import React, {useEffect, useState} from 'react';
import './styles/App.css';

import QuestionBox from './components/QuestionBox'

const url = 'https://raw.githubusercontent.com/kuro1988/flashcards/master/questions.json'

const App = () => {

  // create the component state, using an empty object as starting value
  const [question, setQuestion] = useState({})

  // fetch the data from the json
  const updateQuestion = async () => {

   const result = await fetch(url)
   const data = await result.json()
   let index = Math.floor(Math.random()*(data.questions.length))
   setQuestion(data.questions[index])

  }

  // replace componentDidMount and run only once
  useEffect(() => {
    updateQuestion()
  }, [])

  // create a props object in order to use the spread operator
  let props = {}
  props.question = question.question
  props.updateQuestion = updateQuestion

  return (
    <div className='container'>
    <h1 className='title'>Can you answer this?</h1>
    {/* pass and spread the props */}
    <QuestionBox {...props}/>
    </div>
  )
}

// define the child component and use object destructuring to retrieve props


export default App;

