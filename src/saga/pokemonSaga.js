import { put, call, take } from 'redux-saga/effects'
import axios from 'axios'
import {addPokemon,updatePokeAbility} from '../actions/pokemonActions'

export function* addPokemonsSaga() {
    for (let index = 1; index < 120; index++) {
        const { data } = yield call(axios.get, `https://pokeapi.co/api/v2/pokemon-form/${index}`)
        yield put(addPokemon(data))      
    }
}

export function* getPokemonAbilitySaga() {
    while(1){
    const pokeID = yield take("GET_POKEMON_ABILITY")
    const { data } = yield call(axios.get, `https://pokeapi.co/api/v2/ability/${pokeID.payload}`)
    yield put(updatePokeAbility(data))
    }
}