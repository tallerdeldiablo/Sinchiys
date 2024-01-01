import React, { useState } from 'react';
import triviaQuestions from './triviaData';
import './TriviaGame.css';

const TriviaGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < triviaQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='trivia-game'>
      {showScore ? (
        <div className='score-section'>
          Has acertado {score} de {triviaQuestions.length} preguntas.
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Pregunta {currentQuestion + 1}</span>/{triviaQuestions.length}
            </div>
            <div className='question-text'>{triviaQuestions[currentQuestion].question}</div>
          </div>
          <div className='answer-section'>
            {triviaQuestions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option === triviaQuestions[currentQuestion].answer)}>
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TriviaGame;
