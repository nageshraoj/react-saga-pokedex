import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './pokemon.css'
import {getPokeAbility} from './actions/pokemonActions'

const DisplayPokemon = () => {
  const pokemons = useSelector(state=>state.pokemons)
  const dispatch = useDispatch()

    const pokemoncolors =(type) => {
        switch (type) {
            case  'fire': return '#FDDFDF'
            case  'grass': return '#DFDDE0'
            case 'electric': return '#FCF7DE'
            case 'water': return '#DEF3FD'
            case 'ground': return '#f4e7da'
            case 'rock': return '#d5d5d4'
            case 'fairy': return '#fceaff'
            case 'poison': return '#98d7a5'
            case 'bug': return '#f8d5a3'
            case 'dragon': return '#97b3e6'
            case 'psychic': return '#eaeda1'
            case 'flying': return '#f5f5f5'
            case 'normal': return'#f5f5f5'
            default: return '#f5f5f5'
        }
   
    }

    const getAbility = (e) => {
        const pokeName = e.target.alt 
        const pokeid = pokemons.find(poki => poki.name === pokeName)
        dispatch(getPokeAbility(pokeid.id))
    }
    
    return (
        <div className="main-container" >
            {
                pokemons.map((pokemon, index) => (
                     <div key={index} className="poke-container">
                            <div className="pokemon">
                                <div className="image-container">
                                 <img style={{backgroundColor:pokemoncolors(pokemon.types[0].type.name)}} onClick={(e)=>getAbility(e)} className="pokeman-image" src={pokemon.sprites.front_default}  alt={pokemon.name}/>       
                                </div>
                                <div className="info">
                                    <div className="number">#{index + 1}</div>
                                    <h3 className="name">{pokemon.name}</h3>
                                        <small className="type">Type: <span>{pokemon.types[0].type.name } {pokemon.types[1]?.type.name }</span></small>
                                </div>
                        </div>              
                    </div>                    
        ))
            }
        
        </div>
    )
}

export default DisplayPokemon
