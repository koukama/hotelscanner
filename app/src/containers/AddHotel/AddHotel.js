import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export class AddHotel extends Component {

    state = {
        redirect: false
    }

    submitAddHandler = () => {
        const name = document.getElementById('name').value.trim()
        const address =  document.getElementById('address').value.trim()
        const tel = document.getElementById('tel').value.trim()

        const url = "http://localhost:5000/api/hotels"

        fetch(url, {
            method: 'post',
            headers: {
              "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'name='+name+'&address='+address+'&tel='+tel
          })
          .then((response) => {
            console.log('Request succeeded with JSON response', response.data)
            this.setState({redirect: true})
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
                }}
            />
        }
        return (

            <div className="">
                {redirect}
                <p>Saisissez les informations de votre hotel</p>
                <form name="loginForm">
                    <div className="row">
                         <div className="col-sm">
                            <input  placeholder="Hotel" 
                                    id="name" 
                                    type="text" 
                                    className="adminInput" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <input placeholder="Adresse" 
                                    id="address" 
                                    type="input" 
                                    className="adminInput" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <input placeholder="Telephone" 
                                    id="tel" 
                                    type="input" 
                                    className="adminInput" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <button className="addButton"
                                    type="button" 
                                    onClick={this.submitAddHandler}
                                    >Ajouter
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddHotel
