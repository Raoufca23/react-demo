import React from 'react'
import Like from '../assets/like.png'
import Dislike from '../assets/dislike.png'
import DeleteBtn from './buttonDel'
import FavoriteBtn from './buttonFavorite'
import { connect } from 'react-redux'

const CardItem = (props) => {
    // console.log(props)
    const { title, category, likes, dislikes, id, favorite, dispatch } = props

    const toggleFavorite = (e) => {
        const id = e.target.parentNode.getAttribute("data-id")
        const action = {
            type: 'TOGGLE_FAVORITE',
            value: id
        }
        dispatch(action)
    }

    const isFavorite = favorite.includes(id)

    return (
        <div className="col-md-3 col-sm-4">
            <div className="card" data-id={id} >
                <h1 className="card_title"> {title} </h1>
                <p className="card_category"> {category} </p>
                <div className="card_footer">
                    <div className="float-left">
                        <img src={Like} alt="Like" />
                        <span className="likes"> {likes} </span>
                    </div>
                    <div className="float-right">
                        <img src={Dislike} alt="Disike" />
                        <span className="dislikes"> {dislikes} </span>
                    </div>
                </div>
                {
                    isFavorite && (<span className="favorite_icon">&#9829;</span>) 
                }
                <DeleteBtn />
                <FavoriteBtn toggleFavorite={toggleFavorite} color={isFavorite ? 'black' : 'white'} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(CardItem)