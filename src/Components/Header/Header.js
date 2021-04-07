import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import logo from '../../IMG/crown.svg'
import { auth } from '../../Firebase/firebase'



const Header = ({currentUser}) => (
    
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src= {logo} alt='company logo'/>
        </Link>
        <div className='options'>
            <Link className='logo-container' to='/shop'>SHOP</Link>
            <Link className='logo-container' to='/'>CONTACT</Link>
            {currentUser?
               <div className= 'option' onClick = {()=> auth.signOut()}> SIGN OUT </div>
               :
               <Link className= 'option' to='/signin'>SIGN IN</Link> 
            }
        </div>
    </div>
    

)
export default Header