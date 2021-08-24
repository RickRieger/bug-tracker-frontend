import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Nav from './components/Nav/Nav';
import SideNav from './components/SideNav/SideNav';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import CreateProject from './components/CreateProject/CreateProject';

import Dashboard from './components/Dashboard/Dashboard';

function MainRouter() {
  return (
    <Router>
      <Nav />
      <div style={{ display: 'flex' }}>
        <SideNav />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-project' component={CreateProject} />
      </div>
      <Route exact path='/' component={Home} />
      <Route exact path='/sign-up' component={Signup} />
      <Route exact path='/login' component={Login} />
    </Router>
  );
}

export default MainRouter;
