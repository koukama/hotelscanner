import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export class AddHotel extends Component {

    submitAddHandler = () => {
        const name = document.getElementById('name').value
        const address =  document.getElementById('address').value
        const tel = document.getElementById('tel').value
        axios.post("http://localhost:5000/api/hotels", { name: name, address: address, tel: tel })
        .then((response) => { 
            this.setState({ data : response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="">
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
