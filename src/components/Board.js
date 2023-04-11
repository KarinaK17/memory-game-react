import React, { useState, useEffect } from "react";
import Card from "./Card";
import chameleon from "../pictures/chameleon.jpg";
import butterfly from "../pictures/butterfly.jpg";
import fish from "../pictures/fish.jpg";
import dog1 from "../pictures/dog1.jpg";
import dog2 from "../pictures/dog2.jpg";
import cat from "../pictures/cat.jpg";
import swan from "../pictures/swan.jpg";
import monkey from "../pictures/monkey.jpg";
import pigs from "../pictures/pigs.jpg";
import parrot from "../pictures/parrot.jpg";
import giraffe from "../pictures/giraffe.jpg";
import frog from "../pictures/frog.jpg";

function Board() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [message, setMessage] = useState("");
  const [cards, setCards] = useState([
    {
      name: "chameleon",
      timesClicked: 0,
      src: chameleon,
      description: "Happy chameleon",
    },
    {
      name: "butterfly",
      timesClicked: 0,
      src: butterfly,
      description: "Gorgeous butterfly",
    },
    {
      name: "fish",
      timesClicked: 0,
      src: fish,
      description: "Confused fish",
    },
    {
      name: "dog1",
      timesClicked: 0,
      src: dog1,
      description: "Suspicious dog",
    },
    {
      name: "monkey",
      timesClicked: 0,
      src: monkey,
      description: "Pensive monkey",
    },
    {
      name: "frog",
      timesClicked: 0,
      src: frog,
      description: "Forg in the rain",
    },
    { name: "swan", timesClicked: 0, src: swan, description: "Elegant swan" },
    { name: "cat", timesClicked: 0, src: cat, description: "Curious cat" },
    {
      name: "giraffe",
      timesClicked: 0,
      src: giraffe,
      description: "Straightforward giraffe",
    },
    {
      name: "parrot",
      timesClicked: 0,
      src: parrot,
      description: "Colorful parrot",
    },
    { name: "dog2", timesClicked: 0, src: dog2, description: "Good boi" },
    {
      name: "pigs",
      timesClicked: 0,
      src: pigs,
      description: "Little piglet with his mom",
    },
  ]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const clickOnImage = (name) => {
    setMessage("");
    let index;
    let c = cards.map((x) => {
      if (x.name === name) {
        index = cards.indexOf(x);
        return { ...x, timesClicked: x.timesClicked + 1 };
      } else {
        return x;
      }
    });
    setCards([...c]);
    if (cards[index].timesClicked < 1) setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    shuffleArray(cards);
    cards.map((x) => {
      console.log(x, "x");
      if (x.timesClicked > 1) {
        setScore(0);
        setMessage("You lost!");
        if (highestScore < score) setHighestScore(score);
        setCards([
          ...cards.map((card) => {
            return { ...card, timesClicked: 0 };
          }),
        ]);
        return x;
      } else {
        return x;
      }
    });
    if (score === 12) {
      document.querySelector(".pop-up-window").style.display = "flex";
    }
  });

  const restart = () => {
    document.querySelector(".pop-up-window").style.display = "none";
    setScore(0);
    setHighestScore(0);
    setCards([
      ...cards.map((card) => {
        return { ...card, timesClicked: 0 };
      }),
    ]);
  };

  return (
    <div className="content">
      <p className="description">
        This is a Memory Game. You can play this game by clicking on cards.
        After each click, the cards are shuffled. To win you need to click on
        all the cards, but you can't click on the same card twice. Good luck!!!
      </p>
      <div>
        <p>Your score: {score}</p>
        <p>Your highest score: {highestScore}</p>
        <p className="lose-message">{message}</p>
      </div>
      <div className="board">
        <div className="pop-up-window">
          <div className="pop-up-box">
            <p>Congratulations. You won!</p>
            <button onClick={restart}>Start again!</button>
          </div>
        </div>
        {cards.map((card) => {
          console.log(card.name);
          return (
            <Card
              key={card.name}
              name={card.name}
              src={card.src}
              description={card.description}
              timesClicked={card.timesClicked}
              click={clickOnImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
