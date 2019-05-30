import React, { Component } from 'react'
import HomeImage from './HomeImage.jpeg'


import './Home.css'
import { SearchBar } from '../../components/SearchBar/SearchBar';


export class Home extends Component {


    render() {
        return (
            <div className="Home">
                <img className="homeImage" src={HomeImage} />
                <SearchBar />
            </div>
        )
    }
}

export default Home


  