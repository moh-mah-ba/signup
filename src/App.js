
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import UsersList from './components/userslist/UsersList'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <button>
          <NavLink activeClassName="selected" to="/signupform">Add New User</NavLink>
        </button>
        <button>
          <NavLink exact activeClassName="selected" to="/userslist">Show Users List</NavLink>
        </button>
      </div>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect  to="/userslist" />
          </Route>
          <Route path="/userslist">
            <UsersList />
          </Route>
          <Route path="/signupform">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
