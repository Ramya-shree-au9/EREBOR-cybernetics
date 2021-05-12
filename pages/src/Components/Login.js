import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
        <div className='body'>
             <div class='row'>
        <div class='col-md-6 leftview'>
            <p class='textalign'>
            FOR<br/>LOVE<br/> BEHINDE<br/> WORDS
        </p>
        </div>
        <div class='col-md-6 rightview'>
            <div class='headsection'>
            <h3>Pet<span class='changedec'>Konnect</span></h3>
            <p class='subhead'>for love behind words</p>
        </div>
            <div class="Loginsection">
          
                <div class='sectiondata'>
                    <p class="leftsec">Login</p>
                    <p>Register</p>
                </div>
                <p class="headline">Use your credentials to login into account</p>
                <div class='inputsection'>
               <i class="far fa-envelope"></i><input placeholder='Email ID'></input>
            </div>
            <div class='inputsection'>
              <span class='pswimg'><i class="fas fa-lock"></i></span>  <input placeholder='Password'></input>
              <span class='eyeicon'><i class="far fa-eye"></i></span>
            </div>
            <div class='frgpsw'>Forgot password?</div>
            <button class='btn btn-warning loginbtn'>Login</button>

            <p class="headline">or login with this</p>
            <div class='bottomsection'>
                <span>Facebook  </span>
                <span>Google  </span>
                <span>Twitter</span>
            </div>
            </div>
            <Link to='/payment' class='btn btn-success mt-3'>Payment</Link>
            <p class="footer">Privacy Policy | Terms & Condition | FAQ</p>

        </div>
        
    </div>
    
        
        </div>
        
    )
}

export default Login
