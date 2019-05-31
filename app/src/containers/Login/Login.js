import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import './Login.css'
import { HotelList } from '../HotelList/HotelList';



export class Login extends Component {
    
    state = {
        redirect: false,
        data: [],
        error: null,
        login: false
    }

    componentDidMount = () => {
        if (localStorage.getItem("login") == "ok") {
            this.setState({redirect: true})
        }
    }

    loginHandler = () => {
        const username = document.getElementById('email').value
        const password = document.getElementById('password').value
        const url = "http://localhost:5000/api/login"

        fetch(url, {
            method: 'post',
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'username='+username+'&password='+password
          })
          .then((response) => {
            if (response.status == 400) {
                console.log('Login Error', response.data)
                this.setState({error: true})
            } else {
                console.log('Request succeeded with JSON response', response.data)
                localStorage.setItem('login', 'ok')
                this.setState({redirect: true})
            }
          })
          .catch((error) => {
            console.log('Request failed', error)
            this.setState({error: true})
        });   
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

        let error = null
        if (this.state.error) {        
            error = <div className="error">Erreur Login/Password</div>
        }
        return (
            <div>
                {redirect}
                {error}
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
                                        onClick={this.loginHandler}>Se connecter
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

export default Login
