import './App.css'
import HomePage from './Pages/Homepage/Homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'
import Header from './Components/Header/Header'
import SignInSignUpPage from './Pages/SignInPage/SignInSignUpPage'


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />   
        <Route path='/' component={HomePage} />
        
      </Switch>
    </div>
  );
}

export default App;
