import React, { Component } from 'react'

import Hotel from './Hotel/Hotel'
import './HotelList.css'


export class HotelList extends Component {
    render() {
        return (
            <div className="HotelList">
                <Hotel className="Hotel" />
            </div>
        )
    }
}

export default HotelList
