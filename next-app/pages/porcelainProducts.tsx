import React from "react"
import PokemonList from "../components/PokemonList"

const pokemonList = [
  { name: "bulbasaur" },
  { name: "ivysaur" },
  { name: "venusaur" },
  // Add more Pokémon as needed
]

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <PokemonList pokemonList={pokemonList} />
    </div>
  )
}

export default HomePage
