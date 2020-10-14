import React from 'react'
import { connect } from 'react-redux'

function buttonDel(props) {

    const deleteMovie = (e) => {
        const id = e.target.parentNode.getAttribute("data-id")
        const action = {
            type: 'DELETE_MOVIE',
            value: id
        }
        props.dispatch(action)
    }

    return (
        <button className="btn btn_del" onClick={deleteMovie}>X</button>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps)(buttonDel)