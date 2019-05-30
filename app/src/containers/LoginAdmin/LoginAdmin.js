import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './LoginAdmin.css'
import { HotelList } from '../HotelList/HotelList';



export class LoginAdmin extends Component {
    
    state = {
        redirect: false,
        data: []
    }

    redirectToHotelList = () =>{
        axios.get("/hotels")
            .then((response) => {
                console.log('response')
                console.log(response.data)
                this.setState({ data : response.data, redirect: true})
            })
            .catch((error) => {
                 // handle error
                console.log(error);
            })
    }


    render() {
        let redirect = null
        if (this.state.redirect) {        
            redirect = <Redirect to={{
                pathname: '/admin/hotels',
                state: {data:this.state.data} 
            }}
    />
        }
        return (
            <div>
                {redirect}
                <div className="confirmForm">
                    <p className="confirmTitle">Saisissez vos coordonnées</p>
                    <form name="loginForm">
                        <div className="row">
                            <div className="col-sm">
                                <input  placeholder="Email" 
                                        id="email" 
                                        type="text" 
                                        className="adminInput" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input placeholder="Password" 
                                        id="password" 
                                        type="password" 
                                        className="adminInput" 
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <button className="confirmationButton" 
                                        type="button" 
                                        className="confirmButton" 
                                        onClick={this.redirectToHotelList}>Se connecter
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <button className="confirmationButton" 
                                        type="button" 
                                        className="confirmButton">creer un compte
                                </button>
                            </div>
                        </div>             
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginAdmin
