import { useEffect, useState } from "react";
import { QuizQuestions } from "./components/QuizQuestions";
import Questions from "./components/Questions";
import Result from "./components/Result";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: answer });
    console.log(selectedAnswers);
  };
  const handlePrevious = () => {
    setCurrentQuestion((prevState) => prevState - 1);
  };

  const handleNext = () => {
    setCurrentQuestion((prevState) => prevState + 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <div className="container mx-auto p-4 h-screen flex flex-col justify-center">
      <div className="w-1/2 mx-auto">
        {!isSubmitted ? (
          <div>
            <Questions
              quizQuestion={QuizQuestions[currentQuestion]}
              currentQuestion={currentQuestion}
              totalQuestions={QuizQuestions.length}
              onAnswerSelect={handleAnswerSelect}
              selectedAnswer={selectedAnswers[currentQuestion]}
            />
            <div className="buttons flex justify-between mt-5">
              <button
                className={
                  !currentQuestion == 0
                    ? ` bg-purple-600 text-white px-4 py-3 font-bold rounded-md`
                    : `bg-gray-300 p-3 rounded-md px-4 py-3 cursor-not-allowed opacity-50`
                }
                onClick={handlePrevious}
                disabled={currentQuestion == 0}
              >
                Previous
              </button>
              {currentQuestion < QuizQuestions.length - 1 ? (
                <button
                  className={!selectedAnswers[currentQuestion] ? "px-4 py-3 cursor-not-allowed opacity-90 bg-purple-600 text-white rounded-md font-bold":"px-4 py-3 bg-purple-600 text-white p-3 font-bold rounded-md"}
                  onClick={handleNext}
                  disabled={!selectedAnswers[currentQuestion]}

                >
                  Next
                </button>
              ) : (
                <button
                  className={!selectedAnswers[currentQuestion] ? "px-4 py-3 cursor-not-allowed opacity-90 bg-purple-600 text-white rounded-md font-bold":"px-4 py-3 bg-purple-600 text-white p-3 font-bold rounded-md"}
                  onClick={handleSubmit}
                  disabled={!selectedAnswers[currentQuestion]}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
          <Result QuizQuestions={QuizQuestions} selectedAnswers={selectedAnswers}/>
        )}
      </div>
    </div>
  );
}

export default App;
