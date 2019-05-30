import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './Room.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Room extends Component {

    state = {
        redirect: false,
        data: []
    }

    redirectToRegister = () =>{
        this.setState({redirect: true})
    }

    render() {
        let redirect = null
        if (this.state.redirect) {        
            redirect = <Redirect to ={{
                            pathname: '/Register',
                            state: {id: this.props.idRoom}
                        }} 
                     />
        }


        return (

            <div className=" Hotel">
                {redirect}
                <div className="row">
                    <div className="col-sm">
                        <img className="HotelImage" src={this.props.image} />
                    </div>
                    <div className="col-sm price">
                        <p>{this.props.name}</p>
                        <p> 
                            <FontAwesomeIcon icon="map-marker-alt" className="icon" />
                              {this.props.address}
                        </p>
                        <p> {this.props.price}</p>
                        <p>{this.props.idRoom}</p>
                        <button  className="BookingButton" onClick={this.redirectToRegister} type="button">Choisir cette chambre</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Room
