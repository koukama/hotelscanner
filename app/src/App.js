import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



import Layout from './containers/Layout/Layout'
import Home from './containers/Home/Home'
import NavBar from './components/NavBar/NavBar'
import RoomList from './containers/RoomList/RoomList'
import Register from './containers/Register/Register'
import LoginAdmin from './containers/LoginAdmin/LoginAdmin'
import { HotelList } from './containers/HotelList/HotelList'


import './App.css'


library.add(faMapMarkerAlt)




function App() {
    return (
        <div className="App">
            <Layout>
                <Router>
                    <NavBar />
                    <Route path="/" exact component={Home} />
                    <Route path="/availability" exact component={RoomList} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/admin" exact component={LoginAdmin} />
                    <Route path="/admin/hotels" exact component={HotelList} />
                </Router>
            </Layout>
        </div>
    );
}

export default App;

 
