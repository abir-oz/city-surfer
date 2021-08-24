
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Destination from './Components/Destintion/Destination';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const CitySurferContext = createContext();

function App() {


  const [loggedInUser, setLoggedInUser] = useState({});

  console.log(loggedInUser);

  return (
    <CitySurferContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>


          <PrivateRoute path="/destination/:vehicle">
            <Destination />
          </PrivateRoute>
         

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </CitySurferContext.Provider>

  );
}

export default App;
