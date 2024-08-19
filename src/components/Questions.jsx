import React from "react";

const Questions = ({
  quizQuestion,
  currentQuestion,
  totalQuestions,
  onAnswerSelect,
  selectedAnswer,
}) => {
  return (
    <div className="flex flex-col justify-center h-full">
      <p className="text-xl font-bold mb-4 text-center p-3">
        {currentQuestion + 1} of {totalQuestions} Questions
      </p>
      <h1 className="font-bold text-xl text-center p-3">
        {quizQuestion.question}
      </h1>
      <div className="options p-3">
        {quizQuestion.options.map((option, index) => {
          return (
            <label className="block" key={index}>
              <input
                type="radio"
                value={option}
                name={`question - ${currentQuestion}`}
                onChange={() => onAnswerSelect(option)}
                checked={selectedAnswer === option}
              
                className="m-3"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
