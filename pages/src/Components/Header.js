import React from 'react'

export const Header = () => {
    return (
        <div>
               <header class='header'>
        <div class='headsection'>
            <h3>Pet<span class='changedec'>Konnect</span></h3>
            <p class='subhead'>for love behind words</p>
        </div>
        <div class="subline">
            <p>Deliver to</p>
            <p ><i class="fas fa-map-marker-alt"></i>New Bangalore</p>
        </div>
        <div class='searchsection'>
           <p class="select">All <i class="fas fa-chevron-down"></i></p>
            <div class="subsearch">
            <input/><i class="fas fa-search"></i>
        </div>
        </div>
        <div class='carticons'><i class="fas fa-shopping-bag"></i></div>
        <div class='carticons'><i class="fas fa-bell"></i></div>
        
        <div class='callsection'><span class='end'>|</span><i class="fas fa-phone"></i> 24 <i class="fas fa-times"></i> 7 <span>Support</span></div>
        
        <div class="callsection profile"><span class='end'>|</span>
            <img alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-4-wXbguM8OFreAUM55U3Rksh83JiR-opg&usqp=CAU"/>
            Hellow  <span>Jashmin</span><i class="fas fa-chevron-down"></i></div>
    </header>
        </div>
    )
}

export default Header
