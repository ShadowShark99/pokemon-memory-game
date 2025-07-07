import React, { useEffect, useState } from 'react'

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
    <div>
      <img src={spriteUrl}></img>
      <div className="pokemon-name">{pokemonName}</div>
    </div>
  )
}

export default Card