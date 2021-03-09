import { createStore,applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSageMiddleWare from 'redux-saga'
import reducer from '../reducers/pokemonReducer'
import { addPokemonsSaga,getPokemonAbilitySaga } from '../saga/pokemonSaga'

const sagaMiddleware = createSageMiddleWare()
const middleware = [sagaMiddleware]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

const pokemonStore = () => {
    sagaMiddleware.run(addPokemonsSaga)
    sagaMiddleware.run(getPokemonAbilitySaga)
    return store
}

export default pokemonStore()