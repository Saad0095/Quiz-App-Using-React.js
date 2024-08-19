import React from "react";

const Result = ({ QuizQuestions, selectedAnswers }) => {
  const calScore = () => {
    let score = 0;
    QuizQuestions.forEach((qustion, index) => {
      if (selectedAnswers[index] === qustion.answer) {
        score++;
      }
    });
    return score;
  };

  const score = calScore();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-2">
        {score < 2 ? "Better Luck Next Time!" : "Great!"}
      </h1>
      <p className="text-center my-2">
        Your Score is {score} Out Of {QuizQuestions.length}
      </p>
      <div>
        {QuizQuestions.map((question, index) => {
          return (
            <div
              key={index}
              className="text-center p-4 m-4 border rounded shadow-md"
            >
              <h1>{question.question}</h1>
              <p>
                Your Answer: {selectedAnswers[index]} -{" "}
                {selectedAnswers[index] == question.answer
                  ? <p className="text-green-700 font-bold">Correct</p>
                  : <p className="text-red-700 font-bold">Incorrect</p>}
              </p>
              {selectedAnswers[index] !== question.answer && (
                <p> Correct Answer - {question.answer} </p>
              )}
            </div>
          );
        })}
      </div>
      <button
        className="px-4 py-3 bg-red-700 text-white font-bold flex justify-center items-center mx-auto rounded hover:bg-red-800"
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Play Again!
      </button>
    </div>
  );
};

export default Result;
