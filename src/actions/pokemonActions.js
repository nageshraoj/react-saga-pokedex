
export const addPokemon = (pokemon) => {
    return {
        type: 'ADD_POKEMON',
        payload:pokemon
    }
}

export const getPokeAbility = (pokeID) => {
    return {
        type: 'GET_POKEMON_ABILITY',
        payload:pokeID
    }
}



export const updatePokeAbility = (pokemon) => {
    return {
        type: 'UPDATE_POKEMON_ABILITY',
        payload:pokemon
    }
}

