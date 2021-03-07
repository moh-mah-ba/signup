
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import SignUp from './components/signup/SignUp';
import UsersList from './components/userslist/UsersList'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <button>
          <Link to="/signup">Add New User</Link>
        </button>
        <button>
          <Link to="/userlist">Show Users List</Link>
        </button>
      </div>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {/* <UsersList /> */}
          </Route>
          <Route path="/userlist">
            <UsersList />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
