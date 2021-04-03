import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import logo from '../../IMG/crown.svg'



const Header = (props) => (
    
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img src= {logo}/>
        </Link>
        <div className='options'>
            <Link className='logo-container' to='/shop'>SHOP</Link>
            <Link className='logo-container' to='/'>CONTACT</Link>
        </div>
    </div>
    

)
export default Header