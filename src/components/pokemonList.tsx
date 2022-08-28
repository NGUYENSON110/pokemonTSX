import React,{useState, useEffect} from 'react'
import "./pokemon.css"
import { Detail } from '../interface';

interface Props{
    name:string;
    id: number;
    image:string;
    viewDetails: Detail;
    setViewDatils: React.Dispatch<React.SetStateAction<Detail>>;
    abilities: {
        name:string;
        ability:string;
    }[] | undefined;
}


const pokemonList:React.FC<Props>= (props) => {
    const {name,id,image, abilities, viewDetails,setViewDatils} = props;
  
  return (
    <div>
        <section className="pokemon-list-container">
            <p className="pokmemon-name">{name}</p>
            <img src={image} alt="pokemon" />
            <div className="detail-skill">
                <p className="detail-ability"> Ablities : </p>
                {
                    abilities?.map((ab:any)=>{
                        return(
                            <div>
                                   {ab.ability.name} 
                                </div>
                        )
                    })
                }
            </div>
        </section>
    </div>
  )
}

export default pokemonList;