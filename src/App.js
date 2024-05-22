import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // Mostly in React, function name starting with 'handle' would indicate it is an event-handler func'n.

  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}> 1 </div>
        <div className={`${step >= 2 ? "active" : ""}`}> 2 </div>
        <div className={`${step >= 3 ? "active" : ""}`}> 3 </div>
      </div>

      <StepMessage step={step}> {messages[step - 1]} </StepMessage>
      <div className="buttons">
        <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
          {" "}
          <span> 👈🏻 </span> Previous
        </Button>
        <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
          {" "}
          Next <span> 👉🏻 </span>
        </Button>
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step} </h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
