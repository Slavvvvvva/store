import React from 'react'
import './header.styles.js'
import logo from '../../IMG/crown.svg'
import {useDispatch, useSelector} from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../Redux/user/user-selektor'
import { selectCartHidden } from '../../Redux/cart/cart-selectors'
import { HeaderConteiner, LogoConteiner, OptionLink, OptionsContainer } from './header.styles.js'
import { signOutSession } from '../../Redux/user/user-actions.js'



const Header = () => {

    const dispatch = useDispatch()
    const signOutSessions = () => dispatch(signOutSession())

    const currentUser  = useSelector(selectCurrentUser)
    const hidden = useSelector(selectCartHidden)

    return(
        <HeaderConteiner>
        <LogoConteiner to='/'>
            <img src= {logo} alt='company logo'/>
        </LogoConteiner>
        <OptionsContainer>
            <LogoConteiner to='/shop'>SHOP</LogoConteiner>
            <LogoConteiner to='/'>CONTACT</LogoConteiner>
            {currentUser?
               <OptionLink as='div' onClick = {signOutSessions}> SIGN OUT </OptionLink> 
               :
               <OptionLink className= 'option' to='/signin'>SIGN IN</OptionLink> 
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden? null : <CartDropdown/>}
    </HeaderConteiner>
    ) 
}

export default Header