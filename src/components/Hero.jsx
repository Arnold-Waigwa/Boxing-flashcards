import { useState } from "react";
import "./Hero.css";

const Hero = () => {
  const triviaQuestions = [
    {
      question: "Start!",
      answer: "Press the next arrow to start the flashcards",
      id: "",
    },
    {
      question: "Who is known as 'The Greatest'?",
      answer: "Muhammad Ali",
      id: "easy",
    },
    {
      question: "What weight class is above middleweight?",
      answer: "Super middleweight",
      id: "medium",
    },
    {
      question: "Which boxer was known as 'Iron Mike'?",
      answer: "Mike Tyson",
      id: "easy",
    },
    {
      question: "What year did the first Olympic boxing take place?",
      answer: "1904",
      id: "hard",
    },
    {
      question:
        "Who was the first boxer to win titles in eight weight classes?",
      answer: "Manny Pacquiao",
      id: "hard",
    },
    {
      question: "Where did the 'Rumble in the Jungle' take place?",
      answer: "Kinshasa, Zaire",
      id: "medium",
    },
    {
      question: "Who holds the record for most consecutive title defenses?",
      answer: "Joe Louis",
      id: "hard",
    },
    {
      question: "Who said, 'Float like a butterfly, sting like a bee'?",
      answer: "Muhammad Ali",
      id: "easy",
    },
    {
      question: "Who is the only boxer to defeat Floyd Mayweather Jr.?",
      answer: "None; he retired undefeated.",
      id: "easy",
    },
    {
      question: "Which boxing legend was involved in the 'Bite Fight'?",
      answer: "Mike Tyson (against Evander Holyfield)",
      id: "easy",
    },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleNextCard = () => {
    setIsFlipped(false); // Reset card flip state to show front
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % triviaQuestions.length
    ); // Increment index
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <p>
        <strong>Number of cards: 10</strong>
      </p>
      <div
        onClick={handleFlip}
        className={`card ${isFlipped ? "flipped" : ""}`}
        id={triviaQuestions[currentCardIndex].id}
      >
        <div className="front">
          {triviaQuestions[currentCardIndex].question}
          <br />
        </div>
        <div className="back">{triviaQuestions[currentCardIndex].answer}</div>
      </div>
      <div>
        <button onClick={handleNextCard} className="nextCard">
          Next
        </button>
      </div>
    </div>
  );
};

export default Hero;
