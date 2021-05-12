import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login'
import Payment from './Payment'

const Routing = ()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={Login}/>    
        <Route exact path='/payment' component={Payment}/>            
        </BrowserRouter>
    )
}

export default Routing