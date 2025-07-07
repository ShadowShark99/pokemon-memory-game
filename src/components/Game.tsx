import React, { useState } from 'react'
import Card from './Card'
import "../styles/Game.css";

const Game = () => {
  const [score, setScore] = useState(0);
  const [pokemon, setPokemon] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);

  const scramble = () => {
    const newPokemon = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(let i = 0; i < 12; i++)
    {
      newPokemon[i] = (Math.random() * 100) + 1;
    }
    setPokemon(newPokemon);
  };
  return (
    <div className="game-board">
      {pokemon.map((id) => (<Card pokeId={id}></Card>))}
      
    </div>
  )
}

export default Game