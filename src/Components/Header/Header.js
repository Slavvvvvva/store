import React from 'react'
import './header.styles.js'
import logo from '../../IMG/crown.svg'
import { auth } from '../../Firebase/firebase'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../Redux/user/user-selektor'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderConteiner, LogoConteiner, OptionDiv, OptionLink, OptionsContainer } from './header.styles.js'



const Header = ({currentUser, hidden}) => (
    
    <HeaderConteiner>
        <LogoConteiner to='/'>
            <img src= {logo} alt='company logo'/>
        </LogoConteiner>
        <OptionsContainer>
            <LogoConteiner to='/shop'>SHOP</LogoConteiner>
            <LogoConteiner to='/'>CONTACT</LogoConteiner>
            {currentUser?
               /* <OptionDiv onClick = {()=> auth.signOut()}> SIGN OUT </OptionDiv> */
               <OptionLink as='div' onClick = {()=> auth.signOut()}> SIGN OUT </OptionLink> 
               :
               <OptionLink className= 'option' to='/signin'>SIGN IN</OptionLink> 
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden? null : <CartDropdown/>}
    </HeaderConteiner>
)

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)