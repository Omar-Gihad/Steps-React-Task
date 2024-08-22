import React from "react";
import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOPen, setIsOPen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      //we should not update state based on current state *use callback*
      // setStep(step - 1); do  not update it like that
      setStep((currentStep) => currentStep - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((currentStep) => currentStep + 1);
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOPen((currentIsOPen) => !currentIsOPen)}
        className="close"
      >
        &times;
      </button>
      {isOPen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7950f2", color: "white" }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
