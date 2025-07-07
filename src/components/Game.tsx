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
  };

  //randomizes array order, command
  const scramble = (arr: any) => {
    const n = arr.length;

    //scramble
    for(let i = 0; i < n-1; i++)
    {
      const ri = Math.random() * (n - i) + i;
      const temp = arr[i];
      arr[i] = arr[ri];
      arr[ri] = temp; 
    }

  };

  const foundPokemon = (i : number) => {
    if(!pokemon[i][1])
    {
      setScore(score + 1);
      if(score % 12)
      {
        newPokemonSet();
      }
      const newPokemon = [...pokemon];
      newPokemon[i][1] = 1;
      setPokemon(newPokemon);
    }
    console.log(pokemon);
    scramble(pokemon);
    console.log(pokemon);
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