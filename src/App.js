import React from 'react'
import './App.css'
import HomePage from './Pages/Homepage/Homepage'
import { Redirect, Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInSignUpPage from './Pages/SignInPage/SignInSignUpPage'
import { auth, createUserProfileDocument } from './Firebase/firebase'
import {connect} from 'react-redux'
import {setCurrentUser} from './Redux/user/user-actions'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth => {
      
      
      if (userAuth)  {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth)  
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' render= { ()=> this.props.currentUser? (<Redirect to ='/'/>) : (<SignInSignUpPage/>) } />
          <Route path='/' component={HomePage} />

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
}
  
)
export default connect(mapStateToProps,mapDispatchToProps)(App);
