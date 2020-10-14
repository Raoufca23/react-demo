import React, { Component } from 'react'
import CardItem from './cardItem'
import FilterList from './filterList'
import { movies$ } from '../utils/movies'
import { connect } from 'react-redux'

class Cards extends Component {

    componentDidMount() {
        movies$.then(data => {
            const action = {
                type: "LIST_MOVIES",
                value: data
            }

            this.props.dispatch(action)
        })
    }

    filterPerCategory = (e) => {
        const action = {
            type : 'SELECT_CATEGORY',
            value : e.target.value
        }
        this.props.dispatch(action)
    }

    render() {
        const { movies, selected } = this.props
        const categories = ["Tout", ...new Set(movies.map(item => item.category))]
        return (
            <>
                <div className="row">
                    <FilterList 
                        categories={categories} selected={selected} 
                        filterPerCategory={this.filterPerCategory} 
                    />
                </div>
                <div className="row">
                    {
                        movies.filter(item => {
                            return item.category === selected || selected === 'Tout'
                        }).map(item => {
                            return (
                                <CardItem key={item.id} id={item.id}
                                    title={item.title} category={item.category}
                                    likes={item.likes} dislikes={item.dislikes}
                                />
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        selected : state.selected
    }
}

export default connect(mapStateToProps)(Cards)