import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card.jsx";

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [message, setMessage] = useState("");

  const fetchCards = () => {};
  const handleCardClick = (cardId) => {};
  const shuffleCards = () => {};
  const resetGame = () => {};

  return (
    <>
      <Card />
      <p>score: {score}</p>
    </>
  );
}

export default App;
