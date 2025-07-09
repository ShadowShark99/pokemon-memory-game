import React, { useState } from 'react'
import Card from './Card'
import "../styles/Game.css";
import Scramble from './Scramble';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  const [score, setScore] = useState(0);
  //[id, picked(boolean]
  const [pokemon, setPokemon] = useState([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]]); //pokemon index currently selected

  
  const newPokemonSet = () => {
    const newPokemon = [];
    for(let i = 0; i < 12; i++)
    {
      newPokemon.push([Math.floor((Math.random() * 100) + 1),0]);
    }
    console.log(newPokemon);
    setPokemon(newPokemon);
    setScore(0);
  };

  //randomizes array order, command
  const scramble = () => {
    const arr = [...pokemon];
    const n = arr.length;

    //scramble
    for(let i = 0; i < n-1; i++)
    {
      const ri = Math.floor(Math.random() * (n - i)) + i;
      const temp = arr[i];
      arr[i] = arr[ri];
      arr[ri] = temp; 
    }
    setPokemon(arr);
    console.log("Scrambled");
    console.log(arr);

  };

  const foundPokemon = (i : number) => {
    if(!pokemon[i][1])
    {
      setScore(score + 1);
      if((score + 1)% 12 === 0)
      {
        newPokemonSet();
        return;
      }
      const newPokemon = [...pokemon];
      newPokemon[i][1] = 1; //found the pokemon at index i
      setPokemon(newPokemon);
    }
    else
    {
      setScore(0);
    }
    scramble();
  };

  //let randomPoke = scramble();

  return (
    <>
      <div className="game-board">
        {pokemon.map((id, idx) => (<Card pokeId={id[0]} foundPokemon={foundPokemon} idx={idx}></Card>))}
        
      </div>
      <Scramble handleClick={newPokemonSet}></Scramble>
      <ScoreBoard score={score}></ScoreBoard>
    </>
  )
} 

export default Game