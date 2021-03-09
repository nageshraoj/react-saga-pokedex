import { combineReducers } from 'redux'

const pokemonReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POKEMON':return [...state,action.payload];
        default:return state;
    }
}

const pokemonAbilityReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_POKEMON_ABILITY':return {datafetching:true, pokeID:action.payload}
        case 'UPDATE_POKEMON_ABILITY':return {datafetching:false, ability:action.payload}
        default: return state;
    }
    
}

export default combineReducers({
    pokemons: pokemonReducer,
    ability:pokemonAbilityReducer
})