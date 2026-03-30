import { useState } from "react";
import { Button } from "./components/Button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const quizs = [
  {
    question: "What is the difference between var, let and const?",
    answer:
      "The main difference is in the concept of hoisting. `var` is function-scoped and hoisted with an undefined value, while `let` and `const` are block-scoped and stay in the Temporal Dead Zone until initialized.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a feature where an inner function has access to the outer (enclosing) function's variables, even after the outer function has returned.",
  },
  {
    question: "What is the difference between '==' and '==='?",
    answer:
      "The '==' operator checks for value equality and performs type coercion if necessary, whereas '===' (strict equality) checks for both value and type without coercion.",
  },
  {
    question: "How does the Event Loop work?",
    answer:
      "The Event Loop monitors the Call Stack and the Callback Queue. If the Call Stack is empty, it takes the first event from the queue and pushes it to the stack for execution.",
  },
  {
    question: "What is the difference between null and undefined?",
    answer:
      "Undefined means a variable has been declared but not assigned a value. Null is an explicitly assigned value that represents the intentional absence of any object value.",
  },
  {
    question: "What are Promises?",
    answer:
      "A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
  {
    question: "How do arrow functions differ from regular functions?",
    answer:
      "Arrow functions have a shorter syntax, do not have their own 'this' binding (they inherit it from the parent scope), and cannot be used as constructors.",
  },
  {
    question: "What is event delegation?",
    answer:
      "Event delegation is a pattern where you attach a single event listener to a parent element to manage events for all its children, taking advantage of event bubbling.",
  },
  {
    question: "What is the difference between map() and filter()?",
    answer:
      "The map() method creates a new array by transforming every element, while filter() creates a new array containing only the elements that pass a specific condition.",
  },
  {
    question: "What is 'this' in JavaScript?",
    answer:
      "The 'this' keyword refers to the object that is executing the current function. Its value depends entirely on how the function is called.",
  },
  {
    question: "What is destructuring assignment?",
    answer:
      "Destructuring is a syntax that allows you to unpack values from arrays, or properties from objects, into distinct variables in a clean and readable way.",
  },
  {
    question: "What is the Temporal Dead Zone (TDZ)?",
    answer:
      "The period between the start of a block's execution and the moment a `let` or `const` variable is declared, during which accessing them throws a ReferenceError.",
  },
  {
    question: "What is a Higher-Order Function?",
    answer:
      "A function that either takes one or more functions as arguments or returns a function as its result.",
  },
  {
    question: "What is the difference between .call(), .apply(), and .bind()?",
    answer:
      ".call() and .apply() invoke a function immediately with a specific 'this' context, while .bind() returns a new function with 'this' permanently bound.",
  },
  {
    question: "What is Prototype Inheritance?",
    answer:
      "The mechanism by which JavaScript objects inherit features from one another via a private property linking to a prototype object.",
  },
  {
    question: "What is the difference between a shallow copy and a deep copy?",
    answer:
      "A shallow copy duplicates top-level properties (references remain for nested objects), while a deep copy duplicates all levels of the object structure.",
  },
  {
    question: "What are Template Literals?",
    answer:
      "Strings created using backticks that allow for multi-line formatting and variable interpolation using the ${} syntax.",
  },
  {
    question: "What is the Spread Operator (...)?",
    answer:
      "A syntax that allows an iterable (like an array) to be expanded in places where multiple arguments or elements are expected.",
  },
  {
    question: "Explain the difference between Async/Await and Promises.",
    answer:
      "Async/Await is syntactic sugar built on Promises, allowing asynchronous code to be written in a style that appears synchronous and is easier to read.",
  },
  {
    question: "What is the purpose of 'use strict'?",
    answer:
      "It is a directive that enables Strict Mode, which catches common coding mistakes and prevents the use of potentially unsafe features.",
  },
];

function App() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [count, setCount] = useState(0);

  const handlePrevious = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const handleNext = () => {
    if (count < quizs.length - 1) {
      setCount((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-xl md:text-2xl leading-tight">Flash Cards</h1>
      {quizs.map((quiz, idx) => {
        return (
          count === idx && (
            <div
              className="w-full max-w-2xl min-h-120 h-full flex flex-col gap-4"
              key={idx}
            >
              {/* TOP */}
              <div className="bg-neutral-900 py-3 px-4 h-14 w-full relative flex items-center justify-between">
                {/* The Progress Bar Container */}
                <div className="w-full bg-neutral-700 h-full overflow-hidden mr-2">
                  {/* The Moving Filler */}
                  <div
                    className="bg-neutral-400 h-full transition-all duration-500 ease-in-out"
                    style={{ width: `${((idx + 1) / quizs.length) * 100}%` }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-lg text-neutral-400 min-w-fit gap-4">
                  <div>{(((idx + 1) / quizs.length) * 100).toFixed(0)}%</div>

                  <div className="flex items-center justify-between">
                    {idx + 1} of {quizs.length}
                  </div>
                </div>
              </div>

              {/* CENTER */}
              <div className="group h-80 w-full perspective-distant ">
                <div
                  className={`relative h-full w-full transition-all duration-1000 transform-3d ${showAnswer ? "transform rotate-y-180" : ""}`}
                >
                  <div className="absolute inset-0 backface-hidden bg-neutral-800 p-4">
                    <h1 className="text-lg font-bold mb-2 text-blue-500">
                      Question:
                    </h1>
                    {quiz.question}
                  </div>
                  <div className="rotate-y-180 absolute inset-0 backface-hidden bg-neutral-900 p-4">
                    <h1 className="text-lg font-bold mb-2 text-green-500">
                      Answer:
                    </h1>
                    {quiz.answer}
                  </div>
                </div>
              </div>

              {/* BOTTOM */}
              <div className="justify-between flex items-center py-2 md:py-4 px-4 md:px-8 w-full bg-neutral-900 gap-4">
                <Button
                  icon={<IconArrowLeft size={20} />}
                  text="Previous"
                  onClickHandler={handlePrevious}
                />
                <Button
                  onClickHandler={() => setShowAnswer((prev) => !prev)}
                  text={showAnswer ? "Hide Answer" : "Show Answer"}
                />
                <Button
                  icon={<IconArrowRight size={20} />}
                  text="Next"
                  onClickHandler={handleNext}
                />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
}

export default App;
