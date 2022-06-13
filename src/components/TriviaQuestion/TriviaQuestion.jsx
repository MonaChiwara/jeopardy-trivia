import { useState } from "react";

const TriviaQuestion = ({ triviaQuestion }) => {
    const [answer, setAnswer] = useState(false)
    return (
        <div>
            <div class="question-container">
                <h2>Question: {triviaQuestion.question}</h2>
                <h2>Category: {triviaQuestion.category.title}</h2>
                <h3>Points: {triviaQuestion.value}</h3>
            </div>
            <div class="answer">
                <button class="btn btn-warning" onClick={() => setAnswer(!answer)}>Click here to reveal answer</button>
            </div>
            {answer ? <h2>Answer: {triviaQuestion.answer}</h2> : null}
            

            <div class="answer">

            </div>
        </div>
    );
}



export default TriviaQuestion;