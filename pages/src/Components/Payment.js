import React from 'react'
import Header from './Header'
import './payment.css'
import {Link} from 'react-router-dom'

export const Payment = () => {
    return (
       
    <div class='paymentpage'>
            <Header/>
        <section class='dropdownsection'>
           
            <div>Home</div>
            <div>Feed <i class="fas fa-chevron-down"></i></div>
            <div class='page'>Store <i class="fas fa-chevron-down"></i></div>
            <div>Services<i class="fas fa-chevron-down"></i></div>
            <div>SOS <i class="fas fa-chevron-down"></i></div>
        </section>
        <section class='paymentsection'>
            <h1>Payment</h1>
            <p class='textinpayment'> <Link to='/' style={{color:' rgba(255, 0, 0, 0.575)'}}>Login</Link> <i class="fas fa-chevron-right"></i> Home <i class="fas fa-chevron-right"></i> Store <i class="fas fa-chevron-right"></i> Your Cart </p><span><i class="fas fa-chevron-right"></i>payment</span>
        </section>
        <section class='maindetail '>
            <div class='content'>
            <div class='headincontent'><p>Select your card</p>
            <p>Add card</p></div>
            <div class='cardimages'><img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-ZmK5FHfbYhLNHsc84hqaBHPQuwdJWPRYA&usqp=CAU'/>
            <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKCxkveTClIKckS_K1gn8-RA_aKf_c8zRoVQ&usqp=CAU'/>
        </div>
        <div class='detalspay'><p>Other Payments</p>
            <div class='subpayment'>
                <p><i class="fab fa-google-pay gpay"></i></p>
                <p><i class="fas fa-chevron-right"></i></p>
            </div>
            <div  class='subpayment'>
                <p class='paypal'><i class="fab fa-paypal "></i>Paypal</p>
                <p ><i class="fas fa-chevron-right"></i></p>
            </div>
            <div  class='subpayment'>
                <p class='Phonepe'><img alt='' src='https://www.thestatesman.com/wp-content/uploads/2020/01/PhonePe-_ED.jpg'></img>Phonepe</p>
                <p ><i class="fas fa-chevron-right"></i></p>
            </div>
            <div  class='subpayment'>
                <p class='pay'>Pay<span class='tm'>tm</span></p>
                <p><i class="fas fa-chevron-right"></i></p>
            </div>
            <div  class='subpayment'>
                <p>Cash on Delivary</p>
                <p><i class="fas fa-chevron-right"></i></p>
            </div>
        </div>
        </div>
        </section>
 
</div>
        
    )
}

export default Payment
