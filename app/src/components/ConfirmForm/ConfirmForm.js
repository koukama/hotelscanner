import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'

import './ConfirmForm.css'

export class ConfirmForm extends Component {
    render() {
        return (
            <div>
                <div className="confirmForm">
                    <p className="confirmTitle">Saisissez vos coordonnées</p>
                    <form>
                        <div className="row">
                            <div className="col-sm">
                                <input placeholder="Nom" id="firstName" type="text" className="confirmInput"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input placeholder="Prénom" id="lastName" type="text" className="confirmInput"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input placeholder="Adresse email" id="email" type="text" className="confirmInput"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <input placeholder="Telephone" id="tel" type="text" className="confirmInput"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Check aria-label="option 1" className="check" /> <p>Lit bébé</p>                       
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <button className="confirmationButton" type="button" className="confirmButton" onClick={() => this.props.submitHandler(this.props.firstName, this.props.lastName, this.props.email,this.props.tel,this.props.roomId )}>Confirmation</button>
                            </div>
                        </div>              
                    </form>
                </div>
            </div>
        )
    }
}

export default ConfirmForm
