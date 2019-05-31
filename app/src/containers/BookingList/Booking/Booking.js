import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

export class Booking extends Component {

    state = {
        data: []
    }

    render() {
        return (
            <div>
                <Table responsive>
                    <tbody>
                        <tr>
                            <td>{this.props.firstName}</td>
                            <td>{this.props.lastName}</td>
                            <td>{this.props.email}</td>
                            <td>{this.props.startDate}</td>
                            <td>{this.props.endDate}</td>
                        </tr>
                    </tbody>
                   
                </Table>
            
            </div>
        )
    }
}

export default Booking
