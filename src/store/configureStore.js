import { createStore } from 'redux'
import manageMovies from './reducers/movieReducer'

export default createStore(
    manageMovies,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
