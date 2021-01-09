import React from 'react'
import {Route } from 'react-router-dom'
import Header from '../Components/Header'

//rutas
import Home from '../Views/Home'

const NavLog = () => (
    <>
    <Header/>
        <Route path='/' exact component={Home} />
    </>
)

export default NavLog
