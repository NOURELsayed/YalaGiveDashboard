import React, { Component, Suspense, lazy  } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Loader from '../components/loader'
import Theme from '../Helpers/Theme'

import Error from '../Pages/Error/404'
// import VerificationSteps from "../Pages/verificationSteps/verification"
import UserAction from "../Pages/verificationSteps/userAction"

const Login = lazy(() => import ('../Pages/Auth/login'));
const Signup = lazy(() => import ('../Pages/Auth/signup'));
const DashRoute = lazy(() => import ('./route'));

class App extends Component {

  state = {
    isAuth: false
  }
  componentDidMount() {
    if(localStorage.getItem('token')) this.setState({isAuth: true})
  }
  logIn = () => {
    this.setState({isAuth: true})
  }
  logOut = () => {
    this.setState({isAuth: false})
  }
 
  render() { 
    console.log(this.state);
    
    const routes = this.state.isAuth 
    ? ( 
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/userAction" component={UserAction } />
        {/* <Route path="/verificationSteps" component={VerificationSteps} /> */}
        <Route path="/dashboard" render={props => <DashRoute {...props} logOut={this.logOut} />} />
        <Route component={Error} />
      </Switch>
    )
    : (
      <Switch>
        <Route exact path="/" render={props => <Login {...props} logIn={this.logIn} />} />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    );
    return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <Router>
          {routes}
        </Router>
      </Theme>
    </Suspense>
  );
}
}

export default App;