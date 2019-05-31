import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

import Hotel from './Hotel/Hotel'
import './HotelList.css'


export class HotelList extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get("/hotels")
            .then((response) => {
                console.log('response')
                console.log(response.data)
                this.setState({ data : response.data})
            })
            .catch((error) => {
                    // handle error
                console.log(error);
            })
    }

    render() {
        return (
            <div className="HotelList">
            <Table responsive>
                <thead className="TableHead">
                <tr>
                    <td>Hotel</td>
                    <td>Adresse</td>
                    <td>chambres</td>
                    <td className="tdButton">
                        <button type="button" className="addButton" >Ajouter un hotel</button>
                    </td>
                </tr>
                </thead>
            </Table>
            {
                this.state.data.map((hotel) =>
                    <Hotel className="Hotel" 
                        name= {hotel.name}
                        address = {hotel.address}
                    />
                )
            }
            </div>
        )
    }
}

export default HotelList