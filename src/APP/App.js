
import React, { Component, Suspense, lazy  } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Loader from '../components/loader'
import Theme from '../Helpers/Theme'
import Error from '../Pages/Error/404'
import Explorer from '../Pages/General/Explorer'
import Leaderboard from "../Pages/General/leaderboard"
import UserAction from "../Pages/verificationSteps/userAction"
import TokenDetails from "../components/tokenDetails"
const Login = lazy(() => import ('../Pages/Auth/login'));
const Signup = lazy(() => import ('../Pages/Auth/signup'));
const DashRoute = lazy(() => import ('./route'));
const title = "Yalla Give"
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
        <Route exact path="/" component={Explorer} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <Route exact path="/tokenDetails" component={TokenDetails} />
        <Route exact path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/useraction" component={UserAction } />
        <Route path="/dashboard" render={props => <DashRoute {...props} logOut={this.logOut} />} />
        <Route component={Error} />
      </Switch>
 
    )
    : (
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} logIn={this.logIn} />} />
        <Route path="/signup" component={Signup} />
        <Route component={Error} />
      </Switch>
    )
  //  : (
  //     <Switch>
  //     <Route exact path="/login" component={Login} />
  //     <Route path="/signup" component={Signup} />
  //     <Route component={Error} />
  //   </Switch>
  //   )
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