import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import logo from '../../IMG/crown.svg'
import { auth } from '../../Firebase/firebase'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../Redux/user/user-selektor'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'



const Header = ({currentUser, hidden}) => (
    
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
            <CartIcon/>
        </div>
        {hidden? null : <CartDropdown/>}
    </div>
)

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)