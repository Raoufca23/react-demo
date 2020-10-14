const initialState = {
    movies: [],
    favorite: [],
    selected : "Tout"
}

function manageMovies(state = initialState, action) {

    let nextState

    switch (action.type) {
        case 'LIST_MOVIES':
            nextState = {
                ...state,
                movies: action.value
            }
            return nextState || state
        case 'DELETE_MOVIE':
            nextState = {
                ...state,
                movies: state.movies.filter(item => item.id !== action.value)
            }
            return nextState || state
        case 'TOGGLE_FAVORITE':
            const isFavorite = state.favorite.includes(action.value)
            nextState = {
                ...state,
                favorite: isFavorite ?
                          state.favorite.filter(item => item !== action.value) :
                          [...state.favorite, action.value],
                movies : state.movies.map(item => {
                    if(item.id === action.value) {
                        isFavorite ? item.likes-- : item.likes++
                    }
                    return item
                })         
            }
            return nextState || state
        case 'SELECT_CATEGORY' : 
            nextState = {
                ...state,
                selected : action.value
            }
            return nextState || state
        default:
            return state
    }

}

export default manageMovies