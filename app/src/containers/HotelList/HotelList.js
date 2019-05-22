import React, { Component } from 'react'

import Article from './Hotel/Hotel'
import './HotelList.css'


export class HotelList extends Component {
    render() {
        return (
            <div className="HotelList">
                <Article {...this.props} className="Hotel" />
            </div>
        )
    }
}

export default HotelList
