import React from "react"
import { Switch, Route } from "react-router-dom"

import Layout from "../components/layout"
import Dashboard from "../Pages/Dashboard/dashboard"
import Explorer from '../Pages/Dashboard/Explorer'
import Leaderboard from "../Pages/Dashboard/leaderboard"
import Investments from "../Pages/Dashboard/Investment"
import Userprofile from "../Pages/Dashboard/userProfile"
function DrewerRouters (props) {
  
  const title = "Dashboard Templete";
  const menuItems = [
    { path:"", title: "Dashboard", icon: "dashboard" },
    { path:"explorer", title: "Explorer", icon: "web"},
    { path:"leaderboard", title: "Leaderboard", icon: "emoji_events"},
    { path:"investments", title: "Investments", icon: "monetization_on"},
    { path:"userprofile", title: "Userprofile", icon: "person"},
  ];

  return (
      <Layout title={title} menuItems={menuItems} logOut={props.logOut}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/explorer" component={Explorer} />
          <Route exact path="/dashboard/leaderboard" component={Leaderboard} />
          <Route exact path="/dashboard/investments" component={Investments} />
          <Route exact path="/dashboard/userprofile" component={Userprofile} />
        </Switch>
      </Layout>
  )
}

export default DrewerRouters ;
