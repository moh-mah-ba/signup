import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import UsersList from './components/userslist/UsersList';
import UsersDetails from './components/usersdetailspage/UsersDetails'
import Caluclator from './calculator/Calculator'

function App() {
  return (
    <BrowserRouter>
      <div className="nav-app">
        
          <NavLink className="nav-app-link" activeClassName="selected" to="/signupform">Add New User</NavLink>

          <NavLink exact className="nav-app-link" activeClassName="selected" to="/userslist">Show Users List</NavLink>
          
          <NavLink exact className="nav-app-link" activeClassName="selected" to="/calculator">Calculator</NavLink>
       
      </div>
      <div className="App">
        <Switch>
          <Route exact path="/signup">
            <Redirect  to="/userslist" />
          </Route>
          <Route path="/userslist">
            <UsersList />
          </Route>
          <Route path="/signupform">
            <SignUp />
          </Route>
          <Route path='/user/:title'>
            <UsersDetails />
          </Route>
          <Route path='/calculator'>
          <Caluclator />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
