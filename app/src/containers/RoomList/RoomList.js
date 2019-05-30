import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Room from './Room/Room'
import './RoomList.css'


export class RoomList extends Component {
    render() {
        console.log('RoomList')
        console.log(this.props.location.state.data)
        return (
            <div className="HotelList">
            {
                this.props.location.state.data.map((room) =>
                    <Room className="Hotel" 
                        image={room.photo}
                        name= {room.hotel.name}
                        address = {room.hotel.address}
                        price = {room.category.price}
                        idRoom={room.id}/>
                )
            }
            </div>
        )
    }
}

export default RoomList
