import React, { useEffect, useState } from 'react'
import "../styles/Card.css";
interface Props{
  pokeId: number;
}

const Card = ({pokeId}: Props) => {
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

  return (
    <div className="card">
      <img src={spriteUrl}></img>
      <button className="pokemon-name">{pokemonName}</button>
    </div>
  )
}

export default Card