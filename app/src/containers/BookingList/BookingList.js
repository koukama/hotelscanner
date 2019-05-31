import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

import Booking from './Booking/Booking'
import './BookingList.css'


export class BookingList extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        axios.get("/bookings")
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
            <div className="BookingList">
            <Table responsive>
                <thead className="TableHead">
                <tr>
                    <td>FistName</td>
                    <td>LastName</td>
                    <td>Email</td>
                    <td>StartDate</td>
                    <td>EndDate</td>
                </tr>
                </thead>
            </Table>
            {
                this.state.data.map((booking) =>
                    <Booking className="Booking" 
                        firstName= {booking.firstName}
                        lastName = {booking.lastName}
                        email={booking.email}
                        startDate={booking.startDate}
                        endDate={booking.endDate}
                    />
                )
            }
            </div>
        )
    }
}

export default BookingList