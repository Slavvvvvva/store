import React, { useEffect } from 'react'
import './App.css'
import HomePage from './Pages/Homepage/Homepage'
import { Redirect, Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInSignUpPage from './Pages/SignInPage/SignInSignUpPage'

import { connect } from 'react-redux'
import { chackUserSession, setCurrentUser } from './Redux/user/user-actions'
import { selectCurrentUser } from './Redux/user/user-selektor'
import { createStructuredSelector } from 'reselect'
import ChekoutPage from './Pages/Checkout/Checkout'

const App = ({ chackUserSession }) => {

  useEffect(() => {
    chackUserSession()
  },[chackUserSession])



  return (
    <div >
      <Header />
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInSignUpPage />)} />
        <Route exact path='/chackout' component={ChekoutPage} />
        <Route path='/' component={HomePage} />

      </Switch>
    </div>
  )

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  chackUserSession: () => dispatch(chackUserSession()),
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
