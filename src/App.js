import React from 'react'
import './App.css'
import HomePage from './Pages/Homepage/Homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInSignUpPage from './Pages/SignInPage/SignInSignUpPage'
import { auth } from './Firebase/firebase'


class App extends React.Component {

  constructor() {
      super()

      this.state = {
        currentUser: null
      }
    }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header currentUser= {this.state.currentUser} />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
          <Route path='/' component={HomePage} />

        </Switch>
      </div>
    )
  }
}

export default App;
