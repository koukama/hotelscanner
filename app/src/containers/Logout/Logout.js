import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Logout extends Component {
    state = {
        redirect: false
    }

    componentDidMount = () => {
        localStorage.removeItem("login")
        this.setState({redirect: true})
    }

    render() {
        let redirect = null
        if (this.state.redirect) {        
            redirect = <Redirect to={{
                pathname: '/admin'
                }}
            />
        }
        return (
            <div>
                {redirect}
                Logout
            </div>
        )
    }
}

export default Logout
