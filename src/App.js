import React from 'react'
import DisplayPokemon from './DisplayPokemon'
import './App.css'

const App = () => {

    return (
        <div >
            <h1 className="pokemon-title">Pokedex</h1>
            <DisplayPokemon />
            <br/>
        </div>
    )
}

export default App
