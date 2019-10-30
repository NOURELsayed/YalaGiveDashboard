import React, { Component, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Loader from '../components/loader'
import Theme from '../Helpers/Theme'

import Error from '../Pages/Error/404'
import UserAction from "../Pages/verificationSteps/userAction"
import Login from "../Pages/Auth/login"
import Signup from "../Pages/Auth/signup"
import DashRoute from "../APP/route"

class App extends Component {

  render() { 

    return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/useraction" component={UserAction} />
        <Route path="/dashboard" render={props => <DashRoute {...props} logOut={this.logOut} />} />
        <Route component={Error} />
      </Switch>
        </Router>
      </Theme>
    </Suspense>
  );
}
}

export default App;