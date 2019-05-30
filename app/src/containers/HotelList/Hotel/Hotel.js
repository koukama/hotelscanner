import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

import './Hotel.css'

export class Hotel extends Component {

        state = {
            data: []
        }
    
        removeHotelHandler = () =>{
            axios.delete("/hotels")
                .then((response) => {
                    axios.get("/hotels")
                        .then((response) => {
                        console.log(response)
                        this.setState({ HotelList : response.data})
                        })
                        .catch((error) => {
                        console.log(error);
                        }) 
                    })
                .catch(function (error) {
                    console.log(error)
                })
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
                                <button type="button" className="listButton">Réservation</button>
                            </td>
                            <td>
                                <button type="button" className="removeButton" onClick={this.removeHotelHandler}>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                   
                </Table>
            
            </div>
        )
    }
}

export default Hotel
