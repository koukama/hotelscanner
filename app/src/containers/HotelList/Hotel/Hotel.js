import React, { Component } from 'react'

export class Hotel extends Component {
    render() {
        return (
            <div className="Hotel">
                <div className="row">
                    <div className="col-sm">
                        <img src="" alt ="" className="HotelImage"/>
                    </div>
                    <div className="col-sm price">
                        <p>Le nom de l'hotel</p>
                        <p> Prix de la chambre</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hotel
