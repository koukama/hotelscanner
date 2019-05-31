import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { createHashHistory } from 'history'
import axios from 'axios'

import './SearchBar.css'

export class SearchBar extends Component {

    state = {
        redirect: false,
        data: []
    }
    
    redirectToTarget = () => {
        
        const arrivalDate   = document.getElementById('arrivalDate').value
        const departureDate = document.getElementById('departureDate').value
        const totalAdults   = document.getElementById('totalAdults').value
        const totalKids     = document.getElementById('totalKids').value
        const query = "/availability?arrivalDate=" + arrivalDate + "&departureDate=" + departureDate + "&totalAdults=" + totalAdults + "&totalKids=" + totalKids
        console.log(query)
        axios.get("/availability?arrivalDate=" + arrivalDate + "&departureDate=" + departureDate + "&totalAdults=" + totalAdults + "&totalKids=" + totalKids)
            .then((response) => {
                console.log('response')
                console.log(response.data)
                this.setState({ data : response.data, redirect: true})
                localStorage.setItem("startDate", arrivalDate)
                localStorage.setItem("endDate", departureDate)
            })
            .catch((error) => {
                 // handle error
                console.log(error);
            })
    }

    render() {
        let redirect = null
        if (this.state.redirect) {
            console.log('search')
            console.log(this.state.data)
            redirect = <Redirect to={{
                                    pathname: '/availability',
                                    state: {data:this.state.data} 
                                }}
                        />
            
        }

        return (
            <div className="SearchForm">
                {redirect}
                <input placeholder="Destination" id="query" type="text" className="SearchInput" />
                <input placeholder="Arrivé" id="arrivalDate" type="date" className="SearchInput" />
                <input placeholder="Depart" id="departureDate" type="date" className="SearchInput" />
                <input placeholder="Nbre de personnes" id="totalAdults" type="text" className="SearchInput" />
                <input placeholder="Nbre d'enfant (3-17)" id="totalKids" type="text" className="SearchInput" />
                <button className="SearchButton" type="button" onClick={this.redirectToTarget}>Search</button>                
            </div>
        )
    }
}

export default SearchBar


