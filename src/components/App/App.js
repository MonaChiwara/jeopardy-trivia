import './App.css';
import axios from 'axios';
import TriviaQuestion from '../TriviaQuestion/TriviaQuestion';
import { useState } from 'react';



function App() {
  const [triviaQuestions, setTriviaQuestion] = useState([])
  const [score, setScore] =  useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'http://jservice.io/api/random'

    try {
      const response = await axios.get(baseUrl)
      setTriviaQuestion(response.data)
    } catch (e) {
      console.log(e)
    }
  }

 


  return (
    <div className="App">
      <h1>Welcome to Jeopardy </h1>
      <h2>Score: </h2>
      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Question</button> <br/>

      <h2>Score:{score}</h2>
      <button type="submit" class="btn btn-danger" onClick ={() => setScore(score - 1)}>Decrease</button>
      <button type="submit" class="btn btn-warning" onClick ={() => setScore(score + 1)}>Increase</button>
     
      

      {triviaQuestions.map(triviaQuestion => {
        return (
          <div>
            <TriviaQuestion triviaQuestion={triviaQuestion} />
          </div>
        )
      })}

      

    </div>
  );
}

export default App;
