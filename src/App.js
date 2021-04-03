import './App.css'
import HomePage from './Pages/Homepage/Homepage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './Pages/ShopPage/ShopPage'


function App() {
  return (
    <div >
      <Switch>
        <Route path='/shop' component={ShopPage} />   
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
