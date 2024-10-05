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

  const [userAnswer, setUserAnswer] = useState("");

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const [answers, setAnswers] = useState([]);

  const [currentStreak, setCurrentStreak] = useState(0);

  const [longestStreak, setLongestStreak] = useState(0);

  const [isCorrect, setIsCorrect] = useState(null);

  const handleNextCard = () => {
    setIsFlipped(false); // Reset card flip state to show front
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % triviaQuestions.length
    ); // Increment index
    setUserAnswer("");
    setIsCorrect(null);
  };

  const handlePreviousCard = () => {
    setIsFlipped(false);
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1) % triviaQuestions.length
    );
    setUserAnswer("");
    setIsCorrect(null);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = triviaQuestions[currentCardIndex];

    if (
      userAnswer.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase()
    ) {
      //answer is correct
      setAnswers([...answers, userAnswer]);
      setCurrentStreak((prevStreak) => prevStreak + 1);
      setLongestStreak((prevLongest) =>
        Math.max(prevLongest, currentStreak + 1)
      );
      setIsCorrect(true);
    } else {
      //answer is wrong
      setCurrentStreak(0);
      setIsCorrect(false);
    }
  };

  const randomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    setCurrentCardIndex(randomIndex);
    setIsFlipped(false);
    setUserAnswer("");
    setIsCorrect(null);
  };

  const inputStyle = {
    borderColor: isCorrect === null ? "#ccc" : isCorrect ? "green" : "red",
    borderWidth: "2px",
  };

  return (
    <div>
      <p>
        <strong>Number of cards: 10</strong>
        <p>
          Current Streak: {currentStreak} , Longest Streak: {longestStreak}
        </p>
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
        <br />
        <div>
          <form onSubmit={handleSubmit}>
            <label>Guess the answer here:</label>
            <input
              className="correct"
              type="text"
              placeholder="Place your answer here"
              value={userAnswer}
              onChange={handleChange}
              style={inputStyle}
            />
            <button type="submit">Submit Guess</button>
          </form>
        </div>
        <button onClick={handlePreviousCard} className="nextCard">
          Previous
        </button>
        <button onClick={handleNextCard} className="nextCard">
          Next
        </button>
        <button
          onClick={() => {
            randomQuestion;
          }}
          className="nextCard"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default Hero;
