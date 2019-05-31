import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Hotel.css'

export class Hotel extends Component {

    state = {
        data: []
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td>{this.props.name}</td>
                            <td>{this.props.address}</td>
                            <td>nbre de chambre</td>
                            <td>
                                <button type="button" className="listButton">Chambres</button>
                            </td>
                            <td>
                                <button type="button" className="listButton"><Link to="/admin/bookings">Réservation</Link></button>
                            </td>
                            <td>
                                <button type="button" className="removeButton" onClick={() => this.props.removeHotelHandler(this.props.hotelID)}>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                   
                </Table>
            
            </div>
        )
    }
}

export default Hotel
