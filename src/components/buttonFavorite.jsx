import React from 'react'

export default function buttonFavorite({ toggleFavorite, color }) {
    return (
        <button className="btn btn_favorite" style={{color}} onClick={toggleFavorite} >
            &#9829;
            {/* <span role="img" aria-label="favorite"></span> */}
        </button>
    )
}
