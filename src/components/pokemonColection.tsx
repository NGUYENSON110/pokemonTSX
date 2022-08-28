import React from "react";
import { Pokemon, Detail, PokemonDetail } from '../interface';
import PokemonList from "./pokemonList"
import "./pokemon.css";




interface Props {

  pokemons: PokemonDetail[];
  viewDetails: Detail;
  setViewDetails: React.Dispatch<React.SetStateAction<Detail>>
}


const PokemonColection: React.FC<Props> = (props) => {
  const { pokemons, viewDetails, setViewDetails } = props;

  const selecPokemon = (id: number) =>{
        console.log(id);
  }
  return(

    <div>
        <section className="collection-container">
            {pokemons.map((pokemonlist) =>{
                    return(
                        <div className="" onClick={() => selecPokemon(pokemonlist.id)}>
                            <PokemonList 
                                viewDetails ={viewDetails}
                                setViewDatils = {setViewDetails}
                                key={pokemonlist.id}
                                name={pokemonlist.name}
                                id = {pokemonlist.id}
                                abilities = {pokemonlist.abilities}
                                image ={pokemonlist.sprites.front_default}
                            />
                         </div>
                    )
            })}
        </section>
    </div>
    
    ) 


};

export default PokemonColection;
