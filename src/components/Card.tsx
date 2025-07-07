import React, { useEffect, useState } from 'react'
import "../styles/Card.css";
interface Props{
  pokeId: number;
  foundPokemon: (i: any) => void;
  idx: number;
}

const Card = ({pokeId, foundPokemon, idx}: Props) => {
  const [pokemonName, setPokemonName] = useState("Pikachu");
  const [spriteUrl, setSpriteUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png");
  const get = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(get);
      const result = await response.json();
      console.log(result);
      setPokemonName(result.name);
      setSpriteUrl(result.sprites.front_default);
      console.log(spriteUrl);
    };

    fetchPokemon();
  }, [pokeId]);

  const handleClick = () => {
    foundPokemon(idx);
  }

  return (
    <div className="card">
      <img src={spriteUrl}></img>
      <button className="pokemon-name" onClick={handleClick}>{pokemonName}</button>
    </div>
  )
}

export default Card