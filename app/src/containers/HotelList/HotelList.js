import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

import Hotel from './Hotel/Hotel'
import './HotelList.css'
import { Redirect } from 'react-router-dom'


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
    
    RedirectToAddHotel = () => {
        this.setState({redirect: true})
    }

    removeHotelHandler = (id) => {
        axios.delete("/hotels/" + id)
            .then((response) => {
                axios.get("/hotels")
                    .then((response) => {
                    console.log(response)
                    this.setState({ data : response.data})
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
        let redirect = null
        if (this.state.redirect) {        
            redirect = <Redirect to = '/admin/addhotel'/>
        }
        return (
            <div className="HotelList">
            {redirect}
            <Table responsive>
                <thead className="TableHead">
                <tr>
                    <td>Hotel</td>
                    <td>Adresse</td>
                    <td>chambres</td>
                    <td className="tdButton">
                        <button type="button" className="addButton" onClick={this.RedirectToAddHotel}>Ajouter un hotel</button>
                    </td>
                </tr>
                </thead>
            </Table>
            {
                this.state.data.map((hotel) =>
                    <Hotel className="Hotel" 
                        name= {hotel.name}
                        address = {hotel.address}
                        hotelID = {hotel.id}
                        removeHotelHandler = {this.removeHotelHandler}
                    />
                )
            }
            </div>
        )
    }
}

export default HotelList