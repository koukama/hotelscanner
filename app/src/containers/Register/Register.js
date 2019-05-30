import React, { Component } from 'react'
import axios from 'axios'

import './Register.css'
import Room from '../RoomList/Room/Room'
import { ConfirmForm } from '../../components/ConfirmForm/ConfirmForm'
import { ConfirmMessage } from '../../components/ConfirmMessage/ConfirmMessage'


export class Register extends Component {
    state = {confirmInfo: false};

    submitHandler = () =>{
        const firstName   = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const email   = document.getElementById('email').value
        const tel     = document.getElementById('tel').value
        const roomID  = this.props.location.state.id
        axios.post("/booking", { firstName: firstName, lastName: lastName, email:  email, tel: tel, roomID: roomID})
        .then((response) => { 
            this.setState({ confirmInfo : true})
        })
        .catch((error) => {
             // handle error
            console.log(error);
        })

    }

    render() {
        let result = null
        if (this.state.confirmInfo) {
            result = <ConfirmMessage />
          } else {
            result = <ConfirmForm submitHandler={this.submitHandler} />
          }
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default Register

