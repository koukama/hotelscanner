import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'

import './SearchBar.css'

export class SearchBar extends Component {

    state = {
        redirect: false
    }
    
    redirectToTarget = () => {
        this.setState({
            redirect: true
        }) 
    }

    render() {
        let redirect = null
        if (this.state.redirect) {
            redirect = <Redirect to='/availibility' />
        }
        return (
            <div className="SearchForm">
                {redirect}
                <input placeholder="Destination" id="query" type="text" className="SearchInput" />
                <input placeholder="Arrivé" id="arrivalDate" type="date" className="SearchInput" />
                <input placeholder="Depart" id="departureDate" type="date" className="SearchInput" />
                <input placeholder="Nbre de personnes" id="" type="text" className="SearchInput" />
                <input placeholder="Nbre d'enfant (3-17)" id="" type="text" className="SearchInput" />
                <button className="SearchButton" type="button" onClick={this.redirectToTarget}>Search</button>                
            </div>
        )
    }
}

export default SearchBar

