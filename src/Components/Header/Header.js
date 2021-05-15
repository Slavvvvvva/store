import React from 'react'
import './header.styles.js'
import logo from '../../IMG/crown.svg'
import {connect} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../Redux/user/user-selektor'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderConteiner, LogoConteiner, OptionLink, OptionsContainer } from './header.styles.js'
import { signOutSession } from '../../Redux/user/user-actions.js'



const Header = ({currentUser, hidden, signOutSession}) => {
    return(
        <HeaderConteiner>
        <LogoConteiner to='/'>
            <img src= {logo} alt='company logo'/>
        </LogoConteiner>
        <OptionsContainer>
            <LogoConteiner to='/shop'>SHOP</LogoConteiner>
            <LogoConteiner to='/'>CONTACT</LogoConteiner>
            {currentUser?
               /* <OptionDiv onClick = {()=> auth.signOut()}> SIGN OUT </OptionDiv> */
               <OptionLink as='div' onClick = {signOutSession}> SIGN OUT </OptionLink> 
               :
               <OptionLink className= 'option' to='/signin'>SIGN IN</OptionLink> 
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden? null : <CartDropdown/>}
    </HeaderConteiner>
    ) 
}

const mapStateToProps = createStructuredSelector ({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
const mapDispatchToProps = (dispatch) =>({
    signOutSession: () => dispatch(signOutSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)